import { Command, type Context, type Client } from '../../structures/index.js';
export default class Rotation extends Command {
    constructor(client: Client);
    run(client: Client, ctx: Context): Promise<any>;
}
