import AdminLayout from '@/Layouts/Admin/AdminLayout';

const Users = ({auth}) => {
  return (
    <AdminLayout auth={auth}>
        <div>User List</div>
    </AdminLayout>
  )
}

export default Users
