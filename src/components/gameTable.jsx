import React from 'react';
import "../styling/gameTable.css"

export default function GameTable({player}) {

    return (
        <>
            <div className="stats-container">
            <h1 className="stats-title">Game History</h1>

            <div className="table-wrapper">
                <table className="table">
                <thead>
                    <tr>
                    <th>Date</th>
                    <th>Opponent</th>
                    <th>AB</th>
                    <th>1B</th>
                    <th>2B</th>
                    <th>3B</th>
                    <th>HR</th>
                    <th>RBI</th>
                    <th>BB</th>
                    <th>K</th>
                    <th>SB</th>
                    </tr>
                </thead>
                <tbody>

                    {player.gameHistory.length > 0 ? (
                        player.gameHistory.map((game, index) => (
                        <tr key={index}>
                            <td>{game.date}</td>
                            <td>{game.opponent}</td>
                            <td>{game.atBats ?? 0}</td>
                            <td>{game.singles ?? 0}</td>
                            <td>{game.doubles ?? 0}</td>
                            <td>{game.triples ?? 0}</td>
                            <td>{game.homeRuns ?? 0}</td>
                            <td>{game.rbis ?? 0}</td>
                            <td>{game.walks ?? 0}</td>
                            <td>{game.strikeouts ?? 0}</td>
                            <td>{game.stolenBases ?? 0}</td>
                        </tr>
                        ))
                    ) : (
                        <tr>
                        <td colSpan="11" style={{ textAlign: "center" }}>
                            No games recorded
                        </td>
                        </tr>
                    )}

                </tbody>
                </table>
            </div>

            <div className="stats-footnote">
                <p>Derived stats use standard formulas:</p>
                <ul>
                <li>AVG = H / AB</li>
                <li>OBP = (H + BB + HBP) / (AB + BB + HBP + SF)</li>
                <li>SLG = Total Bases / AB</li>
                <li>OPS = OBP + SLG</li>
                </ul>
            </div>
            </div>
        </>
    );
}