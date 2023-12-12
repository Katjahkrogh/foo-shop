import React from "react";
import { ConfigProvider, Statistic } from "antd";
import { useState } from "react";
const { Countdown } = Statistic;

const Timer = ({ setStep, step }) => {
  const [deadline, setDeadline] = useState(Date.now() + 5 * 60 * 1000);

  const onFinish = () => {
    alert("Du har mistet din reservation, da tiden er udløbet");
    setStep(0);
  };

  return (
    <div className="flex content-baseline justify-center bg-fooGrey-900 ml-0 mr-0">
      <p className="text-lg mr-2 text-fooYellow-200">Tid til at gennemføre:</p>
      <ConfigProvider
        theme={{
          components: {
            Statistic: {
              contentFontSize: 20
            },
          },
          token: {
            colorText: "#FAE499",
          },
        }}
      >
        <Countdown format="mm:ss" value={deadline} onFinish={onFinish} />
      </ConfigProvider>
    </div>
  );
};
export default Timer;
