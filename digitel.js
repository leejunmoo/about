/* 디지털시계.js */

setInterval(function(){
    const h2El = document.getElementById('digitelhours');
    const m2El = document.getElementById('digitelmin');
    var digiteldate = document.getElementById('digiteldate');
    var digitelday = document.getElementById('digitelday');
    var digitelmon = document.getElementById('digitelmon');
    var pm = document.getElementById('pm');

    //현재시간,날짜

    let now = new Date();
    let dgh = now.getHours();
    let dgm = now.getMinutes();
    let dgday = now.getDay();
    let dgdate = now.getDate();
    let dgmon = now.getMonth()+1;
    let after = pm;


    //시간값 1자리일때 0붙히기

    //dgm = `${ dgm < 10 ? `0${dgm}`:dgm}`;
   // dgh = `${ dgh < 10 ? `0${dgm}`:dgh}`;

    //요일 영어 반환
    if(dgday==0) {
        dgday = `Sun`;
    } if(dgday==1) {
        dgday = `Mon`;
    } if(dgday==2) {
        dgday = `Tue`;
    } if(dgday==3) {
        dgday = `Wed`;
    } if(dgday==4) {
        dgday = `Thur`;
    } if(dgday==5) {
        dgday = `Fri`;
    } if(dgday==6) {
        dgday = `Sat`;
    }
    //am,pm표시
    if(dgh > 12 ) { //여기서부터 이중조건문
        if ( dgm < 10) {
        dgh = `0${dgh-12}`;
        dgm = `0${dgm}`;
        after ='PM';
        } else if ( dgh > 12) {
            if( dgm > 10){
            dgh = `0${dgh-12}`;
            dgm = `${dgm}`;
            after ='PM';
            }
        } //이 밑줄이 나머지 
    } if(dgh > 9 && dgh < 12) {
        if(dgm >= 10) {
            dgh = `${dgh}`;
            dgm = `${dgm}`;
            after = 'AM';
        } else if (dgh > 9 && dgh < 12) {
            if(dgm < 10) {
                dgh = `${dgh}`;
                dgm = `0${dgm}`;
                after = 'AM';
            }   if (dgh <12) {
                    if(dgm >= 10) {
                        dgh = `0${dgh}`;
                        dgm = `${dgm}`;
                        after = 'AM';
                } else if (dgh < 12) {
                    if (dgm < 10) {
                        dgh = `0${dgh}`;
                        dgm = `0${dgm}`;
                        after = 'AM';
                    }
                }
            } 
        }
        } else if( dgh < 12) {
            if (dgm < 10){
                dgh = `0${dgh}`;
                dgm = `0${dmg}`;
                after = 'AM';
            } else if ( dgh < 12) {
                if (dgm > 10) {
                    dgh = `0${dgh}`;
                    dgm = `${dgm}`;
                    after = 'AM';
                }
            }
         dgh = `${dgh = 12 ? `${dgh}`:`${dgh}`}`;
       //dgm = `${dgm < 10 ? after=`AM`:after=`AM`}`;
   } 



    h2El.innerText = dgh;
    m2El.innerText = dgm;
    digiteldate.innerText = dgdate;
    digitelday.innerText = dgday;
    digitelmon.innerText = dgmon;
    pm.innerText = after;
    

} ,1000);