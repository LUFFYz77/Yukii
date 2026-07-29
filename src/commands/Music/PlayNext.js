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
var PlayNext = /** @class */ (function (_super) {
    __extends(PlayNext, _super);
    function PlayNext(client) {
        return _super.call(this, client, {
            name: 'playnext',
            description: {
                content: 'cmd.playnext.description',
                examples: [
                    'playnext example',
                    'playnext https://www.youtube.com/watch?v=example',
                    'playnext https://open.spotify.com/track/example',
                    'playnext http://www.example.com/example.mp3',
                ],
                usage: 'playnext <song>',
            },
            category: 'music',
            aliases: ['pn'],
            cooldown: 3,
            args: true,
            vote: false,
            player: {
                voice: true,
                dj: false,
                active: false,
                djPerm: null,
            },
            permissions: {
                dev: false,
                client: ['SendMessages', 'ReadMessageHistory', 'ViewChannel', 'EmbedLinks', 'Connect', 'Speak'],
                user: [],
            },
            slashCommand: true,
            options: [
                {
                    name: 'song',
                    description: 'cmd.playnext.options.song',
                    type: 3,
                    required: true,
                    autocomplete: true,
                },
            ],
        }) || this;
    }
    PlayNext.prototype.run = function (client, ctx, args) {
        return __awaiter(this, void 0, void 0, function () {
            var query, player, memberVoiceChannel, response, embed;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        query = args.join(' ');
                        player = client.manager.getPlayer(ctx.guild.id);
                        memberVoiceChannel = ctx.member.voice.channel;
                        if (!player)
                            player = client.manager.createPlayer({
                                guildId: ctx.guild.id,
                                voiceChannelId: memberVoiceChannel.id,
                                textChannelId: ctx.channel.id,
                                selfMute: false,
                                selfDeaf: true,
                                vcRegion: memberVoiceChannel.rtcRegion,
                            });
                        if (!!player.connected) return [3 /*break*/, 2];
                        return [4 /*yield*/, player.connect()];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2: return [4 /*yield*/, ctx.sendDeferMessage(ctx.locale('cmd.playnext.loading'))];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, player.search({ query: query }, ctx.author)];
                    case 4:
                        response = (_b.sent());
                        embed = this.client.embed();
                        if (!(!response || ((_a = response.tracks) === null || _a === void 0 ? void 0 : _a.length) === 0)) return [3 /*break*/, 6];
                        return [4 /*yield*/, ctx.editMessage({
                                content: '',
                                embeds: [embed.setColor(this.client.color.red).setDescription(ctx.locale('cmd.play.errors.search_error'))],
                            })];
                    case 5: return [2 /*return*/, _b.sent()];
                    case 6: return [4 /*yield*/, player.queue.splice(0, 0, response.loadType === 'playlist' ? response.tracks : response.tracks[0])];
                    case 7:
                        _b.sent();
                        if (!(response.loadType === 'playlist')) return [3 /*break*/, 9];
                        return [4 /*yield*/, ctx.editMessage({
                                content: '',
                                embeds: [
                                    embed
                                        .setColor(this.client.color.main)
                                        .setDescription(ctx.locale('cmd.playnext.added_playlist_to_play_next', { length: response.tracks.length })),
                                ],
                            })];
                    case 8:
                        _b.sent();
                        return [3 /*break*/, 11];
                    case 9: return [4 /*yield*/, ctx.editMessage({
                            content: '',
                            embeds: [
                                embed.setColor(this.client.color.main).setDescription(ctx.locale('cmd.playnext.added_to_play_next', {
                                    title: response.tracks[0].info.title,
                                    uri: response.tracks[0].info.uri,
                                })),
                            ],
                        })];
                    case 10:
                        _b.sent();
                        _b.label = 11;
                    case 11:
                        if (!(!player.playing && player.queue.tracks.length > 0)) return [3 /*break*/, 13];
                        return [4 /*yield*/, player.play({ paused: false })];
                    case 12:
                        _b.sent();
                        _b.label = 13;
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    PlayNext.prototype.autocomplete = function (interaction) {
        return __awaiter(this, void 0, void 0, function () {
            var focusedValue, res, songs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        focusedValue = interaction.options.getFocused(true);
                        if (!(focusedValue === null || focusedValue === void 0 ? void 0 : focusedValue.value.trim())) {
                            return [2 /*return*/, interaction.respond([])];
                        }
                        return [4 /*yield*/, this.client.manager.search(focusedValue.value.trim(), interaction.user)];
                    case 1:
                        res = _a.sent();
                        songs = [];
                        if (res.loadType === 'search') {
                            res.tracks.slice(0, 10).forEach(function (track) {
                                var name = "".concat(track.info.title, " by ").concat(track.info.author);
                                songs.push({
                                    name: name.length > 100 ? "".concat(name.substring(0, 97), "...") : name,
                                    value: track.info.uri,
                                });
                            });
                        }
                        return [4 /*yield*/, interaction.respond(songs)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return PlayNext;
}(index_1.Command));
exports.default = PlayNext;
