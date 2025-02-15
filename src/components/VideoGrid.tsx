import { title } from "process";
import { VideoCard } from "./VideoCard";

const VIDEOS =[{
    thumbnail :"thumbnail.avif",
      title:"The Recruiter Appears in Seoul and Busan | Squid Game: Season 2 | Netflix [ENG SUB]",
      channelImg:"Netflix.jpg",
      channelName:"Netflix",
      views:"3M views",
      timestamp:"15 days ago"
},
{
    thumbnail :"t3.avif",
    title:"I Spend 100 Hours In The Pyramids!",
    channelImg:"c3.jpg",
    channelName:"MrBeast",
    views:"102M views",
    timestamp:"6 days ago"
},
{
    thumbnail :"t4.avif",
    title:"Modi Trump Friendship: रूस-यूक्रेन जंग खत्म करने की ट्रंप की कोशिशों की PM मोदी ने की तारीफ",
    channelImg:"c4.jpg",
    channelName:"ABPLive",
    views:"1k views",
    timestamp:"1 days ago"
},
{
    thumbnail :"c5.avif",
    title:"Lee Jung-jae Hints at Squid Game Season 2 Spoilers, Reveals If There Will Be a Season 3 (Extended)",
    channelImg:"t5.jpg",
    channelName:"The Tonight Show Starring Jimmy Fallon",
    views:"3.8M views",
    timestamp:"1 month ago"
},
{
    thumbnail :"t6.avif",
    title:"KBC S13 EP 80 Full Episode | KBC में आयी है पूरा Gokuldam Society | Amitabh Bachchan",
    channelImg:"c6.jpg",
    channelName:"Eagle Home Entartainment",
    views:"12M views",
    timestamp:"1 month ago"
},
{
    thumbnail :"t2.avif",
    title:"[The new Sportage X 오징어 게임 시즌 2] 핑크가드의 칼퇴편",
    channelImg:"c2.jpg",
    channelName:"Kia Korea",
    views:"12M views",
    timestamp:"2 months ago"
},
{
    thumbnail :"thumbnail.avif",
      title:"The Recruiter Appears in Seoul and Busan | Squid Game: Season 2 | Netflix [ENG SUB]",
      channelImg:"Netflix.jpg",
      channelName:"Netflix",
      views:"3M views",
      timestamp:"15 days ago"
},{
    thumbnail :"t6.avif",
    title:"KBC S13 EP 80 Full Episode | KBC में आयी है पूरा Gokuldam Society | Amitabh Bachchan",
    channelImg:"c6.jpg",
    channelName:"Eagle Home Entartainment",
    views:"12M views",
    timestamp:"1 month ago"
},
{
    thumbnail :"thumbnail.avif",
      title:"The Recruiter Appears in Seoul and Busan | Squid Game: Season 2 | Netflix [ENG SUB]",
      channelImg:"Netflix.jpg",
      channelName:"Netflix",
      views:"3M views",
      timestamp:"15 days ago"
},
{
    thumbnail :"t3.avif",
    title:"I Spend 100 Hours In The Pyramids!",
    channelImg:"c3.jpg",
    channelName:"MrBeast",
    views:"102M views",
    timestamp:"6 days ago"
},
{
    thumbnail :"t4.avif",
    title:"Modi Trump Friendship: रूस-यूक्रेन जंग खत्म करने की ट्रंप की कोशिशों की PM मोदी ने की तारीफ",
    channelImg:"c4.jpg",
    channelName:"ABPLive",
    views:"1k views",
    timestamp:"1 days ago"
},
{
    thumbnail :"c5.avif",
    title:"Lee Jung-jae Hints at Squid Game Season 2 Spoilers, Reveals If There Will Be a Season 3 (Extended)",
    channelImg:"t5.jpg",
    channelName:"The Tonight Show Starring Jimmy Fallon",
    views:"3.8M views",
    timestamp:"1 month ago"
},
{
    thumbnail :"t6.avif",
    title:"KBC S13 EP 80 Full Episode | KBC में आयी है पूरा Gokuldam Society | Amitabh Bachchan",
    channelImg:"c6.jpg",
    channelName:"Eagle Home Entartainment",
    views:"12M views",
    timestamp:"1 month ago"
},
{
    thumbnail :"t2.avif",
    title:"[The new Sportage X 오징어 게임 시즌 2] 핑크가드의 칼퇴편",
    channelImg:"c2.jpg",
    channelName:"Kia Korea",
    views:"12M views",
    timestamp:"2 months ago"
},
{
    thumbnail :"thumbnail.avif",
      title:"The Recruiter Appears in Seoul and Busan | Squid Game: Season 2 | Netflix [ENG SUB]",
      channelImg:"Netflix.jpg",
      channelName:"Netflix",
      views:"3M views",
      timestamp:"15 days ago"
},{
    thumbnail :"t6.avif",
    title:"KBC S13 EP 80 Full Episode | KBC में आयी है पूरा Gokuldam Society | Amitabh Bachchan",
    channelImg:"c6.jpg",
    channelName:"Eagle Home Entartainment",
    views:"12M views",
    timestamp:"1 month ago"
}
]
export function VideoGrid(){
    return(
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
           {VIDEOS.map(video => 
            <VideoCard
                thumbnail={video.thumbnail}
                title={video.title}
                channelImg={video.channelImg}
                channelName={video.channelName}
                views={video.views}
                timestamp={video.timestamp}
            ></VideoCard>
           )}
        </div>
    )
}