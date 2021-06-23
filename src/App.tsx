import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './App.css';
import { RankingViews } from './lib/rankingView';
import { UserState } from './lib/store/store';
import {Eth} from '@styled-icons/crypto/Eth'
import {Bitcoin} from '@styled-icons/boxicons-logos/Bitcoin'
import {Dgb} from '@styled-icons/crypto/Dgb'
import {Drop} from '@styled-icons/crypto/Drop'
import {Enj} from '@styled-icons/crypto/Enj'
import {Fct} from '@styled-icons/crypto/Fct'
import {Game} from '@styled-icons/crypto/Game'
import {Ltc} from '@styled-icons/crypto/Ltc'

function App() {
  const elements = 8;
  const iconList  = [<Bitcoin size={30}/>, <Eth size={30}/>, <Dgb size={30}/>, <Drop size={30}/>, <Enj size={30}/>, <Fct size={30}/>, <Game size={30}/>, <Ltc size={30}/>];
  const nameList  = ["Bitcoin", "Ethereum", "Dgb", "Drop", "Enj", "Fct", "Game", "Ltc"];
  let [responseData , setResponseData] = useState<UserState[]>([]);
  const ref = useRef(false);

// TODO Hack to load the data twice at the start so the positions are set
  useEffect(() => {
    if (!ref.current) {
      var val: UserState[] = [];
      for(let i = 0; i < elements; i ++){
          val.push({name :nameList[i] , points: 0, key: i, icon: iconList[i]});
      }
      setResponseData(val);
      ref.current = true;
    }
    const timer = setInterval(function(){
    let to_update = Math.floor(Math.random() * elements);
    const newResponse = [...responseData];
    newResponse[to_update].points += Math.floor(Math.random() * 10);
    // Do sorting
    var sortedRanking : UserState[] = newResponse.sort((e1 : UserState, e2 : UserState) =>{
        if (e1.points < e2.points) {return 1;}
        if (e1.points > e2.points) {return -1;}
        return 0;
        });
    setResponseData(newResponse);
  }
    , 2000);
    return () => clearInterval(timer);
  }, [responseData]);


  return (
    <div className="App">
      <header className="App-header">
        <RankingViews rank={responseData}/>
      </header>
     
    </div>
  );
}

export default App;
