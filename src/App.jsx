import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layout/Layout";
import DashboardOne from "./Pages/Dashboard 1/DashboardOne";
import DashboardTwo from "./Pages/Dashboard 2/DashboardTwo";

const App = () => {
	return (
		<>
			{/* // Routes to navigate between pages */}
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<DashboardOne />} />
						<Route path='/dashboard2' element={<DashboardTwo />} />
						<Route />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
