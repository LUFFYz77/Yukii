import type { AutocompleteInteraction } from 'discord.js';
import { Command, type Context, type Client } from '../../structures/index';
export default class StealPlaylist extends Command {
    constructor(client: Client);
    run(client: Client, ctx: Context): Promise<any>;
    autocomplete(interaction: AutocompleteInteraction): Promise<void>;
}
