import { useState } from "react";
const DurationIndicatior = ({ time }) => {
  const [duration, setDuration] = useState(time);

  return (
    <div className="outer-box">
      <div className="inner-box" style={{}}></div>
    </div>
  );
};

export default DurationIndicatior;
