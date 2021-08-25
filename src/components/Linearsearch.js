import React, { useState, useEffect } from "react";
import "./linear.css";

function Linearsearch() {
  const [array, setarray] = useState([]);
  const [value, setvalue] = useState();
  const [search, setsearch] = useState(-1);
  const [result, setresult] = useState(-1);

  const randomnumber = () => {
    var temparray = [];
    for (let i = 0; i < 15; i++) {
      var number = Math.floor(Math.random() * (100 - 1) + 1);
      temparray.push(number);
    }
    setarray(temparray);
  };

  useEffect(() => {
    randomnumber();
  }, []);

  const linearSearch = async () => {
    for (let i = 0; i < array.length; i++) {
      setTimeout(() => {
        setsearch(i);
      }, i * 1000);
      setsearch(i + 1);
      if (array[i] === parseInt(value)) {
        setsearch(i);
        setTimeout(() => {
          setresult(i);
        }, 4000);

        break;
      }
    }
  };

  return (
    <div className="linear">
      <h1>Linear search</h1>

      <div className="body">
        <div className="body1">
          <button id="button" onClick={randomnumber}>
            Generate new array
          </button>
          <div className="body2">
            <input
              type="number"
              onChange={(e) => setvalue(e.target.value)}
              placeholder="enter a number want to find"
            />
            <button id="button" onClick={linearSearch}>
              visualize
            </button>
          </div>
        </div>

        <div className="output">
          {array.map((value, index) => (
            <div
              key={index}
              className={index === search ? "node currentnode" : "node"}
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

export default Linearsearch;
