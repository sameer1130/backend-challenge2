import { Button } from "./Button"
import Download from "../images/download.svg"


export const DownloadButton = () => {
    return (
        <div>
            <Button label="Download" image={Download} />
        </div>
    )
}