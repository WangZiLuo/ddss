<template>
    <div id="g-container" tabindex="0">
        <div id="panel" tabindex="1">
        </div>
    </div>
</template>

<script>
let map
let marker
var riding

export default {
    data() {
        return {
            position: [116.480983, 39.989628]
        }
    },
    mounted() {
        map = new AMap.Map('g-container', {
            resizeEnable: true,
            zoom: 13,
            center: this.position
        })
        marker = new AMap.Marker({
            position: this.position,//marker所在的位置
            map: map//创建时直接赋予map属性
        })
        AMap.service('AMap.Riding', () => {//回调函数
            //实例化Driving
            riding = new AMap.Riding({
                map: map
            })
            //TODO: 使用driving对象调用驾车路径规划相关的功能
        })
        this.setMapStyle('fresh')
        this.upDataMarkerPosition()
        riding.search([
            {
                keyword:'跨贸小镇',
                city:'杭州'
            },
            {
                keyword:'求智巷小区'
            }
        ], (status, result) => {
            //TODO 解析返回结果，自己生成操作界面和地图展示界面
            console.log(status)
            console.log(result)

        })
        //也可以在创建完成后通过setMap方法执行地图对象
        // marker.setMap(map);
    },
    methods: {
        upDataMarkerPosition () {
            setInterval(() => {
                this.position[0] += .001
                this.position[1] += .001
                this.setMarkerPosition(this.position)
            }, 1000)
        },
        setMapStyle (name) {
            map.setMapStyle(`amap://styles/${name}`);
        },
        setMarkerPosition (_LngLat) {
            marker.setPosition(_LngLat)
        }
    }
}
</script>

<style>
#g-container {
    height: 100%;
}
#panel {
    height: 5.333333rem;
}
</style>