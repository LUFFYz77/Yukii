import { type Guild } from 'discord.js';
import { Event, type Client } from '../../structures/index';
export default class GuildCreate extends Event {
    constructor(client: Client, file: string);
    run(guild: Guild): Promise<void>;
}
