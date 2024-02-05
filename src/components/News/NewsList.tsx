import { useEffect, useState } from "react";
import { Category, NewsType } from "../../types/newsItem";
import { API_URL } from "../../utils/constants";
import { Button, Nav, Row, Spinner, Tab } from "react-bootstrap";
import NewsCard from "./NewsCard";
import '../../styles/news.scss'



const NewsList = () => {

    const [newsList, setNewsList] = useState<NewsType[]>([]);
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState<Category[]>([]);
    const [filteredList, setFilteredList] = useState<NewsType[]>([]);
    const [currentTab, setCurrentTab] = useState(0);
    

    useEffect(() => {
        // get news list 

        try{

            setLoading(true);

            fetch(`${API_URL}91298d970c27e9a06518`)
            .then(res => res.json())
            .then(response => {           
                setCategories(response.newsCategory)
            })
            
            fetch(`${API_URL}d275425a434e02acf2f7`)
            .then(res => res.json())
            .then(response => {
                const availableNews = (response.News as NewsType[]).filter(x => x.showOnHomepage);

                setLoading(false);
                setNewsList(availableNews);

                const filterd_list = availableNews.length > 6 ? availableNews.splice(0,6) : availableNews;
                setFilteredList(filterd_list);
            
            })

           

        }catch (e){
            console.log(e, "error ..");
            
        } finally{
            // setLoading(false);
        }

    }, []);

    const FilterByCategory = (id: number) => {
        console.log(id);
        setCurrentTab(id);

        //TODO: filter by cat  
        const list = id === 0 ? newsList.length > 6 ? newsList.splice(0,6) : newsList
        :  newsList.filter(news => parseInt(news.categoryID) === id );
        console.log(list);
        
        setFilteredList(list)
    }


    return ( <section className="news-section">
    

        <div className="media-text"> Media </div>
        <h1> Top News </h1>


        {loading ? 
        
        <Spinner />  
        :
        <Tab.Container defaultActiveKey={currentTab}>
          <Row>
              <Nav variant="pills" className="flex-row gap-2 justify-content-center">
                    <Nav.Item onClick={()=>FilterByCategory(0)}> 
                          <Nav.Link eventKey={0}>All news</Nav.Link>
                      </Nav.Item>
                    {categories.map(item => {
                      return <Nav.Item key={item.id} onClick={()=>FilterByCategory(item.id)}> 
                          <Nav.Link eventKey={item.id}>{item.name}</Nav.Link>
                      </Nav.Item>
                  })}
              </Nav>
          </Row>
          <Row >
              <Tab.Content>
                  <Tab.Pane eventKey={currentTab}>
                    {filteredList.length > 0 ? 
                        <div className="card-container">
                            {filteredList.map(newsItem => {
                                return <NewsCard key={newsItem.id} item={newsItem} categories={categories}/>
                            })
                            }
                        </div>
                    :
                        <div className="my-5 text-center"> No items available </div>                        
                    }
                  
                  {filteredList.length >= 6 &&
                   <Button size="lg" className="btn-orange">View All News</Button>
                  }
                  </Tab.Pane>
              </Tab.Content>
          </Row>
          </Tab.Container>
        }

      

       
    </section> );
}
 
export default NewsList;