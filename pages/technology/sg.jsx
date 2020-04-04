import React from 'react'
import Link from 'next/link'
import fetch from 'node-fetch'

function TechnologySg({ newsSg }) {
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
                {JSON.stringify(newsSg)}
            </p>
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