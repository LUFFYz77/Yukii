import type { APIApplicationCommandOption, PermissionResolvable } from 'discord.js';
import type Client from './Client';
interface CommandDescription {
    content: string;
    usage: string;
    examples: string[];
}
interface CommandPlayer {
    voice: boolean;
    dj: boolean;
    active: boolean;
    djPerm: string | null;
}
interface CommandPermissions {
    dev: boolean;
    client: string[] | PermissionResolvable;
    user: string[] | PermissionResolvable;
}
interface CommandOptions {
    name: string;
    name_localizations?: Record<string, string>;
    description?: Partial<CommandDescription>;
    description_localizations?: Record<string, string>;
    aliases?: string[];
    cooldown?: number;
    args?: boolean;
    vote?: boolean;
    player?: Partial<CommandPlayer>;
    permissions?: Partial<CommandPermissions>;
    slashCommand?: boolean;
    options?: APIApplicationCommandOption[];
    category?: string;
}
export default class Command {
    client: Client;
    name: string;
    name_localizations?: Record<string, string>;
    description: CommandDescription;
    description_localizations?: Record<string, string>;
    aliases: string[];
    cooldown: number;
    args: boolean;
    vote: boolean;
    player: CommandPlayer;
    permissions: CommandPermissions;
    slashCommand: boolean;
    options: APIApplicationCommandOption[];
    category: string;
    constructor(client: Client, options: CommandOptions);
    run(_client: Client, _message: any, _args: string[]): Promise<any>;
}
export {};
