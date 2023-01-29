

document.querySelector('body > div.control-buttons > span').addEventListener('click', (eo) => {

    const Q=prompt('What is your name?');

    if (Q.length>0) {
        
        document.querySelector('body > div.info-container > div.name').textContent+=Q
    }
    else{
        document.querySelector('body > div.info-container > div.name').textContent+='UNKNOWN';

    }
    document.getElementsByClassName('control-buttons')[0].style.display='none'

    document.querySelectorAll('.game-block').forEach(block=>{

        const num=Math.floor(Math.random()*document.querySelectorAll('.game-block').length);

        block.style.order=num;

    })
           
    count();

        
    
})
const ar=Array.from(document.querySelectorAll('.game-block'));


const ans=[];

document.querySelectorAll('.game-block').forEach(item => {

    item.addEventListener('click', (eo) => {
        const flippedElements=ar.filter(el=>el.className=='game-block has-match');
        
        if (ans.length<2) {
            if (ans.length<1) {
                eo.currentTarget.classList.add('is-flipped');

            }

            const clickedImg=eo.target.parentNode.children[1].children[0].src;

            ans.push(clickedImg)
        }
        
            
                if(ans[0]==ans[1]){
                    document.querySelector('.res').textContent="Nice";
                    eo.currentTarget.classList.remove('is-flipped');

                    eo.currentTarget.classList.add('has-match');
                    document.documentElement.getElementsByClassName('is-flipped')[0].classList.add('has-match');
                    document.documentElement.getElementsByClassName('is-flipped')[0].classList.remove('is-flipped');

                    document.querySelector('.res').style.color="teal";


                    ans.pop();

                    ans.pop();


                }
                if((ans[0]!=ans[1]) && (ans.length==2)){
                    
                        document.querySelector('.tries').children[0].textContent++;

                        document.querySelector('.res').textContent="Wrong";
                        eo.currentTarget.classList.add('is-flipped');

                        document.querySelector('.res').style.color="red";
                        setTimeout(() => {
                            
                            item.classList.remove('is-flipped');



                            document.documentElement.getElementsByClassName('is-flipped')[0].classList.remove('is-flipped');


                            
                            
                        }, 1000);

                            ans.pop();
                            ans.pop();

                    

                }
                if(flippedElements.length===ar.length-2){

                    document.querySelector('.res').textContent='You Win!';
                    
                }
        }
           
            
    )
        
        
    

});


const time=document.querySelectorAll('.time');



    
    function count() {
        const c=setInterval(() => {
            if (time[1].textContent>0) {
                time[1].textContent--;
                
            }
           
            else{
                
                    time[1].textContent=59;
                    if (time[0].textContent>0) {
                        time[0].textContent--;
                    }
                     else{
                        time[0].textContent=59;
                        time[0].textContent--;
                        
                     } 
             
            }
            
            if(time[0].textContent==0 && time[1].textContent==0){
                time[0].textContent=0;
                time[0].textContent=0;
                document.querySelector('.up').style.visibility="visible";

                clearInterval(c);
                
            }
        }, 1000);

    
    }
     

        document.getElementsByClassName('reset-btn')[0].addEventListener('click',(e) => {

            document.querySelector('.up').style.visibility="hidden";
            time[0].textContent=1;
            time[1].textContent=59;
            window.location.reload();

            count()
        });



