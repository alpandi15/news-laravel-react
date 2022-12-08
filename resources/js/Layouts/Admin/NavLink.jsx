import { Link } from '@inertiajs/inertia-react';
import { useState, createContext, useContext } from 'react';
import cn from 'classnames';
import { useAppContext } from '@/Providers/AppProvider'

const NavLink = ({href, icon, title, submenu, active}) => {
  const [open, setOpen] = useState(true);

  const {state: {sideNavigation: {minimize}}} = useAppContext()

  const toggleOpen = () => {
    setOpen((previousState) => !previousState);
  };

  console.log('NAVLLINK');
  return (
    <div className="w-full px-2 relative" style={{transition: 'width ease-in-out .3s'}}>
      <Link
        href={!submenu?.length ? href : '#'}
        className={
          cn(
            `h-12 w-full hover:bg-gray-600 flex items-center 
            text-white rounded-xl px-4 py-2 font-[500] hover:font-[600] mb-[0.2rem] relative`,
            {
              'bg-gray-600': active,
            }
          )}
        onClick={submenu?.length ? toggleOpen : null}
        style={{transition: 'width ease-in-out .3s'}}
      >
        {icon ? (
          <div
            className={cn('flex items-center')}
            style={{transition: 'display 1s linear'}}
          >{icon}</div>
        ) : ''}
        <div className={cn("ml-3 text-[16px]", {'hidden group-hover:block': minimize})} style={{transition: 'margin-left .3s linear,opacity .3s ease, visibility .3s ease'}}>{title}</div>
      </Link>
      <ul className={cn({
        'hidden': !open,
        'block': open,
        'ml-4': !minimize,
        'group-hover:ml-4': minimize,
      })}
      style={{transition: 'margin-left .3s linear,opacity .3s ease, visibility .3s ease'}}
      >
        <SubNavLink lists={submenu || []} />
      </ul>
    </div>
  )
}

const SubNavLink = ({lists}) => {
  const {state: {sideNavigation: {minimize}}} = useAppContext()

  return (
    <>
      {lists?.map((item, index) => (
        <li key={index}>
          <div className="w-full px-2 relative">
            <Link
              href={!lists?.submenu?.length ? lists?.href : '#'}
              className="
                h-10 w-full bg-white hover:bg-gray-600 hover:text-white flex items-center text-black rounded-xl
                px-4 py-2 font-[500] hover:font-[600] mb-[0.2rem] relative
              "
            >
              {item?.icon ? (
                <div
                  className={cn('flex items-center')}
                  style={{transition: 'display 1s linear'}}
                >{item?.icon}</div>
              ) : ''}
              <div className={cn("ml-3 text-[16px]", {'hidden group-hover:block': minimize})} style={{transition: 'margin-left .3s linear,opacity .3s ease, visibility .3s ease'}}>{item?.title}</div>
            </Link>
          </div>
        </li>
      ))}
    </>
  )
}

export default NavLink