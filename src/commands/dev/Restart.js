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
var node_child_process_1 = require("node:child_process");
var discord_js_1 = require("discord.js");
var index_1 = require("../../structures/index");
var Restart = /** @class */ (function (_super) {
    __extends(Restart, _super);
    function Restart(client) {
        return _super.call(this, client, {
            name: 'restart',
            description: {
                content: 'Restart the bot',
                examples: ['restart'],
                usage: 'restart',
            },
            category: 'dev',
            aliases: ['reboot'],
            cooldown: 3,
            args: false,
            player: {
                voice: false,
                dj: false,
                active: false,
                djPerm: null,
            },
            permissions: {
                dev: true,
                client: ['SendMessages', 'ReadMessageHistory', 'ViewChannel', 'EmbedLinks'],
                user: [],
            },
            slashCommand: false,
            options: [],
        }) || this;
    }
    Restart.prototype.run = function (client, ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var embed, button, row, restartEmbed, msg, filter, collector;
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        embed = this.client.embed();
                        button = new discord_js_1.ButtonBuilder()
                            .setStyle(discord_js_1.ButtonStyle.Danger)
                            .setLabel('Confirm Restart')
                            .setCustomId('confirm-restart');
                        row = new discord_js_1.ActionRowBuilder().addComponents(button);
                        restartEmbed = embed
                            .setColor(this.client.color.red)
                            .setDescription("**Are you sure you want to restart **`".concat((_a = client.user) === null || _a === void 0 ? void 0 : _a.username, "`?"))
                            .setTimestamp();
                        return [4 /*yield*/, ctx.sendMessage({
                                embeds: [restartEmbed],
                                components: [row],
                            })];
                    case 1:
                        msg = _b.sent();
                        filter = function (i) { var _a; return i.customId === 'confirm-restart' && i.user.id === ((_a = ctx.author) === null || _a === void 0 ? void 0 : _a.id); };
                        collector = msg.createMessageComponentCollector({
                            time: 30000,
                            filter: filter,
                        });
                        collector.on('collect', function (i) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, i.deferUpdate()];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, msg.edit({
                                                content: 'Restarting the bot...',
                                                embeds: [],
                                                components: [],
                                            })];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, client.destroy()];
                                    case 3:
                                        _a.sent();
                                        (0, node_child_process_1.exec)('node scripts/restart.js');
                                        process.exit(0);
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        collector.on('end', function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(collector.collected.size === 0)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, msg.edit({
                                                content: 'Restart cancelled.',
                                                components: [],
                                            })];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    return Restart;
}(index_1.Command));
exports.default = Restart;
