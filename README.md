# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



## Endpoints

1. Filter Leagues by Sport or CountryUse search_all_leagues.php with parameters like s (sport) or c (country):
- NFL / American Football:[https://www.thesportsdb.com/api/v1/json/123/search_all_leagues.php?s=American%20Football](https://www.thesportsdb.com/api/v1/json/123/search_all_leagues.php?s=American%20Football)
- NBA / Basketball:[https://www.thesportsdb.com/api/v1/json/123/search_all_leagues.php?s=Basketball](https://www.thesportsdb.com/api/v1/json/123/search_all_leagues.php?s=Basketball)
- MLB / Baseball:[https://www.thesportsdb.com/api/v1/json/123/search_all_leagues.php?s=Baseball](https://www.thesportsdb.com/api/v1/json/123/search_all_leagues.php?s=Baseball)
- All US Leagues:[https://www.thesportsdb.com/api/v1/json/123/search_all_leagues.php?c=United%20States](https://www.thesportsdb.com/api/v1/json/123/search_all_leagues.php?c=United%20States)

2. Fetch Teams directly by League NameInstead of pulling every league first, fetch the teams for a given league directly via search_all_teams.php:
- NFL Teams:[https://www.thesportsdb.com/api/v1/json/123/search_all_teams.php?l=NFL](https://www.thesportsdb.com/api/v1/json/123/search_all_teams.php?l=NFL)
- NBA Teams:[https://www.thesportsdb.com/api/v1/json/123/search_all_teams.php?l=NBA](https://www.thesportsdb.com/api/v1/json/123/search_all_teams.php?l=NBA)
- MLB Teams:[https://www.thesportsdb.com/api/v1/json/123/search_all_teams.php?l=MLB](https://www.thesportsdb.com/api/v1/json/123/search_all_teams.php?l=MLB)

3. Fetch Players by Team IDOnce you fetch team details using the endpoints above, grab each team's idTeam integer and query lookup_all_players.php:
- Roster for a Team (e.g., Dallas Cowboys ID 134920):[https://www.thesportsdb.com/api/v1/json/123/lookup_all_players.php?id=134920](https://www.thesportsdb.com/api/v1/json/123/lookup_all_players.php?id=134920)

4. Fetch Player Stats
- Specific Player Statistics ( e.g., Lebron James ID 34153733 ):[https://www.thesportsdb.com/api/v1/json/123/lookupplayerstats.php?id=34153733]
## Endpoints

1. Filter Leagues by Sport or CountryUse search_all_leagues.php with parameters like s (sport) or c (country):
- NFL / American Football:[https://www.thesportsdb.com/api/v1/json/123/search_all_leagues.php?s=American%20Football](https://www.thesportsdb.com/api/v1/json/123/search_all_leagues.php?s=American%20Football)
- NBA / Basketball:[https://www.thesportsdb.com/api/v1/json/123/search_all_leagues.php?s=Basketball](https://www.thesportsdb.com/api/v1/json/123/search_all_leagues.php?s=Basketball)
- MLB / Baseball:[https://www.thesportsdb.com/api/v1/json/123/search_all_leagues.php?s=Baseball](https://www.thesportsdb.com/api/v1/json/123/search_all_leagues.php?s=Baseball)
- All US Leagues:[https://www.thesportsdb.com/api/v1/json/123/search_all_leagues.php?c=United%20States](https://www.thesportsdb.com/api/v1/json/123/search_all_leagues.php?c=United%20States)

2. Fetch Teams directly by League NameInstead of pulling every league first, fetch the teams for a given league directly via search_all_teams.php:
- NFL Teams:[https://www.thesportsdb.com/api/v1/json/123/search_all_teams.php?l=NFL](https://www.thesportsdb.com/api/v1/json/123/search_all_teams.php?l=NFL)
- NBA Teams:[https://www.thesportsdb.com/api/v1/json/123/search_all_teams.php?l=NBA](https://www.thesportsdb.com/api/v1/json/123/search_all_teams.php?l=NBA)
- MLB Teams:[https://www.thesportsdb.com/api/v1/json/123/search_all_teams.php?l=MLB](https://www.thesportsdb.com/api/v1/json/123/search_all_teams.php?l=MLB)

3. Fetch Players by Team IDOnce you fetch team details using the endpoints above, grab each team's idTeam integer and query lookup_all_players.php:
- Roster for a Team (e.g., Dallas Cowboys ID 134920):[https://www.thesportsdb.com/api/v1/json/123/lookup_all_players.php?id=134920](https://www.thesportsdb.com/api/v1/json/123/lookup_all_players.php?id=134920)

4. Fetch Player Stats
- Specific Player Statistics ( e.g., Lebron James ID 34153733 ):[https://www.thesportsdb.com/api/v1/json/123/lookupplayerstats.php?id=34153733]

6. Search for a Player by Name
Use searchplayers.php to find a player and retrieve their idPlayer:- Search for LeBron James:
  https://www.thesportsdb.com/api/v1/json/123/searchplayers.php?p=LeBron_James

7. Fetch Player Details by Player ID
Once you have an idPlayer, use lookupplayer.php to retrieve the player's profile information:- LeBron James Details:
  https://www.thesportsdb.com/api/v1/json/123/lookupplayer.php?id=34153733

8. Search for a Team by Name
Use searchteams.php to retrieve information about a specific team:- Los Angeles Lakers:
  https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Los_Angeles_Lakers

9. Fetch Games by Date
Use eventsday.php to retrieve games on a particular date. You can filter by league using the league ID:- NBA Games on February 1, 2026 (NBA League ID 4387):
  https://www.thesportsdb.com/api/v1/json/123/eventsday.php?d=2026-02-01&l=4387

10. Fetch an Entire Season's Games
Use eventsseason.php with a league ID and season to retrieve events for that season:- NBA 2025-2026 Season:
  https://www.thesportsdb.com/api/v1/json/123/eventsseason.php?id=4387&s=2025-2026

11. Fetch a Specific Game by Event ID
Once you have an idEvent, use lookupevent.php to retrieve information about that game:- Miami Heat vs Chicago Bulls (Event ID 2358055):
  https://www.thesportsdb.com/api/v1/json/123/lookupevent.php?id=2358055

12. Fetch Event Results
Use eventresults.php with an idEvent to retrieve the result information for a specific event:- Event Results:
  https://www.thesportsdb.com/api/v1/json/123/eventresults.php?id=2358055

13. Fetch Event Lineup
Use lookuplineup.php with an idEvent to retrieve lineup information when available:- Event Lineup:
  https://www.thesportsdb.com/api/v1/json/123/lookuplineup.php?id=2358055

14. Fetch Event Timeline
Use lookuptimeline.php with an idEvent to retrieve timeline information when available:- Event Timeline:
  https://www.thesportsdb.com/api/v1/json/123/lookuptimeline.php?id=2358055

15. Fetch Event Statistics
Use lookupeventstats.php with an idEvent to retrieve game statistics when available:- Event Statistics:
  https://www.thesportsdb.com/api/v1/json/123/lookupeventstats.php?id=2358055
