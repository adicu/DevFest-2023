import React, { useEffect, useState } from "react";

const Taskbar = () => {
    const mobileWidth = "850px";

    const isClientMobile = () => {
      return typeof window !== "undefined" &&
        window.matchMedia(`(max-width: ${mobileWidth})`).matches
        ? true
        : false;
    };
    const [setMobile] = useState(isClientMobile());
    const [setWidth] = useState(mobileWidth);
  
    useEffect(() => {
      function handleResize() {
        setMobile(isClientMobile());
        setWidth(mobileWidth);
      }
  
      window.addEventListener("resize", handleResize);
    });

    const getTimeLeft = () => {
        const diff = +new Date("2023-02-21") - +new Date();
        var timeLeft = {};
        if (diff > 0){
            timeLeft = {
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor(diff / (1000 * 60 * 60) % 24),
                minutes: Math.floor(diff / (1000 * 60) % 60),
                seconds: Math.floor(diff / (1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setConterTime] = useState(getTimeLeft());

    useEffect(() => {
        setTimeout(() => {
            setConterTime(getTimeLeft());
        }, 1000);
    });

    const time = [];

    Object.keys(timeLeft).forEach((interval) => {
        if(!timeLeft[interval]){
            return;
        }

        time.push(
            <span className="timer-text">
                {timeLeft[interval]}{interval.charAt(0)}{" "}
            </span>
        );
    });
    return(
        <div className="taskbar">
            {!isClientMobile() 
            ?             
            <div className="taskbar-os-name">
                <span>DevFestOS</span>
            </div> 
            : 
            <img className="taskbar-devfest-logo" alt="devfest-logo" src={require("../Assets/DevFest-Logo-Outline-128.png")} /> 
            }
            
            <div className="taskbar-countdown-timer">
                <div className="taskbar-default-timer">
                    <img className="taskbar-countdown-timer-icon" alt="timer-icon" src={require("../Assets/Icons/timer-min.png")} />
                    {time.length ? time : <span className="timer-text">Happy DevFest!</span>}
                </div>
                <div className="taskbar-countdown-timer-tooltip">
                    <p>Countdown to DevFest</p>
                    <p>{time.length ? time : <span className="timer-text">Happy DevFest!</span>}</p>
                </div>                
            </div>
        </div>
    )
}

export default Taskbar;