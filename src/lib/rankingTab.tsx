import React, { useEffect, useState } from 'react'
import {Avatar, Card, NameTag, TotalPoints} from './rankingStyles'

interface RankingTabProps{
    dataKey: number,
    name: string,
    points: number,
    // Need to check this
    image: any
}

// TODO Make the style look better
// Use icons instead of image
export const RankingTab : React.FC<RankingTabProps> = ({dataKey, name, points, image}) => {

    return (
    <Card data-key={dataKey}>
        <Avatar>{image}</Avatar>
        <NameTag>{name}</NameTag>
        <TotalPoints>{points}</TotalPoints>
    </Card>);
}

export default RankingTab