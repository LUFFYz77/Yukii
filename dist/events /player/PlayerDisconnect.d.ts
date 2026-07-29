import type { Player } from 'lavalink-client';
import { Event, type Client } from '../../structures/index';
export default class PlayerDisconnect extends Event {
    constructor(client: Client, file: string);
    run(player: Player, _voiceChannelId: string): Promise<void>;
}
