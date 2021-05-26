import React from 'react'
import RankingTab from './rankingTab';

// This class will do the animations 

interface RankingViewProps{
    elements: number,
}


 // Need to be able to contain the values to order them and need to update each value as well

export const RankingViews:  React.FC<RankingViewProps> = ({elements}) => {

    let [responseData , setResponseData] = React.useState([0,0,0,0,0]);

    // Multiple use effects
    React.useEffect(() => {
   
    setInterval(function(){
        let to_update = Math.floor(Math.random() * 5);
        responseData[to_update] += Math.floor(Math.random() * 1000);
        setResponseData(Object.assign([], responseData)
        );}
        , 1000)
    }, [setResponseData, responseData])
 

    function createTabs(){
        let tabs = [];
        for (let i=0 ; i < elements; i++){
            console.log("Recreating tabs");
            tabs.push(<RankingTab key={i} name={`Test${i}`} points={responseData[i]} image="Test"/>);
        }
        return tabs;
    }


    return(
        <div>
            {createTabs()}
        </div>
    );


}