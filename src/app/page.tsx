import Image from 'next/image'
import Link from 'next/link'
import Heading from './components/Heading'

export default function Home() {
  return (
    <main className="container mx-auto pt-12 px-8">
        <Image width={192} height={192} src="/selfie.jpg" className="rounded-full hidden lg:block lg:float-left m-8 w-48" alt="Selfie of me." />
        <Image width={192} height={192} src="/natsuko.png" className="rounded-full hidden lg:block lg:float-right m-8 w-48" alt="Natsuko, a Galverse NFT of mine." />

        <Heading size={1}>Thorne</Heading>
        <Heading size={3}>ens0 (.me/.eth/.tez) 🌸 she/her</Heading>

        <p className="mb-12">
            Renaissance woman with a diverse array of expertise and successes. Primary passions are coding and writing. Always learning, always creating, always building. Dedicated to building a better, more inclusive world for all.
        </p>

        <Image
            width={192}
            height={192}
            src="/selfie.jpg"
            className="rounded-full lg:hidden float-left m-2 w-4/12"
            alt="Selfie of me." />
        <Image
            width={192}
            height={192}
            src="/natsuko.png"
            className="rounded-full lg:hidden
            float-right m-2 w-4/12" alt="Natsuko, a Shinsei Galverse pfp of mine." />

        <div className="clear-both"></div>

        <Heading size={2}>👩🏻‍💻 software engineer &amp; tech lead</Heading>

        <p className="mb-6">
            As an eight-year-old in the 90s, I started building websites and learning how to program C++. Since then, I have earned over a decade of professional tech experience and over two decades of total dev experience, including spending three years as Chief Technology Officer of a Y Combinator-backed startup.
        </p>

        <p className="mb-6">
            These days, I head up the tech side of things at <Link href="https://smol.farm">smol farm</Link>, an indie creative studio I started with my girlfriend. For examples of my work, check out the <Link href="/projects">code</Link> page.
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
                <li>Web & Mobile Apps</li>
                <li>Artificial Intelligence</li>
                <li>Indie Game Dev</li>
                <li>Blockchains</li>
            </ul>
        </div>

        <Heading size={2}>📚 writer</Heading>

        <p className="mb-12">
            Since a young age, I have also had a love of writing, both fiction and non. In 2017, I was <Link href="https://www.nytimes.com/2017/11/02/opinion/twitter-transgender-harassment-problem.html">featured in the New York Times</Link> talking about anti-trans harassment on Twitter. As part of smol farm, I am the lead writer of the <Link href="https://smol.news">smol farm Substack</Link>, which discusses everything from the technology to duck egg farming.
        </p>
    </main>
  )
}
