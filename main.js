/**
 * 1: Kiểm tra xem một số có phải là số nguyên tố lớn không. Nếu có, in ra số nguyên tố lớn nhất trong khoảng từ 1 đến
  số đó.
  Input: 20
  Output: 19
  Input: 15
  Output: 13
 */
function isPrime(a){
    for(let i=2;i<a;i++){
        if(a%i===0){
            return false;
        }
      
        
    }
      if(a===1){
            return false;
        }
    return true; /* Check coi dieu kien tra ve cuoi cung co nam ben ngoai vong lap for khong */
}

function biggestPrimeNumber( number ){
    let max=2;
    for( let i=1; i<= number;i++){
        if(isPrime(i)){
            if(i>max){
               max=i;
            }
        }
     }
    return max;
}
console.log(biggestPrimeNumber(20));

/**
 * Bài 2: Tìm tất cả các cặp số (a, b) sao cho a và b là số nguyên tố và a + b = n, với n là số nguyên dương cho trước.
  Input: 10
  Output: (3, 7)
  Input: 20
  Output: (3, 17), (7, 13)
 */
  function bai2(number){
    let arr=[];
    let string="";
    for(let i=2; i<=number/2; i++){
        if(isPrime(i)){
            for(let j=2; j<=number; j++){
               if(isPrime(j)){
                 if(i+j===number&& i!==j){
                    string=`(${i},${j})`;
                   arr.push(string);
                   
                }
               }
            }
        }
    }
    console.log(arr.toString());
  }
 


/* Cach 2 */
function bai2u(number){
    let arr=[];
    let string="";
    for(let i=2;i<=number/2;i++){
        let b= number-i;
        if(isPrime(i)&&isPrime(b)&&((i+b)===number)&&i!==b){
              string=`(${i},${b})`;
              arr.push(string);
        }
    }
    console.log(arr.toString());
}

/**
 * 3: Viết một hàm nhận vào một tham số là một mảng các phần tử là số, trả về số lớn nhất trong
mảng
*/

function maxNumberInArray(numbers){
    let max=numbers[0];
    for(let value of numbers){
        if(value > max){
            max=value;
        }
    }
    return max;
}


/**
 * Bài 4: cho mảng number: const arrNumber = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
nếu phần tử trong mảng chẵn thì cho vào mảng evenNumbers = [] => kết quả evenNumber = [4,44,64,24,32,74,22]
và ngược lại lấy số lẻ cho vào mảng oddNumbers
 */
const arrNumber = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
function evenNumbers(numbers){
    let arr=[];
    for( let value of numbers){
        if(value%2===0){
           arr.push(value);
        }
    }
    return arr;
}
function oddNumbers(numbers){
    let arr=[];
    for( let value of numbers){
        if(value%2!==0){
           arr.push(value);
        }
    }
    return arr;
}
console.log("So chan la: "+evenNumbers(arrNumber));
console.log("So le la: "+oddNumbers(arrNumber));
/**
 * B5: Cho một mảng nums gồm các số nguyên, hãy trả về số lượng các số trong mảng đó có số chữ số chẵn.
 *
  Đầu vào: nums = [12,345,2,6,7896]
  Đầu ra: 2
  Giải thích:
    12 có 2 chữ số (số chữ số chẵn).
    345 có 3 chữ số (số chữ số lẻ).
    2 có 1 chữ số (số chữ số lẻ).
    6 có 1 chữ số (số chữ số lẻ).
    7896 có 4 chữ số (số chữ số chẵn).
    Do đó, chỉ có 12 và 7896 có số chữ số chẵn.
 */
function countNumber(numbers){
    let countOut=0;
    for(let i=0;i<numbers.length;i++ ){
        let countIn=0;
        let n=numbers[i];
        while(n!==0){
            countIn++;
            n=Math.floor(n/10);
        }
        if(countIn%2===0){
            countOut++;
        }
    }
    return countOut;
}
console.log(countNumber([12,3464,22,6,7896]));
/*
B6: cho mảng a và b
  const a = ["A", "B", "C"]; .
  const b = [1, 2, 3];
  từ mảng a và b tạo ra mảng c có dạng như sau:
      let c = [
        { value: "A1", id: 1 },
        { value: "B2", id: 2 },
        { value: "C3", id: 3 },
      ];
*/

