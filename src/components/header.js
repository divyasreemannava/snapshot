import { useEffect, useState } from "react"
import Image from "./images"
import { useNavigate } from "react-router-dom"
import "./header.css"
const Header = (props)=>{
    const navigate = useNavigate()
    //const [searchvalue,setSearchValue] = useState("")
    // const [data,setData] = useState("")
    // const [item,setItem] = useState(false)
    const [nav,setNav] = useState("/")
    // const handleSubmit = ()=>{
    //     if(searchvalue!==""){
    //     console.log(searchvalue)
    //     setData(searchvalue)
    //     setItem(true)
    //     }
    // }
    const searchHandler=()=>{
        if(props.value===true)
        {
            props.trigger(false);
        }
        else{
            props.trigger(true);
        }
    }
    // useEffect(()=>{
    //     console.log(nav)
    //     navigate(nav)
    // },[nav])
    const handleDefault = (str)=>{
        console.log(str)
        navigate(str)
    }
    
    return (
        <>
            <h1>Snap Shot</h1>
            <input className="input" type="search" placeholder="search" onChange={(e)=>{props.function(e.target.value)}} onClick={()=>{handleDefault("/")}} />
            <button className= "submit" onClick={searchHandler}>Submit</button>
            <div className="tags">
            <button className="tag" onClick={()=>{handleDefault("/mountain")}}>Mountains</button>
            <button className="tag" onClick={()=>{handleDefault("/beach")}}>Beaches</button>
            <button className="tag" onClick={()=>{handleDefault("/bird")}} >Birds</button>
            <button className="tag" onClick={()=>{handleDefault("/food")}}>Food</button>
            </div>
            {/* {
                data ? <Image data={data} item={item}/> : ""
            } */}
            
        </>
    )
}
export default Header