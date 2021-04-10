/* variable declarations */
var isplaying=false;
var scheck=null;
var slist =     ['https://dl.dropbox.com/s/5jyylqps64nyoez/Legends%20never%20die.mp3?dl=0',
'https://dl.dropbox.com/s/x6f49cu1rdqnngu/Let%20Me%20Love%20You.mp3?dl=0',
'https://dl.dropbox.com/s/e5y42cc90ugx09t/Believer.mp3?dl=0',
'https://dl.dropbox.com/s/1m7gbqazma8e6dw/The%20World%20english%20cover.mp3?dl=0',
'https://dl.dropbox.com/s/wgf8wo6ud7ezv45/Unravel.mp3?dl=0', 'https://dl.dropbox.com/s/rvlinjltssarwaw/I%20am%20kira.mp3?dl=0', 'https://dl.dropbox.com/s/byk8yxqy1jzxyx5/Obey%20me%20world.mp3?dl=0', 'https://dl.dropbox.com/s/c8rinnz3l7uerle/Kira%20vs%20zero.mp3?dl=0', 'https://dl.dropbox.com/s/1sw4ysdgmkb5dse/Salvation.mp3?dl=0'
];
var simg = ['https://i.imgur.com/iki9Pf8.jpg', 'https://i.imgur.com/dNPF8fK.jpg', 'https://i.imgur.com/MP9cRir.jpg', 'https://i.imgur.com/7CUyRzo.png', 'https://i.imgur.com/vWXjAVK.jpg', 'https://i.imgur.com/q85hkhY.jpg', 'https://i.imgur.com/5Fyhevf.jpg', 'https://i.imgur.com/YJsyjQR.jpg', 'https://i.imgur.com/EO1jTSe.jpg' ];
var sname = ['Legends never die','Let me love you','Believer','The world (english cover)','Unravel', 'I am kira', 'Obey me world', 'Kira vs zero', 'Salvation'];
/* end variable declarations */

function splay(){  
    main2();
    var inp=document.getElementsByTagName('input');
    var aud=document.getElementById('aud');
    var img=document.getElementById('img');
    var imgr=document.getElementById('imgr');
    /* Check which song is selected */
    for(let i=0;i<inp.length;i++){
        if(inp[i].checked){
            var check = i;
        }
    }
    /* selected song's number is in check */
    /* Play the selected song */
    for(let i=0;i<inp.length;i++){
        if(check==i){
            if(scheck==i){
                return;
            }
            if (isplaying) { 
            document.getElementById('imgc').style.animationPlayState='paused';
                aud.pause();
                isplaying=false;
            }     aud.setAttribute('src',slist[check]);
    img.setAttribute('src',simg[check]);
    imgr.setAttribute('src',simg[check]);
            if(!isplaying) {
            iprelod(); 
            sprelod(); document.getElementById('imgc').style.animationPlayState='running';
        img.onload=function(){
            ilod();
        }
        aud.oncanplaythrough=function()
            {
                slod(check);
            }
                aud.play();
                isplaying=true;
            }
            scheck=i;
        }
    }
    /* End for */
    /* Footer hide/show */
    var footer1=document.getElementById('footer1');
    var sc=document.getElementById('songContainer');
    footer1.style.display="block";
    sc.style.height=(innerHeight-161+"px");
    /* End hide/show footer */
    
    /* All about progress bar */
    aud.addEventListener("timeupdate", function(event){
        progress.style.width=((aud.currentTime / aud.duration) * 100)+"%";
    }, false);
    progressbar.addEventListener("mousedown", function(event){
        var clickedPosition=event.clientX - event.target.offsetLeft;
        aud.currentTime=(clickedPosition/event.target.offsetWidth)*aud.duration;
    }, false);
    /* Progress bar end */
}

/* First play function */
function play(){
    var play2=document.getElementById('play2');
    var pause2=document.getElementById('pause2');
    var play1=document.getElementById('play1');
    var pause1=document.getElementById('pause1');
    play2.style.display="none";
    play1.style.display="none";
    pause2.style.display="block";
    pause1.style.display="block"; document.getElementById('imgc').style.animationPlayState='running';
    aud.play();
}
/* First pause function */
function pause(){
    var play2=document.getElementById('play2');
    var pause2=document.getElementById('pause2');
    var play1=document.getElementById('play1');
    var pause1=document.getElementById('pause1');
    play2.style.display="block";
    play1.style.display="block";
    pause2.style.display="none";
    pause1.style.display="none"; document.getElementById('imgc').style.animationPlayState='paused';
    aud.pause();
}

/* Display / hide main1 or main2 */
function main1(){
    setTimeout(main1d,200);
}
function main2(){
    setTimeout(main2d,200);
}
function main1d(){  
document.getElementById('main1').style.display="block";  document.getElementById('main2').style.display="none";
}
function main2d(){
    document.getElementById('main1').style.display="none";  document.getElementById('main2').style.display="block";
}
/* End display / hide main1 or main2 */


/* Next function */
function next(){
    var inp=document.getElementsByTagName('input');
    /* Check which song is selected */
    for(let i=0;i<inp.length;i++){
        if(inp[i].checked){
            var check = i;
        }
    }
   /* selected song's number is in check */
   
   /* Select next song */
   if(check==(slist.length-1)){
       check=0;
       inp[check].checked=true;
   }
   else{
       check+=1;
       inp[check].checked=true;
   }
   /* Selected next song inside check */
   
    var aud=document.getElementById('aud');
    var img=document.getElementById('img'); 
    var imgr=document.getElementById('imgr');
        imgr.setAttribute('src',simg[check]);
        img.setAttribute('src',simg[check]);
    iprelod();
        aud.setAttribute('src',slist[check]);
    sprelod();
    aud.oncanplaythrough=function(){
        slod(check);
    }
    img.onload=function(){
        ilod();
    }
    aud.play();
}
/* End next function */

/* Prev function */
function prev(){
    var inp=document.getElementsByTagName('input');
    /* Check which song is selected */
    for(let i=0;i<inp.length;i++){
        if(inp[i].checked){
            var check = i;
        }
    }
   /* selected song's number is in check */
   
   /* Select prev song */
   if(check==0){
       check=(slist.length-1);
       inp[check].checked=true;
   }
   else{
       check-=1;
       inp[check].checked=true;
   }
   /* Selected prev song inside check */
   
    var aud=document.getElementById('aud');
    var img=document.getElementById('img'); 
    var imgr=document.getElementById('imgr');
        imgr.setAttribute('src',simg[check]);
        img.setAttribute('src',simg[check]);
        iprelod();
        aud.setAttribute('src',slist[check]);
    sprelod();
    aud.oncanplaythrough=function(){
        slod(check);
    }
    img.onload=function(){
        ilod();
    }
    aud.play();
}
/* End prev function */

/* Song is loading */
function sprelod(){
    var namec=document.getElementById('namec');
    var m=document.getElementById('move');
    namec.innerHTML="Loading...";
    m.innerHTML="Loading...";
}
function iprelod(){
    var img=document.getElementById('img');
    var imgr=document.getElementById('imgr');
    imgr.style.height="0%";
    img.style.height="0px";
}
/* End function Song is loading */

/* Change song name */
function slod(check){
    var namec=document.getElementById('namec');
    var m=document.getElementById('move');
    namec.innerHTML=sname[check];
    m.innerHTML=sname[check];
}
function ilod(){
    var img=document.getElementById('img');
    var imgr=document.getElementById('imgr');
    imgr.style.height="100%";
    img.style.height="80px";
}
/* Song name changed */
