/*
 * ===========================================================================================
 * This component Layoyt is use with in the App component to display  or render
 * the sidebar and the navbar which is static with this page and uses the Outlet to display
 * other components with in this site
 
 * With this layout component only the outlets wihich is the other components will be changing
 */

import Navbar from "../NavBar/Navbar";
import Sidebar from "../Side Bar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<section className='w-screen h-screen flex'>
				<Sidebar />
				{/* //! Navbar and the Outlets which represent the other components in a one div  */}
				<div className='w-full'>
					<Navbar />
					<div className=''>{<Outlet />}</div>
				</div>
			</section>
		</>
	);
};

export default Layout;
