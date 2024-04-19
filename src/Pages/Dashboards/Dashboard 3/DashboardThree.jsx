import BarChart from "../../../Components/Charts/Bar_Chart/Barchart";
import LineChart from "../../../Components/Charts/Line_Chart/LineChart";
import DashboardOneHeader from "../../../Components/Dashboard_1_Header/DashboardOneHeader";
import DashboardThreeCardsWripper from "../../../Components/Dashboard_3_card_Wripper/DashboardThreeCardsWripper";

const DashboardThree = () => {
	return (
		<>
			<div className='py-10 md:px-5 px-3 bg-1 '>
				<DashboardOneHeader />
				<DashboardThreeCardsWripper />
				{/* // Line Cart and Bar Chart */}
				<div className='flex items-center flex-wrap gap-12 mb-14'>
					<div className='w-[520px] h-[530px]'>
						<LineChart />
					</div>
					<div className='w-[560px] h-[530px] '>
						<BarChart />
					</div>{" "}
				</div>
			</div>
		</>
	);
};

export default DashboardThree;
