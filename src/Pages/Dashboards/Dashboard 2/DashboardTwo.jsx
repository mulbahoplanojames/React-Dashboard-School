import PieChart from "../../../Components/Charts/Pie_Chart/PieChart";
import LineChart from "../../../Components/Charts/Line_Chart/LineChart";
import BarChart from "../../../Components/Charts/Bar_Chart/Barchart";
import DashboardOneHeader from "../../../Components/Dashboard_1_Header/DashboardOneHeader";
import DaschoardTwoCardWripper from "../../../Components/Dashboard_2_Card_Wripper/DaschoardTwoCardWripper";
import SportTable from "../../../Components/Tables/Sport_Table/SportTable";
import TeachersTableOne from "../../../Components/Tables/Teacher_Table_One/TeachersTableOne";

const DashboardTwo = () => {
	return (
		<div className='py-10 md:px-5 px-3 bg-1 '>
			<DashboardOneHeader />
			<div className='flex gap-8 flex-wrap mb-8'>
				<DaschoardTwoCardWripper />
				<div className='w-[600px] h-[400px]'>
					<PieChart />
				</div>
			</div>
			{/* //! Sports Table  */}
			<div className='mb-14'>
				<SportTable />
			</div>
			{/* //! Charts */}
			<div className='flex gap-8 items-center flex-wrap mb-14'>
				<div className='w-[350px] h-[330px] rounded-md overflow-hidden shadow-lg'>
					<PieChart />
				</div>
				<div className='w-[350px] h-[330px] rounded-mdoverflow-hidden shadow-lg'>
					<LineChart />
				</div>
				<div className='w-[350px] h-[330px] rounded-mdoverflow-hidden shadow-lg'>
					<BarChart />
				</div>
				{/* //! teacher Table  */}
				<TeachersTableOne />
			</div>
		</div>
	);
};

export default DashboardTwo;
