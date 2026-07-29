import { type Message } from "discord.js";
import { Event, type Client } from "../../structures/index";
export default class MessageCreate extends Event {
    constructor(client: Client, file: string);
    run(message: Message): Promise<any>;
}
