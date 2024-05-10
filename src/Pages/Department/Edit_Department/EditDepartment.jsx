import DashboardOneHeader from "../../../Components/Dashboard_1_Header/DashboardOneHeader";

/**
 * @description AddDepartment Component
 * This is a functional component that is responsible for rendering the AddDepartment Page
 */
const EditDepartment = () => {
  return (
    // section container to hold everything on this page
    <section className="md:px-5 bg-1 px-3 py-10">
      {/* Dashboard Header Component */}
      <DashboardOneHeader text="Add Department" />
      {/* AddDepartmentForm component to render the form */}
    </section>
  );
};

export default EditDepartment;
