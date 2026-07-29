import type { Player, Track } from 'lavalink-client';
import type { Requester } from '../../types';
export declare const requesterTransformer: (requester: any) => Requester;
export declare function autoPlayFunction(player: Player, lastTrack?: Track): Promise<void>;
