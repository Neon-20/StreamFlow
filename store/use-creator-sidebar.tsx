import {create} from "zustand";
// Open and close dialog

interface CreatorSideBarProps{
    close:boolean
    onOpen: () => void
    onClose: () => void
}

export const useCreatorSideBar = create<CreatorSideBarProps>((set) => ({
    close:false,
    onOpen: () => set(() => ({close:false})),
    onClose: () => set(() => ({close:true}))
}))