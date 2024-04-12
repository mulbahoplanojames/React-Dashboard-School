/*
 * ===============================================================================
 * Messages that are recieve from friends in the messages navigation bar
 * This Data FriendMessages  is used with in the Messages
 * component to render all messages obtain from friends
 */

import avatar1 from "/src/assets/illu1.jpg";
import avatar2 from "/src/assets/illu2.jpg";
import avatar3 from "/src/assets/illu3.jpg";
import avatar4 from "/src/assets/illu4.jpg";
import avatar5 from "/src/assets/illu5.jpg";

export const FriendMessagesData = [
	{
		id: 1,
		name: "Wilma William",
		message: "Richard i found you on LinkedIn..",
		time: "Just Now",
		avater: avatar1,
	},
	{
		id: 2,
		name: "John Doe",
		message: "FWD, Is was there any important message given in cless today",
		time: "16 mins",
		avater: avatar2,
	},
	{
		id: 3,
		name: "Abdalla",
		message: "Please take a print of the assignment and send me",
		time: "2 hrs",
		avater: avatar3,
	},
	{
		id: 4,
		name: "Solomon",
		message: "Please apply for Oplano..",
		time: "40 mins",
		avater: avatar4,
	},
	{
		id: 5,
		name: "Mary",
		message: "At what time are we going to meet to do thhe graup assignment?",
		time: "50 mins",
		avater: avatar5,
	},
];

/*
 * ===============================================================================
 * Notifications that are recieve from friends or other medias in the navigation bar
 * This Data NotificationsData  is used with in the Notification
 * component to render all Notifications obtain from other medias
 */

//! Icons from React Icons
import { FaCheck, FaRegUser, FaHeart } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { IoWarning } from "react-icons/io5";

export const NotificationsData = [
	{
		id: 1,
		notification: "Congraduations!",
		time: "Just Now",
		color: "#e91e63",
		icon: <FaCheck className='text-lg text-white' />,
	},
	{
		id: 2,
		notification: "Peter Manson is now following",
		time: "6 mins",
		color: "#2196f3",
		icon: <FaRegUser className='text-lg text-white' />,
	},
	{
		id: 3,
		notification: "Wilma, send you a message",
		time: "10 mins",
		color: "#673ab7",
		icon: <AiOutlineMessage className='text-lg text-white' />,
	},
	{
		id: 4,
		notification: "Jerry likes your picture",
		time: "16 mins",
		color: "pink",
		icon: <FaHeart className='text-lg text-white' />,
	},
	{
		id: 5,
		notification: "Warning!!",
		time: "20 mins",
		color: "#f1c500",
		icon: <IoWarning className='text-lg text-white' />,
	},
];

/*
 * ===============================================================================
 * Data informations that's use with in each cards in the DashboardOneCardsWripper
 * This helpp to inmprove effeciency
 */
import { LuUsers, LuUser } from "react-icons/lu";
import { FiBook } from "react-icons/fi";
import { HiMiniCurrencyDollar } from "react-icons/hi2";

const cardOneData = [
	{
		id: 1,
		label: "Total Staden...",
		number: "450",
		percentage: "45% increas...",
		color: " #4ddec1",
		value: "45",
		icon: <LuUsers className='text-4xl' />,
	},
	{
		id: 2,
		label: "New Stadents",
		number: "157",
		percentage: "40% increas...",
		color: "#ffc269",
		value: "40",
		icon: <LuUser className='text-4xl' />,
	},
	{
		id: 1,
		label: "Total Courses",
		number: "52",
		percentage: "85% increas...",
		color: "#ff6982",
		value: "85",
		icon: <FiBook className='text-4xl' />,
	},
	{
		id: 1,
		label: "Fees Collectio...",
		number: "13,921$",
		percentage: "50% increas...",
		color: "#57a5ff",
		value: "50",
		icon: <HiMiniCurrencyDollar className='text-4xl' />,
	},
];
export default cardOneData;
