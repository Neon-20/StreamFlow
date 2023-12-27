import { db } from "./db";
import { getSelfUser } from "./auth-service";


export const getRecommended =  async() =>{
let userId;
    try{
        const self = await getSelfUser();
        userId = self.id;
    }
    catch{
        userId = null
    }
    let users = []
    if(userId){
        users = await db.user.findMany({
            where:{
                AND:[
                    {
                        NOT:{
                            id:userId,
                        }
                    },
                    {
                        NOT:{
                            followedBy:{
                                some:{
                                    followerId:userId
                                }
                            }
                        }
                    },
                    {
                        NOT:{
                            blocking:{
                                some:{
                                    blockerId:userId
                                }
                            }
                        }
                    
                    }
                ]
            }
    })
}
    else{
        users = await db.user.findMany({
            orderBy:{
                createdAt:"desc"
            }
        })
    }
    return users;
}