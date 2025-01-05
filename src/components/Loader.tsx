import { FaSpinner } from "react-icons/fa"
import classes from "./Loadeer.module.css"

const Loader = () => {
  return (
    <>
        <FaSpinner className={classes.loader}/>
    </>
  )
}

export default Loader