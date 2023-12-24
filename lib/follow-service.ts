import { db } from "./db"
import { getSelfUser } from "./auth-service"
import { toast } from "sonner";

export const getFollowedUsers = async() =>{
    try{
    const self = await getSelfUser();
    
    const followList =  db.follow.findMany({
        where:{
            followerId:self.id
        },
        include:{
            following:true
        }
    })
    return followList;
    }
    //logged out user can't try this
    catch{
        return [];
    }
}


export const isFollowingUser = async(id:string) =>{
    try{
    const self = await getSelfUser();

    const otherUser = await db.user.findUnique({
        where:{id}
    })

    if(!otherUser){
        throw new Error("User Not Found");
    }
    if(otherUser.id === self.id){
        return true;
    }

    const existingFollow = await db.follow.findFirst({
        where:{
            followerId:self.id,
            followingId:otherUser.id
        }
    }
    )
    return !!existingFollow;

    }
    catch{
        return false;
    }
}


//action for following user here:
export const followUser = async(id:string) =>{
    const self = await getSelfUser();
    //find on the basis of that id passed
    const otherUser = await db.user.findUnique({
        where:{
            id,
        }
    })
    if(!otherUser){
        toast.error("User not Found");
    }
    if(otherUser?.id === self.id){
        toast.error("Cannot follow yourself")
    }
    
    const existingFollow = await db.follow.findFirst({
        where:{
            followerId:self.id,
            followingId:otherUser?.id
        }
    })

    if(existingFollow){
        toast.error("Already followed")
    }

    const follow = await db.follow.create({
        data:{
            followerId:self.id as string,
            followingId:otherUser?.id as string
        },
        include:{
            followers:true,
            following:true
        }
    })
    return follow;
}

//Unfollow service here

export const unfollowUser = async(id:string) =>{
    const self = await getSelfUser();
    const otherUser = await db.user.findUnique({
        where:{
            id,
        }
    })

    if(!otherUser){
        throw new Error("User not Found");
    }

    if(otherUser.id === self.id){
    throw new Error("Can't unfollow yourself");
    }

    //check whether user is actually following the user, it's 
    // trying to unfollow
    const existingFollow = await db.follow.findFirst({
        where:{
            followerId:self.id,
            followingId:otherUser.id,
        }
    })

    if(!existingFollow){
        throw new Error("Not Following")
    }

    const unfollow = await db.follow.delete({
        where:{
            id:existingFollow.id,
        },
        include:{
            following:true
        }
    })
    return unfollow;
}