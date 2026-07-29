import { Event, type Client } from '../../structures/index';

export default class Raw extends Event {
	client: Client;

	constructor(client: Client, file: string) {
		super(client, file, {
			name: 'raw',
		});
		this.client = client;
	}

	public async run(d: any): Promise<void> {
		this.client.manager.sendRawData(d);
	}
}

