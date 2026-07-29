"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupStart = setupStart;
exports.trackStart = trackStart;
exports.buttonReply = buttonReply;
exports.updateSetup = updateSetup;
exports.oops = oops;
var discord_js_1 = require("discord.js");
var I18n_1 = require("../structures/I18n");
var Buttons_1 = require("./Buttons");
/**
 * A function that will generate an embed based on the player's current track.
 * @param embed The embed that will be modified.
 * @param player The player to get the current track from.
 * @param client The client to get the config from.
 * @param locale The locale to translate the strings.
 * @returns The modified embed.
 */
function neb(embed, player, client, locale) {
    var _a;
    if (!((_a = player === null || player === void 0 ? void 0 : player.queue.current) === null || _a === void 0 ? void 0 : _a.info))
        return embed;
    var iconUrl = client.config.icons[player.queue.current.info.sourceName] || client.user.displayAvatarURL({ extension: 'png' });
    var icon = player.queue.current.info.artworkUrl || client.config.links.img;
    var description = (0, I18n_1.T)(locale, 'player.setupStart.description', {
        title: player.queue.current.info.title,
        uri: player.queue.current.info.uri,
        author: player.queue.current.info.author,
        length: client.utils.formatTime(player.queue.current.info.duration),
        requester: player.queue.current.requester.id,
    });
    return embed
        .setAuthor({
        name: (0, I18n_1.T)(locale, 'player.setupStart.now_playing'),
        iconURL: iconUrl,
    })
        .setDescription(description)
        .setImage(icon)
        .setColor(client.color.main);
}
/**
 * A function that will generate a setup message or edit an existing one
 * with the current song playing.
 * @param client The client to get the config from.
 * @param query The query to search for.
 * @param player The player to get the current track from.
 * @param message The message to edit or send the setup message.
 * @returns A promise that resolves when the function is done.
 */
function setupStart(client, query, player, message) {
    return __awaiter(this, void 0, void 0, function () {
        var m, embed, n, data, locale, error_1, res, _a, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    embed = client.embed();
                    n = client.embed().setColor(client.color.main);
                    return [4 /*yield*/, client.db.getSetup(message.guild.id)];
                case 1:
                    data = _b.sent();
                    return [4 /*yield*/, client.db.getLanguage(message.guildId)];
                case 2:
                    locale = _b.sent();
                    _b.label = 3;
                case 3:
                    _b.trys.push([3, 6, , 7]);
                    if (!data) return [3 /*break*/, 5];
                    return [4 /*yield*/, message.channel.messages.fetch({
                            message: data.messageId,
                            cache: true,
                        })];
                case 4:
                    m = _b.sent();
                    _b.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    error_1 = _b.sent();
                    client.logger.error(error_1);
                    return [3 /*break*/, 7];
                case 7:
                    if (!m) return [3 /*break*/, 22];
                    _b.label = 8;
                case 8:
                    _b.trys.push([8, 21, , 22]);
                    if (!message.inGuild()) return [3 /*break*/, 20];
                    return [4 /*yield*/, player.search(query, message.author)];
                case 9:
                    res = _b.sent();
                    _a = res.loadType;
                    switch (_a) {
                        case 'empty': return [3 /*break*/, 10];
                        case 'error': return [3 /*break*/, 10];
                        case 'search': return [3 /*break*/, 12];
                        case 'track': return [3 /*break*/, 12];
                        case 'playlist': return [3 /*break*/, 15];
                    }
                    return [3 /*break*/, 18];
                case 10: return [4 /*yield*/, message.channel
                        .send({
                        embeds: [
                            embed.setColor(client.color.red).setDescription((0, I18n_1.T)(locale, 'player.setupStart.error_searching')),
                        ],
                    })
                        .then(function (msg) { return setTimeout(function () { return msg.delete(); }, 5000); })];
                case 11:
                    _b.sent();
                    return [3 /*break*/, 18];
                case 12:
                    player.queue.add(res.tracks[0]);
                    return [4 /*yield*/, message.channel
                            .send({
                            embeds: [
                                embed.setColor(client.color.main).setDescription((0, I18n_1.T)(locale, 'player.setupStart.added_to_queue', {
                                    title: res.tracks[0].info.title,
                                    uri: res.tracks[0].info.uri,
                                })),
                            ],
                        })
                            .then(function (msg) { return setTimeout(function () { return msg.delete(); }, 5000); })];
                case 13:
                    _b.sent();
                    neb(n, player, client, locale);
                    return [4 /*yield*/, m.edit({ embeds: [n] }).catch(function () {
                            null;
                        })];
                case 14:
                    _b.sent();
                    return [3 /*break*/, 18];
                case 15:
                    player.queue.add(res.tracks);
                    return [4 /*yield*/, message.channel
                            .send({
                            embeds: [
                                embed
                                    .setColor(client.color.main)
                                    .setDescription((0, I18n_1.T)(locale, 'player.setupStart.added_playlist_to_queue', { length: res.tracks.length })),
                            ],
                        })
                            .then(function (msg) { return setTimeout(function () { return msg.delete(); }, 5000); })];
                case 16:
                    _b.sent();
                    neb(n, player, client, locale);
                    return [4 /*yield*/, m.edit({ embeds: [n] }).catch(function () {
                            null;
                        })];
                case 17:
                    _b.sent();
                    return [3 /*break*/, 18];
                case 18:
                    if (!(!player.playing && player.queue.tracks.length > 0)) return [3 /*break*/, 20];
                    return [4 /*yield*/, player.play()];
                case 19:
                    _b.sent();
                    _b.label = 20;
                case 20: return [3 /*break*/, 22];
                case 21:
                    error_2 = _b.sent();
                    client.logger.error(error_2);
                    return [3 /*break*/, 22];
                case 22: return [2 /*return*/];
            }
        });
    });
}
/**
 * A function that will generate an embed based on the player's current track.
 * @param msgId The message ID of the setup message.
 * @param channel The channel to send the message in.
 * @param player The player to get the current track from.
 * @param track The track to generate the embed for.
 * @param client The client to get the config from.
 * @param locale The locale to translate the strings.
 * @returns A promise that resolves when the function is done.
 */
