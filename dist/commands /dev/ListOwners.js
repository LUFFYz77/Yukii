"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../structures/index");
class ListAllOwners extends index_1.Command {
    constructor(client) {
        super(client, {
            name: 'listallowners',
            description: {
                content: 'Display all owners across all bots',
                examples: ['listallowners'],
                usage: 'listallowners',
            },
            category: 'dev',
            aliases: ['lo', 'allowners'],
            cooldown: 3,
            args: false,
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
    async run(_client, ctx, _args) {
        try {
            const owners = await this.client.db.getAllOwners();
            if (owners.length === 0) {
                return await ctx.sendMessage({
                    embeds: [this.client.embed()
                            .setColor(this.client.color.main)
                            .setDescription('No owners found in the database')]
                });
            }
            const description = owners.map((owner, index) => `${index + 1}. <@${owner.ownerId}>`).join('\n\n');
            return await ctx.sendMessage({
                embeds: [this.client.embed()
                        .setColor(this.client.color.main)
                        .setTitle('All Owners Across')
                        .setDescription(description || 'No owners')]
            });
        }
        catch (error) {
            return await ctx.sendMessage({
                embeds: [this.client.embed()
                        .setColor(this.client.color.red)
                        .setDescription(error.message || 'An error occurred while fetching all owners')]
            });
        }
    }
}
exports.default = ListAllOwners;
