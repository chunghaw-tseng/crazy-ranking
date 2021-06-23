import React, { useRef } from 'react'
import useFlip from './hooks/useFlip';
import RankingTab from './rankingTab';
import { UserState } from './store/store';

// This class will do the animations for the ranking going up or down

//! Important try to use Preact (Will make the code much smaller and faster to load)
//! Try not to use React.FC since it doesn't allow to set default props so use the bottom instead

type WithChildren<T = {}> = 
  T & { children?: React.ReactNode };

type RankingViewProps = WithChildren<{
  rank: UserState[]
}>

// With React FC
// interface RankingViewProps{
//     rank: number,
// }
// export const RankingViews:  React.FC<RankingViewProps> = ({rank}) => {


 // Need to be able to contain the values to order them and need to update each value as well
export function RankingViews({rank} : RankingViewProps) {


    // Ref for the main div
    const rootRef = useRef<HTMLDivElement>(null);
    // Doing animations try to figure out a way to do FLIP without any libraries

    // First time does not call this
    useFlip(rootRef);

    return(
        <div ref={rootRef}>
            {rank.map((item)=><RankingTab key={item.key} dataKey={item.key} name={item.name} points={item == null ? 0 : item.points} image={item.icon} />)}
        </div>
    );
}

