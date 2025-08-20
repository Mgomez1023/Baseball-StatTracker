export function addPlayer(players, setPlayers, name) {
const newPlayer = {
    id: Date.now(),
    name: name,
    stats: {
        runs: 0,
        singles: 0,
        doubles: 0,
        triples: 0,
        homeRuns: 0,
        games: 0,
        atBats: 0,
        hits: 0,
        rbis: 0,
        walks: 0,
        strikeouts: 0,
        stolenBases: 0,
        caughtStealing: 0,
        average: 0.000,
        obp: 0.000,
        slg: 0.000,
        ops: 0.000,
    },
    gameHistory: []
};

const updatedPlayers = [...players, newPlayer];
setPlayers(updatedPlayers);

localStorage.setItem("players", JSON.stringify(updatedPlayers));
}



  
export function updatePlayer(selectedPlayer, setSelectedPlayer, formData, players, setPlayers) {
    if (!selectedPlayer) return;

    console.log("Form Data: ", formData);

    const updatedStats = {
        atBats: selectedPlayer.stats.atBats + Number(formData.atBats || 0),
        walks: selectedPlayer.stats.walks + Number(formData.walks || 0),
        singles: selectedPlayer.stats.singles + Number(formData.singles || 0),
        doubles: selectedPlayer.stats.doubles + Number(formData.doubles || 0),
        triples: selectedPlayer.stats.triples + Number(formData.triples || 0),
        homeRuns: selectedPlayer.stats.homeRuns + Number(formData.hr || 0),
        strikeouts: selectedPlayer.stats.strikeouts + Number(formData.strikeouts || 0),
        stolenBases: selectedPlayer.stats.stolenBases + Number(formData.stolenBases || 0),
        runsScored: selectedPlayer.stats.runsScored + Number(formData.runs || 0),
    };

    console.log("updated stats: ", updatedStats.atBats);
    // Map through players list and update the matching player by ID
    const updatedPlayers = players.map(player =>
        player.id === selectedPlayer.id
        ? {
            ...player,
            stats: {
                ...player.stats,
                ...updatedStats, // merge new stat values into existing stats
            },
            gameHistory: [...player.gameHistory, formData], // add game to history
            }
        : player
    );

    // Find the updated player object
    const updatedPlayer = updatedPlayers.find(p => p.id === selectedPlayer.id);

    const updatedUpdatedPlayer = calculatePlayerStats(updatedPlayer);

    console.log("updatedUpdatedPlayer: ", updatedUpdatedPlayer);

    // Update both states
    setPlayers(updatedPlayers);
    setSelectedPlayer(updatedPlayer);

    // Save updated players list to localStorage
    localStorage.setItem("players", JSON.stringify(updatedPlayers));

};


function calculatePlayerStats(selectedPlayer) {
  if (!selectedPlayer || !selectedPlayer.stats) return selectedPlayer;

  const statsq = selectedPlayer.stats;

  console.log("stats: ", statsq);

  const hits = statsq.singles + statsq.doubles + statsq.triples + statsq.homeRuns;
  console.log("hits: ", hits)
  const plateAppearances = statsq.atBats + statsq.walks;

  // Batting Average (AVG)
  const average = statsq.atBats > 0 ? hits / statsq.atBats : 0;

  // Slugging Percentage (SLG) → Total Bases / AB
  const totalBases = statsq.singles + (2 * statsq.doubles) + (3 * statsq.triples) + (4 * statsq.homeRuns);
  const slugging = statsq.atBats > 0 ? totalBases / statsq.atBats : 0;

  // On-Base Percentage (OBP) → (H + BB) / (AB + BB)
  const onBase = plateAppearances > 0 ? (hits + statsq.walks) / plateAppearances : 0;

  // OPS = OBP + SLG
  const ops = onBase + slugging;

  // Update the player’s stats object
  selectedPlayer.stats = {
    ...statsq,
    hits,
    plateAppearances,
    average: Number(average.toFixed(3)),  // rounded to 3 decimals like real baseball stats
    slugging: Number(slugging.toFixed(3)),
    onBase: Number(onBase.toFixed(3)),
    ops: Number(ops.toFixed(3)),
  };

  return selectedPlayer;
}