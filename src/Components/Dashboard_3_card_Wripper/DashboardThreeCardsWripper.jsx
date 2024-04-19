/*
 * ===========================================================================================
 * This component DashboardThreeCardsWripper is use with in the Dashboard One omponent to display
 * or render multiple cards layout in a flex or gird layout
 */

import cardOneData from "../../Constants/Constants";
import CardThree from "../Cards/Card_Three/CardThree";

const DashboardThreeCardsWripper = () => {
	return (
		<>
			<div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-x-12 gap-x-4 gap-y-6 place-items-center mb-10'>
				{cardOneData.map((item) => (
					<CardThree
						key={item.id}
						label={item.label}
						number={item.number}
						percentage={item.percentage}
						color={item.color}
						value={item.value}
						icon={item.icon}
					/>
				))}
			</div>
		</>
	);
};

export default DashboardThreeCardsWripper;
