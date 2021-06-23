import {useLayoutEffect, useRef, useEffect} from 'react';

const useFlip = (root :  React.RefObject<HTMLDivElement>) => {
    // UseRef usage when you want to save some data that does not need to rerender on the UI
    // Will save throughout the whole react project
    const origins = useRef<{ [key: string]: ClientRect }>({});
    let firstRun = useRef(false);

      useEffect(()=>{
        if (root.current === null) return;
        const list = root.current;
        const children: HTMLElement[] = [];

        for (var i =0 ; i < list.children.length; i ++){
            let el : HTMLElement = list.children[i] as HTMLElement;
            children.push(el);
        }
        // Concept of FLIP 
        //1. Get the starting position
        //2. Get the ending position
        //3. Do modifications (Translations/Inverts...)
        //4. Play
        for (const child of children) {
            // It needs the data-key element
            const key : string = child.getAttribute('data-key') as string;
            console.log("Key ", key);

            // Getting the LAST rect values
            const next = child.getBoundingClientRect();
            console.log(origins.current);
            if (firstRun.current) {
              if (key in origins.current) {
                // Previous position
                const previous = origins.current[key];
                // Calculate the new position difference
                const delta = getDelta(previous, next);
                if (!isZero(delta)) {
                  invert(delta, child);
                  requestAnimationFrame(() => {
                    play(child);
                  });
                }
              }
            }
            // Problem useRef not updating -> Need to use effect for it to update
            // Adding the first
            origins.current[child.getAttribute('data-key') as string] = next;
          }
          firstRun.current = true;
        });
}

// TODO Double check the translation
    // Does the invert translation
    const invert = (delta: ClientRect, elem: HTMLElement) => {
    elem.style.transform = `translate(${delta.left}px, ${delta.top}px)`;
    elem.style.transition = `transform 0s`;
    };
    
    // Does the animation using css
    const play = (elem: HTMLElement) => {
    elem.style.transform = ``;
    elem.style.transition = `transform 500ms ease`;
    };
    
    // Calculates difference between the start and end
    const getDelta = (start: ClientRect, target: ClientRect) => ({
    top: start.top - target.top,
    left: start.left - target.left,
    // These attributes are not needed
    // width: start.width / target.width,
    // height: start.height / target.height, 
    width: 1,
    height: 1,
    bottom: start.bottom - target.bottom, 
    right: start.right - target.right
    });
    
    // Checks that if it needs to move or not
    const isZero = (delta: ClientRect) =>
    delta.left === 0 &&
    delta.top === 0 &&
    delta.width === 1 &&
    delta.height === 1;


export default useFlip;