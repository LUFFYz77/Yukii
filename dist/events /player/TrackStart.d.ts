import { type ButtonInteraction, type ChannelSelectMenuInteraction, type MentionableSelectMenuInteraction, type RoleSelectMenuInteraction, type StringSelectMenuInteraction, type UserSelectMenuInteraction } from 'discord.js';
import type { Player, Track, TrackStartEvent } from 'lavalink-client';
import { Event, type Client } from '../../structures/index';
export default class TrackStart extends Event {
    constructor(client: Client, file: string);
    run(player: Player, track: Track | null, _payload: TrackStartEvent): Promise<void>;
}
export declare function checkDj(client: Client, interaction: ButtonInteraction<'cached'> | StringSelectMenuInteraction<'cached'> | UserSelectMenuInteraction<'cached'> | RoleSelectMenuInteraction<'cached'> | MentionableSelectMenuInteraction<'cached'> | ChannelSelectMenuInteraction<'cached'>): Promise<boolean>;
