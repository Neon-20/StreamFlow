import { getSelfUser } from "@/lib/auth-service";
import { getStreamByUserId } from "@/lib/stream-service";
import {ToggleCard} from "./_components/toggle-card";

const ChatPage = async() => {
    const self = await getSelfUser();
    const stream = await getStreamByUserId(self.id);

    if(!stream){
        throw new Error("Stream not available")
    }

    return ( 
        <div className="p-6">
            <div className="mb-4">
            <h1 className="text-2xl ml-1 font-bold text-white">
            Chat Settings <span className="ml-2">💬</span>
            </h1>
            </div>
            <div className="space-y-6 py-4">
            <ToggleCard
            field = "isChatEnabled"
            label = "Enable Chat"
            value={stream.isChatEnabled}
            />
            <ToggleCard
            field = "isChatDelayed"
            label = "Delay Chat"
            value={stream.isChatDelayed}
            />
            <ToggleCard
            field = "isChatFollowersOnly"
            label = "Followers Only Chat"
            value={stream.isChatFollowersOnly}
            />
            </div>
        </div>
    );
}

export default ChatPage;

