import React from 'react'
import Link from 'next/link'
import fetch from 'node-fetch'

function HomePage({ newsUs, newsSg, newsId }) {
    return (
        <>
            <div>Welcome to home.js!</div>
            <Link href="/">
                <button>to home</button>
            </Link>
            <Link href="/technology">
                <button>to technology</button>
            </Link>
            <Link href="/business">
                <button>to business</button>
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
    const us = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&pagesize=8&apiKey=f45f90665ad844c984e0f6e6097475f9')
    const sg = await fetch('https://newsapi.org/v2/top-headlines?country=sg&category=business&pagesize=8&apiKey=f45f90665ad844c984e0f6e6097475f9')
    const id = await fetch('https://newsapi.org/v2/top-headlines?country=id&category=business&pagesize=8&apiKey=f45f90665ad844c984e0f6e6097475f9')
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

export default HomePage