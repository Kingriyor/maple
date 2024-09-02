import React, { useState, useEffect } from 'react';

function Time(){
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        updateProgress();
      }, [hours, minutes]);

    const updateProgress = () => {
        const totalMinutesInDay = 24 * 60;
        const inputMinutes = hours * 60 + minutes;
        const now = new Date();
        // const currentMinutes = now.getHours() * 60 + now.getMinutes();
        const currentMinutes = hours * 60 + minutes;
        const progressPercentage = ((currentMinutes / totalMinutesInDay) * 100).toFixed(2);
        setProgress(progressPercentage);
      };

      return <div>
      <h1>Time Progress</h1>
      <label>
        Hours:
        <input
          type="number"
          value={hours}
          onChange={(e) => setHours(parseInt(e.target.value, 10) || 0)}
          min="0"
          max="23"
        />
      </label>
      <br/>
      <label>
        Minutes:
        <input
          type="number"
          value={minutes}
          onChange={(e) => setMinutes(parseInt(e.target.value, 10) || 0)}
          min="0"
          max="59"
        />
      </label>
      <div>
        <strong>Progress:</strong> {progress}%
      </div>
      </div>
}

export default Time;