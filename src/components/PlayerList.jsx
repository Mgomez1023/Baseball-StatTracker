// src/components/PlayerList.jsx
function PlayerList({ players, onSelect }) {
  return (
    <div>
      <h2>Players</h2>
      <ul>
        {players.map((p) => (
          <li key={p.id}>
            <button onClick={() => onSelect(p)}>{p.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default PlayerList;