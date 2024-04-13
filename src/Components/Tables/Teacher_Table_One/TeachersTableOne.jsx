/*
 * ===========================================================================================
 * This component TeachersTableOne is use with in the Dashboard One omponent to display
 * or render Teachers Informations or details in a tabular form
 */

import TableRow from "./Table_Rows/TableRow";
import { teachersDataOne } from "../../../Data/Data";

const TeachersTableOne = () => {
	return (
		<>
			<div className='overflow-x-auto flex-1 bg-white rounded-2xl'>
				<p className='px-6 py-3 text-2xl border-dotted border-b-4'>
					Teacher List
				</p>
				<table className='table'>
					{/* head */}
					<thead className='text-lg'>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Department</th>
							<th>Email</th>
							<th>Class Name</th>
							<th>Subject</th>
							<th>Rating</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}

						{teachersDataOne.map((data) => (
							<TableRow
								key={data.id}
								avatar={data.avater}
								name={data.name}
								department={data.department}
								email={data.email}
								classname={data.classname}
								subject={data.subject}
								rating={data.rating}
							/>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default TeachersTableOne;
