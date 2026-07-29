import { Command, type Context, type Client } from '../../structures/index.js';
export default class Speed extends Command {
    constructor(client: Client);
    run(client: Client, ctx: Context, args: string[]): Promise<any>;
}
