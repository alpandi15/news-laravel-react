import Sidebar from "./Sidebar"
import {useAppContext} from '@/Providers/AppProvider'
import { SIDE_NAVIGATION } from "@/Reducers/types"
import cn from "classnames"

export default function Header () {
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
          "h-[60px] w-full flex items-center",
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
      </div>
    </nav>
  )
}