import { useEffect, useState } from "react";
import { Category, NewsType } from "../types/newsItem";
import { API_URL } from "../utils/constants";
import Card from "react-bootstrap/Card";
import { Badge, Button, Col, Nav, Row, Spinner, Tab } from "react-bootstrap";
import NewsCard from "./NewsCard";
import '../styles/cards.scss'



const NewsList = () => {

    const [newsList, setNewsList] = useState<NewsType[]>([]);
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState<Category[]>([]);


    useEffect(() => {
        // get news list 

        try{

            setLoading(true);
            fetch(`${API_URL}d275425a434e02acf2f7`)
            .then(res => res.json())
            .then(response => {
                console.log(response.News);
                
                setNewsList(response.News)

            })

            fetch(`${API_URL}91298d970c27e9a06518`)
            .then(res => res.json())
            .then(response => {           
                setCategories(response.newsCategory)
            })

        }catch (e){
            console.log(e, "error ..");
            
        } finally{
            setLoading(false);
        }

    }, []);

    const FilterByCategory = () => {
        //TODO: filter by cat        
    }


    return ( <section className="news-section">
    

        <div> Media </div>
        <h1> Top News </h1>


        {loading ? 
        
        <Spinner />  
        :
        <Tab.Container defaultActiveKey="first">
          <Row>
              <Nav variant="pills" className="flex-row gap-2 justify-content-center">
                    <Nav.Item> 
                          <Nav.Link eventKey='default'>All news</Nav.Link>
                      </Nav.Item>
                  {categories.map(item => {
                      return <Nav.Item key={item.id} onClick={FilterByCategory}> 
                          <Nav.Link eventKey={item.id}>{item.name}</Nav.Link>
                      </Nav.Item>
                  })}
              </Nav>
          </Row>
          <Row >
              <Tab.Content>
                  <Tab.Pane eventKey="default">
                  <div className="card-container" >
                      {newsList.splice(0,6).map(newsItem => {
                      return <NewsCard key={newsItem.id} item={newsItem} categories={categories}/>
                      })}

                  </div>
                  <Button size="lg" className="btn-orange">View All News</Button>{' '}

                  </Tab.Pane>
              </Tab.Content>
          </Row>
          </Tab.Container>
        }

      

       
    </section> );
}
 
export default NewsList;