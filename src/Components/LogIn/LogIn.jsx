import { Link } from "react-router-dom";

const Logout = () => {
	return (
		<div>
			<div className='h-screen w-screen flex justify-center items-center bg-2'>
				<div className='w-[900px] h-fit bg-white rounded-md  flex justify-center items-center py-5 px-6'>
					<div className='bg-red-400 w-[420px] h-[500px]'></div>
					<div className='bg-blue-500 w-[420px] h-[80%]'>
						<Link to='/'>Back to Home</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Logout;
