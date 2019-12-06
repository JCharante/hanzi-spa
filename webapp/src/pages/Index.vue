<template>
    <q-page class="flex flex-center">
        <div class="row">
            <div class="col-12 ideal text">
                <p><span style="color: green;">{{ confirmedInput }}</span> <span>{{ remainingInput }}</span></p>
            </div>
            <div class="col-12 ideal">
                <p>{{ saved }}</p>
            </div>
            <div class="col-12">
                <q-input class="text" v-model="input" ref="a" @input="oni"/>
            </div>
            <div class="col-12 text">
                <p>{{ timeString }}</p>
            </div>
            <hr>
            <div class="col-12">
                <q-toggle v-for="key in Object.keys(enableStatus)" :key="key" :label="key" v-model="enableStatus[key]"/>
            </div>
        </div>
    </q-page>
</template>

<style scoped>
    .ideal p {
        margin: 10px 10px 10px 10px;
    }
    .ideal {
        border-width: 2px;
        border-style: dashed;
        border-color: #ac2b37;
    }

    .text {
        font-size: 2em;
    }
</style>

<script>
    export default {
        name: 'PageIndex',
        computed: {
            remainingInput() {
                return this.currentText.slice(this.confirmedInput.length);
            },
            confirmedInput() {
                let a = [...this.input];
                let b = [...this.currentText];
                let ret = '';
                while (a.length && b.length && a[0] === b[0]) {
                    ret += a[0];
                    a = a.slice(1);
                    b = b.slice(1);
                }
                return ret;
            },
            corpus() {
                return [].concat(...Object.keys(this.enableStatus)
                    .filter((val) => { return this.enableStatus[val]; })
                    .map((key) => { return this.packs[key]; }));
            },
        },
        methods: {
            randomText() {
                return this.corpus[Math.floor(Math.random() * this.corpus.length)];
            },
            next() {
                this.input = '';
                const now = Date.now();
                const d = now - this.currentStart;
                this.timeString = `Time of last lap: ${d / 1000} seconds. 字/min: ${parseFloat(this.currentText.length / (d / 1000) * 60).toFixed(2)}`;
                this.currentText = this.randomText();
                this.currentStart = Date.now();
            },
            oni() {
                if (this.confirmedInput === this.currentText) {
                    this.next();
                }
            },
        },
        mounted() {
            this.currentText = this.randomText();
            this.currentStart = Date.now();
        },
        data() {
            return {
                currentText: '',
                input: '',
                saved: '',
                currentStart: null,
                timeString: '',
                enableStatus: {
                    'Lesson 6': true,
                    'HSK 1': true,
                    Misc: true,
                },
                packs: {
                    'Lesson 6': [
                        '李友给常老师打电话。她问常老师今天下午有没有时间，她有几个问题想问常老师。常老师说今天下午她要开会。',
                        '友问常老师什么时候有空儿。常老师说她明天下午四点以后才有空，因为明天上午她有两节课，下午三点要给二年级考试。',
                        '李友说她明天下午四点半去常老师的办公室。常老师说她会在办公室等李友。',
                        '李友下个星期要考中文，她给王朋打电话想请王朋帮她准备一下，跟她练习说中文。',
                        '王朋说好的，但是李友得请他喝咖啡。李友说没问题，她问王朋什么时候跟他见面，今天晚上有没有空。',
                        '王朋说他今天晚上没有空，因为白英爱请他吃饭，等他回来以后给李友打电话。',
                    ],
                    'HSK 1': [
                        '这个苹果一块钱',
                        '你什么时候能来？',
                        '我的电脑',
                        '她去医院了',
                        '他是医生吗？',
                        '你在哪儿呢？',
                        '喂，你好。',
                        '明天星期六。',
                        '我认识他。',
                        '天气很好',
                        '她不在饭店。',
                        '她没去看电影。',
                        '这是你的桌子吗？',
                        '我是老师，你呢？',
                        '那个人是谁？',
                        '这些杯子，你喜欢哪一个？',
                        '你想去哪儿？',
                        '你爱吃什么水果？',
                        '你们学校有多少学生？',
                        '你几岁了？',
                        '你怎么了？',
                        '这本书怎么样？',
                        '他是我的同学。',
                        '一年有12个月。',
                        '我是昨天来的。',
                        '这是在火车站买的。',
                        '他是坐飞机来的。',
                        '他们在吃饭呢。',
                        '我喜欢今天的天气。',
                        '我早上喝了一杯水。',
                    ],
                    Misc: [
                        "我姓张。",
                        "昨天晚上，王朋和李友去高文中家玩儿。",
                        "在高文中家，他们认识了高文中的姐姐。",
                        "她叫高小音，在学校的图书馆工作。",
                        "他今年二十四岁。",
                        "我和你。",
                        "我认识他。",
                        "李友给常老师打电话。。。",
                        "喂？喂，请问，常老师在吗？",
                        "我就是。",
                        "您是哪位？",
                        "老师，您好。我是李友。",
                        "李友，有事儿吗？",
                        "老师，今天下午您有时间吗？",
                        "我想问您几个问题。",
                        "对不起，今天下午我要开会。",
                        "明天呢？",
                        "明天上午我有两节课，下午三点要给二年级考试。",
                        "您什么时候有空儿？",
                        "明天四点以后才有空儿。",
                        "要是您方便，四点半我到您的办公室去，行吗？",
                        "四点半，没问题。",
                        "我在办公室等你。",
                        "谢谢您。",
                        "别客气。",
                        "他给我打了一个电话。",
                        "他是谁？请你给我们介绍一下。",
                        "你有你姐姐的照片吗？",
                        "给我看一下，行吗？",
                        "我昨天很忙，没给妈妈打电话。",
                        "明天下午三点我要给二年级考试。",
                        "今天晚上妹妹要去看电影。",
                        "明天我要去小白家玩儿。你呢？",
                        "明天我不去小白家玩儿，我要开会。",
                        "别客气。",
                        "你别说。",
                        "别进来！",
                        "那个电影没有意思，你别看了。",
                        "别给小王打电话！",
                        "李友明天做什么？",
                        "李友明天要去跳舞。",
                        "要是你有时间，你想去哪儿玩儿？",
                        "要是朋友请你吃饭，你想吃什么菜？",
                        "要是同学请你看电影，你想看什么电影？",
                        "要是朋友请你去跳舞，你想去哪儿跳舞？",
                        "要是朋友找你打球，你什么时候有时间？",
                        "今天妈妈喝了三杯水。",
                        "星期一小高请我喝了一瓶可乐。",
                        "昨天晚上你去打球了吗？",
                        "我的眼里都是你",
                        "好想对你说我喜欢你",
                        "喜欢你的bodyline你的性格你的eyes",
                        "对你说我喜欢你。我们一起牵手去旅行。Baby我的眼里都是心里都是全部都是你",
                        "我是你的前女友",
                        "喂，请问，王朋在吗？",
                        "我就是。你是李友吧？",
                        "王朋，我下个星期要考中文，你帮我准备一下，跟我练习说中文，好吗？",
                        "好啊，但是你得请我喝咖啡。",
                        "喝咖啡，没问题。那我什么时候跟你见面？你今天晚上有空儿吗？",
                        "今天晚上白英爱请我吃饭。",
                        "是吗？白英爱请你吃饭？",
                        "对。我回来以后给你打电话。",
                        "好，我等你的电话。",
                        "我学中文，你呢？",
                        "我现在得去开会，没空儿跟你聊天儿。",
                        "我有事儿，得去学校。",
                        "白律师，明年二月你可以来我们这儿工作吗？",
                        "你什么时候回来？",
                        "快进去吧！",
                        "我六点回去。",
                        "您好！请问李音在吗？不在。你是哪位？",
                        "你看起来气色不错",
                        "你看起来气色不错。去哪儿了？",
                        "是吗？我外出度假去了。去哪儿了？",
                        "海边。你也该休假去放松放松了。",
                        "是啊。我正考虑去哪儿呢。",
                        "我困了。你每天睡多长时间？大概每天五个小时。难怪你困。你应该多睡点儿觉。",
                    ],
                },
            };
        },
    };
</script>
