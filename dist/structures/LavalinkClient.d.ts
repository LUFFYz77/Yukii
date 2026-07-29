import { LavalinkManager, type SearchPlatform, type SearchResult } from 'lavalink-client';
import type Client from './Client';
export default class LavalinkClient extends LavalinkManager {
    client: Client;
    constructor(client: Client);
    search(query: string, user: unknown, source?: SearchPlatform): Promise<SearchResult>;
}
