import React from 'react'
import Link from 'next/link'
import fetch from 'node-fetch'
import Navbar from '../../components/Navbar'
import CardDetail from '../../components/CardDetail';

function Business({ newsUs, newsSg, newsId }) {
    return (
        <>
            <Navbar />
            <div className="container">
                <img src='/News-Technology.png' alt="title-news" className="titleNews" />
                <div className="row hot-news">
                    <div className="col">
                        <Link href="/business/id">
                            <h3>Hot Business In Indonesia</h3>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href="/business/sg">
                            <h3>Hot Business In Singapore</h3>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href="/business/us">
                            <h3>Hot Business In United State</h3>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <CardDetail news={newsId.articles[0]} />
                    </div>
                    <div className="col">
                        <CardDetail news={newsSg.articles[0]} />
                    </div>
                    <div className="col">
                        <CardDetail news={newsUs.articles[0]} />
                    </div>
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
    const us = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&pagesize=1&apiKey=f45f90665ad844c984e0f6e6097475f9')
    const sg = await fetch('https://newsapi.org/v2/top-headlines?country=sg&category=business&pagesize=1&apiKey=f45f90665ad844c984e0f6e6097475f9')
    const id = await fetch('https://newsapi.org/v2/top-headlines?country=id&category=business&pagesize=1&apiKey=f45f90665ad844c984e0f6e6097475f9')
    const usJson = await us.json()
    const sgJson = await sg.json()
    const idJson = await id.json()
    return {
        props: {
            newsUs: usJson,
            newsSg: sgJson,
            newsId: idJson,
        },
    }
}

export default Business