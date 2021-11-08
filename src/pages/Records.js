import React, { useContext } from "react";

import { AppContext } from "../context/AppContext";

const Records = () => {
  const { state } = useContext(AppContext);
  const { users = [] } = state;
  console.log(`Modify User`, state);
  return (
    <div className="form">
      List of Records
      {users.map((user, index) => {
        return (
          <div key={`records${index}`} className="records">
            <label className="records_eName">Employee Name</label>
            {user.name}
            <label className="records_eId">Employee Id</label>
            {user.empId}
          </div>
        );
      })}
    </div>
  );
};

export default Records;
