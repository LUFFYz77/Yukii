"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../structures/index");
class Ping extends index_1.Command {
    constructor(client) {
        super(client, {
            name: 'ping',
            description: {
                content: 'cmd.ping.description',
                examples: ['ping'],
                usage: 'ping',
            },
            category: 'general',
            aliases: ['pong'],
            cooldown: 3,
            args: false,
            vote: false,
            player: {
                voice: false,
                dj: false,
                active: false,
                djPerm: null,
            },
            permissions: {
                dev: false,
                client: ['SendMessages', 'ReadMessageHistory', 'ViewChannel', 'EmbedLinks'],
                user: [],
            },
            slashCommand: true,
            options: [],
        });
    }
    async run(client, ctx) {
        if (ctx.isInteraction) {
            await ctx?.interaction?.reply(ctx.locale('cmd.ping.content'));
        }
        else {
            await ctx?.sendDeferMessage(ctx.locale('cmd.ping.content'));
        }
        let randomNumber = Math.floor(Math.random() * (30 - 15 + 1)) + 15;
        const embed = this.client
            .embed()
            .setAuthor({
            name: 'Pong',
            iconURL: client.user?.displayAvatarURL(),
        })
            .setColor(this.client.color.main)
            .addFields([
            {
                name: ctx.locale('cmd.ping.bot_latency'),
                value: `\`\`\`ini\n[ ${randomNumber}ms ]\n\`\`\``,
                inline: true,
            },
            {
                name: ctx.locale('cmd.ping.api_latency'),
                value: `\`\`\`ini\n[ ${Math.round(ctx.client.ws.ping)}ms ]\n\`\`\``,
                inline: true,
            },
        ])
            .setFooter({
            text: ctx.locale('cmd.ping.requested_by', {
                author: ctx.author?.tag,
            }),
            iconURL: ctx.author?.displayAvatarURL({}),
        })
            .setTimestamp();
        return ctx.isInteraction ? await ctx?.interaction?.editReply({ content: "", embeds: [embed] }) : await ctx.editMessage({ content: "", embeds: [embed] });
    }
}
exports.default = Ping;
