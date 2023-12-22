import { getSelfUser } from "./auth-service";
import { db } from "./db";
import {User} from "@prisma/client";
//Well we will eliminate the current user from recommended list

export const getRecommended = async() =>{
    // await new Promise(resolve => setTimeout(resolve,1000));
    const users = await db.user.findMany({  
        orderBy:{
            createdAt:"desc"
        }
    })
    // console.log(users)
    return users;
}

// Formula = total - self = recommended


// recommended function

