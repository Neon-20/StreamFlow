import { Button } from "@/components/ui/button";
import { UrlCard } from "./_components/url-card";
import { getSelfUser } from "@/lib/auth-service";
import { getStreamByUserId } from "@/lib/stream-service";
import { KeyCard } from "./_components/keycard";
import { ConnectModal } from "./_components/connect-modal";

const KeysPage = async() =>{
    const self = await getSelfUser();
    const stream = await getStreamByUserId(self.id);

    if(!stream){
        throw new Error("Stream Not Found")
    }


    return(
        <div className="p-6">
        <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold ml-1 text-white">
                Keys <span className="ml-1">🔑</span> / URL&apos;s <span className="ml-1">🔗</span>
            </h1>
            <div className="justify-between">
            <ConnectModal/>
            </div>
        </div>
        <div className="space-y-6">
            <UrlCard value={stream.serverUrl}/>
            <KeyCard value={stream.streamKey}/>
        </div>
        </div>
    )
}

export default KeysPage;