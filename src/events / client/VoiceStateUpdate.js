"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
var index_1 = require("../../structures/index");
var VoiceStateUpdate = /** @class */ (function (_super) {
    __extends(VoiceStateUpdate, _super);
    function VoiceStateUpdate(client, file) {
        var _this = _super.call(this, client, file, {
            name: 'voiceStateUpdate',
        }) || this;
        _this.handale = {
            join: function (newState, client) {
                return __awaiter(this, void 0, void 0, function () {
                    var bot, player, vc, permissions;
                    var _a, _b, _c, _d;
                    return __generator(this, function (_e) {
                        switch (_e.label) {
                            case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 3000); })];
                            case 1:
                                _e.sent();
                                bot = newState.guild.voiceStates.cache.get(client.user.id);
                                if (!bot)
                                    return [2 /*return*/];
                                if (!(bot.id === ((_a = client.user) === null || _a === void 0 ? void 0 : _a.id) &&
                                    bot.channelId &&
                                    ((_b = bot.channel) === null || _b === void 0 ? void 0 : _b.type) === discord_js_1.ChannelType.GuildStageVoice &&
                                    bot.suppress)) return [3 /*break*/, 3];
                                if (!(bot.channel && bot.member && bot.channel.permissionsFor(bot.member).has('MuteMembers'))) return [3 /*break*/, 3];
                                return [4 /*yield*/, bot.setSuppressed(false)];
                            case 2:
                                _e.sent();
                                _e.label = 3;
                            case 3:
                                player = client.manager.getPlayer(newState.guild.id);
                                if (!player)
                                    return [2 /*return*/];
                                if (!(player === null || player === void 0 ? void 0 : player.voiceChannelId))
                                    return [2 /*return*/];
                                vc = newState.guild.channels.cache.get(player.voiceChannelId);
                                if (!(vc && vc.members instanceof Map))
                                    return [2 /*return*/];
                                if (!(newState.id === ((_c = client.user) === null || _c === void 0 ? void 0 : _c.id) && !newState.serverDeaf)) return [3 /*break*/, 5];
                                permissions = vc.permissionsFor(newState.guild.members.me);
                                if (!(permissions === null || permissions === void 0 ? void 0 : permissions.has('DeafenMembers'))) return [3 /*break*/, 5];
                                return [4 /*yield*/, newState.setDeaf(true)];
                            case 4:
                                _e.sent();
                                _e.label = 5;
                            case 5:
                                if (newState.id === ((_d = client.user) === null || _d === void 0 ? void 0 : _d.id)) {
                                    if (newState.serverMute && !player.paused) {
                                        player.pause();
                                    }
                                    else if (!newState.serverMute && player.paused) {
                                        player.resume();
                                    }
                                }
                                return [2 /*return*/];
                        }
                    });
                });
            },
            leave: function (newState, client) {
                return __awaiter(this, void 0, void 0, function () {
                    var player, is247, vc;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                player = client.manager.getPlayer(newState.guild.id);
                                if (!player)
                                    return [2 /*return*/];
                                if (!(player === null || player === void 0 ? void 0 : player.voiceChannelId))
                                    return [2 /*return*/];
                                return [4 /*yield*/, client.db.get_247(newState.guild.id)];
                            case 1:
                                is247 = _a.sent();
                                vc = newState.guild.channels.cache.get(player.voiceChannelId);
                                if (!(vc && vc.members instanceof Map))
                                    return [2 /*return*/];
                                if (vc.members instanceof Map && __spreadArray([], vc.members.values(), true).filter(function (x) { return !x.user.bot; }).length <= 0) {
                                    setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                                        var playerVoiceChannel;
                                        return __generator(this, function (_a) {
                                            if (!(player === null || player === void 0 ? void 0 : player.voiceChannelId))
                                                return [2 /*return*/];
                                            playerVoiceChannel = newState.guild.channels.cache.get(player === null || player === void 0 ? void 0 : player.voiceChannelId);
                                            if (player &&
                                                playerVoiceChannel &&
                                                playerVoiceChannel.members instanceof Map &&
                                                __spreadArray([], playerVoiceChannel.members.values(), true).filter(function (x) { return !x.user.bot; }).length <= 0) {
                                                if (!is247) {
                                                    player.destroy();
                                                }
                                            }
                                            return [2 /*return*/];
                                        });
                                    }); }, 5000);
                                }
                                return [2 /*return*/];
                        }
                    });
                });
            },
            move: function (newState, client) {
                return __awaiter(this, void 0, void 0, function () {
                    var bot;
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0: 
                            // delay for 3 seconds
                            return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 3000); })];
                            case 1:
                                // delay for 3 seconds
                                _c.sent();
                                bot = newState.guild.voiceStates.cache.get(client.user.id);
                                if (!bot)
                                    return [2 /*return*/];
                                if (!(bot.id === ((_a = client.user) === null || _a === void 0 ? void 0 : _a.id) &&
                                    bot.channelId &&
                                    ((_b = bot.channel) === null || _b === void 0 ? void 0 : _b.type) === discord_js_1.ChannelType.GuildStageVoice &&
                                    bot.suppress)) return [3 /*break*/, 3];
                                if (!(bot.channel && bot.member && bot.channel.permissionsFor(bot.member).has('MuteMembers'))) return [3 /*break*/, 3];
                                return [4 /*yield*/, bot.setSuppressed(false)];
                            case 2:
                                _c.sent();
                                _c.label = 3;
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            },
        };
        return _this;
    }
    VoiceStateUpdate.prototype.run = function (oldState, newState) {
        return __awaiter(this, void 0, void 0, function () {
            var guildId, player, vc, is247, type;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        guildId = newState.guild.id;
                        if (!guildId)
                            return [2 /*return*/];
                        player = this.client.manager.getPlayer(guildId);
                        if (!player)
                            return [2 /*return*/];
                        if (!(player === null || player === void 0 ? void 0 : player.voiceChannelId))
                            return [2 /*return*/];
                        vc = newState.guild.channels.cache.get(player.voiceChannelId);
                        if (!(vc && vc.members instanceof Map))
                            return [2 /*return*/];
                        return [4 /*yield*/, this.client.db.get_247(guildId)];
                    case 1:
                        is247 = _b.sent();
                        if (!(((_a = newState.guild.members.cache.get(this.client.user.id)) === null || _a === void 0 ? void 0 : _a.voice.channelId) || !is247) && player) {
                            return [2 /*return*/, player.destroy()];
                        }
                        type = null;
                        if (!oldState.channelId && newState.channelId) {
                            type = 'join';
                        }
                        else if (oldState.channelId && !newState.channelId) {
                            type = 'leave';
                        }
                        else if (oldState.channelId && newState.channelId && oldState.channelId !== newState.channelId) {
                            type = 'move';
                        }
                        if (type === 'join') {
                            this.handale.join(newState, this.client);
                        }
                        else if (type === 'leave') {
                            this.handale.leave(newState, this.client);
                        }
                        else if (type === 'move') {
                            this.handale.move(newState, this.client);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return VoiceStateUpdate;
}(index_1.Event));
exports.default = VoiceStateUpdate;
