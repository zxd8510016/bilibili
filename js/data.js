//轮播图图片数据
var videoImg = ['video-play1.jpeg', 'video-play2.jpeg', 'video-play3.webp', 'video-play4.webp', 'video-play5.webp'];

var videoText = ['B站神仙旅拍vlogger大合集！', '国服三周年作战会议启动！', '搭时光机看7年BML成长', '黑凤凰到底有多黑？', '且盼风雨来，能留你在此。'];

//视频切换列表数据
var videoList1 = [
    {
        src: 'img/video-list1-img1.jpeg',
        title: '【明日方舟】德克萨斯做得到吗！心随拉普舞动~',
        autor: 'up主：板糖',
        num: '播放：20.8万'
    },
    {
        src: 'img/video-list1-img2.jpeg',
        title: '【花園セレナ】勾指起誓 ♪ 日语版【B站限定】',
        autor: 'up主：花園セレナOfficial',
        num: '播放：8.7万'
    },
    {
        src: 'img/video-list1-img3.jpeg',
        title: '灼热与烬灭之刃-斩龙【怪物猎人生态】',
        autor: 'up主：艾森巴赫',
        num: '播放：15.0万'
    },
    {
        src: 'img/video-list1-img4.jpeg',
        title: '死库水伏特加女孩 - Dive To Blue',
        autor: 'up主：再肝剁手',
        num: '播放：8.5万'
    },
    {
        src: 'img/video-list1-img5.jpeg',
        title: '【壁吧】2019年7月新番导视',
        autor: 'up主：名作之壁吧',
        num: '播放：8.0万'
    },
    {
        src: 'img/video-list1-img6.jpeg',
        title: '【洛天依原创曲】Rainy Bunny【人形兎×雨狸×OQQ】',
        autor: 'up主：雨狸',
        num: '播放：8.0万'
    }
];
var videoList2 = [
    {
        src: 'img/video-list2-img1.webp',
        title: '【楓与美兎】ロキ',
        autor: 'up主：委员长杂鱼搬运',
        num: '播放：5.0万'
    },
    {
        src: 'img/video-list2-img2.webp',
        title: '【虫之迹#1】改变业界的传奇少年！漫画之神诞生',
        autor: 'up主：路蓝君',
        num: '播放：4.7万'
    },
    {
        src: 'img/video-list2-img3.webp',
        title: '需要芯片助剂？AP-5平民自律攻略！附赠AP4！无能天使、无任何6星平民低练度的自律攻略！',
        autor: 'up主：魔法Zc目录',
        num: '播放：15.1万'
    },
    {
        src: 'img/video-list2-img4.webp',
        title: '【おちゃめ機能】萌实毫不迷茫【试着唱了一下】',
        autor: 'up主：MMP字幕搬运',
        num: '播放：8.3万'
    },
    {
        src: 'img/video-list2-img5.webp',
        title: '【桃核】敢来我的派对么～？小恶魔警告！！ゴーカ! ごーかい!? ファントムシーフ!',
        autor: 'up主：桃核叫我桃道长',
        num: '播放：25.6万'
    },
    {
        src: 'img/video-list2-img6.webp',
        title: '【短评】扒皮洗我稿件的网站曾经做过哪些恶',
        autor: 'up主：芒果冰OL',
        num: '播放：81.5万'
    }
];
var videoList3 = [
    {
        src: 'img/video-list3-img1.webp',
        title: '日本动画打戏的奇迹 —— 松本宪生打斗作画MAD',
        autor: 'up主：AnimeTamashii',
        num: '播放：2.4万'
    },
    {
        src: 'img/video-list3-img2.webp',
        title: '【醋醋】桃花笑❀逢考必过咒！',
        autor: 'up主：醋醋cucu',
        num: '播放：5.4万'
    },
    {
        src: 'img/video-list3-img3.webp',
        title: '【オリジナルMV】ワールドエンド・ガールズライク【初音MIKU】',
        autor: 'up主：鹿乃ちゃん',
        num: '播放：3.3万'
    },
    {
        src: 'img/video-list3-img4.webp',
        title: '这部16年超人气动画居然又出了一集！？',
        autor: 'up主：凉风Kaze',
        num: '播放：46.2万'
    },
    {
        src: 'img/video-list3-img5.webp',
        title: '【露肩礼裙天依】那些往事就如昨日，一幕幕映在了心头【绫依】',
        autor: 'up主：bysATT',
        num: '播放：3.4万'
    },
    {
        src: 'img/video-list3-img6.webp',
        title: '锉 刀 之 神 诞 生！玩坏碧蓝进化篇碧蓝JOJO第一集',
        autor: 'up主：钻头V会长',
        num: '播放：4.7万'
    }
];
// 推广列表数据
var spreadList = [
    {
        src: 'img/spread-img1.jpeg',
        title: '她为什么闷闷不乐',
        time: '01:24'
    },
    {
        src: 'img/spread-img2.jpeg',
        title: 'LPL夏季赛每周之星01：这KDA谁顶的住啊！',
        time: '10:49'
    },
    {
        src: 'img/spread-img3.jpeg',
        title: '舞区up十周年聚会居然蹦迪半小时？!【经典宅舞随机连跳】（乐歌/薄荷/小晨/桃桃/螺主任/浩浩/小白/麦子/腰哥/米子/萱萱/小',
        time: '32:27'
    },
    {
        src: 'img/spread-img4.jpeg',
        title: '来自沙雕室友的对唱呼唤，一起唱歌吧！',
        time: '01:43'
    }
];
//直播列表数据
var liveList = [
    {
        src: 'img/live1.webp',
        autor: '哲轩呀_',
        num: '4.4万',
        title: '峡谷随便冲冲上波大师,我是真的强！',
        type: '网游 · 英雄联盟',
        hover: 'img/live-hover1.webp'
    },
    {
        src: 'img/live2.webp',
        autor: 'NShy夜宵',
        num: '2133',
        title: '少儿频道',
        type: '娱乐 · 视频聊天',
        hover: 'img/live-hover2.webp'
    },
    {
        src: 'img/live3.webp',
        autor: '炎少少小妖精w',
        num: '5384',
        title: '来抓小精灵辣！',
        type: '单机 · 精灵宝可梦',
        hover: 'img/live-hover3.webp'
    },
    {
        src: 'img/live4.webp',
        autor: '木圭了一',
        num: '70',
        title: '佛系道逍遥 全程无人声 绘画助睡眠',
        type: '绘画 · 原创绘画',
        hover: 'img/live-hover4.webp'
    },
    {
        src: 'img/live5.webp',
        autor: '卡布哩',
        num: '986',
        title: '夏日清凉音',
        type: '电台 · 原创绘画',
        hover: 'img/live-hover5.webp'
    },
    {
        src: 'img/live6.webp',
        autor: '微不是薇_',
        num: '12',
        title: '【考研自习室】白噪音 应用心理考研 加油',
        type: '哔考 · 考生加油站',
        hover: 'img/live-hover6.webp'
    },
    {
        src: 'img/live7.webp',
        autor: '这个小岸不太冷',
        num: '4116',
        title: '文学考研学习云自习室/现当代',
        type: '娱乐 · 学习',
        hover: 'img/live-hover7.webp'
    },
    {
        src: 'img/live8.webp',
        autor: '白亦歌ovo',
        num: '2.2万',
        title: 'Rush B My Friends♥',
        type: '网游 · CS:GO',
        hover: 'img/live-hover8.webp'
    }
];
//动画内容列表数据
var animatioinList = {
    dynamic: [
        {
            src: 'img/component/animation-dynamic1.webp',
            title: '【赤井心MMD】赤井はあと - Deep Blue Town',
            time: '03:19',
            num: '2.9万',
            danmu: '79'
        },
        {
            src: 'img/component/animation-dynamic2.webp',
            title: '【丢人堇告】秦先生想要变得可爱(完整版) 狗头人也要努力变得可爱！',
            time: '04:26',
            num: '33.9万',
            danmu: '3740'
        },
        {
            src: 'img/component/animation-dynamic3.webp',
            title: '【火影人物志36】成为忍者之神的男人！千手柱间 最强的火影改变世界',
            time: '16:13',
            num: '101.3万',
            danmu: '4581'
        },
        {
            src: 'img/component/animation-dynamic4.webp',
            title: '【UT MMD】Sans -KISS是不够的，干脆直接杀掉吧～【A】ddiction',
            time: '03:21',
            num: '2121',
            danmu: '18'
        },
        {
            src: 'img/component/animation-dynamic5.webp',
            title: '【你从未见过的神荼高燃剪辑】黄泉花，马上就要盛开了！',
            time: '01:10',
            num: '1871',
            danmu: '21'
        },
        {
            src: 'img/component/animation-dynamic6.webp',
            title: '中国还有未被封禁的动画吗？',
            time: '03:45',
            num: '9.6万',
            danmu: '503'
        },
        {
            src: 'img/component/animation-dynamic7.webp',
            title: '【描改】符华上仙来了哦！',
            time: '05:01',
            num: '8.1万',
            danmu: '482'
        },
        {
            src: 'img/component/animation-dynamic8.webp',
            title: '前方高能！康康史上最强七月番？哪一部是你的菜',
            time: '05:46',
            num: '11.2万',
            danmu: '638'
        }
    ],
    contribute: [
        {
            src: 'img/component/animation-contribute1.webp',
            title: '【进击的巨人】情报曝光进击版前任虐现任！',
            time: '01:53',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/animation-contribute2.webp',
            title: '【胡言鸾语】【摸仙堡】摸仙玉鸾的场合 [VUP][Vtuber][虚拟up主]',
            time: '01:45',
            num: '1',
            danmu: '0'
        },
        {
            src: 'img/component/animation-contribute3.webp',
            title: '【漫剪】 跟着节奏一起感受二次元的美',
            time: '02:33',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/animation-contribute4.webp',
            title: '盘点丨15部你小时候绝对看过的国产动画片（二）',
            time: '03:21',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/animation-contribute5.webp',
            title: '【配音•七页木大】一个up主不希望你点开的视频',
            time: '01:10',
            num: '1',
            danmu: '0'
        },
        {
            src: 'img/component/animation-contribute6.webp',
            title: '男人的浪漫！飞行器作画赏',
            time: '03:45',
            num: '1',
            danmu: '0'
        },
        {
            src: 'img/component/animation-contribute7.webp',
            title: '带土！！！',
            time: '02:21',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/animation-contribute8.webp',
            title: '【剑网三MMD】鹤梦苍爹的this girl',
            time: '01:42',
            num: '11',
            danmu: '0'
        }
    ]
}
//动画侧边栏列表数据
var animationAsideList = {
    threeDays: {
        firstItem: {
            id: 1,
            title: '转生成为女人？主角的操作震撼我妈30年，这个让老外忍不住评论的高分作品真的太高能了【高能吐槽】',
            src: 'img/component/rank-three-day-list1.webp',
            total: '76.3万'
        },
        asideList: [
            {
                id: 2,
                title: '前方高能！一拳超人最强角色竟然是他？盘点一拳超人有趣的梗！'
            },
            {
                id: 3,
                title: '爆肝30小时，埼玉vs杰诺斯，裸眼3D'
            },
            {
                id: 4,
                title: '前方高能！康康史上最强七月番？哪一部是你的菜'
            },
            {
                id: 5,
                title: '救死扶伤一拳神医！倒放解说一拳超人竟如此好玩！'
            },
            {
                id: 6,
                title: '2019毕业设计动画短片《桃之妖妖》'
            },
            {
                id: 7,
                title: '【手绘六百帧】全网最骚游乐王子与22娘热舞ME!ME!ME!'
            }
        ]
    },
    oneWeek: {
        firstItem: {
            id: 1,
            title: '这部16年超人气动画居然又出了一集！？',
            src: 'img/component/rank-one-week-list1.webp',
            total: '106.7万'
        },
        asideList: [
            {
                id: 2,
                title: '前方高能！一拳超人最强角色竟然是他？盘点一拳超人有趣的梗！'
            },
            {
                id: 3,
                title: '转生成为女人？主角的操作震撼我妈30年，这个让老外忍不住评论的高分作品真的太高能了【高能吐槽】'
            },
            {
                id: 4,
                title: '漫威最强英雄：Omega级变种人9位介绍！'
            },
            {
                id: 5,
                title: '前方不高能！但一定特别爽！！！'
            },
            {
                id: 6,
                title: '爆肝30小时，埼玉vs杰诺斯，裸眼3D'
            },
            {
                id: 7,
                title: '【火影人物志42】背负一切罪恶的男人，团藏 天下皆白，唯我独黑！'
            }
        ]
    }
}

