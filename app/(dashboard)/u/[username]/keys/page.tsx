import { Button } from "@/components/ui/button";
import { UrlCard } from "./_components/url-card";
import { getSelfUser } from "@/lib/auth-service";
import { getStreamByUserId } from "@/lib/stream-service";

const KeysPage = async() =>{
    const self = await getSelfUser();
    const stream = await getStreamByUserId(self.id);

    if(!stream){
        throw new Error("Stream Not Found")
    }


    return(
        <div className="p-6">
        <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-white">
                Keys & URLs
            </h1>
        <Button
        variant={"primary"}
        size="default"
        >
            Generate Keys
        </Button>
        </div>
        <div className="space-y-6">
            <UrlCard value={stream.serverUrl}/>
        </div>
        </div>
    )
}

export default KeysPage;