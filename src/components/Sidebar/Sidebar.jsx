//styles
import "./Sidebar.css"

import { SidebarBalance } from "./SidebarBalance/SidebarBalance"
import { SidebarHeader } from "./SidebarHeader/SidebarHeader"
import { SideBarNav } from "./SidebarNav/SidebarNav"

export function Sidebar(){
    return (
        <div className="sidebar p-xs-4"> 
            <SidebarHeader />
            <SidebarBalance />
            <SideBarNav />
        </div>
    )
} 