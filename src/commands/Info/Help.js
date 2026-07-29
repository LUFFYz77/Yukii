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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../structures/index");
var Help = /** @class */ (function (_super) {
    __extends(Help, _super);
    function Help(client) {
        return _super.call(this, client, {
            name: "help",
            description: {
                content: "cmd.help.description",
                examples: ["help"],
                usage: "help",
            },
            category: "info",
            aliases: ["h"],
            cooldown: 3,
            args: false,
            vote: false,
            player: {
                voice: false,
                dj: false,
                active: false,
                djPerm: null,
            },
            permissions: {
                dev: false,
                client: [
                    "SendMessages",
                    "ReadMessageHistory",
                    "ViewChannel",
                    "EmbedLinks",
                ],
                user: [],
            },
            slashCommand: true,
            options: [
                {
                    name: "command",
                    description: "cmd.help.options.command",
                    type: 3,
                    required: false,
                },
            ],
        }) || this;
    }
    Help.prototype.run = function (client, ctx, args) {
        return __awaiter(this, void 0, void 0, function () {
            var embed, guild, commands, customSortOrder, categories, command, helpEmbed_1, fields, helpEmbed;
            var _a;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        embed = this.client.embed();
                        return [4 /*yield*/, client.db.get(ctx.guild.id)];
                    case 1:
                        guild = _c.sent();
                        commands = this.client.commands.filter(function (cmd) { return cmd.category !== "dev"; });
                        customSortOrder = [
                            "Music",
                            "Filter",
                            "Playlist",
                            "Config",
                            "Info",
                        ];
                        categories = __spreadArray([], new Set(commands.map(function (cmd) { return cmd.category; })), true);
                        categories.sort(function (a, b) {
                            var indexA = customSortOrder.indexOf(a);
                            var indexB = customSortOrder.indexOf(b);
                            // Handle categories not found in the customSortOrder by keeping them at the end
                            return ((indexA === -1 ? Infinity : indexA) -
                                (indexB === -1 ? Infinity : indexB));
                        });
                        if (!args[0]) return [3 /*break*/, 5];
                        command = this.client.commands.get(args[0].toLowerCase());
                        if (!!command) return [3 /*break*/, 3];
                        return [4 /*yield*/, ctx.sendMessage({
                                embeds: [
                                    embed.setColor(this.client.color.red).setDescription(ctx.locale("cmd.help.not_found", {
                                        cmdName: args[0],
                                    })),
                                ],
                            })];
                    case 2: return [2 /*return*/, _c.sent()];
                    case 3:
                        helpEmbed_1 = embed
                            .setColor(client.color.main)
                            .setTitle("".concat(ctx.locale("cmd.help.title"), " - ").concat(command.name))
                            .setDescription(ctx.locale("cmd.help.help_cmd", {
                            description: ctx.locale(command.description.content),
                            usage: "".concat(guild === null || guild === void 0 ? void 0 : guild.prefix).concat(command.description.usage),
                            examples: command.description.examples
                                .map(function (example) { return "".concat(guild.prefix).concat(example); })
                                .join(", "),
                            aliases: command.aliases
                                .map(function (alias) { return "`".concat(alias, "`"); })
                                .join(", "),
                            category: command.category,
                            cooldown: command.cooldown,
                            premUser: command.permissions.user.length > 0
                                ? command.permissions.user
                                    .map(function (perm) { return "`".concat(perm, "`"); })
                                    .join(", ")
                                : "None",
                            premBot: command.permissions.client
                                .map(function (perm) { return "`".concat(perm, "`"); })
                                .join(", "),
                            dev: command.permissions.dev ? "Yes" : "No",
                            slash: command.slashCommand ? "Yes" : "No",
                            args: command.args ? "Yes" : "No",
                            player: command.player.active ? "Yes" : "No",
                            dj: command.player.dj ? "Yes" : "No",
                            djPerm: command.player.djPerm ? command.player.djPerm : "None",
                            voice: command.player.voice ? "Yes" : "No",
                        }));
                        return [4 /*yield*/, ctx.sendMessage({ embeds: [helpEmbed_1] })];
                    case 4: return [2 /*return*/, _c.sent()];
                    case 5:
                        fields = categories.map(function (category) { return ({
                            name: "".concat(client.utils.formatUpperCase(category) || category),
                            value: commands
                                .filter(function (cmd) { return cmd.category === category; })
                                .map(function (cmd) { return "`".concat(client.utils.formatCapitalize(cmd.name), "`"); })
                                .join(", "),
                            inline: false,
                        }); });
                        helpEmbed = (_a = embed
                            .setColor(client.color.main)
                            .setTitle(ctx.locale("cmd.help.title"))
                            .setDescription(ctx.locale("cmd.help.content", {
                            bot: (_b = client.user) === null || _b === void 0 ? void 0 : _b.username,
                            prefix: guild.prefix,
                        }))
                            .setFooter({
                            text: ctx.locale("cmd.help.footer", { prefix: guild.prefix }),
                        }))
                            .addFields.apply(_a, fields);
                        return [4 /*yield*/, ctx.sendMessage({ embeds: [helpEmbed] })];
                    case 6: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    return Help;
}(index_1.Command));
exports.default = Help;
