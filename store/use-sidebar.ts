import {create} from "zustand";

// Open and close dialog

interface SideBarProps{
    close:boolean
    onOpen: () => void
    onClose: () => void
}

export const useSideBar = create<SideBarProps>((set) => ({
    close:false,
    onOpen: () => set(() => ({close:false})),
    onClose: () => set(() => ({close:true}))
}))