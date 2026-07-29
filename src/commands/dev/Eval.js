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
var node_util_1 = require("node:util");
var discord_js_1 = require("discord.js");
var undici_1 = require("undici");
var index_1 = require("../../structures/index");
var Eval = /** @class */ (function (_super) {
    __extends(Eval, _super);
    function Eval(client) {
        return _super.call(this, client, {
            name: 'eval',
            description: {
                content: 'Evaluate code',
                examples: ['eval'],
                usage: 'eval',
            },
            category: 'dev',
            aliases: ['ev'],
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
                client: ['SendMessages', 'ReadMessageHistory', 'ViewChannel', 'EmbedLinks'],
                user: [],
            },
            slashCommand: false,
            options: [],
        }) || this;
    }
    Eval.prototype.run = function (client, ctx, args) {
        return __awaiter(this, void 0, void 0, function () {
            var code, evaled, response, json, button, row, msg_1, filter, collector, e_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        code = args.join(' ');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 7, , 8]);
                        evaled = eval(code);
                        if (evaled === client.config)
                            evaled = 'Nice try';
                        if (typeof evaled !== 'string')
                            evaled = node_util_1.default.inspect(evaled);
                        if (!(evaled.length > 2000)) return [3 /*break*/, 5];
                        return [4 /*yield*/, (0, undici_1.fetch)('https://hasteb.in/post', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'text/plain',
                                },
                                body: evaled,
                            })];
                    case 2:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 3:
                        json = _a.sent();
                        evaled = "https://hasteb.in/".concat(json.key);
                        return [4 /*yield*/, ctx.sendMessage({
                                content: evaled,
                            })];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5:
                        button = new discord_js_1.ButtonBuilder().setStyle(discord_js_1.ButtonStyle.Danger).setLabel('Delete').setCustomId('eval-delete');
                        row = new discord_js_1.ActionRowBuilder().addComponents(button);
                        return [4 /*yield*/, ctx.sendMessage({
                                content: "```js\n".concat(evaled, "\n```"),
                                components: [row],
                            })];
                    case 6:
                        msg_1 = _a.sent();
                        filter = function (i) { var _a; return i.customId === 'eval-delete' && i.user.id === ((_a = ctx.author) === null || _a === void 0 ? void 0 : _a.id); };
                        collector = msg_1.createMessageComponentCollector({
                            time: 60000,
                            filter: filter,
                        });
                        collector.on('collect', function (i) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, i.deferUpdate()];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, msg_1.delete()];
                                    case 2:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [3 /*break*/, 8];
                    case 7:
                        e_1 = _a.sent();
                        ctx.sendMessage("```js\n".concat(e_1, "\n```"));
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    return Eval;
}(index_1.Command));
exports.default = Eval;
