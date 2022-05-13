import Footer from "./Footer";
import Header from "./Header";

export default function Layout({children, head}){
    return(
        <>
            <div className='content shadow-sm'>
                <Header head={head} />
                {children}
                <Footer/>
            </div>
        </>

    )
}