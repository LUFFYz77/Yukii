<center><img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=header&text=MUSIC&fontSize=80&fontAlignY=35&animation=twinkling&fontColor=gradient" /></center>

<!-- PROJECT LOGO -->
<p align="center">is a music bot that uses Discord.js, lavalink-client, and TypeScript.
  <br />
  <a href="https://github.com/appujet/lavamusic/issues">Report Bug & Request Feature</a>
</p>

## 🔥 Unique Features

- User-friendly and Easy to Use
- Highly Configurable
- Customizable Prefix
- Multilingual support [Here](/Translation.md)
- Hybrid Command Handling (Slash and Normal Commands)
- Developed using TypeScript and Discord.js v14
- Advanced Music System
- Powerful Search Engine
- 12 + Music Filters
- 24/7 Music Playback
- Playlist commands
- Music channel system

## 🎶 Support Sources

### 🔍 Default Sources

- ![SoundCloud](https://img.shields.io/badge/SoundCloud-FF3300?style=plastic&logo=soundcloud&logoColor=white)
- ![Twitch](https://img.shields.io/badge/Twitch-9146FF?style=plastic&logo=twitch&logoColor=white)
- ![Bandcamp](https://img.shields.io/badge/Bandcamp-629AA9?style=plastic&logo=bandcamp&logoColor=white)
- ![Vimeo](https://img.shields.io/badge/Vimeo-1AB7EA?style=plastic&logo=vimeo&logoColor=white)
- ![Nico](https://img.shields.io/badge/Nico-FF0066?style=plastic&logo=nico&logoColor=white)
- ![Mixer](https://img.shields.io/badge/Mixer-FFA500?style=plastic&logo=mixer&logoColor=white)
- ![http](https://img.shields.io/badge/http-FFA500?style=plastic&logo=http&logoColor=white)

### 🔌 Plugin Sources

**Note: You need to install the plugins to use these sources**

- ![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=plastic&logo=youtube&logoColor=white) ([Required Plugin][youtube-source])
- ![Spotify](https://img.shields.io/badge/Spotify-1ED760?style=plastic&logo=spotify&logoColor=white) ([Required Plugin][LavaSrc])
- ![Deezer](https://img.shields.io/badge/Deezer-FF0000?style=plastic&logo=deezer&logoColor=white) ([Required Plugin][LavaSrc])
- ![Apple Music](https://img.shields.io/badge/Apple%20Music-000000?style=plastic&logo=apple-music&logoColor=white) ([Required Plugin][LavaSrc])
- ![Yandex Music](https://img.shields.io/badge/Yandex%20Music-FF0066?style=plastic&logo=yandex-music&logoColor=white) ([Required Plugin][LavaSrc])
- ![jiosaavn](https://img.shields.io/badge/jiosaavn-51C4D3?style=plastic&logo=jiosaavn&logoColor=white) ([Required Plugin][Jiosaavn])
- ![Mixcloud](https://img.shields.io/badge/Mixcloud-51C4D3?style=plastic&logo=mixcloud&logoColor=white) ([Required Plugin][skybot-lavalink-plugin])
- ![Ocremix](https://img.shields.io/badge/Ocremix-FF6600?style=plastic&logo=ocremix&logoColor=white) ([Required Plugin][skybot-lavalink-plugin])
- ![Clyp](https://img.shields.io/badge/Clyp-6BB5A6?style=plastic&logo=clyp&logoColor=white) ([Required Plugin][skybot-lavalink-plugin])
- ![Reddit](https://img.shields.io/badge/Reddit-FF4500?style=plastic&logo=reddit&logoColor=white) ([Required Plugin][skybot-lavalink-plugin])
- ![Getyarn](https://img.shields.io/badge/Getyarn-FF9000?style=plastic&logo=getyarn&logoColor=white) ([Required Plugin][skybot-lavalink-plugin])
- ![TikTok](https://img.shields.io/badge/TikTok-FF2D55?style=plastic&logo=tiktok&logoColor=white) ([Required Plugin][skybot-lavalink-plugin])
- ![Soundgasm](https://img.shields.io/badge/Soundgasm-F1672F?style=plastic&logo=soundgasm&logoColor=white) ([Required Plugin][skybot-lavalink-plugin])
- ![Text To Speech](https://img.shields.io/badge/Text%20To%20Speech-3080ff?style=plastic&logo=google-translate&logoColor=white) ([Required Plugin][skybot-lavalink-plugin])

[LavaSrc]: https://github.com/topi314/LavaSrc
[skybot-lavalink-plugin]: https://github.com/DuncteBot/skybot-lavalink-plugin
[youtube-source]: https://github.com/lavalink-devs/youtube-source
[jiosaavn]: https://github.com/appujet/jiosaavn-plugin

To Setup a Lavalink server on Windows, Linux, or Replit, [Click Here!](https://github.com/LucasB25/lavalink-server)

### **Need help with plugins?**

Join our [Discord Server](https://discord.gg/YsJCtDuTXp) and ask for help in the `#support` channel!

## 🔧 Requirements

Before starting with the installation, you need to have the following:

- ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) [Recommend LTS or higher](https://nodejs.org/)
- ![Lavalink](https://img.shields.io/badge/Lavalink-7289DA?style=for-the-badge&logo=discord&logoColor=white) [v4 or higher](https://github.com/lavalink-devs/lavalink)

### Optional

- ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white) [Optional](https://www.mongodb.com/try/download/community) (For MongoDB database)
- ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white) [Optional](https://www.postgresql.org/download/) (For PostgreSQL database)
- ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) [Optional](https://www.docker.com/) (For Docker Installation)
- ![Docker-Compose](https://img.shields.io/badge/Docker--Compose-2496ED?style=for-the-badge&logo=docker&logoColor=white) [Optional](https://docs.docker.com/compose/) (For Docker Installation)

## 🚀 Installation from source

1. Clone the music-template repository:

```bash
git clone https://github.com/appujet/music-template.git
```

2. Change to the music-template directory:

```bash
cd music-template
```

3. Install the required packages:

```bash
npm i
```

4. Copy the `.env.example` file to `.env` and fill in all required values

5. Copy the `example.<The data source you want to use>.schema.prisma` file to `schema.prisma` in `prisma` folder
   Note: If you want to use sqlite, skip this step.
   If you are using a different data source, don't forget to fill in the `DATABASE_URL` value in `.env`.

6. Generate the Prisma client:

```bash
npm run db:push
```

7. Run the migrations (Only if you want to migrate your database):

```bash
npm run db:migrate
```

8. Run the bot:

Note: You can also run to easily run the bot on Windows.

```bash
npm start
```

9. Invite the bot to your server:

Generate an invite link for your bot and invite it to your server using the [Discord Developer Portal](https://discord.com/developers/applications) or [Permissions Calculator](https://discordapi.com/permissions.html).

## 🔗 Useful Links

- ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) [Node.js](https://nodejs.org/en/download/)
- ![Discord.js](https://img.shields.io/badge/Discord.js-7289DA?style=for-the-badge&logo=discord&logoColor=white) [Discord.js](https://discord.js.org/#/)
- ![Lavalink](https://img.shields.io/badge/Lavalink-7289DA?style=for-the-badge&logo=discord&logoColor=white) [Lavalink](https://github.com/lavalink-devs/Lavalink)
- ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white) [MongoDB](https://www.mongodb.com/try/download/community)
- ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white) [PostgreSQL](https://www.postgresql.org/download/)
- ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) [Docker](https://www.docker.com/)
- ![Docker-Compose](https://img.shields.io/badge/Docker--Compose-2496ED?style=for-the-badge&logo=docker&logoColor=white) [Docker-Compose](https://docs.docker.com/compose/)

## 📝 Tutorial

A tutorial has been uploaded on YouTube. Watch it by [clicking here](https://youtu.be/x5lQD2rguz0).

## 📜 Contributing

Thank you for your interest in contributing to Lavamusic! Here are some guidelines to follow when contributing:

1. Fork the repository and create a new branch for your feature or bug fix.
2. Write clean and concise code that follows the established coding style.
3. Create detailed and thorough documentation for any new features or changes.
4. Write and run tests for your code.
5. Submit a pull request with your changes.
   Your contribution will be reviewed by the project maintainers, and any necessary feedback or changes will be discussed with you. We appreciate your help in making Lavamusic better!

## 🔐 License

Distributed under the GPL-3.0 license. See [![LICENSE](https://img.shields.io/github/license/appujet/lavamusic?style=social)](https://github.com/appujet/lavamusic/blob/main/LICENSE) for more information [READ](https://discord.com/channels/942117923001098260/942120006219624469/1278087961774129314).
