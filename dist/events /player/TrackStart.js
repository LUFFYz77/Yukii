"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkDj = checkDj;
const discord_js_1 = require("discord.js");
const I18n_1 = require("../../structures/I18n");
const index_1 = require("../../structures/index");
const SetupSystem_1 = require("../../utils/SetupSystem");
class TrackStart extends index_1.Event {
    constructor(client, file) {
        super(client, file, {
            name: 'trackStart',
        });
    }
    async run(player, track, _payload) {
        const guild = this.client.guilds.cache.get(player.guildId);
        if (!guild)
            return;
        if (!player.textChannelId)
            return;
        if (!track)
            return;
        const channel = guild.channels.cache.get(player.textChannelId);
        if (!channel)
            return;
        const locale = await this.client.db.getLanguage(guild.id);
        const embed = this.client.embed()
            .setColor(this.client.color.main)
            .setDescription(`Started playing **[${track.info.title}](${track.info.uri})**`);
        const setup = await this.client.db.getSetup(guild.id);
        if (setup?.textId) {
            const textChannel = guild.channels.cache.get(setup.textId);
            if (textChannel) {
                await (0, SetupSystem_1.trackStart)(setup.messageId, textChannel, player, track, this.client, locale);
            }
        }
        else {
            const message = await channel.send({
                embeds: [embed],
            });
            player.set('messageId', message.id);
            createCollector(message, player, track, embed, this.client, locale);
        }
    }
}
exports.default = TrackStart;
function createButtonRow(player, client) {
    const previousButton = new discord_js_1.ButtonBuilder()
        .setCustomId('previous')
        .setEmoji(client.emoji.previous)
        .setStyle(discord_js_1.ButtonStyle.Secondary)
        .setDisabled(!player.queue.previous);
    const resumeButton = new discord_js_1.ButtonBuilder()
        .setCustomId('resume')
        .setEmoji(player.paused ? client.emoji.resume : client.emoji.pause)
        .setStyle(player.paused ? discord_js_1.ButtonStyle.Success : discord_js_1.ButtonStyle.Secondary);
    const skipButton = new discord_js_1.ButtonBuilder()
        .setCustomId('skip')
        .setEmoji(client.emoji.skip)
        .setStyle(discord_js_1.ButtonStyle.Secondary);
    return new discord_js_1.ActionRowBuilder().addComponents(previousButton, resumeButton, skipButton);
}
function createCollector(message, player, _track, embed, client, locale) {
    const collector = message.createMessageComponentCollector({
        filter: async (b) => {
            if (b.member instanceof discord_js_1.GuildMember) {
                const isSameVoiceChannel = b.guild?.members.me?.voice.channelId === b.member.voice.channelId;
                if (isSameVoiceChannel)
                    return true;
            }
            await b.reply({
                content: (0, I18n_1.T)(locale, 'player.trackStart.not_connected_to_voice_channel', {
                    channel: b.guild?.members.me?.voice.channelId ?? 'None',
                }),
                ephemeral: true,
            });
            return false;
        },
    });
    collector.on('collect', async (interaction) => {
        if (!(await checkDj(client, interaction))) {
            await interaction.reply({
                content: (0, I18n_1.T)(locale, 'player.trackStart.need_dj_role'),
                ephemeral: true,
            });
            return;
        }
        const editMessage = async (text) => {
            if (message) {
                await message.edit({
                    embeds: [
                        embed.setFooter({
                            text,
                            iconURL: interaction.user.avatarURL({}),
                        }),
                    ],
                    components: [createButtonRow(player, client)],
                });
            }
        };
        switch (interaction.customId) {
            case 'previous':
                if (player.queue.previous) {
                    await interaction.deferUpdate();
                    const previousTrack = player.queue.previous[0];
                    player.play({
                        track: previousTrack,
                    });
                    await editMessage((0, I18n_1.T)(locale, 'player.trackStart.previous_by', {
                        user: interaction.user.tag,
                    }));
                }
                else {
                    await interaction.reply({
                        content: (0, I18n_1.T)(locale, 'player.trackStart.no_previous_song'),
                        ephemeral: true,
                    });
                }
                break;
            case 'resume':
                if (player.paused) {
                    player.resume();
                    await interaction.deferUpdate();
                    await editMessage((0, I18n_1.T)(locale, 'player.trackStart.resumed_by', {
                        user: interaction.user.tag,
                    }));
                }
                else {
                    player.pause();
                    await interaction.deferUpdate();
                    await editMessage((0, I18n_1.T)(locale, 'player.trackStart.paused_by', {
                        user: interaction.user.tag,
                    }));
                }
                break;
            case 'stop': {
                player.stopPlaying(true, false);
                await interaction.deferUpdate();
                break;
            }
            case 'skip':
                if (player.queue.tracks.length > 0) {
                    await interaction.deferUpdate();
                    player.skip();
                    await editMessage((0, I18n_1.T)(locale, 'player.trackStart.skipped_by', {
                        user: interaction.user.tag,
                    }));
                }
                else {
                    await interaction.reply({
                        content: (0, I18n_1.T)(locale, 'player.trackStart.no_more_songs_in_queue'),
                        ephemeral: true,
                    });
                }
                break;
            case 'loop': {
                await interaction.deferUpdate();
                switch (player.repeatMode) {
                    case 'off': {
                        player.setRepeatMode('track');
                        await editMessage((0, I18n_1.T)(locale, 'player.trackStart.looping_by', {
                            user: interaction.user.tag,
                        }));
                        break;
                    }
                    case 'track': {
                        player.setRepeatMode('queue');
                        await editMessage((0, I18n_1.T)(locale, 'player.trackStart.looping_queue_by', {
                            user: interaction.user.tag,
                        }));
                        break;
                    }
                    case 'queue': {
                        player.setRepeatMode('off');
                        await editMessage((0, I18n_1.T)(locale, 'player.trackStart.looping_off_by', {
                            user: interaction.user.tag,
                        }));
                        break;
                    }
                }
                break;
            }
        }
    });
}
async function checkDj(client, interaction) {
    const dj = await client.db.getDj(interaction.guildId);
    if (dj?.mode) {
        const djRole = await client.db.getRoles(interaction.guildId);
        if (!djRole)
            return false;
        const hasDjRole = interaction.member.roles.cache.some(role => djRole.map(r => r.roleId).includes(role.id));
        if (!(hasDjRole || interaction.member.permissions.has(discord_js_1.PermissionFlagsBits.ManageGuild))) {
            return false;
        }
    }
    return true;
}
