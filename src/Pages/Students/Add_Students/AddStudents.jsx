import DashboardOneHeader from "../../../Components/Dashboard_1_Header/DashboardOneHeader";
import AddStudentsForm from "./AddStudents_Form/AddStudentsForm";

const AddStudents = () => {
  return (
    <>
      <section className="md:px-5 bg-1 px-3 py-10">
        <DashboardOneHeader text="Add Student" />

        <AddStudentsForm />
      </section>
    </>
  );
};

export default AddStudents;
