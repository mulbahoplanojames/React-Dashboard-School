import { Link, Outlet } from "react-router-dom";
import DashboardOneHeader from "../../../Components/Dashboard_1_Header/DashboardOneHeader";
import AllStudentsTable from "../../../Components/Tables/All_Students_Table/AllStudentsTable";

// This is a functional component that is responsible for rendering the AllStudents Page
const AllStudents = () => {
	// This section element is used as a container to hold everything on this page
	return (
		<>
			<section className='py-10 md:px-5 px-3 bg-1 '>
				{/* This is an import of the Dashboard header component */}
				<DashboardOneHeader />
				<div className='flex gap-4 pb-10'>
					<Link to='listview'>
						<button className='text-xl focus:bg-[#6673fc] shadow-lg py-2 px-4 focus:text-white rounded-full '>
							List View
						</button>
					</Link>
					<Link to='gridview'>
						<button className='text-xl focus:bg-[#6673fc] shadow-lg py-2 px-4 focus:text-white rounded-full '>
							Grid View
						</button>
					</Link>
				</div>

				{/* This is an import of the AllStudentsTable component */}
				<div className=''>{<Outlet />}</div>
			</section>
		</>
	);
};

export default AllStudents;
