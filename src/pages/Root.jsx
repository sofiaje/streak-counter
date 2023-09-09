import { Outlet, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Root = () => {
    
    const getData = () => {
        const saved = localStorage.getItem("streaks");
        const data = JSON.parse(saved);
        let streakState
        data ? streakState = data : streakState = []
        return streakState
    }

    let [streaks, setStreaks] = useState(getData);


    useEffect(() => {
        localStorage.setItem("streaks", JSON.stringify(streaks))
    }, [streaks])
    
    return ( 
        <>
            <header>
                <h1>Streak Counter</h1>
                <nav>
                    <NavLink to="/streak-counter/">Home</NavLink>
                    <NavLink to="/newcounter">New counter</NavLink>
                </nav>
            </header>

            <main>
                <Outlet context={{streaks, setStreaks}} />
            </main>
            
        </>
    )
}
export default Root;