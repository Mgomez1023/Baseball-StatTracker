import { useState, React, useEffect } from 'react'
import { createPlayer, savePlayers, loadPlayers } from "./utils/playerStorage"
import PlayerList from "./components/PlayerList"
import PlayerDetail from "./components/PlayerDetail"
import Topbar from './components/Topbar'
import HittingTable from './components/hittingTable'
import GameTable from './components/gameTable'
import AddGameForm from './components/AddGameForm'
import PlayerPage from './components/PlayerPage'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0);
  const [players, setPlayers] = useState(() => loadPlayers());
  const [selectedPlayer, setSelectedPlayer] = useState(players[0]);
  const [showForm, setShowForm] = useState(false);

  console.log("players: ", players);

  const handleAddGame = (gameData) => {
  if (!selectedPlayer) return;

  const updatedPlayer = {
    ...selectedPlayer,
    gameHistory: [...selectedPlayer.gameHistory, gameData],
  };

  const updatedPlayers = players.map((p) =>
    p.id === selectedPlayer.id ? updatedPlayer : p
  );

    setPlayers(updatedPlayers);
    setSelectedPlayer(updatedPlayer);
    savePlayers(updatedPlayers);
    setShowForm(false);
  };  


  return (
    <>
      {players.length === 0 ? (

        <PlayerPage 
          players={players} 
          onSelect={setSelectedPlayer} 
          onAdd={setPlayers} 
          onCancel={() => setShowForm(false)}
          selectedPlayer={selectedPlayer}
          setSelectedPlayer={setSelectedPlayer}
          setPlayers={setPlayers}
        />


      ) : (


        <div className="main-container">
          <Topbar className="topbar" players={players} setPlayers={setPlayers} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} />

          <div className="content"> 
            <div className="player-info"> 

              <h2 className="player-name">{selectedPlayer.name}</h2>

              <div className="info-content1">
                <p>Team: {selectedPlayer.team}</p>
                <p>Number: {selectedPlayer.number}</p>
              </div>

              <div className="info-content1">
                <p>Position: {selectedPlayer.position}</p>
                <p>Bats: {selectedPlayer.bats}</p>
                <p>Throws: {selectedPlayer.throws}</p>
              </div>

              <div className="info-content1"> 
                <p>Height: {selectedPlayer.feet}' {selectedPlayer.inches}"</p>
                <p>Weight: {selectedPlayer.weight} lbs</p>
              </div>

            </div>
            <div className="player-content">
              <div className="label1">
                <div className="number">
                  {selectedPlayer.stats.average.toFixed(3)}
                </div>
                <div className="label">
                  AVG
                </div>
              </div>

              <div className="label2">
                <div className="number">
                  {selectedPlayer.stats.atBats}
                </div>
                <div className="label">
                  AB
                </div>
              </div>
            </div>
            
            <div className="tables">

              {selectedPlayer ? (
                <>
                  <HittingTable player={selectedPlayer} />
                  <GameTable player={selectedPlayer}/>
                </>
              ) : (
                <p>Please select a player</p>
              )}


            </div>
          </div>

          <div className="bottom-container">
            <button className="button" onClick={() => setShowForm(true)}>Add Game</button>

            {showForm && (
              <AddGameForm 
                onCancel={() => setShowForm(false)}
                onSubmit={handleAddGame}
                selectedPlayer={selectedPlayer}
                setSelectedPlayer={setSelectedPlayer}
                players={players}
                setPlayers={setPlayers}
              />
            )}
          </div>

        </div>
      )}
    </>
  )
}

export default App
