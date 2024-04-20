const StudentCard = () => {
	return (
		<>
			<div className='w-[330px] h-fit bg-white text-center shadow-lg rounded-md py-4 px-6'>
				<div className='avatar'>
					<div className='w-24 rounded-full ring ring-primary ring-offset-[#6673fc] ring-offset-2'>
						<img src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
					</div>
				</div>
				<h1 className='text-2xl font-bold p-2'>John Petrr</h1>
				<p className='pb-1'>Science</p>
				<p className='pb-1'>A-103, shyam gokul flats, Mahatma Road</p>
				<p className='pb-4'>Mumbai</p>
				<p className='pb-3'>(+91)-1234-567-89</p>
				<button className='py-1 px-4 rounded-full bg-red-600 text-white'>
					Read More
				</button>
			</div>
		</>
	);
};

export default StudentCard;
