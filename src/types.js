"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocaleFlags = exports.Language = exports.SearchEngine = void 0;
var SearchEngine;
(function (SearchEngine) {
    SearchEngine["YouTube"] = "ytsearch";
    SearchEngine["YouTubeMusic"] = "ytmsearch";
    SearchEngine["Spotify"] = "spsearch";
    SearchEngine["Deezer"] = "dzsearch";
    SearchEngine["Apple"] = "amsearch";
    SearchEngine["SoundCloud"] = "scsearch";
    SearchEngine["Yandex"] = "ymsearch";
    SearchEngine["JioSaavn"] = "jssearch";
})(SearchEngine || (exports.SearchEngine = SearchEngine = {}));
var Language;
(function (Language) {
    // Bulgarian = "Bulgarian",
    Language["ChineseCN"] = "ChineseCN";
    Language["ChineseTW"] = "ChineseTW";
    // Croatian = "Croatian",
    // Czech = "Czech",
    // Danish = "Danish",
    // Dutch = "Dutch",
    // EnglishGB = "EnglishGB",
    Language["EnglishUS"] = "EnglishUS";
    // Finnish = "Finnish",
    Language["French"] = "French";
    Language["German"] = "German";
    // Greek = "Greek",
    Language["Hindi"] = "Hindi";
    // Hungarian = "Hungarian",
    Language["Indonesian"] = "Indonesian";
    // Italian = "Italian",
    Language["Japanese"] = "Japanese";
    Language["Korean"] = "Korean";
    // Lithuanian = "Lithuanian",
    Language["Norwegian"] = "Norwegian";
    Language["Polish"] = "Polish";
    // PortugueseBR = "PortugueseBR",
    // Romanian = "Romanian",
    Language["Russian"] = "Russian";
    Language["SpanishES"] = "SpanishES";
    // Swedish = "Swedish",
    // Thai = "Thai",
    Language["Turkish"] = "Turkish";
    // Ukrainian = "Ukrainian",
    Language["Vietnamese"] = "Vietnamese";
})(Language || (exports.Language = Language = {}));
exports.LocaleFlags = (_a = {},
    // [Language.Bulgarian]: "🇧🇬",
    _a[Language.ChineseCN] = '🇨🇳',
    _a[Language.ChineseTW] = '🇹🇼',
    // [Language.Croatian]: "🇭🇷",
    // [Language.Czech]: "🇨🇿",
    // [Language.Danish]: "🇩🇰",
    // [Language.Dutch]: "🇳🇱",
    // [Language.EnglishGB]: "🇬🇧",
    _a[Language.EnglishUS] = '🇺🇸',
    // [Language.Finnish]: "🇫🇮",
    _a[Language.French] = '🇫🇷',
    _a[Language.German] = '🇩🇪',
    // [Language.Greek]: "🇬🇷",
    _a[Language.Hindi] = '🇮🇳',
    // [Language.Hungarian]: "🇭🇺",
    _a[Language.Indonesian] = '🇮🇩',
    // [Language.Italian]: "🇮🇹",
    _a[Language.Japanese] = '🇯🇵',
    _a[Language.Korean] = '🇰🇷',
    // [Language.Lithuanian]: "🇱🇹",
    _a[Language.Norwegian] = '🇳🇴',
    _a[Language.Polish] = '🇵🇱',
    // [Language.PortugueseBR]: "🇧🇷",
    // [Language.Romanian]: "🇷🇴",
    _a[Language.Russian] = '🇷🇺',
    _a[Language.SpanishES] = '🇪🇸',
    // [Language.Swedish]: "🇸🇪",
    // [Language.Thai]: "🇹🇭",
    _a[Language.Turkish] = '🇹🇷',
    // [Language.Ukrainian]: "🇺🇦",
    _a[Language.Vietnamese] = '🇻🇳',
    _a);
