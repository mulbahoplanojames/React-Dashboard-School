import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<div className='bg-neutral-800 py-8'>
				<p className='text-white text-xl text-center'>
					2024 &copy; Dev!Tech Theme by{" "}
					<Link to='' className='text-blue-700'>
						Oplano James Mulbah
					</Link>
				</p>
			</div>
		</>
	);
};

export default Footer;
