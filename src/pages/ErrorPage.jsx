import { NavLink } from "react-router-dom"

const ErrorPage = () => {
    return (
        <>
            <h2>Oops! Looks like we can't find what you're lookig for.</h2>
            <NavLink to="/">Go back to home page</NavLink>
        </>
    )
}

export default ErrorPage