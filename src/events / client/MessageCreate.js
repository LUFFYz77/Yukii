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
var MessageCreate = /** @class */ (function (_super) {
    __extends(MessageCreate, _super);
    function MessageCreate(client, file) {
        return _super.call(this, client, file, {
            name: 'messageCreate',
        }) || this;
    }
    MessageCreate.prototype.run = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var setup, locale, guild, mention, embed, escapeRegex, prefixRegex, match, matchedPrefix, ownerId, inOwnerIds, inDb, description, args, cmd, command, ctx, clientMember, isDev, missingClientPermissions, voted, voteBtn, queue, dj, djRole_1, hasDJRole, embed, now, timestamps, cooldownAmount, expirationTime, timeLeft, error_1, logs, embed;
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
            return __generator(this, function (_p) {
                switch (_p.label) {
                    case 0:
                        if (message.author.bot)
                            return [2 /*return*/];
                        if (!(message.guild && message.guildId))
                            return [2 /*return*/];
                        return [4 /*yield*/, this.client.db.getSetup(message.guildId)];
                    case 1:
                        setup = _p.sent();
                        if (setup && setup.textId === message.channelId) {
                            return [2 /*return*/, this.client.emit('setupSystem', message)];
                        }
                        return [4 /*yield*/, this.client.db.getLanguage(message.guildId)];
                    case 2:
                        locale = _p.sent();
                        return [4 /*yield*/, this.client.db.get(message.guildId)];
                    case 3:
                        guild = _p.sent();
                        mention = new RegExp("^<@!?".concat((_a = this.client.user) === null || _a === void 0 ? void 0 : _a.id, ">( |)$"));
                        if (mention.test(message.content)) {
                            embed = this.client.embed()
                                .setColor(this.client.color.main)
                                .setTitle("".concat(this.client.config.emoji.main.hello, " Heyoo! ").concat(message.author.displayName))
                                .setDescription("My Name is ".concat((_b = this.client.user) === null || _b === void 0 ? void 0 : _b.displayName, ".\n") +
                                "My prefix for this server is **`".concat(guild === null || guild === void 0 ? void 0 : guild.prefix, "`**.\n\n") +
                                "Do you need help? please use **`".concat(guild === null || guild === void 0 ? void 0 : guild.prefix, "help`**!!!"))
                                .setFooter({
                                text: 'Buy Me A Coffee | ABA: 500 057 310',
                            });
                            return [2 /*return*/, message.reply({ embeds: [embed] })];
                        }
                        escapeRegex = function (str) { return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); };
                        prefixRegex = new RegExp("^(<@!?".concat((_c = this.client.user) === null || _c === void 0 ? void 0 : _c.id, ">|").concat(escapeRegex(guild.prefix), ")\\s*"), 'i');
                        if (!prefixRegex.test(message.content))
                            return [2 /*return*/];
                        match = message.content.match(prefixRegex);
                        if (!match)
                            return [2 /*return*/];
                        matchedPrefix = match[0];
                        ownerId = message.author.id;
                        inOwnerIds = (_d = this.client.env.OWNER_IDS) === null || _d === void 0 ? void 0 : _d.includes(ownerId);
                        return [4 /*yield*/, this.client.db.checkOwners(ownerId)];
                    case 4:
                        inDb = _p.sent();
                        if (matchedPrefix) {
                            if (!(inOwnerIds || inDb)) {
                                description = 'អធ្យាស្រ័យបតយើងប្រើបានតែម្ចាស់ប៉ុណ្ណោះទេ!';
                                return [2 /*return*/, message.reply({ content: description })];
                            }
                        }
                        args = message.content.slice(matchedPrefix.length).trim().split(/ +/g);
                        cmd = (_e = args.shift()) === null || _e === void 0 ? void 0 : _e.toLowerCase();
                        if (!cmd)
                            return [2 /*return*/];
                        command = this.client.commands.get(cmd) || this.client.commands.get(this.client.aliases.get(cmd));
                        if (!command)
                            return [2 /*return*/];
                        ctx = new index_1.Context(message, args);
                        ctx.setArgs(args);
                        ctx.guildLocale = locale;
                        clientMember = message.guild.members.resolve(this.client.user);
                        isDev = (_f = this.client.env.OWNER_IDS) === null || _f === void 0 ? void 0 : _f.includes(message.author.id);
                        if (!(message.inGuild() && ((_g = message.channel.permissionsFor(clientMember)) === null || _g === void 0 ? void 0 : _g.has(discord_js_1.PermissionFlagsBits.ViewChannel))))
                            return [2 /*return*/];
                        if (!!(clientMember.permissions.has(discord_js_1.PermissionFlagsBits.ViewChannel) &&
                            clientMember.permissions.has(discord_js_1.PermissionFlagsBits.SendMessages) &&
                            clientMember.permissions.has(discord_js_1.PermissionFlagsBits.EmbedLinks) &&
                            clientMember.permissions.has(discord_js_1.PermissionFlagsBits.ReadMessageHistory))) return [3 /*break*/, 6];
                        return [4 /*yield*/, message.author
                                .send({
                                content: (0, I18n_1.T)(locale, 'event.message.no_send_message'),
                            })
                                .catch(function () {
                                null;
                            })];
                    case 5: return [2 /*return*/, _p.sent()];
                    case 6:
                        if (!command.permissions) return [3 /*break*/, 11];
                        if (!((_h = command.permissions) === null || _h === void 0 ? void 0 : _h.client)) return [3 /*break*/, 8];
                        missingClientPermissions = command.permissions.client.filter(function (perm) { return !clientMember.permissions.has(perm); });
                        if (!(missingClientPermissions.length > 0)) return [3 /*break*/, 8];
                        return [4 /*yield*/, message.reply({
                                content: (0, I18n_1.T)(locale, 'event.message.no_permission', {
                                    permissions: missingClientPermissions.map(function (perm) { return "`".concat(perm, "`"); }).join(', '),
                                }),
                            })];
                    case 7: return [2 /*return*/, _p.sent()];
                    case 8:
                        if (!((_j = command.permissions) === null || _j === void 0 ? void 0 : _j.user)) return [3 /*break*/, 10];
                        if (!!(isDev || message.member.permissions.has(command.permissions.user))) return [3 /*break*/, 10];
                        return [4 /*yield*/, message.reply({
                                content: (0, I18n_1.T)(locale, 'event.message.no_user_permission'),
                            })];
                    case 9: return [2 /*return*/, _p.sent()];
                    case 10:
                        if (((_k = command.permissions) === null || _k === void 0 ? void 0 : _k.dev) && this.client.env.OWNER_IDS) {
                            if (!isDev)
                                return [2 /*return*/];
                        }
                        _p.label = 11;
                    case 11:
                        if (!(command.vote && this.client.env.TOPGG)) return [3 /*break*/, 14];
                        return [4 /*yield*/, this.client.topGG.hasVoted(message.author.id)];
                    case 12:
                        voted = _p.sent();
                        if (!!(isDev || voted)) return [3 /*break*/, 14];
                        voteBtn = new discord_js_1.ActionRowBuilder().addComponents(new discord_js_1.ButtonBuilder()
                            .setLabel((0, I18n_1.T)(locale, 'event.message.vote_button'))
                            .setURL("https://top.gg/bot/".concat((_l = this.client.user) === null || _l === void 0 ? void 0 : _l.id, "/vote"))
                            .setStyle(discord_js_1.ButtonStyle.Link));
                        return [4 /*yield*/, message.reply({
                                content: (0, I18n_1.T)(locale, 'event.message.vote_message'),
                                components: [voteBtn],
                            })];
                    case 13: return [2 /*return*/, _p.sent()];
                    case 14:
                        if (!command.player) return [3 /*break*/, 32];
                        if (!command.player.voice) return [3 /*break*/, 24];
                        if (!!message.member.voice.channel) return [3 /*break*/, 16];
                        return [4 /*yield*/, message.reply({
                                content: (0, I18n_1.T)(locale, 'event.message.no_voice_channel', { command: command.name }),
                            })];
                    case 15: return [2 /*return*/, _p.sent()];
                    case 16:
                        if (!!clientMember.permissions.has(discord_js_1.PermissionFlagsBits.Connect)) return [3 /*break*/, 18];
                        return [4 /*yield*/, message.reply({
                                content: (0, I18n_1.T)(locale, 'event.message.no_connect_permission', { command: command.name }),
                            })];
                    case 17: return [2 /*return*/, _p.sent()];
                    case 18:
                        if (!!clientMember.permissions.has(discord_js_1.PermissionFlagsBits.Speak)) return [3 /*break*/, 20];
                        return [4 /*yield*/, message.reply({
                                content: (0, I18n_1.T)(locale, 'event.message.no_speak_permission', { command: command.name }),
                            })];
                    case 19: return [2 /*return*/, _p.sent()];
                    case 20:
                        if (!(((_m = message.member.voice.channel) === null || _m === void 0 ? void 0 : _m.type) === discord_js_1.ChannelType.GuildStageVoice &&
                            !clientMember.permissions.has(discord_js_1.PermissionFlagsBits.RequestToSpeak))) return [3 /*break*/, 22];
                        return [4 /*yield*/, message.reply({
                                content: (0, I18n_1.T)(locale, 'event.message.no_request_to_speak', { command: command.name }),
                            })];
                    case 21: return [2 /*return*/, _p.sent()];
                    case 22:
                        if (!(clientMember.voice.channel &&
                            clientMember.voice.channelId !== message.member.voice.channelId)) return [3 /*break*/, 24];
                        return [4 /*yield*/, message.reply({
                                content: (0, I18n_1.T)(locale, 'event.message.different_voice_channel', {
                                    channel: "<#".concat(clientMember.voice.channelId, ">"),
                                    command: command.name,
                                }),
                            })];
                    case 23: return [2 /*return*/, _p.sent()];
                    case 24:
                        if (!command.player.active) return [3 /*break*/, 26];
                        queue = this.client.manager.getPlayer(message.guildId);
                        if (!!(queue === null || queue === void 0 ? void 0 : queue.queue.current)) return [3 /*break*/, 26];
                        return [4 /*yield*/, message.reply({
                                content: (0, I18n_1.T)(locale, 'event.message.no_music_playing'),
                            })];
                    case 25: return [2 /*return*/, _p.sent()];
                    case 26:
                        if (!command.player.dj) return [3 /*break*/, 32];
                        return [4 /*yield*/, this.client.db.getDj(message.guildId)];
                    case 27:
                        dj = _p.sent();
                        if (!(dj === null || dj === void 0 ? void 0 : dj.mode)) return [3 /*break*/, 32];
                        return [4 /*yield*/, this.client.db.getRoles(message.guildId)];
                    case 28:
                        djRole_1 = _p.sent();
                        if (!!djRole_1) return [3 /*break*/, 30];
                        return [4 /*yield*/, message.reply({
                                content: (0, I18n_1.T)(locale, 'event.message.no_dj_role'),
                            })];
                    case 29: return [2 /*return*/, _p.sent()];
                    case 30:
                        hasDJRole = message.member.roles.cache.some(function (role) {
                            return djRole_1.map(function (r) { return r.roleId; }).includes(role.id);
                        });
                        if (!!(isDev || (hasDJRole && !message.member.permissions.has(discord_js_1.PermissionFlagsBits.ManageGuild)))) return [3 /*break*/, 32];
                        return [4 /*yield*/, message.reply({
                                content: (0, I18n_1.T)(locale, 'event.message.no_dj_permission'),
                            })];
                    case 31: return [2 /*return*/, _p.sent()];
                    case 32:
                        if (!(command.args && args.length === 0)) return [3 /*break*/, 34];
                        embed = this.client
                            .embed()
                            .setColor(this.client.color.red)
                            .setTitle((0, I18n_1.T)(locale, 'event.message.missing_arguments'))
                            .setDescription((0, I18n_1.T)(locale, 'event.message.missing_arguments_description', {
                            command: command.name,
                            examples: command.description.examples ? command.description.examples.join('\n') : 'None',
                        }))
                            .setFooter({ text: (0, I18n_1.T)(locale, 'event.message.syntax_footer') });
                        return [4 /*yield*/, message.reply({ embeds: [embed] })];
                    case 33:
                        _p.sent();
                        return [2 /*return*/];
                    case 34:
                        if (!this.client.cooldown.has(cmd)) {
                            this.client.cooldown.set(cmd, new discord_js_1.Collection());
                        }
                        now = Date.now();
                        timestamps = this.client.cooldown.get(cmd);
                        cooldownAmount = (command.cooldown || 5) * 1000;
                        if (!timestamps.has(message.author.id)) return [3 /*break*/, 37];
                        expirationTime = timestamps.get(message.author.id) + cooldownAmount;
                        timeLeft = (expirationTime - now) / 1000;
                        if (!(now < expirationTime && timeLeft > 0.9)) return [3 /*break*/, 36];
                        return [4 /*yield*/, message.reply({
                                content: (0, I18n_1.T)(locale, 'event.message.cooldown', { time: timeLeft.toFixed(1), command: cmd }),
                            })];
                    case 35: return [2 /*return*/, _p.sent()];
                    case 36:
                        timestamps.set(message.author.id, now);
                        setTimeout(function () { return timestamps.delete(message.author.id); }, cooldownAmount);
                        return [3 /*break*/, 38];
                    case 37:
                        timestamps.set(message.author.id, now);
                        setTimeout(function () { return timestamps.delete(message.author.id); }, cooldownAmount);
                        _p.label = 38;
                    case 38:
                        if (!(args.includes('@everyone') || args.includes('@here'))) return [3 /*break*/, 40];
                        return [4 /*yield*/, message.reply({
                                content: (0, I18n_1.T)(locale, 'event.message.no_mention_everyone'),
                            })];
                    case 39: return [2 /*return*/, _p.sent()];
                    case 40:
                        _p.trys.push([40, 41, 43, 46]);
                        return [2 /*return*/, command.run(this.client, ctx, ctx.args)];
                    case 41:
                        error_1 = _p.sent();
                        this.client.logger.error(error_1);
                        return [4 /*yield*/, message.reply({
                                content: (0, I18n_1.T)(locale, 'event.message.error', { error: error_1.message || 'Unknown error' }),
                            })];
                    case 42:
                        _p.sent();
                        return [3 /*break*/, 46];
                    case 43:
                        logs = this.client.channels.cache.get(this.client.env.LOG_COMMANDS_ID);
                        if (!logs) return [3 /*break*/, 45];
                        embed = new discord_js_1.EmbedBuilder()
                            .setAuthor({
                            name: 'Prefix - Command Logs',
                            iconURL: (_o = this.client.user) === null || _o === void 0 ? void 0 : _o.avatarURL({ size: 2048 }),
                        })
                            .setColor(this.client.config.color.green)
                            .addFields({ name: 'Command', value: "`".concat(command.name, "`"), inline: true }, { name: 'User', value: "".concat(message.author.tag, " (`").concat(message.author.id, "`)"), inline: true }, { name: 'Guild', value: "".concat(message.guild.name, " (`").concat(message.guild.id, "`)"), inline: true })
                            .setTimestamp();
                        return [4 /*yield*/, logs.send({ embeds: [embed] })];
                    case 44:
                        _p.sent();
                        _p.label = 45;
                    case 45: return [7 /*endfinally*/];
                    case 46: return [2 /*return*/];
                }
            });
        });
    };
    return MessageCreate;
}(index_1.Event));
exports.default = MessageCreate;
