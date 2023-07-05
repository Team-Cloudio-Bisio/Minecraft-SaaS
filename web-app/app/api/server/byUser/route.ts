import { Server, ServerProperties, User } from "@/common/types";
import { getServerPropertiesFromServer } from "@/common/utils";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { searchParams } = new URL(request.url);

    if(searchParams.get('api') !== process.env.NEXT_PUBLIC_API_KEY) {
        return NextResponse.json({message: "You are not authorized"})
    }

    const user: User = await request.json();
    const response = await fetch(`http://dbmicroservice:80/Server/byUser?username=${user.username}`, {
        method: "GET",
    })

    const res: Array<Server> = await response.json()
    const list: Array<ServerProperties> = [];
    res.map((server: Server) => list.push(getServerPropertiesFromServer(server)));

    return NextResponse.json(list);
}