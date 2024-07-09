import { useState } from "react"
import Dashboard from "./Dashboard"
import Menu from "./Menu"

function Home() {
    const [toggle, setToggle] = useState(false)
    return (
        <div>
            <h1 onClick={() => setToggle(true)}>Home page</h1>
            {
                toggle ? <Dashboard /> : <Menu />
            }
        </div>
    )
}

export default Home

//ternary operator