import DashboardOneHeader from "../../../Components/Dashboard_1_Header/DashboardOneHeader";

const DashboardOne = () => {
	return (
		<div className='py-10 md:px-8 px-3 bg-1'>
			{/* Dashboard HeaderTitle and a link to to go back to the home page  */}
			<DashboardOneHeader />
			<a href='dashboard2'>To Dashdoard Two</a>
		</div>
	);
};

export default DashboardOne;
