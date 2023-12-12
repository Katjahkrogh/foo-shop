import React from "react";
import { Col, ConfigProvider, Statistic } from "antd";
import { useState } from "react";
const { Countdown } = Statistic;

const Timer = ({ setStep, step }) => {
  const [deadline, setDeadline] = useState(Date.now() + 5 * 60 * 1000);

  const onFinish = () => {
    alert("Du har mistet din reservation, da tiden er udløbet");
    setStep(0);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: "#f2f2f2",
        },
      }}
    >
      <Col span={12}>
        <Countdown title="Countdown" value={deadline} onFinish={onFinish} />
      </Col>
    </ConfigProvider>
  );
};
export default Timer;
