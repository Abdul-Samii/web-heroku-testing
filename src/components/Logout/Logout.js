import { useHistory } from "react-router"

export const Logout=()=>{
    const history = useHistory()
localStorage.clear()
let count = 0
history.push('/',{count});
}