import React from 'react'
import Link from 'next/link'
import fetch from 'node-fetch'
import Navbar from '../../components/Navbar';
import CardDetail from '../../components/CardDetail';

function technologyUs({ newsUs }) {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    {
                        newsUs.articles.map((news, index) => {
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
                    margin-top:12vh;
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
    const us = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=technology&pagesize=8&apiKey=e29fa93344394a3ba440c5791ae8ad41')
    const usJson = await us.json()
    return {
        props: {
            newsUs: usJson,
        },
    }
}

export default technologyUs