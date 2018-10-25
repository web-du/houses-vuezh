<template>
    <div id="helpFindHouse">
        <div class="title">帮你找房</div>
        <div class="form">
            <div class="form_line">
                <div class="name fl">意向区域：</div>
                <select name="" id="" class="fl">
                    <option value="">不限</option>
                    <option value="">武汉</option>
                    <option value="">随州</option>
                    <option value="">孝感</option>
                    <option value="">十堰</option>
                </select>
                <img src="@/assets/images/down_icon.png" width="100%" class="down_img" />
                <div class="clear"></div>
            </div>
            <div class="form_line">
                <div class="name fl">意向面积：</div>
                <input type="text" placeholder="请输入您的意向面积">
                <div class="clear"></div>
            </div>
            <div class="form_line">
                <div class="name fl">预算总价：</div>
                <select name="" id="" class="fl">
                    <option value="">200万以下</option>
                    <option value="">200-300万</option>
                    <option value="">300-400万</option>
                    <option value="">400-500万</option>
                    <option value="">500-600万</option>
                </select>
                <img src="@/assets/images/down_icon.png" width="100%" class="down_img" />
                <div class="clear"></div>
            </div>
            <div class="form_line">
                <div class="name fl">手机号码：</div>
                <input type="text" placeholder="请输入您的手机号码">
                <div class="clear"></div>
            </div>
            <div class="form_line this">
                <div class="name fl">验 证 码：</div>
                <div class="send_input fl">
                    <input type="text" placeholder="">
                    <input type="submit" value="发送验证码" class="send">
                </div>
                    <div class="clear"></div>
                </div>
                <button>提交</button>
            </div>
        </div>
</template>

<script>
export default {};
</script>

<style scoped>
#helpFindHouse {
    padding: 0 19px 30px;
    width:320px;
    background: #f1f1f1;
    margin-top: 25px;
}

#helpFindHouse .title {
    line-height: 57px;
    font-size: 18px;
    color: #333;
}

#helpFindHouse .form .form_line {
    margin-bottom: 15px;
    height: 35px;
    width: 100%;
    position: relative;
}

#helpFindHouse .form .form_line .down_img {
    position: absolute;
    top: 15px;
    right: 20px;
    width: 10px;
    height: 5px;
}
#helpFindHouse .form .form_line .name {
    width: 71px;
    text-align: center;
    font-size: 14px;
    color: #666;
    line-height: 35px;
}
#helpFindHouse .form .form_line select {
    width: 200px;
    padding: 0 10px;
    line-height: 35px;
    height: 35px;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    font-size: 14px;
    color: #999;
    border-radius: 0;
    border: 0;
    outline: none;
}
#helpFindHouse .form .form_line input {
    width: 180px;
    padding: 0 10px;
    line-height: 35px;
    height: 35px;
    background: #fff;
    font-size: 14px;
    color: #999;
}
#helpFindHouse .form .form_line .send_input {
    width: 200px;
    background: #fff;
}
#helpFindHouse .form .form_line .send_input input {
    width: 82px;
}
#helpFindHouse .form .form_line input {
    width: 180px;
    padding: 0 10px;
    line-height: 35px;
    height: 35px;
    background: #fff;
    font-size: 14px;
    color: #999;
}
#helpFindHouse .form .form_line .send_input input.send {
    cursor: pointer;
    height: 25px;
    border-left: 1px solid #ebebeb;
    line-height: 25px;
}
#helpFindHouse .form .form_line .send_input input {
    width: 82px;
}
#helpFindHouse .form button {
    width: 100%;
    height: 36px;
    line-height: 36px;
    text-align: center;
    outline: none;
    border: 0;
    background: #e93e0c;
    font-size: 16px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
}
</style>

