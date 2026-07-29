import type { AutocompleteInteraction } from 'discord.js';
import { Command, type Context, type Client } from '../../structures/index';
export default class LoadPlaylist extends Command {
    constructor(client: Client);
    run(client: Client, ctx: Context, args: string[]): Promise<any>;
    autocomplete(interaction: AutocompleteInteraction): Promise<void>;
}
