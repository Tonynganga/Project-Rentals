import React, { useState} from "react";
import './Main.css';


const PropertySlider = () => {

    const imgs=[
        {id:0,value:"https://wallpaperaccess.com/full/2637581.jpg"},
        {id:1,value:"https://source.unsplash.com/user/c_v_r/1900x800"},
        {id:2,value:"https://source.unsplash.com/user/c_v_r/100x100"},
    ]
    const [wordData,setWordData] =useState(imgs[0])
    const [val, setVal] = useState(0)
    const handleClick = (index)=>{
        console.log(index)
        setVal(index)
        const wordSlider=imgs[index];
        setWordData(wordSlider)
    }

    const handleNext = ()=>{
        let index = val < imgs.length -1 ? val +1 : val;
        setVal(index)
        const wordSlider=imgs[index];
        setWordData(wordSlider)
    }

    const handlePrevious = ()=>{
        let index = val <= imgs.length -1 && val > 0? val -1 : val;
        setVal(index)
        const wordSlider=imgs[index];
        setWordData(wordSlider)
    }

    return(
        <div className="main">
           <div className="flex_row">
                <button className="btns" onClick={handlePrevious}>P</button>
                <img src={wordData.value} className="MainImage"alt=""/>
                <button className="btns" onClick={handleNext}>N</button>
           </div>
            <div className="flex_row">
                {imgs.map((data, i)=>
                    <div className="thumbnail" key={i}>
                        <img alt="" className={wordData.id==i?"clicked":""} src={data.value} onClick={()=>handleClick(i)} height="70" width="100"/>
                    </div>
                )}
            </div>
        </div>
    )

}

export default PropertySlider;