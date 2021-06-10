var box=document.querySelector(".container"),cartList1=localStorage.getItem("cartList1"),name1=getCookie("name"),url;function show1(){var a;0<cartList1.length?(a=`
        <h2>我的购物车 <a href="./list.html" class="btn btn-success">返回华硕商品列表</a></h2>
        <div class="panel panel-default">
            <div class="panel-heading">
                <input type="checkbox" name="quan" ${cartList1.every(t=>1==t.is_select)?"checked":""}>全选
                商品种类：<span>${cartList1.length}</span>
                所选商品数量：<span>${total()[0]}</span>
                所选商品价格：￥<span>${total()[1]}</span>
                <button type="button" class="btn btn-xs btn-info">去结算</button>
                <button type="button" class="btn btn-xs btn-success">清空购物车</button>
            </div>
            <div class="panel-body">
        `,cartList1.forEach(t=>{a+=`
            <div class="media">
                <div class="media-left">
                    <input type="checkbox" name="xuan" ${1==t.is_select?"checked":""} data-id=${t.asus_id}>
                    <a href="#">
                        <img class="media-object" src="${t.asus_imgs}" width="100" height="100">
                    </a>
                </div>
                <div class="media-body width1">
                    <h4 class="media-heading">${t.asus_title}</h4>
                    <h3>￥${t.asus_prices}</h3>
                    <button type="button" class="btn btn-info" data-id=${t.asus_id}>我不要了</button>
                    <div class="btn-group right1" role="group" aria-label="...">
                        <button type="button" class="btn btn-default"${t.cart_number<=1?"disabled":""} data-id=${t.asus_id}>-</button>
                        <button type="button" class="btn btn-default">${t.cart_number}</button>
                        <button type="button" class="btn btn-default" data-id=${t.asus_id}>+</button>
                    </div>
                </div>
            </div>
            `}),a+=`
            </div>
        </div>
        `,box.innerHTML=a):box.innerHTML=`
        <h2>我的购物车 <a href="./list.html" class="btn btn-success">返回列表页</a></h2>
        <div class="jumbotron">
            <h1>您的购物车空空如也</h1>
            <p>点击下方按钮快去选购吧! ^_^</p>
            <p><a class="btn btn-primary btn-lg" href="./list.html" role="button">赶紧去逛逛吧</a></p>
        </div>
        `}function total(){var a=0,s=0;return cartList1.forEach(t=>{1==t.is_select&&(a+=t.cart_number,s+=parseFloat(t.asus_prices)*parseInt(t.cart_number))}),[a,s]}name1?(cartList1=eval("("+cartList1+")"),show1()):(alert("尚未登录，请登录"),url=location.href,location.href="./login.html?newUrl="+url),box.onclick=function(t){var a,s=(t=t||window.event).target||t.srcElement;"+"==s.innerHTML&&(a=s.getAttribute("data-id"),cartList1.forEach(t=>{t.asus_id==a&&t.cart_number++}),localStorage.setItem("cartList1",JSON.stringify(cartList1)),show1()),"-"==s.innerHTML&&(a=s.getAttribute("data-id"),cartList1.forEach(t=>{t.asus_id==a&&t.cart_number--}),localStorage.setItem("cartList1",JSON.stringify(cartList1)),show1()),"我不要了"==s.innerHTML&&(a=s.getAttribute("data-id"),cartList1=cartList1.filter(t=>t.asus_id!=a),localStorage.setItem("cartList1",JSON.stringify(cartList1)),show1()),"quan"==s.name&&(cartList1.forEach(t=>{s.checked?t.is_select=1:t.is_select=0}),localStorage.setItem("cartList1",JSON.stringify(cartList1)),show1()),"xuan"==s.name&&(a=s.getAttribute("data-id"),cartList1.forEach(t=>{t.asus_id==a&&(1==t.is_select?t.is_select=0:t.is_select=1)}),localStorage.setItem("cartList1",JSON.stringify(cartList1)),show1()),"去结算"==s.innerHTML&&(alert("你已支付："+total()[1]),cartList1=cartList1.filter(t=>1!=t.is_select),localStorage.setItem("cartList1",JSON.stringify(cartList1)),show1()),"清空购物车"==s.innerHTML&&(cartList1=[],localStorage.setItem("cartList1",JSON.stringify(cartList1)),show1())};