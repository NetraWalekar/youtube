export function VideoCard(props : any) {
    return (
        <div className="p-5 w-96 m-3 ">
            <img src={props.thumbnail} alt="" className="rounded-xl h-48" />
            <div className="grid grid-cols-6 pt-2 ">
                <div className="col-span-1 ">
                    <img src={props.channelImg} alt="" className="h-16 rounded-full pt-2" />
                </div>
                <div className="col-span-5 h-10 pt-1 font-bold">
                    <div className="text-sm flex-wrap">{props.title}</div>
                    <div className="col-span-11 pl-1 text-base text-gray-500">
                        {props.channelName}
                    </div>
                    <div className="col-span-11 pl-1 text-base text-gray-500">
                        {props.views} · {props.timestamp}
                    </div>
                </div>

            </div>
        </div>
    )
}