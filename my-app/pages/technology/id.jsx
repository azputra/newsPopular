import React from 'react'
import Link from 'next/link'
import fetch from 'node-fetch'

function TechnologyId({ newsId }) {
    return (
        <>
            <div>Welcome to home.js!</div>
            <Link href="/technology/id">
                <button>top in indo</button>
            </Link>
            <Link href="/technology/sg">
                <button>top in singapore</button>
            </Link>
            <Link href="/technology/us">
                <button>top in amerika</button>
            </Link>
            <p style={{ color: "red" }}>
                {JSON.stringify(newsId)}
            </p>
        </>
    )
}

export async function getStaticProps() {
    const id = await fetch('https://newsapi.org/v2/top-headlines?country=id&category=technology&pagesize=8&apiKey=f45f90665ad844c984e0f6e6097475f9')
    const idJson = await id.json()
    return {
        props: {
            newsId: idJson,
        },
    }
}

export default TechnologyId