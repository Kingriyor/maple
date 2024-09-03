import { useEffect, useState } from "react";

class CTime {
  h: number;
  m: number;
  constructor(h: number, m: number) {
    this.h = h || 0;
    this.m = m || 0;
  }
  //   setCTimeHour(h: number) {
  //     this.h = h || 0;
  //   }
  //   setCTimeMin(m: number) {
  //     this.m = m || 0;
  //   }
  setCTime(h: number, m: number) {
    this.h = h || 0;
    this.m = m || 0;
  }
  getCTime(): number[] {
    return [this.h, this.m];
  }
}

function MyTime() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [progress, setProgress] = useState(0);
  let mt = new CTime(hour, minute);

  const updateCalc = () => {
    mt.setCTime(hour, minute);
    console.log(mt);
    const minsADay = 24 * 60;
    const hourToMins = hour * 60;
    const currentMinCount = minute + hourToMins;
    const currentProgress = parseFloat(
      ((currentMinCount / minsADay) * 100).toFixed(2)
    );
    setProgress(currentProgress);
    setProgress(currentProgress);
  };

  // This runs at every render and also re-render of this component due to state change
  useEffect(() => {
    updateCalc();
  });

  return (
    <>
      <h2>MyTime</h2>
      <label>Hour</label>
      <input
        type="number"
        value={hour}
        onChange={(e) => {
          setHour(parseInt(e.target.value));
        }}
        min="0"
        max="23"
      />

      <label>Minutes</label>
      <input
        type="number"
        value={minute}
        onChange={(e) => {
          setMinute(parseInt(e.target.value));
        }}
        min="0"
        max="59"
      />

      <div>
        <strong>Progress:</strong> {progress}%
      </div>
    </>
  );
}
export default MyTime;
