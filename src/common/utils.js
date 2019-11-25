/*公共的工具*/
export  function debounce (func,delay=10) {
  //防事件抖动
  let timer=null;
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer=setTimeout(()=>{
      func.apply(this,args)
    },delay)
  }
}
