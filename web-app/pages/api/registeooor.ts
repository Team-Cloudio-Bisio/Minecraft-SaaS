import { User } from "@/common/types";
import { getAccountApiUrl } from "@/common/utils";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.query.api !== process.env.NEXT_PUBLIC_API_KEY) {
        res.status(400).json({ message: "You are not authorized"});
    }

    if(req.method !== 'POST') {
        res.status(405);
        return;
    }

    const user: User = JSON.parse(req.body);

    const postLogin = async () => {
        const url = getAccountApiUrl();
        const response = await fetch('http://accountmicroservice:81/Account/signin', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })

        return response.json();
    }

    postLogin().then((response) => {
        if(response.message === "OK") {
            res.status(200).json({ message: "Sign in successfully"});
        } else {
            res.status(401).json({ message: "Sign in error"});
        }
    })
}