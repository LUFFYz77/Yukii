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
var index_1 = require("../../structures/index");
var _247 = /** @class */ (function (_super) {
    __extends(_247, _super);
    function _247(client) {
        return _super.call(this, client, {
            name: '247',
            description: {
                content: 'cmd.247.description',
                examples: ['247'],
                usage: '247',
            },
            category: 'config',
            aliases: ['stay'],
            cooldown: 3,
            args: false,
            vote: true,
            player: {
                voice: true,
                dj: false,
                active: false,
                djPerm: null,
            },
            permissions: {
                dev: false,
                client: ['SendMessages', 'ReadMessageHistory', 'ViewChannel', 'EmbedLinks'],
                user: ['ManageGuild'],
            },
            slashCommand: true,
            options: [],
        }) || this;
    }
    _247.prototype.run = function (client, ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var embed, player, data, member, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        embed = this.client.embed();
                        player = client.manager.getPlayer(ctx.guild.id);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 12, , 14]);
                        return [4 /*yield*/, client.db.get_247(ctx.guild.id)];
                    case 2:
                        data = _a.sent();
                        member = ctx.member;
                        if (!!member.voice.channel) return [3 /*break*/, 4];
                        return [4 /*yield*/, ctx.sendMessage({
                                embeds: [embed.setDescription(ctx.locale('cmd.247.errors.not_in_voice')).setColor(client.color.red)],
                            })];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        if (!data) return [3 /*break*/, 7];
                        return [4 /*yield*/, client.db.delete_247(ctx.guild.id)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, ctx.sendMessage({
                                embeds: [embed.setDescription(ctx.locale('cmd.247.messages.disabled')).setColor(client.color.red)],
                            })];
                    case 6: return [2 /*return*/, _a.sent()];
                    case 7: return [4 /*yield*/, client.db.set_247(ctx.guild.id, ctx.channel.id, member.voice.channel.id)];
                    case 8:
                        _a.sent();
                        if (!player) {
                            player = client.manager.createPlayer({
                                guildId: ctx.guild.id,
                                voiceChannelId: member.voice.channel.id,
                                textChannelId: ctx.channel.id,
                                selfMute: false,
                                selfDeaf: true,
                                vcRegion: member.voice.channel.rtcRegion,
                            });
                        }
                        if (!!player.connected) return [3 /*break*/, 10];
                        return [4 /*yield*/, player.connect()];
                    case 9:
                        _a.sent();
                        _a.label = 10;
                    case 10: return [4 /*yield*/, ctx.sendMessage({
                            embeds: [embed.setDescription(ctx.locale('cmd.247.messages.enabled')).setColor(this.client.color.main)],
                        })];
                    case 11: return [2 /*return*/, _a.sent()];
                    case 12:
                        error_1 = _a.sent();
                        client.logger.error('Error in 247 command:', error_1);
                        return [4 /*yield*/, ctx.sendMessage({
                                embeds: [embed.setDescription(ctx.locale('cmd.247.errors.generic')).setColor(client.color.red)],
                            })];
                    case 13: return [2 /*return*/, _a.sent()];
                    case 14: return [2 /*return*/];
                }
            });
        });
    };
    return _247;
}(index_1.Command));
exports.default = _247;
