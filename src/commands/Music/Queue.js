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
var Queue = /** @class */ (function (_super) {
    __extends(Queue, _super);
    function Queue(client) {
        return _super.call(this, client, {
            name: 'queue',
            description: {
                content: 'cmd.queue.description',
                examples: ['queue'],
                usage: 'queue',
            },
            category: 'music',
            aliases: ['q'],
            cooldown: 3,
            args: false,
            vote: false,
            player: {
                voice: true,
                dj: false,
                active: true,
                djPerm: null,
            },
            permissions: {
                dev: false,
                client: ['SendMessages', 'ReadMessageHistory', 'ViewChannel', 'EmbedLinks'],
                user: [],
            },
            slashCommand: true,
            options: [],
        }) || this;
    }
    Queue.prototype.run = function (client, ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var player, embed, songStrings, i, track, chunks, pages;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        player = client.manager.getPlayer(ctx.guild.id);
                        if (!!player) return [3 /*break*/, 2];
                        return [4 /*yield*/, ctx.sendMessage(ctx.locale('event.message.no_music_playing'))];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        embed = this.client.embed();
                        if (!(player.queue.current && player.queue.tracks.length === 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, ctx.sendMessage({
                                embeds: [
                                    embed.setColor(this.client.color.main).setDescription(ctx.locale('cmd.queue.now_playing', {
                                        title: player.queue.current.info.title,
                                        uri: player.queue.current.info.uri,
                                        requester: player.queue.current.requester.id,
                                        duration: player.queue.current.info.isStream
                                            ? ctx.locale('cmd.queue.live')
                                            : client.utils.formatTime(player.queue.current.info.duration),
                                    })),
                                ],
                            })];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        songStrings = [];
                        for (i = 0; i < player.queue.tracks.length; i++) {
                            track = player.queue.tracks[i];
                            songStrings.push(ctx.locale('cmd.queue.track_info', {
                                index: i + 1,
                                title: track.info.title,
                                uri: track.info.uri,
                                requester: track.requester.id,
                                duration: track.info.isStream ? ctx.locale('cmd.queue.live') : client.utils.formatTime(track.info.duration),
                            }));
                        }
                        chunks = client.utils.chunk(songStrings, 10);
                        if (chunks.length === 0)
                            chunks = [songStrings];
                        pages = chunks.map(function (chunk, index) {
                            var _a;
                            return _this.client
                                .embed()
                                .setColor(_this.client.color.main)
                                .setAuthor({
                                name: ctx.locale('cmd.queue.title'),
                                iconURL: ctx.guild.icon ? ctx.guild.iconURL() : (_a = ctx.author) === null || _a === void 0 ? void 0 : _a.displayAvatarURL(),
                            })
                                .setDescription(chunk.join('\n'))
                                .setFooter({
                                text: ctx.locale('cmd.queue.page_info', {
                                    index: index + 1,
                                    total: chunks.length,
                                }),
                            });
                        });
                        return [4 /*yield*/, client.utils.paginate(client, ctx, pages)];
                    case 5: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return Queue;
}(index_1.Command));
exports.default = Queue;
