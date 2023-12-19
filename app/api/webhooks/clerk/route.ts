import { Webhook } from "svix";
import {headers} from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

export async function POST(req:Request){

    const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET
    if (!WEBHOOK_SECRET) {
    throw new Error('Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
}

const headerPayload = headers();
const svix_id = headerPayload.get("svix-id");
const svix_timestamp = headerPayload.get("svix-timestamp");
const svix_signature = headerPayload.get("svix-signature");

if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
    status: 400
    })
}

const payload = await req.json();
const body = JSON.stringify(payload);

const wh = new Webhook(WEBHOOK_SECRET);

let event:WebhookEvent

try {
    event = wh.verify(body, {
    "svix-id": svix_id,
    "svix-timestamp": svix_timestamp,
    "svix-signature": svix_signature,
    }) as WebhookEvent
} catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occured', {
    status: 400
    })
}

//Everytime user.created is triggered we could receive an event
// And we could create a User Model 
const eventType = event.type

if(eventType === "user.created"){
    // Lol never frget to write await, otherwise debugging will be a tough time
    await db.user.create({
        data:{
            externalUserId:payload.data.id,
            username:payload.data.username,
            imageUrl:payload.data.image_url
        }
    });
}

if(eventType === "user.updated"){
    await db.user.update({
        where:{
            externalUserId:payload.data.id
        },
        data:{
            username:payload.data.username,
            imageUrl:payload.data.image_url
        }
    })
}

if(eventType === "user.deleted"){
    await db.user.delete({
        where:{
            externalUserId:payload.data.id
        }
    })
}

return new Response('', { status: 200 })
//webhook should return a response
}