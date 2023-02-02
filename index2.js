/* hoc truoc kien callback trong function 
1. map
2. forEach
3. filter
4. find
5. some
6. every
7. reduce
*/

var languageArr = [
    {
        id:1,
        name:"Kim Anh 2",
    },
    {
        id:2,
        name:"Minh Thanh 2",
    },
    {
        id:3,
        name:"Minh Thuy 2",
    },
    {
        id:4,
        name:"Minh An 2",
    },
];

// map() nhận vào 1 hàm và nhận biến trong hàm đại diện cho mỗi phần tử trong mảng và tạo ra mảng mới
// clone

var result = languageArr.map(function(item){
    return item.name
})

// console.log(result);


// callback : Là hàm dược truyền qua đối số
// var a =1
// var b =2



function kimanh(){
    console.log("Vi du ve callback lan 2");
}
function minhthanh(kimanh){
   // console.log("Vi du ve callback");
kimanh() 

}

minhthanh(kimanh)

// Khi gọi thì 2 hàm này trả ra kết quả như nhau . Để tối ưu code , ta dùng hàm kimanh() để gọi lại trong hàm cha minhthanh() 
// để xuất ra giá trị cần thiết







