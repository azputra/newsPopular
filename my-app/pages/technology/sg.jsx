import React from 'react'
import Link from 'next/link'
import fetch from 'node-fetch'
import Navbar from '../../components/Navbar';
import CardDetail from '../../components/CardDetail';

function TechnologySg({ newsSg }) {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row hot-news">
                    <div className="col">
                        <Link href="/technology/id">
                            <h3>Hot Technology In Indonesia</h3>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href="/technology/sg">
                            <h3>Hot Technology In Singapore</h3>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href="/technology/us">
                            <h3>Hot Technology In United State</h3>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    {
                        newsSg.articles.map((news, index) => {
                            return (
                                <div className="col-card">
                                    <CardDetail key={index} news={news} />
                                </div>
                            )
                        })
                    }
                </div>
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
                    justify-content: space-around;
                    margin: 5px;
                    display: flex;
                    flex-wrap: wrap;
                }
                .col-card{
                    position: relative;
                    min-height: 1px;
                    padding-right: 15px;
                    padding-left: 15px;
                    margin-bottom: 10vh;
                }
                .col{
                    position: relative;
                    min-height: 1px;
                    padding-right: 15px;
                    padding-left: 15px;
                }
                .titleNews{
                    max-height:7vh;
                    max-width:35vh;
                    min-height:7vh;
                    min-width:35vh;
                }
            `}</style>
        </>
    )
}

export async function getStaticProps() {
    const sg = await fetch('https://newsapi.org/v2/top-headlines?country=sg&category=technology&pagesize=8&apiKey=f45f90665ad844c984e0f6e6097475f9')
    const sgJson = await sg.json()
    return {
        props: {
            newsSg: sgJson,
        },
    }
}

export default TechnologySg