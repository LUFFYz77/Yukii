import { type AutocompleteInteraction, CommandInteraction } from "discord.js";
import { Event, type Client } from "../../structures/index";
export default class InteractionCreate extends Event {
    constructor(client: Client, file: string);
    run(interaction: CommandInteraction | AutocompleteInteraction): Promise<any>;
}
