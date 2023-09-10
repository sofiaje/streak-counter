import { useOutletContext } from "react-router-dom";
import { useState } from "react"


const NewCounter = () => {
    let [info, setInfo] = useState("")
    let { streaks, setStreaks } = useOutletContext();
    

    const createNewCounter = (e, setState) => {
        e.preventDefault()
        let activity = document.getElementById("activity")
        let days = document.getElementById("days")
        
        if (activity.value && days.valueAsNumber >= 0) {
            let newStreak = {
                activity: activity.value,
                days: days.valueAsNumber,
                date: new Date().toLocaleDateString()
            }

            let newStreaks = [...streaks, newStreak]
            setStreaks(newStreaks)
            setInfo("Successfully added a new streak")

            activity.value = "";
            days.value = 0;
        } else {
            setInfo("Did you choose an activity?")
            days.value = 0;
        }
    }
    

    return (
        <div className="newCounter">
            <form id="createNewCounterForm" onSubmit={createNewCounter}>
                <label htmlFor="activity">
                    <p className="questions">Choose an activity</p>
                    <input type="text" placeholder="activity" id="activity" />
                </label>
                <label htmlFor="days">
                    <p className="questions">Starting on how many days?</p>
                    <input type="number" placeholder="0" defaultValue={0} min={0} name="days" id="days" />
                </label>
                <button type="submit">Create counter</button>
            </form>
            <p>{info}</p>
        </div>
    )
}

export default NewCounter;