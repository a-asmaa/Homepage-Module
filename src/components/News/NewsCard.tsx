import React from 'react'
import { Card } from 'react-bootstrap'
import { Category, NewsType } from '../../types/newsItem'


export default function NewsCard({item, categories}: {item: NewsType, categories: Category[]}) {
  return (
    <Card>
    <Card.Img variant="top" src={item.urlToImage} alt={item.title} />
    <Card.Body>
        <Card.Title>{item.title}</Card.Title>
    
        {/* TODO: change date expression */}
         
         <div className='d-flex gap-2 mb-4'>
            <i className="bi bi-calendar-event" style={{color: '#13BEFF'}}></i>
            <span className='date'> {new Date(item.publishedDate).toDateString()} </span> 
         </div>
        
        <div className="d-flex justify-content-between mb-3">
            
            <div className='px-3' style={{backgroundColor: "#74747433", borderRadius: 10}}>{categories.find(x => x.id == parseInt(item.categoryID))?.name}</div>
            <div className="d-flex gap-2">
                   
              { true ?  
                  <i className="bi bi-heart" style={{color: '#13BEFF'}}></i> :
                  <i className="bi bi-heart-fill"></i> 
              }
              <i className="bi bi-share-fill" style={{color: '#13BEFF'}}></i> 
            </div> 
        </div>
    </Card.Body>
</Card>

  )
}
