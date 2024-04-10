import Messages from "./Messages/Messages";
import UserAvatar from "./Navbar UserAvatar/UserAvatar";

const Navbar = () => {
	return (
		<>
			<nav className='flex justify-between w-full shadow-lg py-2 md:px-8 px-2 mb-8'>
				{/* // Search input field  */}
				<div className='form-control'>
					<input
						type='text'
						placeholder='Search'
						className='input input-bordered w-24 md:w-auto'
					/>
				</div>

				{/* // Right links for the navigation contain the avatar and other components */}
				<div className='flex gap-4'>
					<Messages />
					<UserAvatar />
				</div>
			</nav>
		</>
	);
};

export default Navbar;
