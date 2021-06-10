//获取操作对象
var box = document.querySelector(".container");
//获取地址栏中的参数信息
var search1 = location.search;
var dt;
//判断当前地址栏中是否有参数
if (search1) {
    //分割字符串
    var ar1 = search1.split("=");
    //判断当前参数是否为id
    if (ar1[0] == "?id") {
        //获取当前参数的值
        var id = ar1[1];
        (async function () {
            //发送请求，并获取响应结果
            dt = await promiseAjax({
                url: '../php/details.php',
                data: 'id=' + id
            })
            //console.log(dt);
            //把字符串转为对象
            dt = eval('(' + dt + ')');
            //console.log(dt);
            //把数据渲染到页面中
            var str = `
            <h2>电脑详情 <a href="./list.html" class="btn btn-success">返回华硕商品列表</a></h2>
            <div class="panel panel-default">
                <div class="panel-heading">详细信息</div>
                <div class="panel-body">
                    <div class="media">
                        <div class="media-left">
                            <a href="javascript:;">
                                <img class="media-object" src="${dt.asus_imgs}" alt="..." width="200" height="200">
                            </a>
                        </div>
                        <div class="media-body">
                        <h3 class="media-heading">${dt.asus_title}</h3>
                        <h4>${dt.asus_xinxi}</h4>
                        <h3>￥${dt.asus_prices}</h3>
                        <div class="btn-group" role="group" aria-label="...">
                            <button type="button" class="btn btn-default">i5-1035G1/MX330/8G/512G SSD/潮夜森林</button>
                            <button type="button" class="btn btn-default">i5-1035G1/MX350/16G/512G SSD/迷幻海洋</button>
                            <button type="button" class="btn btn-default">i5-1135G7/锐炬Xe/16GB/512GB SSD</button>
                        </div>
                        <br><br>
                        <p><a href="./cart.html" class="btn btn-primary" role="button">立即购买</a> <a href="javascript:;" class="btn btn-default" role="button">加入购物车</a></p>
                        </div>
                        <ul class="nav nav-tabs">
                            <li role="presentation" class="active"><a href="javascript:;">商品详情</a></li>
                            <li role="presentation"><a href="javascript:;">详细参数</a></li>
                            <li role="presentation"><a href="javascript:;">商品评论（639）</a></li>
                        </ul>
                        <img src="../images/hs-xq1.jpg" alt="" width="1100">
                        <img src="../images/hs-xq2.jpg" alt="" width="1100">
                        <img src="../images/hs-xq3.jpg" alt="" width="1100">
                        <img src="../images/hs-xq4.jpg" alt="" width="1100">
                        <img src="../images/hs-xq5.jpg" alt="" width="1100">
                        <img src="../images/hs-xq6.jpg" alt="" width="1100">
                        <img src="../images/hs-xq7.jpg" alt="" width="1100">
                        <img src="../images/hs-xq8.jpg" alt="" width="1100">
                        <img src="../images/hs-xq9.jpg" alt="" width="1100">
                        <img src="../images/hs-xq10.jpg" alt="" width="1100">
                        <img src="../images/hs-xq11.jpg" alt="" width="1100">
                        <img src="../images/hs-xq12.jpg" alt="" width="1100">
                        <img src="../images/hs-xq13.jpg" alt="" width="1100">
                        <img src="../images/hs-xq14.jpg" alt="" width="1100">
                        <img src="../images/hs-xq15.jpg" alt="" width="1100">
                        <img src="../images/hs-xq16.jpg" alt="" width="1100">
                        <img src="../images/hs-xq17.jpg" alt="" width="1100">
                        <img src="../images/hs-xq18.jpg" alt="" width="1100">
                    </div>
                </div>
            </div>            
            `
            box.innerHTML = str;
        })()
    } else {
        alert("参数有误");
        location.href = "./list.html";
    }
} else {
    alert("非法进入，请选择商品");
    location.href = "./list.html";
}

//给大盒子对象绑定点击事件
box.onclick = function (e) {
    //事件对象兼容
    var e = e || window.event;
    //事件目标的兼容
    var target = e.target || e.srcElement;
    //判断当前点击的是否为加入购物车
    if (target.innerHTML == "加入购物车") {
        //获取localStorage中cartList1
        var cartList1 = localStorage.getItem("cartList1") || [];
        //判断当前cartList1是否存在
        if (cartList1.length > 0) {
            //把cartList1转为数组对象
            cartList1 = eval('(' + cartList1 + ')');
            //是否有相同的商品
            var bool = true;
            //遍历数组
            cartList1.forEach(item => {
                //判断当前遍历的商品是否跟添加的商品相同
                if (dt.asus_id == item.asus_id) {
                    bool = false
                    //让当前的商品数量加1
                    item.cart_number++
                    //重新给localStorage设置键值对
                    localStorage.setItem("cartList1", JSON.stringify(cartList1))
                }
            })
            //判断bool是否为true
            if (bool) {
                //修改dt对象中的数量
                dt.cart_number = 1
                //把当前商品追加到cartList1中
                cartList1.push(dt)
                //重新给localStorage设置键值对
                localStorage.setItem("cartList1", JSON.stringify(cartList1))
            }
        } else {
            //修改dt对象中的数量
            dt.cart_number = 1;
            //把当前商品追加到cartList1中
            cartList1.push(dt);
            //重新给localStorage设置键值对
            localStorage.setItem("cartList1", JSON.stringify(cartList1));
        }
    }
}