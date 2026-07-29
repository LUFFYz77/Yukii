"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../structures/index");
class AddOwner extends index_1.Command {
    constructor(client) {
        super(client, {
            name: 'addowner',
            description: {
                content: 'Add an owner to bot',
                examples: ['addowner <userId>'],
                usage: 'addowner <userId>',
            },
            category: 'dev',
            aliases: ['ao', 'addbotowner'],
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
                        .setDescription('Please provide a valid user ID (e.g., addowner 123456789)'),
                ],
            });
        }
        try {
            await this.client.db.addOwner(ownerId);
            return await ctx.sendMessage({
                embeds: [
                    this.client.embed()
                        .setColor(this.client.color.main)
                        .setDescription(`Successfully added <@${ownerId}> as an owner of bot`),
                ],
            });
        }
        catch (error) {
            return await ctx.sendMessage({
                embeds: [
                    this.client.embed()
                        .setColor(this.client.color.red)
                        .setDescription(error.message || 'An error occurred while adding the owner'),
                ],
            });
        }
    }
}
exports.default = AddOwner;
