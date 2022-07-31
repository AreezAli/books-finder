import React, { useEffect, useState } from 'react'
import Card from './Card';
import axios from 'axios';
const Home = () => {
  const [search,setSearch]=useState("");
  const [bookData,setBookData]=useState([]);
  const searchbybtn=()=>{
    axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&maxResults=40&key=AIzaSyBUjnrmwZZjSUBi3MO9Ns0ysSyqr1Zur6M')
      .then(res=>setBookData(res.data.items))
      .catch(err=>console.log(err));
  }
  const searchBook=(evt)=>{
    if(evt.key==="Enter")
    {
      // axios.get('https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyBUjnrmwZZjSUBi3MO9Ns0ysSyqr1Zur6M')
      axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&maxResults=40&key=AIzaSyBUjnrmwZZjSUBi3MO9Ns0ysSyqr1Zur6M')
      .then(res=>setBookData(res.data.items))
      .catch(err=>console.log(err))
    }
  }
  useEffect(()=>{
    axios.get('https://www.googleapis.com/books/v1/volumes?q=react&maxResults=40&key=AIzaSyBUjnrmwZZjSUBi3MO9Ns0ysSyqr1Zur6M')
      .then(res=>setBookData(res.data.items))
      .catch(err=>console.log(err));
      return()=>{
        axios.get('https://www.googleapis.com/books/v1/volumes?q=react&maxResults=40&key=AIzaSyBUjnrmwZZjSUBi3MO9Ns0ysSyqr1Zur6M')
      .then(res=>setBookData(res.data.items))
      .catch(err=>console.log(err));
      }
  },[])
  return (
    <>
      <div className="header">
        <div className="row1">
            <h1>A room without BOOKS is like <br/> a body without a soul</h1>
        </div>
        <div className="row2">
            <h2>Find Your Book</h2>
            <div className="search">
                <input type="text" placeholder='Enter Your Book Name' 
                value={search} onChange={e=>setSearch(e.target.value)} onKeyPress={searchBook}/>
                <button  className='btn' onClick={searchbybtn}><i className="fa-solid fa-magnifying-glass" ></i></button>
            </div>
            <img src="./images/bg2.png" alt="" />
        </div>
      </div>
      <div className="container">
        <Card bookd={bookData}/>
      </div>
    </>
  )
}

export default Home;
