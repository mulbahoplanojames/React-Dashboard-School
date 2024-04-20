import StudentCard from "../../../../Components/Cards/Student_Card/StudentCard";
import { allStudentsGridViewData } from "../../../../Constants/Constants";

const GridView = () => {
	return (
		<>
			<div className='grid lg:grid-cols-3 md:grid-cols-2 place-items-center gap-6'>
				{allStudentsGridViewData.map((item) => (
					<StudentCard
						key={item.id}
						avatar={item.avatar}
						name={item.name}
						subject={item.subject}
						location={item.location}
						city={item.city}
						contact={item.contact}
					/>
				))}
			</div>
		</>
	);
};

export default GridView;
