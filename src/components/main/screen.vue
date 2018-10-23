<template>
    <div id="screen">
        <div class="screen_cond">
            <div class="place">
                <div class="city">
                    <span class="title">区域:</span>
                    <ul>
                        <li>
                            <a href="javascript:void(0)" :class="{active: regoinIndex == -1 }" @click="switchRegion([], -1)">
                                <span>不限</span>
                                <div class="border" v-show="regoinIndex == -1">
                                    <span class="jiao"></span>
                                    <span class="chang"></span>
                                </div>
                            </a>
                        </li>
                        <li v-for="(item, index) in regoin" :key="index">
                            <a href="javascript:void(0)" :class="{active: regoinIndex == index }" @click="switchRegion(item, index)">
                                <span>
                                    {{item.name}}
                                </span>
                                <div class="border" v-show="regoinIndex == index">
                                    <span class="jiao"></span>
                                    <span class="chang"></span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <!--商圈-->
                <div class="region" v-show="regoinIndex > -1">
                    <span class="title"></span>
                    <ul v-for="(item, index) in regoin" :key="index" v-show="regoinIndex == index">
                        <li v-for="(area, index) in item.tradingarea" :key="index" :class="{active: curCond[0].value == area.t_name}" @click="choiceArea(area, index)"><a href="javascript:void(0)">{{area.t_name}}</a></li>
                    </ul>
                </div>
            </div>
            <div class="transit checkbox">
                <span class="title">公交:</span>
                <ul>
                    <li :class="{active: transitIndex == -1}"><a href="javascript:void(0)" @click="choiceTransit([],-1)">不限</a></li>
                    <li v-for="(item, index) in transit" :key="index" :class="{active: transitIndex == index}"><a href="javascript:void(0)" @click="choiceTransit(item, index)">{{item.t_name}}路</a></li>
                </ul>
            </div>
            <!-- <div class="count checkbox">
                <span class="title">总价:</span>
                <ul>
                    <li :class="{active: houseTypeIndex == -1}"><a href="javascript:void(0)" @click="choiceHouseType(-1)">不限</a></li>
                    <li v-for="(item, index) in houseType" :key="index" :class="{active: houseTypeIndex == index}"><input type="checkbox" name="housetype" @click="choiceHouseType(index)" :value="item.value" :checked="curCond[3].value.indexOf(item.value) > -1">{{item.value}}</li>
                </ul>
            </div>
            <div class="acreage checkbox">
                <span class="title">面积:</span>
                <ul>
                    <li :class="{active: houseTypeIndex == -1}"><a href="javascript:void(0)" @click="choiceHouseType(-1)">不限</a></li>
                    <li v-for="(item, index) in houseType" :key="index" :class="{active: houseTypeIndex == index}"><input type="checkbox" name="housetype" @click="choiceHouseType(index)" :value="item.value" :checked="curCond[3].value.indexOf(item.value) > -1">{{item.value}}</li>
                </ul>
            </div>
            <div class="school_type checkbox">
                <span class="title">类别:</span>
                <ul>
                    <li :class="{active: houseTypeIndex == -1}"><a href="javascript:void(0)" @click="choiceHouseType(-1)">不限</a></li>
                    <li v-for="(item, index) in houseType" :key="index" :class="{active: houseTypeIndex == index}"><input type="checkbox" name="housetype" @click="choiceHouseType(index)" :value="item.value" :checked="curCond[3].value.indexOf(item.value) > -1">{{item.value}}</li>
                </ul>
            </div> -->
            <div class="price checkbox">
                <span class="title">价格:</span>
                <ul>
                    <li :class="{active: priceIndex == -1}"><a href="javascript:void(0)" @click="choicePrice([], -1)">不限</a></li>
                    <li v-for="(item, index) in priceRange" :key="index" :class="{active: priceIndex == index}"><a href="javascript:void(0)" @click="choicePrice(item, index)">{{item.value}}</a></li>
                </ul>
            </div>
            <div class="house_type checkbox">
                <span class="title">户型:</span>
                <ul>
                    <li :class="{active: houseTypeIndex == -1}"><a href="javascript:void(0)" @click="choiceHouseType(-1)">不限</a></li>
                    <li v-for="(item, index) in houseType" :key="index" :class="{active: houseTypeIndex == index}"><input type="checkbox" name="housetype" @click="choiceHouseType(index)" :value="item.value" :checked="curCond[3].value.indexOf(item.value) > -1">{{item.value}}</li>
                </ul>
            </div>
            <div class="more_cond">
                <span class="title">更多条件</span>
                <div class="selectbox">
                    <select v-for="(cond, index) in moreCondition" :name="index" :key="index" @change="choiceMoreCond(index, $event)">
                        <option disabled selected>{{cond.name}}</option>
                        <option v-for="(item, index) in cond.list" :key="index" :value="index">{{item}}</option>
                    </select>
                </div>
                <div class="supportChat">
                    <input type="checkbox" name="roomchat" @click="choiceRoomChat" :checked="curCond[7].list.is_chat == 1" />支持房聊
                </div>
            </div>
        </div>
        <div class="cur_cond">
            <span class="title">当前条件</span>
            <ul class="cond_list">
                <li v-for="(item, index) in curCond" v-show="item.value" :key="index">
                    <div class="cond">
                        <span>{{item.value}}</span>
                        <img src="@/assets/images/close_1.png" @click="deleteCurCond(index)" />
                    </div>
                </li>
            </ul>
            <a href="javascript:void(0)" v-show="screenShow" class="clear_screen" @click="deleteAllCond">
                <img src="@/assets/images/dzlp18.jpg" />
                <span>清空筛选</span>
            </a>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "screen",
    components: {},
    props: ["directSelling", "discount", "searchType"],
    data() {
        return {
            cur_typeIndex: 0,
            priceRange: [
                {
                    value: "3000以下",
                    sendValue: "0-2999"
                },
                {
                    value: "3000-3999",
                    sendValue: "3000-3999"
                },
                {
                    value: "4000-4999",
                    sendValue: "4000-4999"
                },
                {
                    value: "5000-5999",
                    sendValue: "5000-5999"
                },
                {
                    value: "6000-7999",
                    sendValue: "6000-7999"
                },
                {
                    value: "8000-9999",
                    sendValue: "8000-9999"
                },
                {
                    value: "10000以上",
                    sendValue: "10000-99999"
                }
            ],
            priceIndex: -1,
            regoin: [],
            regoinIndex: -1,
            areaIndex: -1,
            transit: [],
            transitIndex: -1,
            moreCondition: [],
            houseType: [
                {
                    value: "一居",
                    sendValue: "1"
                },
                {
                    value: "两居",
                    sendValue: "2"
                },
                {
                    value: "三居",
                    sendValue: "3"
                },
                {
                    value: "四居",
                    sendValue: "4"
                },
                {
                    value: "五居",
                    sendValue: "5"
                }
            ],
            houseTypeIndex: -1,
            curCond: [
                {
                    value: "",
                    list: {
                        area: ""
                    }
                },
                {
                    value: "",
                    list: {
                        near_bus: ""
                    }
                },
                {
                    value: "",
                    list: {

                    }
                },
                {
                    value: "",
                    list: {
                        s_price: "",
                        e_price: ""
                    }
                },
                {
                    value: "",
                    list: {
                        house_type: ""
                    }
                },
                {
                    value: "",
                    list: {
                        property_type: ""
                    }
                },
                {
                    value: "",
                    list: {
                        sale_status: ""
                    }
                },
                {
                    value: "",
                    list: {
                        charstic_tag: ""
                    }
                },
                {
                    value: "",
                    list: {
                        is_chat: ""
                    }
                },
                {
                    value: "",
                    list: {
                        is_directselling: ""
                    }
                },
                {
                    value: "",
                    list: {
                        is_discount: ""
                    }
                }
            ]
        };
    },
    methods: {
        //选择区域
        switchRegion(item, index) {
            this.regoinIndex = index;
            this.areaIndex = -1;
            if (index == -1) {
                this.curCond[0].value = "";
                this.curCond[0].list.area = "";
            } else {
                this.curCond[0].value = item.name;
                this.curCond[0].list.area = item.code;
            }
            this.sendValue();
        },

        //选择城市
        choiceArea(item, index) {
            this.curCond[0].value = item.t_name;
            this.curCond[0].list.area = item.id;
            this.sendValue();
        },

        //选择公交
        choiceTransit(item, index) {
            console.log("选择公交");
            this.transitIndex = index;
            if (index == -1) {
                this.curCond[1].value = "";
                this.curCond[1].list.near_bus = "";
            } else {
                this.curCond[1].value = item.t_name + "路";
                this.curCond[1].list.near_bus = item.t_name;
            }
            this.sendValue();
        },

        //选择价格区间
        choicePrice(item, index) {
            this.priceIndex = index;
            if (index == -1) {
                this.curCond[2].value = "";
                this.curCond[2].list = {
                    s_price: "",
                    e_price: ""
                };
            } else {
                this.curCond[2].value = item.value;
                this.curCond[2].list.s_price =
                    item.sendValue.split("-")[0] == 0
                        ? ""
                        : item.sendValue.split("-")[0];
                this.curCond[2].list.e_price = item.sendValue.split("-")[1];
            }
            this.sendValue();
        },

        //选择房源类型
        choiceHouseType(index, item) {
            this.houseTypeIndex = index;
            var cond = this.curCond[3];
            if (index == -1) {
                cond.value = "";
                cond.list.house_type = "";
            } else {
                cond.value = "";
                cond.list.house_type = "";
                var type = "";
                $("input:checkbox[name='housetype']:checked").each(function() {
                    // 遍历name=housetype的多选框
                    cond.value += $(this).val() + ",";
                    type +=
                        $(this)
                            .parent()
                            .index() + ",";
                });
                cond.value = cond.value.substring(0, cond.value.length - 1);
                cond.list.house_type = type.substring(0, type.length - 1);
            }
            this.sendValue();
        },

        //选择更多条件
        choiceMoreCond(index, ele) {
            var id = ele.target.value;
            var value = this.moreCondition[index].list[ele.target.value];
            switch (index) {
                case 0:
                    this.curCond[4].value = value;
                    this.curCond[4].list.property_type = id;
                    break;
                case 1:
                    this.curCond[5].value = value;
                    this.curCond[5].list.sale_status = id;
                    break;
                case 2:
                    this.curCond[6].value = value;
                    this.curCond[6].list.charstic_tag = id;
                    break;
            }
            console.log(this.curCond);
            this.sendValue();
        },

        //是否支持房聊
        choiceRoomChat() {
            var ck = $("input[name='roomchat']").is(":checked");
            if (ck) {
                this.curCond[7].value = "房聊";
                this.curCond[7].list.is_chat = 1;
            } else {
                this.curCond[7].value = "";
                this.curCond[7].list.is_chat = "";
            }
            this.sendValue();
        },

        //删除当前筛选条件
        deleteCurCond(index) {
            this.curCond[index].value = "";
            switch (index) {
                case 0:
                    this.regoinIndex = -1;
                    this.curCond[0].list.area = "";
                    break;
                case 1:
                    this.transitIndex = -1;
                    this.curCond[1].list.near_bus = "";
                    break;
                case 2:
                    this.priceIndex = -1;
                    this.curCond[2].list = {
                        s_price: "",
                        e_price: ""
                    };
                    break;
                case 3:
                    this.houseTypeIndex = -1;
                    this.curCond[3].list.house_type = "";
                    break;
                case 4:
                    $(".selectbox select")[0].children[0].selected = true;
                    this.curCond[4].list.property_type = "";
                    break;
                case 5:
                    $(".selectbox select")[1].children[0].selected = true;
                    this.curCond[5].list.sale_status = "";
                    break;
                case 6:
                    $(".selectbox select")[2].children[0].selected = true;
                    this.curCond[6].list.charstic_tag = "";
                    break;
                case 7:
                    this.curCond[7].list.is_chat = "";
                    break;
                case 8:
                    this.curCond[8].list.is_directselling = "";
                    break;
                case 9:
                    this.curCond[9].list.is_discount = "";
                    break;
            }
            this.sendValue();
        },

        //删除所有筛选条件
        deleteAllCond() {
            this.curCond = [
                {
                    value: "",
                    list: {
                        area: ""
                    }
                },
                {
                    value: "",
                    list: {
                        near_bus: ""
                    }
                },
                {
                    value: "",
                    list: {
                        s_price: "",
                        e_price: ""
                    }
                },
                {
                    value: "",
                    list: {
                        house_type: ""
                    }
                },
                {
                    value: "",
                    list: {
                        house_opersat: ""
                    }
                },
                {
                    value: "",
                    list: {
                        sale_status: ""
                    }
                },
                {
                    value: "",
                    list: {
                        feature: ""
                    }
                },
                {
                    value: "",
                    list: {
                        is_chat: ""
                    }
                },
                {
                    value: "",
                    list: {
                        is_directselling: ""
                    }
                },
                {
                    value: "",
                    list: {
                        is_discount: ""
                    }
                }
            ];
            this.regoinIndex = -1;
            this.transitIndex = -1;
            this.priceIndex = -1;
            this.houseTypeIndex = -1;
            this.sendValue();
        },

        //向父组件传值
        sendValue() {
            console.log("传值");
            console.log(this.curCond);
            this.$emit("sendScreenCond", this.curCond);
        }
    },
    mounted() {
        var then = this;
        if (this.directSelling) {
            then.curCond[4].value = "房乐士直销";
            then.curCond[4].list.is_directselling = 1;
        } else if (this.discount) {
            then.curCond[5].value = "打折优惠楼盘";
            then.curCond[5].list.is_discount = 2;
        }

        //获取筛选条件区域
        function getAreaSearch() {
            return axios.post(
                process.env.API_HOST + "house/Houselist/getAreaSearch"
            );
        }

        //获取筛选条件公交
        function getTransitSeach() {
            return axios.post(
                process.env.API_HOST + "house/Houselist/getTransitSeach"
            );
        }

        function getMoreConditions() {
            return axios.post(
                process.env.API_HOST + "house/Houselist/getMoreConditions"
            );
        }

        //并发调用
        axios
            .all([getAreaSearch(), getTransitSeach(), getMoreConditions()])
            .then(
                axios.spread(function(area, transit, cond) {
                    console.log("区域");
                    console.log(area);
                    console.log("公交");
                    console.log(transit);
                    console.log("更多筛选条件");
                    console.log(cond);
                    if (area.status == "200") {
                        then.regoin = area.data.data;
                    }
                    if (transit.status == "200") {
                        then.transit = transit.data.data;
                    }
                    if (cond.status == "200") {
                        then.moreCondition = cond.data.data;
                    }
                })
            );
    },
    filters: {
        clearComma(value) {
            return value
                .replace(/(,),*\1/g, "$1")
                .replace(/(^\,*)|(\,*$)/g, "");
        }
    },
    computed: {
        screenShow() {
            var cond = this.curCond;
            for (var i = 0; i < cond.length; i++) {
                if (cond[i].value != "") {
                    return true;
                    break;
                } else {
                    return true;
                    break;
                }
            }
        }
    }
};
</script>

