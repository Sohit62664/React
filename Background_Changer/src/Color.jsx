import { useState } from "react";

function Color() {
    const [color, setColor] = useState("olive");


    return (
        <div className="w-full h-screen duration-200 "
            style={{ backgroundColor: color }}
        >
            <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2" 
             >

                <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white  px-3 py-2 rounded-xl" style={{backgroundColor: "#aab3ac"}}>
                    <button className="outline-none px-4 py-1 rounded-full " onClick={() => { setColor("red") }} style={{ background: "red" , color :"white" }} >Red</button>
                    <button className="outline-none px-4 py-1 rounded-full " onClick={() => { setColor("blue") }} style={{ background: "blue" , color :"white" }} >Blue</button>
                    <button className="outline-none px-4 py-1 rounded-full " onClick={() => { setColor("green") }} style={{ background: "green" , color :"white" }} >Green</button>
                    <button className="outline-none px-4 py-1 rounded-full " onClick={() => { setColor("orange") }} style={{ background: "orange" , color :"white" }} >Orange</button>
                    <button className="outline-none px-4 py-1 rounded-full " onClick={() => { setColor("yellow") }} style={{ background: "yellow" , color :"white" }} >Yellow</button>
                    <button className="outline-none px-4 py-1 rounded-full " onClick={() => { setColor("pink") }} style={{ background: "pink" , color :"white" }} >Pink</button>
                    <button className="outline-none px-4 py-1 rounded-full " onClick={() => { setColor("brown") }} style={{ background: "brown" , color :"white" }}>Brown</button>
                    <button className="outline-none px-4 py-1 rounded-full " onClick={() => { setColor("grey") }} style={{ background: "grey" , color :"white" }} >Grey</button>
                    <button className="outline-none px-4 py-1 rounded-full " onClick={() => { setColor("black") }} style={{ background: "black" , color :"white" }} >Black</button>
                    <button className="outline-none px-4 py-1 rounded-full " onClick={() => { setColor("white") }} style={{ background: "white" , color :"Black" }} >White</button>
                </div>


            </div>
        </div>

    )

}


export default Color