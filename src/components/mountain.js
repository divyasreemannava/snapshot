import { useState,useEffect } from "react";
import "./images.css"
import axios from "axios";
import Header from "./header";
const Mountain = ()=>{
    const [images,setImages] = useState([]);
    
    useEffect(()=>{
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=a2cf898629f05eb730cd41d0c6939bbc&tags=mountain&format=json&nojsoncallback=1`)
        .then((res)=>{
            // console.log(res.data.photos.photo)
            setImages(res.data.photos.photo)
        })
    },[])

    return (
        <>
        <Header/>
        <div className="image">
            <h2 className="title">Mountain pictures</h2><br/><br/>
            {images.map((value,index)=>{
                console.log(value)
                const imageUrl = `https://farm${value.farm}.staticflickr.com/${value.server}/${value.id}_${value.secret}.jpg`
                return (
                    
                    <img key = {index} src={imageUrl} ></img>
                )
            })}
        </div>
        </>
    )
}
export default Mountain