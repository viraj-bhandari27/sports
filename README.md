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