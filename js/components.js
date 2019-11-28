//vue数据渲染视频列表
new Vue({
    el: '#videoImgWrap',
    data: {
        videoList: videoList1,      //记录每次点击按钮切换后的数据
        num: 0,
        prevBtnArr: ['昨日', '三日', '一周'],
        nextBtnArr: ['一周', '昨日', '三日'],
        nextBtnVal: '一周',
        prevBtnVal: '昨日'
    },
    methods: {
        prevTab() {
            this.num--;
            if (this.num < 0) this.num = this.prevBtnArr.length - 1;
            this.prevBtnVal = this.prevBtnArr[this.num];
            this.changeList();
        },
        nextTab() {
            this.num++;
            this.num %= this.nextBtnArr.length;
            this.nextBtnVal = this.nextBtnArr[this.num];
            this.changeList();
        },
        changeList() {
            switch (this.num) {
                case 0:
                    this.videoList = videoList1;
                    break;

                case 1:
                    this.videoList = videoList2;
                    break;

                case 2:
                    this.videoList = videoList3;
                    break;
            }
        }
    }
});
//数据渲染推广视频列表
new Vue({
    el: '.spread-list',
    data: {
        spreadList
    }
})
//数据渲染直播视频列表
new Vue({
    el: '.bili-live-list',
    data: {
        liveList
    }
})
//视频列表组件封装
Vue.component('bili-content-list', {
    props: ['list','title','num','type'],
    data() {
        return {
            index: 0,
            videoList: this.list.dynamic,
            value: '有新动态'
        } 
    },
    computed: {
        iconClass() {
            return this.type + '-icon';
        }  
    },
    template: `
        <div class="component-left-wrap">
            <div class="com-header-box clearfix">
                <!-- 使用solt替换标题名 -->
                <slot name="title">
                    <span class="pic" :class=[iconClass]></span>
                    <a href="#" class="title">{{title}}</a>
                </slot>
                <div class="bili-tab-link">
                    <a href="javascript:;" :class="{active:value=='有新动态'}" @click="changeList('有新动态')">有新动态</a>
                    <a href="javascript:;" :class="{active:value=='最新投稿'}" @click="changeList('最新投稿')">最新投稿</a>
                </div>
                <div class="right-link">
                    <div class="trends">
                        <i class="icon"></i>
                        <span class="info"><b>{{num}}</b>条新动态</span>
                    </div>
                    <a href="#" class="link-more">
                        <span class="more">更多</span>
                        <i class="tri"></i>
                    </a>
                </div>
            </div>
            <div class="com-list clearfix">
                <a href="#" class="com-item" v-for="item in videoList">
                    <img :src="item.src" width="160" height="100" :alt="item.title">
                    <div class="mask">
                        <span class="time">{{item.time}}</span>
                        <span class="watch"></span>
                    </div>
                    <p class="title" :title="item.title">{{item.title}}</p>
                    <p class="num">
                        <span class="total"><i class="icon"></i>{{item.num}}</span>
                        <span class="danmu"><i class="icon"></i>{{item.danmu}}</span>
                    </p>
                </a>
            </div>
        </div>
    `,
    methods: {
        changeList(value) {
            this.value = value;
            if (this.value == '最新投稿') {
                this.videoList = this.list.contribute;
            } else if (this.value == '有新动态') {
                this.videoList = this.list.dynamic;
            }
        }
    }
});
//侧边栏视频列表组件封装
Vue.component('bili-aside-list', {
    props: ['list'],
    data() {
        return {
            videoAsideList: this.list.threeDays,
            type: '三日',
            tabVal: '全部'
        }    
    },
    template: `
        <div class="component-aside-wrap">
            <div class="header">
                <h3 class="title">排行</h3>
                <div class="bili-nav clearfix">
                    <a href="javascript:;" :class="{active:tabVal=='全部'}" @mouseover="tab('全部')">全部</a>
                    <a href="javascript:;" :class="{active:tabVal=='原创'}" @mouseover="tab('原创')">原创</a>
                </div>
                <div class="bili-dropdown">
                    <span>{{type}}</span>
                    <i class="ico"></i>
                    <ul class="dropdown-list">
                        <li class="dropdown-item" :style="{display:type=='三日' ? 'none' : 'block'}" @click="changeList('三日')">三日</li>
                        <li class="dropdown-item" :style="{display:type=='一周' ? 'none' : 'block'}" @click="changeList('一周')">一周</li>
                    </ul>
                </div>
            </div>
            <div class="rank-list-wrap clearfix" ref="list">
                <ul class="rank-list">
                    <li class="first-item">
                        <span class="id">{{videoAsideList.firstItem.id}}</span>
                        <a href="#" :title="videoAsideList.firstItem.title" class="clearfix">
                            <div class="img-wrap">
                                <img :src="videoAsideList.firstItem.src" :alt="videoAsideList.firstItem.title">
                                <div class="watch"></div>
                            </div>    
                            <div class="t-wrap">
                                <p class="title">{{videoAsideList.firstItem.title}}</p>
                                <p class="point">综合评分：{{videoAsideList.firstItem.total}}</p>
                            </div>
                        </a>
                    </li>
                    <li class="item" v-for="item in videoAsideList.asideList">
                        <span class="id">{{item.id}}</span>
                        <a href="#" :title="item.title">{{item.title}}</a>
                    </li>
                </ul>
                <ul class="rank-list">
                    <li class="first-item">
                        <span class="id">{{videoAsideList.firstItem.id}}</span>
                        <a href="#" :title="videoAsideList.firstItem.title" class="clearfix">
                            <div class="img-wrap">
                                <img :src="videoAsideList.firstItem.src" :alt="videoAsideList.firstItem.title">
                                <div class="watch"></div>
                            </div>    
                            <div class="t-wrap">
                                <p class="title">{{videoAsideList.firstItem.title}}</p>
                                <p class="point">综合评分：{{videoAsideList.firstItem.total}}</p>
                            </div>
                        </a>
                    </li>
                    <li class="item" v-for="item in videoAsideList.asideList">
                        <span class="id">{{item.id}}</span>
                        <a href="#" :title="item.title">{{item.title}}</a>
                    </li>
                </ul>
            </div>
            <a href="#" class="aside-link-more">查看更多<i class="ico"></i></a>
        </div>
    `,
    methods: {
        changeList(type) {
            this.type = type;
            if (this.type == '一周') {
                this.videoAsideList = this.list.oneWeek; 
            } else if (this.type == '三日') {
                this.videoAsideList = this.list.threeDays;
            } 
        },
        tab(val) {
            this.tabVal = val;
            if (this.tabVal == '原创') {
                this.$refs.list.style.marginLeft = '-100%';
            } else if (this.tabVal == '全部') {
                this.$refs.list.style.marginLeft = '0';
            }
        }
    }
})
//番剧国创组件
Vue.component('bili-opera-list', {
    props: ['title', 'list', 'type'],
    data() {
        return {
            operaList: this.list.new,
            week: '最新'
        }
    },
    computed: {
        iconClass() {
            return this.type + '-icon';
        }
    },
    template: `
        <div class="opera-left-list">
            <div class="header clearfix">
                <span class="icon" :class=[iconClass]></span>
                <a href="#" class="title">{{title}}</a>
                <nav class="bili-tab">
                    <a href="javascript:;" :class="{active:week=='最新'}" @click="changeList('最新')">最新</a>
                    <a href="javascript:;" :class="{active:week=='一'}" @click="changeList('一')">一</a>
                    <a href="javascript:;" :class="{active:week=='二'}" @click="changeList('二')">二</a>
                    <a href="javascript:;" :class="{active:week=='三'}" @click="changeList('三')">三</a>
                    <a href="javascript:;" :class="{active:week=='四'}" @click="changeList('四')">四</a>
                    <a href="javascript:;" :class="{active:week=='五'}" @click="changeList('五')">五</a>
                    <a href="javascript:;" :class="{active:week=='六'}" @click="changeList('六')">六</a>
                    <a href="javascript:;" :class="{active:week=='日'}" @click="changeList('日')">日</a>
                </nav>
                <a href="#" class="link-time">新番时间表<i></i></a>
            </div>
            <div class="opera-list-box clearfix">
                <div class="item" v-for="item in operaList">
                    <a href="#" class="left">
                        <img :src="item.src" :alt="item.title">
                    </a>
                    <div class="right">
                        <a href="#" :title="item.title" class="title">{{item.title}}</a>
                        <p class="update">
                            <a href="#">{{item.update}}</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `,
    methods: {
        changeList(w) {
            this.week = w;
            switch (this.week) {
                case '最新':
                    this.operaList = this.list.new;
                    break;
                
                case '一':
                    this.operaList = this.list.one;
                    break;
                
                case '二':
                    this.operaList = this.list.two;
                    break;
                
                case '三':
                    this.operaList = this.list.three;
                    break;
                
                case '四':
                    this.operaList = this.list.four;
                    break;
                
                case '五':
                    this.operaList = this.list.five;
                    break;
                
                case '六':
                    this.operaList = this.list.six;
                    break;
                
                case '日':
                    this.operaList = this.list.seven;
                    break;
            }
        }
    }
})
//番剧侧边栏组件
Vue.component('opera-aside-list', {
    props: ['list'],
    data() {
        return {
            operaAsideList: this.list.threeDays,
            type: '三日'
        }
    },
    template: `
        <aside class="opera-aside">
            <header class="header">
                <h3 class="title">排行</h3>
                <div class="bili-dropdown">
                    <span>{{type}}</span>
                    <i class="ico"></i>
                    <ul class="dropdown-list">
                        <li class="dropdown-item" :style="{display:type=='三日' ? 'none' : 'block'}" @click="changeList('三日')">三日</li>
                        <li class="dropdown-item" :style="{display:type=='一周' ? 'none' : 'block'}" @click="changeList('一周')">一周</li>
                    </ul>
                </div>
            </header>
            <ul class="opera-aside-list">
                <li class="item" v-for="item in operaAsideList">
                    <i class="id">{{item.id}}</i>
                    <a href="#" :title="item.title">
                        <p class="title">{{item.title}}</p>
                        <span class="total">{{item.total}}</span>
                    </a>
                </li>
            </ul>
            <a href="#" class="aside-link-more">查看更多<i class="ico"></i></a>
            <slot></slot>
        </aside>
    `,
    methods: {
        changeList(type) {
            this.type = type;
            if (this.type == '一周') {
                this.operaAsideList = this.list.oneWeek;
            } else if (this.type == '三日') {
                this.operaAsideList = this.list.threeDays;
            }
        }
    }
});
//电影电视剧侧边栏组件
Vue.component('video-aside-list', {
    props: ['list'],
    template: `
        <div class="component-aside-wrap">
            <div class="header">
                <h3 class="title">排行</h3>
            </div>
            <div class="rank-list-wrap clearfix" ref="list">
                <ul class="rank-list">
                    <li class="first-item">
                        <span class="id">{{list.firstItem.id}}</span>
                        <a href="#" :title="list.firstItem.title" class="clearfix">
                            <div class="img-wrap">
                                <img :src="list.firstItem.src" :alt="list.firstItem.title">
                                <div class="watch"></div>
                            </div>    
                            <div class="t-wrap">
                                <p class="title">{{list.firstItem.title}}</p>
                                <p class="point">综合评分：{{list.firstItem.total}}</p>
                            </div>
                        </a>
                    </li>
                    <li class="item" v-for="item in list.asideList">
                        <span class="id">{{item.id}}</span>
                        <a href="#" :title="item.title">{{item.title}}</a>
                    </li>
                </ul>
            </div>
            <a href="#" class="aside-link-more">查看更多<i class="ico"></i></a>
        </div>
    `
})

