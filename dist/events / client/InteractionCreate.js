"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const I18n_1 = require("../../structures/I18n");
const index_1 = require("../../structures/index");
class InteractionCreate extends index_1.Event {
    constructor(client, file) {
        super(client, file, {
            name: "interactionCreate",
        });
    }
    async run(interaction) {
        if (!(interaction.guild && interaction.guildId))
            return;
        if (interaction.type === discord_js_1.InteractionType.ApplicationCommandAutocomplete) {
            const command = this.client.commands.get(interaction.commandName);
            if (!command)
                return;
            try {
                await command.autocomplete(interaction);
            }
            catch (error) {
                this.client.logger.error(error);
            }
            return;
        }
        if (interaction instanceof discord_js_1.CommandInteraction &&
            interaction.isChatInputCommand()) {
            if (interaction instanceof discord_js_1.CommandInteraction &&
                interaction.isCommand()) {
                const setup = await this.client.db.getSetup(interaction.guildId);
                const allowedCategories = ["filters", "music", "playlist"];
                const commandInSetup = this.client.commands.get(interaction.commandName);
                const locale = await this.client.db.getLanguage(interaction.guildId);
                if (setup &&
                    interaction.channelId === setup.textId &&
                    !(commandInSetup &&
                        allowedCategories.includes(commandInSetup.category))) {
                    return await interaction.reply({
                        content: (0, I18n_1.T)(locale, "event.interaction.setup_channel"),
                        ephemeral: true,
                    });
                }
                const { commandName } = interaction;
                await this.client.db.get(interaction.guildId);
                const command = this.client.commands.get(commandName);
                if (!command)
                    return;
                const chatInteraction = interaction;
                const ctx = new index_1.Context(chatInteraction, chatInteraction.options.data);
                ctx.setArgs(chatInteraction.options.data);
                ctx.guildLocale = locale;
                ctx.guildLocale = locale;
                const clientMember = interaction.guild.members.resolve(this.client.user);
                if (!(interaction.inGuild() &&
                    interaction.channel
                        ?.permissionsFor(clientMember)
                        ?.has(discord_js_1.PermissionFlagsBits.ViewChannel)))
                    return;
                if (!(clientMember.permissions.has(discord_js_1.PermissionFlagsBits.ViewChannel) &&
                    clientMember.permissions.has(discord_js_1.PermissionFlagsBits.SendMessages) &&
                    clientMember.permissions.has(discord_js_1.PermissionFlagsBits.EmbedLinks) &&
                    clientMember.permissions.has(discord_js_1.PermissionFlagsBits.ReadMessageHistory))) {
                    return await interaction.member
                        .send({
                        content: (0, I18n_1.T)(locale, "event.interaction.no_send_message"),
                    })
                        .catch(() => {
                        null;
                    });
                }
                const logs = this.client.channels.cache.get(this.client.env.LOG_COMMANDS_ID);
                if (command.permissions) {
                    if (command.permissions?.client) {
                        const missingClientPermissions = command.permissions.client.filter((perm) => !clientMember.permissions.has(perm));
                        if (missingClientPermissions.length > 0) {
                            return await interaction.reply({
                                content: (0, I18n_1.T)(locale, "event.interaction.no_permission", {
                                    permissions: missingClientPermissions
                                        .map((perm) => `\`${perm}\``)
                                        .join(", "),
                                }),
                                ephemeral: true,
                            });
                        }
                    }
                    if (command.permissions?.user &&
                        !interaction.member.permissions.has(command.permissions.user)) {
                        await interaction.reply({
                            content: (0, I18n_1.T)(locale, "event.interaction.no_user_permission"),
                            ephemeral: true,
                        });
                        return;
                    }
                    if (command.permissions?.dev && this.client.env.OWNER_IDS) {
                        const isDev = this.client.env.OWNER_IDS.includes(interaction.user.id);
                        if (!isDev)
                            return;
                    }
                }
                if (command.vote && this.client.env.TOPGG) {
                    const voted = await this.client.topGG.hasVoted(interaction.user.id);
                    if (!voted) {
                        const voteBtn = new discord_js_1.ActionRowBuilder().addComponents(new discord_js_1.ButtonBuilder()
                            .setLabel((0, I18n_1.T)(locale, "event.interaction.vote_button"))
                            .setURL(`https://top.gg/bot/${this.client.user?.id}/vote`)
                            .setStyle(discord_js_1.ButtonStyle.Link));
                        return await interaction.reply({
                            content: (0, I18n_1.T)(locale, "event.interaction.vote_message"),
                            components: [voteBtn],
                            ephemeral: true,
                        });
                    }
                }
                if (command.player) {
                    if (command.player.voice) {
                        if (!interaction.member.voice.channel) {
                            return await interaction.reply({
                                content: (0, I18n_1.T)(locale, "event.interaction.no_voice_channel", {
                                    command: command.name,
                                }),
                            });
                        }
                        if (!clientMember.permissions.has(discord_js_1.PermissionFlagsBits.Connect)) {
                            return await interaction.reply({
                                content: (0, I18n_1.T)(locale, "event.interaction.no_connect_permission", {
                                    command: command.name,
                                }),
                            });
                        }
                        if (!clientMember.permissions.has(discord_js_1.PermissionFlagsBits.Speak)) {
                            return await interaction.reply({
                                content: (0, I18n_1.T)(locale, "event.interaction.no_speak_permission", {
                                    command: command.name,
                                }),
                            });
                        }
                        if (interaction.member.voice.channel?.type ===
                            discord_js_1.ChannelType.GuildStageVoice &&
                            !clientMember.permissions.has(discord_js_1.PermissionFlagsBits.RequestToSpeak)) {
                            return await interaction.reply({
                                content: (0, I18n_1.T)(locale, "event.interaction.no_request_to_speak", {
                                    command: command.name,
                                }),
                            });
                        }
                        if (clientMember.voice.channel &&
                            clientMember.voice.channelId !==
                                interaction.member.voice.channelId) {
                            return await interaction.reply({
                                content: (0, I18n_1.T)(locale, "event.interaction.different_voice_channel", {
                                    channel: `<#${clientMember.voice.channelId}>`,
                                    command: command.name,
                                }),
                            });
                        }
                    }
                    if (command.player.active) {
                        const queue = this.client.manager.getPlayer(interaction.guildId);
                        if (!queue?.queue.current) {
                            return await interaction.reply({
                                content: (0, I18n_1.T)(locale, "event.interaction.no_music_playing"),
                            });
                        }
                    }
                    if (command.player.dj) {
                        const dj = await this.client.db.getDj(interaction.guildId);
                        if (dj?.mode) {
                            const djRole = await this.client.db.getRoles(interaction.guildId);
                            if (!djRole) {
                                return await interaction.reply({
                                    content: (0, I18n_1.T)(locale, "event.interaction.no_dj_role"),
                                });
                            }
                            const hasDJRole = interaction.member.roles.cache.some((role) => djRole.map((r) => r.roleId).includes(role.id));
                            if (!(hasDJRole &&
                                !interaction.member.permissions.has(discord_js_1.PermissionFlagsBits.ManageGuild))) {
                                return await interaction.reply({
                                    content: (0, I18n_1.T)(locale, "event.interaction.no_dj_permission"),
                                    ephemeral: true,
                                });
                            }
                        }
                    }
                }
                if (!this.client.cooldown.has(commandName)) {
                    this.client.cooldown.set(commandName, new discord_js_1.Collection());
                }
                const now = Date.now();
                const timestamps = this.client.cooldown.get(commandName);
                const cooldownAmount = (command.cooldown || 5) * 1000;
                if (timestamps.has(interaction.user.id)) {
                    const expirationTime = timestamps.get(interaction.user.id) + cooldownAmount;
                    const timeLeft = (expirationTime - now) / 1000;
                    if (now < expirationTime && timeLeft > 0.9) {
                        return await interaction.reply({
                            content: (0, I18n_1.T)(locale, "event.interaction.cooldown", {
                                time: timeLeft.toFixed(1),
                                command: commandName,
                            }),
                        });
                    }
                    timestamps.set(interaction.user.id, now);
                    setTimeout(() => timestamps.delete(interaction.user.id), cooldownAmount);
                }
                else {
                    timestamps.set(interaction.user.id, now);
                    setTimeout(() => timestamps.delete(interaction.user.id), cooldownAmount);
                }
                try {
                    await command.run(this.client, ctx, ctx.args);
                    if (setup &&
                        interaction.channelId === setup.textId &&
                        allowedCategories.includes(command.category)) {
                        setTimeout(() => {
                            interaction.deleteReply().catch(() => {
                                null;
                            });
                        }, 5000);
                    }
                    if (logs) {
                        const embed = new discord_js_1.EmbedBuilder()
                            .setAuthor({
                            name: "Slash - Command Logs",
                            iconURL: this.client.user?.avatarURL({ size: 2048 }),
                        })
                            .setColor(this.client.config.color.blue)
                            .addFields({
                            name: "Command",
                            value: `\`${command.name}\``,
                            inline: true,
                        });
                        await logs.send({ embeds: [embed] });
                    }
                }
                catch (error) {
                    this.client.logger.error(error);
                    await interaction.reply({
                        content: (0, I18n_1.T)(locale, "event.interaction.error", { error }),
                    });
                }
            }
        }
    }
}
exports.default = InteractionCreate;
