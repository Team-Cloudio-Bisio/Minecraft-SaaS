import { Server, ServerProperties, User } from "@/common/types";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.query.api !== process.env.NEXT_PUBLIC_API_KEY) {
        res.status(400).json({ message: "You are not authorized"});
    }

    switch (req.method) {
        case "POST":
            createServer(req, res);
            break;
        case "DELETE":
            deleteServer(req, res);
            break;
        default:
            res.status(400).json({ message: "Call error"});
            break;
    }
}

function createServer(req: NextApiRequest, res: NextApiResponse) {
    const server: Server = JSON.parse(req.body);

    const post = async () => {
        const response = await fetch("http://indirizzo:porta/ServerManager", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(server),
        });

        return response.json();
    }

    post().then((response) => {
        res.status(200).json(response);
    });
}

function deleteServer(req: NextApiRequest, res: NextApiResponse) {
    const server: Server = JSON.parse(req.body);

    const del = async () => {
        const response = await fetch("http://indirizzo:porta/ServerManager", {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(server),
        });

        return response.json();
    }

    del().then((response) => {
        res.status(200).json({ message: "OK"});
    });
}