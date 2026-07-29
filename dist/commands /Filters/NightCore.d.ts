import { Command, type Context, type Client } from '../../structures/index.js';
export default class NightCore extends Command {
    constructor(client: Client);
    run(client: Client, ctx: Context): Promise<any>;
}
