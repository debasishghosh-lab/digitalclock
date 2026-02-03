const clk=document.querySelector('.clock');

function update(){
    const date=new Date();
    console.log(date);
    
    clk.innerHTML=date.toLocaleTimeString('en-US', {
    hour12: true});
}
update();
setInterval(update,1000);