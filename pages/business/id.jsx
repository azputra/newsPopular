import React from 'react'
import Link from 'next/link'
import fetch from 'node-fetch'

function BusinessId({ newsId }) {
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
            <Link href="/business/id">
                <button>top in indo</button>
            </Link>
            <Link href="/business/sg">
                <button>top in singapore</button>
            </Link>
            <Link href="/business/us">
                <button>top in amerika</button>
            </Link>
            <p style={{ color: "red" }}>
                {JSON.stringify(newsId)}
            </p>
        </>
    )
}

export async function getStaticProps() {
    const id = await fetch('https://newsapi.org/v2/top-headlines?country=id&category=business&pagesize=8&apiKey=f45f90665ad844c984e0f6e6097475f9')
    const idJson = await id.json()
    return {
        props: {
            newsId: idJson,
        },
    }
}

export default BusinessId