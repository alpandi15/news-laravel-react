import { useState, memo } from "react"
import cn from "classnames"
import Header from "./Header"
import NavLink from "./NavLink"
import {useAppContext} from '@/Providers/AppProvider'
import { SIDE_NAVIGATION } from "@/Reducers/types"

const NavLinkMemo = memo(NavLink)

const SideMenu = [
  {
    title: 'Dashboard',
    name: 'dashboard',
    href: route('dashboard'),
    icon: <ion-icon name="apps-outline" style={{fontSize: 24}}></ion-icon>
  },
  {
    title: 'Users',
    href: route('dashboard'),
    name: 'users',
    icon: <ion-icon name="people-outline" style={{fontSize: 24}}></ion-icon>,
    submenus: [
      {
        title: 'Users',
        name: 'users',
        href: '/users',
        icon: <ion-icon name="people-outline"></ion-icon>,
      },
      {
        title: 'Users',
        name: 'users',
        href: '/users',
        icon: <ion-icon name="people-outline"></ion-icon>,
      },
      {
        title: 'Users',
        name: 'users',
        href: '/users',
        icon: <ion-icon name="people-outline"></ion-icon>,
      },
    ]
  },
  {
    title: 'Profile',
    name: 'profile',
    icon: <ion-icon name="person-outline" style={{fontSize: 24}}></ion-icon>,
    submenus: [
      {
        title: 'Profile',
        name: 'profile.edit',
        href: route('profile.edit'),
        icon: <ion-icon name="people-outline"></ion-icon>,
      },
      {
        title: 'Dashboard',
        href: route('dashboard'),
        name: 'dashboard',
        icon: <ion-icon name="people-outline"></ion-icon>,
      },
    ]
  },
]

export default function Sidebar ({auth}) {
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
    <>
      <Header auth={auth} />
      <aside className={cn(
      "group bg-black min-h-screen fixed top-0 bottom-0 z-[1038] md:left-0",
      {
        'left-0 w-[250px]': !minimize,
        'md:w-20 md:hover:w-[250px] -left-[250px]': minimize,
      }
      )}
      style={{transition: 'margin-left .3s ease-in-out, width .3s ease-in-out, left .3s ease-in-out'}}
      >
        <div className="h-[60px] relative border-b-[1px] border-b-gray-700">
          <div className="w-full h-full flex items-center px-4">
            <div className="text-white font-bold text-[24px]">LOGO</div>
          </div>
          <div className="absolute -right-4 top-3 sm:hidden z-10 flex items-center justify-center">
            <button className="w-[40px] h-[40px] text-lg font-bold text-white flex items-center justify-center bg-black rounded-[50%] border-solid" type="button" onClick={toggle}>
              <ion-icon name="chevron-back-circle-outline" style={{fontSize: '32px'}}></ion-icon>
            </button>
          </div>
        </div>
        <div className="pt-4 overflow-hidden" style={{height: 'calc(100vh - 60px)'}}>
          <nav className="w-full">
            <ul className="w-full">
              {SideMenu.map((menu, index) => (
                <li key={index}><NavLinkMemo name={menu?.name} href={menu?.href} title={menu?.title} icon={menu?.icon} submenu={menu?.submenus} /></li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
      <div
        onClick={toggle}
        className={cn("md:hidden fixed left-0 right-0 bottom-0 top-0 z-[1037] block bg-gray-600 opacity-30", {'hidden': minimize})}></div>
    </>
  )
}