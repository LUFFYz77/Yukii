"use strict";
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
exports.requesterTransformer = void 0;
exports.autoPlayFunction = autoPlayFunction;
/**
 * Transforms a requester into a standardized requester object.
 *
 * @param {any} requester The requester to transform. Can be a string, a user, or an object with
 *                        the keys `id`, `username`, and `avatarURL`.
 * @returns {Requester} The transformed requester object.
 */
var requesterTransformer = function (requester) {
    // if it's already the transformed requester
    if (typeof requester === 'object' && 'avatar' in requester && Object.keys(requester).length === 3)
        return requester;
    // if it's still a string
    if (typeof requester === 'object' && 'displayAvatarURL' in requester) {
        // it's a user
        return {
            id: requester.id,
            username: requester.username,
            avatarURL: requester.displayAvatarURL({ extension: 'png' }),
            discriminator: requester.discriminator,
        };
    }
    return { id: requester.toString(), username: 'unknown' };
};
exports.requesterTransformer = requesterTransformer;
/**
 * Function that will be called when the autoplay feature is enabled and the queue
 * is empty. It will search for tracks based on the last played track and add them
 * to the queue.
 *
 * @param {Player} player The player instance.
 * @param {Track} lastTrack The last played track.
 * @returns {Promise<void>} A promise that resolves when the function is done.
 */
function autoPlayFunction(player, lastTrack) {
    return __awaiter(this, void 0, void 0, function () {
        var filtered, ids, res, res, res, track;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!player.get('autoplay'))
                        return [2 /*return*/];
                    if (!lastTrack)
                        return [2 /*return*/];
                    if (!(lastTrack.info.sourceName === 'spotify')) return [3 /*break*/, 4];
                    filtered = player.queue.previous.filter(function (v) { return v.info.sourceName === 'spotify'; }).slice(0, 5);
                    ids = filtered.map(function (v) { var _a, _b, _c, _d; return v.info.identifier || ((_b = (_a = v.info.uri.split('/')) === null || _a === void 0 ? void 0 : _a.reverse()) === null || _b === void 0 ? void 0 : _b[0]) || ((_d = (_c = v.info.uri.split('/')) === null || _c === void 0 ? void 0 : _c.reverse()) === null || _d === void 0 ? void 0 : _d[1]); });
                    if (!(ids.length >= 2)) return [3 /*break*/, 3];
                    return [4 /*yield*/, player
                            .search({
                            query: "seed_tracks=".concat(ids.join(',')), //`seed_artists=${artistIds.join(",")}&seed_genres=${genre.join(",")}&seed_tracks=${trackIds.join(",")}`;
                            source: 'sprec',
                        }, lastTrack.requester)
                            .then(function (response) {
                            response.tracks = response.tracks.filter(function (v) { return v.info.identifier !== lastTrack.info.identifier; }); // remove the lastPlayed track if it's in there..
                            return response;
                        })
                            .catch(console.warn)];
                case 1:
                    res = _a.sent();
                    if (!(res && res.tracks.length > 0)) return [3 /*break*/, 3];
                    return [4 /*yield*/, player.queue.add(res.tracks.slice(0, 5).map(function (track) {
                            // transform the track plugininfo so you can figure out if the track is from autoplay or not.
                            track.pluginInfo.clientData = __assign(__assign({}, (track.pluginInfo.clientData || {})), { fromAutoplay: true });
                            return track;
                        }))];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/];
                case 4:
                    if (!(lastTrack.info.sourceName === 'youtube' || lastTrack.info.sourceName === 'youtubemusic')) return [3 /*break*/, 8];
                    return [4 /*yield*/, player
                            .search({
                            query: "https://www.youtube.com/watch?v=".concat(lastTrack.info.identifier, "&list=RD").concat(lastTrack.info.identifier),
                            source: 'youtube',
                        }, lastTrack.requester)
                            .then(function (response) {
                            response.tracks = response.tracks.filter(function (v) { return v.info.identifier !== lastTrack.info.identifier; }); // remove the lastPlayed track if it's in there..
                            return response;
                        })
                            .catch(console.warn)];
                case 5:
                    res = _a.sent();
                    if (!(res && res.tracks.length > 0)) return [3 /*break*/, 7];
                    return [4 /*yield*/, player.queue.add(res.tracks.slice(0, 5).map(function (track) {
                            // transform the track plugininfo so you can figure out if the track is from autoplay or not.
                            track.pluginInfo.clientData = __assign(__assign({}, (track.pluginInfo.clientData || {})), { fromAutoplay: true });
                            return track;
                        }))];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7: return [2 /*return*/];
                case 8:
                    if (!(lastTrack.info.sourceName === 'jiosaavn')) return [3 /*break*/, 11];
                    return [4 /*yield*/, player.search({ query: "jsrec:".concat(lastTrack.info.identifier), source: 'jsrec' }, lastTrack.requester)];
                case 9:
                    res = _a.sent();
                    if (!(res.tracks.length > 0)) return [3 /*break*/, 11];
                    track = res.tracks.filter(function (v) { return v.info.identifier !== lastTrack.info.identifier; })[0];
                    return [4 /*yield*/, player.queue.add(track)];
                case 10:
                    _a.sent();
                    _a.label = 11;
                case 11: return [2 /*return*/];
            }
        });
    });
}
