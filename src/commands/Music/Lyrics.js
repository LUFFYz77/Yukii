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
var genius_lyrics_api_1 = require("genius-lyrics-api");
var index_1 = require("../../structures/index");
var Lyrics = /** @class */ (function (_super) {
    __extends(Lyrics, _super);
    function Lyrics(client) {
        return _super.call(this, client, {
            name: 'lyrics',
            description: {
                content: 'cmd.lyrics.description',
                examples: ['lyrics'],
                usage: 'lyrics',
            },
            category: 'music',
            aliases: ['ly'],
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
    Lyrics.prototype.run = function (client, ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var player, embed, track, trackTitle, artistName, trackUrl, artworkUrl, options, lyrics, lyricsPages_1, currentPage_1, row, filter, collector_1, error_1;
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
                        track = player.queue.current;
                        trackTitle = track.info.title.replace(/\[.*?\]/g, '').trim();
                        artistName = track.info.author.replace(/\[.*?\]/g, '').trim();
                        trackUrl = track.info.uri;
                        artworkUrl = track.info.artworkUrl;
                        return [4 /*yield*/, ctx.sendDeferMessage(ctx.locale('cmd.lyrics.searching', { trackTitle: trackTitle }))];
                    case 3:
                        _a.sent();
                        options = {
                            apiKey: client.env.GENIUS_API,
                            title: trackTitle,
                            artist: artistName,
                            optimizeQuery: true,
                        };
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 10, , 12]);
                        return [4 /*yield*/, (0, genius_lyrics_api_1.getLyrics)(options)];
                    case 5:
                        lyrics = _a.sent();
                        if (!lyrics) return [3 /*break*/, 7];
                        lyricsPages_1 = this.paginateLyrics(lyrics);
                        currentPage_1 = 0;
                        row = new discord_js_1.ActionRowBuilder().addComponents(new discord_js_1.ButtonBuilder()
                            .setCustomId('prev')
                            .setEmoji(this.client.emoji.page.back)
                            .setStyle(discord_js_1.ButtonStyle.Secondary)
                            .setDisabled(true), new discord_js_1.ButtonBuilder().setCustomId('stop').setEmoji(this.client.emoji.page.cancel).setStyle(discord_js_1.ButtonStyle.Danger), new discord_js_1.ButtonBuilder()
                            .setCustomId('next')
                            .setEmoji(this.client.emoji.page.next)
                            .setStyle(discord_js_1.ButtonStyle.Secondary)
                            .setDisabled(lyricsPages_1.length <= 1));
                        return [4 /*yield*/, ctx.editMessage({
                                embeds: [
                                    embed
                                        .setColor(client.color.main)
                                        .setDescription(ctx.locale('cmd.lyrics.lyrics_track', { trackTitle: trackTitle, trackUrl: trackUrl, lyrics: lyricsPages_1[currentPage_1] }))
                                        .setThumbnail(artworkUrl)
                                        .setTimestamp(),
                                ],
                                components: [row],
                            })];
                    case 6:
                        _a.sent();
                        filter = function (interaction) { var _a; return interaction.user.id === ((_a = ctx.author) === null || _a === void 0 ? void 0 : _a.id); };
                        collector_1 = ctx.channel.createMessageComponentCollector({
                            filter: filter,
                            componentType: discord_js_1.ComponentType.Button,
                            time: 60000,
                        });
                        collector_1.on('collect', function (interaction) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (interaction.customId === 'prev') {
                                            currentPage_1--;
                                        }
                                        else if (interaction.customId === 'next') {
                                            currentPage_1++;
                                        }
                                        else if (interaction.customId === 'stop') {
                                            collector_1.stop();
                                            return [2 /*return*/, interaction.update({ components: [] })];
                                        }
                                        return [4 /*yield*/, interaction.update({
                                                embeds: [
                                                    embed
                                                        .setDescription(ctx.locale('cmd.lyrics.lyrics_track', { trackTitle: trackTitle, trackUrl: trackUrl, lyrics: lyricsPages_1[currentPage_1] }))
                                                        .setThumbnail(artworkUrl)
                                                        .setTimestamp(),
                                                ],
                                                components: [
                                                    new discord_js_1.ActionRowBuilder().addComponents(new discord_js_1.ButtonBuilder()
                                                        .setCustomId('prev')
                                                        .setEmoji(this.client.emoji.page.back)
                                                        .setStyle(discord_js_1.ButtonStyle.Secondary)
                                                        .setDisabled(currentPage_1 === 0), new discord_js_1.ButtonBuilder()
                                                        .setCustomId('stop')
                                                        .setEmoji(this.client.emoji.page.cancel)
                                                        .setStyle(discord_js_1.ButtonStyle.Danger), new discord_js_1.ButtonBuilder()
                                                        .setCustomId('next')
                                                        .setEmoji(this.client.emoji.page.next)
                                                        .setStyle(discord_js_1.ButtonStyle.Secondary)
                                                        .setDisabled(currentPage_1 === lyricsPages_1.length - 1)),
                                                ],
                                            })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        collector_1.on('end', function () {
                            ctx.editMessage({ components: [] });
                        });
                        return [3 /*break*/, 9];
                    case 7: return [4 /*yield*/, ctx.editMessage({
                            embeds: [embed.setColor(client.color.red).setDescription(ctx.locale('cmd.lyrics.errors.no_results'))],
                        })];
                    case 8:
                        _a.sent();
                        _a.label = 9;
                    case 9: return [3 /*break*/, 12];
                    case 10:
                        error_1 = _a.sent();
                        client.logger.error(error_1);
                        return [4 /*yield*/, ctx.editMessage({
                                embeds: [embed.setColor(client.color.red).setDescription(ctx.locale('cmd.lyrics.errors.lyrics_error'))],
                            })];
                    case 11:
                        _a.sent();
                        return [3 /*break*/, 12];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    Lyrics.prototype.paginateLyrics = function (lyrics) {
        var lines = lyrics.split('\n');
        var pages = [];
        var page = '';
        for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
            var line = lines_1[_i];
            if (page.length + line.length > 2048) {
                pages.push(page);
                page = '';
            }
            page += "".concat(line, "\n");
        }
        if (page)
            pages.push(page);
        return pages;
    };
    return Lyrics;
}(index_1.Command));
exports.default = Lyrics;
