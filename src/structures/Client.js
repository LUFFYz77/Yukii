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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var node_fs_1 = require("node:fs");
var node_path_1 = require("node:path");
var sdk_1 = require("@top-gg/sdk");
var discord_js_1 = require("discord.js");
var discord_js_2 = require("discord.js");
var config_1 = require("../config");
var server_1 = require("../database/server");
var env_1 = require("../env");
var index_1 = require("../plugin/index");
var Utils_1 = require("../utils/Utils");
var I18n_1 = require("./I18n");
var LavalinkClient_1 = require("./LavalinkClient");
var Logger_1 = require("./Logger");
var NamooClient = /** @class */ (function (_super) {
    __extends(NamooClient, _super);
    function NamooClient() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.commands = new discord_js_1.Collection();
        _this.aliases = new discord_js_1.Collection();
        _this.db = new server_1.default();
        _this.cooldown = new discord_js_1.Collection();
        _this.config = config_1.default;
        _this.logger = new Logger_1.default();
        _this.emoji = config_1.default.emoji;
        _this.color = config_1.default.color;
        _this.body = [];
        _this.utils = Utils_1.Utils;
        _this.env = env_1.env;
        return _this;
    }
    NamooClient.prototype.embed = function () {
        return new discord_js_1.EmbedBuilder();
    };
    NamooClient.prototype.start = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        (0, I18n_1.initI18n)();
                        if (env_1.env.TOPGG) {
                            this.topGG = new sdk_1.Api(env_1.env.TOPGG);
                        }
                        else {
                            this.logger.warn('Top.gg token not found!');
                        }
                        this.manager = new LavalinkClient_1.default(this);
                        return [4 /*yield*/, this.loadCommands()];
                    case 1:
                        _a.sent();
                        this.logger.info('Successfully loaded commands!');
                        return [4 /*yield*/, this.loadEvents()];
                    case 2:
                        _a.sent();
                        this.logger.info('Successfully loaded events!');
                        (0, index_1.default)(this);
                        return [4 /*yield*/, this.login(token)];
                    case 3:
                        _a.sent();
                        this.on(discord_js_1.Events.InteractionCreate, function (interaction) { return __awaiter(_this, void 0, void 0, function () {
                            var setup;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(interaction.isButton() && interaction.guildId)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this.db.getSetup(interaction.guildId)];
                                    case 1:
                                        setup = _a.sent();
                                        if (setup && interaction.channelId === setup.textId && interaction.message.id === setup.messageId) {
                                            this.emit('setupButtons', interaction);
                                        }
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
    NamooClient.prototype.loadCommands = function () {
        return __awaiter(this, void 0, void 0, function () {
            var commandsPath, _i, commandsPath_1, dir, commandFiles, _loop_1, this_1, _a, commandFiles_1, file;
            var _this = this;
            var _b;
            return __generator(this, function (_c) {
                commandsPath = node_fs_1.default.readdirSync(node_path_1.default.join(__dirname, '../commands'));
                for (_i = 0, commandsPath_1 = commandsPath; _i < commandsPath_1.length; _i++) {
                    dir = commandsPath_1[_i];
                    commandFiles = node_fs_1.default
                        .readdirSync(node_path_1.default.join(__dirname, '../commands', dir))
                        .filter(function (file) { return file.endsWith('.js'); });
                    _loop_1 = function (file) {
                        var _d, _e;
                        var cmdModule = require("../commands/".concat(dir, "/").concat(file));
                        var command = new cmdModule.default(this_1, file);
                        command.category = dir;
                        this_1.commands.set(command.name, command);
                        command.aliases.forEach(function (alias) {
                            _this.aliases.set(alias, command.name);
                        });
                        if (command.slashCommand) {
                            var data = {
                                name: command.name,
                                description: (0, I18n_1.T)(discord_js_2.Locale.EnglishUS, command.description.content),
                                type: discord_js_1.ApplicationCommandType.ChatInput,
                                options: command.options || [],
                                default_member_permissions: Array.isArray(command.permissions.user) && command.permissions.user.length > 0
                                    ? discord_js_1.PermissionsBitField.resolve(command.permissions.user).toString()
                                    : null,
                                name_localizations: null,
                                description_localizations: null,
                            };
                            var localizations_2 = [];
                            I18n_1.i18n.getLocales().map(function (locale) {
                                localizations_2.push((0, I18n_1.localization)(locale, command.name, command.description.content));
                            });
                            for (var _f = 0, localizations_1 = localizations_2; _f < localizations_1.length; _f++) {
                                var localization_1 = localizations_1[_f];
                                var _g = localization_1.name, language = _g[0], name_1 = _g[1];
                                var _h = localization_1.description, language2 = _h[0], description = _h[1];
                                data.name_localizations = __assign(__assign({}, data.name_localizations), (_d = {}, _d[language] = name_1, _d));
                                data.description_localizations = __assign(__assign({}, data.description_localizations), (_e = {}, _e[language2] = description, _e));
                            }
                            if (command.options.length > 0) {
                                command.options.map(function (option) {
                                    var _a, _b;
                                    var optionsLocalizations = [];
                                    I18n_1.i18n.getLocales().map(function (locale) {
                                        optionsLocalizations.push((0, I18n_1.localization)(locale, option.name, option.description));
                                    });
                                    for (var _i = 0, optionsLocalizations_1 = optionsLocalizations; _i < optionsLocalizations_1.length; _i++) {
                                        var localization_2 = optionsLocalizations_1[_i];
                                        var _c = localization_2.name, language = _c[0], name_2 = _c[1];
                                        var _d = localization_2.description, language2 = _d[0], description = _d[1];
                                        option.name_localizations = __assign(__assign({}, option.name_localizations), (_a = {}, _a[language] = name_2, _a));
                                        option.description_localizations = __assign(__assign({}, option.description_localizations), (_b = {}, _b[language2] = description, _b));
                                    }
                                    option.description = (0, I18n_1.T)(discord_js_2.Locale.EnglishUS, option.description);
                                });
                                (_b = data.options) === null || _b === void 0 ? void 0 : _b.map(function (option) {
                                    var _a;
                                    if ('options' in option && option.options.length > 0) {
                                        (_a = option.options) === null || _a === void 0 ? void 0 : _a.map(function (subOption) {
                                            var _a, _b;
                                            var subOptionsLocalizations = [];
                                            I18n_1.i18n.getLocales().map(function (locale) {
                                                subOptionsLocalizations.push((0, I18n_1.localization)(locale, subOption.name, subOption.description));
                                            });
                                            for (var _i = 0, subOptionsLocalizations_1 = subOptionsLocalizations; _i < subOptionsLocalizations_1.length; _i++) {
                                                var localization_3 = subOptionsLocalizations_1[_i];
                                                var _c = localization_3.name, language = _c[0], name_3 = _c[1];
                                                var _d = localization_3.description, language2 = _d[0], description = _d[1];
                                                subOption.name_localizations = __assign(__assign({}, subOption.name_localizations), (_a = {}, _a[language] = name_3, _a));
                                                subOption.description_localizations = __assign(__assign({}, subOption.description_localizations), (_b = {}, _b[language2] = description, _b));
                                            }
                                            subOption.description = (0, I18n_1.T)(discord_js_2.Locale.EnglishUS, subOption.description);
                                        });
                                    }
                                });
                            }
                            this_1.body.push(data);
                        }
                    };
                    this_1 = this;
                    for (_a = 0, commandFiles_1 = commandFiles; _a < commandFiles_1.length; _a++) {
                        file = commandFiles_1[_a];
                        _loop_1(file);
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    NamooClient.prototype.deployCommands = function (guildId) {
        return __awaiter(this, void 0, void 0, function () {
            var route, rest, error_1;
            var _a, _b, _c, _d, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        route = guildId
                            ? discord_js_1.Routes.applicationGuildCommands((_b = (_a = this.user) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : '', guildId)
                            : discord_js_1.Routes.applicationCommands((_d = (_c = this.user) === null || _c === void 0 ? void 0 : _c.id) !== null && _d !== void 0 ? _d : '');
                        _f.label = 1;
                    case 1:
                        _f.trys.push([1, 3, , 4]);
                        rest = new discord_js_1.REST({ version: '10' }).setToken((_e = env_1.env.TOKEN) !== null && _e !== void 0 ? _e : '');
                        return [4 /*yield*/, rest.put(route, { body: this.body })];
                    case 2:
                        _f.sent();
                        this.logger.info('Successfully deployed slash commands!');
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _f.sent();
                        this.logger.error(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    NamooClient.prototype.loadEvents = function () {
        return __awaiter(this, void 0, void 0, function () {
            var eventsPath, _i, eventsPath_1, dir, eventFiles, _loop_2, this_2, _a, eventFiles_1, file;
            return __generator(this, function (_b) {
                eventsPath = node_fs_1.default.readdirSync(node_path_1.default.join(__dirname, '..', 'events'));
                for (_i = 0, eventsPath_1 = eventsPath; _i < eventsPath_1.length; _i++) {
                    dir = eventsPath_1[_i];
                    eventFiles = node_fs_1.default.readdirSync(node_path_1.default.join(__dirname, '..', 'events', dir)).filter(function (file) { return file.endsWith('.js'); });
                    _loop_2 = function (file) {
                        var eventModule = require("../events/".concat(dir, "/").concat(file));
                        var event_1 = new eventModule.default(this_2, file);
                        if (dir === 'player') {
                            this_2.manager.on(event_1.name, function () {
                                var args = [];
                                for (var _i = 0; _i < arguments.length; _i++) {
                                    args[_i] = arguments[_i];
                                }
                                return event_1.run.apply(event_1, args);
                            });
                        }
                        else if (dir === 'node') {
                            this_2.manager.nodeManager.on(event_1.name, function () {
                                var args = [];
                                for (var _i = 0; _i < arguments.length; _i++) {
                                    args[_i] = arguments[_i];
                                }
                                return event_1.run.apply(event_1, args);
                            });
                        }
                        else {
                            this_2.on(event_1.name, function () {
                                var args = [];
                                for (var _i = 0; _i < arguments.length; _i++) {
                                    args[_i] = arguments[_i];
                                }
                                return event_1.run.apply(event_1, args);
                            });
                        }
                    };
                    this_2 = this;
                    for (_a = 0, eventFiles_1 = eventFiles; _a < eventFiles_1.length; _a++) {
                        file = eventFiles_1[_a];
                        _loop_2(file);
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    return NamooClient;
}(discord_js_1.Client));
exports.default = NamooClient;
