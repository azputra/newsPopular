import React from 'react'
import Link from 'next/link'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function CardTrending1(props) {
    return (
        <>
            <div className="col">
                <Card>
                    <CardContent style={{ padding: "2vh" }}>
                        <img src={props.TopNews.urlToImage} alt="top-news" className="img-top-one" />
                        <CardContent style={{
                            color: "white",
                            position: "absolute",
                            bottom: "2.6vh",
                            left: "4.2vh",
                            padding: "20px 0",
                            background: "rgba(0, 0, 0, .7)",
                            maxWidth: "167vh",
                            minWidth: "167vh",
                            minHeight: "20vh",
                            padding: "4vh"
                        }}>
                            <h2>{(props.TopNews.title)}</h2>
                            <h2>{(new Date(props.TopNews.publishedAt)).toLocaleString()}</h2>
                        </CardContent>
                    </CardContent>
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

export default CardTrending1