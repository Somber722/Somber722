// 获取操作对象
var box = document.querySelector(".container");
// 获取localStorage中是否有cartList1
var cartList1 = localStorage.getItem("cartList1");
// 获取cookie
var name1 = getCookie("name");
// 判断姓名是否存在
if (name1) {
    // 转为对象
    cartList1 = eval('(' + cartList1 + ')');
    //cartList1 = [];
    show1();
} else {
    alert("尚未登录，请登录")
    // 获取当前地址栏信息
    var url = location.href;
    location.href = './login.html?newUrl=' + url;
}
function show1() {
    // 判断当前是否有数据
    if (cartList1.length > 0) {
        //判断是否所有的商品中is_select都为1
        var bool = cartList1.every(item => {
            return item.is_select == 1
        })
        // 拼接字符串
        var str2 = `
        <h2>我的购物车 <a href="./list.html" class="btn btn-success">返回华硕商品列表</a></h2>
        <div class="panel panel-default">
            <div class="panel-heading">
                <input type="checkbox" name="quan" ${bool ? "checked" : ''}>全选
                商品种类：<span>${cartList1.length}</span>
                所选商品数量：<span>${total()[0]}</span>
                所选商品价格：￥<span>${total()[1]}</span>
                <button type="button" class="btn btn-xs btn-info">去结算</button>
                <button type="button" class="btn btn-xs btn-success">清空购物车</button>
            </div>
            <div class="panel-body">
        `
        //遍历数组中所有元素
        cartList1.forEach(item => {
            str2 += `
            <div class="media">
                <div class="media-left">
                    <input type="checkbox" name="xuan" ${item.is_select == 1 ? "checked" : ''} data-id=${item.asus_id}>
                    <a href="#">
                        <img class="media-object" src="${item.asus_imgs}" width="100" height="100">
                    </a>
                </div>
                <div class="media-body width1">
                    <h4 class="media-heading">${item.asus_title}</h4>
                    <h3>￥${item.asus_prices}</h3>
                    <button type="button" class="btn btn-info" data-id=${item.asus_id}>我不要了</button>
                    <div class="btn-group right1" role="group" aria-label="...">
                        <button type="button" class="btn btn-default"${item.cart_number <= 1 ? "disabled" : ''} data-id=${item.asus_id}>-</button>
                        <button type="button" class="btn btn-default">${item.cart_number}</button>
                        <button type="button" class="btn btn-default" data-id=${item.asus_id}>+</button>
                    </div>
                </div>
            </div>
            `
        })
        str2 += `
            </div>
        </div>
        `
        //把所有拼接好的内容，渲染到页面中
        box.innerHTML = str2;
    } else {
        var str = `
        <h2>我的购物车 <a href="./list.html" class="btn btn-success">返回列表页</a></h2>
        <div class="jumbotron">
            <h1>您的购物车空空如也</h1>
            <p>点击下方按钮快去选购吧! ^_^</p>
            <p><a class="btn btn-primary btn-lg" href="./list.html" role="button">赶紧去逛逛吧</a></p>
        </div>
        `
        // 把当前字符串渲染到页面中
        box.innerHTML = str;
    }
}

// 给box大盒子对象绑定点击事件
box.onclick = function (e) {
    //事件对象兼容
    var e = e || window.event;
    //目标对象兼容
    var target = e.target || e.srcElement;
    //判断点击的是否为加法按钮
    if (target.innerHTML == '+') {
        // 获取当前操作对的id属性值
        var id = target.getAttribute("data-id");
        // 操作cartList1中指定的数据
        cartList1.forEach(item => {
            //判断是否为当前要操作的商品
            if (item.asus_id == id) {
                item.cart_number++;
            }
        })
        //把修改完毕的cartList1重新存储在localStorage中
        localStorage.setItem("cartList1", JSON.stringify(cartList1));
        show1();
    }
    // 减法
    if (target.innerHTML == '-') {
        //获取id
        var id = target.getAttribute("data-id")
        //操作cartList1中指定的数据
        cartList1.forEach(item => {
            //判断是否为当前要操作的商品
            if (item.asus_id == id) {
                item.cart_number--;
            }
        })
        //把修改完毕的cartList1重新存储在localStorage中
        localStorage.setItem("cartList1", JSON.stringify(cartList1));
        show1();
    }
    // 删除
    if (target.innerHTML == "我不要了") {
        //获取id属性值
        var id = target.getAttribute("data-id");
        cartList1 = cartList1.filter(item => {
            return item.asus_id != id;
        })
        //把修改完毕的cartList1重新存储在localStorage中
        localStorage.setItem("cartList1", JSON.stringify(cartList1));
        show1();
    }
    //判断是否为全选框
    if (target.name == "quan") {
        //遍历所有商品
        cartList1.forEach(item => {
            //判断当前全选框是否被选中
            if (target.checked) {
                item.is_select = 1
            } else {
                item.is_select = 0
            }
        })
        //把修改完毕的cartList1重新存储在localStorage中
        localStorage.setItem("cartList1", JSON.stringify(cartList1));
        show1();
    }
    //判断点击的是否为选中框对象
    if (target.name == "xuan") {
        //获取当前选中框对象的id属性
        var id = target.getAttribute('data-id');
        //遍历数组元素
        //遍历所有商品
        cartList1.forEach(item => {
            //判断是否为当前要操作的商品
            if (item.asus_id == id) {
                //判断当前商品中is_select是否等于1
                if (item.is_select == 1) {
                    item.is_select = 0;
                } else {
                    item.is_select = 1;
                }
            }
        })
        //把修改完毕的cartList1重新存储在localStorage中
        localStorage.setItem("cartList1", JSON.stringify(cartList1));
        show1();
    }
    // 去结算
    if (target.innerHTML == '去结算') {
        alert("你已支付：" + total()[1]);
        //过滤不满足条件的商品
        cartList1 = cartList1.filter(item => {
            return item.is_select != 1;
        })
        //把修改完毕的cartList1重新存储在localStorage中
        localStorage.setItem("cartList1", JSON.stringify(cartList1));
        show1();
    }
    // 清空购物车
    if (target.innerHTML == "清空购物车") {
        cartList1 = [];
        //把修改完毕的cartList1重新存储在localStorage中
        localStorage.setItem("cartList1", JSON.stringify(cartList1));
        show1();
    }
}

// 计算所选商品价格和数量
function total() {
    // 所选商品数量
    var nums = 0;
    // 所选商品价格
    var prices = 0;
    //遍历所有商品
    cartList1.forEach(item => {
        // 判断当前商品是否被选中
        if (item.is_select == 1) {
            nums += item.cart_number;
            prices += parseFloat(item.asus_prices) * parseInt(item.cart_number);
        }
    })
    return [nums, prices];
}