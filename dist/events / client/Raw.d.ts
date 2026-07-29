import { Event, type Client } from '../../structures/index';
export default class Raw extends Event {
    client: Client;
    constructor(client: Client, file: string);
    run(d: any): Promise<void>;
}
