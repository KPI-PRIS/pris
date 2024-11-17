import {Link} from "react-router-dom";

export default function MainPage() {
    return (
        <>
            <Link to='/users'> Go to users</Link>
            <Link to='/teams'> Go to teams</Link>
        </>

    )
}