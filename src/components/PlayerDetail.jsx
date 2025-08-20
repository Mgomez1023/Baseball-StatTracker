import { useState } from "react";

function PlayerDetail({ player, onUpdate }) {
  const [editablePlayer, setEditablePlayer] = useState(player);

  const handleChange = (stat, value) => {
    setEditablePlayer({
      ...editablePlayer,
      stats: { ...editablePlayer.stats, [stat]: Number(value) },
    });
  };

  const handleSave = () => {
    onUpdate(editablePlayer);
  };

  return (
    <div>
      <h2>{editablePlayer.name}</h2>
      <div>
        {Object.entries(editablePlayer.stats).map(([key, value]) => (
          <div key={key}>
            <label>
              {key}:{" "}
              <input
                type="number"
                value={value}
                onChange={(e) => handleChange(key, e.target.value)}
              />
            </label>
          </div>
        ))}
      </div>
      <button onClick={handleSave}>Save Changes</button>
    </div>
  );
}

export default PlayerDetail;