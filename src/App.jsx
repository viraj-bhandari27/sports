import { useEffect, useState } from 'react'
import { findLeagues } from './services/LeagueService'
import { findPlayer } from './services/PlayerService'
import './App.css'

const leagueDefaults = [
  { name: 'NFL', sport: 'American Football', count: '32 teams', mark: 'NFL', color: 'red' },
  { name: 'NBA', sport: 'Basketball', count: '30 teams', mark: 'NBA', color: 'orange' },
  { name: 'MLB', sport: 'Baseball', count: '30 teams', mark: 'MLB', color: 'blue' },
]

const playerDefaults = [
  { name: 'LeBron James', team: 'Los Angeles Lakers', stat: '25.7 PPG', initials: 'LJ' },
  { name: 'Shohei Ohtani', team: 'Los Angeles Dodgers', stat: '54 HR', initials: 'SO' },
  { name: 'Patrick Mahomes', team: 'Kansas City Chiefs', stat: '4,183 PASS YDS', initials: 'PM' },
]

const sports = ['All', 'NFL', 'NBA', 'MLB', 'Premier League', 'La Liga', 'F1']

function App() {
  const [activeSport, setActiveSport] = useState('All')
  const [leagues, setLeagues] = useState(leagueDefaults)
  const [players, setPlayers] = useState(playerDefaults)
  const [query, setQuery] = useState('')
  const [searchResults, setSearchResults] = useState(null)
  const [searching, setSearching] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [scoreOpen, setScoreOpen] = useState(false)

  useEffect(() => {
    let mounted = true

    Promise.all([
      Promise.all(leagueDefaults.map(async (league) => {
        try {
          const response = await findLeagues(league.sport)
          const matchingLeague = response.data?.leagues?.find((item) =>
            item.strLeague?.toUpperCase().includes(league.name),
          )
          return matchingLeague
            ? { ...league, badge: matchingLeague.strBadge || matchingLeague.strLogo }
            : league
        } catch {
          return league
        }
      })),
      Promise.all(playerDefaults.map(async (player) => {
        try {
          const response = await findPlayer(player.name)
          const match = response.data?.player?.[0]
          return match
            ? { ...player, name: match.strPlayer, team: match.strTeam || player.team, image: match.strThumb || match.strCutout }
            : player
        } catch {
          return player
        }
      })),
    ]).then(([leagueData, playerData]) => {
      if (mounted) {
        setLeagues(leagueData)
        setPlayers(playerData)
      }
    })

    return () => {
      mounted = false
    }
  }, [])

  async function handleSearch(event) {
    event.preventDefault()
    const searchTerm = query.trim()
    if (!searchTerm) {
      setSearchResults(null)
      return
    }

    setSearching(true)
    const [playerResult, teamResult] = await Promise.allSettled([
      findPlayer(searchTerm),
      import('./services/TeamService').then(({ findTeam }) => findTeam(searchTerm)),
    ])
    const results = [
      ...(playerResult.status === 'fulfilled' ? (playerResult.value.data?.player || []).map((item) => ({
        type: 'Player', name: item.strPlayer, detail: item.strTeam,
      })) : []),
      ...(teamResult.status === 'fulfilled' ? (teamResult.value.data?.teams || []).map((item) => ({
        type: 'Team', name: item.strTeam, detail: item.strLeague,
      })) : []),
    ]
    setSearchResults(results)
    setSearching(false)
  }

  return (
    <main className="sports-app">
      <div className="page-title">Home Page (League Hub)</div>
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="Sports Tracker home">
          <span className="brand-mark"><span /></span>
          <span>SPORTS<span className="wordmark-light">TRACKER</span></span>
        </a>
        <form className="search-form" onSubmit={handleSearch} role="search">
          <span className="search-icon" aria-hidden="true" />
          <input
            aria-label="Search teams and players"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onFocus={() => setSearchResults(null)}
            placeholder="Search teams, players..."
          />
          <button className="search-submit" type="submit" aria-label="Search">
            {searching ? '...' : '↵'}
          </button>
          {searchResults && (
            <div className="search-results">
              {searchResults.length ? searchResults.slice(0, 5).map((result, index) => (
                <div className="search-result" key={`${result.type}-${result.name}-${index}`}>
                  <span className="result-type">{result.type}</span>
                  <span><strong>{result.name}</strong><small>{result.detail || 'Sports Tracker'}</small></span>
                </div>
              )) : <p className="empty-results">No matches found. Try another name.</p>}
            </div>
          )}
        </form>
        <div className="profile-wrap">
          <button className="profile-button" type="button" onClick={() => setProfileOpen(!profileOpen)} aria-label="Open profile menu" aria-expanded={profileOpen}>
            <span className="profile-avatar">JD</span><span className="profile-label">Profile</span>
          </button>
          {profileOpen && <div className="profile-menu"><strong>Welcome back</strong><span>Your sports, all in one place.</span><button type="button" onClick={() => setProfileOpen(false)}>Close</button></div>}
        </div>
      </header>

      <nav className="sport-nav" aria-label="Sports">
        {sports.map((sport) => (
          <button className={activeSport === sport ? 'nav-item active' : 'nav-item'} key={sport} type="button" onClick={() => setActiveSport(sport)}>
            {sport}
          </button>
        ))}
      </nav>

      <div className="home-content" id="home">
        <section className="featured-section" aria-labelledby="featured-heading">
          <div className="featured-game">
            <div className="featured-copy">
              <h1 className="featured-title" id="featured-heading">HERO BANNER / FEATURED GAME</h1>
              <p className="game-label"><span className="live-tag">LIVE</span> NBA Finals · Game 7</p>
              <div className="scoreboard">
                <div className="score-team"><span className="team-monogram celtics">BOS</span><span>Boston Celtics</span></div>
                <div className="score-center"><strong>108 <i>:</i> 104</strong><span>FINAL · Q4 02:15</span></div>
                <div className="score-team away"><span>Los Angeles Lakers</span><span className="team-monogram lakers">LA</span></div>
              </div>
              <div className="game-actions">
                <button className="button-primary" type="button" onClick={() => setScoreOpen(true)}>View Box Score</button>
                <button className="button-secondary" type="button" onClick={() => setScoreOpen(true)}>Watch Highlights</button>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section league-section" aria-labelledby="league-heading">
          <div className="section-heading">
            <h2 id="league-heading">EXPLORE LEAGUES</h2>
          </div>
          <div className="league-grid">
            {leagues.map((league) => (
              <article className={`league-card ${league.color}`} key={league.name}>
                <span className="league-card-top"><span className="league-category">{league.sport}</span><span className="arrow-mark" aria-hidden="true">↗</span></span>
                <span className="league-brand">
                  {league.badge ? <img src={league.badge} alt={`${league.name} logo`} /> : <span className={`league-monogram ${league.color}`}>{league.mark}</span>}
                </span>
                <span className="league-card-bottom"><strong>{league.name}</strong><span>{league.count}</span></span>
                <button className="explore-button" type="button" onClick={() => setActiveSport(league.name)}>Explore</button>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section trending-section" aria-labelledby="trending-heading">
          <div className="section-heading trending-heading">
            <h2 id="trending-heading">TOP TRENDING PLAYERS</h2>
          </div>
          <div className="player-grid">
            {players.map((player, index) => (
              <article className="player-card" key={player.name}>
                <div className={`player-portrait portrait-${index}`}>
                  {player.image ? <img src={player.image} alt={player.name} /> : <span>{player.initials}</span>}
                  <span className="player-rank">0{index + 1}</span>
                </div>
                <div className="player-info"><h3>{player.name}</h3><span className="player-team">{player.team}</span><span className="player-stat">{player.stat}</span></div>
              </article>
            ))}
          </div>
        </section>
        <footer className="page-footer"><span>SPORTS TRACKER</span><span>EVERY LEAGUE. EVERY MOMENT.</span><span>EST. 2026</span></footer>
      </div>

      {scoreOpen && (
        <div className="modal-backdrop" role="presentation" onClick={(event) => { if (event.target === event.currentTarget) setScoreOpen(false) }}>
          <section className="score-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <button className="modal-close" type="button" onClick={() => setScoreOpen(false)} aria-label="Close box score">×</button>
            <p className="eyebrow">NBA · FINAL</p><h2 id="modal-title">Boston Celtics <span>108</span></h2><h2>Los Angeles Lakers <span>104</span></h2>
            <p className="modal-note">Box score details will appear here when the game feed is connected.</p>
          </section>
        </div>
      )}
    </main>
  )
}

export default App
