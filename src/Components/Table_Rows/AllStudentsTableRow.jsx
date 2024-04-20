/*
 * ===========================================================================================
 * This component TableRow is use with in the TeachersTableOne omponent to display
 * or render Teachers Datas obtain form the Data component  in side of the table role.
 */

const AllStudentsTableRow = (props) => {
	const {
		avatar,
		studentname,
		department,
		email,
		mobile,
		rollnumber,
		rating,
		admissiondate,
		action,
	} = props;

	return (
		<>
			<tr className='hover:bg-slate-200'>
				<td>
					<div className='avatar'>
						<div className='mask mask-squircle w-8 h-8'>
							<img src={avatar} alt={avatar} />
						</div>
					</div>
				</td>
				<td>
					<div>
						<p className='text-sm'>{rollnumber}</p>
					</div>
				</td>
				<td>
					<div>
						<p className='text-sm'>{studentname}</p>
					</div>
				</td>
				<td>
					<span className='text-sm'>{department}</span>
				</td>
				<td>
					<p className='text-sm'>{mobile}</p>
				</td>
				<td>
					<p className='text-sm'>{email}</p>
				</td>
				<td>
					<p className='text-sm'>{admissiondate}</p>
				</td>
				<td>
					<p className='text-sm'>{action}</p>
				</td>
			</tr>
		</>
	);
};

export default AllStudentsTableRow;
