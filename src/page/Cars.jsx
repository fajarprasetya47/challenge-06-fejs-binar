import CariMobil from '../components/CariMobil';
import Layout from '../components/Layout/Layout';
import ListMobil from '../components/ListMobil';
import { useCars } from '../App';

export default function Cars() {
    const { cars } = useCars()
    return (
        <>
            <Layout>
                <CariMobil role="edit"/>
                <ListMobil car={cars} />
            </Layout>
        </>
    );
}

