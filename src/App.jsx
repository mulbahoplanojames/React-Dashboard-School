import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layout/Layout";

// Dashboard components import
import DashboardOne from "./Pages/Dashboards/Dashboard 1/DashboardOne";
import DashboardTwo from "./Pages/Dashboards/Dashboard 2/DashboardTwo";
import DashboardThree from "./Pages/Dashboards/Dashboard 3/DashboardThree";
import Logout from "./Components/Logout/Logout";

// Students Component import
import AllStudents from "./Pages/Students/All_Students/AllStudents";

const App = () => {
	// The app is wrapped in a BrowserRouter, which provides a navigational interface
	// between different routes.
	return (
		<>
			{/* // Routes to navigate between pages */}
			<BrowserRouter>
				{/* // This is the main router for this application. It defines the different routes
					that our application can navigate to. */}
				<Routes>
					{/* // This is a route that matches the root path ('/') and renders the Layout component.
						The Route component is used to specify a path that can be navigated to. */}
					<Route path='/' element={<Layout />}>
						{/* child roots and renders the Dashboard components. */}
						<Route index element={<DashboardOne />} />
						<Route path='/dashboard2' element={<DashboardTwo />} />
						<Route path='/dashboard3' element={<DashboardThree />} />
						{/* child roots and renders all the student components. */}
						<Route path='/allstudents' element={<AllStudents />} />
						<Route />
					</Route>

					{/* // This Route component matches the path '/logout' and renders the Logout component */}
					<Route path='/logout' element={<Logout />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
