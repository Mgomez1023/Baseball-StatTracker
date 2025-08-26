import { useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import "../styling/playerList.css"

// src/components/PlayerList.jsx
function PlayerList({ players, setSelectedPlayer, onSelect, onDelete }) {
const [confirmOpen, setConfirmOpen] = useState(false);
const [playerToDelete, setPlayerToDelete] = useState(null);

const handleDeleteClick = (player) => {
  console.log("Delete clicked for player:", player);
  setPlayerToDelete(player);
  setConfirmOpen(true);
};

const confirmDelete = () => {
  if (playerToDelete) {
    onDelete(playerToDelete.id);
  }
  setConfirmOpen(false);
  setPlayerToDelete(null);
};

const cancelDelete = () => {
  setConfirmOpen(false);
  setPlayerToDelete(null);
}

  return (
    <>
      <div>
        <ul>
          {players.map((player) => (
            <>
              <div className="player-button">
                <button
                  key={player.id}
                  onClick={() => onSelect(player)}
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "18px",
                    margin: "0 auto",
                    height: "100%",
                    width: "90%",
                  }}
                >
                  {player.name}
                </button>
                <button
                  onClick={() => handleDeleteClick(player)}
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "18px",
                    justifyContent: "flex-end",
                  }}
                >
                  <FaRegTrashAlt />
                </button>
              </div>
            </>
          ))}
        </ul>

        {confirmOpen && (
          <div className="confirm-dialog">
            <p>Are you sure you want to delete {playerToDelete.name}?</p>
            <button className="button" onClick={confirmDelete}>Yes</button>
            <button className="button" onClick={cancelDelete}>No</button>
          </div>
        )}

      </div>
    
    </>
  );
}
export default PlayerList;