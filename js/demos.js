//    轮播图
$(function () {
    let lis1 =$(".banner-pic > li");
    let lis2 =$(".bth-list > li");
    let arr1=['#e8e8e8','#813632','#ebecf0','#26272e','#027dca','#d52029'];
    let t;
    let num = 0;
    t = setInterval(fn, 3000);
//banner  鼠标效果banner停止
    $('.banner').mouseover(function () {
        clearInterval(t);
    })
    $('.banner').mouseout(function () {
        t = setInterval(fn, 3000);
    })
    //图片自动
    function fn() {
        num++;
        if (num == lis1.length) {
            num = 0;
        }
        $(lis1).each(function (index) {
            $(lis1[index]).hide();
            $(lis2[index]).css({'background': ''});
            $('.banner').css({'background': ''});
            $(lis1[num]).show();
            $(lis2[num]).css({'background': '#ccc'});
            $('.banner').css({'background': arr1[num]});
    })
}

    $(lis2).each(function (index) {
        $(lis2[index]).on('click',function () {
            $(lis1[index]).show();
            $(lis1[num]).hide();
            $(lis2[index]).css({'background': '#ccc'});
            $(lis2[num]).css({'background': ''});
            $('.banner').css({'background': arr1[index]});
            num = index;
        })
    })

//选项卡1
    //1
    $('.move').mouseover(function () {
        $('.maidao').show();
    })
    $('.move').mouseout(function () {
        $('.maidao').hide();
    })
    //2
    $('.move1').mouseover(function () {
        $('.sc').show();
    })
    $('.move1').mouseout(function () {
        $('.sc').hide();
    })
//    3
    $('.move2').mouseover(function () {
        $('.sj').show();
    })
    $('.move2').mouseout(function () {
        $('.sj').hide();
    })
//    4
    $('.move3').mouseover(function () {
        $('.wzdaohang').show();
    })
    $('.move3').mouseout(function () {
        $('.wzdaohang').hide();
    })
//选项卡2
    let lis3 =$(".liebiao-fenleibox > li");
    let yck =$(".yck");
    lis3.each(function (index,value) {
        $(value).mouseover(function () {
            $(yck[index]).show();
        })
        $(value).mouseout(function () {
            $(yck[index]).hide();
        })
    })
//楼层跳转
    let aside =$(".aside-box");
    let ceng = $(".lou .ceng");
    let lou = $(".lou");
    let back = $(".aside-zuo .dingbu");
    console.log(back);
    let box =$(".aside-box > a");
    let pinpaineikuan=$(".pinpaineikuan")
    let yincang=$(".yincang")
    let arr = ['red', 'yellow', 'pink', 'green', 'skyblue', 'orange','#82FF73','#4BC1FF'];
    // console.log(pinpaineikuan,box,yincang);
    let dq;
    let up=false;
    let down=true;
    window.onscroll=function () {
        let obj=document.body.scrollTop? document.body:document.documentElement;
        let gtp=obj.scrollTop;
        ceng.each(function (index,f) {
            let scrollT=$(f).offset().top;
            if(gtp>=scrollT-200){
                box.each(function (hh,a) {
                    $(a).css('background','');
                });
                $(box[index]).css('background',arr[index]);
            }
        });

    //    头部的出现与消失
    if(gtp>=$(pinpaineikuan).offset().top){
        if(down){
            down=false;
            $(yincang).animate({top:0},function () {
                up=true;
            });
            $(aside).addClass('jj');
        }
    }
    else{
        if(up){
            up=false;
            $(yincang).animate({top:-40},function () {
                down=true;
            });
            $(aside).removeClass('jj');
            $(aside).addClass('ff');
        }
    }
};
    //点击定位
    ceng.each(function (index,f) {
        $(box[index]).on('click',function (e) {
            e.preventDefault();
            $(document.documentElement).animate({scrollTop:$(f).offset().top});
            $(document.body).animate({scrollTop:f.offsetTop});
            dq=index;
        });
    });
    //移入变色
    box.each(function (d,index) {
        $(d).mouseover=function () {
            $(d).addClass('active');
        };
        $(d).mouseout=function () {
            if(dq!=index){
                $(d).removeClass('active');
            }
        }
    });
    //返回顶部
    back.on('click',function () {
        animate(document.body, {scrollTop: 0}, 2000);
        animate(document.documentElement, {scrollTop: 0}, 2000);
    })
})
















