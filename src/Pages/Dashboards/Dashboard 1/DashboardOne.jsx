import LineChart from "../../../Components/Charts/Line_Chart/LineChart";
import DashboardOneCardsWripper from "../../../Components/Dashboard_1_Card_Wripper/DashboardOneCardsWripper";
import DashboardOneHeader from "../../../Components/Dashboard_1_Header/DashboardOneHeader";

const DashboardOne = () => {
	return (
		<div className='py-10 md:px-5 px-3 bg-1 '>
			{/* Dashboard HeaderTitle and a link to to go back to the home page  */}
			<DashboardOneHeader />
			<DashboardOneCardsWripper />
			<div className='flex items-center flex-wrap gap-8'>
				<LineChart />
				<LineChart />
			</div>
		</div>
	);
};

export default DashboardOne;
