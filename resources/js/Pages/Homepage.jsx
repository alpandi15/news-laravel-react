import { Link, Head } from '@inertiajs/inertia-react';
import HomeLayout from '@/Layouts/HomeLayout';
import Pagination from '@/Components/Pagination';

export default function Homepage(props) {
  console.log('HOME PAGE ', props)
  return (
    <HomeLayout auth={props?.auth}>
      <Head>
        <title>{props?.title}</title>
        <meta name="description" content={props?.description} />
      </Head>
      <div className="">
        <div className='grid gap-4 grid-cols-3'>
          {props?.news?.data?.map((data, index) => (
            <div key={index} className="bg-white p-4 rounded overflow-hidden min-h-[200px] relative">
              <div className='text-xl font-[600] truncate'>{data?.title}</div>
              <p className='text-[12px] text-gray-500'>{data?.description}</p>
              <div className='w-full overflow-hidden absolute bottom-4'>
                <div className='text-[12px] text-gray-500'>{data?.author}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Pagination class="mt-6" links={props?.news?.meta?.links} />
    </HomeLayout>
  )
}