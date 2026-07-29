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
var I18n_1 = require("../../structures/I18n");
var index_1 = require("../../structures/index");
var InteractionCreate = /** @class */ (function (_super) {
    __extends(InteractionCreate, _super);
    function InteractionCreate(client, file) {
        return _super.call(this, client, file, {
            name: 'interactionCreate',
        }) || this;
    }
    InteractionCreate.prototype.run = function (interaction) {
        return __awaiter(this, void 0, void 0, function () {
            var ownerId, setup, allowedCategories, commandInSetup, locale, inOwnerIds, inDb, description, commandName, command, ctx, clientMember_1, logs, missingClientPermissions, isDev, voted, voteBtn, queue, dj, djRole_1, hasDJRole, now, timestamps_1, cooldownAmount, expirationTime, timeLeft, embed, error_1, command, error_2;
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            return __generator(this, function (_k) {
                switch (_k.label) {
                    case 0:
                        if (!(interaction.guild && interaction.guildId))
                            return [2 /*return*/];
                        if (!(interaction instanceof discord_js_1.CommandInteraction && interaction.isCommand())) return [3 /*break*/, 47];
                        ownerId = interaction.user.id;
                        return [4 /*yield*/, this.client.db.getSetup(interaction.guildId)];
                    case 1:
                        setup = _k.sent();
                        allowedCategories = ['filters', 'music', 'playlist'];
                        commandInSetup = this.client.commands.get(interaction.commandName);
                        return [4 /*yield*/, this.client.db.getLanguage(interaction.guildId)];
                    case 2:
                        locale = _k.sent();
                        inOwnerIds = (_a = this.client.env.OWNER_IDS) === null || _a === void 0 ? void 0 : _a.includes(ownerId);
                        return [4 /*yield*/, this.client.db.checkOwners(ownerId)];
                    case 3:
                        inDb = _k.sent();
                        if (!!(inOwnerIds || inDb)) return [3 /*break*/, 5];
                        description = 'អធ្យាស្រ័យបតយើងប្រើបានតែម្ចាស់ប៉ុណ្ណោះទេ!';
                        return [4 /*yield*/, interaction.reply({
                                content: description,
                                ephemeral: true,
                            })];
                    case 4: return [2 /*return*/, _k.sent()];
                    case 5:
                        if (!(setup &&
                            interaction.channelId === setup.textId &&
                            !(commandInSetup && allowedCategories.includes(commandInSetup.category)))) return [3 /*break*/, 7];
                        return [4 /*yield*/, interaction.reply({
                                content: (0, I18n_1.T)(locale, 'event.interaction.setup_channel'),
                                ephemeral: true,
                            })];
                    case 6: return [2 /*return*/, _k.sent()];
                    case 7:
                        commandName = interaction.commandName;
                        return [4 /*yield*/, this.client.db.get(interaction.guildId)];
                    case 8:
                        _k.sent();
                        command = this.client.commands.get(commandName);
                        if (!command)
                            return [2 /*return*/];
                        ctx = new index_1.Context(interaction, interaction.options.data);
                        ctx.setArgs(interaction.options.data);
                        ctx.guildLocale = locale;
                        clientMember_1 = interaction.guild.members.resolve(this.client.user);
                        if (!(interaction.inGuild() &&
                            ((_c = (_b = interaction.channel) === null || _b === void 0 ? void 0 : _b.permissionsFor(clientMember_1)) === null || _c === void 0 ? void 0 : _c.has(discord_js_1.PermissionFlagsBits.ViewChannel))))
                            return [2 /*return*/];
                        if (!!(clientMember_1.permissions.has(discord_js_1.PermissionFlagsBits.ViewChannel) &&
                            clientMember_1.permissions.has(discord_js_1.PermissionFlagsBits.SendMessages) &&
                            clientMember_1.permissions.has(discord_js_1.PermissionFlagsBits.EmbedLinks) &&
                            clientMember_1.permissions.has(discord_js_1.PermissionFlagsBits.ReadMessageHistory))) return [3 /*break*/, 10];
                        return [4 /*yield*/, interaction.member
                                .send({
                                content: (0, I18n_1.T)(locale, 'event.interaction.no_send_message'),
                            })
                                .catch(function () {
                                null;
                            })];
                    case 9: return [2 /*return*/, _k.sent()];
                    case 10:
                        logs = this.client.channels.cache.get(this.client.env.LOG_COMMANDS_ID);
                        if (!command.permissions) return [3 /*break*/, 15];
                        if (!((_d = command.permissions) === null || _d === void 0 ? void 0 : _d.client)) return [3 /*break*/, 12];
                        missingClientPermissions = command.permissions.client.filter(function (perm) { return !clientMember_1.permissions.has(perm); });
                        if (!(missingClientPermissions.length > 0)) return [3 /*break*/, 12];
                        return [4 /*yield*/, interaction.reply({
                                content: (0, I18n_1.T)(locale, 'event.interaction.no_permission', {
                                    permissions: missingClientPermissions.map(function (perm) { return "`".concat(perm, "`"); }).join(', '),
                                }),
                                ephemeral: true,
                            })];
                    case 11: return [2 /*return*/, _k.sent()];
                    case 12:
                        if (!(((_e = command.permissions) === null || _e === void 0 ? void 0 : _e.user) &&
                            !interaction.member.permissions.has(command.permissions.user))) return [3 /*break*/, 14];
                        return [4 /*yield*/, interaction.reply({
                                content: (0, I18n_1.T)(locale, 'event.interaction.no_user_permission'),
                                ephemeral: true,
                            })];
                    case 13:
                        _k.sent();
                        return [2 /*return*/];
                    case 14:
                        if (((_f = command.permissions) === null || _f === void 0 ? void 0 : _f.dev) && this.client.env.OWNER_IDS) {
                            isDev = this.client.env.OWNER_IDS.includes(interaction.user.id);
                            if (!isDev)
                                return [2 /*return*/];
                        }
                        _k.label = 15;
                    case 15:
                        if (!(command.vote && this.client.env.TOPGG)) return [3 /*break*/, 18];
                        return [4 /*yield*/, this.client.topGG.hasVoted(interaction.user.id)];
                    case 16:
                        voted = _k.sent();
                        if (!!voted) return [3 /*break*/, 18];
                        voteBtn = new discord_js_1.ActionRowBuilder().addComponents(new discord_js_1.ButtonBuilder()
                            .setLabel((0, I18n_1.T)(locale, 'event.interaction.vote_button'))
                            .setURL("https://top.gg/bot/".concat((_g = this.client.user) === null || _g === void 0 ? void 0 : _g.id, "/vote"))
                            .setStyle(discord_js_1.ButtonStyle.Link));
                        return [4 /*yield*/, interaction.reply({
                                content: (0, I18n_1.T)(locale, 'event.interaction.vote_message'),
                                components: [voteBtn],
                                ephemeral: true,
                            })];
                    case 17: return [2 /*return*/, _k.sent()];
                    case 18:
                        if (!command.player) return [3 /*break*/, 36];
                        if (!command.player.voice) return [3 /*break*/, 28];
                        if (!!interaction.member.voice.channel) return [3 /*break*/, 20];
                        return [4 /*yield*/, interaction.reply({
                                content: (0, I18n_1.T)(locale, 'event.interaction.no_voice_channel', { command: command.name }),
                            })];
                    case 19: return [2 /*return*/, _k.sent()];
                    case 20:
                        if (!!clientMember_1.permissions.has(discord_js_1.PermissionFlagsBits.Connect)) return [3 /*break*/, 22];
                        return [4 /*yield*/, interaction.reply({
                                content: (0, I18n_1.T)(locale, 'event.interaction.no_connect_permission', { command: command.name }),
                            })];
                    case 21: return [2 /*return*/, _k.sent()];
                    case 22:
                        if (!!clientMember_1.permissions.has(discord_js_1.PermissionFlagsBits.Speak)) return [3 /*break*/, 24];
                        return [4 /*yield*/, interaction.reply({
                                content: (0, I18n_1.T)(locale, 'event.interaction.no_speak_permission', { command: command.name }),
                            })];
                    case 23: return [2 /*return*/, _k.sent()];
                    case 24:
                        if (!(((_h = interaction.member.voice.channel) === null || _h === void 0 ? void 0 : _h.type) === discord_js_1.ChannelType.GuildStageVoice &&
                            !clientMember_1.permissions.has(discord_js_1.PermissionFlagsBits.RequestToSpeak))) return [3 /*break*/, 26];
                        return [4 /*yield*/, interaction.reply({
                                content: (0, I18n_1.T)(locale, 'event.interaction.no_request_to_speak', { command: command.name }),
                            })];
                    case 25: return [2 /*return*/, _k.sent()];
                    case 26:
                        if (!(clientMember_1.voice.channel &&
                            clientMember_1.voice.channelId !== interaction.member.voice.channelId)) return [3 /*break*/, 28];
                        return [4 /*yield*/, interaction.reply({
                                content: (0, I18n_1.T)(locale, 'event.interaction.different_voice_channel', {
                                    channel: "<#".concat(clientMember_1.voice.channelId, ">"),
                                    command: command.name,
                                }),
                            })];
                    case 27: return [2 /*return*/, _k.sent()];
                    case 28:
                        if (!command.player.active) return [3 /*break*/, 30];
                        queue = this.client.manager.getPlayer(interaction.guildId);
                        if (!!(queue === null || queue === void 0 ? void 0 : queue.queue.current)) return [3 /*break*/, 30];
                        return [4 /*yield*/, interaction.reply({
                                content: (0, I18n_1.T)(locale, 'event.interaction.no_music_playing'),
                            })];
                    case 29: return [2 /*return*/, _k.sent()];
                    case 30:
                        if (!command.player.dj) return [3 /*break*/, 36];
                        return [4 /*yield*/, this.client.db.getDj(interaction.guildId)];
                    case 31:
                        dj = _k.sent();
                        if (!(dj === null || dj === void 0 ? void 0 : dj.mode)) return [3 /*break*/, 36];
                        return [4 /*yield*/, this.client.db.getRoles(interaction.guildId)];
                    case 32:
                        djRole_1 = _k.sent();
                        if (!!djRole_1) return [3 /*break*/, 34];
                        return [4 /*yield*/, interaction.reply({
                                content: (0, I18n_1.T)(locale, 'event.interaction.no_dj_role'),
                            })];
                    case 33: return [2 /*return*/, _k.sent()];
                    case 34:
                        hasDJRole = interaction.member.roles.cache.some(function (role) {
                            return djRole_1.map(function (r) { return r.roleId; }).includes(role.id);
                        });
                        if (!!(hasDJRole && !interaction.member.permissions.has(discord_js_1.PermissionFlagsBits.ManageGuild))) return [3 /*break*/, 36];
                        return [4 /*yield*/, interaction.reply({
                                content: (0, I18n_1.T)(locale, 'event.interaction.no_dj_permission'),
                                ephemeral: true,
                            })];
                    case 35: return [2 /*return*/, _k.sent()];
                    case 36:
                        if (!this.client.cooldown.has(commandName)) {
                            this.client.cooldown.set(commandName, new discord_js_1.Collection());
                        }
                        now = Date.now();
                        timestamps_1 = this.client.cooldown.get(commandName);
                        cooldownAmount = (command.cooldown || 5) * 1000;
                        if (!timestamps_1.has(interaction.user.id)) return [3 /*break*/, 39];
                        expirationTime = timestamps_1.get(interaction.user.id) + cooldownAmount;
                        timeLeft = (expirationTime - now) / 1000;
                        if (!(now < expirationTime && timeLeft > 0.9)) return [3 /*break*/, 38];
                        return [4 /*yield*/, interaction.reply({
                                content: (0, I18n_1.T)(locale, 'event.interaction.cooldown', {
                                    time: timeLeft.toFixed(1),
                                    command: commandName,
                                }),
                            })];
                    case 37: return [2 /*return*/, _k.sent()];
                    case 38:
                        timestamps_1.set(interaction.user.id, now);
                        setTimeout(function () { return timestamps_1.delete(interaction.user.id); }, cooldownAmount);
                        return [3 /*break*/, 40];
                    case 39:
                        timestamps_1.set(interaction.user.id, now);
                        setTimeout(function () { return timestamps_1.delete(interaction.user.id); }, cooldownAmount);
                        _k.label = 40;
                    case 40:
                        _k.trys.push([40, 44, , 46]);
                        return [4 /*yield*/, command.run(this.client, ctx, ctx.args)];
                    case 41:
                        _k.sent();
                        if (setup && interaction.channelId === setup.textId && allowedCategories.includes(command.category)) {
                            setTimeout(function () {
                                interaction.deleteReply().catch(function () {
                                    null;
                                });
                            }, 5000);
                        }
                        if (!logs) return [3 /*break*/, 43];
                        embed = new discord_js_1.EmbedBuilder()
                            .setAuthor({
                            name: 'Slash - Command Logs',
                            iconURL: (_j = this.client.user) === null || _j === void 0 ? void 0 : _j.avatarURL({ size: 2048 }),
                        })
                            .setColor(this.client.config.color.blue)
                            .addFields({ name: 'Command', value: "`".concat(command.name, "`"), inline: true }, { name: 'User', value: "".concat(interaction.user.tag, " (`").concat(interaction.user.id, "`)"), inline: true }, { name: 'Guild', value: "".concat(interaction.guild.name, " (`").concat(interaction.guild.id, "`)"), inline: true })
                            .setTimestamp();
                        return [4 /*yield*/, logs.send({ embeds: [embed] })];
                    case 42:
                        _k.sent();
                        _k.label = 43;
                    case 43: return [3 /*break*/, 46];
                    case 44:
                        error_1 = _k.sent();
                        this.client.logger.error(error_1);
                        return [4 /*yield*/, interaction.reply({
                                content: (0, I18n_1.T)(locale, 'event.interaction.error', { error: error_1 }),
                            })];
                    case 45:
                        _k.sent();
                        return [3 /*break*/, 46];
                    case 46: return [3 /*break*/, 51];
                    case 47:
                        if (!(interaction.type === discord_js_1.InteractionType.ApplicationCommandAutocomplete)) return [3 /*break*/, 51];
                        command = this.client.commands.get(interaction.commandName);
                        if (!command)
                            return [2 /*return*/];
                        _k.label = 48;
                    case 48:
                        _k.trys.push([48, 50, , 51]);
                        return [4 /*yield*/, command.autocomplete(interaction)];
                    case 49:
                        _k.sent();
                        return [3 /*break*/, 51];
                    case 50:
                        error_2 = _k.sent();
                        this.client.logger.error(error_2);
                        return [3 /*break*/, 51];
                    case 51: return [2 /*return*/];
                }
            });
        });
    };
    return InteractionCreate;
}(index_1.Event));
exports.default = InteractionCreate;