//番剧组件数据
var operaList = {
    new: [
        {
            src: 'img/component/opera-img1.webp',
            title: '強襲魔女 501部隊出動!（僅限台灣地區）',
            update: '第11话'
        },
        {
            src: 'img/component/opera-img2.webp',
            title: 'YU-NO 在這世界盡頭詠唱愛的少女（僅限港澳台地區）',
            update: '第12话'
        },
        {
            src: 'img/component/opera-img3.webp',
            title: '偶像大师灰姑娘剧场 第四季（TV版）',
            update: '第51话'
        },
        {
            src: 'img/component/opera-img4.webp',
            title: '少年阿贝 GO!GO!小芝麻 第四季',
            update: '第10话'
        },
        {
            src: 'img/component/opera-img5.webp',
            title: '钻石王牌 actII',
            update: '第12话'
        },
        {
            src: 'img/component/opera-img6.webp',
            title: '黑色四叶草',
            update: '第88话'
        },
        {
            src: 'img/component/opera-img7.webp',
            title: 'RobiHachi',
            update: '第11话'
        },
        {
            src: 'img/component/opera-img8.webp',
            title: '多罗罗',
            update: '第23话'
        },
        {
            src: 'img/component/opera-img9.webp',
            title: '智龙迷城',
            update: '第63话'
        },
        {
            src: 'img/component/opera-img10.webp',
            title: '進擊的巨人 第三季 Part.2（僅限台灣地區）',
            update: '第20话'
        },
        {
            src: 'img/component/opera-img11.webp',
            title: '八月的棒球甜心',
            update: '第9话'
        },
        {
            src: 'img/component/opera-img12.webp',
            title: '八月的棒球甜心（僅限港澳台地區）',
            update: '第9话'
        }
    ],
    one: [
        {
            src: 'img/component/opera-img11.webp',
            title: '八月的棒球甜心',
            update: '第9话'
        },
        {
            src: 'img/component/opera-img12.webp',
            title: '八月的棒球甜心（僅限港澳台地區）',
            update: '第9话'
        },
        {
            src: 'img/component/opera-img10.webp',
            title: '進擊的巨人 第三季 Part.2（僅限台灣地區）',
            update: '第20话'
        },
        {
            src: 'img/component/opera-img9.webp',
            title: '智龙迷城',
            update: '第63话'
        },
        {
            src: 'img/component/opera-img8.webp',
            title: '多罗罗',
            update: '第23话'
        },
        {
            src: 'img/component/opera-img7.webp',
            title: 'RobiHachi',
            update: '第11话'
        }
    ],
    two: [
        {
            src: 'img/component/opera-img6.webp',
            title: '黑色四叶草',
            update: '第88话'
        },
        {
            src: 'img/component/opera-img5.webp',
            title: '钻石王牌 actII',
            update: '第12话'
        },
        {
            src: 'img/component/opera-img-two1.webp',
            title: '少年阿贝 GO!GO!小芝麻 第四季',
            update: '第10话'
        },
        {
            src: 'img/component/opera-img3.webp',
            title: '偶像大师灰姑娘剧场 第四季（TV版）',
            update: '第51话'
        },
        {
            src: 'img/component/opera-img2.webp',
            title: 'YU-NO 在這世界盡頭詠唱愛的少女（僅限港澳台地區）',
            update: '第12话'
        }
    ],
    three: [
        {
            src: 'img/component/opera-img1.webp',
            title: '強襲魔女 501部隊出動!（僅限台灣地區）',
            update: '第11话'
        },
        {
            src: 'img/component/opera-img-three1.webp',
            title: '盾之勇者成名录',
            update: '第24话'
        },
        {
            src: 'img/component/opera-img-three2.webp',
            title: '贤者之孙',
            update: '第11话'
        }
    ],
    four: [
        {
            src: 'img/component/opera-img-four1.webp',
            title: 'CAROLE & TUESDAY',
            update: '第11话'
        },
        {
            src: 'img/component/opera-img-four2.webp',
            title: '香蕉怪大叔 呐呐~呐 好奇洞穴乐园（第二季）',
            update: '第11话'
        },
        {
            src: 'img/component/opera-img-four3.webp',
            title: '叛逆性百万亚瑟王 第二季',
            update: '第22话'
        },
        {
            src: 'img/component/opera-img-four4.webp',
            title: '魔偶马戏团',
            update: '第35话'
        }
    ],
    five: [
        {
            src: 'img/component/opera-img-five1.webp',
            title: '文豪野犬 第三季',
            update: '第11话'
        }
    ],
    six: [
        {
            src: 'img/component/opera-img-six1.webp',
            title: '水果篮子 (2019)',
            update: '第12话'
        },
        {
            src: 'img/component/opera-img-six2.webp',
            title: '生肖奇缘 (2019)（僅限港澳地區）',
            update: '第12话'
        },
        {
            src: 'img/component/opera-img-six3.webp',
            title: 'JOJO的奇妙冒险 黄金之风',
            update: '第35话'
        },
        {
            src: 'img/component/opera-img-six4.webp',
            title: '川柳少女',
            update: '第12话'
        },
        {
            src: 'img/component/opera-img-six5.webp',
            title: '滿腦都是○○的我沒辦法談戀愛（僅限台灣地區）',
            update: '第12话'
        },
        {
            src: 'img/component/opera-img-six6.webp',
            title: '一个人的〇〇小日子',
            update: '第12话'
        },
        {
            src: 'img/component/opera-img-six7.webp',
            title: '暖暖日记 4th',
            update: '第12话'
        },
        {
            src: 'img/component/opera-img-six8.webp',
            title: 'MIX',
            update: '第12话'
        },
        {
            src: 'img/component/opera-img-six9.webp',
            title: 'MIX（僅限台灣地區）',
            update: '第12话'
        }
    ],
    seven: [
        {
            src: 'img/component/opera-img-seven1.webp',
            title: '鬼灭之刃',
            update: '第11话'
        },
        {
            src: 'img/component/opera-img-seven2.webp',
            title: '鬼滅之刃（僅限台灣地區）',
            update: '第11话'
        },
        {
            src: 'img/component/opera-img-seven2.webp',
            title: '鬼滅之刃（僅限台灣地區）',
            update: '第11话'
        },
        {
            src: 'img/component/opera-img-seven4.webp',
            title: '我們真的學不來！（僅限台灣地區）',
            update: '第11话'
        },
        {
            src: 'img/component/opera-img-seven5.webp',
            title: '一弦定音！（僅限港澳台地區）',
            update: '第11话'
        },
        {
            src: 'img/component/opera-img-seven6.webp',
            title: '爱玩怪兽',
            update: '第36话'
        },
        {
            src: 'img/component/opera-img-seven1.webp',
            title: '鬼灭之刃',
            update: '第11话'
        },
        {
            src: 'img/component/opera-img-seven2.webp',
            title: '鬼滅之刃（僅限台灣地區）',
            update: '第11话'
        },
        {
            src: 'img/component/opera-img-seven2.webp',
            title: '鬼滅之刃（僅限台灣地區）',
            update: '第11话'
        },
        {
            src: 'img/component/opera-img15.webp',
            title: '美妙☆频道',
            update: '第62话'
        },
        {
            src: 'img/component/opera-img14.webp',
            title: '博人传 火影忍者新时代',
            update: '第111话'
        },
        {
            src: 'img/component/opera-img13.webp',
            title: '深夜的超自然公务员',
            update: '第11话'
        }
    ]
}

//番剧侧边栏组件
var operaAsideList = {
    oneWeek: [
        {
            id: 1,
            title: 'JOJO的奇妙冒险 黄金之风',
            total: '更新至第34话'
        },
        {
            id: 2,
            title: '鬼灭之刃',
            total: '更新至第11话'
        },
        {
            id: 3,
            title: '盾之勇者成名录',
            total: '更新至第24话'
        },
        {
            id: 4,
            title: '多罗罗',
            total: '更新至第23话'
        },
        {
            id: 5,
            title: '贤者之孙',
            total: '更新至第11话'
        },
        {
            id: 6,
            title: 'CAROLE & TUESDAY',
            total: '更新至第11话'
        },
        {
            id: 7,
            title: '我们无法一起学习',
            total: '更新至第11话'
        },
        {
            id: 8,
            title: '文豪野犬 第三季',
            total: '更新至第10话'
        },
        {
            id: 9,
            title: '川柳少女',
            total: '更新至第11话'
        },
        {
            id: 10,
            title: '天使降临到我身边',
            total: '全13话'
        }
    ],
    threeDays: [
        {
            id: 1,
            title: '多罗罗',
            total: '更新至第23话'
        },
        {
            id: 2,
            title: '盾之勇者成名录',
            total: '更新至第24话'
        },
        {
            id: 3,
            title: '鬼灭之刃',
            total: '更新至第11话'
        },
        {
            id: 4,
            title: 'JOJO的奇妙冒险 黄金之风',
            total: '更新至第34话'
        },
        {
            id: 5,
            title: '贤者之孙',
            total: '更新至第11话'
        },
        {
            id: 6,
            title: '我们无法一起学习',
            total: '更新至第11话'
        },
        {
            id: 7,
            title: '黑色四叶草',
            total: '更新至第88话'
        },
        {
            id: 8,
            title: '文豪野犬 第三季',
            total: '更新至第10话'
        },
        {
            id: 9,
            title: '天使降临到我身边',
            total: '全13话'
        },
        {
            id: 10,
            title: 'CAROLE & TUESDAY',
            total: '更新至第11话'
        }
    ]
}

//番剧最新动态数据
var operaDynamic = {
    dynamic: [
        {
            src: 'img/component/opera-dynamic1.webp',
            title: '【10月】记录的地平线 第二季 14',
            time: '24:31',
            num: '87.2万',
            danmu: '2.4万'
        },
        {
            src: 'img/component/opera-dynamic2.webp',
            title: '【4月/完结】Re：从零开始的异世界生活 25',
            time: '27:19',
            num: '687.6万',
            danmu: '67.0万'
        },
        {
            src: 'img/component/opera-dynamic3.webp',
            title: '【4月】我的英雄学院 41',
            time: '23:35',
            num: '469.0万',
            danmu: '8.5万'
        },
        {
            src: 'img/component/opera-dynamic4.webp',
            title: '【4月】深夜的超自然公务员 11【独家正版】',
            time: '23:36',
            num: '7.3万',
            danmu: '987'
        },
        {
            src: 'img/component/opera-dynamic5.webp',
            title: '【合集】魔装少女就是本少爷',
            time: '5:26:47',
            num: '33.3万',
            danmu: '9757'
        },
        {
            src: 'img/component/opera-dynamic6.webp',
            title: '【10月/完结】终将成为你 13【独家正版】',
            time: '23:41',
            num: '41.2万',
            danmu: '2.1万'
        },
        {
            src: 'img/component/opera-dynamic7.webp',
            title: '【1月】多罗罗 15【独家正版】',
            time: '24:12',
            num: '367.4万',
            danmu: '4.9万'
        },
        {
            src: 'img/component/opera-dynamic8.webp',
            title: '【4月】CAROLE & TUESDAY 09【独家正版】',
            time: '22:56',
            num: '122.8万',
            danmu: '5.0万'
        }
    ],
    contribute: [
        {
            src: 'img/component/opera-contribute1.webp',
            title: '【7月】异世界超能魔术师 PV2【MCE汉化组】',
            time: '01:49',
            num: '35',
            danmu: '0'
        },
        {
            src: 'img/component/opera-contribute2.webp',
            title: 'ライフリング４ _ アニメと競技を広める動画 第3回（最終回）',
            time: '13:54',
            num: '3',
            danmu: '0'
        },
        {
            src: 'img/component/opera-contribute3.webp',
            title: '『紫罗兰永恒花园』制作風景 第4弾「美術」',
            time: '02:11',
            num: '8',
            danmu: '0'
        },
        {
            src: 'img/component/opera-contribute4.webp',
            title: '【生肉】本渡和千本木的GANGAN GA频道 (2019.06.20/系列第63回)',
            time: '1:01:46',
            num: '52',
            danmu: '1'
        },
        {
            src: 'img/component/opera-contribute5.webp',
            title: '【JolFamily】你好！南条桑！！4回',
            time: '33:49',
            num: '53',
            danmu: '0'
        },
        {
            src: 'img/component/opera-contribute6.webp',
            title: '本渡和千本木的GANGAN GA频道（2019年6月20日/系列第63回）',
            time: '1:01:46',
            num: '23',
            danmu: '0'
        },
        {
            src: 'img/component/opera-contribute7.webp',
            title: '[中字] 他羊他羊',
            time: '00:38',
            num: '107',
            danmu: '2'
        },
        {
            src: 'img/component/opera-contribute8.webp',
            title: '[有聲漫畫]きみにあいを！第1、2話(無料サンプル部分)',
            time: '04:14',
            num: '7',
            danmu: '0'
        }
    ]
}

