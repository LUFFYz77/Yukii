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
var Dj = /** @class */ (function (_super) {
    __extends(Dj, _super);
    function Dj(client) {
        return _super.call(this, client, {
            name: 'dj',
            description: {
                content: 'cmd.dj.description',
                examples: ['dj add @role', 'dj remove @role', 'dj clear', 'dj toggle'],
                usage: 'dj',
            },
            category: 'general',
            aliases: ['dj'],
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
                user: ['ManageGuild'],
            },
            slashCommand: true,
            options: [
                {
                    name: 'add',
                    description: 'cmd.dj.options.add',
                    type: 1,
                    options: [
                        {
                            name: 'role',
                            description: 'cmd.dj.options.role',
                            type: 8,
                            required: true,
                        },
                    ],
                },
                {
                    name: 'remove',
                    description: 'cmd.dj.options.remove',
                    type: 1,
                    options: [
                        {
                            name: 'role',
                            description: 'cmd.dj.options.role',
                            type: 8,
                            required: true,
                        },
                    ],
                },
                {
                    name: 'clear',
                    description: 'cmd.dj.options.clear',
                    type: 1,
                },
                {
                    name: 'toggle',
                    description: 'cmd.dj.options.toggle',
                    type: 1,
                },
            ],
        }) || this;
    }
    Dj.prototype.run = function (client, ctx, args) {
        return __awaiter(this, void 0, void 0, function () {
            var embed, dj, subCommand, role, _a;
            var _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        embed = this.client.embed().setColor(this.client.color.main);
                        return [4 /*yield*/, client.db.getDj(ctx.guild.id)];
                    case 1:
                        dj = _d.sent();
                        if (ctx.isInteraction) {
                            subCommand = ctx.options.getSubCommand();
                            if (subCommand === 'add' || subCommand === 'remove') {
                                role = ctx.options.getRole('role');
                            }
                        }
                        else {
                            subCommand = args[0];
                            role = ((_b = ctx.message) === null || _b === void 0 ? void 0 : _b.mentions.roles.first()) || ((_c = ctx.guild) === null || _c === void 0 ? void 0 : _c.roles.cache.get(args[1]));
                        }
                        _a = subCommand;
                        switch (_a) {
                            case 'add': return [3 /*break*/, 2];
                            case 'remove': return [3 /*break*/, 6];
                            case 'clear': return [3 /*break*/, 9];
                            case 'toggle': return [3 /*break*/, 11];
                        }
                        return [3 /*break*/, 13];
                    case 2:
                        if (!role) {
                            return [2 /*return*/, ctx.sendMessage({
                                    embeds: [embed.setDescription(ctx.locale('cmd.dj.errors.provide_role'))],
                                })];
                        }
                        return [4 /*yield*/, client.db.getRoles(ctx.guild.id).then(function (r) { return r.some(function (re) { return re.roleId === role.id; }); })];
                    case 3:
                        if (_d.sent()) {
                            return [2 /*return*/, ctx.sendMessage({
                                    embeds: [
                                        embed.setDescription(ctx.locale('cmd.dj.messages.role_exists', {
                                            roleId: role.id,
                                        })),
                                    ],
                                })];
                        }
                        return [4 /*yield*/, client.db.addRole(ctx.guild.id, role.id)];
                    case 4:
                        _d.sent();
                        return [4 /*yield*/, client.db.setDj(ctx.guild.id, true)];
                    case 5:
                        _d.sent();
                        return [2 /*return*/, ctx.sendMessage({
                                embeds: [
                                    embed.setDescription(ctx.locale('cmd.dj.messages.role_added', {
                                        roleId: role.id,
                                    })),
                                ],
                            })];
                    case 6:
                        if (!role) {
                            return [2 /*return*/, ctx.sendMessage({
                                    embeds: [embed.setDescription(ctx.locale('cmd.dj.errors.provide_role'))],
                                })];
                        }
                        return [4 /*yield*/, client.db.getRoles(ctx.guild.id).then(function (r) { return r.some(function (re) { return re.roleId === role.id; }); })];
                    case 7:
                        if (!(_d.sent())) {
                            return [2 /*return*/, ctx.sendMessage({
                                    embeds: [
                                        embed.setDescription(ctx.locale('cmd.dj.messages.role_not_found', {
                                            roleId: role.id,
                                        })),
                                    ],
                                })];
                        }
                        return [4 /*yield*/, client.db.removeRole(ctx.guild.id, role.id)];
                    case 8:
                        _d.sent();
                        return [2 /*return*/, ctx.sendMessage({
                                embeds: [
                                    embed.setDescription(ctx.locale('cmd.dj.messages.role_removed', {
                                        roleId: role.id,
                                    })),
                                ],
                            })];
                    case 9:
                        if (!dj) {
                            return [2 /*return*/, ctx.sendMessage({
                                    embeds: [embed.setDescription(ctx.locale('cmd.dj.errors.no_roles'))],
                                })];
                        }
                        return [4 /*yield*/, client.db.clearRoles(ctx.guild.id)];
                    case 10:
                        _d.sent();
                        return [2 /*return*/, ctx.sendMessage({
                                embeds: [embed.setDescription(ctx.locale('cmd.dj.messages.all_roles_cleared'))],
                            })];
                    case 11:
                        if (!dj) {
                            return [2 /*return*/, ctx.sendMessage({
                                    embeds: [embed.setDescription(ctx.locale('cmd.dj.errors.no_roles'))],
                                })];
                        }
                        return [4 /*yield*/, client.db.setDj(ctx.guild.id, !dj.mode)];
                    case 12:
                        _d.sent();
                        return [2 /*return*/, ctx.sendMessage({
                                embeds: [
                                    embed.setDescription(ctx.locale('cmd.dj.messages.toggle', {
                                        status: dj.mode ? 'disabled' : 'enabled',
                                    })),
                                ],
                            })];
                    case 13: return [2 /*return*/, ctx.sendMessage({
                            embeds: [
                                embed.setDescription(ctx.locale('cmd.dj.errors.invalid_subcommand')).addFields({
                                    name: ctx.locale('cmd.dj.subcommands'),
                                    value: '`add`, `remove`, `clear`, `toggle`',
                                }),
                            ],
                        })];
                }
            });
        });
    };
    return Dj;
}(index_1.Command));
exports.default = Dj;
