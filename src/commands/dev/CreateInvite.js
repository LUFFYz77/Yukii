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
var index_1 = require("../../structures/index");
var CreateInvite = /** @class */ (function (_super) {
    __extends(CreateInvite, _super);
    function CreateInvite(client) {
        return _super.call(this, client, {
            name: 'createinvite',
            description: {
                content: 'Create an invite link for a guild',
                examples: ['createinvite 0000000000000000000'],
                usage: 'createinvite <guildId>',
            },
            category: 'dev',
            aliases: ['ci', 'gi', 'ginvite', 'guildinvite'],
            cooldown: 3,
            args: true,
            player: {
                voice: false,
                dj: false,
                active: false,
                djPerm: null,
            },
            permissions: {
                dev: true,
                client: ['SendMessages', 'CreateInstantInvite', 'ReadMessageHistory', 'EmbedLinks', 'ViewChannel'],
                user: [],
            },
            slashCommand: false,
            options: [],
        }) || this;
    }
    CreateInvite.prototype.run = function (client, ctx, args) {
        return __awaiter(this, void 0, void 0, function () {
            var guild, textChannel, invite;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        guild = client.guilds.cache.get(args[0]);
                        if (!!guild) return [3 /*break*/, 2];
                        return [4 /*yield*/, ctx.sendMessage({
                                embeds: [this.client.embed().setColor(this.client.color.red).setDescription('Guild not found')],
                            })];
                    case 1: return [2 /*return*/, _b.sent()];
                    case 2:
                        textChannel = guild.channels.cache.find(function (c) {
                            var _a;
                            return c.type === discord_js_1.ChannelType.GuildText &&
                                ((_a = c
                                    .permissionsFor(guild.members.me)) === null || _a === void 0 ? void 0 : _a.has(discord_js_1.PermissionFlagsBits.CreateInstantInvite |
                                    discord_js_1.PermissionFlagsBits.SendMessages |
                                    discord_js_1.PermissionFlagsBits.ViewChannel));
                        });
                        if (!!textChannel) return [3 /*break*/, 4];
                        return [4 /*yield*/, ctx.sendMessage({
                                embeds: [this.client.embed().setColor(this.client.color.red).setDescription('No suitable channel found')],
                            })];
                    case 3: return [2 /*return*/, _b.sent()];
                    case 4: return [4 /*yield*/, textChannel.createInvite({
                            maxAge: 3600,
                            maxUses: 0,
                            reason: "Requested by developer: ".concat((_a = ctx.author) === null || _a === void 0 ? void 0 : _a.username),
                        })];
                    case 5:
                        invite = _b.sent();
                        return [4 /*yield*/, ctx.sendMessage({
                                embeds: [
                                    this.client
                                        .embed()
                                        .setColor(this.client.color.main)
                                        .setDescription("Invite link for ".concat(guild.name, ": [Link](").concat(invite.url, ")")),
                                ],
                            })];
                    case 6: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    return CreateInvite;
}(index_1.Command));
exports.default = CreateInvite;
