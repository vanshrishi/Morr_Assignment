import React ,{useEffect, useState} from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import axios from 'axios'
import "./series.css"

const Series = () => {
    const [seriesName , setSeriesName] = useState({})
    const [seriesToDisplay , setSeriesToDisplay] = useState([])

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json')
        .then(response => {
            setSeriesName(response.data);
        })
        SeriesContent();
    })

    const SeriesContent = () => {
        let temp = [];
        seriesName.entries?.map((series, index) => {
            if(series.releaseYear >= 2010){
                temp.push(series)
            }
        })
        setSeriesToDisplay(temp.sort((a, b) => (a.title > b.title) ? 1 : -1))
    }


    return(
    <>
    <Header name = 'Series'/>
    <div className="content_wrapper">

        {seriesToDisplay?.map((series, index) => {
            if(index < 21){
            return (
                    <div>
                        <img src={series["images"]["Poster Art"]["url"]} width={50} height={100}></img>
                        <p>{series.title}</p>
                    </div>
            )
            }
            else {
                return
            }
        })}
    </div>
    <Footer/>
</>
    )}
    
export default Series