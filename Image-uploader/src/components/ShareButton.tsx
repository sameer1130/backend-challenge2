import { Button } from "./Button"
import Link from "../images/Link.svg"


export const ShareButton = () => {
    return (
    <div className="flex justify-center">
        <Button label="Share" image={Link} /> 
    </div>)
}