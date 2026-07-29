"use strict";
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
exports.i18n = void 0;
exports.initI18n = initI18n;
exports.T = T;
exports.localization = localization;
exports.descriptionLocalization = descriptionLocalization;
var i18n_1 = require("i18n");
exports.i18n = i18n_1.default;
var discord_js_1 = require("discord.js");
var config_1 = require("../config");
var types_1 = require("../types");
var Logger_1 = require("./Logger");
var logger = new Logger_1.default();
function initI18n() {
    i18n_1.default.configure({
        locales: Object.keys(types_1.Language),
        defaultLocale: typeof config_1.default === 'string' ? config_1.default : 'EnglishUS',
        directory: "".concat(process.cwd(), "/locales"),
        retryInDefaultLocale: true,
        objectNotation: true,
        register: global,
        logWarnFn: console.warn,
        logErrorFn: console.error,
        missingKeyFn: function (_locale, value) {
            return value;
        },
        mustacheConfig: {
            tags: ['{', '}'],
            disable: false,
        },
    });
    logger.info('I18n has been initialized');
}
function T(locale, text) {
    var params = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        params[_i - 2] = arguments[_i];
    }
    i18n_1.default.setLocale(locale);
    return i18n_1.default.__mf.apply(i18n_1.default, __spreadArray([text], params, false));
}
function localization(lan, name, desc) {
    return {
        name: [discord_js_1.Locale[lan], name],
        description: [discord_js_1.Locale[lan], T(lan, desc)],
    };
}
function descriptionLocalization(name, text) {
    return i18n_1.default.getLocales().map(function (locale) {
        // Check if the locale is a valid key of the Locale enum
        if (locale in discord_js_1.Locale) {
            var localeValue = discord_js_1.Locale[locale];
            return localization(localeValue, name, text);
        }
        // If locale is not in the enum, handle it accordingly
        return localization(locale, name, text); // You can choose how to handle this case
    });
}
