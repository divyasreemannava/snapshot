import { useEffect, useState } from "react"
import Image from "./images"
import { useNavigate } from "react-router-dom"
import "./header.css"
import axios from "axios"
import Header from "./header"
const Search = ()=>{
    const [images,setImages] = useState([])
    const [input,setInput]=useState("");
    const [search,setsearch]=useState(false)
    useEffect(()=>{
        console.log(input)
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=a2cf898629f05eb730cd41d0c6939bbc&tags=${input}&format=json&nojsoncallback=1`)
        .then((res)=>{
            // console.log(res.data.photos.photo)
            setImages(res.data.photos.photo)
        })
    },[search])
    
    return (
        <>
            <Header function = {setInput} />
            <div className="image">
                {input?<h2 className="title">{input} pictures</h2>:""}
            
            {images.map((value,index)=>{
                const imageUrl = `https://farm${value.farm}.staticflickr.com/${value.server}/${value.id}_${value.secret}.jpg`
                return (
                    
                    <img key = {index} src={imageUrl} ></img>
                )
            })}
        </div>
            
        </>
    )
}
export default Search