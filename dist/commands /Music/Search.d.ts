import { Command, type Context, type Client } from '../../structures/index';
export default class Search extends Command {
    constructor(client: Client);
    run(client: Client, ctx: Context, args: string[]): Promise<any>;
}
