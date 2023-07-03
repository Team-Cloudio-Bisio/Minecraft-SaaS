import { Server, ServerProperties, User } from "@/common/types";
import { getDBApiUrl, getServerPropertiesFromServer } from "@/common/utils";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.query.api !== process.env.NEXT_PUBLIC_API_KEY) {
        res.status(400).json({ message: "You are not authorized"});
    }

    switch (req.method) {
        case "POST":
            getServers(req, res);
            break;
        default:
            res.status(400).json({ message: "Call error"});
            break;
    }
}

function getServers(req: NextApiRequest, res: NextApiResponse) {
    const user: User = JSON.parse(req.body);

    const get = async () => {
        const url = getDBApiUrl();
        const response = await fetch(`${url}/Server/byUser?username=${user.username}`, {
            method: "GET",
        });

        return response.json();
    }

    get().then((response: Array<Server>) => {
        const list: Array<ServerProperties> = [];
        response.map((server: Server) => list.push(getServerPropertiesFromServer(server)));

        res.status(200).json(list);
    });
}