const a = ["A", "B", "C"]; 
  const b = [1, 2, 3];
  function createC(a,b){
    const c=[];
    for(let i=0;i<a.length;i++){
        let user={
            value: a[i]+b[i], id: b[i],
        }
        c.push(user);
    }
    return c;
  }
  console.log(createC(a,b));

/**
 * B7: cho mảng users sau
 * const users = [
  {
    id: 1,
    name: "A",
    gender: "nam",
  },
  {
    id: 2,
    name: "B",
    gender: "nữ",
  },
  {
    id: 3,
    name: "C",
    gender: "nam",
  },
  {
    id: 4,
    name: "D",
    gender: "nam",
  },
];

hãy tạo ra mảng mới newUsers
   const newUsers = [
      {human:"A1",gender:"nam"},
      {human:"C3",gender:"nam"},
      {human:"D4",gender:"nam"}
   ]
 */
function createNewUser(users){
    let arr=[];
    for(let i=0; i<users.length;i++){
        if(i===1){
            continue;
        }else {
            const user={
                human: users[i].name+users[i].id ,
                gender: users[i].gender,
            }
            arr.push(user);
        }
    }
    return arr;
}
const users = [
  {
    id: 1,
    name: "A",
    gender: "nam",
  },
  {
    id: 2,
    name: "B",
    gender: "nữ",
  },
  {
    id: 3,
    name: "C",
    gender: "nam",
  },
  {
    id: 4,
    name: "D",
    gender: "nam",
  },
];
console.log(createNewUser(users));
/**
 * câu 8: const number = [2, -5, 6, -7, -4, 7, -1, -1];
        a: tính trung bình cộng số âm
        b: in ra danh sách các số âm lớn hơn giá trị tính ở ý a
        c: tìm số âm lớn nhất trong mảng
 */
function isNegativeNumber(number){
    if(number>=0){
        return false;
    }
    return true;
}
function avgs(numbers){
    let sum=0;
    let count=0;
    for(value of numbers){
        if(isNegativeNumber(value)){
            sum+=value;
            count++;
        }
    }
    return sum/count;
}
const number = [2, -5, 6, -7, -4, 7, -1, -1];
function negativeBigger(numbers){
    let avg=avgs(number);
    let max=avg;
    let arr=[];
    for(value of numbers){
        if(value>avg&&isNegativeNumber(value)&&value>max){
            max=value;
            console.log(max);
        }
    }
  
}
negativeBigger(number);

function filterNegativeNumber(numbers){
    let arr=[];
    for(value of numbers){
        if(isNegativeNumber(value)){
             arr.push(value);
        }
    }
    return arr;
}
function findMaxNegative(numbers){
    let arr=filterNegativeNumber(numbers);
 let max=arr[0];
 for(value of arr){
    if(value>max){
        max=value;
    }
 }
 return max;
}
console.log("Max: "+findMaxNegative(number));
/**
 *  câu 9: Loại bỏ các phần tử trùng lặp trong mảng let numbers = [1, 2, 3, 4, 2, 5, 6, 1, 3]; tìm hiểu includes hoặc indexOF hoặc ko dùng 2 hàm đó
 */
let numbersx = [1, 2, 3, 4, 2, 5, 6, 1, 3]; 
function removeRepeatation(numbers){
    let arr=[];
 for(value of numbers){
    if(!arr.includes(value)){
        arr.push(value);
    }
 }
 return arr;
}
console.log(removeRepeatation(numbersx));
/**
 * Câu 10: Viết 1 hàm nhận vào 1 mảng và 1 số nguyên dương n
 * sau đó trả về mảng mới chứa các mảng con có kích thước n.
 * let mangSo = [1,2,3,4,5,6,7,8,9]
 * kích thước n = 3
 * viết 1 hàm tachMangCao(mangSo,3)
 * kết quả: [[1,2,3],[4,5,6],[7,8,9]]
 * Con cach 2 cua chat gpt;
 */
