import {memo} from 'react'
import Sidebar from "./Sidebar"
import Header from "./Header"

const SidebarMemo = memo(Sidebar)

export default function AdminLayout ({children}) {
  console.log('Admin Layouts')
  return (
    <>
      <SidebarMemo />
      <main className="md:ml-[250px] sm:ml-0 bg-green-200 transition-all">{children}</main>
    </>
  )
}