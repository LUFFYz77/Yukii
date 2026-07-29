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
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
var index_1 = require("../../structures/index");
var GuildLeave = /** @class */ (function (_super) {
    __extends(GuildLeave, _super);
    function GuildLeave(client) {
        return _super.call(this, client, {
            name: 'guildleave',
            description: {
                content: 'Leave a guild',
                examples: ['guildleave <guildId>'],
                usage: 'guildleave <guildId>',
            },
            category: 'dev',
            aliases: ['gl'],
            cooldown: 3,
            args: true,
            player: {
                voice: false,
                dj: false,
                active: false,
                djPerm: null,
            },
            permissions: {
                dev: true,
                client: ['SendMessages', 'ReadMessageHistory', 'ViewChannel', 'EmbedLinks'],
                user: [],
            },
            slashCommand: false,
            options: [],
        }) || this;
    }
    GuildLeave.prototype.run = function (client, ctx, args) {
        return __awaiter(this, void 0, void 0, function () {
            var guildId, guild, _a, logChannelId, logChannel;
            var _this = this;
            var _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        guildId = args[0];
                        return [4 /*yield*/, ((_b = client.shard) === null || _b === void 0 ? void 0 : _b.broadcastEval(function (c, _a) {
                                var guildId = _a.guildId;
                                var guild = c.guilds.cache.get(guildId);
                                return guild ? { id: guild.id, name: guild.name } : null;
                            }, { context: { guildId: guildId } }).then(function (results) { return results.find(function (g) { return g !== null; }); }))];
                    case 1:
                        guild = _d.sent();
                        if (!!guild) return [3 /*break*/, 3];
                        return [4 /*yield*/, ctx.sendMessage('Guild not found.')];
                    case 2: return [2 /*return*/, _d.sent()];
                    case 3:
                        _d.trys.push([3, 6, , 8]);
                        return [4 /*yield*/, ((_c = client.shard) === null || _c === void 0 ? void 0 : _c.broadcastEval(function (c_1, _a) { return __awaiter(_this, [c_1, _a], void 0, function (c, _b) {
                                var guild;
                                var guildId = _b.guildId;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            guild = c.guilds.cache.get(guildId);
                                            if (!guild) return [3 /*break*/, 2];
                                            return [4 /*yield*/, guild.leave()];
                                        case 1:
                                            _c.sent();
                                            _c.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); }, { context: { guildId: guildId } }))];
                    case 4:
                        _d.sent();
                        return [4 /*yield*/, ctx.sendMessage("Left guild ".concat(guild.name))];
                    case 5:
                        _d.sent();
                        return [3 /*break*/, 8];
                    case 6:
                        _a = _d.sent();
                        return [4 /*yield*/, ctx.sendMessage("Failed to leave guild ".concat(guild.name))];
                    case 7:
                        _d.sent();
                        return [3 /*break*/, 8];
                    case 8:
                        logChannelId = process.env.LOG_CHANNEL_ID;
                        if (!logChannelId) return [3 /*break*/, 10];
                        logChannel = client.channels.cache.get(logChannelId);
                        if (!(logChannel && logChannel.type === discord_js_1.ChannelType.GuildText)) return [3 /*break*/, 10];
                        return [4 /*yield*/, logChannel.send("Bot has left guild: ".concat(guild.name, " (ID: ").concat(guild.id, ")"))];
                    case 9:
                        _d.sent();
                        _d.label = 10;
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    return GuildLeave;
}(index_1.Command));
exports.default = GuildLeave;
