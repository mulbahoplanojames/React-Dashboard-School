/*
 * ===========================================================================================
 * This component TeachersTableOne is use with in the Dashboard One omponent to display
 * or render Teachers Informations or details in a tabular form
 */

import { newStudentstableDataOne } from "../../../Data/Data";
import TableRowTwo from "../Teacher_Table_One/Table_Rows/TableRowTwo";

const NewStudentTableOne = () => {
	return (
		<>
			<div className='overflow-x-auto flex-1 bg-white rounded-2xl'>
				<p className='px-6 py-3 text-2xl border-dotted border-b-4'>
					New Students List
				</p>
				<table className='table'>
					{/* head */}
					<thead className='text-lg'>
						<tr>
							<th>No</th>
							<th>Name</th>
							<th>Assigned Professor</th>
							<th>Date Of Admit</th>
							<th>Fees</th>
							<th>Branch</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}

						{newStudentstableDataOne.map((data) => (
							<TableRowTwo
								key={data.id}
								number={data.number}
								name={data.name}
								assignedprofessor={data.assignedprofessor}
								dateofadmit={data.dateofadmit}
								fees={data.fees}
								branch={data.brance}
							/>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default NewStudentTableOne;
