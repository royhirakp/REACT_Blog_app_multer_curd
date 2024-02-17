import React, { useState } from "react";

const ReadmoreLess = ({ children }) => {
  const [readMstatus, setReadMstatus] = useState(false);

  return (
    <div>
      {readMstatus ? children : children.substring(0, 5)}
      {children.length > 5 ? (
        <button
          onClick={() => {
            setReadMstatus(!readMstatus);
          }}
          style={{ color: "red", border: "none", cursor: "pointer" }}
        >
          {!readMstatus ? "read more..." : "...read less"}
        </button>
      ) : null}
    </div>
  );
};

export default ReadmoreLess;
