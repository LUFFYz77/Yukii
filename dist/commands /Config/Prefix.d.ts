import { Command, type Context, type Client } from '../../structures/index';
export default class Prefix extends Command {
    constructor(client: Client);
    run(client: Client, ctx: Context, args: string[]): Promise<any>;
}
