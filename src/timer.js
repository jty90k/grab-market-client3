import React from "react";

function TimerComponent() {
  const [time, setTime] = React.useState(0);
  console.log("컴포넌트 업데이트");
  React.useEffect(function () {
    setTime(time + 1);
  }, []);
  return (
    <div>
      <h2>{time}초</h2>
      <button>1씩 올라갑니다.</button>
    </div>
  );
}

export default TimerComponent;
