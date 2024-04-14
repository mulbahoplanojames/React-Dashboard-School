import { Pie } from "react-chartjs-2";
import { pieChartData } from "../../../Data/Data";

import {
	Chart as chartjs,
	ArcElement,
	CategoryScale,
	LinearScale,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

chartjs.register(
	ArcElement,
	CategoryScale,
	LinearScale,
	Title,
	Tooltip,
	Legend
);

const PieChart = () => {
	const options = { responsive: true, maintainAspectRatio: false };

	return (
		<>
			<div className='w-full h-full md:flex-1 rounded-md shadow-2xl  bg-white overflow-hidden'>
				<Pie data={pieChartData} options={options} />
			</div>
		</>
	);
};

export default PieChart;
