import React, { useState, useEffect } from "react";

export const Error_reminder = (props) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {visible && (
        <div>
          <h1>{props.error}</h1>
        </div>
      )}
    </div>
  );
};
