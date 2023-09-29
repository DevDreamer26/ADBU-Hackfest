import React from "react";
import './Leaderboard.css'

function Leaderboard(){
    return(
        <>
         <div className="leaderboard-container">
            <h1>Student Leaderboard</h1>
            <table className="leaderboard-table">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>95</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jane Smith</td>
                        <td>90</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Smith</td>
                        <td>90</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Alex</td>
                        <td>90</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Austin</td>
                        <td>90</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Aurora</td>
                        <td>90</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}
export default Leaderboard;