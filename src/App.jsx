import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layout/Layout";

const App = () => {
	return (
		<>
			{/* // Routes to navigate between pages */}
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route />
						<Route />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
