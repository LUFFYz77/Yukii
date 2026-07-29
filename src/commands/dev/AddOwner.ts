import { Command, type Context, type Client } from '../../structures/index';

export default class AddOwner extends Command {
    constructor(client: Client) {
        super(client, {
            name: 'addowner',
            description: {
                content: 'Add an owner to bot',
                examples: ['addowner <userId>'],
                usage: 'addowner <userId>',
            },
            category: 'dev',
            aliases: ['ao', 'addbotowner'], // Changed duplicate 'addowner' alias to 'addbotowner'
            cooldown: 3,
            args: true,
            player: {
                voice: false,
                dj: false,
                active: false,
                djPerm: null,
            },
            permissions: {
                dev: true, // Restrict to developers only
                client: ['SendMessages', 'EmbedLinks', 'ViewChannel'],
                user: [],
            },
            slashCommand: false,
            options: [],
        });
    }

    public async run(_client: Client, ctx: Context, args: string[]): Promise<any> {
        // Extract the ownerId from args[0] (could be a mention or raw ID)
        let ownerId = args[0];

        // If it's a mention (e.g., <@123456789>), extract the ID
        if (ownerId.startsWith('<@') && ownerId.endsWith('>')) {
            ownerId = ownerId.replace(/[<@!>]/g, ''); // Remove <@ and >, ! for nickname mentions
        }

        // Validate that ownerId is provided and looks like a valid ID
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
        } catch (error: any) {
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