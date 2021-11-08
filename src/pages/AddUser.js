import React, { useContext, useState } from "react";
import { Button, InputBox } from "../components";
import { AppContext } from "../context/AppContext";

const AddUser = () => {
  const { state, addUser } = useContext(AppContext);
  const [employeeId, setEmployeeId] = useState("");
  const [empName, setEmpName] = useState("");
  console.log(state);

  const onChangeEmployeeId = (event) => {
    setEmployeeId(event?.currentTarget?.value);
  };

  const onChangeEmployeeName = (event) => {
    setEmpName(event?.currentTarget?.value);
  };

  const addRecords = () => {
    addUser({
      user: { name: empName, empId: employeeId },
    });
  };

  return (
    <div className="form">
      <InputBox
        label="Employee ID"
        placeholder="Type your employee Id"
        onChange={onChangeEmployeeId}
        value={employeeId}
      />
      <InputBox
        label="Employee Name"
        placeholder="Type your user name"
        onChange={onChangeEmployeeName}
        value={empName}
      />
      <Button label="Add" onClick={addRecords} disable={false} />
    </div>
  );
};

export default AddUser;
