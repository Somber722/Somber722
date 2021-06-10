<?php
header("content-type:text/html;charset=utf-8");
// 连接数据库
$link=mysqli_connect("localhost",'root','','aaa');
/* //检查数据库连接是否成功
if(mysqli_connect_error($link)){
    echo "连接失败";
}else{
    echo "连接成功";
} */
// 设置编码
mysqli_set_charset($link,"utf8");
?>