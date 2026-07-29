"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendLog = sendLog;
function sendLog(client, message, type) {
    if (type === void 0) { type = 'info'; }
    if (!(client === null || client === void 0 ? void 0 : client.channels.cache) && client.env.LOG_CHANNEL_ID)
        return;
    var channel = client.channels.cache.get(client.env.LOG_CHANNEL_ID);
    if (!channel)
        return;
    var colors = {
        error: 0xff0000,
        warn: 0xffff00,
        info: 0x00ff00,
        success: 0x00ff00,
    };
    var color = colors[type];
    var embed = client.embed().setColor(color).setDescription(message).setTimestamp();
    channel.send({ embeds: [embed] }).catch(function () {
        null;
    });
}
