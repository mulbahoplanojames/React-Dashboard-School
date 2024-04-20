import { professorsList } from "../../Data/Data";

const ProfessorsList = () => {
	return (
		<>
			<div className='flex-1 bg-white h-fit rounded-md py-4 '>
				<h1 className='text-xl font-bold border-b-2 border-dotted pb-3 pl-8'>
					Professors List
				</h1>

				{professorsList.map((data) => (
					<div className='flex px-5 py-4 gap-6' key={data.id}>
						<div className='avatar'>
							<div className='w-12 h-12 rounded-full'>
								<img src={data.avatar} />
							</div>
						</div>
						<div>
							<h1 className='text-base'>{data.name}</h1>
							<p style={{ color: `${data.color}` }} className='text-sm'>
								{data.status}
							</p>
						</div>
						<div className=''></div>
					</div>
				))}
			</div>
		</>
	);
};

export default ProfessorsList;
