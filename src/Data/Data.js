/*
 * ===============================================================================
 * Sidebar Navigation Links that are use for navigating from one components to another
 * these data will be pass down as props thrugh the SidebarLinks compnonets
 * and them be map through.
 */

export const Dashboards = [
	{ id: "dashboard1", path: "/", label: "Dashboard 1" },
	{ id: "dashboard2", path: "/dashboard2", label: "Dashboard 2" },
	{ id: "dashboard3", path: "/dashboard3", label: "Dashboard 3" },
];

export const Students = [
	{ id: "allstudents", path: "/allstudents", label: "All Students" },
	{ id: "addstudents", path: "/addstudents", label: "Add Students" },
	{ id: "editstudents", path: "/editstudents", label: "Edit Students" },
	{ id: "aboutstudents", path: "/aboutstudents", label: "About Students" },
];

export const Courses = [
	{ id: "allcourses", path: "/allcourses", label: "All Courses" },
	{ id: "addcourses", path: "/addcourses", label: "Add Courses" },
	{ id: "editcourses", path: "/editcourses", label: "Edit Courses" },
	{ id: "aboutcourses", path: "/aboutcourses", label: "About Courses" },
];

export const Departments = [
	{ id: "alldepartment", path: "/alldepartment", label: "All Department" },
	{ id: "adddepartment", path: "/adddepartment", label: "Add Department" },
	{ id: "editdepartment", path: "/editdepartment", label: "Edit Department" },
	{
		id: "aboutdepartment",
		path: "/aboutdepartment",
		label: "About Department",
	},
];

export const Fees = [
	{ id: "feescollection", path: "/feescollection", label: "Fees Collection" },
	{ id: "feesreceipt", path: "/feesreceipt", label: "Fees Receipt " },
	{ id: "addfees", path: "/addfees", label: "Add Fees" },
];

export const Email = [
	{ id: "inbox", path: "/inbox", label: "Inbox" },
	{ id: "mailview", path: "/mailview", label: "Mail View " },
	{ id: "composemail", path: "/composemail", label: "Compose Mail" },
];

export const Forms = [
	{ id: "formlayout", path: "/formlayout", label: "Form Layout" },
	{ id: "formvalidation", path: "/formvalidation", label: "Form Validation" },
	{ id: "formeditor", path: "/formeditor", label: "Editor" },
];

const Holidays = [
	{ id: "allholiday", path: "/allholiday", label: "All Holiday" },
	{ id: "addholiday", path: "/addholiday", label: "Add Holiday" },
	{ id: "editholiday", path: "/editholiday", label: "Edit Holiday" },
	{
		id: "aboutholiday",
		path: "/aboutholiday",
		label: "About Holiday",
	},
];

export default Holidays;

//! Line Chart Date Data
export const lineChartData = {
	labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "agu", "sep"],
	id: "3",
	datasets: [
		{
			label: "High",
			data: [19, 15, 14, 24, 25, 19, 22, 24, 25],
			borderColor: "rgb(103,58,183)",
			barThickness: 40,
			barPercentage: 1,
			backgroundColor: "rgb(103,58,183)",
		},
		{
			label: "Middle",
			data: [10, 11, 22, 18, 31, 13, 26, 16, 31],
			borderColor: "rgb(233,30,99)",
			barThickness: 40,
			barPercentage: 1,
			backgroundColor: "rgb(233,30,99)",
		},
		{
			label: "Low",
			data: [7, 9, 16, 13, 25, 8, 20, 12, 27],
			borderColor: "rgb(87,165,255)",
			backgroundColor: "rgb(87,165,255)",
			barThickness: 40,
			barPercentage: 1,
		},
	],
};

//! Bar Chart Data
export const barChartData = {
	labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "aug", "sep"],
	id: "1",
	datasets: [
		{
			label: "Net Profit",
			data: [345, 359, 230, 181, 256, 55, 410, 344, 300],
			borderColor: "rgb(87,165,255)",
			backgroundColor: "rgb(87,165,255)",
			tension: 0.1,
		},
		{
			label: "Revenue",
			data: [445, 412, 325, 481, 356, 255, 510, 544, 600],
			borderColor: "rgb(0,227,150)",
			backgroundColor: "rgb(0,227,150)",
			tension: 0.1,
		},
		{
			label: "Free Cash Flow",
			data: [165, 259, 80, 121, 96, 85, 240, 134, 90],
			borderColor: "rgb(255,116,0)",
			backgroundColor: "rgb(255,116,0)",
			tension: 0.1,
		},
	],
};
