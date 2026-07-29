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
Object.defineProperty(exports, "__esModule", { value: true });
var Command = /** @class */ (function () {
    function Command(client, options) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4;
        this.client = client;
        this.name = options.name;
        this.name_localizations = (_a = options.name_localizations) !== null && _a !== void 0 ? _a : {};
        this.description = {
            content: (_c = (_b = options.description) === null || _b === void 0 ? void 0 : _b.content) !== null && _c !== void 0 ? _c : 'No description provided',
            usage: (_e = (_d = options.description) === null || _d === void 0 ? void 0 : _d.usage) !== null && _e !== void 0 ? _e : 'No usage provided',
            examples: (_g = (_f = options.description) === null || _f === void 0 ? void 0 : _f.examples) !== null && _g !== void 0 ? _g : ['No examples provided'],
        };
        this.description_localizations = (_h = options.description_localizations) !== null && _h !== void 0 ? _h : {};
        this.aliases = (_j = options.aliases) !== null && _j !== void 0 ? _j : [];
        this.cooldown = (_k = options.cooldown) !== null && _k !== void 0 ? _k : 3;
        this.args = (_l = options.args) !== null && _l !== void 0 ? _l : false;
        this.vote = (_m = options.vote) !== null && _m !== void 0 ? _m : false;
        this.player = {
            voice: (_p = (_o = options.player) === null || _o === void 0 ? void 0 : _o.voice) !== null && _p !== void 0 ? _p : false,
            dj: (_r = (_q = options.player) === null || _q === void 0 ? void 0 : _q.dj) !== null && _r !== void 0 ? _r : false,
            active: (_t = (_s = options.player) === null || _s === void 0 ? void 0 : _s.active) !== null && _t !== void 0 ? _t : false,
            djPerm: (_v = (_u = options.player) === null || _u === void 0 ? void 0 : _u.djPerm) !== null && _v !== void 0 ? _v : null,
        };
        this.permissions = {
            dev: (_x = (_w = options.permissions) === null || _w === void 0 ? void 0 : _w.dev) !== null && _x !== void 0 ? _x : false,
            client: (_z = (_y = options.permissions) === null || _y === void 0 ? void 0 : _y.client) !== null && _z !== void 0 ? _z : ['SendMessages', 'ViewChannel', 'EmbedLinks'],
            user: (_1 = (_0 = options.permissions) === null || _0 === void 0 ? void 0 : _0.user) !== null && _1 !== void 0 ? _1 : [],
        };
        this.slashCommand = (_2 = options.slashCommand) !== null && _2 !== void 0 ? _2 : false;
        this.options = (_3 = options.options) !== null && _3 !== void 0 ? _3 : [];
        this.category = (_4 = options.category) !== null && _4 !== void 0 ? _4 : 'general';
    }
    Command.prototype.run = function (_client, _message, _args) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.resolve()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return Command;
}());
exports.default = Command;
