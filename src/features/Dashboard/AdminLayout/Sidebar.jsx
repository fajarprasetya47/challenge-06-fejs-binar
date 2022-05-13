import { asset } from "../../../assets/asset"

export default function Sidebar() {
    return (
        <>
            <div className="sidebar">
                <div className="my-2 text-center">
                    <img src={asset.logo3} alt="logo" />
                </div>
                <div className="sidebar-link-active">
                    <a href="/home">
                        <div className="sidebar-link-icon"><img src={asset.fiHome} alt="home" /></div>
                        Dashboard
                    </a>
                </div>
                <div className="sidebar-link">
                    <a href="/cars">
                        <div className="sidebar-link-icon"><img src={asset.fiTruck} alt="car" /></div>
                        Cars
                    </a>
                </div>
            </div>
        </>
    )
}