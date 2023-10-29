import SortBtn from "./SortBtn";
import StartBtn from "./StartBtn";
import StopBtn from "./StopBtn";

import TableView from "./isTable";

import data from "../../json/data";

import React, { useState } from "react";

const ShuffleLayout = () => {
  //   let json = [...data];
  //   console.log(data);
  const [json, setJson] = useState([...data]);
  const [timer, setTimer] = useState(null);

  // 셔플 시작
  const StartShuffle = () => {
    if (timer) {
      clearInterval(timer);
    }

    const newTimer = setInterval(() => {
      shuffleEvent();

      const updatedJson = [...json];

      setJson(updatedJson);
    }, 1000);

    setTimer(newTimer);
  };

  // 셔플 알고리즘
  const shuffleEvent = () => {
    return json.sort(() => {
      return Math.random() - Math.random();
    });
  };

  // 셔플 중단 //
  const StopShuffle = () => {
    clearInterval(timer);
    const updatedJson = [...json];

    setJson(updatedJson);
  };

  // 정렬 //
  const isSortJson = () => {
    clearInterval(timer);
    isSortEvent();

    const updatedJson = [...json];
    setJson(updatedJson);
  };

  // 정렬 이벤트 //
  const isSortEvent = () => {
    json.sort((a, b) => {
      return a.price - b.price;
    });

    json.sort((a, b) => {
      return b.price - a.price;
    });

    json.sort((a, b) => {
      if (a.price === b.price) return a.id - b.id;
    });
  };

  return (
    <main>
      <div className="container">
        <ul>
          <li>
            <StartBtn StartShuffle={StartShuffle} />
          </li>
          <li>
            <StopBtn StopShuffle={StopShuffle} />
          </li>
          <li>
            <SortBtn isSortJson={isSortJson} />
          </li>
        </ul>

        <TableView json={json} />
      </div>
    </main>
  );
};

export default ShuffleLayout;