//国创列表数据
var nationList = {
    new: [
        {
            src: 'img/component/nation-four1.webp',
            title: '画江湖之不良人 第三季',
            update: '即将更新 第24话'
        },
        {
            src: 'img/component/nation1.webp',
            title: '非人哉',
            update: '第47话'
        },
        {
            src: 'img/component/nation2.webp',
            title: '战斗吧歌姬！ 第二季',
            update: '第11话'
        },
        {
            src: 'img/component/nation3.webp',
            title: '我家大师兄脑子有坑 特别篇',
            update: '第35话'
        },
        {
            src: 'img/component/nation4.webp',
            title: '垂直世界之地中海美少年',
            update: '第1话~第2话'
        },
        {
            src: 'img/component/nation5.webp',
            title: '梦幻书院',
            update: '第13话'
        },
        {
            src: 'img/component/nation2.webp',
            title: 'Gon的旱獭 第三季',
            update: '第16话'
        }
    ],
    one: [
        {
            src: 'img/component/nation2.webp',
            title: 'Gon的旱獭 第三季',
            update: '第16话'
        },
        {
            src: 'img/component/nation5.webp',
            title: '梦幻书院',
            update: '第13话'
        }
    ],
    two: [
        {
            src: 'img/component/nation4.webp',
            title: '垂直世界之地中海美少年',
            update: '第1话~第2话'
        }
    ],
    three: [
        {
            src: 'img/component/nation3.webp',
            title: '我家大师兄脑子有坑 特别篇',
            update: '第35话'
        },
        {
            src: 'img/component/nation2.webp',
            title: '战斗吧歌姬！ 第二季',
            update: '第11话'
        }
    ],
    four: [
        {
            src: 'img/component/nation1.webp',
            title: '非人哉',
            update: '第47话'
        },
        {
            src: 'img/component/nation-four1.webp',
            title: '画江湖之不良人 第三季',
            update: '即将更新 第24话'
        }
    ],
    five: [
        {
            src: 'img/component/nation-five1.webp',
            title: '小黄人和萌友',
            update: '第17话'
        },
        {
            src: 'img/component/nation-five2.webp',
            title: '大王不高兴 动态漫',
            update: '第11话'
        },
        {
            src: 'img/component/nation-five3.webp',
            title: '凹凸世界 第三季',
            update: '本周起停更'
        },
        {
            src: 'img/component/nation-five4.webp',
            title: '霹雳魔封（普通话免费）',
            update: '第53话~第54话'
        },
        {
            src: 'img/component/nation-five5.webp',
            title: '霹雳靖玄录（普通话）',
            update: '第1话~第2话'
        },
        {
            src: 'img/component/nation-five6.webp',
            title: '霹雳靖玄录（闽南语）',
            update: '第1话~第2话'
        }
    ],
    six: [
        {
            src: 'img/component/nation-six1.webp',
            title: '没出息的阴阳师一家',
            update: '第9话'
        },
        {
            src: 'img/component/nation-six2.webp',
            title: '阿衰',
            update: '第21话'
        }
    ],
    seven: [
        {
            src: 'img/component/nation-seven1.webp',
            title: '绝命响应',
            update: '第4话'
        },
        {
            src: 'img/component/nation-seven2.webp',
            title: '拾又之国',
            update: '第13话'
        },
        {
            src: 'img/component/nation-seven3.webp',
            title: '拾又之国 日语版',
            update: '第13话'
        }
    ]
};
//国创侧边栏数据
var nationAsideList = {
    threeDays: [
        {
            id: 1,
            title: '垂直世界之地中海美少年',
            total: '更新至第2话'
        },
        {
            id: 2,
            title: '少年歌行',
            total: '全26话'
        },
        {
            id: 3,
            title: '非人哉',
            total: '更新至第47话'
        },
        {
            id: 4,
            title: '没出息的阴阳师一家',
            total: '更新至第8话'
        },
        {
            id: 5,
            title: '镇魂街 第一季',
            total: '全24话'
        }
    ],
    oneWeek: [
        {
            id: 1,
            title: '非人哉',
            total: '更新至第47话'
        },
        {
            id: 2,
            title: '少年歌行',
            total: '全26话'
        },
        {
            id: 3,
            title: '画江湖之不良人 第三季',
            total: '更新至第24话'
        },
        {
            id: 4,
            title: '没出息的阴阳师一家',
            total: '更新至第8话'
        },
        {
            id: 5,
            title: '凹凸世界 第三季',
            total: '更新至第20话'
        }
    ]
}
//国产原列表创数据
var domesticList = {
    dynamic: [
        {
            src: 'img/component/domestic-dynamic.webp',
            title: '声控贼有料第八十八期：北哥没算清算我输',
            time: '01:15',
            num: '2.9万',
            danmu: '110'
        },
        {
            src: 'img/component/domestic-dynamic2.webp',
            title: '【凹凸世界手书/嘉瑞】留堂老师',
            time: '05:47',
            num: '47.4万',
            danmu: '8485'
        },
        {
            src: 'img/component/domestic-dynamic3.webp',
            title: '100分的腿和脸，你喜欢哪一个呢，或者是全都要',
            time: '03:00',
            num: '3.7万',
            danmu: '117'
        },
        {
            src: 'img/component/domestic-dynamic4.webp',
            title: '【清风】火凤燎原第二十期 燎原火灭',
            time: '16:11',
            num: '4.9万',
            danmu: '547'
        },
        {
            src: 'img/component/domestic-dynamic5.webp',
            title: '韩非x焰灵姬||望乡台||回头望乡看一眼，或许今夕是永别',
            time: '00:47',
            num: '1411',
            danmu: '15'
        },
        {
            src: 'img/component/domestic-dynamic6.webp',
            title: '【一人之下】王也角色歌《丹歌惊鸿》',
            time: '01:42',
            num: '98.0万',
            danmu: '4366'
        },
        {
            src: 'img/component/domestic-dynamic7.webp',
            title: '想补番的小伙伴快看这里！国漫新番，强势来袭！《2019年至未来即将上映的国漫 第十二期》',
            time: '10:13',
            num: '3615',
            danmu: '38'
        },
        {
            src: 'img/component/domestic-dynamic8.webp',
            title: '【一人之下2】舒服至极的剪辑 每一帧不是踩点就是在踩点的路上',
            time: '04:18',
            num: '1.4万',
            danmu: '151'
        }
    ],
    contribute: [
        {
            src: 'img/component/domestic-contribute1.webp',
            title: '山大王说漫画《温瑞安群侠传》第七期大凶亡日',
            time: '22:17',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/domestic-contribute2.webp',
            title: '新一代人形自走式挂逼男主，土豆小说又双叒动画化了',
            time: '04:57',
            num: '800',
            danmu: '9'
        },
        {
            src: 'img/component/domestic-contribute3.webp',
            title: '灵剑尊：看狂傲少年，如何一战成名！',
            time: '03:22',
            num: '4',
            danmu: '0'
        },
        {
            src: 'img/component/domestic-contribute4.webp',
            title: '2019.06.18快剪',
            time: '03:22',
            num: '1',
            danmu: '0'
        },
        {
            src: 'img/component/domestic-contribute5.webp',
            title: '萌妻食神：采玉采玉须水碧~',
            time: '00:30',
            num: '1',
            danmu: '0'
        },
        {
            src: 'img/component/domestic-contribute6.webp',
            title: '天行九歌：权力游戏里谁能成就传奇，是韩非还是卫庄？',
            time: '02:43',
            num: '1',
            danmu: '0'
        },
        {
            src: 'img/component/domestic-contribute7.webp',
            title: '灵契【昶】',
            time: '00:38',
            num: '1',
            danmu: '0'
        },
        {
            src: 'img/component/domestic-contribute8.webp',
            title: '咖子脑力测试：谁会收到危险？',
            time: '00:50',
            num: '2',
            danmu: '0'
        }
    ]
}
//国产原创侧边栏数据
var domesticAsideList = {
    threeDays: {
        firstItem: {
            id: 1,
            title: '【麦子】童年经典《哪吒传奇》骚气回顾完结篇',
            src: 'img/component/domestic-aside1.webp',
            total: '13.1万'
        },
        asideList: [
            {
                id: 2,
                title: '【清风】风云3第30期 无天绝剑'
            },
            {
                id: 3,
                title: '[十二美男混剪]国漫里最不缺的就是美男子啊！/十二风华鉴'
            },
            {
                id: 4,
                title: '全程沙雕，笑成猪叫的动画！业内救星制作，竟然搞了部蛇精病出来'
            },
            {
                id: 5,
                title: '细数那些完全胡说八道却广为流传的国漫谣言 漫谈01'
            },
            {
                id: 6,
                title: '【战斗吧歌姬！】墨汐的表白-闪耀的日常039'
            },
            {
                id: 7,
                title: '叶修的龙抬头见过了。一叶知秋的龙抬头没见过吧 ！ 《全职高手》【混剪】'
            }
        ]
    },
    oneWeek: {
        firstItem: {
            id: 1,
            title: '中国还有未被封禁的动画吗？',
            src: 'img/component/domestic-aside2.webp',
            total: '34.9万'
        },
        asideList: [
            {
                id: 2,
                title: '这动画被称为有生之年？制作竟如此炸裂！观众看了都傻眼！【国漫槽推荐 09】'
            },
            {
                id: 3,
                title: '萧老板啊 总是自嘲自己不会武功 其实比谁都在意 那个曾经为北离第一天才的自己'
            },
            {
                id: 4,
                title: '【麦子】童年经典《哪吒传奇》骚气回顾第6期'
            },
            {
                id: 5,
                title: '这动画居然被喷到停播！马化腾被坑哭，惊动整个行业！论观众是如何推动动画发展的？'
            },
            {
                id: 6,
                title: '用爱发电还是日进斗金，五年全职配音演员给你爆爆料'
            },
            {
                id: 7,
                title: '【垂直世界】地中海美少年强势来袭！洗脑出道曲公开！'
            }
        ]
    }
}
//音乐视频列表
var musicList = {
    dynamic: [
        {
            src: 'img/component/music1.webp',
            title: '【合奏/3分42秒高燃】巨好听！！《大鱼海棠》终极器乐改编版0.0 南京理工大学民乐团',
            time: '04:51',
            num: '39.1万',
            danmu: '2247'
        },
        {
            src: 'img/component/music2.webp',
            title: '欧阳娜娜18岁生日音乐会p3《shape of you》-614',
            time: '04:13',
            num: '21.3万',
            danmu: '412'
        },
        {
            src: 'img/component/music3.webp',
            title: '老番茄 ppomo [ASMR 日本語] ポモ愛嬌耳管理ショップで 角質除去、マッサージ、掃除',
            time: '37:08',
            num: '1956',
            danmu: '2'
        },
        {
            src: 'img/component/music4.webp',
            title: '《爆音》模仿自己在节目中的表演，弹幕:假唱实锤了！',
            time: '02:18',
            num: '1.2万',
            danmu: '3'
        },
        {
            src: 'img/component/music5.webp',
            title: '万人合唱这首《だんご大家族》，瞬间“猛男落泪”！3首CLANNAD动漫神曲现场！！！（身临其境22）',
            time: '17:07',
            num: '23.1万',
            danmu: '2337'
        },
        {
            src: 'img/component/music6.webp',
            title: '【哨笛】魔兽世界wow 狮王之傲-闪金镇 Lion\'s Pride',
            time: '02:22',
            num: '2.1万',
            danmu: '104'
        },
        {
            src: 'img/component/music7.webp',
            title: '【初音ミク哥特风曲】恋爱中的人偶',
            time: '12:40',
            num: '1.4万',
            danmu: '108'
        },
        {
            src: 'img/component/music8.webp',
            title: '钢琴❤冒险岛怀旧BGM—— 魔法密林BGM-When the Morning Comes',
            time: '02:53',
            num: '2.4万',
            danmu: '41'
        }
    ],
    contribute: [
        {
            src: 'img/component/music-con1.webp',
            title: '如何辨别欧美歌手假唱/对嘴/接唱？科普向～～',
            time: '04:17',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/music-con2.webp',
            title: '李克勤-阿兰-最完美的分手(高清)',
            time: '04:21',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/music-con3.webp',
            title: '《在无风时》',
            time: '05:01',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/music-con4.webp',
            title: 'faded你的名字',
            time: '03:41',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/music-con5.webp',
            title: '希望（粤语版）',
            time: '02:51',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/music-con6.webp',
            title: '东尼大木and 大岛丈【大都会(大城市)】/クリスタルキング(Crystal king)二重奏　Cover',
            time: '04:45',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/music-con7.webp',
            title: 'Sunburst',
            time: '03:10',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/music-con8.webp',
            title: '{Angelexo} 181102 EXO - Tempo (EXO COMEBACK SHOWCASE)',
            time: '04:01',
            num: '0',
            danmu: '0'
        }
    ]
}
//音乐侧边栏数据
var musciAsideList = {
    threeDays: {
        firstItem: {
            id: 1,
            title: '《明日方舟》首张OST先行试听',
            src: 'img/component/music-aside1.webp',
            total: '91.1万'
        },
        asideList: [
            {
                id: 2,
                title: '【洛天依原创曲】不老不死【异托邦LOVETOPIA】【阿良良木健】'
            },
            {
                id: 3,
                title: '有多少人靠这首歌坚持了下去？曾拯救了日本无数生命，太感人了！'
            },
            {
                id: 4,
                title: '【钢琴】CLANNAD插曲 《潮鸣》+《小小的手心》 夏日治愈系'
            },
            {
                id: 5,
                title: 'I\'m yours.xx(Cover - Jason Mraz)'
            },
            {
                id: 6,
                title: '【降调】迪士尼后“爸”们的抱怨——当后妈变成“后爸”'
            },
            {
                id: 7,
                title: 'Red Velvet最新回归曲Zimzalabim MV公开'
            }
        ]
    },
    oneWeek: {
        firstItem: {
            id: 1,
            title: '亲爱的旅人啊【千与千寻】',
            src: 'img/component/music-aside2.webp',
            total: '224.0万'
        },
        asideList: [
            {
                id: 2,
                title: '《明日方舟》首张OST先行试听'
            },
            {
                id: 3,
                title: '粵語版《你的酒館對我打了烊》，聽一遍就想三連！'
            },
            {
                id: 4,
                title: '我居然把英语听力试题加到了电音里？'
            },
            {
                id: 5,
                title: '【杨可爱】我把高考必背56篇古诗词做成了歌（杨氏戏腔付）[ 古风原创 ]'
            },
            {
                id: 6,
                title: '【洛天依原创曲】Rainy Bunny【人形兎×雨狸×OQQ】'
            },
            {
                id: 7,
                title: '泰国说唱太“硬核”了，一开口堪比大妈骂街，网友：还是中国的好听'
            }
        ]
    }
}
//舞蹈组件
var danceList = {
    dynamic: [
        {
            src: 'img/component/dance1.webp',
            title: 'Franklin Yu 余衍林 _ Trip Lee - Lazarus _ The Experience Toronto',
            time: '02:50',
            num: '2.0万',
            danmu: '9'
        },
        {
            src: 'img/component/dance2.webp',
            title: '【IDeG】抖音超火~心如止水~性感小哥哥在线撩腹肌，你还能心如止水吗？',
            time: '01:32',
            num: '18.6万',
            danmu: '259'
        },
        {
            src: 'img/component/dance3.webp',
            title: '【紫嘉儿】零基础适用❀夜宴风波❀舞蹈分解教学❀妩媚帅气中国风❀原创编舞',
            time: '27:21',
            num: '8.0万',
            danmu: '296'
        },
        {
            src: 'img/component/dance4.webp',
            title: '【ParmyAU】《威风堂堂》【You\'re ready now？】',
            time: '03:21',
            num: '9.8万',
            danmu: '204'
        },
        {
            src: 'img/component/dance5.webp',
            title: '没有明天 - Trouble Maker 东莞理工学院城市学院KPOP韩流舞队翻跳',
            time: '03:48',
            num: '15.1万',
            danmu: '428'
        },
        {
            src: 'img/component/dance6.webp',
            title: '宋妍霏翻跳Blackpink《Kill  This  love》超帅！',
            time: '00:26',
            num: '11.9万',
            danmu: '15'
        },
        {
            src: 'img/component/dance7.webp',
            title: '【凳猫猫】=BAAM=双马尾眼镜小胖猫在线“性感”蹦迪末班车！快上车！',
            time: '01:46',
            num: '11.4万',
            danmu: '110'
        },
        {
            src: 'img/component/dance8.webp',
            title: '【盖盖】超美国风舞蹈《半壶纱》编舞白小白',
            time: '01:17',
            num: '8146',
            danmu: '14'
        }
    ],
    contribute: [
        {
            src: 'img/component/dance-con1.webp',
            title: '［沈初七］［PENTAGON］［Shine］［翻跳］跳舞日常2√',
            time: '01:17',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/dance-con2.webp',
            title: '【WOTA艺】Determination Symphony-',
            time: '01:45',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/dance-con3.webp',
            title: '憨批四公主跳舞乐w《交织together》（改编了一、、（很多',
            time: '04:16',
            num: '1',
            danmu: '0'
        },
        {
            src: 'img/component/dance-con4.webp',
            title: '皮卡丘之舞+solo+kill this love',
            time: '04:19',
            num: '1',
            danmu: '0'
        },
        {
            src: 'img/component/dance-con5.webp',
            title: '东北林业大学2019街舞专场',
            time: '07:55',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/dance-con6.webp',
            title: '【最强扳手】艾比热舞',
            time: '00:21',
            num: '10',
            danmu: '0'
        },
        {
            src: 'img/component/dance-con7.webp',
            title: 'Te amo 我爱泥~',
            time: '00:46',
            num: '1',
            danmu: '0'
        },
        {
            src: 'img/component/dance-con8.webp',
            title: '2019阳光体育大联赛世外中学第二名!!!庆祝!!!!',
            time: '02:48',
            num: '0',
            danmu: '0'
        }
    ]
}
//舞蹈侧边栏组件
var danceAsideList = {
    oneWeek: {
        firstItem: {
            id: 1,
            title: '【咬人猫】轻飘飘的时间❤️和我一起组乐队吧！原创舞蹈o(*≧▽≦)ツ',
            src: 'img/component/dancer-aside1.webp',
            total: '77.9万'
        },
        asideList: [
            {
                id: 2,
                title: '【楽小漫】浪人琵琶 ❀ 要你陪我浪迹天涯'
            },
            {
                id: 3,
                title: '【小雪】so crazy※水手随时为你待命！请吩咐！'
            },
            {
                id: 4,
                title: '【小野妹子w】 I\'m So Hot ❤ 这么热的天让我来融化你的心'
            },
            {
                id: 5,
                title: '【小仙若】Senorita❤你选制服还是礼服？'
            },
            {
                id: 6,
                title: '【萌爱moi】心如止水❤️你被这样的野兽姐姐盯上了'
            },
            {
                id: 7,
                title: '【醋醋】桃花笑❀逢考必过咒！'
            }
        ]
    },
    threeDays: {
        firstItem: {
            id: 1,
            title: '【小野妹子w】 I\'m So Hot ❤ 这么热的天让我来融化你的心',
            src: 'img/component/dancer-aside2.webp',
            total: '40.1万'
        },
        asideList: [
            {
                id: 2,
                title: '【萌爱moi】心如止水❤️你被这样的野兽姐姐盯上了'
            },
            {
                id: 3,
                title: '【小仙若】Senorita❤你选制服还是礼服？'
            },
            {
                id: 4,
                title: '震惊！某初中毕业典礼上居然出现了那个男人的…'
            },
            {
                id: 5,
                title: '【Kyokyo】跟我一起抖Jio jio'
            },
            {
                id: 6,
                title: '【波喵】心如止水 ❥ 我该如何出现在你的面前。'
            },
            {
                id: 7,
                title: '【短短】24hours-24小时都不够'
            }
        ]
    }
}
//游戏视频数据
var gameList = {
    dynamic: [
        {
            src: 'img/component/game1.webp',
            title: '魂土 次林为所欲为',
            time: '00:16',
            num: '80',
            danmu: '0'
        },
        {
            src: 'img/component/game2.webp',
            title: '大岳丸超鬼王玩法介绍&超鬼王推荐阵容&式神',
            time: '25:24',
            num: '1.1万',
            danmu: '33'
        },
        {
            src: 'img/component/game3.webp',
            title: '【狩猎纷争韩信】.能够颠覆双16的存在？',
            time: '14:58',
            num: '500',
            danmu: '8'
        },
        {
            src: 'img/component/game4.webp',
            title: '【空岛】#1 靠两个桶和一双手在这个空岛上活下去★Minecraft skyblock空岛生存',
            time: '10:45',
            num: '4913',
            danmu: '56'
        },
        {
            src: 'img/component/game5.webp',
            title: 'LOL永远的神/大魔王:SKT T1 Faker职业生涯混剪',
            time: '12:24',
            num: '1395',
            danmu: '24'
        },
        {
            src: 'img/component/game6.webp',
            title: '陪玩小姐姐网恋失败101次后遇直男求奔现？这饥渴的声音吓得我腿都软了',
            time: '03:29',
            num: '10.3万',
            danmu: '450'
        },
        {
            src: 'img/component/game7.webp',
            title: '【刀塔自走棋】多多岛神仙大战！三星月骑vs三星圣堂vs三星TB！',
            time: '46:01',
            num: '1.1万',
            danmu: '232'
        },
        {
            src: 'img/component/game8.webp',
            title: '小鱼Top5：海港水鬼大刀阔斧五杀抢龙！开膛手派克技惊四座',
            time: '04:50',
            num: '9.1万',
            danmu: '604'
        }
    ],
    contribute: [
        {
            src: 'img/component/game-con1.webp',
            title: '【品客】x【零镜交错】 up主把从充值系统关闭后攒的卷卷全抽了',
            time: '03:08',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/game-con2.webp',
            title: '三国杀龙舟日常and最后一局日常被大佬带飞嘻嘻嘻♥(ˆ◡ˆԅ)',
            time: '1:00:34',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/game-con3.webp',
            title: 'AC3 Ramastered 海尔森初到列克星顿触发任务时卡死的BUG',
            time: '00:39',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/game-con4.webp',
            title: 'CF6月夺宝AG特别版试水！！',
            time: '00:25',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/game-con5.webp',
            title: '《万象物语》迪默 ୧( ⁼̴̶̤̀ω⁼̴̶̤́ )૭ ：谁才是那个主C？',
            time: '01:58',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/game-con6.webp',
            title: '血源全boss速通 女巫篇',
            time: '02:57',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/game-con7.webp',
            title: 'Overwatch守望先锋--回放，第一次使用回放，是第三视角',
            time: '08:59',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/game-con8.webp',
            title: '直播素材，王者荣耀王者局简单易懂的梦幻开局',
            time: '01:16',
            num: '0',
            danmu: '0'
        }
    ]
}
//游戏侧边栏组件
var gameAsideList = {
    threeDays: {
        firstItem: {
            id: 1,
            title: '人性？地震时那些主播们的丑态，及地震当天咸鱼UP的日常。请不要发地震沙雕图了，好吗？紫曰#10',
            src: 'img/component/game-aside1.webp',
            total: '153.0万'
        },
        asideList: [
            {
                id: 2,
                title: '灭虫大师老番茄'
            },
            {
                id: 3,
                title: '【敖厂长】目前画面最好的沙雕游戏'
            },
            {
                id: 4,
                title: '点进这个视频你就会哈哈哈哈，而我，已经自闭'
            },
            {
                id: 5,
                title: '【中国网游史】网游史上最残酷商业竞争背后的真相'
            },
            {
                id: 6,
                title: '女老师偷偷做陪玩被自己的学生发现？听我解释我作业写完了啊！'
            },
            {
                id: 7,
                title: '天才导演横空出世！震惊整个影视圈！'
            }
        ]
    },
    oneWeek: {
        firstItem: {
            id: 1,
            title: '【老番茄】史上最骚大侦探(第二集)',
            src: 'img/component/game-aside2.webp',
            total: '287.3万'
        },
        asideList: [
            {
                id: 2,
                title: '人性？地震时那些主播们的丑态，及地震当天咸鱼UP的日常。请不要发地震沙雕图了，好吗？紫曰#10'
            },
            {
                id: 3,
                title: '史上最贱魔鬼套路！“澡堂姐妹花”教你如何让敌人爽翻，内附彩蛋。'
            },
            {
                id: 4,
                title: '【敖厂长】目前画面最好的沙雕游戏'
            },
            {
                id: 5,
                title: '对于游戏版号！韩国终于急了，为什么还是没有一款韩游过审？'
            },
            {
                id: 6,
                title: '点进这个视频你就会哈哈哈哈，而我，已经自闭'
            },
            {
                id: 7,
                title: '天美这次做的宣传片有心了，大爱天美'
            }
        ]
    }
}
//科技视频列表组件
var scienceList = {
    dynamic: [
        {
            src: 'img/component/science1.webp',
            title: '汪海林：最近我常反思，我是不是在给行业添乱？这些批评有没有意义？',
            time: '42:33',
            num: '2040',
            danmu: '23'
        },
        {
            src: 'img/component/science2.webp',
            title: '考研词汇卖书之王2018经典版',
            time: '9:04:46',
            num: '1.8万',
            danmu: '14'
        },
        {
            src: 'img/component/science3.webp',
            title: '【凹凸赛克】积木逼真还原清华大门，圆网友的清华梦。',
            time: '08:02',
            num: '77.7万',
            danmu: '1847'
        },
        {
            src: 'img/component/science4.webp',
            title: '可能改变你职业生涯的写简历教程丨LKs和十音的就业指导2',
            time: '37:56',
            num: '25.1万',
            danmu: '2551'
        },
        {
            src: 'img/component/science5.webp',
            title: '完整版来啦！ 巴黎航展上，法德下一代战机1比1模型揭幕！',
            time: '02:54',
            num: '8.2万',
            danmu: '352'
        },
        {
            src: 'img/component/science6.webp',
            title: '总统专车，豪华倒数一哥！林肯大陆！',
            time: '03:27',
            num: '3.4万',
            danmu: '256'
        },
        {
            src: 'img/component/science7.webp',
            title: '设计大改造，五分钟教你设计一幅饮用水宣传单张！',
            time: '05:11',
            num: '1.4万',
            danmu: '82'
        },
        {
            src: 'img/component/science8.webp',
            title: '七尺之躯，已许国，再难许卿',
            time: '02:42',
            num: '246.7万',
            danmu: '3.1万'
        }
    ],
    contribute: [
        {
            src: 'img/component/science-con1.webp',
            title: '安装智能集尘系统Installing An Automated Dust Collection System __ How To - Woodworking',
            time: '15:15',
            num: '1',
            danmu: '0'
        },
        {
            src: 'img/component/science-con2.webp',
            title: '雪山C4D制作_x264',
            time: '03:41',
            num: '1',
            danmu: '0'
        },
        {
            src: 'img/component/science-con3.webp',
            title: '用Form制作一个流光特效',
            time: '17:15',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/science-con4.webp',
            title: '如何制作白色混凝土How To Make White Concrete - A Modern Builds Experiment',
            time: '12:33',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/science-con5.webp',
            title: '波音787-8厦门高崎国际机场客舱视角降落！',
            time: '08:51',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/science-con6.webp',
            title: '便携式耳机放大器 - O2 NwAvGuy',
            time: '09:08',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/science-con7.webp',
            title: 'Unity资源分享 Amplify Color 1.6.6调色插件 相机滤镜效果 画面强化',
            time: '02:02',
            num: '1',
            danmu: '0'
        },
        {
            src: 'img/component/science-con8.webp',
            title: '更好的台锯切割Better Table Saw Cuts',
            time: '10:16',
            num: '0',
            danmu: '0'
        }
    ]
}
//科技侧边栏数据
var scienceAsideList = {
    threeDays: {
        firstItem: {
            id: 1,
            title: '【清华大学】普通物理  杨振宁教授',
            src: 'img/component/science-aside1.webp',
            total: '40.0万'
        },
        asideList: [
            {
                id: 2,
                title: '修改法律禁止华为向美国索要专利费？弱肉强食的“丛林法则”行不通！'
            },
            {
                id: 3,
                title: '汪海林：如何评上新青年？打篮球，然后发律师函~'
            },
            {
                id: 4,
                title: '一位男性连着肝了73小时电子游戏，他的器官是这样衰竭的'
            },
            {
                id: 5,
                title: '完整版视频来了！任正非对话美国科技大咖 这些尖锐问题他巧妙回应'
            },
            {
                id: 6,
                title: '虚拟真人女友? 让她在耳边说“主人”是种怎样的体验???'
            },
            {
                id: 7,
                title: '中国交通事故20190617：每天最新的车祸实例，助你提高安全意识'
            }
        ]
    },
    oneWeek: {
        firstItem: {
            id: 1,
            title: '小学语文课本里一共有多少假课文？',
            src: 'img/component/science-aside2.webp',
            total: '199.8万'
        },
        asideList: [
            {
                id: 2,
                title: '【教程】别只用网易云了！影视飓风音乐资源大公开'
            },
            {
                id: 3,
                title: '【鬼谷说】昆虫：被偏爱的都有恃无恐'
            },
            {
                id: 4,
                title: '人工“渡劫”！我国人工引雷火箭成功引发闪电'
            },
            {
                id: 5,
                title: '“重水” 和水到底有多大区别？豁出这600块，实验给你瞧瞧！'
            },
            {
                id: 6,
                title: 'JOJO黑帮摇，熊孩子VS高达摇【定格动画】高达模型舞团'
            },
            {
                id: 7,
                title: '【清华大学】普通物理  杨振宁教授'
            }
        ]
    }
}
//数码视频列表
var digitalList = {
    dynamic: [
        {
            src: 'img/component/digital1.webp',
            title: '【二斤自制】用240水冷又烧了一颗9900K！那么换360水冷加高转速风扇真的能给CPU降温？！这个省钱的大妙招可靠么？？让我们来揭晓吧！',
            time: '10:48',
            num: '2082',
            danmu: '77'
        },
        {
            src: 'img/component/digital2.webp',
            title: '一加7pro真有网上说的那么好？这是我使用半个月的报告',
            time: '09:02',
            num: '7.1万',
            danmu: '373'
        },
        {
            src: 'img/component/digital3.webp',
            title: '[更正重录]板厂没有说的秘密：内存频率的选择与牙膏厂桌面平台的差异',
            time: '25:02',
            num: '3615',
            danmu: '51'
        },
        {
            src: 'img/component/digital4.webp',
            title: '小小米游戏本GTX，拆机清灰忘记拔电池，烧掉老哥一个月的早餐费',
            time: '04:41',
            num: '8.6万',
            danmu: '201'
        },
        {
            src: 'img/component/digital5.webp',
            title: '潜入空间站玩ps4pro【用伪4k电视玩游戏机】vlog06',
            time: '04:56',
            num: '1339',
            danmu: '7'
        },
        {
            src: 'img/component/digital6.webp',
            title: '「吴阳出品」OPPO Reno&10倍光变版上手评测',
            time: '08:03',
            num: '3.6万',
            danmu: '435'
        },
        {
            src: 'img/component/digital7.webp',
            title: '【装机猿】严肃点！这不是相声！继续装机教程——电源供电篇',
            time: '1:04:55',
            num: '50.5万',
            danmu: '7533'
        },
        {
            src: 'img/component/digital8.webp',
            title: '这是一种新式的臭气弹，学名叫“蓝牙之银梦”',
            time: '00:29',
            num: '5.3万',
            danmu: '40'
        }
    ],
    contribute: [
        {
            src: 'img/component/digital-con1.webp',
            title: '罗永浩锤子科技发布会精彩集锦（五）',
            time: '02:38',
            num: '4',
            danmu: '0'
        },
        {
            src: 'img/component/digital-con2.webp',
            title: '索尼A7M3搭配腾龙28-75 婚礼花絮 HLG3 大神勿喷哈，初学者！伴娘是真高啊！',
            time: '02:55',
            num: '2',
            danmu: '0'
        },
        {
            src: 'img/component/digital-con3.webp',
            title: '【轻轻地，再次倾心】新款Macbook Air官网宣传片',
            time: '02:21',
            num: '1',
            danmu: '0'
        },
        {
            src: 'img/component/digital-con4.webp',
            title: '本以为是王者，实际上。。。索尼Xperia1 缺点分享',
            time: '07:50',
            num: '32',
            danmu: '0'
        },
        {
            src: 'img/component/digital-con5.webp',
            title: '【A7M3】九眼桥延时',
            time: '00:16',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/digital-con6.webp',
            title: 'Hyundai Kona Coming in 2018 to make Competitors Cry',
            time: '07:43',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/digital-con7.webp',
            title: '难用！小米手环4支付体验',
            time: '00:35',
            num: '5',
            danmu: '0'
        },
        {
            src: 'img/component/digital-con8.webp',
            title: '【以实力刷新一切】 2019新款Mac Pro官网宣传片',
            time: '04:53',
            num: '3',
            danmu: '0'
        }
    ]
}
//数码侧边栏数据
var digitalAsidelList = {
    threeDays: {
        firstItem: {
            id: 1,
            title: '把iPad当电竞屏，玩120帧的PC游戏？！',
            src: 'img/component/digital-aside1.webp',
            total: '35.8万'
        },
        asideList: [
            {
                id: 2,
                title: '「科技美学」四大旗舰 华为P30 Pro | 三星Galaxy S10+ | 一加7 Pro | iPhone XS Max详细对比测评（第13季）上'
            },
            {
                id: 3,
                title: '时隔3个月，物理外挂又发生了什么样的变化？飞智黄蜂2【粉丝达2W送送送】'
            },
            {
                id: 4,
                title: '千万别下这软件！！！'
            },
            {
                id: 5,
                title: '索尼RX0 II迷你黑卡2代相机值不值得买【值不值 得买第346期】'
            },
            {
                id: 6,
                title: '【装机猿】我打飞了ROG的医保卡！3万元顶级游戏显卡玩家国度2080Ti骇客开箱'
            },
            {
                id: 7,
                title: '【小白开箱】小伙追求刺激上拼多多买手机，不料竟发现山寨机惊天秘密！'
            }
        ]
    },
    oneWeek: {
        firstItem: {
            id: 1,
            title: '【装机猿】知名UP“罗汉解说”装机被骗！现场语音通话讨说法',
            src: 'img/component/digital-aside2.webp',
            total: '48.1万'
        },
        asideList: [
            {
                id: 2,
                title: '618最全面的显示器、键盘、鼠标、机箱等所有台式电脑配件推荐合集-电源、显卡、CPU、主板、内存散热器、固态硬盘'
            },
            {
                id: 3,
                title: '把iPad当电竞屏，玩120帧的PC游戏？！'
            },
            {
                id: 4,
                title: '一招破解电脑密码，学会让迷妹崇拜你一生'
            },
            {
                id: 5,
                title: '「科技美学」四大旗舰 华为P30 Pro | 三星Galaxy S10+ | 一加7 Pro | iPhone XS Max详细对比测评（第13季）上'
            },
            {
                id: 6,
                title: 'SPlusTech：618笔记本推荐特辑'
            },
            {
                id: 7,
                title: '这个国产相机能赶超美国货？DJI OSMO ACTION【值不值得买第345期】'
            }
        ]
    }
}
//生活视频列表
var lifeList = {
    dynamic: [
        {
            src: 'img/component/life1.webp',
            title: '撸串地锅鸡，大sao一家人下馆子，老板直接送两头蒜，太意外了',
            time: '04:36',
            num: '70.2万',
            danmu: '3322'
        },
        {
            src: 'img/component/life2.webp',
            title: '【理绪】如何花最少的钱读到想读的书？电子书资源去哪找？（纯干货）当当丨京东丨多抓鱼丨漫游鲸丨kindle资源',
            time: '12:20',
            num: '2.7万',
            danmu: '114'
        },
        {
            src: 'img/component/life3.webp',
            title: '【憨豆名场面】当斗鱼封掉张大仙直播间惹怒百万仙友的后果..........',
            time: '02:09',
            num: '17.2万',
            danmu: '1466'
        },
        {
            src: 'img/component/life4.webp',
            title: '【李云龙+花泽香菜=恋爱循环】        妈！！！那个人是魔鬼。。。。',
            time: '04:03',
            num: '1.6万',
            danmu: '301'
        },
        {
            src: 'img/component/life5.webp',
            title: '宝藏仙女的日常',
            time: '00:22',
            num: '201',
            danmu: '0'
        },
        {
            src: 'img/component/life6.webp',
            title: '2019年高考成绩出来后，你制裁了其他考生，获得录取通知书一份，极度舒适！',
            time: '02:32',
            num: '1.3万',
            danmu: '45'
        },
        {
            src: 'img/component/life7.webp',
            title: '妈妈拍孩子，爸爸拍老师，这可能就是男人吧！',
            time: '01:53',
            num: '2.5万',
            danmu: '25'
        },
        {
            src: 'img/component/life8.webp',
            title: '【干杯十周年】哔哩哔哩十周年限量版邮政套装礼盒全方位曝光！',
            time: '00:16',
            num: '3.4万',
            danmu: '20'
        }
    ],
    contribute: [
        {
            src: 'img/component/life-con1.webp',
            title: '毕业了，就散了！',
            time: '00:34',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/life-con2.webp',
            title: '1Z101030第01讲技术方案不确定性分析注册一级建造师全【150讲】一建经济齐锡晶视频课程精讲冲刺下载加QQ448731579',
            time: '36:31',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/life-con3.webp',
            title: '法硕考研视频民法杨烁课程15',
            time: '30:17',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/life-con4.webp',
            title: '作大死！这责任怎么判定？',
            time: '01:53',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/life-con5.webp',
            title: '宿舍小傻:看到美味烤肠开心到飞起(o´ω`o)大家快来看呐！',
            time: '00:40',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/life-con6.webp',
            title: '「胭沽」夏日拼贴|玫瑰芦荟♪',
            time: '00:43',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/life-con7.webp',
            title: '法硕考研视频民法杨烁课程16',
            time: '29:52',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/life-con8.webp',
            title: '注册一级建造师全【150讲】一建经济达江视频课程精讲冲刺下载加QQ448731579第01讲收入',
            time: '35:59',
            num: '0',
            danmu: '0'
        }
    ]
}
//生活侧边栏数据
var lifeAsideList = {
    threeDays: {
        firstItem: {
            id: 1,
            title: '自制2000元一个的鱼子酱黑松露三明治！挑战世界最贵！',
            src: 'img/component/life-aside1.webp',
            total: '92.2万'
        },
        asideList: [
            {
                id: 2,
                title: '试吃中国最奢侈美食，1800一斤的“黄油蟹”，从来没被坑这么惨过'
            },
            {
                id: 3,
                title: '信誓蛋蛋在澳洲求生做陷阱抓猎物吃【第七集】'
            },
            {
                id: 4,
                title: '接管B站！从今天开始B站全都听我的！'
            },
            {
                id: 5,
                title: '【全职新手】01-煎饼摊工作9小时，我竟然期待月入过万'
            },
            {
                id: 6,
                title: '大sao做两锅饺子，一斤红油卤肉配着吃，大蒜卤肉配饺子，真过瘾'
            },
            {
                id: 7,
                title: '把德克士的汉堡和炸鸡全部买下，都有什么？没想到这么多钱！'
            }
        ]
    },
    oneWeek: {
        firstItem: {
            id: 1,
            title: '加微信挑战！在漫展能加到几个Coser的微信！？——视角姬vlog',
            src: 'img/component/life-aside2.webp',
            total: '137.0万'
        },
        asideList: [
            {
                id: 2,
                title: '在CP上扮成游乐王子对路人说“雨女无瓜”！！连小姐姐都被尴尬死了！！'
            },
            {
                id: 3,
                title: '真的能用自制的弓箭抓到猎物吗 - 信誓蛋蛋尝试了【第六集】'
            },
            {
                id: 4,
                title: '华农兄弟：抓了点黄鳝在小河边烤，这玩意越烤越香，很好吃哦'
            },
            {
                id: 5,
                title: '试吃330元一只的美国响螺刺身，目前翻车最严重的一期视频。。。'
            },
            {
                id: 6,
                title: '小伙看抖音竟可以用泡面修桌子，到底是真的假的？亲身实验告诉你'
            },
            {
                id: 7,
                title: '小奶猫即将到家，铲屎官疯狂拆快递置办新家当，片尾小猫视频曝光!'
            }
        ]
    }
}
//鬼畜视频数据
var ghostList = {
    dynamic: [
        {
            src: 'img/component/ghost1.webp',
            title: '【老年高考】震惊！第一位出考场的老年考生面对镜头竟这样说',
            time: '01:03',
            num: '7505',
            danmu: '75'
        },
        {
            src: 'img/component/ghost2.webp',
            title: '震惊！川普居然翻唱了你弹的《Boy With Luv》……',
            time: '01:46',
            num: '2.1万',
            danmu: '124'
        },
        {
            src: 'img/component/ghost3.webp',
            title: '【疯狂踩点】用耳光打出一套《fade》',
            time: '01:55',
            num: '5.7万',
            danmu: '275'
        },
        {
            src: 'img/component/ghost4.webp',
            title: '【李云龙Rap】Remember the name',
            time: '01:44',
            num: '347.5万',
            danmu: '1.4万'
        },
        {
            src: 'img/component/ghost5.webp',
            title: '【明日方舟】干员们在战场上打出了hop',
            time: '00:48',
            num: '3554',
            danmu: '14'
        },
        {
            src: 'img/component/ghost6.webp',
            title: '【马云】穷开心',
            time: '02:04',
            num: '267.5万',
            danmu: '7982'
        },
        {
            src: 'img/component/ghost7.webp',
            title: '【葛平】冠位一战【FGO填词+超燃PV】',
            time: '04:38',
            num: '17.9万',
            danmu: '1159'
        },
        {
            src: 'img/component/ghost1.webp',
            title: '【哲学】激♂光雨',
            time: '02:08',
            num: '34.6万',
            danmu: '1730'
        }
    ],
    contribute: [
        {
            src: 'img/component/ghost-con1.webp',
            title: '耳光侠视频倒放',
            time: '01:11',
            num: '1',
            danmu: '0'
        },
        {
            src: 'img/component/ghost-con2.webp',
            title: '【派大星】病名为这是派大星！',
            time: '00:58',
            num: '2',
            danmu: '0'
        },
        {
            src: 'img/component/ghost-con3.webp',
            title: '【蔡徐坤】电音单曲',
            time: '01:04',
            num: '10',
            danmu: '0'
        },
        {
            src: 'img/component/ghost-con4.webp',
            title: '游乐娃子非诚勿扰牵手李云龙',
            time: '03:57',
            num: '213',
            danmu: '5'
        },
        {
            src: 'img/component/ghost-con5.webp',
            title: '进鸡的巨人 华农吃鸡的原因找到了',
            time: '00:28',
            num: '13',
            danmu: '0'
        },
        {
            src: 'img/component/ghost-con6.webp',
            title: '【中国boy】我有特殊的摊煎饼技巧',
            time: '01:16',
            num: '9',
            danmu: '0'
        },
        {
            src: 'img/component/ghost-con7.webp',
            title: '【哲学】哲♂学♂话',
            time: '01:57',
            num: '33',
            danmu: '1'
        },
        {
            src: 'img/component/ghost-con8.webp',
            title: '【鬼畜】用平底锅敲出了电音animals',
            time: '02:44',
            num: '13',
            danmu: '0'
        }
    ]
}
//鬼畜侧边栏数据
var ghostAsideList = {
    threeDays: {
        firstItem: {
            id: 1,
            title: '【游乐王子】Bad Guy',
            src: 'img/component/ghost-aside1.webp',
            total: '68.3万'
        },
        asideList: [
            {
                id: 2,
                title: '【鬼畜大祥哥】LEMON——性感大祥哥在线恰柠檬'
            },
            {
                id: 3,
                title: '【恐怖搞笑片】鲲怨（下集）'
            },
            {
                id: 4,
                title: '采访第一个出考场的村霸'
            },
            {
                id: 5,
                title: '卢本伟：这瓜保熟吗？骚猪：熟得一批！'
            },
            {
                id: 6,
                title: '白给勇士（铠甲勇士）：白给五帝'
            },
            {
                id: 7,
                title: '沃德泥门岛的茄鹅第二季-03'
            }
        ]
    },
    oneWeek: {
        firstItem: {
            id: 1,
            title: '采访第一个出考场的同学',
            src: 'img/component/ghost-aside2.webp',
            total: '209.1万'
        },
        asideList: [
            {
                id: 2,
                title: '【明日方舟】不能天使'
            },
            {
                id: 3,
                title: '【黑镖客RAP】这就是学了10年BUG做出来的鬼畜'
            },
            {
                id: 4,
                title: '第一个出考场的考生破口大骂，把旁边的家长都吓坏了'
            },
            {
                id: 5,
                title: '【游乐王子】Bad Guy'
            },
            {
                id: 6,
                title: '【浙江考神林欢】盘点林欢的“光辉事迹”'
            },
            {
                id: 7,
                title: '【浙江考生】旭旭宝宝 刚进去就出来了'
            }
        ]
    }
}
//时尚视频数据
var fashionList = {
    dynamic: [
        {
            src: 'img/component/fashion1.webp',
            title: '【一月三斤之入门健身操附课表】slim in 6减肥健身操运动瘦身全身减脂',
            time: '3:07:40',
            num: '40.0万',
            danmu: '5848'
        },
        {
            src: 'img/component/fashion2.webp',
            title: '【小丽】毒舌朋友给我的性感睡衣 点评打分数 520特辑 ft.好奇小姐',
            time: '09:03',
            num: '24.4万',
            danmu: '3427'
        },
        {
            src: 'img/component/fashion3.webp',
            title: '【Jeff】最好的肩部哑铃训练动作！',
            time: '13:28',
            num: '6.6万',
            danmu: '220'
        },
        {
            src: 'img/component/fashion4.webp',
            title: '【方方|眼妆】简单易学的眼影技法分享·既能温柔可人也能秒变高级厌世脸',
            time: '19:15',
            num: '1.9万',
            danmu: '1021'
        },
        {
            src: 'img/component/fashion5.webp',
            title: '【Benny】你长达10年的卸妆理念都是错的!!!卸妆误区，纯干货',
            time: '12:16',
            num: '85.0万',
            danmu: '1.3万'
        },
        {
            src: 'img/component/fashion6.webp',
            title: '【瘦手臂】20分钟瘦1cm居然真做到了...几种有效手臂塑形大法分享',
            time: '06:19',
            num: '7.6万',
            danmu: '1373'
        },
        {
            src: 'img/component/fashion7.webp',
            title: '脚踏星辰×一眼万年，冰山女皇，魅惑狐狸，冷门CP，不要打我',
            time: '03:23',
            num: '4107',
            danmu: '16'
        },
        {
            src: 'img/component/fashion8.webp',
            title: '【党妹】保姆级化妆新手购物指南',
            time: '19:10',
            num: '101.0万',
            danmu: '9386'
        }
    ],
    contribute: [
        {
            src: 'img/component/fashion-con1.webp',
            title: 'SUSISU高光盘拆箱',
            time: '01:01',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/fashion-con2.webp',
            title: '杭州品牌折扣女装批发——碧可冬装',
            time: '11:57',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/fashion-con3.webp',
            title: '全方位瘦腿！大象腿变细长直，5个动作走起',
            time: '01:06',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/fashion-con4.webp',
            title: '这些年你们都立过什么flag',
            time: '00:33',
            num: '1',
            danmu: '0'
        },
        {
            src: 'img/component/fashion-con5.webp',
            title: '性感小姐姐的车展日记',
            time: '05:37',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/fashion-con6.webp',
            title: '2019 Makeup 第7弹 | 轻欧美-超A御姐妆：不说话真的太好剪了，这不是妆教，只是自己练手~',
            time: '03:49',
            num: '1',
            danmu: '0'
        },
        {
            src: 'img/component/fashion-con7.webp',
            title: '【化妆师zita】做家具的店也卖彩妆 | 便宜又好用真的存在吗？Nome探店',
            time: '11:10',
            num: '11',
            danmu: '0'
        },
        {
            src: 'img/component/fashion-con8.webp',
            title: '涂上你就是女明星 我的真爱正红色口红分享 巨显白 （专柜篇）',
            time: '12:36',
            num: '52',
            danmu: '4'
        }
    ]
}
//时尚侧边栏数据
var fashionAsideList = {
    threeDays: {
        firstItem: {
            id: 1,
            title: '半年增高18cm，我是怎么做到的？内有详细干货！',
            src: 'img/component/fashion-aside1.webp',
            total: '153.0万'
        },
        asideList: [
            {
                id: 2,
                title: '大佬甜er |「粉红女郎」万人迷陈好仿妆！来一波回忆杀～'
            },
            {
                id: 3,
                title: '铁一WENDYZ｜突嘴拯救进化史 变美变精致化妆科技干货经验'
            },
            {
                id: 4,
                title: '【周六野】自卑丑小鸭十年蜕变心路历程和十年后的规划'
            },
            {
                id: 5,
                title: '24小时持妆挑战&被粉丝控制的一天丨大果子'
            },
            {
                id: 6,
                title: '亚洲扁平身材女生 试穿臀王卡戴珊 金小妹 同款性感裙子 dress like kim kardashian & kylie jenner'
            },
            {
                id: 7,
                title: '【超易瘦腿】12分钟瘦腿快速入门大法，简单降低体脂率，练成大蜜腿'
            }
        ]
    },
    oneWeek: {
        firstItem: {
            id: 1,
            title: '【党妹】三十变十三！毕业季必须拥有的芒果系JK妆容，成为甜甜山吹女孩！',
            src: 'img/component/fashion-aside2.webp',
            total: '305.2万'
        },
        asideList: [
            {
                id: 2,
                title: '半年增高18cm，我是怎么做到的？内有详细干货！'
            },
            {
                id: 3,
                title: 'NIKE是如何将几亿人玩弄于股掌之中的？丨Z说球鞋'
            },
            {
                id: 4,
                title: '法式少女妆｜关于我对法国文艺电影的幻想_做一天的洛丽塔'
            },
            {
                id: 5,
                title: '直男第一次穿Lolita 老爸反应一言难尽 红发腮红妆 染发 搞笑'
            },
            {
                id: 6,
                title: '【易烫】我花了一万块在毛戈平学校学习了逆天回春上镜塑颜大法？'
            },
            {
                id: 7,
                title: '【平价向|绝不可错过的618清单】这一波没看就是血亏，看到就是赚到。'
            }
        ]
    }
}
//广告视频数据
var adverList = {
    dynamic: [
        {
            src: 'img/component/adver1.webp',
            title: '吃肉最过瘾！11.11京东零食大礼包开箱【网不红萌叔Joey】',
            time: '04:44',
            num: '1.9万',
            danmu: '73'
        },
        {
            src: 'img/component/adver2.webp',
            title: '【英国广告】可口可乐的广告想笑死我好继承我的财产嘛',
            time: '01:02',
            num: '117.9万',
            danmu: '549'
        },
        {
            src: 'img/component/adver3.webp',
            title: '【普洱】昔归王-品质密码',
            time: '02:07',
            num: '114',
            danmu: '0'
        },
        {
            src: 'img/component/adver4.webp',
            title: '【日本广告】 阴阳师 TV CM 【中字】',
            time: '00:30',
            num: '30.3万',
            danmu: '281'
        },
        {
            src: 'img/component/adver5.webp',
            title: '那些年我们看过的广告，童年的广告，一波回忆杀 ~',
            time: '27:08',
            num: '13.5万',
            danmu: '3899'
        },
        {
            src: 'img/component/adver6.webp',
            title: '【泰国广告】广告我只服泰国的，泰国内衣广告',
            time: '03:57',
            num: '31.9万',
            danmu: '418'
        },
        {
            src: 'img/component/adver7.webp',
            title: 'BIGBANG-THE NORTH FACE',
            time: '02:50',
            num: '477',
            danmu: '0'
        },
        {
            src: 'img/component/adver8.webp',
            title: '泰国的沙雕杀虫剂广告，太魔性了哈',
            time: '03:42',
            num: '3.0万',
            danmu: '65'
        }
    ],
    contribute: [
        {
            src: 'img/component/adver-con1.webp',
            title: '当年的作业里，永远都存着一大碗的快乐。开心毕业！！！',
            time: '03:00',
            num: '1',
            danmu: '0'
        },
        {
            src: 'img/component/adver-con2.webp',
            title: '支付宝小程序宿迁白酒久久香：低档白酒和高档白酒区别到底在哪',
            time: '02:29',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/adver-con3.webp',
            title: '深夜/没吃饭勿点！！！！我已经警告你们了哦(´-ω-`)（日本美食拉面广告合集）',
            time: '03:25',
            num: '16',
            danmu: '0'
        },
        {
            src: 'img/component/adver-con4.webp',
            title: '胡歌阿玛尼广告拍摄现场花絮',
            time: '00:36',
            num: '8',
            danmu: '0'
        },
        {
            src: 'img/component/adver-con5.webp',
            title: '宁波便利店超市',
            time: '00:36',
            num: '1',
            danmu: '0'
        },
        {
            src: 'img/component/adver-con6.webp',
            title: '昆明观滇独栋别墅',
            time: '00:16',
            num: '3',
            danmu: '0'
        },
        {
            src: 'img/component/adver-con7.webp',
            title: '恒洁卫浴广告宣传片',
            time: '02:36',
            num: '7',
            danmu: '0'
        },
        {
            src: 'img/component/adver-con8.webp',
            title: '转发这支不加班锦鲤，今日到！点！下！班！',
            time: '01:49',
            num: '485',
            danmu: '0'
        }
    ]
}
//广告侧边栏数据
var adverAsideList = {
    threeDays: {
        firstItem: {
            id: 1,
            title: '【一起来写字画画吧】2019中国青少年书法美术征集展示活动宣传片',
            src: 'img/component/adver-aside1.webp',
            total: '2.6万'
        },
        asideList: [
            {
                id: 2,
                title: '【朱一龙】20190618巴黎欧莱雅：朱一龙的戛纳之旅vlog精彩来袭！'
            },
            {
                id: 3,
                title: '游戏最大boss其实是你妈：你暂停一下过来吃饭先！'
            },
            {
                id: 4,
                title: '【欅坂46】梅干茶泡饭来啦~马马的表情哈哈哈www~'
            },
            {
                id: 5,
                title: '【IZONE】魔性的Gmarket广告又来啦'
            },
            {
                id: 6,
                title: '地震六年后，依旧怀揣一个彩色梦'
            },
            {
                id: 7,
                title: '【广告菌】看完就立马学会跳舞的沙雕广告'
            }
        ]
    },
    oneWeek: {
        firstItem: {
            id: 1,
            title: '【迷之广告】你能猜出这是什么广告吗？第76弹',
            src: 'img/component/adver-aside2.webp',
            total: '5.5万'
        },
        asideList: [
            {
                id: 2,
                title: '美少女遇上中二大叔，这是什么沙雕广告？？？'
            },
            {
                id: 3,
                title: '抖音里看过的最有感觉的小说广告'
            },
            {
                id: 4,
                title: '【一起来写字画画吧】2019中国青少年书法美术征集展示活动宣传片'
            },
            {
                id: 5,
                title: '【朱一龙】20190618巴黎欧莱雅：朱一龙的戛纳之旅vlog精彩来袭！'
            },
            {
                id: 6,
                title: '华为Mate20 Pro：孩子的每一个笑脸，是爸爸最想留存的美好'
            },
            {
                id: 7,
                title: '假如马云和乔布斯选错合伙人，他们会成为…….'
            }
        ]
    }
}
//娱乐视频数据
var entertainList = {
    dynamic: [
        {
            src: 'img/component/entertain1.webp',
            title: '【舞法天女】我的姐姐不可能这么高冷！！！（芮闪X法苏）',
            time: '01:20',
            num: '8.8万',
            danmu: '69'
        },
        {
            src: 'img/component/entertain2.webp',
            title: '【华晨宇HCY水仙剧】《Puzzle谜》 （共九集，已完结）',
            time: '48:14',
            num: '5.7万',
            danmu: '2750'
        },
        {
            src: 'img/component/entertain3.webp',
            title: '邓紫棋抖音更新 来自天堂的魔鬼 弹唱版',
            time: '00:29',
            num: '2.5万',
            danmu: '23'
        },
        {
            src: 'img/component/entertain4.webp',
            title: '【阿云嘎】Onlylady采访｜混搭是乱中有序，居然说自己身材一般？所以那天在这个地方嘎子究竟做了几个采访？？',
            time: '02:43',
            num: '2764',
            danmu: '36'
        },
        {
            src: 'img/component/entertain5.webp',
            title: '【阿云嘎】Animals',
            time: '01:07',
            num: '2598',
            danmu: '30'
        },
        {
            src: 'img/component/entertain6.webp',
            title: '【阿云嘎】my little angel/舞台混剪',
            time: '03:12',
            num: '1804',
            danmu: '48'
        },
        {
            src: 'img/component/entertain7.webp',
            title: '【阿云嘎】GAGA | 甜向60s混剪&为什么他连眨眼都那么可爱',
            time: '01:00',
            num: '4.1万',
            danmu: '392'
        },
        {
            src: 'img/component/entertain8.webp',
            title: '【NINEPERCENT】我们还有110天',
            time: '04:40',
            num: '6366',
            danmu: '56'
        }
    ],
    contribute: [
        {
            src: 'img/component/entertain-con1.webp',
            title: '20190514德云社三宝A组巡演威海站',
            time: '25:41',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/entertain-con2.webp',
            title: '【中字】卡戴珊四姐妹质问Jordyn是否和Tristan有亲密举动',
            time: '02:08',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/entertain-con3.webp',
            title: '无极荣耀主管911128  1207777777（7个7） _ 高清',
            time: '02:18',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/entertain-con4.webp',
            title: '恩佐2主管 911128  1207777777（7个7） _高清',
            time: '00:05',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/entertain-con5.webp',
            title: '无极荣耀主管911128  1207777777（7个7） -_高清',
            time: '00:10',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/entertain-con6.webp',
            title: '野桑欧巴和他的弟弟们，还有钟真哦',
            time: '01:01',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/entertain-con7.webp',
            title: '发生的那些不可细说的事（澡堂）【TeamZ GNZ48】',
            time: '03:18',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/entertain-con8.webp',
            title: '傻乎乎且通透的蔡程昱',
            time: '01:01',
            num: '0',
            danmu: '0'
        }
    ]
}
//娱乐侧边栏数据
var entertainAsideList = {
    threeDays: {
        firstItem: {
            id: 1,
            title: 'awsl！跟竹达彩奈研究日本声优学校教什么吧！【那撸猴多日本】',
            src: 'img/component/entertain-aside1.webp',
            total: '23.6万'
        },
        asideList: [
            {
                id: 2,
                title: '神舌kiss忍耐！东野幸治挑战小岛南！'
            },
            {
                id: 3,
                title: '【声入人心2】洛阳铲全员考古！35位首发成员的正确打开方式！科普向混剪合集，何方道友在此渡劫？'
            },
            {
                id: 4,
                title: '暖哭！唐尼安慰被鲨鱼咬断左腿和两只手指的女孩'
            },
            {
                id: 5,
                title: '我最喜欢看穿比基尼美女玩沙排了！美～～'
            },
            {
                id: 6,
                title: '元气满满换装尬泳，这个游戏我喜欢！'
            },
            {
                id: 7,
                title: '【张子枫】小美人'
            }
        ]
    },
    oneWeek: {
        firstItem: {
            id: 1,
            title: '真当我游乐王子不玩B站吗？雨女无瓜！要你寡！',
            src: 'img/component/entertain-aside2.webp',
            total: '191.1万'
        },
        asideList: [
            {
                id: 2,
                title: '【正片】第5期上：如果这是你生命中的最后一天'
            },
            {
                id: 3,
                title: '万茜：没有老娘踩不到的点！跳不了的BGM！（加长版）'
            },
            {
                id: 4,
                title: '【名场面】中国顶级主持人的反应能有多快，看完真怀疑他们长了8个脑袋!'
            },
            {
                id: 5,
                title: '揭秘我国明星爱豆现状'
            },
            {
                id: 6,
                title: 'awsl！跟竹达彩奈研究日本声优学校教什么吧！【那撸猴多日本】'
            },
            {
                id: 7,
                title: '【哔计划】大左杨迪：和上市公司合作后感觉更国际化了！'
            }
        ]
    }
}
//专栏列表数据
var columnList = [
    {
        src: 'img/component/column-list1.jpeg',
        title: '浅（xia）谈（shuo）：软件技术是一门什么样的专业？',
        view: '394',
        comment: '5',
        name: 'Wolf_XC'
    },
    {
        src: 'img/component/column-list2.jpeg',
        title: '要不是他失误了，恐怕《进击的巨人》第一季就能完结',
        view: '2.2万',
        comment: '173',
        name: '贫血王子'
    },
    {
        src: 'img/component/column-list3.jpeg',
        title: '15个提升幸福感的苹果产品配件 | 618种草特刊',
        view: '3606',
        comment: '31',
        name: '果核Group'
    },
    {
        src: 'img/component/column-list4.jpeg',
        title: '刀塔霸业：V社公布刀塔自走棋译名 竟引贪玩蓝月官方找上门',
        view: '9800',
        comment: '46',
        name: '超凡电竞DOTA2'
    },
    {
        src: 'img/component/column-list5.jpeg',
        title: '“饼”少了的E3',
        view: '2654',
        comment: '1',
        name: '触乐'
    },
    {
        src: 'img/component/column-list6.jpeg',
        title: '我们试玩了《看门狗：军团》，并和制作人聊了聊',
        view: '7381',
        comment: '132',
        name: '游民星空官方'
    },
    {
        src: 'img/component/column-list7.jpeg',
        title: '《黑凤凰》辜负了「X战警」粉丝们的20年',
        view: '7057',
        comment: '46',
        name: '动画学术趴'
    },
    {
        src: 'img/component/column-list8.jpeg',
        title: '72岁北野武离婚，网友：瞎折腾啥啊',
        view: '6242',
        comment: '40',
        name: '英国报姐'
    }
];
//专栏侧边栏数据
var columnAsideOneDay = [
    {
        id: 1,
        title: '2019全球总决赛公布举办城市、场地和日期'
    },
    {
        id: 2,
        title: '《BanG Dream! 少女乐团派对!》本地化笔记·第二期'
    },
    {
        id: 3,
        title: '2022年换成中国办世界杯？这是什么操作...'
    },
    {
        id: 4,
        title: '曾遭影射“国内第一网红涉黄”，PAPI酱忍2年公开回应了'
    },
    {
        id: 5,
        title: '为什么骑自行车轮胎没气时会更费力？'
    },
    {
        id: 6,
        title: '【头部主播】哭哭啼啼KTV | 第131章'
    },
    {
        id: 7,
        title: '这家医院的医生没退路，他们治不好，全国都没辙，病人真得死'
    },
    {
        id: 8,
        title: '动画里的社团活动可不仅仅是闹着玩的'
    }
];
var columnAsideOneWeek = [
    {
        id: 1,
        title: '这家医院的医生没退路，他们治不好，全国都没辙，病人真得死'
    },
    {
        id: 2,
        title: '“手游玩家不是真正的玩家？”许多主机游戏制作人都不认同'
    },
    {
        id: 3,
        title: '5岁孩子用命，换来我们脸上的闪亮化妆品？'
    },
    {
        id: 4,
        title: '曾遭影射“国内第一网红涉黄”，PAPI酱忍2年公开回应了'
    },
    {
        id: 5,
        title: '明日方舟：一个三星干员玫兰莎，却被网友们吹爆，用过的都说好！'
    },
    {
        id: 6,
        title: 'bilibili影视圆桌 第54期：《X战警：黑凤凰》你打几分'
    },
    {
        id: 7,
        title: 'SM家偶像卷入一位争议，韩女团粉丝要求电视台能承认失误'
    },
    {
        id: 8,
        title: '美国“近亲结婚圣地”：禁止堕胎、人人持枪、民不聊生'
    }
];
//电影数据
var movieList = {
    dynamic: [
        {
            src: 'img/component/movie1.webp',
            title: '烈火中永生（1965）',
            time: '2:18:45',
            num: '1.7万',
            danmu: '25'
        },
        {
            src: 'img/component/movie2.webp',
            title: '【犯罪/动作】这个杀手不太冷（1994）',
            time: '2:12:56',
            num: '264.3万',
            danmu: '7.6万'
        },
        {
            src: 'img/component/movie3.webp',
            title: '【奇幻/爱情】白蛇：缘起（2019）',
            time: '1:38:43',
            num: '774.0万',
            danmu: '20.9万'
        },
        {
            src: 'img/component/movie4.webp',
            title: '【漫改】动物世界（2018）【赌博默示录真人版】',
            time: '2:10:19',
            num: '274.7万',
            danmu: '5.0万'
        },
        {
            src: 'img/component/movie5.webp',
            title: '【剧情】超脱（2011）【艾德里安·布洛迪】',
            time: '1:36:30',
            num: '69.3万',
            danmu: '9434'
        },
        {
            src: 'img/component/movie6.webp',
            title: '海蒂和爷爷（2015）【“元首”扮演者布鲁诺·甘茨高分作品】',
            time: '1:46:25',
            num: '42.4万',
            danmu: '4579'
        },
        {
            src: 'img/component/movie7.webp',
            title: '【剧情/喜剧】飞越老人院（2012）',
            time: '1:40:41',
            num: '22.6万',
            danmu: '7174'
        },
        {
            src: 'img/component/movie8.webp',
            title: '命运之夜——天之杯：恶兆之花 「Fate/stay night」Heaven\'s Feel - I.presage flower',
            time: '1:58:42',
            num: '364.3万',
            danmu: '7.8万'
        }
    ],
    contribute: [
        {
            src: 'img/component/movie-con1.webp',
            title: '【剧情】草原晨曲 (1959)【CCTV6高清修复版】【1080P】',
            time: '1:43:50',
            num: '42',
            danmu: '0'
        },
        {
            src: 'img/component/movie-con2.webp',
            title: '北大宣传微电影《星空日记》陈宇导演作品-_超清',
            time: '09:14',
            num: '125',
            danmu: '2'
        },
        {
            src: 'img/component/movie-con3.webp',
            title: '【剧情/战争】烽火列车 (1960)【长影】【CCTV6 1080i】',
            time: '1:31:56',
            num: '641',
            danmu: '1'
        },
        {
            src: 'img/component/movie-con4.webp',
            title: '【电影】蜜月的阴谋-1985',
            time: '1:27:21',
            num: '378',
            danmu: '4'
        },
        {
            src: 'img/component/movie-con5.webp',
            title: '【喜剧】影帝行动（2017）',
            time: '1:41:42',
            num: '1.5万',
            danmu: '38'
        },
        {
            src: 'img/component/movie-con6.webp',
            title: '一条安达鲁狗（1929）【布努埃尔/超现实主义】',
            time: '16:26',
            num: '565',
            danmu: '4'
        },
        {
            src: 'img/component/movie-con7.webp',
            title: '【川剧微电影】《川剧往事》致敬川剧老艺术家 吴熙 杨坤玖 曾德辉主演',
            time: '48:04',
            num: '158',
            danmu: '1'
        },
        {
            src: 'img/component/movie-con8.webp',
            title: '【剧情/战争】铁道卫士 (1960)【长影】【CCTV6 1080i】',
            time: '1:39:00',
            num: '709',
            danmu: '2'
        }
    ]
}
//电影侧边栏数据
var movieAsideList = {
    firstItem: {
        id: 1,
        title: '【喜剧/动作】憨豆特工（2002）【罗温·艾金森】',
        src: 'img/component/movie-aside.webp',
        total: '89.7万'
    },
    asideList: [
        {
            id: 2,
            title: '海蒂和爷爷（2015）【“元首”扮演者布鲁诺·甘茨高分作品】'
        },
        {
            id: 3,
            title: '【粤语版/功夫】少林三十六房（1978）【刘家辉/刘家良】'
        },
        {
            id: 4,
            title: '【普通话版/功夫】少林三十六房（1978）【刘家辉/刘家良】'
        },
        {
            id: 5,
            title: '【喜剧】关于一个男孩（2002）【休·格兰特/尼古拉斯·霍尔特】'
        },
        {
            id: 6,
            title: '【推理】泡吧侦探（2011）【松田龙平/大泉洋】'
        },
        {
            id: 7,
            title: '【功夫】广东靓仔玉（1982）【汪禹】'
        }
    ]
}
//电视剧列表数据
var tvList = {
    dynamic: [
        {
            src: 'img/component/tv1.webp',
            title: '【爱情】东京自助洗衣店 05【片寄凉太/清水久留巳】',
            time: '30:37',
            num: '26.0万',
            danmu: '2086'
        },
        {
            src: 'img/component/tv2.webp',
            title: '【美食/剧情】孤独的美食家 第四季 04（2014）【松重丰】',
            time: '33:34',
            num: '9.3万',
            danmu: '2042'
        },
        {
            src: 'img/component/tv3.webp',
            title: '【日剧/剧情】非自然死亡 09【2018】',
            time: '44:55',
            num: '176.7万',
            danmu: '3.2万'
        },
        {
            src: 'img/component/tv4.webp',
            title: '【国产】恋恋不忘  全34集  【2014】',
            time: '26:08:51',
            num: '57.5万',
            danmu: '4.3万'
        },
        {
            src: 'img/component/tv5.webp',
            title: '【喜剧/家庭】家有儿女第四季 67集全【2007】',
            time: '27:59:19',
            num: '121.4万',
            danmu: '4.5万'
        },
        {
            src: 'img/component/tv6.webp',
            title: '【年代剧】金锁记',
            time: '17:25:53',
            num: '8736',
            danmu: '50'
        },
        {
            src: 'img/component/tv7.webp',
            title: '【泰剧/爱情】一吻定情 20集全【Mike/Aom】',
            time: '16:27:49',
            num: '184.8万',
            danmu: '7.1万'
        },
        {
            src: 'img/component/tv8.webp',
            title: '【国产】亮剑   全30集   【2005】',
            time: '22:46:06',
            num: '3685.2万',
            danmu: '183.0万'
        }
    ],
    contribute: [
        {
            src: 'img/component/tv-con1.webp',
            title: '【剧情/校园】泰版匆匆那年 国语版 13（2019）【Bank/Pattie/郑逸祥】',
            time: '33:53',
            num: '402',
            danmu: '0'
        },
        {
            src: 'img/component/tv-con2.webp',
            title: '【剧情/校园】泰版匆匆那年 国语版 14（2019）【Bank/Pattie/郑逸祥】',
            time: '32:23',
            num: '616',
            danmu: '0'
        },
        {
            src: 'img/component/tv-con3.webp',
            title: '【剧情/校园】泰版匆匆那年 13（2019）【Bank/Pattie/郑逸祥】',
            time: '33:47',
            num: '959',
            danmu: '20'
        },
        {
            src: 'img/component/tv-con4.webp',
            title: '【剧情/校园】泰版匆匆那年 14（2019）【Bank/Pattie/郑逸祥】',
            time: '32:22',
            num: '3381',
            danmu: '21'
        },
        {
            src: 'img/component/tv-con5.webp',
            title: '【悬疑/刑侦】手术刀',
            time: '15:57:43',
            num: '9650',
            danmu: '14'
        },
        {
            src: 'img/component/tv-con6.webp',
            title: '【警匪/剧情】燕赵刑警',
            time: '23:05:50',
            num: '7487',
            danmu: '248'
        },
        {
            src: 'img/component/tv-con7.webp',
            title: '【动作/武侠】浣花洗剑录',
            time: '31:14:00',
            num: '4.0万',
            danmu: '990'
        },
        {
            src: 'img/component/tv-con8.webp',
            title: '【少年派】零钱CP‖一秒CP                    林妙妙X钱三一',
            time: '04:42',
            num: '1053',
            danmu: '2'
        }
    ]
}
//电视剧侧边栏组件
var tvAsideList = {
    firstItem: {
        id: 1,
        title: '【家庭/剧情】营业部长吉良奈津子 01【松岛菜菜子】',
        src: 'img/component/tv-aside.webp',
        total: '18.8万'
    },
    asideList: [
        {
            id: 2,
            title: '【动作/武侠】浣花洗剑录'
        },
        {
            id: 3,
            title: '【剧情/Vtuber】四月一日三姐妹之家庭故事 09（2019）【时乃空】'
        },
        {
            id: 4,
            title: '【家庭/剧情】营业部长吉良奈津子 02【松岛菜菜子】'
        },
        {
            id: 5,
            title: '【悬疑/刑侦】手术刀'
        },
        {
            id: 6,
            title: '【年代剧】金锁记'
        },
        {
            id: 7,
            title: '【剧情/校园】泰版匆匆那年 国语版 11（2019）【Bank/Pattie/郑逸​祥】'
        }
    ]
}
//影视数据
var filmList = {
    dynamic: [
        {
            src: 'img/component/film1.webp',
            title: '假面骑士Evol 店长全形态变身合集-E总进化史',
            time: '06:17',
            num: '36.0万',
            danmu: '754'
        },
        {
            src: 'img/component/film2.webp',
            title: 'V脸社长：《千与千寻》618男主评测，谁才是最值得嫁的那个人',
            time: '06:41',
            num: '2060',
            danmu: '43'
        },
        {
            src: 'img/component/film3.webp',
            title: '〖快新〗世界宝藏cp！帅气舔颜向：既是宿敌，也是恋人',
            time: '01:32',
            num: '3273',
            danmu: '27'
        },
        {
            src: 'img/component/film4.webp',
            title: '【戴好耳机！前方高能！】用心感受这突破次元，燃爆视觉神经的混剪盛宴！',
            time: '02:07',
            num: '1406',
            danmu: '26'
        },
        {
            src: 'img/component/film5.webp',
            title: '【影Sir】单身狗福音！AI伴侣机器人诞生，从脸皮到性格全部自己定制',
            time: '05:26',
            num: '4.2万',
            danmu: '361'
        },
        {
            src: 'img/component/film6.webp',
            title: '中国的漫威，中国神话宇宙第七集！昊天上帝所下的七局大棋，我们都是他的棋子',
            time: '13:57',
            num: '13.8万',
            danmu: '1192'
        },
        {
            src: 'img/component/film7.webp',
            title: '就喜欢伟仔梁朝伟一本正经地耍流氓O(∩_∩)O哈哈~',
            time: '01:50',
            num: '56.0万',
            danmu: '313'
        },
        {
            src: 'img/component/film8.webp',
            title: '【罗云熙】【润玉】香蜜时期润玉花絮（未收录花絮可见简介的各种链接，图包请翻阅热门评论，相册见56、57P）',
            time: '1:46:44',
            num: '14.2万',
            danmu: '4358'
        }
    ],
    contribute: [
        {
            src: 'img/component/film-con1.webp',
            title: '【一美X法鲨】有关那些年的爱恨情仇，他们这样回答',
            time: '03:29',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/film-con2.webp',
            title: '女孩约见男网友，没想到跳进了火坑，成了一生的阴影',
            time: '01:22',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/film-con3.webp',
            title: '豆瓣评分9.1，细细品味父爱的印度电影，阿米尔汗13亿票房经典之作',
            time: '05:50',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/film-con4.webp',
            title: '带爸留学：与小栋生死离别后，丹丹再出鬼招，辛芷蕾：还想懵我',
            time: '01:27',
            num: '1',
            danmu: '0'
        },
        {
            src: 'img/component/film-con5.webp',
            title: '激萌！《愤怒的小鸟2》曝终极预告',
            time: '02:41',
            num: '38',
            danmu: '0'
        },
        {
            src: 'img/component/film-con6.webp',
            title: '女鬼是地府钉子户，住了70年都不愿投胎，阎王只好让她回阳间了',
            time: '03:08',
            num: '1',
            danmu: '0'
        },
        {
            src: 'img/component/film-con7.webp',
            title: '《少年派》钱三一为和妙妙一个学校，计算所有学校的可能性',
            time: '01:21',
            num: '0',
            danmu: '0'
        },
        {
            src: 'img/component/film-con8.webp',
            title: '国产动画《巨婴》，母亲为给儿子买游戏机竟挖肾去卖，溺爱真可怕',
            time: '03:10',
            num: '1',
            danmu: '0'
        }
    ]
}
//影视侧边栏数据
var filmAsideList = {
    threeDays: {
        firstItem: {
            id: 1,
            title: '【超燃/热血】这盛世如你所愿—10分钟爆燃中国近代史电影混剪（传承先烈遗志，共筑强国盛世）',
            src: 'img/component/film-aside1.webp',
            total: '128.4万'
        },
        asideList: [
            {
                id: 2,
                title: '【片片】病毒美剧《血疫》，比核泄漏更恐怖的埃博拉病毒，令整个美国陷入恐惧！'
            },
            {
                id: 3,
                title: '小伙为了逃避追捕，戴上了最先进的面具，结果刚出门就坏了！'
            },
            {
                id: 4,
                title: '电影最TOP 127: 有一种电影，叫银河映像（独家全盘点）'
            },
            {
                id: 5,
                title: '【刘老师】爆笑解说比权游还烧脑的经典土味电视剧《乡村爱情3》'
            },
            {
                id: 6,
                title: '爆笑吐槽“三婊合一”的《我的真朋友》（第4期）'
            },
            {
                id: 7,
                title: '【谷阿莫】5分钟看完2018渣女教你玩弄渣男的电影《伦敦战场 London Fields》'
            }
        ]
    },
    oneWeek: {
        firstItem: {
            id: 1,
            title: '【超燃/热血】这盛世如你所愿—10分钟爆燃中国近代史电影混剪（传承先烈遗志，共筑强国盛世）',
            src: 'img/component/film-aside1.webp',
            total: '139.0万'
        },
        asideList: [
            {
                id: 2,
                title: '用《权力的游戏》片头打开中国四大一线城市'
            },
            {
                id: 3,
                title: '真想把她们暴打一顿！盘点十大讨人厌的影视剧女主【哇妹】'
            },
            {
                id: 4,
                title: '【欧美女神混剪/踩点/颜值】玫瑰与枪 人间绝色.  「Grind Me Down」'
            },
            {
                id: 5,
                title: '被新垣结衣狂撩6分钟，这谁顶得住…'
            },
            {
                id: 6,
                title: '【嘻咦啊看】你在日本吃过biangbiang面吗'
            },
            {
                id: 7,
                title: '【片片】病毒美剧《血疫》，比核泄漏更恐怖的埃博拉病毒，令整个美国陷入恐惧！'
            }
        ]
    }
}
//纪录片数据
var documentaryList = {
    dynamic: [
        {
            src: 'img/component/documentary1.webp',
            title: '【NHK】英雄的抉择 战国山城合战的真相 智将毛利元就的抉择【双语字幕/@历史独角兽】',
            time: '59:07',
            num: '9285',
            danmu: '129'
        },
        {
            src: 'img/component/documentary2.webp',
            title: '【1080P】【美国】与摩根·弗里曼一起穿越虫洞 第四季10集全【2013】【英语中字】',
            time: '7:51:00',
            num: '1.6万',
            danmu: '53'
        },
        {
            src: 'img/component/documentary3.webp',
            title: '【CCTV央视纪录片】中国考古古墓探秘（33集全）',
            time: '25:18:56',
            num: '70.6万',
            danmu: '1.1万'
        },
        {
            src: 'img/component/documentary4.webp',
            title: '【MT字幕组】欲望经济史 日本战后篇 ~80年代 “日本第一”的幻梦~【NHK纪录片】',
            time: '28:43',
            num: '1.3万',
            danmu: '174'
        },
        {
            src: 'img/component/documentary5.webp',
            title: '美食纪录片【寿司之神】',
            time: '1:22:28',
            num: '18.9万',
            danmu: '2994'
        },
        {
            src: 'img/component/documentary6.webp',
            title: '泪目！“我可能要牺牲了，把孩子照顾好”！致敬，英雄！',
            time: '02:28',
            num: '64.1万',
            danmu: '723'
        },
        {
            src: 'img/component/documentary7.webp',
            title: '三百六十行：某网红深圳街头流浪3天体验"三和大神"！',
            time: '12:04',
            num: '31.2万',
            danmu: '2562'
        },
        {
            src: 'img/component/documentary8.webp',
            title: '历史那些事第二季 第一集：从头开始',
            time: '30:08',
            num: '28.6万',
            danmu: '8645'
        }
    ],
    contribute: [
        {
            src: 'img/component/documentary-con1.webp',
            title: '盘点历史上的4位清官，个个家喻户晓，榜首不是铁面无私的包拯',
            time: '02:27',
            num: '1',
            danmu: '0'
        },
        {
            src: 'img/component/documentary-con2.webp',
            title: '“双500”新突破！直击无人机远距离重载空投演练现场',
            time: '01:21',
            num: '41',
            danmu: '0'
        },
        {
            src: 'img/component/documentary-con3.webp',
            title: '【GOING|果然好玩】“三天不打，XXXX” 盘点京城上房揭瓦好去处',
            time: '09:54',
            num: '1',
            danmu: '0'
        },
        {
            src: 'img/component/documentary-con4.webp',
            title: '29 跨过山和大海，侣行夫妇自驾飞机离开阿拉斯加，开启北美第二站',
            time: '04:18',
            num: '49',
            danmu: '0'
        },
        {
            src: 'img/component/documentary-con5.webp',
            title: '广州行',
            time: '10:01',
            num: '2',
            danmu: '0'
        },
        {
            src: 'img/component/documentary-con6.webp',
            title: '法国圣米歇尔骑士团宣传片（2017年）',
            time: '06:10',
            num: '4',
            danmu: '0'
        },
        {
            src: 'img/component/documentary-con7.webp',
            title: '【人物采访】蜀绣，你真的了解吗？',
            time: '04:50',
            num: '2',
            danmu: '0'
        },
        {
            src: 'img/component/documentary-con8.webp',
            title: '梦幻浪漫的摩天轮',
            time: '04:40',
            num: '2',
            danmu: '0'
        }
    ]
}
//纪录片侧边栏数据
var documentaryAsideList = {
    threeDays: {
        firstItem: {
            id: 1,
            title: '三百六十行：在网易上班是什么体验？附猪场食堂测评~',
            src: 'img/component/documentary-aside1.webp',
            total: '30.0万'
        },
        asideList: [
            {
                id: 2,
                title: '历史那些事第二季 第一集：从头开始'
            },
            {
                id: 3,
                title: '《山田孝之纪录片》主演寄语'
            },
            {
                id: 4,
                title: '世界10大兽孩！这些人类小孩被动物抚养长大…@油兔不二字幕组'
            },
            {
                id: 5,
                title: '第一集《从头开始》预告片'
            },
            {
                id: 6,
                title: '《宠物医院》第八集预告'
            },
            {
                id: 7,
                title: '【一百年很长吗】 第9集预告'
            }
        ]
    },
    oneWeek: {
        firstItem: {
            id: 1,
            title: '四川刷屏的地震警报声，背后是什么？',
            src: 'img/component/documentary-aside2.webp',
            total: '46.8万'
        },
        asideList: [
            {
                id: 2,
                title: '【人生一串2】总导演：文案+配音还是原来的味道~'
            },
            {
                id: 3,
                title: '《bilibili@黄金眼》第二十二期：五分钟带你看够1818'
            },
            {
                id: 4,
                title: '三百六十行：在网易上班是什么体验？附猪场食堂测评~'
            },
            {
                id: 5,
                title: '历史那些事第二季 第一集：从头开始'
            },
            {
                id: 6,
                title: '《历史那些事》剧情预告片2：五年科举，三年模拟'
            },
            {
                id: 7,
                title: '【纪录片】蜂巢猎手：凤头蜂鹰-WILDLIFE ：Hive Hunters-Oriental Honey Buzzards'
            }
        ]
    }
}
//特别推荐数据
var recommendList = [
    {
        src: 'img/component/recommend-list1.webp',
        title: '2019浙大招生宣传片：《你的名字》-浙大因你而不凡，我在浙江大学等你！',
        userImg: 'img/component/recommend-small1.webp',
        username: 'tuituitui233'
    },
    {
        src: 'img/component/recommend-list2.webp',
        title: '鲜嫩多汁【汉堡（女）皇堡】小姐姐吃一口就语无伦次',
        userImg: 'img/component/recommend-small2.webp',
        username: '官方认证姬'
    },
    {
        src: 'img/component/recommend-list3.webp',
        title: '【管弦乐改编·翻唱】天气之子PV②主题曲【盖盖&碎花】（双语字幕）',
        userImg: 'img/component/recommend-small3.webp',
        username: '毛酱·把名字还给我'
    },
    {
        src: 'img/component/recommend-list4.webp',
        title: '【茉莉公主】Speechless【173翻唱】',
        userImg: 'img/component/recommend-small4.webp',
        username: '毛酱·把名字还给我'
    }
]