import Sidebar from "./Sidebar"
import {useAppContext} from '@/Providers/AppProvider'
import { SIDE_NAVIGATION } from "@/Reducers/types"
import cn from "classnames"
import { useState } from "react"
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';

export default function Header ({auth}) {
  console.log('AUTH ', auth);
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
  const {dispatch, state: {sideNavigation: {minimize}}} = useAppContext()

  const toggle = () => {
    dispatch({
      type: SIDE_NAVIGATION,
      payload: {
        minimize: !minimize,
      }
    })
  }

  return (
    <nav
      className={
        cn(
          "h-[60px] flex items-center",
          {
            "md:ml-[250px]": !minimize,
            "md:ml-20": minimize,
          }
        )}
        style={{transition: 'margin-left .3s ease-in-out'}}
      >
      <div className="bg-white h-full w-full border-b-[1px] border-black px-4 py-2">
        <div className="h-full w-full flex items-center">
          <button className="text-lg font-bold text-black flex items-center" type="button" onClick={toggle}>
            <ion-icon name="menu-outline" style={{fontSize: 32}}></ion-icon>
          </button>
        </div>

        <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
          <div className="pt-2 pb-3 space-y-1">
            <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
              Dashboard
            </ResponsiveNavLink>
          </div>

          <div className="pt-4 pb-1 border-t border-gray-200">
            <div className="px-4">
              <div className="font-medium text-base text-gray-800">
                {auth?.user?.name}
              </div>
              <div className="font-medium text-sm text-gray-500">{auth?.user?.email}</div>
            </div>

            <div className="mt-3 space-y-1">
              <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
              <ResponsiveNavLink method="post" href={route('logout')} as="button">
                Log Out
              </ResponsiveNavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}