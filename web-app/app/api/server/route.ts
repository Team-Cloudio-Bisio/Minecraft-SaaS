import { Server, ServerProperties, User } from "@/common/types";
import { getServerPropertiesFromServer } from "@/common/utils";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    // const { searchParams } = new URL(request.url);

    // if(searchParams.get('api') !== process.env.NEXT_PUBLIC_API_KEY) {
    //     return NextResponse.json({message: "You are not authorized"})
    // }

    const user: User = await request.json();

    fetch(`https://mcsaasserver.azurewebsites.net/api/GetServers?code=${process.env.NEXT_PUBLIC_GET_KEY}&username=${user.username}`, { method: "GET" } )
        .then(res => res.json())
        .then((res: Array<Server>) => {
            const list: Array<ServerProperties> = [];
            res.map((server: Server) => list.push(getServerPropertiesFromServer(server)));
            
            return NextResponse.json(list)
        })
        .catch((e) => console.log("fetch error\n" + e));

    return NextResponse.json([]);
}

export async function DELETE(request: NextRequest) {

}