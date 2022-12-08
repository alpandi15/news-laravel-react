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
    href: '/dashboard',
    icon: <ion-icon name="apps-outline"></ion-icon>
  },
  {
    title: 'Users',
    href: '/users',
    icon: <ion-icon name="people-outline"></ion-icon>,
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
    title: 'Dashboard',
    href: '/dashboard',
    icon: <ion-icon name="apps-outline"></ion-icon>,
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
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: <ion-icon name="apps-outline"></ion-icon>
  },
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: <ion-icon name="apps-outline"></ion-icon>
  },
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: <ion-icon name="apps-outline"></ion-icon>
  },
]

export default function Sidebar () {
  const {dispatch, state: {sideNavigation: {collapse}}} = useAppContext()

  const toggle = () => {
    dispatch({
      type: SIDE_NAVIGATION,
      payload: {
        collapse: !collapse,
      }
    })
  }

  console.log('Sidebar')
  return (
    <>
      <Header />
      <aside className={cn(
      "bg-black min-h-screen fixed left-0 top-0 bottom-0 shadow-lg overflow-hidden z-[1038] transition-all",
      {
        'w-[250px]': !collapse,
        'w-20': collapse
      }
      )}>
        <div className="h-[70px] relative">
          <div className="absolute right-4 top-5">
            <button className="text-lg font-bold text-white" type="button" onClick={toggle}>X</button>
          </div>
        </div>
        <div className="" style={{height: 'calc(100vh - 70px)'}}>
          <ul>
            {SideMenu.map((menu, index) => (
              <li key={index}><NavLinkMemo href={menu?.href} title={menu?.title} icon={menu?.icon} submenu={menu?.submenus} /></li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  )
}