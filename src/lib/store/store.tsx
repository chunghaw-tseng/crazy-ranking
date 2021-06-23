import {createContext} from 'react';

// Use context is the data that can be stored and passed to all the components in the tree

const initialUserState = {
    key : 0,
    name: "Test", 
    points: 0,
    icon: <div/>
}
export type UserState = typeof initialUserState; 
const context = createContext<typeof initialUserState>(initialUserState);

export default context;