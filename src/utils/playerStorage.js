// Example player object
export const createPlayer = (name) => ({
  id: Date.now(),
  name,
  stats: {
    gamesPlayed: 0,
    atBats: 0,
    hits: 0,
    runs: 0,
    homeRuns: 0,
    rbis: 0,
    walks: 0,
    strikeouts: 0,
  },
  gameHistory: [],
});

// Local storage functions
export const savePlayers = (players) => {
  localStorage.setItem("players", JSON.stringify(players));
};

export const loadPlayers = () => {
  const data = localStorage.getItem("players");
  try {
    const parsed = data ? JSON.parse(data) : [];
    console.log("load function: ", parsed);
    return parsed;
  } catch (e) {
    console.error("Failed to parse players from localStorage", e);
    return [];
  }
};

const defaultPlayer = {
    id: 1,
    name: "Mike Trout",
    team: "Angels",
    position: "CF",
    stats: {
      runs: 3,
      singles: 2,
      doubles: 3,
      triples: 1,
      homeRuns: 2,
      games: 1,
      atBats: 4,
      hits: 2,
      homeRuns: 1,
      rbis: 3,
      walks: 1,
      strikeouts: 0,
      stolenBases: 2,
      caughtStealing: 1,
      average: 0.500,
      obp: 0.467,
      slg: 0.840,
      ops: 1.307,
    },
    gameHistory: [
      {
        date: "2025-08-18",
        opponent: "Yankees",
        atBats: 4,
        hits: 0,
        doubles: 0,
        triples: 0,
        homeRuns: 0,
        rbis: 0,
        walks: 0,
        strikeouts: 4,
        sb: 1
      },
      {
        date: "2025-08-18",
        opponent: "Yankees",
        atBats: 4,
        hits: 3,
        doubles: 1,
        triples: 2,
        homeRuns: 0,
        rbis: 3,
        walks: 0,
        strikeouts: 1,
        sb: 1
      }
    ]
  };

    const secondPlayer = {
    id: 2,
    name: "Aaron Judge",
    team: "Yankees",
    position: "RF",
    stats: {
      runs: 47,
      singles: 103,
      doubles: 32,
      triples: 31,
      homeRuns: 99,
      games: 553,
      atBats: 1053,
      hits: 999,
      rbis: 436,
      walks: 1,
      strikeouts: 0,
      stolenBases: 2,
      caughtStealing: 1,
      average: 0.750,
      obp: 0.467,
      slg: 3.840,
      ops: 9.307,
    },
    gameHistory: [
      {
        date: "2025-08-18",
        opponent: "Angels",
        atBats: 3,
        hits: 34,
        doubles: 45,
        triples: 4,
        homeRuns: 23,
        rbis: 23,
        walks: 0,
        strikeouts: 1,
        sb: 3
      },
      {
        date: "2025-08-19",
        opponent: "Angels",
        atBats: 4,
        hits: 3,
        doubles: 1,
        triples: 2,
        homeRuns: 4,
        rbis: 23,
        walks: 0,
        strikeouts: 1,
        sb: 3
      }
    ]
  };
  
  localStorage.setItem("players", JSON.stringify([defaultPlayer, secondPlayer]));

