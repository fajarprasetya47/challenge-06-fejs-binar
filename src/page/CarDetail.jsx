import CariMobil from '../components/CariMobil';
import Layout from '../components/Layout/Layout';
import DetailMobil from '../components/DetailMobil';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function CarDetail() {
    const {id} = useParams();
    const {cars} = useSelector((state)=>state.carsReducer);
    
    return (
        <>
            <Layout>
                <CariMobil role="detail" disabled/>
                <DetailMobil car={cars} id={id} />
            </Layout>
        </>
    );
}

