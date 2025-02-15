import { SearchBar } from "./SearchBar"


export function AppBar() {
    return (
        <div className="flex place-content-between items-center p-2 ">
            <div className=" place-content-between p-2 inline-flex items-center">
                <div><img src="main-menu.png" alt="" className="h-7 pr-7 pl-2" /></div>
                <div><img src="youtube.png" alt="" className="h-11 " /></div>
                <div className="font-bold">YouTube <sup className="font-light">IN</sup></div>
            </div>
            <div className=""><SearchBar></SearchBar></div>
            <div className="">
                <img src="noti" alt="" />
                <img src="n.jpg" alt="" className="h-11 rounded-full" /></div>
        </div>
    )
}