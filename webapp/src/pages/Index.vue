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
                ];
            },
        },
        methods: {
            randomText() {
                return this.corpus[Math.floor(Math.random() * this.corpus.length)];
            },
            next() {
                this.currentText = this.randomText();
                this.input = '';
                const now = Date.now();
                const d = now - this.currentStart;
                this.timeString = `Time of last lap: ${d / 1000} seconds.`;
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
