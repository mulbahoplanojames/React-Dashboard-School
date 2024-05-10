import { Link } from "react-router-dom";
import { allStudentsTableData } from "../../../Constants/Constants";
import AllStudentsTableRow from "../../../Components/Table_Rows/AllStudentsTableRow";

/**
 * @description This is a component for All Students Table, this component is used with in
 * the All Studen component to display or render All Students Informations or details in
 * a tabular form.
 * @returns {JSX.Element}
 */
const AllDepartmentTable = () => {
  return (
    // !Container div
    <>
      <div className="rounded-xl overflow-y-clip h-fit w-full overflow-x-auto bg-white">
        <p className="px-6 py-3 text-lg font-bold border-b-4 border-dotted">
          All Students List
        </p>

        {/* // !Buttons  */}
        <div className=" px-6 py-4">
          <Link to="">
            <button className="px-4 py-1 text-base text-white bg-blue-400 rounded-sm">
              Add New<span className="pl-2">+</span>
            </button>
          </Link>
        </div>

        {/* //! Table and Table Data  */}
        <table className="table text-center bg-white border">
          {/* head */}
          <thead>
            <tr className="text-base font-bold border">
              <th></th>
              <th>Roll No</th>
              <th>Name</th>
              <th>Department</th>
              <th>Mobile Details</th>
              <th>Email</th>
              <th>Admission Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allStudentsTableData.map((data) => (
              <AllStudentsTableRow
                // , name, , email, mobile, rollnumber, rating, admissiondate, acion
                key={data.id}
                avatar={data.avatar}
                rollnumber={data.rollnumber}
                studentname={data.name}
                department={data.department}
                mobile={data.mobile}
                email={data.email}
                admissiondate={data.admissiondate}
                action={data.action}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllDepartmentTable;
