import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {

    const getWeather = async () => {
        const response = await fetch("http://localhost:5164/WeatherForecast", {
            method: "GET",
        });

        return response.json();
    }

    getWeather().then((data) => {
        res.status(200).json(data);
    });

}