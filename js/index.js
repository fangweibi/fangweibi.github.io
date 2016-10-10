/**
 * Created by Administrator on 2016/10/7.
 */

////////左右切换
(function() {
    var cur=0;
    var allLi = $('foot').getElementsByTagName('li');//获取dongQie所有li元素
    //克隆前三个节点
    for (var i = 0; i < 3; i++) {
        $('foot').appendChild(allLi[i].cloneNode(true))
    }
    //获取li的个数
    var len = allLi.length;
    //右滚动
    $('btnRight').onclick=function () {
        cur++;
        if(cur==len-2){
            cur=1;
            $('foot').style.left=0;
        }
        animate($('foot'),{left:-407*cur})
    };
    $('btnLeft').onclick=function () {
        cur--;
        if(cur==-1){
            cur=len-4;
            $('foot').style.left= -(len-3 )* 407+'px';
        }
        animate($('foot'),{left:-407*cur})
    };
}());


////轮播
(function () {
    window.onload=function () {
        var ware = $('ware');
        var info = 0;
        var allLi=ware.getElementsByTagName('li');
        ware.appendChild(allLi[0].cloneNode(true));
        var len=allLi.length;

        $('hotLeft').onclick=function(){
            info--;
            if(info==-1){
                info=len-2;
                ware.style.left=-(len-1)*880+'px';
            }
            animate(ware,{left:-info*880});
        };
        $('hotRight').onclick=function(){
            info++;
            if(info==len){
                info=1;
                ware.style.left='0';
            }
            animate(ware,{left:-info*880});
        };
        //往右滚动
        var timer;
        timer=setInterval(function(){
            info++;
            if(info==len){
                info=1;
                ware.style.left=0;
            }
            animate(ware,{left:-info*880});
        },3000);
        ware.onmouseover=function(){
            clearInterval(timer);
        };
        ware.onmouseout=function(){
            timer=setInterval(function(){
                info++;
                if(info==len){
                    info=1;
                    ware.style.left=0;
                }
                animate(ware,{left:-info*880});
            },3000);
            //往左滚动
            // timer=setInterval(function(){
            //     info--;
            //     if(info==-1){
            //         info=len-2;
            //         ware.style.left=-(len-1)*880+'px';
            //     }
            //     animate(ware,{left:-info*880});
            // },1000);
        };
        //下定时器有错仅参考
        // var timer;
        // timer=setInterval(function () {
        //     info++;
        //     // // info--;
        //     // if(info==len){
        //     //     info=1;
        //     //     ware.style.left=0;
        //     // }
        //     // animate( ware, {left:-880*info}) ;
        //
        //     animate( ware, {left:-880*info}, function () {
        //         if(info == len-1){
        //             ware.style.left = 0;
        //             info=0;
        //         }
        //     })
        //
        // },1000);
    };
}());

(function () {
    var cent=$('environmentUl');
    var all=cent.getElementsByTagName('li');
    // window.onload=function () {
    //    
    // }
    cent.appendChild(all[0].cloneNode(true));
    var len=all.length;
    var cur=0;

    $('environmentLeft').onclick=function () {
        cur--;
        if(cur==-1){
            cur=len-3;
            cent.style.left=-(len-1)*880+'px';

        }
        animate(cent,{left:-880*cur})

    };

    $('environmentRight').onclick=function () {
        cur++;
        if(cur==len){
            cur=1;
            cent.style.left=0;

        }
        animate(cent,{left:-880*cur})

    };

    var timer;
    timer=setInterval(function () {
        cur++;
        if(cur==len){
            cur=1;
            cent.style.left=0;
        }
        animate(cent,{left:-880*cur})
    },3000);

    cent.onmouseover=function(){
        clearInterval(timer);
    };
    cent.onmouseout=function() {
        timer = setInterval(function () {
            cur++;
            if (cur == len) {
                cur = 1;
                cent.style.left = 0;
            }
            animate(cent, {left: -cur * 880});
        }, 3000);

    }   
}());







