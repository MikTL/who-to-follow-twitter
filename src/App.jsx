import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App () {
  const users = [
    {
      userName: 'midudev',
      name: 'Miguel Ángel Durán',
      isFollowig: true
    },
    {
      userName: 'saylor',
      name: 'Michael Saylor',
      isFollowig: false
    },
    {
      userName: 'kumparan',
      name: 'Kumparan',
      isFollowig: false
    }
  ]

  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowig }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowig}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}