<style lang="css">
#screen {
    overflow: hidden;
    padding-bottom: 20px;
}

.screen_cond .title,
.cur_cond .title {
    font-size: 14px;
    color: #999;
    width: 60px;
    margin-right: 20px;
}

.screen_cond {
    margin-top: 30px;
}

.city {
    display: flex;
    border-bottom: 1px solid #f2f2f2;
}

.city ul {
    display: flex;
}

.city ul li {
    margin-right: 10px;
    display: flex;
    align-items: flex-start;
}

.city ul li a {
    padding: 0 15px;
    height: 40px;
    position: relative;
}

.city ul li a:hover,
.city ul li a.active {
    color: #e93e0c;
}

.border {
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
}

.border .jiao {
    display: block;
    width: 0;
    border-color: #e93e0c transparent;
    border-width: 0 6px 6px 6px;
    border-style: solid;
    margin: 0 auto;
}

.border .chang {
    display: block;
    border-bottom: 1px solid #e93e0c;
}

.region {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f2f2f2;
}

.region ul {
    display: flex;
    flex-wrap: wrap;
}

.region ul li {
    margin-right: 10px;
    overflow: hidden;
    height: 35px;
    line-height: 35px;
}

.region ul li a {
    padding: 0 15px;
}

.region ul li.active a,
.region ul li a:hover {
    color: #e93e0c;
}

