import Link from '../components/Link'
import Heading from '../components/Heading'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Thorne | gaming',
    description: 'Thorne is a passionate gamer from childhood. Watch her stream and track her gaming accomplishments!',
}

export default function Gaming() {
  return (
    <main className="container mx-auto pt-12 px-8">
        <Heading size={1}>gaming</Heading>

        <p className="mb-12">
            I have been a passionate gamer since I was a kid. I like having new and interesting ways to challenge and stimulate my brain and think gaming is an important form of exercise for the brain. I sometimes stream, so be sure to follow me on <Link href="https://twitch.tv/ens0plays">Twitch</Link>! I also built <Link href="https://smol.quest">smol quest</Link> to track game and achievement info.
        </p>

        <Heading size={2}>🎮 accounts</Heading>

        <ul className="list-disc ml-4">
            <li>Xbox: <Link href="https://smol.quest/gamertag/ens0plays">ens0plays</Link></li>
            <li>Steam: <Link href="https://smol.quest/steam/existentialenso/">ExistentialEnso</Link></li>
            <li>PSN: <Link href="https://smol.quest/psn/ExistentialEnso">ExistentialEnso</Link></li>
            <li>RetroAchievements: <Link href="https://smol.quest/ra/ens0">ens0</Link></li>
        </ul>
    </main>
  )
}
