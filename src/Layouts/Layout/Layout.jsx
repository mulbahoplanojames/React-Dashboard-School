import Navbar from "../Navigation Bar/Navbar";
import Sidebar from "../Side Bar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<section className=''>
				<div className=''>
					<Sidebar />
				</div>
				<div className=''>
					<Navbar />
					<div className=''>{<Outlet />}</div>
				</div>
			</section>
		</>
	);
};

export default Layout;
