import { Event, type Client } from '../../structures/index';
export default class SetupButtons extends Event {
    constructor(client: Client, file: string);
    run(interaction: any): Promise<void>;
}
