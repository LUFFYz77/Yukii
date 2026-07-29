"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../structures/index");
class TrackEnd extends index_1.Event {
    constructor(client, file) {
        super(client, file, {
            name: 'trackEnd',
        });
    }
    async run(player, _track, _payload) {
        const guild = this.client.guilds.cache.get(player.guildId);
        if (!guild)
            return;
        const messageId = player.get('messageId');
        if (!messageId)
            return;
        const channel = guild.channels.cache.get(player.textChannelId);
        if (!channel)
            return;
        const message = await channel.messages.fetch(messageId).catch(() => {
            null;
        });
        if (!message)
            return;
        message.delete().catch(() => {
            null;
        });
    }
}
exports.default = TrackEnd;
