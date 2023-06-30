
export type User = {
	username: string;
	userPassword: string;
}

export type Server = {
	serverName: string;
	ip: string;
	containerID: string;
	settings: ServerSettings;
	admin: Array<User>;
	whitelist: Array<User>;
}

export type ServerSettings = {
	seed: number;
	maxPlayers: number;
	difficulty: Difficutly;
	gamemode: Gamemode;
}

export enum Difficutly {
	peaceful,
	easy,
	normal,
	hard
}

export enum Gamemode {
	survival,
	creative,
	adventure,
	spectator
}

export type ServerProperties = {
    id: number
    name: string
    ip: string
    status: boolean //false-Offline  true-Online
    version: string
    curp: number
    maxp: number
    gamemode: number //0-survival  1-Creative  2-Adventure  3-Spectator
    difficulty: number //0-Peaceful  1-Easy  2-Normal  3-Hard
    whitelist: boolean
    cracked: boolean
    fly: boolean
    resourcepack: string
}