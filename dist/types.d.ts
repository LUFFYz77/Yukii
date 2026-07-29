export declare enum SearchEngine {
    YouTube = "ytsearch",
    YouTubeMusic = "ytmsearch",
    Spotify = "spsearch",
    Deezer = "dzsearch",
    Apple = "amsearch",
    SoundCloud = "scsearch",
    Yandex = "ymsearch",
    JioSaavn = "jssearch"
}
export declare enum Language {
    ChineseCN = "ChineseCN",
    ChineseTW = "ChineseTW",
    EnglishUS = "EnglishUS",
    French = "French",
    German = "German",
    Hindi = "Hindi",
    Indonesian = "Indonesian",
    Japanese = "Japanese",
    Korean = "Korean",
    Norwegian = "Norwegian",
    Polish = "Polish",
    Russian = "Russian",
    SpanishES = "SpanishES",
    Turkish = "Turkish",
    Vietnamese = "Vietnamese"
}
export declare const LocaleFlags: {
    ChineseCN: string;
    ChineseTW: string;
    EnglishUS: string;
    French: string;
    German: string;
    Hindi: string;
    Indonesian: string;
    Japanese: string;
    Korean: string;
    Norwegian: string;
    Polish: string;
    Russian: string;
    SpanishES: string;
    Turkish: string;
    Vietnamese: string;
};
export interface Requester {
    id: string;
    username: string;
    discriminator?: string;
    avatarURL?: string;
}
