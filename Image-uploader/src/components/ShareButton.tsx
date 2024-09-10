import { Button } from "./Button"
import Link from "../images/Link.svg"
// import { useState } from "react"
import {v4 as uuidv4} from "uuid";


export const ShareButton = ({setShareLink}:{
    setShareLink? : (link: string)=> void
}) => {
    // const [shareLink, setShareLink] = useState<string>("")
    const handleShare = () =>{
        const uniqueId = uuidv4();  
        const baseUrl = window.location.origin
        const imageUrl = `${baseUrl}/path-to-image/${uniqueId}`

        if(setShareLink){

            setShareLink(imageUrl)
        }
        window.location.href = imageUrl
        
        if(navigator.share){
            navigator.share({
                title:"Share Image",
                url: imageUrl
            }).catch((error) => console.error("Error Sharing", error));
        }else{
            navigator.clipboard.writeText(imageUrl).then(() =>{
                alert("Link copied to Clipboard")
            })
        }


    }
    return (
    <div className="flex justify-center">
        <Button label="Share" image={Link} onClick={handleShare}/> 
    </div>)
}