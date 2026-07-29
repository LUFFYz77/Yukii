import type { LavalinkNode } from 'lavalink-client';
import { Event, type Client } from '../../structures/index';
export default class Connect extends Event {
    constructor(client: Client, file: string);
    run(node: LavalinkNode): Promise<void>;
}
