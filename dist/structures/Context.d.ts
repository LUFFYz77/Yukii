import { type APIInteractionGuildMember, ChatInputCommandInteraction, type CommandInteraction, type Guild, type GuildMember, type GuildMemberResolvable, type InteractionEditReplyOptions, type InteractionReplyOptions, Message, type MessageCreateOptions, type MessageEditOptions, type MessagePayload, type TextBasedChannel, type User } from "discord.js";
import type { Client } from "./index";
export default class Context {
    ctx: CommandInteraction | Message;
    interaction: ChatInputCommandInteraction | null;
    message: Message | null;
    id: string;
    channelId: string;
    client: Client;
    author: User | null;
    channel: TextBasedChannel;
    guild: Guild;
    createdAt: Date;
    createdTimestamp: number;
    member: GuildMemberResolvable | GuildMember | APIInteractionGuildMember | null;
    args: any[];
    msg: any;
    guildLocale: string | undefined;
    constructor(ctx: ChatInputCommandInteraction | Message, args: any[]);
    private setUpLocale;
    get isInteraction(): boolean;
    setArgs(args: any[]): void;
    sendMessage(content: string | MessagePayload | MessageCreateOptions | InteractionReplyOptions): Promise<Message>;
    editMessage(content: string | MessagePayload | InteractionEditReplyOptions | MessageEditOptions): Promise<Message>;
    sendDeferMessage(content: string | MessagePayload | MessageCreateOptions): Promise<Message>;
    locale(key: string, ...args: any): string;
    sendFollowUp(content: string | MessagePayload | MessageCreateOptions | InteractionReplyOptions): Promise<void>;
    get deferred(): boolean | undefined;
    options: {
        getRole: (name: string, required?: boolean) => import("discord.js").Role | import("discord.js").APIRole | null | undefined;
        getMember: (name: string, required?: boolean) => GuildMember | import("discord.js").APIInteractionDataResolvedGuildMember | null | undefined;
        get: (name: string, required?: boolean) => import("discord.js").CommandInteractionOption<import("discord.js").CacheType> | null | undefined;
        getChannel: (name: string, required?: boolean) => import("discord.js").GuildBasedChannel | import("discord.js").APIInteractionDataResolvedChannel | null | undefined;
        getSubCommand: () => string | undefined;
    };
}
