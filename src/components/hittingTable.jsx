import React from 'react';
import "../styling/hittingTable.css"

function toFixed3(n) {
    if (!isFinite(n)) return "-";

    return n.toFixed(3);
}

function calcDerived(stats) {
  const { ab, h, b2, b3, hr, bb, hbp = 0, sf = 0 } = stats;
  const singles = Math.max(h - b2 - b3 - hr, 0);
  const tb = singles + 2 * b2 + 3 * b3 + 4 * hr; // total bases
  const avg = ab > 0 ? h / ab : 0;
  const obpDen = ab + bb + hbp + sf;
  const obp = obpDen > 0 ? (h + bb + hbp) / obpDen : 0;
  const slg = ab > 0 ? tb / ab : 0;
  const ops = obp + slg;
  return { singles, tb, avg, obp, slg, ops };
}

export default function hittingTable({player}) {


    return (
        <>
            <div className="stats-container">
            <h1 className="stats-title">Hitter Stats</h1>

            <div className="table-wrapper">
                <table className="table">
                <thead>
                    <tr>
                    <th>Player Name</th>
                    <th>AB</th>
                    <th>R</th>
                    <th>H</th>
                    <th>1B</th>
                    <th>2B</th>
                    <th>3B</th>
                    <th>HR</th>
                    <th>RBI</th>
                    <th>BB</th>
                    <th>K</th>
                    <th>SB</th>
                    <th>AVG</th>
                    <th>OBP</th>
                    <th>SLG</th>
                    <th>OPS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{player.name}</td>
                    <td>{player.stats.atBats}</td>
                    <td>{player.stats.runs}</td>
                    <td>{player.stats.hits}</td>
                    <td>{player.stats.singles}</td>
                    <td>{player.stats.doubles}</td>
                    <td>{player.stats.triples}</td>
                    <td>{player.stats.homeRuns}</td>
                    <td>{player.stats.rbis}</td>
                    <td>{player.stats.walks}</td>
                    <td>{player.stats.strikeouts}</td>
                    <td>{player.stats.stolenBases}</td>
                    <td className="tabular-nums">{toFixed3(player.stats.average) ?? 0}</td>
                    <td className="tabular-nums">{toFixed3(player.stats.onBase) ?? 0}</td>
                    <td className="tabular-nums">{toFixed3(player.stats.slugging) ?? 0}</td>
                    <td className="tabular-nums">{toFixed3(player.stats.ops) ?? 0}</td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </>
    );
}