/*
* @Author: 李亲亲ლ(°◕‵ƹ′◕ლ)
* @Date:   2017-12-27 20:49:56
* @Last Modified by:   李亲亲ლ(°◕‵ƹ′◕ლ)
* @Last Modified time: 2018-01-02 09:53:11
*/
{
var banners=document.querySelectorAll(".img-box li");
var pargers=document.querySelectorAll(".btn-box li");
var box=document.querySelector(".banner");

var bannerLeft=document.querySelector(".banner-left");
var bannerRight=document.querySelector(".banner-right");
pargers.forEach(function(ele,index){
	ele.onclick=function(){
		for(var i=0;i<banners.length;i++){
			pargers[i].classList.remove("active");
			banners[i].classList.remove("active");

		}
		pargers[index].classList.add("active");
		banners[index].classList.add("active");
		n=index;
	}
});
n=0;
function bannerFn(bir="r"){
	if(bir==="r"){
		n++;
	}else if(bir==="l"){
		n--;
	}
	
	if(n==banners.length){
		n=0;
	}
	if(n===-1){
		n=banners.length-1;
	}
	for(var i=0;i<banners.length;i++){
		pargers[i].classList.remove("active");
		banners[i].classList.remove("active");

	}
	pargers[n].classList.add("active");
	banners[n].classList.add("active");
	
};
var st=setInterval(bannerFn,5000);

box.onmouseover=function(){
	clearInterval(st);
};
box.onmouseout=function(){
	st=setInterval(bannerFn,5000);
}
var flag=true;

bannerRight.onclick=function(){
	if(flag){
		flag=false;
		bannerFn();
	}
	
}
bannerLeft.onclick=function(){
	if(flag){
	flag=false;
	bannerFn("l");
	}
}
banners.forEach(function(ele,index){
	ele.addEventListener("transitionend",function(){
		flag=true;
	})

})



}


// 单品
{
	var dpLeft=document.querySelector(".top-right1");
	var dpRight=document.querySelector(".top-right2");
	var dpList=document.querySelector(".danpinbot");
	var dpbox=document.querySelector(".danpin");
	dpLeft.onclick=function(){
		this.classList.remove("active");
		dpRight.classList.add("active");
		dpList.style.transform="translateX(-1240px)";
	}
	dpRight.onclick=function(){
		this.classList.remove("active");
		dpLeft.classList.add("active");
		dpList.style.transform="translateX(0)";
	}
	a=0;
	function danpinFn(ele,index){
		a++;
		if(a%2===0){
		dpLeft.classList.remove("active");
		dpRight.classList.add("active");
		dpList.style.transform="translateX(-1240px)";

		}else if(a%2===1){
		dpRight.classList.remove("active");
		dpLeft.classList.add("active");
		dpList.style.transform="translateX(0)";
		}
	}
	var st=setInterval(danpinFn,2000);
	dpbox.onmouseover=function(){
		clearInterval(st);
	};
	dpbox.onmouseout=function(){
		st=setInterval(danpinFn,2000);
	}



}
//家具、周边、热评产品
{
	var lists=document.querySelectorAll(".jiaju");
    lists.forEach(function(ele){
        content(ele);
    });
	function content(context){
	var Btn=context.querySelectorAll(".jiaju-text");
	var hua=context.querySelectorAll(".jiaju-bot-right");

	Btn.forEach(function (ele,index) {
        ele.onmouseover=function(){
            hua.forEach(function(ele){
            ele.style.display="none";
            })
            for (var i=0;i<Btn.length;i++){
            	Btn[i].classList.remove("active");
            }
           Btn[index].classList.add("active");
            hua[index].style.display="block";

        }

    })
};

}


// 内容
{
	var lists=document.querySelectorAll(".neironglist");
    lists.forEach(function(ele){
        content(ele);
    });


	function content(context){
	var Left=context.querySelector(".nr-left");
	var Right=context.querySelector(".nr-right");
	var Zhuti=context.querySelectorAll(".nelb-box");
	var ha=context.querySelector(".nel-box");
	var pagers=context.querySelectorAll(".nr-circle");
	var max=Zhuti.length;
	var s=0;
	Right.onclick=function(){
        s++;
        if(s>=max){
            s=max-1;
            return;
        }
        changePagers(s);
    };
    Left.onclick=function(){
        s--;
        if(s<0){
            s=0;
            return;
        }
        changePagers(s);
    };
    pagers.forEach(function(ele,index){
        ele.onclick=function(){
            changePagers(index);
            s=index;
        };
    });
    function changePagers(s){
        for(var i=0;i<pagers.length;i++){
            pagers[i].classList.remove("active");
        }
        pagers[s].classList.add("active");
        ha.style.marginLeft=-[s]*300+"px";
    };
    }

}
{
    // 小米头部。。
    let logft=document.getElementsByClassName('logft');
    let logft2=document.querySelector('.logft2');

    let box3=document.getElementsByClassName('daohangtext');
    let dbmov=document.querySelector('.boxcenter');
    dbmov.onmouseenter=function(){
        logft2.style.height='229px';

    }
    dbmov.onmouseleave=function(){
        logft2.style.height='0px';

    }
    for(let i=0;i<logft.length;i++){

        box3[i].onmousemove=function(){
            logft[i].style.display='block';
        }
        box3[i].onmouseout=function(){
            logft[i].style.display='none';
        }
    }
    for(let i=0;i<logft.length;i++){

        logft[i].onmousemove=function(){
            logft[i].style.display='block';
        }
        logft[i].onmouseout=function(){
            logft[i].style.display='none';
        }
    }
}