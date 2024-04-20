const StudentCard = (props) => {
	const { avatar, name, subject, location, city, contact } = props;

	return (
		<>
			<div className='w-[320px] h-fit bg-white text-center shadow-lg rounded-md py-4 px-6'>
				<div className='avatar'>
					<div className='w-24 rounded-full ring ring-primary ring-offset-[#6673fc] ring-offset-2'>
						<img src={avatar} alt={avatar} />
					</div>
				</div>
				<h1 className='text-2xl font-bold p-2'>{name}</h1>
				<p className='pb-1'>{subject}</p>
				<p className='pb-1'>{location}</p>
				<p className='pb-4'>{city}</p>
				<p className='pb-3'>(+91)-1234-567-89</p>
				<button className='py-1 px-4 rounded-full bg-red-600 text-white'>
					Read More
				</button>
			</div>
		</>
	);
};

export default StudentCard;
