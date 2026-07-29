import type { Context, Client } from '../structures/index';
export declare class Utils {
    static formatTime(ms: number): string;
    static updateStatus(client: Client, guildId?: string): void;
    static chunk(array: any[], size: number): any[][];
    static formatBytes(bytes: number, decimals?: number): string;
    static formatCapitalize(val: string): string;
    static formatUpperCase(val: string): string;
    static emojiToImage(emoji: string): any | null;
    static formatNumber(number: number): string;
    static parseTime(string: string): number;
    static progressBar(current: number, total: number, size?: number): string;
    static paginate(client: Client, ctx: Context, embed: any[]): Promise<void>;
}
