import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const EditUserProfile = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [file, setFile] = useState(null);
	const [isUpdated, setIsUpdated] = useState(false);

	// Handle name change event
	// Update the name state with the value from the input event
	const handleChangeName = (e) => {
		setName(e.target.value);
	};

	// Handle email change event
	// Update the email state with the value from the input event
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	//Handle password change event
	// Update the password state with the value from the input event
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleIsUpdated = () => {
		if (name != "" && email != "" && password != "") {
			return true;
		} else {
			return false;
		}
	};

	// Handle file change event
	// Update the file state with the selected file
	const handleFileChange = (e) => {
		setFile(e.target.files[0]);
	};

	const handleSubmit = (e) => {
		// Handle form submission
		e.preventDefault();

		handleIsUpdated;

		console.log(`Submitted : ${file.size}  ${file.type}  ${file.name}`);
	};

	return (
		<>
			<div className='w-full flex justify-center items-center h-screen flex-col bg-2 px-3'>
				<div className='md:w-4/5 w-full border h-fit bg-white rounded-md px-10 py-8'>
					<h1 className='text-2xl font-bold pb-6'>
						Edit User Profile from Demo
					</h1>

					<form action='' onSubmit={handleSubmit}>
						<NameInputField name={name} handleNameChange={handleChangeName} />
						<EmailInputFields
							email={email}
							handleEmailChange={handleEmailChange}
						/>
						<PasswordInputFields
							password={password}
							handlePasswordChange={handlePasswordChange}
						/>

						<label className='form-control w-full max-w-xs'>
							<div className='label'>
								<span className='label-text text-lg'>Upload Avatar</span>
							</div>
							<input
								type='file'
								className='file-input file-input-bordered w-full max-w-xs'
								onChange={handleFileChange}
								aria-invalid={false}
							/>
						</label>

						<Link
							to={isUpdated ? "/dashboard1" : "/edituserprofile"}
							className='text-lg bg-blue-300 py-1 px-5 mt-8 inline-block rounded-full text-white'
							type='button'
							onClick={() => setIsUpdated(handleIsUpdated)}
						>
							Sava Profile
						</Link>
					</form>
				</div>
			</div>
		</>
	);
};

export default EditUserProfile;

const NameInputField = ({ name, handleNameChange }) => {
	return (
		<>
			<div className='flex justify-between items-center  gap-4 mb-6'>
				<div className='w-full'>
					<label htmlFor='name' className='pb-1 inline-block text-base'>
						First Name
					</label>
					<br />
					<input
						type='text'
						name='name'
						className='border h-9 w-full'
						value={name}
						onChange={handleNameChange}
					/>
					<br />
				</div>
				<div className='w-full'>
					<label htmlFor='lastname' className='pb-1 inline-block text-base'>
						Last Name
					</label>
					<br />
					<input type='text' name='name' className='border w-full h-9' />
				</div>
			</div>
		</>
	);
};

const EmailInputFields = ({ email, handleEmailChange }) => {
	return (
		<>
			<div className='flex justify-between items-center gap-4 mb-4'>
				<div className='w-full'>
					<label htmlFor='name' className='pb-1 inline-block text-base'>
						Enter Email
					</label>
					<br />
					<input
						type='email'
						name='name'
						value={email}
						required
						onChange={handleEmailChange}
						pattern='[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$'
						className='border h-9 w-full'
					/>
					<br />
				</div>
				<div className='w-full'>
					<label htmlFor='lastname' className='pb-1 inline-block text-base'>
						Confirm Email
					</label>
					<br />
					<input
						type='email'
						name='name'
						required
						pattern='[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$'
						className='border w-full h-9'
					/>
				</div>
			</div>
		</>
	);
};

const PasswordInputFields = ({ password, handlePasswordChange }) => {
	const [confirmPassword, setConfirmPassword] = useState("");
	const [IsShowPassword, setIsShowPassword] = useState(false);
	const [IsShowConfirmPassword, setIsConfirmShowPassword] = useState(false);

	const handleShowPassword = () => {
		setIsShowPassword((prevPassword) => !prevPassword);
	};

	const handleConfirmPasswordChange = (e) => {
		setConfirmPassword(e.target.value);
	};

	const handleShowConfirmPassword = () => {
		setIsConfirmShowPassword((prevPassword) => !prevPassword);
	};

	return (
		<>
			<div className='flex justify-between items-center gap-4 mb-4'>
				<div className='w-full'>
					<label htmlFor='name' className='pb-1 inline-block text-base'>
						Enter Password
					</label>
					<br />
					<div className='w-full h-9 bg-white rounded-sm overflow-hidden border flex justify-between items-center gap-2 pr-2'>
						<input
							type={IsShowPassword ? "text" : "password"}
							name='password'
							className='outline-none border-none  w-full h-full rounded-sm pl-5'
							value={password}
							onChange={handlePasswordChange}
							required
							minLength={6}
							maxLength={12}
						/>
						{IsShowPassword ? (
							<FaEyeSlash
								className='text-2xl text-red-600 cursor-pointer '
								onClick={handleShowPassword}
							/>
						) : (
							<FaEye
								className='text-2xl text-red-600 cursor-pointer '
								onClick={handleShowPassword}
							/>
						)}
					</div>
				</div>
				<div className='w-full'>
					<label htmlFor='lastname' className='pb-1 inline-block text-base'>
						Confirm Password
					</label>

					<div className='w-full h-9 bg-white rounded-sm overflow-hidden border flex justify-between items-center gap-2 pr-2'>
						<input
							type={IsShowConfirmPassword ? "text" : "password"}
							name='password'
							className='outline-none border-none  w-full h-full rounded-sm pl-5'
							value={confirmPassword}
							onChange={handleConfirmPasswordChange}
							required
							minLength={6}
							maxLength={12}
						/>
						{IsShowConfirmPassword ? (
							<FaEyeSlash
								className='text-2xl text-red-600 cursor-pointer '
								onClick={handleShowConfirmPassword}
							/>
						) : (
							<FaEye
								className='text-2xl text-red-600 cursor-pointer '
								onClick={handleShowConfirmPassword}
							/>
						)}
					</div>
				</div>
			</div>
		</>
	);
};
