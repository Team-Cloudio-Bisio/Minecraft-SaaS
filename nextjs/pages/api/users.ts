import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {

    const getUsers = async () => {
        const response = await fetch("http://localhost:5115/User", {
            method: "GET",
            /*headers: {
                allowOrigins: "https://*",
                allowCredentials: "true",
                maxAge: "300",
                allowMethods: "GET",
                allowHeaders: "*"
            },*/
        });

        return response.json();
    }

    getUsers().then((data) => {
        res.status(200).json(data);
    });

}