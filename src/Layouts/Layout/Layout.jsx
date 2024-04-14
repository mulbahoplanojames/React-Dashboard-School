/*
 * ===========================================================================================
 * This component Layoyt is use with in the App component to display  or render
 * the sidebar and the navbar which is static with this page and uses the Outlet to display
 * other components with in this site
 
 * With this layout component only the outlets wihich is the other components will be changing
 */

import Navbar from "../NavBar/Navbar";
import Sidebar from "../Side_Bar/Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

const Layout = () => {
	return (
		<>
			<section className='w-screen h-screen flex flex-row'>
				<Sidebar />
				{/* //! Navbar and the Outlets which represent the other components in a one div  */}
				<div className='w-full overflow-y-scroll relative'>
					<Navbar />
					<div className='mt-[4.5rem]'>{<Outlet />}</div>
					<Footer />
				</div>
			</section>
		</>
	);
};

export default Layout;
