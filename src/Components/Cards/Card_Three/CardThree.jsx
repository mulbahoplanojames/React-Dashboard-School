/*
 * ===========================================================================================
 * This component Card One is use with in the Dashboard One Cards Wripper component to display
 * or render a card layout
 */

const CardThree = (props) => {
	// Object Destructing of props
	const { label, number, percentage, icon, color, value } = props;

	return (
		<>
			<div className='w-[270px] h-fit py-5 px-3 bg-white shadow-xl rounded-lg flex items-center gap-4'>
				<div
					className='w-20 h-20 rounded-full  font-extrabold  flex justify-center items-center'
					style={{ background: `${color}` }}
				>
					{icon}
				</div>
				<div className='text-white'>
					<p className='text-xl text-black  pb-2'>{label}</p>
					<p className='text-2xl text-green-600 pb-2'>{number}</p>
					<progress
						className='progress w-32'
						style={{ background: `${color}` }}
						value={value}
						max='100'
					></progress>

					<p className='text-xl text-black'>{percentage}</p>
				</div>
			</div>
		</>
	);
};

export default CardThree;
