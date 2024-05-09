import { useState } from "react";

const EditStudent = () => {
  const [firstName, setFirstName] = useState("Oplano");
  const [lastName, setLastName] = useState("Mulbah");
  const [rollNumber, setRollNumber] = useState("202211089");
  const [email, setEmail] = useState("james@gmail.com");
  const [courseName, setCourseName] = useState("Computer Science");
  const [registractionDate, setRegistrationDate] = useState("12/12/2022");
  const [mobileNumber, setMobileNumber] = useState("+250-789-677-897");
  const [gender, setGender] = useState("Male");
  const [birthDate, setBirthDate] = useState("17/08/2002");
  const [bloodgroup, setBloodGroup] = useState("A+");
  const [address, setAddress] = useState("Kigali, Rwanda");

  return (
    <>
      <section className="h-fit w-full pb-10 bg-white rounded-md shadow-md">
        <h1 className=" px-5 py-2 text-lg font-semibold border-b-[2px] border-gray-400 border-dotted">
          Basic Information
        </h1>
        <div className=" px-5 py-6">
          <Names
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
          />
          <RollNumber_Email
            rollNumber={rollNumber}
            setRollNumber={setRollNumber}
            email={email}
            setEmail={setEmail}
          />
          <RegistrationDate_Class
            courseName={courseName}
            setCourseName={setCourseName}
            registractionDate={registractionDate}
            setRegistrationDate={setRegistrationDate}
          />
          <Gender_MobileNumber
            gender={gender}
            setGender={setGender}
            mobileNumber={mobileNumber}
            setMobileNumber={setMobileNumber}
          />
          <BirthDate_BloodGroup
            bloodgroup={bloodgroup}
            setBloodGroup={setBloodGroup}
            birthDate={birthDate}
            setBirthDate={setBirthDate}
          />
          <Address address={address} setAddress={setAddress} />
        </div>

        <div className="pl-[24rem] ">
          <button className="tw_btn mr-8 bg-blue-500">Submit</button>
          <button className="tw_btn bg-red-500">Cancel</button>
        </div>
      </section>
    </>
  );
};

const Names = ({ firstName, setFirstName, lastName, setLastName }) => {
  return (
    <div className=" px-5 py-10">
      <div className="gap-x-8 grid grid-cols-2">
        <input
          type="text"
          placeholder="First Name"
          className="border-b-[2px] inline-block w-full py-2 mr-5 outline-none focus:border-blue-500 focus:border-blue-700"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className=" w-full py-2 border-b-[2px] outline-none focus:border-blue-500 "
        />
      </div>
    </div>
  );
};

const RollNumber_Email = ({ rollNumber, setRollNumber, email, setEmail }) => {
  return (
    <div className=" px-5 py-10">
      <div className="gap-x-8 grid grid-cols-2">
        <input
          type="number"
          required
          placeholder="Roll No"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
          className="inline-block w-full py-2 mr-5 border-b-[2px] outline-none focus:border-blue-500"
        />
        <input
          type="emai"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className=" w-full py-2 border-b-[2px] outline-none focus:border-blue-500"
        />
      </div>
    </div>
  );
};

const RegistrationDate_Class = ({
  courseName,
  setCourseName,
  registractionDate,
  setRegistrationDate,
}) => {
  return (
    <div className=" px-5 py-10">
      <div className="gap-x-8 grid grid-cols-2">
        <select
          name="class"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          id="class"
          className="inline-block w-full py-2 mr-5 bg-transparent border-b-[2px] outline-none focus:border-blue-500"
        >
          <option value="male">Computer Science</option>
          <option value="female">Finance</option>
          <option value="other">Mathematics</option>
          <option value="other">International Relogion</option>
          <option value="other">Public and Private Law</option>
        </select>
        <input
          type="text"
          required
          name="registrationdate"
          id="registrationdate"
          onFocus={(e) => (e.target.type = "date")}
          value={registractionDate}
          onChange={(e) => setRegistrationDate(e.target.value)}
          placeholder="Registration Date"
          className="inline-block w-full py-2 mr-5 border-b-[2px] outline-none focus:border-blue-500"
        />
      </div>
    </div>
  );
};

const Gender_MobileNumber = ({
  gender,
  setGender,
  mobileNumber,
  setMobileNumber,
}) => {
  return (
    <div className=" px-5 py-10">
      <div className="gap-x-8 grid grid-cols-2">
        <input
          type="text"
          placeholder="Mobile Number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          className=" w-full py-2 border-b-[2px] outline-none focus:border-blue-500"
        />
        <select
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          id="gender"
          placeholder="Gender"
          className="inline-block w-full py-2 mr-5 bg-transparent border-b-[2px] outline-none focus:border-blue-500"
        >
          <option value="gender" disabled selected hidden>
            Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
    </div>
  );
};

const BirthDate_BloodGroup = ({
  bloodgroup,
  setBloodGroup,
  birthDate,
  setBirthDate,
}) => {
  return (
    <div className=" px-5 py-10">
      <div className="gap-x-8 grid grid-cols-2">
        <input
          type="text"
          name="birthdate"
          id="birthdate"
          required
          onFocus={(e) => (e.target.type = "date")}
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          className="inline-block w-full py-2 mr-5 border-b-[2px] outline-none focus:border-blue-500 "
        />
        <input
          type="text"
          name="bloodgroup"
          placeholder="Blood Group"
          id="bloodgroup"
          value={bloodgroup}
          onChange={(e) => setBloodGroup(e.target.value)}
          className="inline-block w-full py-2 mr-5 border-b-[2px] outline-none focus:border-blue-500 "
        />
      </div>
    </div>
  );
};

const Address = ({ address, setAddress }) => {
  return (
    <div className=" px-5 pb-4">
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Address"
        className="inline-block w-full py-6 border-b-[2px] outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default EditStudent;
