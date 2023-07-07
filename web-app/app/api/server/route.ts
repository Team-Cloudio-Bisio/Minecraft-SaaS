import { Server, ServerProperties, User } from "@/common/types";
import { getServerPropertiesFromServer } from "@/common/utils";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    // const { searchParams } = new URL(request.url);

    // if(searchParams.get('api') !== process.env.NEXT_PUBLIC_API_KEY) {
    //     return NextResponse.json({message: "You are not authorized"})
    // }

    const server: Server = await request.json();

    fetch(`https://mcsaasserver.azurewebsites.net/api/CreateServer?code=${process.env.NEXT_PUBLIC_CREATE_KEY}`, { method: "POST", body: JSON.stringify(server)})
        .then(res => {
            console.log(res);
            NextResponse.json({ message: "OK" });
        })
        .catch((e) => alert("Server creation error\n" + e));

    return NextResponse.json({ message: "NO" });
}

export async function DELETE(request: NextRequest) {
    const { searchParams } = new URL(request.url);

    // if(searchParams.get('api') !== process.env.NEXT_PUBLIC_API_KEY) {
    //     return NextResponse.json({message: "You are not authorized"})
    // }

    const server = searchParams.get('serverName');

    fetch(`https://mcsaasserver.azurewebsites.net/api/DeleteServer?code=${process.env.NEXT_PUBLIC_DELETE_KEY}&serverName=${server}`, { method: "DELETE" })
        .then(res => res.json())
        .then(res => {
            if(res.serverName === server) {
                NextResponse.json({ message: "OK" });
            } else
                NextResponse.json({ message: "NO" });
        })
        .catch((e) => alert("Error deleting server\n" + e));

    return NextResponse.json({ message: "NO" });
}