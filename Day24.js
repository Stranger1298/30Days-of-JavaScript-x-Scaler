function createDebounce(orgFunction,delay){
    let timeout;
    return function () {
        const context=this;
        const args=arguments;
        clearTimeout(timeout);
        timeout=setTimeout(()=>{
            orgFunction.apply(context,args);
        },delay);
    };
}
function customFunction(){
    console.log("Calling Debounce Function");
}
const debounceFunction=createDebounce(customFunction,500);
debounceFunction();
debounceFunction();