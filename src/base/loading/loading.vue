<template>
    <div class="loading">
        <div class="cover flex flex-item flex-justify">
            <div id="bg" class="cover-bg"></div>
        </div>
        <div class="content flex flex-item flex-justify">
            <p id="desc" class="desc">{{desc}}</p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            desc: {
                type: String,
                default: '申请中，请稍后...'
            }
        },
        mounted() {
            let descElWidth = document.getElementById('desc').offsetWidth
            let bgEl = document.getElementById('bg')
            bgEl.style.width = descElWidth + 30 + 'px'
        }
    }
</script>

<style scoped lang="scss">
    .loading {
        position: relative;
        z-index: 9999;
        .cover, .content {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        .cover-bg {
            width: 160px;
            height: 130px;
            border-radius: 100px;
            background-color: #000000;
            opacity: .7;
        }
        .content>.desc {
            color: #ffffff;
            font-size: 24px;
        }
    }
</style>
