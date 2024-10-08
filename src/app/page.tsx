import Image from 'next/image'
import Link from './components/Link'
import Heading from './components/Heading'

export default function Home() {
  return (
    <main className="container mx-auto pt-12 px-8">
        <Image width={192} height={192} src="/selfie.jpg" className="rounded-full lg:float-left m-8 w-72 lg:w-48" alt="Selfie of me." />

        <Heading size={1}>Thorne</Heading>
        <Heading size={3}>ens0 🌸 metro ATL 🌸 she/her</Heading>

        <p className="mb-12">
            Renaissance woman &amp; geek with a diverse array of expertise and successes. Primary passions are coding and writing. Always learning, always creating, &amp; always building. Dedicated to building a better, more inclusive world for all.
        </p>

        <div className="clear-both"></div>

        <Heading size={2}>👩🏻‍💻 software engineer &amp; tech lead</Heading>

        <p className="mb-6">
            As an eight-year-old in the 90s, I started learning how to program C++, quickly also moving onto building websites, back when JavaScript was a total nightmare. Since then, I have earned well over a decade of professional tech experience, including three years as Chief Technology Officer of a Y Combinator-backed startup, CrowdMed.
        </p>

        <p className="mb-6">
            These days, I head up the tech side and write lore for projects at <Link href="https://smol.farm">smol farm</Link>, an indie creative studio I co-founded, where we make things like games and digital collectibles. For examples of my work, check out the <Link href="/code">code</Link> page.
        </p>

        <div className="mb-12 px-3 w-full md:w-1/2 inline-block align-top">
            <h3 className="text-2xl mb-2">Languages of Focus</h3>
            <ul className="list-disc ml-4">
                <li>TypeScript</li>
                <li>C#</li>
                <li>Rust</li>
                <li>Solidity</li>
                <li>SQL</li>
            </ul>
        </div>

        <div className="mb-12 px-3 w-full md:w-1/2 inline-block align-top">
            <h3 className="text-2xl mb-2">Areas of Focus</h3>
            <ul className="list-disc ml-4">
                <li>Web Development (React, Redux, Tailwind, & Next)</li>
                <li>Mobile Apps</li>
                <li>Artificial Intelligence</li>
                <li>Indie Game Dev</li>
                <li>Blockchains &amp; Smart Contracts</li>
            </ul>
        </div>

        <Heading size={2}>📚 writer</Heading>

        <p className="mb-12">
            Since a young age, I have also had a love of writing, both fiction and non. In 2017, I was <Link href="https://www.nytimes.com/2017/11/02/opinion/twitter-transgender-harassment-problem.html">featured in the New York Times</Link> talking about anti-trans harassment on Twitter. As part of smol farm, I am the lead writer of the <Link href="https://smol.news">smol farm gazette</Link>, a Substack which discusses everything from the technology to small-scale agriculture.
        </p>
    </main>
  )
}

/*
 * <Heading size={2}>🌸 more</Heading>

        <ul className="list-disc ml-4">
            <li><Link href="/nfts">NFT Collection</Link> - I love collecting digital art and built a gallery of featured pieces of my permanent collection.</li>
        </ul>
 */