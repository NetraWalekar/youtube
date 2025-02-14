export function VideoCard(props : any) {
    return (
        <div>
            <img src={props.thumbnail} alt=""className="rounded-xl" />
            <div className="grid grid-cols-12 pt-2">
                <div className="col-span-1 ">
                    <img src={props.channelImg} alt="" className="h-15 rounded-full" />
                </div>
                <div className="col-span-11 h-10 w-200 pt-1 font-bold">
                    <div>{props.title}</div>
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