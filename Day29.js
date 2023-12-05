function racewithTimeout(promises,timeout){
    const timeoutPromise=new Promise((resolve,reject)=>{
        setTimeout(()=>reject(new Error('Timeout')),timeout);
    });
    return Promise.race([...promises,timeoutPromise]);
}
const promise1=new Promise((resolve,reject)=>{
    setTimeout(resolve,500,'one');
});
const promise2=new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,'two');
});
racewithTimeout([promise1,promise2],1000)
.then(value=>console.log(value))
.catch(error=>console.log(error));