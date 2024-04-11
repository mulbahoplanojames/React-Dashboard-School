import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layout/Layout";
import DashboardOne from "./Pages/Dashboards/Dashboard 1/DashboardOne";
import DashboardTwo from "./Pages/Dashboards/Dashboard 2/DashboardTwo";
import DashboardThree from "./Pages/Dashboards/Dashboard 3/DashboardThree";
import Logout from "./Components/Logout/Logout";

const App = () => {
	return (
		<>
			{/* // Routes to navigate between pages */}
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<DashboardOne />} />
						<Route path='/dashboard2' element={<DashboardTwo />} />
						<Route path='/dashboard3' element={<DashboardThree />} />
						<Route />
					</Route>

					<Route path='/logout' element={<Logout />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
