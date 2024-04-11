import { GrHomeRounded } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";

const DashboardOne = () => {
	return (
		<div className='py-10 px-8 bg-1'>
			{/* //Title and a link to to go back to the home page  */}
			<div className='flex justify-between mb-8 items-center'>
				<h1 className='text-3xl font-bold'>Dashboard</h1>
				<div className='flex justify-center items-center gap-2 bg-neutral-100 py-4 px-5 rounded-full'>
					<GrHomeRounded className='text-gray-400' />
					<a href='' className='text-lg text-gray-400 hover:text-blue-500'>
						Home
					</a>
					<IoIosArrowForward className='text-gray-400' />
					<span className='text-lg'>Dashboard</span>
				</div>
			</div>
			<a href='dashboard2'>To Dashdoard Two</a>
		</div>
	);
};

export default DashboardOne;
