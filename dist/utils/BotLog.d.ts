import type { Client } from '../structures/index';
export declare function sendLog(client: Client, message: string, type?: 'error' | 'warn' | 'info' | 'success'): void;
