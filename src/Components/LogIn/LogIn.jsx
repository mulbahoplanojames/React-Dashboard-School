import { Link } from "react-router-dom";

// Icon from react icons
import { FaEye } from "react-icons/fa";
// Login image
import image from "/src/assets/login.jpg";

/**
 * @description The Logout component is responsible for rendering the LogIn Page
 * @returns {JSX.Element}
 */
const Logout = () => {
	return (
		<>
			<div className='bg-2 flex items-center justify-center w-screen h-screen py-6'>
				{/* // LogIn Page Parent div */}
				<div className='lg:w-[940px] w-full h-fit bg-white rounded-md  flex justify-center items-center flex-wrap py-5  px-4 gap-6'>
					{/* // LogIn Page Form */}
					<form className=' md:w-[460px] w-full h-fit px-4 py-8'>
						<h1 className='text-3xl font-bold pb-1'>Welcome Back</h1>
						<p className='text-base pb-5'>
							Welcome back, Please fill in your details
						</p>

						{/* // Form Fields label one and text field one  */}
						<label htmlFor='email' className='pb-1 inline-block'>
							Username/Email
						</label>
						<div className='w-[95%] h-10 mb-5 bg-white rounded-sm overflow-hidden border'>
							<input
								type='email'
								className='outline-none border-none  w-full h-full rounded-sm pl-5'
								required
							/>
						</div>

						{/* // Form Fields label two and text field two */}
						<label htmlFor='password' className='pb-1 inline-block'>
							Password
						</label>
						<div className='w-[95%] h-10 mb-5 bg-white rounded-sm overflow-hidden border flex justify-between items-center gap-2 pr-2'>
							<input
								type='password'
								className='outline-none border-none  w-full h-full rounded-sm pl-5'
								required
							/>
							<FaEye className='text-2xl text-red-600 cursor-pointer ' />
						</div>

						{/* // Form submit button */}
						<button
							type='submit'
							className='w-[95%] h-12 bg-black text-white  text-lg rounded-md'
						>
							Sign In
						</button>

						{/* // Form link if you don't have an account */}
						<p className='text-center pt-4'>
							Don&apos;t have an account?
							<Link to='/' className='font-bold'>
								Sign up today!
							</Link>
						</p>
					</form>
					{/* // LogIn Page Image Wripper div */}
					<div className='w-[380px] md:h-[500px] h-[300px] rounded-lg overflow-hidden md:order-last order-first'>
						<img
							src={image}
							alt={image}
							className='object-cover w-full h-full'
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Logout;
