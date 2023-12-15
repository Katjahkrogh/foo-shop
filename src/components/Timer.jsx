import React from "react";
import { ConfigProvider, Statistic } from "antd";
import { useState } from "react";
const { Countdown } = Statistic;

const Timer = ({ setStep, step }) => {
  // UseState benyttet for at timer nulstiller sig selv ved nyt flow
  const [deadline, setDeadline] = useState(Date.now() + 5 * 60 * 1000);

  const onFinish = () => {
    alert("Du har mistet din reservation, da tiden er udløbet");
    setStep(0);
  };

  return (
    <div className="flex  justify-center items-baseline bg-fooGrey-900 ml-0 mr-0 p-3">
      <p className="text-base uppercase mr-2 text-fooWhite-900">Tid til at gennemføre:</p>
      <ConfigProvider
        theme={{
          components: {
            Statistic: {
              contentFontSize: 18,
            },
          },
          token: {
            colorText: "#FFFFFF",
            lineHeight: 1.2,
          },
        }}
      >
        <Countdown format="mm:ss" value={deadline} onFinish={onFinish} />
      </ConfigProvider>
    </div>
  );
};
export default Timer;
