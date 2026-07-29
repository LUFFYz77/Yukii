import { Command, type Context, type Client } from '../../structures/index';
export default class ListAllOwners extends Command {
    constructor(client: Client);
    run(_client: Client, ctx: Context, _args: string[]): Promise<any>;
}
