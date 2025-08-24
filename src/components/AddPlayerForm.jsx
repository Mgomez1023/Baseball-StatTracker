import { useState } from "react";
import "../styling/addPlayerForm.css"
import { updatePlayer } from "../utils/playerUtils"


export default function AddPlayerForm({ onCancel, selectedPlayer, setSelectedPlayer, players, setPlayers }) {
  const [formData, setFormData] = useState({
    date: "",
    opponent: "",
    atBats: 0,
    walks: 0,
    singles: 0,
    doubles: 0,
    triples: 0,
    hr: 0,
    strikeouts: 0,
    stolenBases: 0,
    runs: 0,
  });

  const [closing, setClosing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCancel = () => {
  setClosing(true);
  setTimeout(() => {
      onCancel();
      setClosing(false);
  }, 300); // duration of slide down animation
};
  const handleSubmit = (e) => {
    e.preventDefault();
    // convert numeric fields to numbers
    const numericFields = [
      "atBats",
      "walks",
      "singles",
      "doubles",
      "triples",
      "hr",
      "strikeouts",
      "stolenBases",
      "runs",
    ];

    handleCancel()

  };


  return (
    <div className="add-player-form" style={{
        animation: closing ? "slideDown 0.3s ease" : "slideUp 0.3s ease",
    }}>
      <form onSubmit={handleSubmit}>
        <h2 style={{color: "var(--main-blue)"}}>Add Player</h2>
        <div className="form-content1">


            <div>
                <label>
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    placeholder="Player Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>

            <div style={{ marginBottom: "0.5rem" }}>
                <label>
                    Team
                </label>
                <input
                    type="text"
                    name="team"
                    placeholder="Team"
                    value={formData.team}
                    onChange={handleChange}
                    required
                    />
            </div>

            <div style={{ marginBottom: "0.5rem" }}>
                <label>
                    Player Number
                </label>
                <input
                    type="number"
                    name="number"
                    placeholder="Player Number"
                    value={formData.number}
                    onChange={handleChange}
                />
            </div>


        </div>

        <div className="form-content2">
            <div style={{ marginBottom: "1.5rem" }}>
                <label>
                    Position
                </label>
                <select
                    name="position"
                    placeholder="Position"
                    value={formData.position}
                    onChange={handleChange}
                >
                    <option value="">Select Position</option>
                    <option value="P">Pitcher</option>
                    <option value="C">Catcher</option>
                    <option value="1B">First Base</option>
                    <option value="2B">Second Base</option>
                    <option value="3B">Third Base</option>
                    <option value="SS">Shortstop</option>
                    <option value="LF">Left Field</option>
                    <option value="CF">Center Field</option>
                    <option value="RF">Right Field</option>
                </select>
            </div>

            <div style={{ marginBottom: "0.5rem" }}>
                <label>
                    Bats:
                </label>
                <select
                    name="bats"
                    value={formData.walks}
                    onChange={handleChange}
                >
                    <option value="">Select Bats</option>
                    <option value="L">Left</option>
                    <option value="R">Right</option>
                    <option value="S">Switch</option>
                </select>
            </div>


            <div style={{ marginBottom: "0.5rem" }}>
                <label>
                    Throws:
                </label>
                <select
                    type="select"
                    name="throws"
                    placeholder="Throws"
                    value={formData.throws}
                    onChange={handleChange}
                >
                    <option value="">Select Throws</option>
                    <option value="L">Left</option>
                    <option value="R">Right</option>
                    <option value="S">Switch</option>
                </select>
            </div>

        </div>

        <div className="form-content3">

            <div className="questions">



                <div style={{ marginBottom: "1rem",}}>
                    <label style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        Height:
                    </label>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", gap: "1vw" }}>

                        <input
                            className="height-input"
                            type="number"
                            min="4"
                            max="7"
                            value={formData.feet}
                            onChange={handleChange}
                        /> ft
                        <input
                            className="height-input"
                            type="number"
                            min="0"
                            max="11"
                            value={formData.inches}
                            onChange={handleChange}
                        /> in

                    </div>
                </div>

                <div className="spacer"> </div>
                <div style={{ marginBottom: "0.5rem" }}>
                    <label>
                    Weight:
                    </label>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "0.5vw" }}>

                        <input
                            type="number"
                            min="100"
                            max="300"
                            value={formData.weight}
                            onChange={handleChange}
                        /> lbs.

                    </div>
                </div>
            </div>




        </div>

        <div style={{ marginTop: "1rem", display: "flex", justifyContent: "center", gap: "2vw", }}>
          <button type="button" className="submit-button" onClick={handleCancel}>
            Cancel
          </button>
          <button type="submit" className="cancel-button" onClick={() => {updatePlayer(selectedPlayer, setSelectedPlayer, formData, players, setPlayers); handleCancel;}}>Save Game</button>
        </div>
      </form>
      <style>
        {`
          @keyframes slideUp {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
          }
          @keyframes slideDown {
            from { transform: translateY(0); }
            to { transform: translateY(100%); }
          }
        `}
      </style>
    </div>
  );
}