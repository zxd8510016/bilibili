//鼠标移入使二级菜单弹出
var gameBox = $('.game-box');
show($('#gameOver'), gameBox);

var liveBox = $('.live-box');
show($('#liveOver'), liveBox);

var bwBox = $('.bw-box');
show($('#bwOver'), bwBox);

var appBox = $('.app-box');
show($('#appOver'), appBox);

var loginBox = $('.login-box');
show($('#loginOver'), loginBox);

var hisBox = $('.his-box');
show($('#hisOver'), hisBox);

var navBox = $('.nav-box');
show($('#navOver'), navBox);

var tenBox = $('.ten-years-box');
show($('#tenOver'), tenBox);

function show(obj1, obj2) {
    obj1.mouseover(function () {
        obj2.show();
        obj2.stop().animate({ opacity: 1, marginTop: 0 }, 300);
        $(this).addClass('active');
    }).mouseout(function () {
        $(this).removeClass('active');
        obj2.stop().animate({ opacity: 0, marginTop: 8 }, 300, function () {
            $(this).hide();
        });
    })
}

//视频轮播图自动播放
var videoList = $('.video-list');
var btnsList = $('.btns-list');
var btnNum = imgNum = 0;
var timer = null;
videoImg.forEach(function (item, i) {
    var li = $('<li><a href="#"><img src="img/' + item + '"></a></li>');
    videoList.append(li);
    btnsList.append('<li>')
});

videoList.find('li').eq(0).clone(true).appendTo(videoList);
videoList.css('width', 440 * videoList.find('li').length);
var btnsLi = btnsList.find('li');
btnsLi.eq(0).addClass('active');

btnsLi.click(function () {
    var index = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    imgNum = btnNum = index;
    toRun();
})

function autoPlay() {
    timer = setInterval(function () {
        imgNum++;
        if (imgNum == videoList.find('li').length) {
            imgNum = 1;
            videoList.css('left', 0);
        }
        btnNum++;
        btnNum %= btnsLi.length;
        toRun();
    }, 3000);
}
autoPlay();

$('.video-tab').hover(function () {
    clearInterval(timer);
}, autoPlay);

function toRun() {
    videoList.stop().animate({ left: -imgNum * 440 }, 300);
    btnsLi.eq(btnNum).addClass('active').siblings().removeClass('active');
    $('.video-text').html(videoText[btnNum]);
}

//左右切换的内容列表
var liveLinkTo = $('.bili-tab-live .link-to');
var liveTabCon = $('.bili-tab-live .tab-con');

liveLinkTo.click(function () {
    var index = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    liveTabCon.animate({ marginLeft: -260 * index }, 300);
})

//为你推荐
var liveTabBtns = $('.live-tab-btn').find('span');
var liveTabImg = $('.live-tab-img');
var liveTabTitle = $('.live-tab-title').find('li');
var biliItemWrap = $('#bili-item-wrap');
goBackRun(liveTabBtns, liveTabImg, liveTabTitle, biliItemWrap);

//特别推荐
var recommendImg = $('.recommend-panel').find('.pic-list');
var recommendTitle = $('.recommend-panel .text').find('a');
var recommendBtns = $('.recommend-panel').find('span');
var recommendPanel = $('.recommend-panel');
goBackRun(recommendBtns, recommendImg, recommendTitle, recommendPanel);

var nationImg = $('.nation-wrap');
var nationTitle = $('.nation-tab-box').find('a');
var nationBtns = $('.nation-tab-box').find('span');
var nationBox = $('.nation-tab-box');

goBackRun(nationBtns, nationImg, nationTitle, nationBox);
//封装使左右列表切换的函数
function goBackRun(objBtn, objImg, objTitle, objClear) {
    var timer = null;
    var n = 0;
    objBtn.mouseover(function () {
        var index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        objImg.css('marginLeft', -100 * index + '%');
        objTitle.eq(index).attr('class', 'on').siblings().attr('class', '');
    });

    function autoPlay() {
        timer = setInterval(function () {
            n++;
            if (n % 2) {
                objImg.css('marginLeft', '-100%');
                objTitle.eq(1).attr('class', 'on').siblings().attr('class', '');
                objBtn.eq(1).addClass('active').siblings().removeClass('active');
            } else {
                objImg.css('marginLeft', 0);
                objTitle.eq(0).attr('class', 'on').siblings().attr('class', '');
                objBtn.eq(0).addClass('active').siblings().removeClass('active');
            }
        }, 3000);
    }
    autoPlay();

    objClear.hover(function () {
        clearInterval(timer);
    }, autoPlay);
}
//点击侧边栏导航切换到对应的内容区域
var asideNav = $('.bili-aside-nav');
var asideNavLi = asideNav.find('li');
var changeItemBox = $('.changeItemBox');
asideNavLi.click(function () {
    var index = $(this).index();
    var iTop = changeItemBox.eq(index).offset().top;
    $(this).attr('class', 'active').siblings().attr('class', '');
    $('html,body').animate({
        scrollTop: iTop
    });
    asideNav.stop().animate({ top: 0 }, 200);
});

$(window).mousewheel(function (e, delta) {
    var scrollTop = $(window).scrollTop();
    if (delta < 0) {
        if (scrollTop >= 234) {
            asideNav.stop().animate({ top: 0 }, 200);
        }
        setNavClass(scrollTop, 200);
        if (scrollTop > 9500) {
            asideNavLi.eq(asideNavLi.length-1).attr('class', '');
        }
    } else {
        if (scrollTop < 234) {
            asideNav.stop().animate({ top: 234 }, 200);
        }
        setNavClass(scrollTop, 400)
        if (scrollTop < 380) {
            asideNavLi.eq(0).attr('class', '');
        }
    }
});
function setNavClass(scrollTop,dir) {
    changeItemBox.each(function (i, item) {
        if (scrollTop >= $(item).offset().top-dir) {
            asideNavLi.eq(i).attr('class', 'active').siblings().attr('class', '');
        }
    })
}
//返回顶部
$('.back-top').click(function () {
    $('html,body').animate({
        scrollTop: 0
    }, function () {
        asideNav.stop().animate({ top: 234 }, 200);
    });
    asideNavLi.attr('class', '');
})
