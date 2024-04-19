/*
 * ===========================================================================================
 * This component DashboardOneHeader is use with in the Dashboard One omponent to display
 * or render just a title and a div containg a link to take you back home
 */

import { GrHomeRounded } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";

const DashboardOneHeader = () => {
	return (
		<>
			<div className='flex justify-between mb-8 items-center'>
				<h1 className='md:text-2xl text-xl font-bold'>Dashboard</h1>
				<div className='flex justify-center items-center gap-2 bg-neutral-100 md:py-3 py-2 md:px-5 px-3 rounded-full shadow-lg'>
					<GrHomeRounded className='text-gray-400' />
					<a href='' className='text-base text-gray-400 hover:text-blue-500'>
						Home
					</a>
					<IoIosArrowForward className='text-gray-400' />
					<span className='text-base'>Dashboard</span>
				</div>
			</div>
		</>
	);
};

export default DashboardOneHeader;
