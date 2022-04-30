import React, { useState,useCallback } from 'react'

export default function Mouse() {
    const [counter, setCounter] = useState(0)
    const [dCounter, setDcounter] = useState(0)
    const [tCounter, setTcounter] = useState(0)

    const plusCountRender=(count)=>{
        return count+1
        }

    function counters() {
        setCounter(counter + 1)
        debounceHandling()
        throttleHandling()

    }



  const debounceHandling = useCallback(
    myDebounce(() => {
      setDcounter(plusCountRender);
    }, 1000),
    []
  );

  const throttleHandling = useCallback(
    thruttle(() => {
      setTcounter(plusCountRender);
    }, 1000),
    []
  );

    function myDebounce(cb, delay) {
        let lastTimeOut;
        return (...args) => {
            if (lastTimeOut) {
                clearTimeout(lastTimeOut);
            }
            lastTimeOut = setTimeout(() => {
                cb(...args);
            }, delay);
        };
    }

    //thtuttle
    function thruttle(cb, delay) {
        let shouldWait = false;
        let lastArgs;
        const timeoutFunc = () => {
            if (shouldWait == null) {
                shouldWait = false;
            } else {
                cb(...shouldWait);
                shouldWait = null;
                setTimeout(timeoutFunc, delay);
            }
        };
        return (...args) => {
            if (shouldWait === true) {
                lastArgs = args;
                return;
            }
            cb(...args);
            shouldWait = true;
            setTimeout(() => {
                shouldWait = false;
                if (lastArgs) {
                    cb(...lastArgs);
                }
            }, delay);
        };
    }


    return (
        <div style={{ width: '100%', height: '100vh' }} onMouseMove={counters} >
            <p>normal:{counter}</p>
            <p>debounce:{dCounter}</p>
            <p>thruttle:{tCounter}</p>
        </div>
    )
}
