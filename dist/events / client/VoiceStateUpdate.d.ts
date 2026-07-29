import { type VoiceState } from 'discord.js';
import { Event, type Client } from '../../structures/index';
export default class VoiceStateUpdate extends Event {
    constructor(client: Client, file: string);
    run(oldState: VoiceState, newState: VoiceState): Promise<any>;
    handale: {
        join(newState: VoiceState, client: Client): Promise<void>;
        leave(newState: VoiceState, client: Client): Promise<void>;
        move(newState: VoiceState, client: Client): Promise<void>;
    };
}