new Vue({
    el: '#bili-component',
    data: {
        animatioinList,       //动画列表的数据
        animationAsideList,     //动画侧边栏数据
        operaList,      //番剧内容列表数据
        operaAsideList,     //番剧侧边栏数据
        operaDynamic,    //番剧动态内容数据
        nationList,     //国创列表数据
        nationAsideList,     //国创侧边栏列表数据
        domesticList,        //国产原创数据
        domesticAsideList,       //国产原创侧边栏数据
        musicList,       //音乐数据
        musciAsideList,      //音乐侧边栏数据
        danceList,       //舞蹈数据
        danceAsideList,      //舞蹈侧边栏数据
        gameList,        //游戏视频数据
        gameAsideList,       //游戏侧边栏数据
        scienceList,     //科技视频列表数据
        scienceAsideList,        //科技侧边栏数据
        digitalList,     //数码视频数据
        digitalAsidelList,       //数码侧边栏数据
        lifeList,        //生活视频数据
        lifeAsideList,       //生活侧边栏数据
        ghostList,       //鬼畜视频数据
        ghostAsideList,      //鬼畜侧边栏数据
        fashionList,     //时尚视频数据
        fashionAsideList,        //时尚侧边栏数据
        adverList,       //广告视频数据
        adverAsideList,      //广告侧边栏数据
        entertainList,       //娱乐视频数据
        entertainAsideList,      //娱乐侧边栏数据
        columnList,      //专栏数据
        columnAsideList: columnAsideOneDay,     //专栏侧边栏数据
        columnType: '一日',
        movieList,       //电影数据
        movieAsideList,      //电影侧边栏数据
        tvList,      //电视剧列表数据
        tvAsideList,     //电视剧侧边栏组件
        filmList,        //影视组件
        filmAsideList,       //影视侧边栏组件
        documentaryList,     //纪录片数据
        documentaryAsideList,        //纪录片侧边栏数据
        recommendList       //特别推荐数据
    },
    methods: {
        changeList(val) {
            this.columnType = val;
            if (val == '一周') {
                this.columnAsideList = columnAsideOneWeek;
            } else if(val == '一日') {
                this.columnAsideList = columnAsideOneDay;
            }
        }
    }
})
