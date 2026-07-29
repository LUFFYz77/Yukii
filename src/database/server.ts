import {
	type Dj,
	type Guild,
	type Owner,
	type Playlist,
	PrismaClient,
	type Role,
	type Setup,
	type Stay
} from '@prisma/client';
import {env} from '../env';

export default class ServerData {
	private prisma: PrismaClient;

	constructor() {
		this.prisma = new PrismaClient();
	}

	public async get(guildId: string): Promise<Guild> {
		return (await this.prisma.guild.findUnique({ where: { guildId } })) ?? this.createGuild(guildId);
	}

	private async createGuild(guildId: string): Promise<Guild> {
		return await this.prisma.guild.create({
			data: {
				guildId,
				prefix: env.PREFIX,
			},
		});
	}

	public async setPrefix(guildId: string, prefix: string): Promise<void> {
		await this.prisma.guild.upsert({
			where: { guildId },
			update: { prefix },
			create: { guildId, prefix },
		});
	}

	public async getPrefix(guildId: string): Promise<string> {
		const guild = await this.get(guildId);
		return guild?.prefix ?? env.PREFIX;
	}

	public async updateLanguage(guildId: string, language: string): Promise<void> {
		await this.prisma.guild.update({
			where: { guildId },
			data: { language },
		});
	}

	public async getLanguage(guildId: string): Promise<string> {
		const guild = await this.get(guildId);
		return guild?.language ?? env.DEFAULT_LANGUAGE;
	}

	public async getSetup(guildId: string): Promise<Setup | null> {
		return await this.prisma.setup.findUnique({ where: { guildId } });
	}

	public async setSetup(guildId: string, textId: string, messageId: string): Promise<void> {
		await this.prisma.setup.upsert({
			where: { guildId },
			update: { textId, messageId },
			create: { guildId, textId, messageId },
		});
	}

	public async deleteSetup(guildId: string): Promise<void> {
		await this.prisma.setup.delete({ where: { guildId } });
	}

	public async set_247(guildId: string, textId: string, voiceId: string): Promise<void> {
		await this.prisma.stay.upsert({
			where: { guildId },
			update: { textId, voiceId },
			create: { guildId, textId, voiceId },
		});
	}

	public async delete_247(guildId: string): Promise<void> {
		await this.prisma.stay.delete({ where: { guildId } });
	}

	public async get_247(guildId?: string): Promise<Stay | Stay[] | null> {
		if (guildId) {
			//return await this.prisma.stay.findUnique({ where: { guildId } });
			const stay = await this.prisma.stay.findUnique({ where: { guildId } });
			if (stay) return stay;
			return null;
		}
		return this.prisma.stay.findMany();
	}

	public async setDj(guildId: string, mode: boolean): Promise<void> {
		await this.prisma.dj.upsert({
			where: { guildId },
			update: { mode },
			create: { guildId, mode },
		});
	}

	public async getDj(guildId: string): Promise<Dj | null> {
		return await this.prisma.dj.findUnique({ where: { guildId } });
	}

	public async getRoles(guildId: string): Promise<Role[]> {
		return await this.prisma.role.findMany({ where: { guildId } });
	}

	public async addRole(guildId: string, roleId: string): Promise<void> {
		await this.prisma.role.create({ data: { guildId, roleId } });
	}

	public async removeRole(guildId: string, roleId: string): Promise<void> {
		await this.prisma.role.deleteMany({ where: { guildId, roleId } });
	}

	public async clearRoles(guildId: string): Promise<void> {
		await this.prisma.role.deleteMany({ where: { guildId } });
	}

	public async getPlaylist(userId: string, name: string): Promise<Playlist | null> {
		return await this.prisma.playlist.findUnique({
			where: { userId_name: { userId, name } },
		});
	}

	public async getUserPlaylists(userId: string): Promise<Playlist[]> {
		return await this.prisma.playlist.findMany({
			where: { userId },
		});
	}

	public async createPlaylist(userId: string, name: string): Promise<void> {
		await this.prisma.playlist.create({ data: { userId, name } });
	}

	// createPlaylist with tracks
	public async createPlaylistWithTracks(userId: string, name: string, tracks: string[]): Promise<void> {
		await this.prisma.playlist.create({
			data: {
				userId,
				name,
				tracks: JSON.stringify(tracks),
			},
		});
	}
	/**
	 * Deletes a playlist from the database
	 *
	 * @param userId The ID of the user that owns the playlist
	 * @param name The name of the playlist to delete
	 */
	public async deletePlaylist(userId: string, name: string): Promise<void> {
		await this.prisma.playlist.delete({
			where: { userId_name: { userId, name } },
		});
	}

