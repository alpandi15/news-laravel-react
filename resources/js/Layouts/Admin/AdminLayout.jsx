import {memo} from 'react'
import Sidebar from "./Sidebar"
import Header from "./Header"
import { useAppContext } from '@/Providers/AppProvider'
import cn from 'classnames'

const SidebarMemo = memo(Sidebar)

export default function AdminLayout ({children}) {
  console.log('Admin Layouts')
  const {state: {sideNavigation: {minimize}}} = useAppContext()
  return (
    <>
      <SidebarMemo />
      <main
        className={cn(
        "md:ml-[250px] bg-green-200 transition-all",
        {
          "md:ml-[250px]": !minimize,
          "md:ml-20": minimize,
        }
        )}
        style={{transition: 'margin-left .3s ease-in-out'}}
      >
        {children}
      </main>
    </>
  )
}