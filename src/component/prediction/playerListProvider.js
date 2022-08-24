// import React,{useMemo} from 'react'
// import player_names from '../predictionData/player_list.json'
// import player_namesA from '../predictionData/player_listA.json'
// import player_namesB from '../predictionData/player_listB.json'
// import player_namesC from '../predictionData/player_listC.json'
// import player_namesD from '../predictionData/player_listD.json'
// import player_namesE from '../predictionData/player_listE.json'
// import player_namesF from '../predictionData/player_listF.json'
// import player_namesG from '../predictionData/player_listG.json'
// import player_namesH from '../predictionData/player_listH.json'
// import player_namesI from '../predictionData/player_listI.json'
// import player_namesJ from '../predictionData/player_listJ.json'
// import player_namesK from '../predictionData/player_listK.json'
// import player_namesL from '../predictionData/player_listL.json'
// import player_namesM from '../predictionData/player_listM.json'
// import player_namesN from '../predictionData/player_listN.json'
// import player_namesO from '../predictionData/player_listO.json'
// import player_namesP from '../predictionData/player_listP.json'
// import player_namesQ from '../predictionData/player_listQ.json'
// import player_namesR from '../predictionData/player_listR.json'
// import player_namesS from '../predictionData/player_listS.json'
// import player_namesT from '../predictionData/player_listT.json'
// import player_namesU from '../predictionData/player_listU.json'
// import player_namesV from '../predictionData/player_listV.json'
// import player_namesW from '../predictionData/player_listT.json'

// export default function playerListProvider(playerName) {

//     // helper function from Json to array
//     function processData(match_names) {
//         const matches = Object.keys(match_names).map(key => { 
//           return match_names[key];
//         });
//         return matches;
//     }

//     const [playerName, setPlayerName] = useState('')

//     function PlayerSelector() {
//         const [value, setValue] = useState('')
//         const playersA = useMemo(() => processData(player_namesA), []);
//         const playersB = useMemo(() => processData(player_namesB), []);
//         const playersC = useMemo(() => processData(player_namesC), []);
//         const playersD = useMemo(() => processData(player_namesD), []);
//         const playersE = useMemo(() => processData(player_namesE), []);
//         const playersF = useMemo(() => processData(player_namesF), []);
//         const playersG = useMemo(() => processData(player_namesG), []);
//         const playersH = useMemo(() => processData(player_namesH), []);
//         const playersI = useMemo(() => processData(player_namesI), []);
//         const playersJ = useMemo(() => processData(player_namesJ), []);
//         const playersK = useMemo(() => processData(player_namesK), []);
//         const playersL = useMemo(() => processData(player_namesL), []);
//         const playersM = useMemo(() => processData(player_namesM), []);
//         const playersN = useMemo(() => processData(player_namesN), []);
//         const playersO = useMemo(() => processData(player_namesO), []);
//         const playersP = useMemo(() => processData(player_namesP), []);
//         const playersQ = useMemo(() => processData(player_namesQ), []);
//         const playersR = useMemo(() => processData(player_namesR), []);
//         const playersS = useMemo(() => processData(player_namesS), []);
//         const playersT = useMemo(() => processData(player_namesT), []);
//         const playersU = useMemo(() => processData(player_namesU), []);
//         const playersV = useMemo(() => processData(player_namesV), []);
//         const playersW = useMemo(() => processData(player_namesW), []);
//         const playersX = useMemo(() => processData(player_namesX), []);
//         const playersY = useMemo(() => processData(player_namesY), []);
//         const playersZ = useMemo(() => processData(player_namesZ), []);

//         let UsedSet=playersA
//         if(playerName.startsWith("A") || playerName.startsWith("a")){
//             UsedSet=playersA
//         }else if(playerName.startsWith("B") || playerName.startsWith("b")){
//             UsedSet=playersB
//         }else if(playerName.startsWith("C") || playerName.startsWith("c")){
//             UsedSet=playersC
//         }else if(playerName.startsWith("D") || playerName.startsWith("d")){
//             UsedSet=playersD
//         }else if(playerName.startsWith("E") || playerName.startsWith("e")){
//             UsedSet=playersE
//         }else if(playerName.startsWith("F") || playerName.startsWith("f")){
//             UsedSet=playersF
//         }else if(playerName.startsWith("G") || playerName.startsWith("g")){
//             UsedSet=playersG
//         }else if(playerName.startsWith("H") || playerName.startsWith("h")){
//             UsedSet=playersH
//         }else if(playerName.startsWith("I") || playerName.startsWith("i")){
//             UsedSet=playersI
//         }else if(playerName.startsWith("J") || playerName.startsWith("j")){
//             UsedSet=playersJ
//         }else if(playerName.startsWith("K") || playerName.startsWith("k")){
//             UsedSet=playersK
//         }else if(playerName.startsWith("L") || playerName.startsWith("L")){
//             UsedSet=playersL
//         }else if(playerName.startsWith("M") || playerName.startsWith("m")){
//             UsedSet=playersM
//         }else if(playerName.startsWith("N") || playerName.startsWith("n")){
//             UsedSet=playersN
//         }else if(playerName.startsWith("O") || playerName.startsWith("o")){
//             UsedSet=playersO
//         }else if(playerName.startsWith("P") || playerName.startsWith("p")){
//             UsedSet=playersP
//         }else if(playerName.startsWith("Q") || playerName.startsWith("q")){
//             UsedSet=playersQ
//         }else if(playerName.startsWith("R") || playerName.startsWith("r")){
//             UsedSet=playersR
//         }else if(playerName.startsWith("S") || playerName.startsWith("r")){
//             UsedSet=playersS
//         }else if(playerName.startsWith("T") || playerName.startsWith("r")){
//             UsedSet=playersT
//         }else if(playerName.startsWith("U") || playerName.startsWith("r")){
//             UsedSet=playersU
//         }else if(playerName.startsWith("V") || playerName.startsWith("r")){
//             UsedSet=playersV
//         }else if(playerName.startsWith("W") || playerName.startsWith("r")){
//             UsedSet=playersW
//         }else if(playerName.startsWith("X") || playerName.startsWith("r")){
//             UsedSet=playersX
//         }else if(playerName.startsWith("Y") || playerName.startsWith("r")){
//             UsedSet=playersY
//         }else if(playerName.startsWith("Z") || playerName.startsWith("r")){
//             UsedSet=playersZ
//         }
//         console.log(playerName)
        
//         return (<Selector options={UsedSet} value={value.value} onChange={(value) => {
//             console.log(value["value"]);
//             setFormData({ ...formData, p1: value["value"]});
//         }} /> )
//     }

    
//     // useEffect(() => {
//     //     document.title = PlayerSelector(playerName)
//     // })
// }