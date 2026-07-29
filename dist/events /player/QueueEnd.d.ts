import type { Player, Track, TrackStartEvent } from 'lavalink-client';
import { Event, type Client } from '../../structures/index';
export default class QueueEnd extends Event {
    constructor(client: Client, file: string);
    run(player: Player, _track: Track | null, _payload: TrackStartEvent): Promise<void>;
}
