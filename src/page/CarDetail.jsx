import CariMobil from '../components/CariMobil';
import Layout from '../components/Layout/Layout';
import DetailMobil from '../components/DetailMobil';
import { useCars } from '../App';
import { useParams } from 'react-router-dom';

export default function CarDetail() {
    const {id} = useParams();
    const { cars } = useCars();
    return (
        <>
            <Layout>
                <CariMobil role="detail" disabled/>
                <DetailMobil car={cars} id={id} />
            </Layout>
        </>
    );
}

