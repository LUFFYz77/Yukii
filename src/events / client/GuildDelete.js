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
var GuildDelete = /** @class */ (function (_super) {
    __extends(GuildDelete, _super);
    function GuildDelete(client, file) {
        return _super.call(this, client, file, {
            name: 'guildDelete',
        }) || this;
    }
    GuildDelete.prototype.run = function (guild) {
        return __awaiter(this, void 0, void 0, function () {
            var owner, error_1, embed, logChannelId, channel, error_2;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!guild)
                            return [2 /*return*/];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, guild.members.fetch(guild.ownerId)];
                    case 2:
                        owner = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        this.client.logger.error("Error fetching owner for guild ".concat(guild.id, ": ").concat(error_1));
                        return [3 /*break*/, 4];
                    case 4:
                        embed = new discord_js_1.EmbedBuilder()
                            .setColor(this.client.config.color.red)
                            .setAuthor({
                            name: guild.name || 'Unknown Guild',
                            iconURL: guild.iconURL({ extension: 'jpeg' }),
                        })
                            .setDescription("**".concat(guild.name, "** has been removed from my guilds!"))
                            .setThumbnail(guild.iconURL({ extension: 'jpeg' }))
                            .addFields({
                            name: 'Owner',
                            value: owner ? owner.user.tag : 'Unknown#0000',
                            inline: true,
                        }, {
                            name: 'Members',
                            value: ((_a = guild.memberCount) === null || _a === void 0 ? void 0 : _a.toString()) || 'Unknown',
                            inline: true,
                        }, {
                            name: 'Created At',
                            value: "<t:".concat(Math.floor(guild.createdTimestamp / 1000), ":F>"),
                            inline: true,
                        }, {
                            name: 'Removed At',
                            value: "<t:".concat(Math.floor(Date.now() / 1000), ":F>"),
                            inline: true,
                        }, { name: 'ID', value: guild.id, inline: true })
                            .setTimestamp();
                        logChannelId = this.client.env.LOG_CHANNEL_ID;
                        if (!logChannelId) {
                            this.client.logger.error('Log channel ID not found in configuration.');
                            return [2 /*return*/];
                        }
                        _b.label = 5;
                    case 5:
                        _b.trys.push([5, 8, , 9]);
                        return [4 /*yield*/, this.client.channels.fetch(logChannelId)];
                    case 6:
                        channel = (_b.sent());
                        if (!channel) {
                            this.client.logger.error("Log channel not found with ID ".concat(logChannelId, ". Please change the settings in .env or, if you have a channel, invite me to that guild."));
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, channel.send({ embeds: [embed] })];
                    case 7:
                        _b.sent();
                        return [3 /*break*/, 9];
                    case 8:
                        error_2 = _b.sent();
                        this.client.logger.error("Error sending message to log channel ".concat(logChannelId, ": ").concat(error_2));
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    return GuildDelete;
}(index_1.Event));
exports.default = GuildDelete;
