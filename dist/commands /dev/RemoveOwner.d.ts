import { Command, type Context, type Client } from '../../structures/index';
export default class RemoveOwner extends Command {
    constructor(client: Client);
    run(_client: Client, ctx: Context, args: string[]): Promise<any>;
}
