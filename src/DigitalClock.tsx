import React, {useState, useEffect} from 'react';

function DigitalClock() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000)
    }, [time])

    return(
        <div className="backdrop-blur-md w-lvw pt-3 pb-6">
            <div className="flex justify-center items-center text-white text-9xl text-shadow-lg font-semibold">
                <span className="">00:00:00</span>
            </div>
        </div>
    )
}

export default DigitalClock