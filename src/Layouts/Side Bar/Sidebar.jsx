import { RiSchoolFill } from "react-icons/ri";
import UserMiniProfie from "../../Components/User Mini Profile/UserMiniProfie";
import SidebarLinks from "../../Components/SideBar NavLinks/SidebarLinks";
import LinksDropdown from "../../Components/Links Drop Down/LinksDropdown";
//form from constants data
import { Forms } from "../../Constants/Constants";

//Icon from react icon
import { MdOutlineFormatIndentIncrease } from "react-icons/md";

const Sidebar = () => {
	return (
		<>
			<div className='w-64 flex flex-col  overflow-y-scroll'>
				{/* // Logo */}
				<div className='flex items-center justify-center gap-3 bg-blue-600 py-6 cursor-pointer mb-8'>
					<RiSchoolFill className='text-4xl text-white' />
					<h1 className='text-3xl text-white'>Dev!Tech</h1>
				</div>
				{/* // User profile */}
				<UserMiniProfie />
				{/* // Side Bar Navlinks */}
				<SidebarLinks />
				{/* // Footer Bar Navlinks */}
				<div className=''>
					<h1>Footer</h1>
					<LinksDropdown
						object={Forms}
						title={"Forms"}
						icon={<MdOutlineFormatIndentIncrease className='text-2xl' />}
					/>
				</div>
			</div>
		</>
	);
};

export default Sidebar;
