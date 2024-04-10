import { IoMdNotificationsOutline } from "react-icons/io";
import FriendsMessages from "../Messages/Individual Messages/FriendsMessages";
import { NotificationsData } from "../../../Constants/Constants";

/*
 * Messages that are recieve from friends in the messages navigation bar
 * This component Messages is used with in the Navbar component to render
 *  all messages obtain from friends when you click on the messages icon
 */

const Notifications = () => {
	return (
		<>
			{/* // main icon for dropdown when click upon */}
			<div className='flex-none'>
				<div className='dropdown dropdown-end'>
					<div tabIndex={0} role='button' className='btn btn-ghost btn-circle'>
						<div className='indicator'>
							<IoMdNotificationsOutline className='h-7 w-7' />
							<span className='badge badge-sm indicator-item bg-orange-500 text-white'>
								9
							</span>
						</div>
					</div>
					<div
						tabIndex={0}
						className='mt-6 z-30 card card-compact dropdown-content w-[500px] bg-base-100 shadow'
					>
						<div className='w-full h-80 z-40 overflow-y-scroll'>
							{/* // Notification for incoming messages  */}
							<div className='font-bold text-lg bg-neutral-400 flex justify-between items-center py-2 px-3 mb-4'>
								<p className='text-xl uppercase'>Notifications</p>
								<button className='bg-purple-500 py-1 p-2 rounded-md text-white'>
									New 9
								</button>
							</div>
							{/* // Avatar and messages recieve from friends */}
							{NotificationsData.map((message) => (
								<FriendsMessages
									key={message.id}
									message={message.message}
									time={message.time}
								/>
							))}

							<div className='card-actions'>
								<p className='bg-neutral-300 w-full py-2 text-center'>
									All Notifications
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Notifications;
