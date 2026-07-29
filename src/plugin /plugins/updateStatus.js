"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var updateStatusPlugin = {
    name: 'Update Status Plugin',
    version: '1.0.0',
    author: 'Appu',
    initialize: function (client) {
        client.on('ready', function () { return client.utils.updateStatus(client); });
    },
};
exports.default = updateStatusPlugin;
