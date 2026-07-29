"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const updateStatusPlugin = {
    name: 'Update Status Plugin',
    version: '1.0.0',
    author: 'Appu',
    initialize: (client) => {
        client.on('ready', () => client.utils.updateStatus(client));
    },
};
exports.default = updateStatusPlugin;
