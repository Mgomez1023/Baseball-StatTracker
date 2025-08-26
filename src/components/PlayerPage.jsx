import React from "react";
import PlayerList from "./PlayerList";
import AddPlayerForm from "./AddPlayerForm";
import "../styling/playerPage.css"

function PlayerPage({ players, onCancel, selectedPlayer, setSelectedPlayer, setPlayers }) {
    const [showForm, setShowForm] = React.useState(false);

  return (
    <div className="player-page">
      {players.length === 0 ? (
        <div className="empty-state">
          <p className="empty-text">No players added. Add one now.</p>
            {/* Example: Button to add a new player */}
            <button
              className="add-button"
              onClick={() =>
                setShowForm(true)
              }
            >
              Add Player
            </button>

            {showForm && (
              <AddPlayerForm 
                onCancel={() => setShowForm(false)}
                selectedPlayer={selectedPlayer}
                setSelectedPlayer={setSelectedPlayer}
                players={players}
                setPlayers={setPlayers}
              />
            )}
        </div>
      ) : (
        <div>didnt work</div>
      )}
    </div>
  );
}

export default PlayerPage;