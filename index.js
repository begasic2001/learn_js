/*
1. toString
2. join
3. pop -> khi dung pop thi se in ra gia tri bi day ra khoi mang
4. push -> in ra chieu dai moi cua mang
5. shift
6. unshift
7. splice
8. slice
9. concat
*/



function isPrimeNumber(x){
    var flag = false
    if(x < 2){
        flag = false
    }else{
        for(var i = 2; i < 4 ;i++){
            if(x % 3 == 0){
                 flag = false
            }
        }
    }
    return true
}

isPrimeNumber(5)

var arr = [1,2,3,4,5,6,7,8,9,10]
var tong = 0
for(var i=0 ;i <arr.length; i++){
   tong = tong + arr[i]
}


function calculate(start,end){
    var tich = 1
    for(var i = start; i < end ; i++){
        tich = tich * i
    }
    return tich
}

var result = calculate(2,5)
console.log(result);







