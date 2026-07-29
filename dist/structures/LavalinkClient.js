"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lavalink_client_1 = require("lavalink-client");
const player_1 = require("../utils/functions/player");
class LavalinkClient extends lavalink_client_1.LavalinkManager {
    client;
    constructor(client) {
        super({
            nodes: client.env.NODES,
            sendToShard: (guildId, payload) => client.guilds.cache.get(guildId)?.shard?.send(payload),
            queueOptions: {
                maxPreviousTracks: 25,
            },
            playerOptions: {
                defaultSearchPlatform: client.env.SEARCH_ENGINE,
                onDisconnect: {
                    autoReconnect: true,
                    destroyPlayer: false,
                },
                requesterTransformer: player_1.requesterTransformer,
                onEmptyQueue: {
                    autoPlayFunction: player_1.autoPlayFunction,
                },
            },
        });
        this.client = client;
    }
    async search(query, user, source) {
        const nodes = this.nodeManager.leastUsedNodes();
        const node = nodes[Math.floor(Math.random() * nodes.length)];
        return await node.search({ query, source }, user, false);
    }
}
exports.default = LavalinkClient;
