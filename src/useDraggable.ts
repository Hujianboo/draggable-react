import React, { useEffect, useRef,useLayoutEffect,useState, useCallback} from "react";

type useDraggableType = <T extends HTMLElement>() => {
  target: React.RefObject<T>
  draggingstate: Number
}


const useDraggable: useDraggableType = <T extends HTMLElement>() => {
  const target = useRef<T>(null)
  // const dragging = useRef<Boolean>(false)
  const [draggingstate,setDragging] = useState(0);
  const [random,setRandom] = useState(Math.random())
  const handleStart = () => {
    setDragging(draggingstate + 1)
    // dragging.current = true
    console.log('start');
    
  }
  const handleMove = () => {
    console.log(random);
    
    if(draggingstate === 1){
      console.log('move');
    }else{
      return
    }
  }
  const handleEnd = () => {
      console.log('end');
      // dragging.current = false
  }
  useEffect(() => {
    const dom = target.current
    if(dom){
      dom.addEventListener('mousedown',handleStart)
      document.addEventListener('mousemove',handleMove)
      document.addEventListener('mouseup',handleEnd)
    }
  })
  return {target,draggingstate}
}
export default useDraggable