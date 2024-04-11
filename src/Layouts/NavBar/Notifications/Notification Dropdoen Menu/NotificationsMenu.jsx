/*
 * This component is used with in the Messages
 * component to render all messages obtain from friends
 */
const NotificationMenu = ({ notifications, time, color, icon }) => {
	return (
		<>
			<div className='flex items-center gap-4 px-2 mb-3'>
				<div
					className='w-12 h-10 rounded-full flex justify-center items-center'
					style={{ background: `${color}` }}
				>
					{icon}
				</div>

				<div className='relative w-full mb-4'>
					<p>{notifications}</p>
					<p className='absolute top-2 right-1'>{time}</p>
				</div>
			</div>
		</>
	);
};

export default NotificationMenu;
