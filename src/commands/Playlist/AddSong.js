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
var AddSong = /** @class */ (function (_super) {
    __extends(AddSong, _super);
    function AddSong(client) {
        return _super.call(this, client, {
            name: 'addsong',
            description: {
                content: 'cmd.addsong.description',
                examples: ['addsong test exemple', 'addsong exemple https://www.youtube.com/watch?v=example'],
                usage: 'addsong <playlist> <song>',
            },
            category: 'playlist',
            aliases: ['as'],
            cooldown: 3,
            args: true,
            vote: true,
            player: {
                voice: false,
                dj: false,
                active: false,
                djPerm: null,
            },
            permissions: {
                dev: false,
                client: ['SendMessages', 'ReadMessageHistory', 'ViewChannel', 'EmbedLinks'],
                user: [],
            },
            slashCommand: true,
            options: [
                {
                    name: 'playlist',
                    description: 'cmd.addsong.options.playlist',
                    type: 3,
                    required: true,
                    autocomplete: true,
                },
                {
                    name: 'song',
                    description: 'cmd.addsong.options.song',
                    type: 3,
                    required: true,
                },
            ],
        }) || this;
    }
    AddSong.prototype.run = function (client, ctx, args) {
        return __awaiter(this, void 0, void 0, function () {
            var playlist, song, res, playlistData, trackStrings, count;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        playlist = args.shift();
                        song = args.join(' ');
                        if (!!playlist) return [3 /*break*/, 2];
                        return [4 /*yield*/, ctx.sendMessage({
                                embeds: [
                                    {
                                        description: ctx.locale('cmd.addsong.messages.no_playlist'),
                                        color: this.client.color.red,
                                    },
                                ],
                            })];
                    case 1: return [2 /*return*/, _c.sent()];
                    case 2:
                        if (!!song) return [3 /*break*/, 4];
                        return [4 /*yield*/, ctx.sendMessage({
                                embeds: [
                                    {
                                        description: ctx.locale('cmd.addsong.messages.no_song'),
                                        color: this.client.color.red,
                                    },
                                ],
                            })];
                    case 3: return [2 /*return*/, _c.sent()];
                    case 4: return [4 /*yield*/, client.manager.search(song, ctx.author)];
                    case 5:
                        res = _c.sent();
                        if (!!res) return [3 /*break*/, 7];
                        return [4 /*yield*/, ctx.sendMessage({
                                embeds: [
                                    {
                                        description: ctx.locale('cmd.addsong.messages.no_songs_found'),
                                        color: this.client.color.red,
                                    },
                                ],
                            })];
                    case 6: return [2 /*return*/, _c.sent()];
                    case 7: return [4 /*yield*/, client.db.getPlaylist((_a = ctx.author) === null || _a === void 0 ? void 0 : _a.id, playlist)];
                    case 8:
                        playlistData = _c.sent();
                        if (!!playlistData) return [3 /*break*/, 10];
                        return [4 /*yield*/, ctx.sendMessage({
                                embeds: [
                                    {
                                        description: ctx.locale('cmd.addsong.messages.playlist_not_found'),
                                        color: this.client.color.red,
                                    },
                                ],
                            })];
                    case 9: return [2 /*return*/, _c.sent()];
                    case 10:
                        count = 0;
                        if (res.loadType === 'playlist') {
                            trackStrings = res.tracks.map(function (track) { return track.encoded; });
                            count = res.tracks.length;
                        }
                        else if (res.loadType === 'track') {
                            trackStrings = [res.tracks[0].encoded];
                            count = 1;
                        }
                        else if (res.loadType === 'search') {
                            trackStrings = [res.tracks[0].encoded];
                            count = 1;
                        }
                        return [4 /*yield*/, client.db.addTracksToPlaylist((_b = ctx.author) === null || _b === void 0 ? void 0 : _b.id, playlist, trackStrings)];
                    case 11:
                        _c.sent();
                        return [4 /*yield*/, ctx.sendMessage({
                                embeds: [
                                    {
                                        description: ctx.locale('cmd.addsong.messages.added', { playlist: playlistData.name, count: count }),
                                        color: this.client.color.green,
                                    },
                                ],
                            })];
                    case 12: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    AddSong.prototype.autocomplete = function (interaction) {
        return __awaiter(this, void 0, void 0, function () {
            var focusedValue, userId, playlists, filtered;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        focusedValue = interaction.options.getFocused();
                        userId = interaction.user.id;
                        return [4 /*yield*/, this.client.db.getUserPlaylists(userId)];
                    case 1:
                        playlists = _a.sent();
                        filtered = playlists.filter(function (playlist) { return playlist.name.toLowerCase().startsWith(focusedValue.toLowerCase()); });
                        return [4 /*yield*/, interaction.respond(filtered.map(function (playlist) { return ({
                                name: playlist.name,
                                value: playlist.name,
                            }); }))];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return AddSong;
}(index_1.Command));
exports.default = AddSong;