function trackStart(msgId, channel, player, track, client, locale) {
    return __awaiter(this, void 0, void 0, function () {
        var icon, m, error_3, iconUrl, description, embed;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    icon = player.queue.current ? player.queue.current.info.artworkUrl : client.config.links.img;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, channel.messages.fetch({ message: msgId, cache: true })];
                case 2:
                    m = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    client.logger.npkmerror(error_3);
                    return [3 /*break*/, 4];
                case 4:
                    iconUrl = client.config.icons[player.queue.current.info.sourceName] || client.user.displayAvatarURL({ extension: 'png' });
                    description = (0, I18n_1.T)(locale, 'player.setupStart.description', {
                        title: track.info.title,
                        uri: track.info.uri,
                        author: track.info.author,
                        length: client.utils.formatTime(track.info.duration),
                        requester: player.queue.current.requester.id,
                    });
                    embed = client
                        .embed()
                        .setAuthor({
                        name: (0, I18n_1.T)(locale, 'player.setupStart.now_playing'),
                        iconURL: iconUrl,
                    })
                        .setColor(client.color.main)
                        .setDescription(description)
                        .setImage(icon);
                    if (!m) return [3 /*break*/, 6];
                    return [4 /*yield*/, m
                            .edit({
                            embeds: [embed],
                            components: (0, Buttons_1.getButtons)(player, client).map(function (b) {
                                b.components.forEach(function (c) { return c.setDisabled(!(player === null || player === void 0 ? void 0 : player.queue.current)); });
                                return b;
                            }),
                        })
                            .catch(function () {
                            null;
                        })];
                case 5:
                    _a.sent();
                    return [3 /*break*/, 8];
                case 6: return [4 /*yield*/, channel
                        .send({
                        embeds: [embed],
                        components: (0, Buttons_1.getButtons)(player, client).map(function (b) {
                            b.components.forEach(function (c) { return c.setDisabled(!(player === null || player === void 0 ? void 0 : player.queue.current)); });
                            return b;
                        }),
                    })
                        .then(function (msg) {
                        client.db.setSetup(msg.guild.id, msg.id, msg.channel.id);
                    })
                        .catch(function () {
                        null;
                    })];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8: return [2 /*return*/];
            }
        });
    });
}
function updateSetup(client, guild, locale) {
    return __awaiter(this, void 0, void 0, function () {
        var setup, m, textChannel, error_4, player_1, iconUrl, description, embed, embed;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client.db.getSetup(guild.id)];
                case 1:
                    setup = _a.sent();
                    if (!(setup === null || setup === void 0 ? void 0 : setup.textId)) return [3 /*break*/, 5];
                    textChannel = guild.channels.cache.get(setup.textId);
                    if (!textChannel)
                        return [2 /*return*/];
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, textChannel.messages.fetch({
                            message: setup.messageId,
                            cache: true,
                        })];
                case 3:
                    m = _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    error_4 = _a.sent();
                    client.logger.error(error_4);
                    return [3 /*break*/, 5];
                case 5:
                    if (!m) return [3 /*break*/, 9];
                    player_1 = client.manager.getPlayer(guild.id);
                    if (!(player_1 === null || player_1 === void 0 ? void 0 : player_1.queue.current)) return [3 /*break*/, 7];
                    iconUrl = client.config.icons[player_1.queue.current.info.sourceName] ||
                        client.user.displayAvatarURL({ extension: 'png' });
                    description = (0, I18n_1.T)(locale, 'player.setupStart.description', {
                        title: player_1.queue.current.info.title,
                        uri: player_1.queue.current.info.uri,
                        author: player_1.queue.current.info.author,
                        length: client.utils.formatTime(player_1.queue.current.info.duration),
                        requester: player_1.queue.current.requester.id,
                    });
                    embed = client
                        .embed()
                        .setAuthor({
                        name: (0, I18n_1.T)(locale, 'player.setupStart.now_playing'),
                        iconURL: iconUrl,
                    })
                        .setColor(client.color.main)
                        .setDescription(description)
                        .setImage(player_1.queue.current.info.artworkUrl);
                    return [4 /*yield*/, m
                            .edit({
                            embeds: [embed],
                            components: (0, Buttons_1.getButtons)(player_1, client).map(function (b) {
                                b.components.forEach(function (c) { return c.setDisabled(!(player_1 === null || player_1 === void 0 ? void 0 : player_1.queue.current)); });
                                return b;
                            }),
                        })
                            .catch(function () {
                            null;
                        })];
                case 6:
                    _a.sent();
                    return [3 /*break*/, 9];
                case 7:
                    embed = client
                        .embed()
                        .setColor(client.color.main)
                        .setAuthor({
                        name: client.user.username,
                        iconURL: client.user.displayAvatarURL({ extension: 'png' }),
                    })
                        .setDescription((0, I18n_1.T)(locale, 'player.setupStart.nothing_playing'))
                        .setImage(client.config.links.img);
                    return [4 /*yield*/, m
                            .edit({
                            embeds: [embed],
                            components: (0, Buttons_1.getButtons)(player_1, client).map(function (b) {
                                b.components.forEach(function (c) { return c.setDisabled(true); });
                                return b;
                            }),
                        })
                            .catch(function () {
                            null;
                        })];
                case 8:
                    _a.sent();
                    _a.label = 9;
                case 9: return [2 /*return*/];
            }
        });
    });
}
function buttonReply(int, args, color) {
    return __awaiter(this, void 0, void 0, function () {
        var embed, m;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    embed = new discord_js_1.EmbedBuilder();
                    if (!int.replied) return [3 /*break*/, 2];
                    return [4 /*yield*/, int.editReply({ embeds: [embed.setColor(color).setDescription(args)] }).catch(function () {
                            null;
                        })];
                case 1:
                    m = _a.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, int.followUp({ embeds: [embed.setColor(color).setDescription(args)] }).catch(function () {
                        null;
                    })];
                case 3:
                    m = _a.sent();
                    _a.label = 4;
                case 4:
                    setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!(int && !int.ephemeral)) return [3 /*break*/, 2];
                                    return [4 /*yield*/, m.delete().catch(function () {
                                            null;
                                        })];
                                case 1:
                                    _a.sent();
                                    _a.label = 2;
                                case 2: return [2 /*return*/];
                            }
                        });
                    }); }, 2000);
                    return [2 /*return*/];
            }
        });
    });
}
function oops(channel, args) {
    return __awaiter(this, void 0, void 0, function () {
        var embed1, m_1, e_1;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    embed1 = new discord_js_1.EmbedBuilder().setColor('Red').setDescription("".concat(args));
                    return [4 /*yield*/, channel.send({
                            embeds: [embed1],
                        })];
                case 1:
                    m_1 = _a.sent();
                    setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, m_1.delete().catch(function () {
                                        null;
                                    })];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); }, 12000);
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    return [2 /*return*/, console.error(e_1)];
                case 3: return [2 /*return*/];
            }
        });
    });
}
