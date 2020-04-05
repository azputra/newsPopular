import React from 'react'
import fetch from 'node-fetch'
import CardTrending1 from '../components/CardTrending1'
import Card3Top from '../components/Card3Top'
import Navbar from '../components/Navbar';

function HomePage({ newsBsnsUs, newsTechUs, newsBsnsSg, newsTechSg, newsBsnsId, newsTechId }) {
    const randomIndex = Math.floor(Math.random() * 7) + 1
    const randomNews = Math.floor(Math.random() * 6)
    const topNews = [newsBsnsUs, newsTechUs, newsBsnsSg, newsTechSg, newsBsnsId, newsTechId]
    const topTrending = topNews[randomNews].articles[randomIndex]
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row hot-news">
                    <div className="col">
                        <h3>Hot News In Indonesia</h3>
                    </div>
                    <div className="col">
                        <h3>Hot News In Singapore</h3>
                    </div>
                    <div className="col">
                        <h3>Hot News In United States</h3>
                    </div>
                </div>
                <div className="row">
                    <CardTrending1 TopNews={topTrending} />
                </div>
                <div className="row">
                    <div className="col">
                        <h1>Technology</h1>
                    </div>
                </div>
                <div className="row hot-news">
                    <Card3Top news={newsTechId} random={randomIndex} />
                    <Card3Top news={newsTechSg} random={randomIndex} />
                    <Card3Top news={newsTechUs} random={randomIndex} />
                </div >
                <div className="row">
                    <div className="col">
                        <h1>Business</h1>
                    </div>
                </div>
                <div className="row hot-news">
                    <Card3Top news={newsBsnsId} random={randomIndex} />
                    <Card3Top news={newsBsnsSg} random={randomIndex} />
                    <Card3Top news={newsBsnsUs} random={randomIndex} />
                </div>
            </div >
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

export async function getStaticProps() {
    const us = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&pagesize=8&apiKey=f45f90665ad844c984e0f6e6097475f9')
    const sg = await fetch('https://newsapi.org/v2/top-headlines?country=sg&category=business&pagesize=8&apiKey=f45f90665ad844c984e0f6e6097475f9')
    const id = await fetch('https://newsapi.org/v2/top-headlines?country=id&category=business&pagesize=8&apiKey=f45f90665ad844c984e0f6e6097475f9')
    const usTech = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=technology&pagesize=8&apiKey=f45f90665ad844c984e0f6e6097475f9')
    const sgTech = await fetch('https://newsapi.org/v2/top-headlines?country=sg&category=technology&pagesize=8&apiKey=f45f90665ad844c984e0f6e6097475f9')
    const idTech = await fetch('https://newsapi.org/v2/top-headlines?country=id&category=technology&pagesize=8&apiKey=f45f90665ad844c984e0f6e6097475f9')
    return {
        props: {
            newsBsnsUs: await us.json(),
            newsTechUs: await usTech.json(),
            newsBsnsSg: await sg.json(),
            newsTechSg: await sgTech.json(),
            newsBsnsId: await id.json(),
            newsTechId: await idTech.json()
        },
    }
}

export default HomePage