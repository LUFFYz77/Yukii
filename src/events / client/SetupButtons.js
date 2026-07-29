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
var I18n_1 = require("../../structures/I18n");
var index_1 = require("../../structures/index");
var Buttons_1 = require("../../utils/Buttons");
var SetupSystem_1 = require("../../utils/SetupSystem");
var TrackStart_1 = require("../player/TrackStart");
var SetupButtons = /** @class */ (function (_super) {
    __extends(SetupButtons, _super);
    function SetupButtons(client, file) {
        return _super.call(this, client, file, {
            name: 'setupButtons',
        }) || this;
    }
    SetupButtons.prototype.run = function (interaction) {
        return __awaiter(this, void 0, void 0, function () {
            var locale, clientMember, player, data, _a, title, uri, duration, artworkUrl, sourceName, isStream, message, _e_1, iconUrl, embed, handleVolumeChange, _b, time, name_1, time, loopOptions, newLoop;
            var _this = this;
            var _c, _d, _f, _g, _h;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0: return [4 /*yield*/, this.client.db.getLanguage(interaction.guildId)];
                    case 1:
                        locale = _j.sent();
                        if (!!interaction.replied) return [3 /*break*/, 3];
                        return [4 /*yield*/, interaction.deferReply().catch(function () {
                                null;
                            })];
                    case 2:
                        _j.sent();
                        _j.label = 3;
                    case 3:
                        if (!!interaction.member.voice.channel) return [3 /*break*/, 5];
                        return [4 /*yield*/, (0, SetupSystem_1.buttonReply)(interaction, (0, I18n_1.T)(locale, 'event.setupButton.no_voice_channel_button'), this.client.color.red)];
                    case 4: return [2 /*return*/, _j.sent()];
                    case 5:
                        clientMember = interaction.guild.members.cache.get((_c = this.client.user) === null || _c === void 0 ? void 0 : _c.id);
                        if (!(clientMember.voice.channel && clientMember.voice.channelId !== interaction.member.voice.channelId)) return [3 /*break*/, 7];
                        return [4 /*yield*/, (0, SetupSystem_1.buttonReply)(interaction, (0, I18n_1.T)(locale, 'event.setupButton.different_voice_channel_button', {
                                channel: clientMember.voice.channel,
                            }), this.client.color.red)];
                    case 6: return [2 /*return*/, _j.sent()];
                    case 7:
                        player = this.client.manager.getPlayer(interaction.guildId);
                        if (!!player) return [3 /*break*/, 9];
                        return [4 /*yield*/, (0, SetupSystem_1.buttonReply)(interaction, (0, I18n_1.T)(locale, 'event.setupButton.no_music_playing'), this.client.color.red)];
                    case 8: return [2 /*return*/, _j.sent()];
                    case 9:
                        if (!!player.queue) return [3 /*break*/, 11];
                        return [4 /*yield*/, (0, SetupSystem_1.buttonReply)(interaction, (0, I18n_1.T)(locale, 'event.setupButton.no_music_playing'), this.client.color.red)];
                    case 10: return [2 /*return*/, _j.sent()];
                    case 11:
                        if (!!player.queue.current) return [3 /*break*/, 13];
                        return [4 /*yield*/, (0, SetupSystem_1.buttonReply)(interaction, (0, I18n_1.T)(locale, 'event.setupButton.no_music_playing'), this.client.color.red)];
                    case 12: return [2 /*return*/, _j.sent()];
                    case 13: return [4 /*yield*/, this.client.db.getSetup(interaction.guildId)];
                    case 14:
                        data = _j.sent();
                        _a = player.queue.current.info, title = _a.title, uri = _a.uri, duration = _a.duration, artworkUrl = _a.artworkUrl, sourceName = _a.sourceName, isStream = _a.isStream;
                        _j.label = 15;
                    case 15:
                        _j.trys.push([15, 17, , 18]);
                        return [4 /*yield*/, interaction.channel.messages.fetch(data === null || data === void 0 ? void 0 : data.messageId, {
                                cache: true,
                            })];
                    case 16:
                        message = _j.sent();
                        return [3 /*break*/, 18];
                    case 17:
                        _e_1 = _j.sent();
                        null;
                        return [3 /*break*/, 18];
                    case 18:
                        iconUrl = this.client.config.icons[sourceName] || ((_d = this.client.user) === null || _d === void 0 ? void 0 : _d.displayAvatarURL({ extension: 'png' }));
                        embed = this.client
                            .embed()
                            .setAuthor({
                            name: (0, I18n_1.T)(locale, 'event.setupButton.now_playing'),
                            iconURL: iconUrl,
                        })
                            .setColor(this.client.color.main)
                            .setDescription("[".concat(title, "](").concat(uri, ") - ").concat(isStream ? (0, I18n_1.T)(locale, 'event.setupButton.live') : this.client.utils.formatTime(duration), " - ").concat((0, I18n_1.T)(locale, 'event.setupButton.requested_by', { requester: player.queue.current.requester.id })))
                            .setImage(artworkUrl || ((_f = this.client.user) === null || _f === void 0 ? void 0 : _f.displayAvatarURL({ extension: 'png' })));
                        if (!interaction.isButton())
                            return [2 /*return*/];
                        return [4 /*yield*/, (0, TrackStart_1.checkDj)(this.client, interaction)];
                    case 19:
                        if (!!(_j.sent())) return [3 /*break*/, 21];
                        return [4 /*yield*/, (0, SetupSystem_1.buttonReply)(interaction, (0, I18n_1.T)(locale, 'event.setupButton.no_dj_permission'), this.client.color.red)];
                    case 20: return [2 /*return*/, _j.sent()];
                    case 21:
                        if (!message) return [3 /*break*/, 55];
                        handleVolumeChange = function (change) { return __awaiter(_this, void 0, void 0, function () {
                            var vol;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        vol = player.volume + change;
                                        player.setVolume(vol);
                                        return [4 /*yield*/, (0, SetupSystem_1.buttonReply)(interaction, (0, I18n_1.T)(locale, 'event.setupButton.volume_set', { vol: vol }), this.client.color.main)];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, message.edit({
                                                embeds: [
                                                    embed.setFooter({
                                                        text: (0, I18n_1.T)(locale, 'event.setupButton.volume_footer', {
                                                            vol: vol,
                                                            displayName: interaction.member.displayName,
                                                        }),
                                                        iconURL: interaction.member.displayAvatarURL({}),
                                                    }),
                                                ],
                                            })];
                                    case 2:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); };
                        _b = interaction.customId;
                        switch (_b) {
                            case 'PREV_BUT': return [3 /*break*/, 22];
                            case 'REWIND_BUT': return [3 /*break*/, 27];
                            case 'PAUSE_BUT': return [3 /*break*/, 30];
                            case 'FORWARD_BUT': return [3 /*break*/, 33];
                            case 'SKIP_BUT': return [3 /*break*/, 38];
                            case 'LOW_VOL_BUT': return [3 /*break*/, 43];
                            case 'LOOP_BUT': return [3 /*break*/, 45];
                            case 'STOP_BUT': return [3 /*break*/, 48];
                            case 'SHUFFLE_BUT': return [3 /*break*/, 51];
                            case 'HIGH_VOL_BUT': return [3 /*break*/, 53];
                        }
                        return [3 /*break*/, 55];
                    case 22:
                        if (!!player.queue.previous) return [3 /*break*/, 24];
                        return [4 /*yield*/, (0, SetupSystem_1.buttonReply)(interaction, (0, I18n_1.T)(locale, 'event.setupButton.no_previous_track'), this.client.color.main)];
                    case 23: return [2 /*return*/, _j.sent()];
                    case 24:
                        player.play({
                            track: player.queue.previous[0],
                        });
                        return [4 /*yield*/, (0, SetupSystem_1.buttonReply)(interaction, (0, I18n_1.T)(locale, 'event.setupButton.playing_previous'), this.client.color.main)];
                    case 25:
                        _j.sent();
                        return [4 /*yield*/, message.edit({
                                embeds: [
                                    embed.setFooter({
                                        text: (0, I18n_1.T)(locale, 'event.setupButton.previous_footer', {
                                            displayName: interaction.member.displayName,
                                        }),
                                        iconURL: interaction.member.displayAvatarURL({}),
                                    }),
                                ],
                            })];
                    case 26:
                        _j.sent();
                        return [3 /*break*/, 55];
                    case 27:
                        time = player.position - 10000;
                        if (time < 0) {
                            player.seek(0);
                        }
                        else {
                            player.seek(time);
                        }
                        return [4 /*yield*/, (0, SetupSystem_1.buttonReply)(interaction, (0, I18n_1.T)(locale, 'event.setupButton.rewinded'), this.client.color.main)];
                    case 28:
                        _j.sent();
                        return [4 /*yield*/, message.edit({
                                embeds: [
                                    embed.setFooter({
                                        text: (0, I18n_1.T)(locale, 'event.setupButton.rewind_footer', {
                                            displayName: interaction.member.displayName,
                                        }),
                                        iconURL: interaction.member.displayAvatarURL({}),
                                    }),
                                ],
                            })];
                    case 29:
                        _j.sent();
                        return [3 /*break*/, 55];
                    case 30:
                        name_1 = player.paused ? (0, I18n_1.T)(locale, 'event.setupButton.resumed') : (0, I18n_1.T)(locale, 'event.setupButton.paused');
                        if (player.paused) {
                            player.resume();
                        }
                        else {
                            player.pause();
                        }
                        return [4 /*yield*/, (0, SetupSystem_1.buttonReply)(interaction, (0, I18n_1.T)(locale, 'event.setupButton.pause_resume', { name: name_1 }), this.client.color.main)];
                    case 31:
                        _j.sent();
                        return [4 /*yield*/, message.edit({
                                embeds: [
                                    embed.setFooter({
                                        text: (0, I18n_1.T)(locale, 'event.setupButton.pause_resume_footer', {
                                            name: name_1,
                                            displayName: interaction.member.displayName,
                                        }),
                                        iconURL: interaction.member.displayAvatarURL({}),
                                    }),
                                ],
                                components: (0, Buttons_1.getButtons)(player, this.client),
                            })];
                    case 32:
                        _j.sent();
                        return [3 /*break*/, 55];
                    case 33:
                        time = player.position + 10000;
                        if (!(time > player.queue.current.info.duration)) return [3 /*break*/, 35];
                        return [4 /*yield*/, (0, SetupSystem_1.buttonReply)(interaction, (0, I18n_1.T)(locale, 'event.setupButton.forward_limit'), this.client.color.main)];
                    case 34: return [2 /*return*/, _j.sent()];
                    case 35:
                        player.seek(time);
                        return [4 /*yield*/, (0, SetupSystem_1.buttonReply)(interaction, (0, I18n_1.T)(locale, 'event.setupButton.forwarded'), this.client.color.main)];
                    case 36:
                        _j.sent();
                        return [4 /*yield*/, message.edit({
                                embeds: [
                                    embed.setFooter({
                                        text: (0, I18n_1.T)(locale, 'event.setupButton.forward_footer', {
                                            displayName: interaction.member.displayName,
                                        }),
                                        iconURL: interaction.member.displayAvatarURL({}),
                                    }),
                                ],
                            })];
                    case 37:
                        _j.sent();
                        return [3 /*break*/, 55];
                    case 38:
                        if (!(player.queue.tracks.length === 0)) return [3 /*break*/, 40];
                        return [4 /*yield*/, (0, SetupSystem_1.buttonReply)(interaction, (0, I18n_1.T)(locale, 'event.setupButton.no_music_to_skip'), this.client.color.main)];
                    case 39: return [2 /*return*/, _j.sent()];
                    case 40:
                        player.skip();
                        return [4 /*yield*/, (0, SetupSystem_1.buttonReply)(interaction, (0, I18n_1.T)(locale, 'event.setupButton.skipped'), this.client.color.main)];
                    case 41:
                        _j.sent();
                        return [4 /*yield*/, message.edit({
                                embeds: [
                                    embed.setFooter({
                                        text: (0, I18n_1.T)(locale, 'event.setupButton.skipped_footer', {
                                            displayName: interaction.member.displayName,
                                        }),
                                        iconURL: interaction.member.displayAvatarURL({}),
                                    }),
                                ],
                            })];
                    case 42:
                        _j.sent();
                        return [3 /*break*/, 55];
                    case 43: return [4 /*yield*/, handleVolumeChange(-10)];
                    case 44:
                        _j.sent();
                        return [3 /*break*/, 55];
                    case 45:
                        loopOptions = ['off', 'queue', 'track'];
                        newLoop = loopOptions[(loopOptions.indexOf(player.repeatMode) + 1) % loopOptions.length];
                        player.setRepeatMode(newLoop);
                        return [4 /*yield*/, (0, SetupSystem_1.buttonReply)(interaction, (0, I18n_1.T)(locale, 'event.setupButton.loop_set', {
                                loop: newLoop,
                            }), this.client.color.main)];
                    case 46:
                        _j.sent();
                        return [4 /*yield*/, message.edit({
                                embeds: [
                                    embed.setFooter({
                                        text: (0, I18n_1.T)(locale, 'event.setupButton.loop_footer', {
                                            loop: newLoop,
                                            displayName: interaction.member.displayName,
                                        }),
                                        iconURL: interaction.member.displayAvatarURL({}),
                                    }),
                                ],
                            })];
                    case 47:
                        _j.sent();
                        return [3 /*break*/, 55];
                    case 48:
                        player.stopPlaying(true, false);
                        return [4 /*yield*/, (0, SetupSystem_1.buttonReply)(interaction, (0, I18n_1.T)(locale, 'event.setupButton.stopped'), this.client.color.main)];
                    case 49:
                        _j.sent();
                        return [4 /*yield*/, message.edit({
                                embeds: [
                                    embed
                                        .setFooter({
                                        text: (0, I18n_1.T)(locale, 'event.setupButton.stopped_footer', {
                                            displayName: interaction.member.displayName,
                                        }),
                                        iconURL: interaction.member.displayAvatarURL({}),
                                    })
                                        .setDescription((0, I18n_1.T)(locale, 'event.setupButton.nothing_playing'))
                                        .setImage(this.client.config.links.img)
                                        .setAuthor({
                                        name: (_g = this.client.user) === null || _g === void 0 ? void 0 : _g.username,
                                        iconURL: (_h = this.client.user) === null || _h === void 0 ? void 0 : _h.displayAvatarURL({
                                            extension: 'png',
                                        }),
                                    }),
                                ],
                            })];
                    case 50:
                        _j.sent();
                        return [3 /*break*/, 55];
                    case 51:
                        player.queue.shuffle();
                        return [4 /*yield*/, (0, SetupSystem_1.buttonReply)(interaction, (0, I18n_1.T)(locale, 'event.setupButton.shuffled'), this.client.color.main)];
                    case 52:
                        _j.sent();
                        return [3 /*break*/, 55];
                    case 53: return [4 /*yield*/, handleVolumeChange(10)];
                    case 54:
                        _j.sent();
                        return [3 /*break*/, 55];
                    case 55: return [2 /*return*/];
                }
            });
        });
    };
    return SetupButtons;
}(index_1.Event));
exports.default = SetupButtons;
