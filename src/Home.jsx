import { useState } from "react"
import Dashboard from "./Dashboard"
import Menu from "./Menu"
import { CommonComponent } from "./CommonComponent"

function Home() {
    const [toggle, setToggle] = useState(false)
    return (
        <div>
            <h1 onClick={() => setToggle(true)}>Home page</h1>
            {
                toggle ? <Dashboard /> : <Menu />
            }
            <CommonComponent about img={"https://images.pexels.com/photos/26955132/pexels-photo-26955132/free-photo-of-the-singapore-ferris-wheel-at-night.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} />
        </div>
    )
}

export default Home

//ternary operator