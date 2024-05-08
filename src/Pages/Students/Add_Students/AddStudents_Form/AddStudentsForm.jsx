const AddStudentsForm = () => {
  return (
    <>
      <section className="h-52 w-full bg-white rounded-md shadow-md">
        <h1 className=" px-5 py-2 text-lg font-semibold border-b-2 border-red-200 border-dotted">
          Basic Information
        </h1>
        <div className=" px-5 py-10">
          <Names />
        </div>
      </section>
    </>
  );
};

const Names = () => {
  return (
    <div className=" px-5 py-10">
      <div className="gap-x-8 grid grid-cols-2">
        <input
          type="text"
          placeholder="First Name"
          className="inline-block w-full py-2 mr-5 border-b-2 outline-none"
        />
        <input
          type="text"
          placeholder="Last Name"
          className=" w-full py-2 border-b-2 outline-none"
        />
      </div>
    </div>
  );
};

export default AddStudentsForm;
