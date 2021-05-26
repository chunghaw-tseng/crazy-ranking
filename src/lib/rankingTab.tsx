import React from 'react'
import {Card, NameTag, TotalPoints} from './rankingStyles'

interface RankingTabProps{
    key: number,
    name: string,
    points: number,
    // Need to check this
    image: any
}
// type RankngTabState = {

// }

export const RankingTab : React.FC<RankingTabProps> = ({key, name, points, image}) => {

    return (
    <Card>
        <NameTag>{name}</NameTag>
        <TotalPoints>{points}</TotalPoints>
    </Card>);
}

export default RankingTab