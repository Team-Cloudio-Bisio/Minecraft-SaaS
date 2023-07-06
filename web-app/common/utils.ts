import { Difficutly, Gamemode, Server, ServerProperties, User } from "./types";

export function getServerPropertiesFromServer(server: Server): ServerProperties {
    return {
        id: Math.floor(Math.random() * (100 - 0 + 1)),
        name: server.serverName,
        ip: server.ip,
        status: true,
        version: "lts",
        curp: 0,
        maxp: server.settings.maxPlayers ? server.settings.maxPlayers : 20,
        gamemode: server.settings.gamemode ? server.settings.gamemode : Gamemode.survival,
        difficulty: server.settings.difficulty ? server.settings.difficulty : Difficutly.normal,
        whitelist: true ? server.whitelist.length > 0 : false,
        cracked: false,
        fly: false,
        resourcepack: ""
    }
}

export function getServerFromServerProperties(props: ServerProperties, user: User): Server {
    return {
        serverName: props.name,
        ip: "",
        containerID: props.name,
        settings: {
            seed: 0,
            maxPlayers: props.maxp,
            difficulty: props.difficulty,
            gamemode: props.gamemode
        },
        admin: [user],
        whitelist: [""]
    }
}

export function getDBApiUrl() {
    if(process.env.NODE_ENV === 'development') return process.env.devDbApiUrl;
    else if(process.env.NODE_ENV === 'production') return process.env.prodDbApiUrl;
}

export function getAccountApiUrl() {
    if(process.env.NODE_ENV === 'development') return process.env.devAccountApiUrl;
    else if(process.env.NODE_ENV === 'production') return process.env.prodAccountApiUrl;
}

export function getMinecraftApiUrl() {
    if(process.env.NODE_ENV === 'development') return process.env.devMinecraftApiUrl;
    else if(process.env.NODE_ENV === 'production') return process.env.prodMinecraftApiUrl;
}