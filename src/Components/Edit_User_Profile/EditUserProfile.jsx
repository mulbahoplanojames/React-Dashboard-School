import { Link } from "react-router-dom";
import avatar from "/src/assets/illu2.jpg";

const EditUserProfile = () => {
	return (
		<>
			<div className='w-full   '>
				<div className='flex justify-center items-center h-screen flex-col'>
					<h1 className='text-6xl font-bold'>Edit User Profile </h1>
					<p className='text-3xl font-bold'>Loading...</p>

					<Link
						to={"/"}
						className='text-3xl bg-blue-600 py-1 px-3 mt-3 rounded-lg text-white'
					>
						Bask to home page
					</Link>
				</div>
			</div>
		</>
	);
};

export default EditUserProfile;
