import AdminLayout from '@/Layouts/Admin/AdminLayout';
import { Head } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    return (
        <AdminLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Dashboard" />
            <div className='bg-white p-4'>
                lorem ipsum dolor sit amet, consectetur adip aspect resources lorem ipsum dolor sit amet lorem ipsum dolor sit amet 
                lorem ipsum dolor sit amet, consectetur adip aspect resources lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                lorem ipsum dolor sit amet, consectetur adip aspect resources lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                lorem ipsum dolor sit amet, consectetur adip aspect resources lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                lorem ipsum dolor sit amet, consectetur adip aspect resources lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                lorem ipsum dolor sit amet, consectetur adip aspect resources lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                lorem ipsum dolor sit amet, consectetur adip aspect resources lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                lorem ipsum dolor sit amet, consectetur adip aspect resources lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                lorem ipsum dolor sit amet, consectetur adip aspect resources lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                lorem ipsum dolor sit amet, consectetur adip aspect resources lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                lorem ipsum dolor sit amet, consectetur adip aspect resources lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                lorem ipsum dolor sit amet, consectetur adip aspect resources lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                lorem ipsum dolor sit amet, consectetur adip aspect resources lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                lorem ipsum dolor sit amet, consectetur adip aspect resources lorem ipsum dolor sit amet lorem ipsum dolor sit amet
            </div>
        </AdminLayout>
    );
}
