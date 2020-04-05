import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function HomePage(props) {
    return (
        <>
            <div className="col">
                <Card style={{ width: "45vh" }}>
                    <CardActionArea>
                        <CardMedia
                            style={{ width: "100%", minHeight: "35vh", maxHeight: "35vh" }}
                            image={props.news.articles[props.random].urlToImage}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography style={{ whiteSpace: "nowrap", width: "40vh", overflow: "hidden", textOverflow: "ellipsis" }} gutterBottom variant="p" component="p">
                                {props.news.articles[props.random].title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {new Date(props.news.articles[props.random].publishedAt).toLocaleString()}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
            <style jsx>{`
                body {
                margin: 0;
                }
                h3{
                    cursor:pointer
                }
                .container{
                    margin-top:10vh;
                    padding-right: 15px;
                    padding-left: 15px;
                    margin-right: auto;
                    margin-left: auto;
                }
                .row{
                    margin: 5px;
                    display: flex;
                }
                .col{
                    position: relative;
                    min-height: 1px;
                    padding-right: 15px;
                    padding-left: 15px;
                }
                .hot-news{
                    justify-content: space-around;
                }
                .img-top-one{
                    max-height:70vh;
                    max-width:175vh;
                    min-height:70vh;
                    min-width:175vh;
                }
            `}</style>
        </>
    )
}

export default HomePage