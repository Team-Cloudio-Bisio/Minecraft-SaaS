import { User } from "@/common/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { searchParams } = new URL(request.url);

    if(searchParams.get('api') !== process.env.NEXT_PUBLIC_API_KEY) {
        return NextResponse.json({message: "You are not authorized"})
    }

    const user: User = await request.json();
    // const response = await fetch('http://accountmicroservice:81/Account/login', {
    const response = await fetch(`https://mcsaasdb.azurewebsites.net/api/Login?code=${process.env.NEXT_PUBLIC_LOGIN_KEY}`, {method: "POST", body: JSON.stringify(user)});
    // const response = await fetch('http://localhost:5069/Account/login', {
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(user),
    // })

    const res = await response.json()
    if(res.message === "OK") {
        return NextResponse.json({message: "Login successfully"});
    } else {
        return NextResponse.json({message: "Login error"});
    }
}