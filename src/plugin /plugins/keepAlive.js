"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_http_1 = require("node:http");
var env_1 = require("../../env");
var keepAlive = {
    name: 'KeepAlive Plugin',
    version: '1.0.0',
    author: 'Appu',
    initialize: function (client) {
        if (env_1.env.KEEP_ALIVE) {
            var server = node_http_1.default.createServer(function (_req, res) {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end("I'm alive! Currently serving ".concat(client.guilds.cache.size, " guilds."));
            });
            server.listen(3000, function () {
                client.logger.info('Keep-Alive server is running on port 3000');
            });
        }
    },
};
exports.default = keepAlive;
