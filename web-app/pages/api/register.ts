import { User } from "@/common/types";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'POST') {
        res.status(405);
        return;
    }

    const user: User = JSON.parse(req.body);

    const postLogin = async () => {
        const response = await fetch("http://localhost:5069/Account/signin", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })

        return response.json();
    }

    postLogin().then((response) => {
        console.log(response);
        if(response.message === "OK") {
            res.status(200).json({ message: "Sign in successfully"});
        } else {
            res.status(401).json({ message: "Sign in error"});
        }
    })
}