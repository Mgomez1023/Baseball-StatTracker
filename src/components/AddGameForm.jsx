import { useState } from "react";
import "../styling/addGameForm.css"
import { updatePlayer } from "../utils/playerUtils"


export default function AddGameForm({ onCancel, onSubmit, selectedPlayer, setSelectedPlayer, players, setPlayers }) {
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

    const cleanedData = {
      ...formData,
      ...Object.fromEntries(
        numericFields.map((f) => [f, Number(formData[f] || 0)])
      ),
    };
  };


  return (
    <div className="add-game-form" style={{
        animation: closing ? "slideDown 0.3s ease" : "slideUp 0.3s ease",
    }}>
      <form onSubmit={handleSubmit}>
        <h2>Add Game</h2>
        <div className="form-content1">


            <div style={{ marginBottom: "0.5rem"}}>
                <label>
                    Date
                </label>
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />
            </div>

            <div style={{ marginBottom: "0.5rem" }}>
                <label>
                    Opponent
                </label>
                <input
                    type="text"
                    name="opponent"
                    placeholder="Opponent"
                    value={formData.opponent}
                    onChange={handleChange}
                    required
                    />
            </div>

            <div style={{ marginBottom: "0.5rem" }}>
                <label>
                    At Bats
                </label>
                <input
                    type="number"
                    name="atBats"
                    placeholder="At Bats"
                    value={formData.atBats}
                    onChange={handleChange}
                    />
            </div>

        </div>

        <div className="form-content1">

            <div style={{ marginBottom: "0.5rem" }}>
                <label>
                    Walks
                </label>
                <input
                    type="number"
                    name="walks"
                    placeholder="Walks"
                    value={formData.walks}
                    onChange={handleChange}
                    />
            </div>


            <div style={{ marginBottom: "0.5rem" }}>
                <label>
                    Singles
                </label>
                <input
                    type="number"
                    name="singles"
                    placeholder="Singles"
                    value={formData.singles}
                    onChange={handleChange}
                />
            </div>

            <div style={{ marginBottom: "0.5rem" }}>
                <label>
                    Doubles
                </label>
                <input
                    type="number"
                    name="doubles"
                    placeholder="Doubles"
                    value={formData.doubles}
                    onChange={handleChange}
                />
            </div>
        </div>

        <div className="form-content1">

            <div style={{ marginBottom: "0.5rem" }}>
                <label>
                    Triples
                </label>
                <input
                    type="number"
                    name="triples"
                    placeholder="Triples"
                    value={formData.triples}
                    onChange={handleChange}
                />
            </div>

            <div style={{ marginBottom: "0.5rem" }}>
                <label>
                    Home Runs
                </label>
                <input
                    type="number"
                    name="hr"
                    placeholder="Home Runs"
                    value={formData.hr}
                    onChange={handleChange}
                />
            </div>


            <div style={{ marginBottom: "0.5rem" }}>
                <label>
                    Strikeouts
                </label>
                <input
                    type="number"
                    name="strikeouts"
                    placeholder="Strikeouts"
                    value={formData.strikeouts}
                    onChange={handleChange}
                />
            </div>
        </div>
        
        <div className="form-content1">
            <div style={{ marginBottom: "0.5rem" }}>
                <label>
                    Stolen Bases
                </label>
                <input
                    type="number"
                    name="stolenBases"
                    placeholder="Stolen Bases"
                    value={formData.stolenBases}
                    onChange={handleChange}
                />
            </div>

            <div style={{ marginBottom: "0.5rem" }}>
                <label>
                    Runs Scored
                </label>
                <input
                    type="number"
                    name="runs"
                    placeholder="Runs Scored"
                    value={formData.runs}
                    onChange={handleChange}
                />
            </div>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <button type="submit" className="cancel-button" onClick={() => {updatePlayer(selectedPlayer, setSelectedPlayer, formData, players, setPlayers); handleCancel;}}>Save Game</button>
          <button type="button" className="submit-button" onClick={handleCancel}>
            Cancel
          </button>
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