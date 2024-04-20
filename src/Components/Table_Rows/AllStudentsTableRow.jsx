/*
 * AllStudentsTableRow component
 * This component is used to display a single row of student data in the
 * All Students table on the Dashboard
 */
const AllStudentsTableRow = (props) => {
	// Destructure props
	const {
		avatar, // Student avatar URL
		studentname, // Student name
		department, // Student department
		email, // Student email
		mobile, // Student mobile
		rollnumber, // Student roll number
		rating, // Student rating
		admissiondate, // Student admission date
		action, // Action buttons (Edit, Delete, etc.)
	} = props;

	return (
		// Return a <tr> element
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
	);
};

export default AllStudentsTableRow;
