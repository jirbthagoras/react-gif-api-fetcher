import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";

const Random = () => {

    const[gif, setGif] = useState()

    const response = async () => {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=3QZvYw2GmMO7W7phRMKqVkxqYDdzgYRE&limit=1&offset=0`
        const { data } = await axios.get(url);

            let msg = null;
            let image = data.data.images.original.url;
            setGif(image);

    }

    useEffect(() => {
        response();
    }, []);

    const handClick = () => {
        response();
    }

    return (
        <div>
            <h1>Heres ur khodam</h1>
            <h1></h1>
            <img width={500} src={gif} alt={"gif"}/>
            <button onClick={handClick}>Generate</button>
        </div>
    )
}

export default Random;