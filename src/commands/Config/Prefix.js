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
var Prefix = /** @class */ (function (_super) {
    __extends(Prefix, _super);
    function Prefix(client) {
        return _super.call(this, client, {
            name: 'prefix',
            description: {
                content: 'cmd.prefix.description',
                examples: ['prefix set !', 'prefix reset'],
                usage: 'prefix',
            },
            category: 'general',
            aliases: ['pf'],
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
                user: ['ManageGuild'],
            },
            slashCommand: true,
            options: [
                {
                    name: 'set',
                    description: 'cmd.prefix.options.set',
                    type: 1,
                    options: [
                        {
                            name: 'prefix',
                            description: 'cmd.prefix.options.prefix',
                            type: 3,
                            required: true,
                        },
                    ],
                },
                {
                    name: 'reset',
                    description: 'cmd.prefix.options.reset',
                    type: 1,
                },
            ],
        }) || this;
    }
    Prefix.prototype.run = function (client, ctx, args) {
        return __awaiter(this, void 0, void 0, function () {
            var embed, guildId, guildData, isInteraction, subCommand, prefix, _a, currentPrefix, defaultPrefix, currentPrefix;
            var _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        embed = client.embed().setColor(this.client.color.main);
                        guildId = ctx.guild.id;
                        return [4 /*yield*/, client.db.get(guildId)];
                    case 1:
                        guildData = _d.sent();
                        isInteraction = ctx.isInteraction;
                        if (isInteraction) {
                            subCommand = ctx.options.getSubCommand();
                            prefix = (_c = (_b = ctx.options.get('prefix')) === null || _b === void 0 ? void 0 : _b.value) === null || _c === void 0 ? void 0 : _c.toString();
                        }
                        else {
                            subCommand = args[0] || '';
                            prefix = args[1] || '';
                        }
                        _a = subCommand;
                        switch (_a) {
                            case 'set': return [3 /*break*/, 2];
                            case 'reset': return [3 /*break*/, 9];
                        }
                        return [3 /*break*/, 12];
                    case 2:
                        if (!!prefix) return [3 /*break*/, 4];
                        currentPrefix = guildData ? guildData.prefix : client.env.PREFIX;
                        embed.setDescription(ctx.locale('cmd.prefix.messages.current_prefix', {
                            prefix: currentPrefix,
                        }));
                        return [4 /*yield*/, ctx.sendMessage({ embeds: [embed] })];
                    case 3: return [2 /*return*/, _d.sent()];
                    case 4:
                        if (!(prefix.length > 3)) return [3 /*break*/, 6];
                        embed.setDescription(ctx.locale('cmd.prefix.errors.prefix_too_long'));
                        return [4 /*yield*/, ctx.sendMessage({ embeds: [embed] })];
                    case 5: return [2 /*return*/, _d.sent()];
                    case 6: return [4 /*yield*/, client.db.setPrefix(guildId, prefix)];
                    case 7:
                        _d.sent();
                        embed.setDescription(ctx.locale('cmd.prefix.messages.prefix_set', { prefix: prefix }));
                        return [4 /*yield*/, ctx.sendMessage({ embeds: [embed] })];
                    case 8: return [2 /*return*/, _d.sent()];
                    case 9:
                        defaultPrefix = client.env.PREFIX;
                        return [4 /*yield*/, client.db.setPrefix(guildId, defaultPrefix)];
                    case 10:
                        _d.sent();
                        embed.setDescription(ctx.locale('cmd.prefix.messages.prefix_reset', {
                            prefix: defaultPrefix,
                        }));
                        return [4 /*yield*/, ctx.sendMessage({ embeds: [embed] })];
                    case 11: return [2 /*return*/, _d.sent()];
                    case 12:
                        currentPrefix = guildData ? guildData.prefix : client.env.PREFIX;
                        embed.setDescription(ctx.locale('cmd.prefix.messages.current_prefix', {
                            prefix: currentPrefix,
                        }));
                        return [4 /*yield*/, ctx.sendMessage({ embeds: [embed] })];
                    case 13: return [2 /*return*/, _d.sent()];
                }
            });
        });
    };
    return Prefix;
}(index_1.Command));
exports.default = Prefix;
