import i18n from 'i18n';
import { Locale } from 'discord.js';
export declare function initI18n(): void;
export { i18n };
export declare function T(locale: string, text: string | i18n.TranslateOptions, ...params: any): string;
export declare function localization(lan: keyof typeof Locale, name: any, desc: any): {
    name: any[];
    description: string[];
};
export declare function descriptionLocalization(name: any, text: any): {
    name: any[];
    description: string[];
}[];
