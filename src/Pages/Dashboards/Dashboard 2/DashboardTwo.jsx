import PieChart from "../../../Components/Charts/Pie_Chart/PieChart";
import LineChart from "../../../Components/Charts/Line_Chart/LineChart";
import BarChart from "../../../Components/Charts/Bar_Chart/Barchart";
import DashboardOneHeader from "../../../Components/Dashboard_1_Header/DashboardOneHeader";
import DaschoardTwoCardWripper from "../../../Components/Dashboard_2_Card_Wripper/DaschoardTwoCardWripper";
import SportTable from "../../../Components/Tables/Sport_Table/SportTable";
import TeachersTableOne from "../../../Components/Tables/Teacher_Table_One/TeachersTableOne";
import ProfessorsList from "../../../Components/Professors_Lists/ProfessorsList";

const DashboardTwo = () => {
	/*
	 * This is the Dashboard Two component, This component is used to render all the data or contents
	 * for Dashboard 2 or Dashboard 2 Page.
	 */
	return (
		<div className='py-10 md:px-5 px-3 bg-1 '>
			{/* //! Header component */}
			<DashboardOneHeader />
			<div className='flex gap-8 flex-wrap mb-8'>
				{/* //! Card Wripper component */}
				<DaschoardTwoCardWripper />
				{/* //! Pie Chart component */}
				<div className='w-[500px] h-[400px]'>
					<PieChart />
				</div>
			</div>
			{/* //! Sports Table  */}
			<div className='mb-14 flex gap-10'>
				{/* //! Sport Table component */}
				<SportTable />
				{/* //! Professors List component */}
				<ProfessorsList />
			</div>
			{/* //! Charts */}
			<div className='flex gap-8 items-center flex-wrap mb-14'>
				{/* //! Pie Chart component */}
				<div className='w-[350px] h-[330px] rounded-md overflow-hidden shadow-lg'>
					<PieChart />
				</div>
				{/* //! Line Chart component */}
				<div className='w-[350px] h-[330px] rounded-mdoverflow-hidden shadow-lg'>
					<LineChart />
				</div>
				{/* //! Bar Chart component */}
				<div className='w-[350px] h-[330px] rounded-mdoverflow-hidden shadow-lg'>
					<BarChart />
				</div>
				{/* //! Teachers Table One component */}
				<TeachersTableOne />
			</div>
		</div>
	);
};

export default DashboardTwo;
