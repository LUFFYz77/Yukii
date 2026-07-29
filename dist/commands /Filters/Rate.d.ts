import { Command, type Context, type Client } from '../../structures/index.js';
export default class Rate extends Command {
    constructor(client: Client);
    run(client: Client, ctx: Context, args: string[]): Promise<any>;
}
