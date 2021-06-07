import React, { useEffect, useState } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import axios from 'axios'
import './movies.css'

const Movies = () => {

    const[movieName,setMovieName] = useState({})
    const[movieToDisplay,setMovieToDisplay] = useState([])

    useEffect(()=>{
        axios.get('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json')
        .then(response => {
            setMovieName(response.data)
        })
        MovieContent()
    })
    const MovieContent = () =>
    {
        let temp =[]
        movieName.entries?.map((movie,index)=>{
            if(movie.releaseYear>=2010)
            {temp.push(movie)}
        })
        setMovieToDisplay(temp.sort((a, b) => (a.title > b.title) ? 1 : -1))
    }
    return(
    <>
    <Header name = 'Movies'/>
    <div  className="content_wrapper">
        {movieToDisplay?.map((movie,index)=>{
            if(index<21)
            {
                return(
                    <>
                    <img src={movie["images"]["Poster Art"]["url"]} width={50} height={100}></img>
                        <p>{movie.title}</p>
                    </>
                )
            }
        })
        }
    </div>
    <Footer/>
</>
    )}
    export default Movies