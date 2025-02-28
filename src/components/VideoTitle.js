const VideoTitleContainer = ({title,overview})=>{
    return <div className="px-24 absolute pt-[15%]  text-white bg-gradient-to-r from-black w-screen aspect-video">
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="text-sm py-4 w-2/4">{overview}</p>
        <div className="mt-1">
        <button className="p-2 text-sm hover:bg-opacity-80 px-4 text-black font-medium bg-white rounded-lg">▶Play</button>
        <button className="p-2 text-sm hover:bg-opacity-80 ml-4 px-4 text-white font-medium bg-gray-400 bg-opacity-70 rounded-lg">More Info</button>
        </div>
    </div>
}
export default VideoTitleContainer;