/*
 * ===========================================================================================
 * This component DashboardOneCardsWripper is use with in the Dashboard One omponent to display
 * or render multiple cards layout in a flex or gird layout
 */

import CardOne from "../Cards/Card_One/CardOne";
import cardOneData from "../../Constants/Constants";

const DashboardOneCardsWripper = () => {
	return (
		<>
			<div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-6 place-items-center'>
				{cardOneData.map((item) => (
					<CardOne
						key={item.id}
						label={item.label}
						number={item.number}
						percentage={item.percentage}
						icon={item.icon}
						color={item.color}
					/>
				))}
			</div>
		</>
	);
};

export default DashboardOneCardsWripper;
