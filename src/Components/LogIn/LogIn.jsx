import { Link } from "react-router-dom";

const Logout = () => {
	return (
		<div>
			<div className='bg-2 flex items-center justify-center w-screen h-screen'>
				<div className='w-[950px] h-fit bg-white rounded-md  flex justify-center items-center py-5 px-6 gap-6'>
					<div className='bg-red-400 w-[420px] h-[500px]'></div>
					<div className='bg-blue-500 w-[380px] h-[500px] rounded-lg overflow-hidden '>
						<Link to='/'>Back to Home</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Logout;
