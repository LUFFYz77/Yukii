import { Command, type Context, type Client } from '../../structures/index';
export default class Deploy extends Command {
    constructor(client: Client);
    run(client: Client, ctx: Context, _args: string[]): Promise<any>;
}
