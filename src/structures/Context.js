"use strict";
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
var discord_js_1 = require("discord.js");
var env_1 = require("../env");
var I18n_1 = require("./I18n");
var Context = /** @class */ (function () {
    function Context(ctx, args) {
        var _this = this;
        this.options = {
            getRole: function (name, required) {
                var _a, _b;
                if (required === void 0) { required = true; }
                return (_b = (_a = _this.interaction) === null || _a === void 0 ? void 0 : _a.options.get(name, required)) === null || _b === void 0 ? void 0 : _b.role;
            },
            getMember: function (name, required) {
                var _a, _b;
                if (required === void 0) { required = true; }
                return (_b = (_a = _this.interaction) === null || _a === void 0 ? void 0 : _a.options.get(name, required)) === null || _b === void 0 ? void 0 : _b.member;
            },
            get: function (name, required) {
                var _a;
                if (required === void 0) { required = true; }
                return (_a = _this.interaction) === null || _a === void 0 ? void 0 : _a.options.get(name, required);
            },
            getChannel: function (name, required) {
                var _a, _b;
                if (required === void 0) { required = true; }
                return (_b = (_a = _this.interaction) === null || _a === void 0 ? void 0 : _a.options.get(name, required)) === null || _b === void 0 ? void 0 : _b.channel;
            },
            getSubCommand: function () {
                var _a;
                return (_a = _this.interaction) === null || _a === void 0 ? void 0 : _a.options.data[0].name;
            },
        };
        this.ctx = ctx;
        this.interaction = ctx instanceof discord_js_1.ChatInputCommandInteraction ? ctx : null;
        this.message = ctx instanceof discord_js_1.Message ? ctx : null;
        this.channel = ctx.channel;
        this.id = ctx.id;
        this.channelId = ctx.channelId;
        this.client = ctx.client;
        this.author = ctx instanceof discord_js_1.Message ? ctx.author : ctx.user;
        this.guild = ctx.guild;
        this.createdAt = ctx.createdAt;
        this.createdTimestamp = ctx.createdTimestamp;
        this.member = ctx.member;
        this.args = args;
        this.setArgs(args);
        this.setUpLocale();
    }
    Context.prototype.setUpLocale = function () {
        return __awaiter(this, void 0, void 0, function () {
            var defaultLanguage, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        defaultLanguage = env_1.env.DEFAULT_LANGUAGE || 'EnglishUS';
                        _a = this;
                        if (!this.guild) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.client.db.getLanguage(this.guild.id)];
                    case 1:
                        _b = _c.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _b = defaultLanguage;
                        _c.label = 3;
                    case 3:
                        _a.guildLocale = _b;
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(Context.prototype, "isInteraction", {
        get: function () {
            return this.ctx instanceof discord_js_1.ChatInputCommandInteraction;
        },
        enumerable: false,
        configurable: true
    });
    Context.prototype.setArgs = function (args) {
        this.args = this.isInteraction ? args.map(function (arg) { return arg.value; }) : args;
    };
    Context.prototype.sendMessage = function (content) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            var _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!this.isInteraction) return [3 /*break*/, 3];
                        if (!(typeof content === 'string' || isInteractionReplyOptions(content))) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, ((_c = this.interaction) === null || _c === void 0 ? void 0 : _c.reply(content))];
                    case 1:
                        _a.msg = _e.sent();
                        return [2 /*return*/, this.msg];
                    case 2: return [3 /*break*/, 5];
                    case 3:
                        if (!(typeof content === 'string' || isMessagePayload(content))) return [3 /*break*/, 5];
                        _b = this;
                        return [4 /*yield*/, ((_d = this.message) === null || _d === void 0 ? void 0 : _d.channel).send(content)];
                    case 4:
                        _b.msg = _e.sent();
                        return [2 /*return*/, this.msg];
                    case 5: return [2 /*return*/, this.msg];
                }
            });
        });
    };
    Context.prototype.editMessage = function (content) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!(this.isInteraction && this.msg)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, ((_c = this.interaction) === null || _c === void 0 ? void 0 : _c.editReply(content))];
                    case 1:
                        _a.msg = _d.sent();
                        return [2 /*return*/, this.msg];
                    case 2:
                        if (!this.msg) return [3 /*break*/, 4];
                        _b = this;
                        return [4 /*yield*/, this.msg.edit(content)];
                    case 3:
                        _b.msg = _d.sent();
                        return [2 /*return*/, this.msg];
                    case 4: return [2 /*return*/, this.msg];
                }
            });
        });
    };
    Context.prototype.sendDeferMessage = function (content) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            var _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!this.isInteraction) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, ((_c = this.interaction) === null || _c === void 0 ? void 0 : _c.deferReply({ fetchReply: true }))];
                    case 1:
                        _a.msg = _e.sent();
                        return [2 /*return*/, this.msg];
                    case 2:
                        _b = this;
                        return [4 /*yield*/, ((_d = this.message) === null || _d === void 0 ? void 0 : _d.channel).send(content)];
                    case 3:
                        _b.msg = _e.sent();
                        return [2 /*return*/, this.msg];
                }
            });
        });
    };
    Context.prototype.locale = function (key) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!this.guildLocale)
            this.guildLocale = env_1.env.DEFAULT_LANGUAGE || 'EnglishUS';
        return I18n_1.T.apply(void 0, __spreadArray([this.guildLocale, key], args, false));
    };
    Context.prototype.sendFollowUp = function (content) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!this.isInteraction) return [3 /*break*/, 3];
                        if (!(typeof content === 'string' || isInteractionReplyOptions(content))) return [3 /*break*/, 2];
                        return [4 /*yield*/, ((_b = this.interaction) === null || _b === void 0 ? void 0 : _b.followUp(content))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2: return [3 /*break*/, 5];
                    case 3:
                        if (!(typeof content === 'string' || isMessagePayload(content))) return [3 /*break*/, 5];
                        _a = this;
                        return [4 /*yield*/, ((_c = this.message) === null || _c === void 0 ? void 0 : _c.channel).send(content)];
                    case 4:
                        _a.msg = _d.sent();
                        _d.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(Context.prototype, "deferred", {
        get: function () {
            var _a;
            return this.isInteraction ? (_a = this.interaction) === null || _a === void 0 ? void 0 : _a.deferred : !!this.msg;
        },
        enumerable: false,
        configurable: true
    });
    return Context;
}());
exports.default = Context;
function isInteractionReplyOptions(content) {
    return content instanceof Object;
}
function isMessagePayload(content) {
    return content instanceof Object;
}
