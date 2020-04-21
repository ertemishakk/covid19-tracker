import React, { Component } from 'react'
import Axios from 'axios'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';
import Spinner from './Spinner'

class Media extends Component {
    state = {
        news: [],
        fetching: false
    }

    async componentDidMount() {
        this.setState({
            fetching: true
        })
        Axios.get(`https://newsapi.org/v2/everything?q=coronavirus&apiKey=${process.env.REACT_APP_NEWS_KEY}`)
            .then(res => {
                this.setState({
                    news: res.data.articles,
                    fetching: false
                })
            })

    }
    render() {
        console.log(process.env)
        return (
            <div className='container'>
                <div className='row justify-content-center'>


                    <div className='pt-5' style={{ minHeight: '75vh' }}>

                        {this.state.fetching &&
                            <div className='pt-5 mt-5'>
                                <Spinner />

                            </div>}

                        {this.state.news.map((eachNews, index) => (
                            <Card key={index} style={{ width: '70%' }} className='mx-auto p-4 my-2'>
                                <CardImg top width="100%" src={eachNews.urlToImage} alt="Card image cap" />
                                <CardTitle className='font-weight-bold pt-2' style={{ fontSize: '20px' }}>{eachNews.title}</CardTitle>
                                {/* <CardSubtitle className='text-muted'>Author: {eachNews.author}</CardSubtitle> */}
                                <CardBody>


                                    <CardText>{eachNews.description}</CardText>
                                    <Button href={eachNews.url}>Read More</Button>
                                </CardBody>
                            </Card>

                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
export default Media