	public async deleteSongsFromPlaylist(userId: string, playlistName: string): Promise<void> {
		// Fetch the playlist
		const playlist = await this.getPlaylist(userId, playlistName);

		if (playlist) {
			// Update the playlist and reset the tracks to an empty array
			await this.prisma.playlist.update({
				where: {
					userId_name: {
						userId,
						name: playlistName,
					},
				},
				data: {
					tracks: JSON.stringify([]), // Set tracks to an empty array
				},
			});
		}
	}

	public async addTracksToPlaylist(userId: string, playlistName: string, tracks: string[]) {
		// Serialize the tracks array into a JSON string
		const tracksJson = JSON.stringify(tracks);

		// Check if the playlist already exists for the user
		const playlist = await this.prisma.playlist.findUnique({
			where: {
				userId_name: {
					userId,
					name: playlistName,
				},
			},
		});

		if (playlist) {
			// If the playlist exists, handle existing tracks
			const existingTracks = playlist.tracks ? JSON.parse(playlist.tracks) : []; // Initialize as an empty array if null

			if (Array.isArray(existingTracks)) {
				// Merge new and existing tracks
				const updatedTracks = [...existingTracks, ...tracks];

				// Update the playlist with the new tracks
				await this.prisma.playlist.update({
					where: {
						userId_name: {
							userId,
							name: playlistName,
						},
					},
					data: {
						tracks: JSON.stringify(updatedTracks), // Store the updated tracks as a serialized JSON string
					},
				});
			} else {
				throw new Error('Existing tracks are not in an array format.');
			}
		} else {
			// If no playlist exists, create a new one with the provided tracks
			await this.prisma.playlist.create({
				data: {
					userId,
					name: playlistName,
					tracks: tracksJson, // Store the serialized JSON string
				},
			});
		}
	}

	public async removeSong(userId: string, playlistName: string, encodedSong: string): Promise<void> {
		const playlist = await this.getPlaylist(userId, playlistName);
		if (playlist) {
			const tracks: string[] = JSON.parse(playlist?.tracks!);

			// Find the index of the song to remove
			const songIndex = tracks.indexOf(encodedSong);

			if (songIndex !== -1) {
				// Remove the song from the array
				tracks.splice(songIndex, 1);

				// Update the playlist with the new list of tracks
				await this.prisma.playlist.update({
					where: {
						userId_name: {
							userId,
							name: playlistName,
						},
					},
					data: {
						tracks: JSON.stringify(tracks), // Re-serialize the updated array back to a string
					},
				});
			}
		}
	}

	public async getTracksFromPlaylist(userId: string, playlistName: string) {
		const playlist = await this.prisma.playlist.findUnique({
			where: {
				userId_name: {
					userId,
					name: playlistName,
				},
			},
		});

		if (!playlist) {
			return null;
		}

		// Deserialize the tracks JSON string back into an array
		const tracks = JSON.parse(playlist.tracks!);
		return tracks;
	}

	public async getAllOwners(): Promise<Owner[]> {
		const owners = await this.prisma.owner.findMany();
		if (!owners || owners.length === 0) {
			return [];
		}
		return owners;
	}

	public async addOwner(ownerId: string): Promise<Owner> {
		// Check if owner already exists
		const existingOwner = await this.prisma.owner.findUnique({ where: { ownerId } });
		if (existingOwner) {
			throw new Error(`User ${ownerId} is already an owner of bot`);
		}
		return this.prisma.owner.create({data: {ownerId}});
	}

	public async removeOwner(ownerId: string): Promise<void> {
		// Check if owner exists
		const existingOwner = await this.prisma.owner.findUnique({ where: { ownerId } });
		if (!existingOwner) {
			throw new Error(`User ${ownerId} is not an owner of bot`);
		}

		await this.prisma.owner.delete({
			where: {ownerId}
		})
	}

	public async checkOwners(ownerId: string): Promise<boolean> {
		try {
			const existingOwner: any = await this.prisma.owner.findUnique({
				where: { ownerId }
			});
			return existingOwner ? Object.keys(existingOwner).length > 0 : false; // Converts null to false
		} catch (error) {
			console.error('Error checking owner:', error);
			return false;
		}
	}
}

