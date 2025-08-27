export default function PlayerInfoCard({ selectedPlayer }) {
  return (
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
  )};