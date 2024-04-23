import { Link } from "react-router-dom";

import image from "/src/assets/login.jpg";

const Logout = () => {
	return (
		<div>
			<div className='bg-2 flex items-center justify-center w-screen h-screen'>
				<div className='w-[950px] h-fit bg-white rounded-md  flex justify-center items-center py-5 px-6 gap-6'>
					<div className='bg-red-400 w-[420px] h-[500px]'>
						<Link to='/'>Back to Home</Link>
					</div>
					<div className='bg-blue-500 w-[380px] h-[500px] rounded-lg overflow-hidden '>
						<img
							src={image}
							alt={image}
							className='object-cover w-full h-full'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Logout;
