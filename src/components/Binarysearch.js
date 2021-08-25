import React, { useState, useEffect } from "react";

function Binarysearch() {
  const [array, setarray] = useState([]);
  const [target, settarget] = useState();
  const [currentindex, setcurrentindex] = useState(-1);
  const [leftindex, setleftindex] = useState(-1);
  const [rightindex, setrightindex] = useState(-1);
  const [result, setresult] = useState(-1);

  const randomdigit = () => {
    var temparray = [];
    var number = Math.floor(Math.random() * (100 - 1) + 1);
    for (var i = number; i < number + 15; i++) {
      temparray.push(i);
    }
    setarray(temparray);
  };

  useEffect(() => {
    randomdigit();
  }, []);

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const Binarysearch = async () => {
    var left = 0;
    setleftindex(left);

    var right = array.length;
    setrightindex(right);

    while (left <= right) {
      var mid = Math.floor(left + (right - left) / 2);
      setcurrentindex(mid);
      if (array[mid] === parseInt(target)) {
        setresult(mid);
        break;
      } else if (array[mid] < target) {
        left = mid + 1;
        setleftindex(left);
        await sleep(1000);
      } else {
        right = mid - 1;
        setrightindex(right);
        await sleep(1000);
      }
    }
  };

  return (
    <div className="linear">
      <h1>Binary search</h1>

      <div className="body">
        <div className="body1">
          <button id="button" onClick={randomdigit}>
            Generate new array
          </button>
          <div className="body2">
            <input
              type="number"
              value={target}
              onChange={(e) => settarget(e.target.value)}
              placeholder="enter a number want to find"
            />
            <button id="button" onClick={Binarysearch}>
              visualize
            </button>
          </div>
        </div>

        <div className="output"></div>
      </div>
    </div>
  );
}

export default Binarysearch;
