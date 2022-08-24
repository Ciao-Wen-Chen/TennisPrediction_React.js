// import React, { useState } from 'react'
// import Table from 'react-bootstrap/Table';

// export default function ScoreTable(setScore) {

//     console.log(setScore)

//     const [setScores, setSetScore] = useState([setScore])

//     return (
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>Set no.</th>
//               <th>Home Score</th>
//               <th>Away score</th>
//             </tr>
//           </thead>
          
//         <tbody>
//           {
//             setScores.map(item=>( //0,1,2
//                 <tr>
//                     <td>{item.number}</td>
//                     <td>{item.home_score}</td>
//                     <td>{item.away_score}</td>
//                 </tr>
//             ))
//           }

//             {/* <tr>
//               <td>1</td>
//               <td>Mark</td>
//               <td>Otto</td>
//               <td>@mdo</td>
//             </tr>
//             <tr>
//               <td>2</td>
//               <td>Jacob</td>
//               <td>Thornton</td>
//               <td>@fat</td>
//             </tr>
//             <tr>
//               <td>3</td>
//               <td colSpan={2}>Larry the Bird</td>
//               <td>@twitter</td>
//             </tr> */}
//           </tbody>
//         </Table>
//       );
// }
