import React, { useEffect, useState } from "react";

const Taskbar = () => {
    const getTimeLeft = () => {
        const diff = +new Date("2023-02-20") - +new Date();
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
                {timeLeft[interval]} {interval.charAt(0)}{" "}
            </span>
        );
    });
    return(
        <div className="taskbar">
            <div className="taskbar-os-name">DevFest 23</div>
            <div className="taskbar-countdown-timer">
                <img className="taskbar-countdown-timer-icon" alt="timer-icon" src={require("../Assets/Icons/timer-min.png")} />
                {time.length ? time : <span className="timer-text">Happy DevFest!</span>}
            </div>
        </div>
    )
}

export default Taskbar;