import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';
import NavLink from '@/Components/NavLink';

const HomeLayout = ({children, auth}) => {
  return (
    <div className='min-h-screen w-full bg-gray-100'>
        <nav className='bg-white border-b border-gray-100'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className="flex justify-between h-16">
                <div className="flex">
                    <div className="shrink-0 flex items-center">
                        <Link href="/">
                            <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                        </Link>
                    </div>
                </div>
                <div className='flex'>
                    <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex h-full items-center">
                        {auth?.user ? (
                            <Link href={route('dashboard')} className="text-sm text-gray-700 dark:text-gray-500">
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link href={route('login')} className="text-sm text-gray-700 dark:text-gray-500">
                                    Log in
                                </Link>

                                <Link
                                    href={route('register')}
                                    className="ml-4 text-sm text-gray-700 dark:text-gray-500"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
          </div>
        </nav>

        <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4'>{children}</main>
    </div>
  )
}

export default HomeLayout;