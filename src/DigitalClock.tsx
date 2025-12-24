import React, {useState, useEffect} from 'react';

setInterval(() => {
    console.log(`${(new Date()).getHours()}:${(new Date()).getMinutes()}:${(new Date()).getSeconds()}`)
}, 1000)

function DigitalClock() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [time])

    function formatTime() {
        let hours = time.getHours()
        let minutes = time.getMinutes()
        let seconds = time.getSeconds()
        let meridiem = hours >= 12 ? "PM" : "AM"

        hours = hours % 12 || 12

        let paddedHours = String(hours).padStart(2,'0')
        let paddedMinutes = String(minutes).padStart(2,'0')
        let paddedSeconds = String(seconds).padStart(2,'0')

        return `${paddedHours}:${paddedMinutes}:${paddedSeconds} ${meridiem}`
    }

    return(
        <div className="backdrop-blur-md w-lvw pt-3 pb-6">
            <div className="flex justify-center items-cente">
                <span className="text-center text-white text-7xl sm:text-8xl text-shadow-lg font-semibold">{formatTime()}</span>
            </div>
        </div>
    )
}

export default DigitalClock