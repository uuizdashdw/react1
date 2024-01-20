import React, { useState, useEffect } from "react";

const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`UPDATED ::: COUNT : ${count}`);
  });

  return <div>{count}</div>;
});

const CounterB = ({ obj }) => {
  useEffect(() => {
    console.log(`UPDATED ::: OBJ.COUNT : ${obj.count}`);
  });

  return <div>{obj.count}</div>;
};

const areEqual = (prev, next) => {
  // prev === next => return true; =>  Re-Render X
  // prev !== next => return false; =>  Re-Render O

  return prev.obj.count === next.obj.count;
};

const MemoizedCounterB = React.memo(CounterB, areEqual);

const OptimizedTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Count</h2>
        <button onClick={() => setCount(count)}>A Button</button>

        <CounterA count={count} />
      </div>
      <div>
        <h2>OBJ</h2>
        <button
          onClick={() =>
            setObj({
              count: obj.count,
            })
          }
        >
          B Button
        </button>

        <MemoizedCounterB obj={obj} />
      </div>
    </div>
  );
};

export default OptimizedTest;
