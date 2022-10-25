/* app.js */
// 값 넣기
setInterval(function(){
    const hEl = document.getElementById('hours');
    const mEl = document.getElementById('min');
    var days = document.getElementById('day');
    var dates = document.getElementById('date');
    var days2 = document.getElementById('day2');
    var hours2 = document.getElementById('hours2');
    var hours3 = document.getElementById('hours3');
    var hours4 = document.getElementById('hours4');
    var hours5 = document.getElementById('hours5');
    //현재 시간, 날짜 구하기
    let d = new Date(); 
    let h = d.getHours();
    let m = d.getMinutes();
    let day = d.getDay();
    let date = d.getDate();

    // 시간값이 1자리일때 0 붙히기
    m = `${ m < 10 ? `0${m}`:m}`;
    h = `${ h < 10 ? `0${h}`:h}`;
    //h = `${ h < 10 ? `0${h}`:`0${h-12}`}`;

    if(day==0) {
        day = `(일)`;
    } if(day==1) {
        day = `(월)`;
    } if(day==2) {
        day = `(화)`;
    } if(day==3) {
        day = `(수)`;
    } if(day==4) {
        day = `(목)`;
    } if(day==5) {
        day = `(금)`;
    } if(day==6) {
        day = `(토)`;
    }


    let x = d.getHours() + 2;
    let y = d.getHours() + 4;
    let z = d.getHours() + 6;
    let r = d.getHours() + 8;
    
    
    if (r >= 24) {
        console.log(`${r}`-24);
        r=r-24;
    } if (z > 24) {
        z=z-24;
    } if (y > 24) {
        y=y-24;
    } if (x > 24) {
        x=x-24;
    }
    hEl.innerText = h;
    mEl.innerText = m;
    days.innerText = day;
    dates.innerText = date+"일";
    days2.innerText = day;
    hours2.innerText = x +'시';
    hours3.innerText = y +'시';
    hours4.innerText = z +'시';
    hours5.innerText = r+'시';
    


     


    //textContent 찾아보기

} ,1000);