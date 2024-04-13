import PieChart from "../../../Components/Charts/Pie_Chart/PieChart";
import DashboardOneHeader from "../../../Components/Dashboard_1_Header/DashboardOneHeader";
import DaschoardTwoCardWripper from "../../../Components/Dashboard_2_Card_Wripper/DaschoardTwoCardWripper";

const DashboardTwo = () => {
	return (
		<div className='py-10 md:px-5 px-3 bg-1 '>
			<DashboardOneHeader />
			<div className='flex gap-8 flex-wrap'>
				<DaschoardTwoCardWripper />
				<PieChart />
			</div>
		</div>
	);
};

export default DashboardTwo;
