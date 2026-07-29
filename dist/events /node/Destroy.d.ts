import type { DestroyReasonsType, LavalinkNode } from 'lavalink-client';
import { Event, type Client } from '../../structures/index';
export default class Destroy extends Event {
    constructor(client: Client, file: string);
    run(node: LavalinkNode, destroyReason?: DestroyReasonsType): Promise<void>;
}
