"use strict";
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
    Language["ChineseCN"] = "ChineseCN";
    Language["ChineseTW"] = "ChineseTW";
    Language["EnglishUS"] = "EnglishUS";
    Language["French"] = "French";
    Language["German"] = "German";
    Language["Hindi"] = "Hindi";
    Language["Indonesian"] = "Indonesian";
    Language["Japanese"] = "Japanese";
    Language["Korean"] = "Korean";
    Language["Norwegian"] = "Norwegian";
    Language["Polish"] = "Polish";
    Language["Russian"] = "Russian";
    Language["SpanishES"] = "SpanishES";
    Language["Turkish"] = "Turkish";
    Language["Vietnamese"] = "Vietnamese";
})(Language || (exports.Language = Language = {}));
exports.LocaleFlags = {
    [Language.ChineseCN]: '🇨🇳',
    [Language.ChineseTW]: '🇹🇼',
    [Language.EnglishUS]: '🇺🇸',
    [Language.French]: '🇫🇷',
    [Language.German]: '🇩🇪',
    [Language.Hindi]: '🇮🇳',
    [Language.Indonesian]: '🇮🇩',
    [Language.Japanese]: '🇯🇵',
    [Language.Korean]: '🇰🇷',
    [Language.Norwegian]: '🇳🇴',
    [Language.Polish]: '🇵🇱',
    [Language.Russian]: '🇷🇺',
    [Language.SpanishES]: '🇪🇸',
    [Language.Turkish]: '🇹🇷',
    [Language.Vietnamese]: '🇻🇳',
};
