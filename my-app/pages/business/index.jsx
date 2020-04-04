import React from 'react'
import Link from 'next/link'
import fetch from 'node-fetch'
import Navbar from '../../components/Navbar'

function Business({ newsUs, newsSg, newsId }) {
    return (
        <>
            <Navbar />
            <div>Welcome to Business.js!</div>
            <Link href="/business/id">
                <button>top in indo</button>
            </Link>
            <Link href="/business/sg">
                <button>top in singapore</button>
            </Link>
            <Link href="/business/us">
                <button>top in amerika</button>
            </Link>

            <p>
                {JSON.stringify(newsUs)}
            </p>
            <p style={{ color: "green" }}>
                {JSON.stringify(newsSg)}
            </p>
            <p style={{ color: "red" }}>
                {JSON.stringify(newsId)}
            </p>
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