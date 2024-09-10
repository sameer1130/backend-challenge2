import { Button } from "./Button"
import Download from "../images/download.svg"
import { ShareButton } from "./ShareButton"
import { useState } from "react"


export const DownloadButton = () => {
    const [shareLink, setShareLink] = useState<string>("")
    const handleDownload = () =>{
        if(!shareLink){
            alert("NO link to share");
            return
        }
        const link = document.createElement('a');
        link.href = shareLink;
        link.download = shareLink.split("/").pop() || "download";
        document.body.removeChild(link)
    }
    return (
        <div>
            <Button label="Download" image={Download} onClick={handleDownload}/>
        </div>
    )
}