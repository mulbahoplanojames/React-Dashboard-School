/*
 * ===========================================================================================
 * This component Card One is use with in the Dashboard One Cards Wripper component to display
 * or render a card layout
 */

import { LuUsers } from "react-icons/lu";

const CardOne = () => {
	return (
		<>
			<div className='w-[270px] h-fit py-5 px-3 bg-blue-400 rounded-lg flex items-center gap-4'>
				<div className='w-20 h-20 rounded-full bg-gradient-to-r from-slate-50 to-neutral-50  flex justify-center items-center'>
					<LuUsers className='text-4xl' />
				</div>
				<div className='text-white'>
					<p className='text-xl  pb-2'>Total Students</p>
					<p className='text-2xl pb-2'>450</p>
					<progress
						className='progress neutral-content w-32'
						value='90'
						max='100'
					></progress>

					<p className='text-xl'>45% increas..</p>
				</div>
			</div>
		</>
	);
};

export default CardOne;
