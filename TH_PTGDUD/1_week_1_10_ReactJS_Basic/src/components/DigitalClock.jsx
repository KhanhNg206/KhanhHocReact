import { useEffect, useState } from "react";

function DigitalClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formatTime = (num) => String(num).padStart(2, "0");

    return (
        <h2>
            {formatTime(time.getHours())} :
            {formatTime(time.getMinutes())} :
            {formatTime(time.getSeconds())}
        </h2>
    );
}

export default DigitalClock;
