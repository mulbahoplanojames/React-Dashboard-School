import DashboardOneHeader from "../../../Components/Dashboard_1_Header/DashboardOneHeader";
import AllStudentsTable from "../../../Components/Tables/All_Students_Table/AllStudentsTable";
import SportTable from "../../../Components/Tables/Sport_Table/SportTable";

const AllStudents = () => {
	return (
		<>
			<section className='py-10 md:px-5 px-3 bg-1 '>
				<DashboardOneHeader />

				<AllStudentsTable />
			</section>
		</>
	);
};

export default AllStudents;
