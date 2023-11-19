setInterval(dynamic_clock, 1000);
function dynamic_clock() {
    var dt=new Date();
    var dat=dt.toLocaleTimeString();
    console.log('Time-' + dat)
}