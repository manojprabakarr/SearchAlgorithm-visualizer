import React, { useState, useEffect } from "react";

function Binarysearch() {
  const [array, setarray] = useState([]);
  const [target, settarget] = useState();
  const [currentindex, setcurrentindex] = useState(-1);
  const [left, setleft] = useState(-1);
  const [right, setright] = useState(-1);
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
    setleft(left);
    var right = array.length;
    setright(right);

    while (left <= right) {
      var mid = Math.floor(left + (right - left) / 2);
      setcurrentindex(mid);
      if (array[mid] === parseInt(target)) {
        setresult(mid);
        break;
      } else if (array[mid] < target) {
        left = mid + 1;
        setleft(left);
        await sleep(1000);
      } else {
        right = mid - 1;
        setright(right);
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

        <div className="output">
          {array.map((value, index) => (
            <div
              key={index}
              className={
                index === currentindex
                  ? "node currentnode"
                  : index >= left && index <= right
                  ? "node rangenode"
                  : "node"
              }
            >
              {value}
            </div>
          ))}

          <div className="result">
            <hr />
            <br />
            {result === -1 ? (
              <div>
                <p>
                  <b style={{ color: "red" }}>Result</b> : Not Found
                </p>
              </div>
            ) : (
              <div>
                <p>
                  <b style={{ color: "red" }}>Result</b> : Found at index{" "}
                  {result}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Binarysearch;
