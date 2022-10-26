let searchbtn = document.getElementById('searchbtn');
let servicebtn = document.getElementById('serviceviewbtn');
let submitbtn = document.getElementById('submitbtn');
let sendbtn = document.getElementById('sendbtn');
let navitems = document.querySelectorAll('.navitems');
let btns = [searchbtn, servicebtn, submitbtn, sendbtn];
let navbar = document.getElementById('navigationbar');
let hidenav = document.getElementById('hidenav');
let themebtn = document.getElementById('themebtn');
let colorboxes = document.querySelectorAll('#colorboxes');
let themebtnbox = document.getElementById('themebtnbox');
let flow = document.getElementById('flow');
let hidenavbtn = document.getElementById('hidenavbtn');
let loader = document.getElementById('loader');
let w = window.innerWidth;

themebtn.addEventListener('click',function(){
    themebtnbox.classList.toggle('showtheme');
})

colorboxes.forEach(function(box){
    box.addEventListener('click',function(){
        let themecolor = box.getAttribute('data-color');
        let hovercolor = box.getAttribute('data-hover-color');
        document.documentElement.style.setProperty('--primary-color', `${themecolor}`);
        document.documentElement.style.setProperty('--primarybottom-color', `${hovercolor}`);
        $('.colorboxes').removeClass('selected');
        box.classList.add('selected');
        themebtnbox.classList.toggle('showtheme');
    })
})

btns.forEach(function(btn){
    btn.addEventListener('click', e => {
        console.log(e);
        let xposition = e.offsetX;
        let yposition = e.offsetY;
    
        let spn = document.createElement('span');
        spn.classList.add('radial');
        spn.style.top=`${yposition}px`;
        spn.style.left=`${xposition}px`;
        btn.appendChild(spn);
    })
});

window.onload = ()=>{
    loader.classList.remove('showload');
}

window.addEventListener('resize', ()=>{
    let width = this.innerWidth;
    knowyrsize(width);
    mobilenavone(width);
})


function mobilenavone(ierWidth){
    if(ierWidth <= 1200){
        mobilenav();
        navitems.forEach(function(item){
            item.addEventListener('click', function(){
                $('.navitems').removeClass('active');
                item.classList.add('active');
                $('.navigationmenu').fadeOut(250);
            })
        });
    }
}



function mobilenav(){
    window.addEventListener('scroll',function(){
        let positionflow = flow.getBoundingClientRect().y;
        if(window.pageYOffset>=positionflow){
            hidenavbtn.classList.add('shownavbtn')
        }else{
            hidenavbtn.classList.remove('shownavbtn')
        }
    })
}

hidenavbtn.addEventListener('click',function(){
    $('.navbtn').click();
})

function knowyrsize(inerWidth){
    if(inerWidth <= 1200){
        $('.navigationmenu').hide();
   
    }else{
        $('.navigationmenu').show();
    }
}

if(window.innerWidth <= 1200){
    $('.navigationmenu').hide();

}else{
    $('.navigationmenu').show();
}

$('.navbtn').click(function(){
    $('.navigationmenu').fadeToggle(250);
});

window.addEventListener('mousemove',function(e){
    let minWidth = 0;
    let offX = e.x;
    let offY = e.y;
    
    if(offX === minWidth){
        hidenav.classList.add('shownav');
        hidenav.setAttribute('style',`--y : ${offY}px`)
    }else{
        hidenav.classList.remove('shownav');
    }
})

mobilenavone(w);
