const FriendsMessages = () => {
	return (
		<>
			<div className='flex items-center gap-4 px-2'>
				<div className='avatar online'>
					<div className='w-10 rounded-full'>
						<img
							src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
							className='w-10 rounded-full'
						/>
					</div>
				</div>
				<div className='relative w-full mb-4'>
					<p className='text-blue-500 font-bold'>James Mulbah</p>
					<p>Richard I found you on LinkedIn....</p>
					<p className='absolute top-2 right-1'>Just Now</p>
				</div>
			</div>
		</>
	);
};

export default FriendsMessages;
