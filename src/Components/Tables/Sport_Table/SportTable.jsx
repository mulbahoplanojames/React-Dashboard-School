import { studentSportData } from "../../../Data/Data";
import Checkbox from "../../CheckBox/Checkbox";
import TableRowThree from "../Teacher_Table_One/Table_Rows/TableRowThree";

const SportTable = () => {
	return (
		<>
			<div className='overflow-x-auto bg-white w-[700px] rounded-xl'>
				<p className='px-6 py-3 text-2xl border-dotted border-b-4'>
					Student Sport List
				</p>

        {/* // !Buttons  */}
				<div className='flex justify-between'>
					<button className='bg-blue-400 text-white rounded-sm text-lg p-2'>
						Add New
					</button>

					<button className='bg-pink-600 text-white rounded-sm text-lg p-2'>
						Tools
					</button>
				</div>
				<table className='table border'>
					{/* head */}
					<thead>
						<tr>
							<th>
								<Checkbox />
							</th>
							<th>Student Name</th>
							<th>Assigned Coach</th>
							<th>Date</th>
							<th>Time</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						{studentSportData.map((data) => (
							<TableRowThree
								key={data.id}
								studentname={data.Studentname}
								assigncoach={data.AssignedCoach}
								data={data.Date}
								time={data.Time}
								action={data.Actions}
							/>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default SportTable;
