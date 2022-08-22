import React,{useMemo} from 'react'
import player_names from './player_list.json'
import player_namesA from './player_listA.json'
import player_namesB from './player_listB.json'
import player_namesC from './player_listC.json'
import player_namesD from './player_listD.json'
import player_namesE from './player_listE.json'
import player_namesF from './player_listF.json'
// import player_namesE from './player_listG.json'
// import player_namesE from './player_listH.json'
// import player_namesE from './player_listI.json'
// import player_namesE from './player_listJ.json'
// import player_namesE from './player_listK.json'
// import player_namesE from './player_listL.json'
// import player_namesE from './player_listM.json'
// import player_namesE from './player_listN.json'
// import player_namesE from './player_listO.json'
// import player_namesE from './player_listP.json'



export default function playerList(playerName) {

    // helper function from Json to array
    function processData(match_names) {
        const matches = Object.keys(match_names).map(key => { 
          return match_names[key];
        });
        return matches;
    }
    let UsedSet
    function PlayerSelector(UsedSet) {
        const playersA = useMemo(() => processData(player_namesA), []);
        const playersB = useMemo(() => processData(player_namesB), []);
        const playersC = useMemo(() => processData(player_namesC), []);
        const playersD = useMemo(() => processData(player_namesD), []);

        if(playerName.startsWith("A") || playerName.startsWith("a")){
            UsedSet=playersA
        }else if(playerName.startsWith("B") || playerName.startsWith("b")){
            UsedSet=playersB
        }else if(playerName.startsWith("C") || playerName.startsWith("c")){
            UsedSet=playersC
        }else if(playerName.startsWith("D") || playerName.startsWith("d")){
            UsedSet=playersD
        }
        return UsedSet
    }
    UsedSet = PlayerSelector(UsedSet)
    console.log("in list"+UsedSet)
    return UsedSet
}
