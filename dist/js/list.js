var row=document.querySelector(".row"),pagination=document.querySelector(".pagination");!async function(){var arr=await promiseAjax({url:"../php/list.php"}),arr=eval("("+arr+")"),o1={pageInfo:{pagenum:1,pagesize:9,totalsize:arr.length,totalpage:Math.ceil(arr.length/9)},textInfo:{first:"首页",prev:"上一页",next:"下一页",last:"尾页"}};new Pagination(pagination,o1,a=>{var a=arr.slice(9*(a-1),9*a),t="";a.forEach(a=>{t+=`
            <div class="col-sm-3 col-md-4">
                <div class="thumbnail">
                    <ol class="breadcrumb title1">
                        <li><a href="#">华硕</a></li>
                        <li><a href="#">其他</a></li>
                        <li class="active">Data</li>
                    </ol>
                    <img src="${a.asus_imgs}" alt="...">
                    <div class="caption">
                        <h4 class="title1">${a.asus_title}</h4>
                        <p>￥${a.asus_prices}</p>
                        <p><a href="./cart.html" class="btn btn-primary" role="button">进入购物车</a> <a href="./details.html?id=${a.asus_id}" class="btn btn-default" role="button">查看商品详情</a></p>
                    </div>
                </div>
            </div>
            `}),row.innerHTML=t})}();