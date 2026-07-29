"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../structures/index");
class RemoveOwner extends index_1.Command {
    constructor(client) {
        super(client, {
            name: 'removeowner',
            description: {
                content: 'Remove an owner from a bot',
                examples: ['removeowner <userId>'],
                usage: 'removeowner <userId>',
            },
            category: 'dev',
            aliases: ['ro', 'removebotowner'],
            cooldown: 3,
            args: true,
            player: {
                voice: false,
                dj: false,
                active: false,
                djPerm: null,
            },
            permissions: {
                dev: true,
                client: ['SendMessages', 'EmbedLinks', 'ViewChannel'],
                user: [],
            },
            slashCommand: false,
            options: [],
        });
    }
    async run(_client, ctx, args) {
        let ownerId = args[0];
        if (ownerId.startsWith('<@') && ownerId.endsWith('>')) {
            ownerId = ownerId.replace(/[<@!>]/g, '');
        }
        if (!ownerId || !/^\d+$/.test(ownerId)) {
            return await ctx.sendMessage({
                embeds: [
                    this.client.embed()
                        .setColor(this.client.color.red)
                        .setDescription('Please provide a valid user ID (e.g., removeowner 123456789)'),
                ],
            });
        }
        try {
            await this.client.db.removeOwner(ownerId);
            return await ctx.sendMessage({
                embeds: [
                    this.client.embed()
                        .setColor(this.client.color.main)
                        .setDescription(`Successfully removed <@${ownerId}> as an owner of bot`),
                ],
            });
        }
        catch (error) {
            return await ctx.sendMessage({
                embeds: [
                    this.client.embed()
                        .setColor(this.client.color.red)
                        .setDescription(error.message || 'An error occurred while removing the owner'),
                ],
            });
        }
    }
}
exports.default = RemoveOwner;
