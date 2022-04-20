import CariMobil from '../components/CariMobil';
import Layout from '../components/Layout/Layout';
import ListMobil from '../components/ListMobil';
import {useSelector} from 'react-redux'

export default function Cars() {
    const {cars} = useSelector((state)=>state.carsReducer);
    
    return (
        <>
            <Layout>
                <CariMobil role="edit"/>
                <ListMobil car={cars} />
            </Layout>
        </>
    );
}

