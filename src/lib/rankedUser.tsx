
export class RankedUser{
    key?: number;
    name: string;
    points: number;
    image?: any;

    constructor(key: number, name: string, points: number) {
        this.key = key;
        this.name = name;
        this.points = points;
      }
    
}
