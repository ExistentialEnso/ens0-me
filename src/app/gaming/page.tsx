import Link from '../components/Link'
import Heading from '../components/Heading'
import type { Metadata } from 'next'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'Thorne | gaming',
  description: 'Thorne is a passionate gamer from childhood. Watch her stream and track her gaming accomplishments!',
}

export default function Gaming() {
  return (
    <main className="container mx-auto pt-12 px-8">
        <Heading size={1}>gaming</Heading>

        <p className="mb-12">
            I have been a passionate gamer since I was a kid. I like having new and interesting ways to challenge and stimulate my brain and think gaming is an important form of exercise for the brain. I sometimes stream, so be sure to follow me on <Link href="https://twitch.tv/ens0plays">Twitch</Link>!
        </p>

        <Heading size={2}>🎮 accounts</Heading>

        <ul className="list-disc ml-4">
            <li>Xbox: <Link href="https://www.trueachievements.com/gamer/ens0plays">ens0plays</Link></li>
            <li>Steam: <Link href="https://steamcommunity.com/id/existentialenso/">ExistentialEnso</Link></li>
            <li>PSN: <Link href="https://www.truetrophies.com/gamer/ExistentialEnso">ExistentialEnso</Link></li>
        </ul>
    </main>
  )
}
