import { useOutletContext } from "react-router-dom";

let Counter = ({ days, activity, index, date }) => {
    let { streaks, setStreaks } = useOutletContext();
    console.log(streaks)

    // remove from local storage
    const deleteCounter = () => {
        let newStreaks = [...streaks]
        newStreaks.splice(index, 1)
        setStreaks(newStreaks)   
    }

    return (
        <div className="counter">
            <h2>{activity}</h2>
            <p className="days">{days}</p>
            <p><small>updated: {date}</small></p>
            <div className="flexBtn">
                <button onClick={() => {
                    let newStreaks = [...streaks]
                    newStreaks[index].days > 0 ? newStreaks[index].days -= 1 : null
                    newStreaks[index].date = new Date().toLocaleDateString()
                    setStreaks(newStreaks)
                }}>-</button>
                <button onClick={() => {
                    let newStreaks = [...streaks]
                    newStreaks[index].days += 1
                    newStreaks[index].date = new Date().toLocaleDateString()
                    setStreaks(newStreaks)
                }}>+</button>
                <button onClick={deleteCounter}>delete</button>
            </div>
        </div>
    )
}

export default Counter;