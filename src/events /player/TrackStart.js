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
exports.checkDj = checkDj;
var discord_js_1 = require("discord.js");
var I18n_1 = require("../../structures/I18n");
var index_1 = require("../../structures/index");
var SetupSystem_1 = require("../../utils/SetupSystem");
var TrackStart = /** @class */ (function (_super) {
    __extends(TrackStart, _super);
    function TrackStart(client, file) {
        return _super.call(this, client, file, {
            name: 'trackStart',
        }) || this;
    }
    TrackStart.prototype.run = function (player, track, _payload) {
        return __awaiter(this, void 0, void 0, function () {
            var guild, channel, locale, embed, setup, textChannel, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        guild = this.client.guilds.cache.get(player.guildId);
                        if (!guild)
                            return [2 /*return*/];
                        if (!player.textChannelId)
                            return [2 /*return*/];
                        if (!track)
                            return [2 /*return*/];
                        channel = guild.channels.cache.get(player.textChannelId);
                        if (!channel)
                            return [2 /*return*/];
                        return [4 /*yield*/, this.client.db.getLanguage(guild.id)];
                    case 1:
                        locale = _a.sent();
                        embed = this.client.embed()
                            .setColor(this.client.color.main)
                            .setDescription("Started playing **[".concat(track.info.title, "](").concat(track.info.uri, ")**"));
                        return [4 /*yield*/, this.client.db.getSetup(guild.id)];
                    case 2:
                        setup = _a.sent();
                        if (!(setup === null || setup === void 0 ? void 0 : setup.textId)) return [3 /*break*/, 5];
                        textChannel = guild.channels.cache.get(setup.textId);
                        if (!textChannel) return [3 /*break*/, 4];
                        return [4 /*yield*/, (0, SetupSystem_1.trackStart)(setup.messageId, textChannel, player, track, this.client, locale)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, channel.send({
                            embeds: [embed],
                        })];
                    case 6:
                        message = _a.sent();
                        player.set('messageId', message.id);
                        createCollector(message, player, track, embed, this.client, locale);
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    return TrackStart;
}(index_1.Event));
exports.default = TrackStart;
function createButtonRow(player, client) {
    var previousButton = new discord_js_1.ButtonBuilder()
        .setCustomId('previous')
        .setEmoji(client.emoji.previous)
        .setStyle(discord_js_1.ButtonStyle.Secondary)
        .setDisabled(!player.queue.previous);
    var resumeButton = new discord_js_1.ButtonBuilder()
        .setCustomId('resume')
        .setEmoji(player.paused ? client.emoji.resume : client.emoji.pause)
        .setStyle(player.paused ? discord_js_1.ButtonStyle.Success : discord_js_1.ButtonStyle.Secondary);
    // const stopButton = new ButtonBuilder().setCustomId('stop').setEmoji(client.emoji.stop).setStyle(ButtonStyle.Danger);
    var skipButton = new discord_js_1.ButtonBuilder()
        .setCustomId('skip')
        .setEmoji(client.emoji.skip)
        .setStyle(discord_js_1.ButtonStyle.Secondary);
    // const loopButton = new ButtonBuilder()
    // 	.setCustomId('loop')
    // 	.setEmoji(player.repeatMode === 'track' ? client.emoji.loop.track : client.emoji.loop.none)
    // 	.setStyle(player.repeatMode !== 'off' ? ButtonStyle.Success : ButtonStyle.Secondary);
    return new discord_js_1.ActionRowBuilder().addComponents(
    // stopButton,
    previousButton, resumeButton, skipButton);
}
function createCollector(message, player, _track, embed, client, locale) {
    var _this = this;
    var collector = message.createMessageComponentCollector({
        filter: function (b) { return __awaiter(_this, void 0, void 0, function () {
            var isSameVoiceChannel;
            var _a, _b, _c, _d, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        if (b.member instanceof discord_js_1.GuildMember) {
                            isSameVoiceChannel = ((_b = (_a = b.guild) === null || _a === void 0 ? void 0 : _a.members.me) === null || _b === void 0 ? void 0 : _b.voice.channelId) === b.member.voice.channelId;
                            if (isSameVoiceChannel)
                                return [2 /*return*/, true];
                        }
                        return [4 /*yield*/, b.reply({
                                content: (0, I18n_1.T)(locale, 'player.trackStart.not_connected_to_voice_channel', {
                                    channel: (_e = (_d = (_c = b.guild) === null || _c === void 0 ? void 0 : _c.members.me) === null || _d === void 0 ? void 0 : _d.voice.channelId) !== null && _e !== void 0 ? _e : 'None',
                                }),
                                ephemeral: true,
                            })];
                    case 1:
                        _f.sent();
                        return [2 /*return*/, false];
                }
            });
        }); },
    });
    collector.on('collect', function (interaction) { return __awaiter(_this, void 0, void 0, function () {
        var editMessage, _a, previousTrack, _b;
        var _this = this;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, checkDj(client, interaction)];
                case 1:
                    if (!!(_c.sent())) return [3 /*break*/, 3];
                    return [4 /*yield*/, interaction.reply({
                            content: (0, I18n_1.T)(locale, 'player.trackStart.need_dj_role'),
                            ephemeral: true,
                        })];
                case 2:
                    _c.sent();
                    return [2 /*return*/];
                case 3:
                    editMessage = function (text) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!message) return [3 /*break*/, 2];
                                    return [4 /*yield*/, message.edit({
                                            embeds: [
                                                embed.setFooter({
                                                    text: text,
                                                    iconURL: interaction.user.avatarURL({}),
                                                }),
                                            ],
                                            components: [createButtonRow(player, client)],
                                        })];
                                case 1:
                                    _a.sent();
                                    _a.label = 2;
                                case 2: return [2 /*return*/];
                            }
                        });
                    }); };
                    _a = interaction.customId;
                    switch (_a) {
                        case 'previous': return [3 /*break*/, 4];
                        case 'resume': return [3 /*break*/, 10];
                        case 'stop': return [3 /*break*/, 17];
                        case 'skip': return [3 /*break*/, 19];
                        case 'loop': return [3 /*break*/, 25];
                    }
                    return [3 /*break*/, 34];
                case 4:
                    if (!player.queue.previous) return [3 /*break*/, 7];
                    return [4 /*yield*/, interaction.deferUpdate()];
                case 5:
                    _c.sent();
                    previousTrack = player.queue.previous[0];
                    player.play({
                        track: previousTrack,
                    });
                    return [4 /*yield*/, editMessage((0, I18n_1.T)(locale, 'player.trackStart.previous_by', {
                            user: interaction.user.tag,
                        }))];
                case 6:
                    _c.sent();
                    return [3 /*break*/, 9];
                case 7: return [4 /*yield*/, interaction.reply({
                        content: (0, I18n_1.T)(locale, 'player.trackStart.no_previous_song'),
                        ephemeral: true,
                    })];
                case 8:
                    _c.sent();
                    _c.label = 9;
                case 9: return [3 /*break*/, 34];
                case 10:
                    if (!player.paused) return [3 /*break*/, 13];
                    player.resume();
                    return [4 /*yield*/, interaction.deferUpdate()];
                case 11:
                    _c.sent();
                    return [4 /*yield*/, editMessage((0, I18n_1.T)(locale, 'player.trackStart.resumed_by', {
                            user: interaction.user.tag,
                        }))];
                case 12:
                    _c.sent();
                    return [3 /*break*/, 16];
                case 13:
                    player.pause();
                    return [4 /*yield*/, interaction.deferUpdate()];
                case 14:
                    _c.sent();
                    return [4 /*yield*/, editMessage((0, I18n_1.T)(locale, 'player.trackStart.paused_by', {
                            user: interaction.user.tag,
                        }))];
                case 15:
                    _c.sent();
                    _c.label = 16;
                case 16: return [3 /*break*/, 34];
                case 17:
                    player.stopPlaying(true, false);
                    return [4 /*yield*/, interaction.deferUpdate()];
                case 18:
                    _c.sent();
                    return [3 /*break*/, 34];
                case 19:
                    if (!(player.queue.tracks.length > 0)) return [3 /*break*/, 22];
                    return [4 /*yield*/, interaction.deferUpdate()];
                case 20:
                    _c.sent();
                    player.skip();
                    return [4 /*yield*/, editMessage((0, I18n_1.T)(locale, 'player.trackStart.skipped_by', {
                            user: interaction.user.tag,
                        }))];
                case 21:
                    _c.sent();
                    return [3 /*break*/, 24];
                case 22: return [4 /*yield*/, interaction.reply({
                        content: (0, I18n_1.T)(locale, 'player.trackStart.no_more_songs_in_queue'),
                        ephemeral: true,
                    })];
                case 23:
                    _c.sent();
                    _c.label = 24;
                case 24: return [3 /*break*/, 34];
                case 25: return [4 /*yield*/, interaction.deferUpdate()];
                case 26:
                    _c.sent();
                    _b = player.repeatMode;
                    switch (_b) {
                        case 'off': return [3 /*break*/, 27];
                        case 'track': return [3 /*break*/, 29];
                        case 'queue': return [3 /*break*/, 31];
                    }
                    return [3 /*break*/, 33];
                case 27:
                    player.setRepeatMode('track');
                    return [4 /*yield*/, editMessage((0, I18n_1.T)(locale, 'player.trackStart.looping_by', {
                            user: interaction.user.tag,
                        }))];
                case 28:
                    _c.sent();
                    return [3 /*break*/, 33];
                case 29:
                    player.setRepeatMode('queue');
                    return [4 /*yield*/, editMessage((0, I18n_1.T)(locale, 'player.trackStart.looping_queue_by', {
                            user: interaction.user.tag,
                        }))];
                case 30:
                    _c.sent();
                    return [3 /*break*/, 33];
                case 31:
                    player.setRepeatMode('off');
                    return [4 /*yield*/, editMessage((0, I18n_1.T)(locale, 'player.trackStart.looping_off_by', {
                            user: interaction.user.tag,
                        }))];
                case 32:
                    _c.sent();
                    return [3 /*break*/, 33];
                case 33: return [3 /*break*/, 34];
                case 34: return [2 /*return*/];
            }
        });
    }); });
}
function checkDj(client, interaction) {
    return __awaiter(this, void 0, void 0, function () {
        var dj, djRole_1, hasDjRole;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client.db.getDj(interaction.guildId)];
                case 1:
                    dj = _a.sent();
                    if (!(dj === null || dj === void 0 ? void 0 : dj.mode)) return [3 /*break*/, 3];
                    return [4 /*yield*/, client.db.getRoles(interaction.guildId)];
                case 2:
                    djRole_1 = _a.sent();
                    if (!djRole_1)
                        return [2 /*return*/, false];
                    hasDjRole = interaction.member.roles.cache.some(function (role) { return djRole_1.map(function (r) { return r.roleId; }).includes(role.id); });
                    if (!(hasDjRole || interaction.member.permissions.has(discord_js_1.PermissionFlagsBits.ManageGuild))) {
                        return [2 /*return*/, false];
                    }
                    _a.label = 3;
                case 3: return [2 /*return*/, true];
            }
        });
    });
}
