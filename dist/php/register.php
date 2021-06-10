<?php
include "./datas.php";
// 获取传入的数据
$u=$_GET['username'];
$p=$_GET['password'];
//echo $u,$p;

// 编写SQL语句
$sql="insert into user(name,pass)values('$u',$p)";
// 执行SQL语句
$result=mysqli_query($link,$sql);
// 判断当前数据是否添加成功
if($result){
    header("location:../pages/login.html");
}else{
    echo "<script>alert('注册失败');location.herf='../pages/register.html'</script>";
}
// 关闭数据库连接
mysqli_close($link);
?>