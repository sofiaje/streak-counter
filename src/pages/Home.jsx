import Counter from "../Components/Counter";
import { useOutletContext, NavLink } from "react-router-dom";

const Home = () => {
    let { streaks } = useOutletContext();

    return (
        <>
            <div className="counterWrapper">
                {streaks.length > 0 ? streaks.map((streak, i) => (<Counter {...streak} index={i} key={i} />)) : <div><p>No current streaks, challenge yourself by starting a new streak <NavLink to="/newcounter"> here</NavLink></p></div>}
            </div>
        </>
    )
}

export default Home;