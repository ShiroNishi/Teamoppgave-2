


function itemFeed(item){
    switch (item){
        case 'Kvikklunsj':
            larsStats.sult += 20;
            break;
        case 'Vann':
            larsStats.tørst += 20;
            break;
    }
    

}

function statTimer(){
    let intervall = [setInterval(sultTimer, 600),
        setInterval(tørstTimer, 600)
    ];
    function sultTimer(){
        larsStats.sult -= 20;
        if (larsStats.sult === minNum){
           gameOver()
            //varsel/alert om sulten på verdi 20 
        //    document.getElementById(sultAlert)
        } //else if (larsStats.sult === minNum){
          //  clearInterval(intervall)
        //}
    
        updateView();
        }
    function tørstTimer(){
        larsStats.tørst -= 10;
         if (larsStats.tørst === 20){
           //varsel/alert om tørst på verdi 20 
        //    document.getElementById(tørstAlert)
        } //else if (larsStats.tørst === minNum){
           // clearInterval(intervall)
        //}
    }
}
 

function gameOver(){
    

}