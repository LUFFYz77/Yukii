import { type ColorResolvable, type Guild, type Message, type TextChannel } from "discord.js";
import type { Player, Track } from "lavalink-client";
import type { Client } from "../structures/index";
declare function setupStart(client: Client, query: string, player: Player, message: Message): Promise<void>;
declare function trackStart(msgId: any, channel: TextChannel, player: Player, track: Track, client: Client, locale: string): Promise<void>;
declare function updateSetup(client: Client, guild: Guild, locale: string): Promise<void>;
declare function buttonReply(int: any, args: string, color: ColorResolvable): Promise<void>;
declare function oops(channel: TextChannel, args: string): Promise<void>;
export { setupStart, trackStart, buttonReply, updateSetup, oops };
