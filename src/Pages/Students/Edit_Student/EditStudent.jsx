import DashboardOneHeader from "../../../Components/Dashboard_1_Header/DashboardOneHeader";
import EditStudentForm from "./EditStudentForm";

const EditStudent = () => {
  return (
    <>
      <section className="md:px-5 bg-1 px-3 py-10">
        <DashboardOneHeader text="Edit Student" />
        <EditStudentForm />
      </section>
    </>
  );
};

export default EditStudent;
