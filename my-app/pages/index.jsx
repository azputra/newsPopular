import React from 'react'
import fetch from 'node-fetch'
import CardTrending1 from '../components/CardTrending1'
import Card3Top from '../components/Card3Top'
import Layout from '../components/Layout'

export default class Index extends React.Component {
    static async getInitialProps() {
        const us = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&pagesize=8&apiKey=e29fa93344394a3ba440c5791ae8ad41')
        const sg = await fetch('https://newsapi.org/v2/top-headlines?country=sg&category=business&pagesize=8&apiKey=e29fa93344394a3ba440c5791ae8ad41')
        const id = await fetch('https://newsapi.org/v2/top-headlines?country=id&category=business&pagesize=8&apiKey=e29fa93344394a3ba440c5791ae8ad41')
        const usTech = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=technology&pagesize=8&apiKey=e29fa93344394a3ba440c5791ae8ad41')
        const sgTech = await fetch('https://newsapi.org/v2/top-headlines?country=sg&category=technology&pagesize=8&apiKey=e29fa93344394a3ba440c5791ae8ad41')
        const idTech = await fetch('https://newsapi.org/v2/top-headlines?country=id&category=technology&pagesize=8&apiKey=e29fa93344394a3ba440c5791ae8ad41')
        return {
            newsBsnsUs: await us.json(),
            newsTechUs: await usTech.json(),
            newsBsnsSg: await sg.json(),
            newsTechSg: await sgTech.json(),
            newsBsnsId: await id.json(),
            newsTechId: await idTech.json()
        }
    }
    render() {
        const newsBsnsUs = this.props.newsBsnsUs
        const newsTechUs = this.props.newsTechUs
        const newsBsnsSg = this.props.newsBsnsSg
        const newsTechSg = this.props.newsTechSg
        const newsBsnsId = this.props.newsBsnsId
        const newsTechId = this.props.newsTechId
        const randomIndex = Math.floor(Math.random() * 7) + 1
        const randomNews = Math.floor(Math.random() * 6)
        const topNews = [newsBsnsUs, newsTechUs, newsBsnsSg, newsTechSg, newsBsnsId, newsTechId]
        const topTrending = topNews[randomNews].articles[randomIndex]
        return <Layout>
            {(newsTechId.articles.length > 0)
                ?
                <div className="container">
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
                </div>
                :
                <div className="container">
                    <h1>Loading . . .</h1>
                </div>
            }
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
        </Layout>
    }
}