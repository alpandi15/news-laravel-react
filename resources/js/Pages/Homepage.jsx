import { Link, Head } from '@inertiajs/inertia-react';
import HomeLayout from '@/Layouts/HomeLayout';

export default function Homepage(props) {
  console.log('HOME PAGE ', props)
  return (
    <HomeLayout auth={props?.auth}>
      <Head>
        <title>{props?.title}</title>
        <meta name="description" content={props?.description} />
      </Head>
      <div className="">
        <div className='grid gap-2 grid-cols-6'>
          {props?.news?.map((data, index) => (
            <div key={index} className="bg-white p-2 rounded overflow-hidden">
              <div className='text-xl font-[600]'>{data?.title}</div>
              <div className='w-full overflow-hidden'>
                <div className='text-[12px] text-gray-500'>{data?.author}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </HomeLayout>
  )
}