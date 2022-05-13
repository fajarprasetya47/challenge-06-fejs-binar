import HomeLayout from './HomeLayout/HomeLayout';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Home() {
  const navigate = useNavigate();
  const { dataLogin } = useSelector((state) => state.authReducer);

  useEffect(() => {
    if (dataLogin?.user?.email==='admin@admin.com') {
      navigate('/dashboard');
    }else if(!dataLogin?.user){
      navigate('/')
    }
    //eslint-disable-next-line
  }, [])

  return (
    <>
      <HomeLayout head={'hero'}></HomeLayout>
    </>
  );
}

