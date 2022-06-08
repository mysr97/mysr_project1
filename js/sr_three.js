// 가격 계산
function pdt() {
    var basic_product = Number(document.getElementById("total").defaultValue);

    for(var i=1; i<=6; i++){
        var eleObj = document.getElementById("opt"+i);
        if(eleObj.checked) basic_product+=Number(eleObj.value);
    }
    document.getElementById("total").value = basic_product.toLocaleString()+"원";
};