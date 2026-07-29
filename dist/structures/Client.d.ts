import { Api } from '@top-gg/sdk';
import { Client, Collection, EmbedBuilder } from 'discord.js';
import ServerData from '../database/server';
import { env } from '../env';
import { Utils } from '../utils/Utils';
import LavalinkClient from './LavalinkClient';
import Logger from './Logger';
export default class NamooClient extends Client {
    commands: Collection<string, any>;
    aliases: Collection<string, any>;
    db: ServerData;
    cooldown: Collection<string, any>;
    config: {
        color: {
            red: number;
            green: number;
            blue: number;
            yellow: number;
            main: number;
        };
        emoji: {
            pause: string;
            resume: string;
            stop: string;
            skip: string;
            previous: string;
            forward: string;
            rewind: string;
            voldown: string;
            volup: string;
            shuffle: string;
            loop: {
                none: string;
                track: string;
            };
            page: {
                last: string;
                first: string;
                back: string;
                next: string;
                cancel: string;
            };
            main: {
                hello: string;
            };
            music: {
                loading: string;
                searching: string;
                playing: string;
            };
            categories: {
                config: string;
                filters: string;
                music: string;
                playlist: string;
                info: string;
            };
        };
        icons: any;
        links: {
            img: string;
        };
    };
    logger: Logger;
    readonly emoji: {
        pause: string;
        resume: string;
        stop: string;
        skip: string;
        previous: string;
        forward: string;
        rewind: string;
        voldown: string;
        volup: string;
        shuffle: string;
        loop: {
            none: string;
            track: string;
        };
        page: {
            last: string;
            first: string;
            back: string;
            next: string;
            cancel: string;
        };
        main: {
            hello: string;
        };
        music: {
            loading: string;
            searching: string;
            playing: string;
        };
        categories: {
            config: string;
            filters: string;
            music: string;
            playlist: string;
            info: string;
        };
    };
    readonly color: {
        red: number;
        green: number;
        blue: number;
        yellow: number;
        main: number;
    };
    private body;
    topGG: Api;
    utils: typeof Utils;
    env: typeof env;
    manager: LavalinkClient;
    embed(): EmbedBuilder;
    start(token: string): Promise<void>;
    private loadCommands;
    deployCommands(guildId?: string): Promise<void>;
    private loadEvents;
}
