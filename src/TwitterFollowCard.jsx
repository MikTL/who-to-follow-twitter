import { useState } from 'react'

export function TwitterFollowCard ({ children, userName = 'unknow', initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const text = isFollowing ? 'Following' : 'Follow'
  const buttonClassname = isFollowing ? 'tw-follow-button is-following' : 'tw-follow-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }
  return (
    <article className='tw-follow-card'>
      <header className='tw-follow-card-header'>
        <img
          className='tw-follow-card-avatar'
          src={`https://unavatar.io/${userName}`}
          alt='El profe Midu'
        />
        <div className='tw-follow-cardInfo'>
          <strong>{children}</strong>
          <span className='tw-follow-cardInfoUserName'>@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassname} onClick={handleClick}>
          <span className='tw-card-text-followIng'>
            {text}
          </span>
          <span className='tw-card-text-unfollow'>
            Unfollow
          </span>
        </button>
      </aside>

    </article>
  )
}
