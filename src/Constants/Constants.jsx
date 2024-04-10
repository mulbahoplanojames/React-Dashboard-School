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

/*
 * Messages that are recieve from friends in the messages navigation bar
 * This Data FriendMessages  is used with in the Messages
 * component to render all messages obtain from friends
 */
export const FriendMessagesData = [
	{
		id: 1,
		message: "Richard i found you on LinkedIn..",
		time: "Just Now",
	},
	{
		id: 2,
		name: "John Doe",
		message: "FWD, Is was there any important message given in cless today",
		time: "16 mins",
	},
	{
		id: 3,
		name: "Abdalla",
		message: "Please take a print of the assignment and send me",
		time: "2 hrs",
	},
	{
		id: 4,
		name: "Solomon",
		message: "Please apply for Oplano..",
		time: "40 mins",
	},
	{
		id: 5,
		name: "Mary",
		message: "At what time are we going to meet to do thhe graup assignment?",
		time: "50 mins",
	},
];

/*
 * Messages that are recieve from friends in the messages navigation bar
 * This Data NotificationsData  is used with in the Notification
 * component to render all Notifications obtain from other medias
 */
export const NotificationsData = [
	{
		id: 1,
		message: "Congraduations!",
		time: "Just Now",
	},
	{
		id: 2,
		message: "Peter Manson is now following",
		time: "6 mins",
	},
	{
		id: 3,
		message: "Wilma, send you a message",
		time: "10 mins",
	},
	{
		id: 4,
		message: "Jerry likes your picture",
		time: "16 mins",
	},
	{
		id: 5,
		message: "Warning!!",
		time: "20 mins",
	},
];
