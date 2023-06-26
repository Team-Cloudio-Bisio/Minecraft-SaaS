import { User } from "@/common/types";
import { NextApiRequest, NextApiResponse } from "next";

export default function(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'POST') {
        res.status(405);
        return;
    }

    const user: User = JSON.parse(req.body);

    const postLogin = async () => {
        const response = await fetch("", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })

        return response;
    }

    postLogin().then((response) => {
        if(response.status === 200) {
            res.status(200).json(response.json());
        } else {
            res.status(401).json(response.json());
        }
    })
}
