"use server";

import {auth,clerkClient} from "@clerk/nextjs/server";


export async function getUsers(){
    const {sessionClaims}=await auth();
    const clerk=await clerkClient();

    const orgId =
        sessionClaims?.o && typeof sessionClaims.o === "object" && "id" in sessionClaims.o
            ? (sessionClaims.o as { id: string }).id
            : undefined;

    if (!orgId) {
        return [];
    }

    const response = await clerk.users.getUserList({
        organizationId: [orgId],
    });

    const users=response.data.map((user)=>({
        id: user.id,
        name: user.fullName ?? user.primaryEmailAddress?.emailAddress ?? "Anonymous",
        avatar: user.imageUrl,
    }));

    return users;
}