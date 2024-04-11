/*
 * ===========================================================================================
 * This component Card One is use with in the Dashboard One Cards Wripper component to display
 * or render a card layout
 */

const CardOne = (props) => {
	// Object Destructing of props
	const { label, number, percentage, icon, color } = props;

	return (
		<>
			<div
				className='w-[270px] h-fit py-5 px-3 bg-blue-400 rounded-lg flex items-center gap-4'
				style={{ background: `${color}` }}
			>
				<div className='w-20 h-20 rounded-full bg-gradient-to-r from-slate-200 text-white font-extrabold  flex justify-center items-center'>
					{icon}
				</div>
				<div className='text-white'>
					<p className='text-xl  pb-2'>{label}</p>
					<p className='text-2xl pb-2'>{number}</p>
					<progress
						className='progress neutral-content w-32'
						value='90'
						max='100'
					></progress>

					<p className='text-xl'>{percentage}</p>
				</div>
			</div>
		</>
	);
};

export default CardOne;
