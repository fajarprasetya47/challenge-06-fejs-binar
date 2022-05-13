import AdminLayout from "./AdminLayout/AdminLayout"
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Dashboard() {
    const navigate = useNavigate();
    const { dataLogin } = useSelector((state) => state.authReducer);

    useEffect(() => {
        if (!dataLogin?.user || dataLogin?.user?.email !== 'admin@admin.com') {
            navigate('/');
        }
        //eslint-disable-next-line
    }, [])

    return (
        <>
            <AdminLayout />
        </>
    )
}