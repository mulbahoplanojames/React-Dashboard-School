/*
 * ===========================================================================================
 * This component TableData is use with in the TeachersTableOne omponent to display
 * or render Teachers Datas obtain form the Data component  in side of the table role.
 */

import { teachersDataOne } from "../../../../Data/Data";

const TableRow = () => {
	return (
		<>
			{teachersDataOne.map((data) => (
				<tr key={data.id}>
					<td>
						<div className='flex items-center gap-3'>
							<div className='avatar'>
								<div className='mask mask-squircle w-12 h-12'>
									<img
										src='/tailwind-css-component-profile-2@56w.png'
										alt='Avatar Tailwind CSS Component'
									/>
								</div>
							</div>
							<div>
								<div className='font-bold'>Hart Hagerty</div>
								<div className='text-sm opacity-50'>United States</div>
							</div>
						</div>
					</td>
					<td>
						Zemlak, Daniel and Leannon
						<br />
						<span className='badge badge-ghost badge-sm'>
							Desktop Support Technician
						</span>
					</td>
					<td>Purple</td>
				</tr>
			))}
		</>
	);
};

export default TableRow;
