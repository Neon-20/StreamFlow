

interface UrlCardProps{
    value:string | null
}
export const UrlCard = ({
    value,
}:UrlCardProps) =>{
    return(
        <div className="rounded-xl bg-[#111827] p-6 text-white">
        <div className="flex items-center gap-x-4 ">
        <p className="font-semibold shrink-0">Server URL</p>
        </div> 
        </div>
    )
}