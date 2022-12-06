import { Link, Head } from '@inertiajs/inertia-react';

export default function Homepage(props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>Home Page</title>
      </Head>
      <div>
        <h1 className="text-center text-4xl font-extrabold text-gray-900">Home Page</h1>
      </div>
    </div>
  )
}