import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layout/Layout";
import DashboardOne from "./Pages/Dashboards/Dashboard 1/DashboardOne";
import DashboardTwo from "./Pages/Dashboards/Dashboard 2/DashboardTwo";
import DashboardThree from "./Pages/Dashboards/Dashboard 3/DashboardThree";
import Logout from "./Components/Logout/Logout";

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
						{/* // This Route component is a child of the above Route and matches the root
							path ('/') and renders the DashboardOne component. */}
						<Route index element={<DashboardOne />} />
						{/* // This Route component is also a child of the above Route and matches the
							path '/dashboard2' and renders the DashboardTwo component. */}
						<Route path='/dashboard2' element={<DashboardTwo />} />
						{/* // This Route component is also a child of the above Route and matches the
							path '/dashboard3' and renders the DashboardThree component. */}
						<Route path='/dashboard3' element={<DashboardThree />} />
						{/* // This Route component is also a child of the above Route and matches any
							path that is not defined above and renders nothing. This is useful for
							handling invalid routes. */}
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
