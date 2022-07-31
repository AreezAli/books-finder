import React, { useState } from 'react'
import Modal from './Modal';
const Card = ({bookd}) => {
  const[show,setShow]=useState(false);
  const [bookItem,setBookItem]=useState();
  // console.log(bookd);
  let index=1;
  return (
    <>
    {
      bookd.map((item)=>{
        let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
        if(thumbnail!==undefined)
        {
        return(
          <div key={index++}>
          <div className="card" onClick={()=>{setShow(true);setBookItem(item)}} >
          <img src={thumbnail} alt="" />
          <div className="bottom" >
            <h3 className="title">{item.volumeInfo.title}</h3>
            <p className="amount">Click Here</p>
          </div>
          </div>
          <Modal show={show} item={bookItem} onClose={()=>{setShow(false)}}/>
          </div>
        )
        }
        else
        {
          return (
            null
          )
        }
      })
    }
    </>
  )
}

export default Card;
