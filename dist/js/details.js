var box=document.querySelector(".container"),search1=location.search,dt,ar1,id;search1?(ar1=search1.split("="),"?id"==ar1[0]?(id=ar1[1],async function(){dt=await promiseAjax({url:"../php/details.php",data:"id="+id}),dt=eval("("+dt+")");var str=`
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
            `;box.innerHTML=str}()):(alert("参数有误"),location.href="./list.html")):(alert("非法进入，请选择商品"),location.href="./list.html"),box.onclick=function(e){var e=e||window.event,target=e.target||e.srcElement,cartList1,cartList1,bool;"加入购物车"==target.innerHTML&&(cartList1=localStorage.getItem("cartList1")||[],0<cartList1.length?(cartList1=eval("("+cartList1+")"),bool=!0,cartList1.forEach(t=>{dt.asus_id==t.asus_id&&(bool=!1,t.cart_number++,localStorage.setItem("cartList1",JSON.stringify(cartList1)))}),bool&&(dt.cart_number=1,cartList1.push(dt),localStorage.setItem("cartList1",JSON.stringify(cartList1)))):(dt.cart_number=1,cartList1.push(dt),localStorage.setItem("cartList1",JSON.stringify(cartList1))))};