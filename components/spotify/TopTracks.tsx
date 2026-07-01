import Track from './Track'
import { Song } from '@/types/spotify'

const topTracks: Song[] = [
  {
    artist: 'Eminem ft. Nate Dogg',
    title: 'Till I Collapse',
    album: 'The Eminem Show',
    albumImageUrl: 'https://i.scdn.co/image/ab67616d00001e020fd968dd06c4a4227b22e4e9',
    songUrl: 'https://open.spotify.com/track/6PPRKnwToRK9GjTCV03vlG',
  },
  {
    artist: 'Imagine Dragons',
    title: 'Believer',
    album: 'Evolve',
    albumImageUrl: 'https://i.scdn.co/image/ab67616d00001e025675e83f707f1d7271e5cf8a',
    songUrl: 'https://open.spotify.com/track/0pqnGHJpmpxLKifKRmU6WP',
  },
  {
    artist: 'Eminem ft. Nate Dogg',
    title: 'Till I Collapse',
    album: 'The Eminem Show',
    albumImageUrl: 'https://i.scdn.co/image/ab67616d00001e020fd968dd06c4a4227b22e4e9',
    songUrl: 'https://open.spotify.com/track/6PPRKnwToRK9GjTCV03vlG',
  },
]

export default function TopTracks() {
  return (
    <div className="my-10">
      <h2 className="text-2xl font-extrabold leading-9 tracking-tight sm:text-3xl md:text-4xl">
        My <span className="text-green-700 dark:text-green-500">Workout Playlist</span>
      </h2>

      {topTracks.map((track, index) => (
        <Track key={track.title} ranking={index + 1} track={track} />
      ))}
    </div>
  )
}
