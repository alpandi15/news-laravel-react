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
        href: '/users',
        icon: <ion-icon name="people-outline"></ion-icon>,
      },
      {
        title: 'Users',
        href: '/users',
        icon: <ion-icon name="people-outline"></ion-icon>,
      },
      {
        title: 'Users',
        href: '/users',
        icon: <ion-icon name="people-outline"></ion-icon>,
      },
    ]
  },
  {
    title: 'Profile',
    href: route('profile.edit'),
    name: 'profile.edit',
    icon: <ion-icon name="person-outline" style={{fontSize: 24}}></ion-icon>,
    submenus: [
      {
        title: 'Users',
        href: '/users',
        icon: <ion-icon name="people-outline"></ion-icon>,
      },
      {
        title: 'Users',
        href: '/users',
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

  console.log('Sidebar')
  return (
    <>
      <Header auth={auth} />
      <aside className={cn(
      "group bg-black min-h-screen fixed left-0 top-0 bottom-0 shadow-lg overflow-hidden z-[1038]",
      {
        'w-[250px]': !minimize,
        'w-20 hover:w-[250px]': minimize,
      }
      )}
      style={{transition: 'margin-left .3s ease-in-out, width .3s ease-in-out'}}
      >
        <div className="h-[70px] relative">
          <div className="absolute right-4 top-5 hidden">
            <button className="text-lg font-bold text-white" type="button" onClick={toggle}>X</button>
          </div>
        </div>
        <div className="" style={{height: 'calc(100vh - 70px)'}}>
          <nav className="w-full">
            <ul className="w-full">
              {SideMenu.map((menu, index) => (
                <li key={index}><NavLinkMemo name={menu?.name} href={menu?.href} title={menu?.title} icon={menu?.icon} submenu={menu?.submenus} /></li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  )
}