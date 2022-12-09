import { Link } from '@inertiajs/inertia-react';
import { useState, createContext, useContext } from 'react';
import cn from 'classnames';
import { useAppContext } from '@/Providers/AppProvider'

const NavContext = createContext();

const LinkContent = ({isSubmenu, children, href, active}) => {
  const { open, toggleOpen } = useContext(NavContext);
  if (isSubmenu) {
    return (
      <div
        className={
          cn(
            `h-12 w-full hover:bg-gray-600 flex items-center 
            text-white rounded-xl px-4 py-2 font-[500] hover:font-[600] mb-[0.2rem] relative cursor-pointer`,
            {
              'bg-gray-800': active,
              'bg-gray-600': open,
            }
          )}
        style={{transition: 'width ease-in-out .3s'}}
        onClick={() => toggleOpen()}
      >{children}</div>
    )
  }
  return (
    <Link
      href={href}
      className={
        cn(
          `h-12 w-full hover:bg-gray-600 flex items-center 
          text-white rounded-xl px-4 py-2 font-[500] hover:font-[600] mb-[0.2rem] relative`,
          {
            'bg-gray-800': active,
          }
        )}
      style={{transition: 'width ease-in-out .3s'}}
    >
    {children}
    </Link>
  )
}

const NavLink = ({href, icon, title, submenu, name}) => {
  const [open, setOpen] = useState(false);

  const {state: {sideNavigation: {minimize}}} = useAppContext()

  const toggleOpen = () => {
    setOpen((previousState) => !previousState);
  };

  console.log('NAVLLINK');
  return (
    <NavContext.Provider value={{ open, setOpen, toggleOpen }}>
      <div className="w-full px-2 relative" style={{transition: 'width ease-in-out .3s'}}>
        <LinkContent active={route().current(name)} href={href} isSubmenu={!!submenu?.length}>
          {icon ? (
            <div
              className={cn('flex items-center')}
              style={{transition: 'display 1s linear'}}
            >{icon}</div>
          ) : ''}
          <div className={cn("ml-3 text-[16px]", {'hidden group-hover:block': minimize})} style={{transition: 'margin-left .3s linear,opacity .3s ease, visibility .3s ease'}}>{title}</div>
        </LinkContent>

        <ul className={cn({
          'hidden': !open,
          'block': open,
          'ml-4': !minimize,
          'group-hover:ml-4': minimize,
        })}
        style={{transition: 'display .3s linear,opacity .3s ease, visibility .3s ease'}}
        >
          <SubNavLink lists={submenu || []} />
        </ul>
      </div>
    </NavContext.Provider>
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