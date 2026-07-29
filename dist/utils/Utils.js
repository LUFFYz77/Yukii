"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
const discord_js_1 = require("discord.js");
class Utils {
    static formatTime(ms) {
        const minuteMs = 60 * 1000;
        const hourMs = 60 * minuteMs;
        const dayMs = 24 * hourMs;
        if (ms < minuteMs)
            return `${ms / 1000}s`;
        if (ms < hourMs)
            return `${Math.floor(ms / minuteMs)}m ${Math.floor((ms % minuteMs) / 1000)}s`;
        if (ms < dayMs)
            return `${Math.floor(ms / hourMs)}h ${Math.floor((ms % hourMs) / minuteMs)}m`;
        return `${Math.floor(ms / dayMs)}d ${Math.floor((ms % dayMs) / hourMs)}h`;
    }
    static updateStatus(client, guildId) {
        const { user } = client;
        if (user && client.env.GUILD_ID && guildId === client.env.GUILD_ID) {
            const player = client.manager.getPlayer(client.env.GUILD_ID);
            if (player?.queue?.current) {
                const song = player.queue.current.info;
                const title = song.title;
                const artist = song.author;
                user.setPresence({
                    activities: [
                        {
                            name: `🎶 | ${title}`,
                            state: ` by ${artist}`,
                            type: discord_js_1.ActivityType.Streaming,
                        },
                    ],
                    status: client.env.BOT_STATUS,
                });
            }
            else {
                user.setPresence({
                    activities: [
                        {
                            name: client.env.BOT_ACTIVITY,
                            type: client.env.BOT_ACTIVITY_TYPE,
                        },
                    ],
                    status: client.env.BOT_STATUS,
                });
            }
        }
    }
    static chunk(array, size) {
        const chunked_arr = [];
        for (let index = 0; index < array.length; index += size) {
            chunked_arr.push(array.slice(index, size + index));
        }
        return chunked_arr;
    }
    static formatBytes(bytes, decimals = 2) {
        if (bytes === 0)
            return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return `${Number.parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
    }
    static formatCapitalize(val) {
        const words = val.split('_');
        const CapitalizeWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
        return CapitalizeWords.join(' ');
    }
    static formatUpperCase(val) {
        const words = val.split('_');
        const UpperWords = words.map((word) => word.toUpperCase());
        return UpperWords.join(' ');
    }
    static emojiToImage(emoji) {
        const emojiRegex = /<(a)?:[a-zA-Z0-9_]+:(\d+)>/;
        const match = emoji.match(emojiRegex);
        if (match) {
            const emojiId = match[2];
            const isAnimated = match[1] === 'a';
            return `https://cdn.discordapp.com/emojis/${emojiId}.${isAnimated ? 'gif' : 'png'}`;
        }
        else {
            return null;
        }
    }
    static formatNumber(number) {
        return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }
    static parseTime(string) {
        const time = string.match(/([0-9]+[d,h,m,s])/g);
        if (!time)
            return 0;
        let ms = 0;
        for (const t of time) {
            const unit = t[t.length - 1];
            const amount = Number(t.slice(0, -1));
            if (unit === 'd')
                ms += amount * 24 * 60 * 60 * 1000;
            else if (unit === 'h')
                ms += amount * 60 * 60 * 1000;
            else if (unit === 'm')
                ms += amount * 60 * 1000;
            else if (unit === 's')
                ms += amount * 1000;
        }
        return ms;
    }
    static progressBar(current, total, size = 20) {
        const percent = Math.round((current / total) * 100);
        const filledSize = Math.round((size * current) / total);
        const filledBar = '▓'.repeat(filledSize);
        const emptyBar = '░'.repeat(size - filledSize);
        return `${filledBar}${emptyBar} ${percent}%`;
    }
    static async paginate(client, ctx, embed) {
        if (embed.length < 2) {
            if (ctx.isInteraction) {
                ctx.deferred ? ctx.interaction?.followUp({ embeds: embed }) : ctx.interaction?.reply({ embeds: embed });
                return;
            }
            ctx.channel.send({ embeds: embed });
            return;
        }
        let page = 0;
        const getButton = (page) => {
            const firstEmbed = page === 0;
            const lastEmbed = page === embed.length - 1;
            const pageEmbed = embed[page];
            const first = new discord_js_1.ButtonBuilder()
                .setCustomId('first')
                .setEmoji(client.emoji.page.first)
                .setStyle(discord_js_1.ButtonStyle.Primary)
                .setDisabled(firstEmbed);
            const back = new discord_js_1.ButtonBuilder()
                .setCustomId('back')
                .setEmoji(client.emoji.page.back)
                .setStyle(discord_js_1.ButtonStyle.Primary)
                .setDisabled(firstEmbed);
            const next = new discord_js_1.ButtonBuilder()
                .setCustomId('next')
                .setEmoji(client.emoji.page.next)
                .setStyle(discord_js_1.ButtonStyle.Primary)
                .setDisabled(lastEmbed);
            const last = new discord_js_1.ButtonBuilder()
                .setCustomId('last')
                .setEmoji(client.emoji.page.last)
                .setStyle(discord_js_1.ButtonStyle.Primary)
                .setDisabled(lastEmbed);
            const stop = new discord_js_1.ButtonBuilder()
                .setCustomId('stop')
                .setEmoji(client.emoji.page.cancel)
                .setStyle(discord_js_1.ButtonStyle.Danger);
            const row = new discord_js_1.ActionRowBuilder().addComponents(first, back, stop, next, last);
            return { embeds: [pageEmbed], components: [row] };
        };
        const msgOptions = getButton(0);
        let msg;
        if (ctx.isInteraction) {
            if (ctx.deferred) {
                msg = await ctx.interaction.followUp({
                    ...msgOptions,
                    fetchReply: true,
                });
            }
            else {
                msg = (await ctx.interaction.reply({
                    ...msgOptions,
                    fetchReply: true,
                }));
            }
        }
        else {
            msg = await ctx.channel.send({
                ...msgOptions,
                fetchReply: true,
            });
        }
        const author = ctx instanceof discord_js_1.CommandInteraction ? ctx.user : ctx.author;
        const filter = (int) => int.user.id === author?.id;
        const collector = msg.createMessageComponentCollector({
            filter,
            time: 60000,
        });
        collector.on('collect', async (interaction) => {
            if (interaction.user.id === author?.id) {
                await interaction.deferUpdate();
                if (interaction.customId === 'first' && page !== 0) {
                    page = 0;
                }
                else if (interaction.customId === 'back' && page !== 0) {
                    page--;
                }
                else if (interaction.customId === 'stop') {
                    collector.stop();
                }
                else if (interaction.customId === 'next' && page !== embed.length - 1) {
                    page++;
                }
                else if (interaction.customId === 'last' && page !== embed.length - 1) {
                    page = embed.length - 1;
                }
                await interaction.editReply(getButton(page));
            }
            else {
                await interaction.reply({
                    content: ctx.locale('buttons.errors.not_author'),
                    ephemeral: true,
                });
            }
        });
        collector.on('end', async () => {
            await msg.edit({ embeds: [embed[page]], components: [] });
        });
    }
}
exports.Utils = Utils;
