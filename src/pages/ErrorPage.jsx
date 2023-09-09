import { NavLink } from "react-router-dom"

const ErrorPage = () => {
    return (
        <div className="error">
            <h2>Oops! Looks like we can't find what you're lookig for.</h2>
            <NavLink to="/">Go back to home page</NavLink>
        </div>
    )
}

export default ErrorPage