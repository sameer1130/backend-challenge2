import Upload from "../images/exit.svg"
import {useCallback, useState} from "react"
import { useDropzone } from "react-dropzone"
import { Loader } from "./Loader";

const MAX_SIZE = 2 * 1024 * 1024;


export const DragAndDrop = ({lightMode}:{
    lightMode: boolean
}) => {
    const [loading, setLoading] = useState(false);
    const [uploadedImage, setUploadedImage] = useState<string | null>(null)
    const onDrop = useCallback((acceptedFiles: File[]) =>{
        if(acceptedFiles.length === 0 ){
            alert("File is too Large or Unsupported type!")
            return
        }
        // setTimeout(setLoading,5000)
        
        const file = acceptedFiles[0];
        const reader = new FileReader();

        reader.onload = () => {
            setLoading(true)
            setUploadedImage(reader.result as string)
            setLoading(false)

        };
        reader.readAsDataURL(file)
    },[])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop,
        accept: {
            'image/jpg' : ['.jpeg', '.jpg'],
            'image/png': ['.png'],
            'image/gif': ['.gif']
        },
        maxSize: MAX_SIZE,
        multiple: false
    });




    return <div>
        <div {...getRootProps()} className={`flex item-center-justify-center rounded-lg ${lightMode ? "bg-white" : "bg-darkgray"} `}> 
            <input {...getInputProps()}></input>
            <div className={`m-2 flex items-center justify-center  max-w-xl p-4  rounded-lg ${uploadedImage ? "" : "border-2  border-dashed"} ${lightMode ? "border-lightgray" : "border-graytext"} ${isDragActive ? 'border-blue-500' : ''}`}>

                
                        {loading ? (<Loader lightMode={lightMode}/> ) : 
                        uploadedImage ? (
                            <div className="p-20 m-10 flex items-center justify-center h-48 mb-4 rounded">
                            <div className="flex flex-col justify-center items-center mb-4">
                            <img src={uploadedImage} alt="uploaded_image" className="max-h-48 border-none"></img>
                            </div>
                            </div>) :
                        (<>
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
                        </>
                    )}
                        
                    
            </div>
        </div>
        
    </div>
}