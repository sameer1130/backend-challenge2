import Upload from "../images/exit.svg"

export const DragAndDrop = ({lightMode}:{
    lightMode: boolean
}) => {
    return <div>
        <div className={`flex item-center-justify-center rounded-lg ${lightMode ? "bg-white" : "bg-darkgray"} `}> 
            <div className={`m-2 flex items-center justify-center  max-w-xl p-4 border-2  border-dashed rounded-lg ${lightMode ? "border-lightgray" : "border-graytext"}`}>

                <div className="p-20 m-10 flex items-center justify-center h-48 mb-4 rounded">
                    <div className="flex flex-col justify-center items-center mb-4">
                        <div className="p-4">
                            <img src={Upload} alt="upload"></img>
                        </div>
                        <div className={`pl-4 text-white font-Normal text-lg p-2 ${lightMode ? "text-dark" : "text-white"}`}>
                            Drag & drop a file or 
                            <span className="text-primary p-2">
                            browse files
                            </span> 
                        </div>
                        <div className={`text-white font-thin ${lightMode ? "text-darkgray" : "text-white"}`}>
                            JPG, PNG or GIF - Max file size 2MB
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
    </div>
}