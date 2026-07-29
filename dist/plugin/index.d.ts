import type { Client } from '../structures/index';
export default function loadPlugins(client: Client): Promise<void>;
export interface BotPlugin {
    name: string;
    version: string;
    author: string;
    description?: string;
    initialize: (client: Client) => void;
    shutdown?: (client: Client) => void;
}
