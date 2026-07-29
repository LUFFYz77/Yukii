import { ActionRowBuilder, ButtonBuilder } from 'discord.js';
import type { Player } from 'lavalink-client';
import type { Client } from '../structures/index';
declare function getButtons(player: Player, client: Client): ActionRowBuilder<ButtonBuilder>[];
export { getButtons };