function as(arr,n){
   let array=[];
   while(arr.length!==0){
     let arr2=[];
    let count=0;
    while(arr.length!==0){
        
        arr2.push(arr.shift());
        count++;
        
        if(count===n){
             array.push(arr2);
             break;
        }
       
    }
   }
   return array;
}
function as2(arrays, number){
    let arr=[];
    for(let i=0;i<arrays.length;i+=number){ /*notice */
        arr.push(arrays.slice(i,i+number));
    }
    return arr;
}
console.log(as2([1,2,3,4,5,6,7,8,9],3));
/**
 * Câu 11: đếm số lượng phần tử trong mảng
 * const lang = ["php","js","c++","java","php","js","php"]
 * output 
 *  { key: value,
 *    php:3,
 *    js:2,
 *    java:1,
 *    c++:1
 *  }
 */
function countApear(arrays){
    const languages={};
    for(value of arrays){ /* La gia tri trong mang se dong vai tro la key */
        languages[value]=(languages[value]??0)+1;
    }
    return languages;
}
console.log(countApear(["php","js","c++","java","php","js","php"]));


/**
 * Bài 1: Tìm phần tử xuất hiện nhiều nhất trong mảng
 * input = 1,2,2,3,3,3,4,4,4,4,4]
 * ouput = 3
 * gợi ý: Dùng object để đếm
 */
function findMostAppear(arrays){
    const count={};
    let max=0;
    let result;
    for(value of arrays){
        count[value]=(count[value]??0)+1;
    }
    for(key in count){
          if(count[key]>max){
            max=count[key];
            result=key;
          }
    }
    return result;
}
console.log("La so: "+findMostAppear([1,2,2,3,3,3,3,3,4,4,4,4,4]));
/**
 * Bài 2: Xóa tất cả số âm trong mảng 
 * [3, -1, 5, -2] → [3, 5] (Mảng mới)
 */
function deleteWay1(arrays){
    const arr=[];
    for(value of arrays){
        if(value >= 0){
            arr.push(value);
        }
    }
    return arr;
}
function deleteWay2(arrays){
    let arr=[];
   arr= arrays.filter((value,index)=> value>=0);
    return arr;
}
console.log("Cach 1: "+deleteWay1([3, -1, 5, -2]));
console.log("Cach 2: "+ deleteWay2([3, -1, 5, -2]));



/**
 * Bài 3: Đếm số phần tử âm trong mảng
 */
function countWay1(arrays){
    let count=0;
    for(value of arrays){
        if(value<0){
            count++;
        }
    }
    return count;
}
function countWay2(arrays){
    let count=0;
    let arr=[];
    arr=arrays.filter((currentValue,index)=> {
        return currentValue<0;
    }
    )
    return arr.length;
}
console.log("So am la: "+ countWay1([3, -1, 5, -2, 0, -1]));
console.log("So am la: "+ countWay2([3, -1, 5, -2, 0, -1]))
/**
 * Bài 4: Nhân đôi mỗi phần tử trong mảng ( tạo mảng mới)
 * 
 */
function x2(arrays){
    let arr=arrays.map((currentValue)=>{
       return currentValue=currentValue*2; /* phai return */
    });
    return arr;
}
console.log(x2([3, -1, 5, -2, 0, -1]));
/**
 * Bài 5: Thay thế số âm bằng 0
 * [3,-2,5,-1] → [3,0,5,0]
 */
function replaceNegativeToZero(arrays){
    let arr=arrays;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            arr[i]=0;
        }
    }
    return arr;
}
console.log(replaceNegativeToZero([3, -1, 5, -2, 0, -1]));
/**
 * Bài 6: Tìm số chẵn lớn nhất trong mảng
 * [3, 8, 2, 11, 6] → 8
 */
function isEvenNumber(number){
    if(number%2===0){
        return true;
    }
    return false;
}
function findMax(arrays){
    let max=arrays[0];
    for(value of arrays){
        if(isEvenNumber(value)&&value>max){
            max=value;
        }
    }
    return max;
}
console.log(findMax([3, 8, 2, 11, 6]));


/**
 * Bài 7: Tìm số lớn thứ 2 trong mảng
 * let arr = [5, 9, 2, 8, 7]; => 8
 * 
 */
function findTheSecondBiggest(arrays){
    let arr= arrays.sort((a,b)=> b-a);
    let max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==max){
            return arr[i];
        }
        
    }
}
console.log("So lon thu 2 la: "+findTheSecondBiggest([5, 9, 2, 8, 7, 10, 11]));