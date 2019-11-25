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
                return [
                    "我姓张。",
                    "昨天晚上，王朋和李友去高文中家玩儿。",
                    "在高文中家，他们认识了高文中的姐姐。",
                    "她叫高小音，在学校的图书馆工作。",
                    "他今年二十四岁。",
                    "喂？",
                    "我和你。",
                    "我认识他。",
                    "喂？",
                    "喂，请问，常老师在吗？",
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
                ];
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
                this.timeString = `Time of last lap: ${d / 1000} seconds. 字/s: ${parseFloat(this.currentText.length / (d / 1000)).toFixed(2)}`;
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
            };
        },
    };
</script>
