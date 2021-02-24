// 使用defer会无法再往document写东西
// document.write("It is time to study javascript");
var x = document.getElementsByTagName("p");

for(var i = 0;i<x.length;i++)
{
    x[i].innerText = "你的脚本已经运行成功"
}