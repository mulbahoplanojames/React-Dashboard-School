/*
 * This component UserMini Profiles is used with in the Sidebar component
 * to render the user image/avatar, positiona and name with in the sidebar
 */

const UserMiniProfie = () => {
	return (
		<>
			<div className='flex flex-col justify-center items-center pb-8'>
				{/* // User Image / Avatar  */}
				<div className='w-[130px] h-[90px] bg-neutral-700 rounded-lg  mb-2 overflow-hidden'>
					<img
						src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
						alt=''
						className='w-full h-full object-cover'
					/>
				</div>

				{/* // User Position and Name  */}
				<p className='text-base pb-1'>Richard Jutomue Mulbah</p>
				<p className=''>Administrator</p>
			</div>
		</>
	);
};

export default UserMiniProfie;
