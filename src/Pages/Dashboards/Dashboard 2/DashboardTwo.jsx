import PieChart from "../../../Components/Charts/Pie_Chart/PieChart";
import DashboardOneHeader from "../../../Components/Dashboard_1_Header/DashboardOneHeader";
import DaschoardTwoCardWripper from "../../../Components/Dashboard_2_Card_Wripper/DaschoardTwoCardWripper";
import SportTable from "../../../Components/Tables/Sport_Table/SportTable";

const DashboardTwo = () => {
	return (
		<div className='py-10 md:px-5 px-3 bg-1 '>
			<DashboardOneHeader />
			<div className='flex gap-8 flex-wrap mb-8'>
				<DaschoardTwoCardWripper />
				<PieChart />
			</div>
			<div className=''>
				<SportTable />
			</div>
		</div>
	);
};

export default DashboardTwo;
