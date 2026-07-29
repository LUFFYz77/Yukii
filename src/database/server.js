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
var client_1 = require("@prisma/client");
var env_1 = require("../env");
var ServerData = /** @class */ (function () {
    function ServerData() {
        this.prisma = new client_1.PrismaClient();
    }
    ServerData.prototype.get = function (guildId) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.prisma.guild.findUnique({ where: { guildId: guildId } })];
                    case 1: return [2 /*return*/, (_a = (_b.sent())) !== null && _a !== void 0 ? _a : this.createGuild(guildId)];
                }
            });
        });
    };
    ServerData.prototype.createGuild = function (guildId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.guild.create({
                            data: {
                                guildId: guildId,
                                prefix: env_1.env.PREFIX,
                            },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ServerData.prototype.setPrefix = function (guildId, prefix) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.guild.upsert({
                            where: { guildId: guildId },
                            update: { prefix: prefix },
                            create: { guildId: guildId, prefix: prefix },
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ServerData.prototype.getPrefix = function (guildId) {
        return __awaiter(this, void 0, void 0, function () {
            var guild;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.get(guildId)];
                    case 1:
                        guild = _b.sent();
                        return [2 /*return*/, (_a = guild === null || guild === void 0 ? void 0 : guild.prefix) !== null && _a !== void 0 ? _a : env_1.env.PREFIX];
                }
            });
        });
    };
    ServerData.prototype.updateLanguage = function (guildId, language) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.guild.update({
                            where: { guildId: guildId },
                            data: { language: language },
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ServerData.prototype.getLanguage = function (guildId) {
        return __awaiter(this, void 0, void 0, function () {
            var guild;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.get(guildId)];
                    case 1:
                        guild = _b.sent();
                        return [2 /*return*/, (_a = guild === null || guild === void 0 ? void 0 : guild.language) !== null && _a !== void 0 ? _a : env_1.env.DEFAULT_LANGUAGE];
                }
            });
        });
    };
    ServerData.prototype.getSetup = function (guildId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.setup.findUnique({ where: { guildId: guildId } })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ServerData.prototype.setSetup = function (guildId, textId, messageId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.setup.upsert({
                            where: { guildId: guildId },
                            update: { textId: textId, messageId: messageId },
                            create: { guildId: guildId, textId: textId, messageId: messageId },
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ServerData.prototype.deleteSetup = function (guildId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.setup.delete({ where: { guildId: guildId } })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ServerData.prototype.set_247 = function (guildId, textId, voiceId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.stay.upsert({
                            where: { guildId: guildId },
                            update: { textId: textId, voiceId: voiceId },
                            create: { guildId: guildId, textId: textId, voiceId: voiceId },
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ServerData.prototype.delete_247 = function (guildId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.stay.delete({ where: { guildId: guildId } })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ServerData.prototype.get_247 = function (guildId) {
        return __awaiter(this, void 0, void 0, function () {
            var stay;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!guildId) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.prisma.stay.findUnique({ where: { guildId: guildId } })];
                    case 1:
                        stay = _a.sent();
                        if (stay)
                            return [2 /*return*/, stay];
                        return [2 /*return*/, null];
                    case 2: return [2 /*return*/, this.prisma.stay.findMany()];
                }
            });
        });
    };
    ServerData.prototype.setDj = function (guildId, mode) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.dj.upsert({
                            where: { guildId: guildId },
                            update: { mode: mode },
                            create: { guildId: guildId, mode: mode },
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ServerData.prototype.getDj = function (guildId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.dj.findUnique({ where: { guildId: guildId } })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ServerData.prototype.getRoles = function (guildId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.role.findMany({ where: { guildId: guildId } })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ServerData.prototype.addRole = function (guildId, roleId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.role.create({ data: { guildId: guildId, roleId: roleId } })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ServerData.prototype.removeRole = function (guildId, roleId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.role.deleteMany({ where: { guildId: guildId, roleId: roleId } })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ServerData.prototype.clearRoles = function (guildId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.role.deleteMany({ where: { guildId: guildId } })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ServerData.prototype.getPlaylist = function (userId, name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.playlist.findUnique({
                            where: { userId_name: { userId: userId, name: name } },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ServerData.prototype.getUserPlaylists = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.playlist.findMany({
                            where: { userId: userId },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ServerData.prototype.createPlaylist = function (userId, name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.playlist.create({ data: { userId: userId, name: name } })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // createPlaylist with tracks
    ServerData.prototype.createPlaylistWithTracks = function (userId, name, tracks) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.playlist.create({
                            data: {
                                userId: userId,
                                name: name,
                                tracks: JSON.stringify(tracks),
                            },
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Deletes a playlist from the database
     *
     * @param userId The ID of the user that owns the playlist
     * @param name The name of the playlist to delete
     */
    ServerData.prototype.deletePlaylist = function (userId, name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.playlist.delete({
                            where: { userId_name: { userId: userId, name: name } },
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ServerData.prototype.deleteSongsFromPlaylist = function (userId, playlistName) {
        return __awaiter(this, void 0, void 0, function () {
            var playlist;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getPlaylist(userId, playlistName)];
                    case 1:
                        playlist = _a.sent();
                        if (!playlist) return [3 /*break*/, 3];
                        // Update the playlist and reset the tracks to an empty array
                        return [4 /*yield*/, this.prisma.playlist.update({
                                where: {
                                    userId_name: {
                                        userId: userId,
                                        name: playlistName,
                                    },
                                },
                                data: {
                                    tracks: JSON.stringify([]), // Set tracks to an empty array
                                },
                            })];
                    case 2:
                        // Update the playlist and reset the tracks to an empty array
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ServerData.prototype.addTracksToPlaylist = function (userId, playlistName, tracks) {
        return __awaiter(this, void 0, void 0, function () {
            var tracksJson, playlist, existingTracks, updatedTracks;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tracksJson = JSON.stringify(tracks);
                        return [4 /*yield*/, this.prisma.playlist.findUnique({
                                where: {
                                    userId_name: {
                                        userId: userId,
                                        name: playlistName,
                                    },
                                },
                            })];
                    case 1:
                        playlist = _a.sent();
                        if (!playlist) return [3 /*break*/, 5];
                        existingTracks = playlist.tracks ? JSON.parse(playlist.tracks) : [];
                        if (!Array.isArray(existingTracks)) return [3 /*break*/, 3];
                        updatedTracks = __spreadArray(__spreadArray([], existingTracks, true), tracks, true);
                        // Update the playlist with the new tracks
                        return [4 /*yield*/, this.prisma.playlist.update({
                                where: {
                                    userId_name: {
                                        userId: userId,
                                        name: playlistName,
                                    },
                                },
                                data: {
                                    tracks: JSON.stringify(updatedTracks), // Store the updated tracks as a serialized JSON string
                                },
                            })];
                    case 2:
                        // Update the playlist with the new tracks
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3: throw new Error('Existing tracks are not in an array format.');
                    case 4: return [3 /*break*/, 7];
                    case 5: 
                    // If no playlist exists, create a new one with the provided tracks
                    return [4 /*yield*/, this.prisma.playlist.create({
                            data: {
                                userId: userId,
                                name: playlistName,
                                tracks: tracksJson, // Store the serialized JSON string
                            },
                        })];
                    case 6:
                        // If no playlist exists, create a new one with the provided tracks
                        _a.sent();
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    ServerData.prototype.removeSong = function (userId, playlistName, encodedSong) {
        return __awaiter(this, void 0, void 0, function () {
            var playlist, tracks, songIndex;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getPlaylist(userId, playlistName)];
                    case 1:
                        playlist = _a.sent();
                        if (!playlist) return [3 /*break*/, 3];
                        tracks = JSON.parse(playlist === null || playlist === void 0 ? void 0 : playlist.tracks);
                        songIndex = tracks.indexOf(encodedSong);
                        if (!(songIndex !== -1)) return [3 /*break*/, 3];
                        // Remove the song from the array
                        tracks.splice(songIndex, 1);
                        // Update the playlist with the new list of tracks
                        return [4 /*yield*/, this.prisma.playlist.update({
                                where: {
                                    userId_name: {
                                        userId: userId,
                                        name: playlistName,
                                    },
                                },
                                data: {
                                    tracks: JSON.stringify(tracks), // Re-serialize the updated array back to a string
                                },
                            })];
                    case 2:
                        // Update the playlist with the new list of tracks
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ServerData.prototype.getTracksFromPlaylist = function (userId, playlistName) {
        return __awaiter(this, void 0, void 0, function () {
            var playlist, tracks;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.playlist.findUnique({
                            where: {
                                userId_name: {
                                    userId: userId,
                                    name: playlistName,
                                },
                            },
                        })];
                    case 1:
                        playlist = _a.sent();
                        if (!playlist) {
                            return [2 /*return*/, null];
                        }
                        tracks = JSON.parse(playlist.tracks);
                        return [2 /*return*/, tracks];
                }
            });
        });
    };
    ServerData.prototype.getAllOwners = function () {
        return __awaiter(this, void 0, void 0, function () {
            var owners;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.owner.findMany()];
                    case 1:
                        owners = _a.sent();
                        if (!owners || owners.length === 0) {
                            return [2 /*return*/, []];
                        }
                        return [2 /*return*/, owners];
                }
            });
        });
    };
    ServerData.prototype.addOwner = function (ownerId) {
        return __awaiter(this, void 0, void 0, function () {
            var existingOwner;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.owner.findUnique({ where: { ownerId: ownerId } })];
                    case 1:
                        existingOwner = _a.sent();
                        if (existingOwner) {
                            throw new Error("User ".concat(ownerId, " is already an owner of bot"));
                        }
                        return [2 /*return*/, this.prisma.owner.create({ data: { ownerId: ownerId } })];
                }
            });
        });
    };
    ServerData.prototype.removeOwner = function (ownerId) {
        return __awaiter(this, void 0, void 0, function () {
            var existingOwner;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.owner.findUnique({ where: { ownerId: ownerId } })];
                    case 1:
                        existingOwner = _a.sent();
                        if (!existingOwner) {
                            throw new Error("User ".concat(ownerId, " is not an owner of bot"));
                        }
                        return [4 /*yield*/, this.prisma.owner.delete({
                                where: { ownerId: ownerId }
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ServerData.prototype.checkOwners = function (ownerId) {
        return __awaiter(this, void 0, void 0, function () {
            var existingOwner, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.prisma.owner.findUnique({
                                where: { ownerId: ownerId }
                            })];
                    case 1:
                        existingOwner = _a.sent();
                        return [2 /*return*/, existingOwner ? Object.keys(existingOwner).length > 0 : false]; // Converts null to false
                    case 2:
                        error_1 = _a.sent();
                        console.error('Error checking owner:', error_1);
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return ServerData;
}());
exports.default = ServerData;
