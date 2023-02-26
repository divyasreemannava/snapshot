import { useState,useEffect } from "react";
import "./images.css"
import axios from "axios";
const Image = (props)=>{
    let value = props.data
    let side = props.item
    const [images,setImages] = useState([]);
    useEffect(()=>{
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=a2cf898629f05eb730cd41d0c6939bbc&tags=${value}&format=json&nojsoncallback=1`)
        .then((res)=>{
            // console.log(res.data.photos.photo)
            setImages(res.data.photos.photo)
        })
    },[side,value])

    return (
        <div className="image">
            {side ?<h2 className="title">{value} pictures</h2> : ""}<br/><br/>
            {images.map((value,index)=>{
                const imageUrl = `https://farm${value.farm}.staticflickr.com/${value.server}/${value.id}_${value.secret}.jpg`
                return (
                    
                    <img key = {index} src={imageUrl} ></img>
                )
            })}
        </div>
    )
}
export default Image