import { Event, type Client } from '../../structures/index';
export default class ChannelDelete extends Event {
    constructor(client: Client, file: string);
    run(channel: any): Promise<void>;
}
