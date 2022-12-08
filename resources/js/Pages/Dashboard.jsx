import AdminLayout from '@/Layouts/Admin/AdminLayout';
import { Head } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    return (
        <AdminLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Dashboard" />
            <div>
                Main
            </div>
        </AdminLayout>
    );
}
