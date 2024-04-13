import { cardTwoData } from "../../Constants/Constants";
import CardTwo from "../Cards/Card_Two/CardTwo";

const DaschoardTwoCardWripper = () => {
	return (
		<>
			<div className='flex flex-wrap w-[40%] items-center  gap-x-6 gap-y-10 px-1'>
				{cardTwoData.map((data) => (
					<CardTwo
						key={data.icon}
						label={data.label}
						number={data.number}
						percentage={data.percentage}
						icon={data.icon}
						className='text-4xl'
					/>
				))}
			</div>
		</>
	);
};

export default DaschoardTwoCardWripper;
