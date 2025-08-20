import '../styling/topbar.css'
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { addPlayer } from "../utils/playerUtils"

const toggle = () => {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
  }
} 

export default function Topbar({players, setPlayers, selectedPlayer, setSelectedPlayer}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const [playerMenuOpen, setPlayerMenuOpen] = useState(false);
  const togglePlayerMenu = () => setPlayerMenuOpen(!playerMenuOpen);
  const [addMenuOpen, setAddMenuOpen] = useState(false);
  const toggleAddMenu = () => setAddMenuOpen(!addMenuOpen);

  const playerName = "michael jackson";

  return (
    <>

      <div className={`dropdown-drawer ${menuOpen ? 'open' : ''}`}> 

        <div className="drawer-header">

          <h2>StatTracker</h2>

          <button className="close-icon" onClick={toggleMenu} aria-label="Close Menu"> 
            <AiOutlineClose size={50} />
          </button>

        </div>

        <div className="dropdown-content">
          <ul>
            <button className="button" onClick={toggle}>Dark Mode</button>
          </ul>
        </div>
      </div>   

      <div className={`player-dropdown ${playerMenuOpen ? 'open' : ''}`}>
        <div className="player-header">
          <button className="close-icon-player" onClick={togglePlayerMenu} aria-label="Close Player Menu">
            <AiOutlineClose size={45} />
          </button>
          <h2>Players</h2>
        </div>

        <div className="dropdown-content">
          <ul>

            {/* Example: Show players from storage */}
            <ul>
              {players.map((player) => (
                <button
                  key={player.id}
                  onClick={() => {
                    setSelectedPlayer(player);
                    togglePlayerMenu();
                  }}                  
                  className="button"
                >
                  {player.name}
                </button>
              ))}
            </ul>

            {/* Example: Button to add a new player */}
            <button
              className="add-button"
              onClick={() =>
                addPlayer(players, setPlayers, playerName)
              }
            >
              Add Player
            </button>


          </ul>
        </div>
      </div>


      <div className="topbar">

        <button className="player-indicator" onClick={togglePlayerMenu}>{selectedPlayer.name}
          <MdKeyboardArrowDown className="down" size={30} />
        </button>

        <button className="menu-icon" onClick={toggleMenu}>
          <AiOutlineMenu size={45} />
        </button>

      </div>

    </>
  )
}