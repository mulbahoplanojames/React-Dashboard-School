import { Link } from "react-router-dom";

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
