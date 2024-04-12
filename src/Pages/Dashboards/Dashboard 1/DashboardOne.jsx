import BarChart from "../../../Components/Charts/Bar_Chart/Barchart";
import LineChart from "../../../Components/Charts/Line_Chart/LineChart";
import DashboardOneCardsWripper from "../../../Components/Dashboard_1_Card_Wripper/DashboardOneCardsWripper";
import DashboardOneHeader from "../../../Components/Dashboard_1_Header/DashboardOneHeader";
import TeachersTableOne from "../../../Components/Tables/Teacher_Table_One/TeachersTableOne";

const DashboardOne = () => {
	return (
		<div className='py-10 md:px-5 px-3 bg-1 '>
			{/* Dashboard HeaderTitle and a link to to go back to the home page  */}
			<DashboardOneHeader />
			<DashboardOneCardsWripper />
			<div className='flex items-center flex-wrap gap-12 mb-14'>
				<LineChart />
				<BarChart />
			</div>
			<TeachersTableOne />
		</div>
	);
};

export default DashboardOne;
