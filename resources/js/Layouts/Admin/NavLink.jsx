import { Link } from '@inertiajs/inertia-react';
import { useState, createContext, useContext } from 'react';
import cn from 'classnames';
import { functions } from 'lodash';

const NavLink = ({href, icon, title, submenu}) => {
  const [open, setOpen] = useState(true);

  const toggleOpen = () => {
    setOpen((previousState) => !previousState);
  };

  console.log('NAVLLINK');
  return (
    <div className="w-full px-2 relative">
      <Link
        href={!submenu?.length ? href : '#'}
        className="
          h-12 w-full hover:bg-gray-600 flex items-center text-white rounded-xl
          px-4 py-2 font-[500] hover:font-[600] mb-[0.2rem] relative
        "
        onClick={submenu?.length ? toggleOpen : null}
      >
        {icon ? icon : ''}
        <div className="ml-3 text-[16px]">{title}</div>
      </Link>
      <ul className={cn({
        'hidden':!open,
        'block': open,
      })}>
        <SubNavLink lists={submenu || []} />
      </ul>
    </div>
  )
}

const SubNavLink = ({lists}) => {
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
              {item?.icon ? item?.icon : ''}
              <div className="ml-3 text-[12px]">{item?.title}</div>
            </Link>
          </div>
        </li>
      ))}
    </>
  )
}

export default NavLink