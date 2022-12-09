import {memo} from 'react'
import Sidebar from "./Sidebar"
import Header from "./Header"
import { useAppContext } from '@/Providers/AppProvider'
import cn from 'classnames'

const SidebarMemo = memo(Sidebar)

export default function AdminLayout ({auth, children}) {
  console.log('Admin Layouts ', auth)
  const {state: {sideNavigation: {minimize}}} = useAppContext()
  return (
    <>
      <SidebarMemo auth={auth} />
      <main
        className={cn(
        "md:ml-[250px] bg-gray-100 transition-all px-4 py-3",
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