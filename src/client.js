"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
var env_1 = require("./env");
var Client_1 = require("./structures/Client");
var GuildMembers = discord_js_1.GatewayIntentBits.GuildMembers, MessageContent = discord_js_1.GatewayIntentBits.MessageContent, GuildVoiceStates = discord_js_1.GatewayIntentBits.GuildVoiceStates, GuildMessages = discord_js_1.GatewayIntentBits.GuildMessages, Guilds = discord_js_1.GatewayIntentBits.Guilds, GuildMessageTyping = discord_js_1.GatewayIntentBits.GuildMessageTyping;
var clientOptions = {
    intents: [Guilds, GuildMessages, MessageContent, GuildVoiceStates, GuildMembers, GuildMessageTyping],
    allowedMentions: { parse: ['users', 'roles'], repliedUser: false },
};
var client = new Client_1.default(clientOptions);
client.start(env_1.env.TOKEN);
