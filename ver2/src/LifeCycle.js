import React, { useState, useEffect } from "react";

const UnMountTest = () => {
  useEffect(() => {
    console.log("MOUNT!");

    return () => {
      console.log("UNMOUNT!!");
    };
  }, []);

  return <div>UnMount Component Test</div>;
};

const LifeCycle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);
  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UnMountTest />}
    </div>
  );
};

export default LifeCycle;
