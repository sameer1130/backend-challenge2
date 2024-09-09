

export const Loader = ({lightMode}:{
    lightMode: boolean
}) => {
    return (
        <div className={`flex flex-col items-center justify-center w-96 p-4 rounded-lg ${lightMode ? "bg-white" : "bg-gray-50 dark:bg-gray-800"}`}>
            <div className="flex items-center justify-center w-full mb-2">
                <span className={`font-bold   ${lightMode ? "text-black" : "text-gray-700 dark:text-gray-300"}`}>Uploading</span>
                <span className="text-gray-500 dark:text-gray-400 pl-2">Please wait...</span>
            </div>
            <div className={`w-full  rounded-full h-2.5 ${lightMode ? "bg-lightgray": "bg-gray-200 dark:bg-gray-700"}`}>
                <div className="bg-blue-600 h-2.5 rounded-full animate-slide" style={{ width: '20%' }}></div>
            </div>
        </div>
    );
}