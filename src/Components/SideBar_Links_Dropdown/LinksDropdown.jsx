import { Link } from "react-router-dom";

/*
 * ============================================================================
 * This component LinksDropdown is used with in the SidebarLinks component and
 * also the sidebar component to render all links dropdown with in the sidebar
 */

const LinksDropdown = ({ object, title, icon }) => {
	return (
		<>
			<div className='flex justify-center items-center mb-3'>
				<ul className='menu bg-base-200 w-56 rounded-box '>
					<li>
						<details onClick={() => open}>
							<summary className='text-base active:bg-blue-600 hover:text-blue-500'>
								{icon}
								<span>{title}</span>
							</summary>
							{/* //! Mapping over all the sidebar links data from the Constants data component  */}
							{object.map((item) => (
								<li className='text-base py-1' key={item.id}>
									<Link to={item.path}>{item.label}</Link>
								</li>
							))}
						</details>
					</li>
				</ul>
			</div>
		</>
	);
};

export default LinksDropdown;
