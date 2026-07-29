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
var StealPlaylist = /** @class */ (function (_super) {
    __extends(StealPlaylist, _super);
    function StealPlaylist(client) {
        return _super.call(this, client, {
            name: 'steal',
            description: {
                content: 'cmd.steal.description',
                examples: ['steal <@user> <playlist_name>'],
                usage: 'steal <@user> <playlist_name>',
            },
            category: 'playlist',
            aliases: ['st'],
            cooldown: 3,
            args: true,
            vote: false,
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
                    name: 'user',
                    description: 'cmd.steal.options.user',
                    type: 6,
                    required: true,
                },
                {
                    name: 'playlist',
                    description: 'cmd.steal.options.playlist',
                    type: 3,
                    required: true,
                    autocomplete: true,
                },
            ],
        }) || this;
    }
    StealPlaylist.prototype.run = function (client, ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var targetUser, playlistName, targetUserId, _error_1, users, targetPlaylist, targetSongs, existingPlaylist, error_1;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        targetUser = ctx.args[0];
                        playlistName = ctx.args[1];
                        targetUserId = null;
                        if (!((targetUser === null || targetUser === void 0 ? void 0 : targetUser.startsWith('<@')) && targetUser.endsWith('>'))) return [3 /*break*/, 2];
                        targetUser = targetUser.slice(2, -1);
                        if (targetUser.startsWith('!')) {
                            targetUser = targetUser.slice(1);
                        }
                        return [4 /*yield*/, client.users.fetch(targetUser)];
                    case 1:
                        targetUser = _c.sent();
                        targetUserId = targetUser.id;
                        return [3 /*break*/, 9];
                    case 2:
                        if (!targetUser) return [3 /*break*/, 9];
                        _c.label = 3;
                    case 3:
                        _c.trys.push([3, 5, , 9]);
                        return [4 /*yield*/, client.users.fetch(targetUser)];
                    case 4:
                        targetUser = _c.sent();
                        targetUserId = targetUser.id;
                        return [3 /*break*/, 9];
                    case 5:
                        _error_1 = _c.sent();
                        users = client.users.cache.filter(function (user) { return user.username.toLowerCase() === targetUser.toLowerCase(); });
                        if (!(users.size > 0)) return [3 /*break*/, 6];
                        targetUser = users.first();
                        targetUserId = targetUser.id;
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, ctx.sendMessage({
                            embeds: [
                                {
                                    description: 'Invalid username or user not found.',
                                    color: this.client.color.red,
                                },
                            ],
                        })];
                    case 7: return [2 /*return*/, _c.sent()];
                    case 8: return [3 /*break*/, 9];
                    case 9:
                        if (!!playlistName) return [3 /*break*/, 11];
                        return [4 /*yield*/, ctx.sendMessage({
                                embeds: [
                                    {
                                        description: ctx.locale('cmd.steal.messages.provide_playlist'),
                                        color: this.client.color.red,
                                    },
                                ],
                            })];
                    case 10: return [2 /*return*/, _c.sent()];
                    case 11:
                        if (!!targetUserId) return [3 /*break*/, 13];
                        return [4 /*yield*/, ctx.sendMessage({
                                embeds: [
                                    {
                                        description: ctx.locale('cmd.steal.messages.provide_user'),
                                        color: this.client.color.red,
                                    },
                                ],
                            })];
                    case 12: return [2 /*return*/, _c.sent()];
                    case 13:
                        _c.trys.push([13, 23, , 25]);
                        return [4 /*yield*/, client.db.getPlaylist(targetUserId, playlistName)];
                    case 14:
                        targetPlaylist = _c.sent();
                        if (!!targetPlaylist) return [3 /*break*/, 16];
                        return [4 /*yield*/, ctx.sendMessage({
                                embeds: [
                                    {
                                        description: ctx.locale('cmd.steal.messages.playlist_not_exist'),
                                        color: this.client.color.red,
                                    },
                                ],
                            })];
                    case 15: return [2 /*return*/, _c.sent()];
                    case 16: return [4 /*yield*/, client.db.getTracksFromPlaylist(targetUserId, playlistName)];
                    case 17:
                        targetSongs = _c.sent();
                        return [4 /*yield*/, client.db.getPlaylist((_a = ctx.author) === null || _a === void 0 ? void 0 : _a.id, playlistName)];
                    case 18:
                        existingPlaylist = _c.sent();
                        if (!existingPlaylist) return [3 /*break*/, 20];
                        return [4 /*yield*/, ctx.sendMessage({
                                embeds: [
                                    {
                                        description: ctx.locale('cmd.steal.messages.playlist_exists', { playlist: playlistName }),
                                        color: this.client.color.red,
                                    },
                                ],
                            })];
                    case 19: return [2 /*return*/, _c.sent()];
                    case 20: return [4 /*yield*/, client.db.createPlaylistWithTracks((_b = ctx.author) === null || _b === void 0 ? void 0 : _b.id, playlistName, targetSongs)];
                    case 21:
                        _c.sent();
                        return [4 /*yield*/, ctx.sendMessage({
                                embeds: [
                                    {
                                        description: ctx.locale('cmd.steal.messages.playlist_stolen', {
                                            playlist: playlistName,
                                            user: targetUser.username,
                                        }),
                                        color: this.client.color.main,
                                    },
                                ],
                            })];
                    case 22: return [2 /*return*/, _c.sent()];
                    case 23:
                        error_1 = _c.sent();
                        client.logger.error(error_1);
                        return [4 /*yield*/, ctx.sendMessage({
                                embeds: [
                                    {
                                        description: ctx.locale('cmd.steal.messages.error_occurred'),
                                        color: this.client.color.red,
                                    },
                                ],
                            })];
                    case 24: return [2 /*return*/, _c.sent()];
                    case 25: return [2 /*return*/];
                }
            });
        });
    };
    StealPlaylist.prototype.autocomplete = function (interaction) {
        return __awaiter(this, void 0, void 0, function () {
            var focusedValue_1, userOptionId, user, playlists, filtered, error_2;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 10, , 12]);
                        focusedValue_1 = interaction.options.getFocused();
                        userOptionId = (_a = interaction.options.get('user')) === null || _a === void 0 ? void 0 : _a.value;
                        if (!!userOptionId) return [3 /*break*/, 2];
                        return [4 /*yield*/, interaction
                                .respond([{ name: 'Please specify a user to search their playlists.', value: 'NoUser' }])
                                .catch(console.error)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                    case 2: return [4 /*yield*/, interaction.client.users.fetch(userOptionId)];
                    case 3:
                        user = _b.sent();
                        if (!!user) return [3 /*break*/, 5];
                        return [4 /*yield*/, interaction.respond([{ name: 'User not found.', value: 'NoUserFound' }]).catch(console.error)];
                    case 4:
                        _b.sent();
                        return [2 /*return*/];
                    case 5: return [4 /*yield*/, this.client.db.getUserPlaylists(user.id)];
                    case 6:
                        playlists = _b.sent();
                        if (!(!playlists || playlists.length === 0)) return [3 /*break*/, 8];
                        return [4 /*yield*/, interaction
                                .respond([{ name: 'No playlists found for this user.', value: 'NoPlaylists' }])
                                .catch(console.error)];
                    case 7:
                        _b.sent();
                        return [2 /*return*/];
                    case 8:
                        filtered = playlists.filter(function (playlist) { return playlist.name.toLowerCase().startsWith(focusedValue_1.toLowerCase()); });
                        return [4 /*yield*/, interaction
                                .respond(filtered.map(function (playlist) { return ({ name: playlist.name, value: playlist.name }); }))
                                .catch(console.error)];
                    case 9: return [2 /*return*/, _b.sent()];
                    case 10:
                        error_2 = _b.sent();
                        return [4 /*yield*/, interaction
                                .respond([{ name: 'An error occurred while fetching playlists.', value: 'Error' }])
                                .catch(console.error)];
                    case 11: return [2 /*return*/, _b.sent()];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    return StealPlaylist;
}(index_1.Command));
exports.default = StealPlaylist;
