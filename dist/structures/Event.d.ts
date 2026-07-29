import type { ButtonInteraction, ClientEvents, Message } from 'discord.js';
import type { LavalinkManagerEvents, NodeManagerEvents } from 'lavalink-client';
import type Client from './Client';
interface CustomClientEvents {
    setupSystem: (message: Message) => void;
    setupButtons: (interaction: ButtonInteraction) => void;
}
export type AllEvents = LavalinkManagerEvents & NodeManagerEvents & ClientEvents & CustomClientEvents;
interface EventOptions {
    name: keyof AllEvents;
    one?: boolean;
}
export default class Event {
    client: Client;
    one: boolean;
    file: string;
    name: keyof AllEvents;
    fileName: string;
    constructor(client: Client, file: string, options: EventOptions);
    run(..._args: any): Promise<void>;
}
export {};
