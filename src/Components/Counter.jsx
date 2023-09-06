import { useOutletContext } from "react-router-dom";

let Counter = ({ days, activity, index }) => {
    let { streaks, setStreaks } = useOutletContext();

    // remove from local storage
    const deleteCounter = () => {
        let newStreaks = [...streaks]
        newStreaks.splice(index, 1)
        setStreaks(newStreaks)   
    }

    return (
        <div className="counter">
            <h2>{activity}</h2>
            <p className="days">{days}</p><br />
            <div className="flex">
                <button onClick={() => {
                    let newStreaks = [...streaks]
                    newStreaks[index].days > 0 ? newStreaks[index].days -= 1 : null
                    setStreaks(newStreaks)
                }}>-</button>
                <button onClick={() => {
                    let newStreaks = [...streaks]
                    newStreaks[index].days += 1
                    setStreaks(newStreaks)
                }}>+</button>
                <button onClick={deleteCounter}>delete</button>
            </div>
        </div>
    )
}

export default Counter;