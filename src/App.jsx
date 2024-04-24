import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layout/Layout";

// Dashboard components import
import DashboardOne from "./Pages/Dashboards/Dashboard 1/DashboardOne";
import DashboardTwo from "./Pages/Dashboards/Dashboard 2/DashboardTwo";
import DashboardThree from "./Pages/Dashboards/Dashboard 3/DashboardThree";

// LogIn and CreateAccount Component import
import LogIn from "./Components/LogIn/LogIn";
import CreateAccount from "./Components/Create_Account/CreateAccount";

// Students Component import
import AllStudents from "./Pages/Students/All_Students/AllStudents";
import ListView from "./Pages/Students/All_Students/List_View/ListView";
import GridView from "./Pages/Students/All_Students/Grid_View/GridView";

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
						<Route path='/dashboard1' element={<DashboardOne />} />
						<Route path='/dashboard2' element={<DashboardTwo />} />
						<Route path='/dashboard3' element={<DashboardThree />} />
						{/* child roots and renders all the student components. */}
						<Route path='/allstudents' element={<AllStudents />}>
							<Route index element={<ListView />} />
							<Route path='gridview' element={<GridView />} />
						</Route>
					</Route>

					{/* // This Route component matches the path '/logout' and renders the Logout component */}
					<Route index element={<LogIn />} />
					<Route path='createaccount' element={<CreateAccount />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
