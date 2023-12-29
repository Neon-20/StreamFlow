import { Input } from "@/components/ui/input"
import { CopyButton } from "./copy-button"

interface UrlCardProps{
    value:string | null
}

export const UrlCard = ({
    value,
}:UrlCardProps) =>{
    return(
        <div className="rounded-xl bg-[#111827] p-6 text-white">
        <div className="flex items-center gap-x-6">
        <p className="font-semibold shrink-0">Server URL</p>
        <div className="space-y-4 w-full">
        <div className="w-full flex items-center gap-x-4">
            <Input 
            className="bg-[#111827] border-slate-400/40 text-slate-500"
            placeholder="Server URL"
            value={value || ""}
            disabled
            />
            <CopyButton
            value = {value || ""}
            />
        </div>
        </div>
        </div> 
        </div>
    )
}