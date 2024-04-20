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

				{/* This is an import of the AllStudentsTable component */}
				<AllStudentsTable />
			</section>
		</>
	);
};

export default AllStudents;
