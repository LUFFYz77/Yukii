import { Command, type Context, type Client } from '../../structures/index';
export default class Autoplay extends Command {
    constructor(client: Client);
    run(client: Client, ctx: Context): Promise<any>;
}
