import { Event, type Client } from '../../structures/index';
export default class Ready extends Event {
    constructor(client: Client, file: string);
    run(): Promise<void>;
}