.checkbox {
    display: flex;
}

.checkbox ul {
    display: flex;
    flex-wrap: wrap;
    width: 1130px;
}

.checkbox ul li {
    width: 100px;
    margin-bottom: 20px;
}

.checkbox ul li.active a,
.checkbox ul li a:hover {
    color: #e93e0c;
}

.checkbox ul li input {
    margin-right: 5px;
}

.transit {
    margin-top: 30px;
}

.transit li.active a,
.transit li a:hover {
    color: #e93e0c;
}

.more_cond {
    display: flex;
}

.more_cond .title {
    line-height: 30px;
}

.selectbox select {
    appearance: none;
    width: 110px;
    height: 30px;
    border-radius: 0;
    padding-left: 10px;
    color: #cccccc;
    border-color: #ccc;
    margin-right: 5px;
}

.supportChat {
    margin-left: 20px;
    height: 30px;
    display: flex;
    align-items: center;
}

.supportChat input {
    margin-right: 10px;
}

.cur_cond {
    display: flex;
    margin-top: 10px;
}

.cur_cond .title {
    line-height: 30px;
}

.cond_list {
    display: flex;
}

.cond_list li {
    margin-right: 10px;
}

.cond {
    height: 30px;
    padding: 0 10px;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
}

.cond img {
    width: 25px;
    height: 25px;
}

.cond span {
    font-size: 14px;
}

.clear_screen {
    height: 30px;
    display: flex;
    align-items: center;
    margin-left: 15px;
}

.clear_screen img {
    width: 14px;
    height: 14px;
    margin-right: 5px;
}
</style>

