import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.query.api !== process.env.NEXT_PUBLIC_API_KEY) {
        res.status(400).json({ message: "You are not authorized"});
    }

    const { serverName } = req.query;

    if(req.method !== 'GET') {
        res.status(405).json({ message: "This is not a GET request"});
    }

    const start = async () => {
        const response = await fetch(`http://indirizzo:porta/ServerManager/${serverName}/startServer`, {
            method: 'GET'
        });
        return response.json();
    }

    start().then((response) => {
        if(response.message === "OK") {
            res.status(200).json({ message: "OK"});
        } else {
            res.status(401).json({ message: "NO"});
        }
    })
}