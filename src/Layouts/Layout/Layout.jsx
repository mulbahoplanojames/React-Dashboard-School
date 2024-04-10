import Navbar from "../Navigation Bar/Navbar";
import Sidebar from "../Side Bar/Sidebar";
import { Outlet } from "react-router-dom";

// With this layout component only the outlets wihich is the other components will be changing
const Layout = () => {
	return (
		<>
			<section className='w-screen h-screen flex'>
				<Sidebar />
				{/* // Navbar and the Outlets which represent the other components in a one div  */}
				<div className=''>
					<Navbar />
					<div className=''>{<Outlet />}</div>
				</div>
			</section>
		</>
	);
};

export default Layout;
