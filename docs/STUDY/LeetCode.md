# 力扣刷题

### [1480. 一维数组的动态和](https://leetcode-cn.com/problems/running-sum-of-1d-array/)

![image-20210903163015252](http://i0.hdslb.com/bfs/album/a65f723a67c1ffbc5d2c210523c3d43e635c7601.png)

``` js
// 方法一 对数组每一项迭代求前面的和,性能比较差,每次都会加重复累加上次的和
function runningSum(nums) {
	return nums.map((item,index) => nums.slice(0,index + 1).reduce((acc,item) => acc + item, 0))
}

// 方法二 遍历数组
function runningSum(nums) {
  let res = [], sum = 0;
  for(let item of nums) {
    sum += item
    res.push(s)
  }
  return res
}
```

### [136. 只出现一次的数字](https://leetcode-cn.com/problems/single-number/)

![image-20210906010418140](http://i0.hdslb.com/bfs/album/829664eabbfee5f8387b44d681ee3aa6c6bf84b7.png)

``` js
function singleNumber(nums) {
  let arr = nums.sort()
  while(arr.length > 0) {
    let start = arr.shift()
    let end = arr.shift()
    if(start !== end && !arr.includes(start)) {
      return s
    }
  }
}
```

### [977. 有序数组的平方](https://leetcode-cn.com/problems/squares-of-a-sorted-array/)

![image-20210906101536449](http://i0.hdslb.com/bfs/album/d69f92aee9a0833eab927fb919e072449a81e35d.png)

``` js
function sortSquares(nums) {
  return nums.map(i => i * i).sort((a,b) => a - b)
}
```

### [1491. 去掉最低工资和最高工资后的工资平均值](https://leetcode-cn.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/)

![image-20210906104441186](http://i0.hdslb.com/bfs/album/ad69f7005623149346e7f275ba23a509d9d54fa7.png)

``` js
// 数组排序 ==> 去掉头尾 ==> reduce求和 ==> 取平均数
function avarage(salary) {
  let arr = salary.sort((a,b) => a - b)
  arr.pop()
  arr.shift()
  return arr.reduce((acc,item) => acc + item , 0) / arr.length
}

// 数组找出最大最小值 ==> 数组遍历求和 ==> 去掉最大最小值后的和取平均值
function average(salary) {
  let max = Math.max(...salary)
  let min = Math.min(...salary)
  let sum = 0
  for(let item of salary) {
		sum += item
  }
  return (sum - max - min) / (salary.length - 2)
}
```

### [1470. 重新排列数组](https://leetcode-cn.com/problems/shuffle-the-array/)

![image-20210906115115797](http://i0.hdslb.com/bfs/album/1a2bd69e7f1fecbf73bb9c6b78584b009df905d8.png)

``` js
// 数组从中间切开 ==> 遍历数组元素 ==> 每次遍历添加后半段数组的头部元素
function shuffle(nums,n) {
	let arr1 = nums.slice(0,n)
  let arr2 = nums.slice(-n)
  let res = []
  for(let item of arr1) {
    res.push(item,arr2.shift())
  }
  return res
}

// 一行流解法: 取数组后面半段 ==> 对每个元素进行map返回新元素 ==>使用flat扁平化数组
function shuffle(nums,n) {
  return nums.slice(-n).map((item,index) => [nums[index],item]).flat()
}
```

### [414. 第三大的数](https://leetcode-cn.com/problems/third-maximum-number/)

![image-20210907005441567](http://i0.hdslb.com/bfs/album/86434757fdd90ea08fd655a4c9da370b49fead73.png)

``` js
// 第一次解的时候没发现相同大小的数组元素不能用作比较大小,最大的三个数必须是各不相同的,所以第一步需要对数组去重

/* 方法一 */
function thirdMax(nums) {
  let arr = [...new Set(nums)].sort((a,b) => a - b).slice(-3)
  return arr.length < 3 ? arr.pop() : arr[0];
}	

/* 方法二 */
var thirdMax = function(nums) {
  let arr = [...new Set(nums)]           
  if(arr.length < 3) {
    return Math.max(...arr)
  }                                               // 没啥讲的,数组去重判断返回
  for(let i = 0; i < 3; i++) {                  // 冒泡三次,最大的三个数依次在尾部归位
    for(let j = 0; j < arr.length - 1; j++) {       
      if(arr[j] > arr[j+1]) {
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]   // 结构语法交换两元素位置,就不需要引入第三变量了
      }
    }
  }
  return arr[arr.length - 3]            // 直接返回第三大元素
};

/* 方法三 */
var thirdMax = function(nums) {
  let arr = [...new Set(nums)];   // 数组去重
  if(arr.length < 3) {        
    return Math.max(...arr)       // 长度小于三直接返回最大值
  }     
  arr.splice(arr.indexOf(Math.max(...arr)),1)     // 删除掉数组最大数
  arr.splice(arr.indexOf(Math.max(...arr)),1)     // 删除数组中第二大数
  return Math.max(...arr)                         // 返回第三大
}; 
```

### [268. 丢失的数字](https://leetcode-cn.com/problems/missing-number/)

![image-20210911002110978](http://i0.hdslb.com/bfs/album/15c18390735e28352ca721c8e3ff80d5877ce7f0.png)

``` js
// 方法一, 求出范围内的数组 ==> 过滤出数组中不包含的元素
function missingNumber(nums) {
	let arr = []
  for(let i = 0; i <= nums.length; i++) {
		arr.push(i)
  }
  return arr.filter(item => !nums.includes(item))
}

// 方法二 原本应该的数组和减去现在数组和
function missingNumber(nums) {
	let sum = 0
  for(let i = 0; i <= nums.length; i++) {
    sum += i
  }
  return sum - n
}
```

### [1. 两数之和](https://leetcode-cn.com/problems/two-sum/)

![image-20210919011550412](http://i0.hdslb.com/bfs/album/caea4fcfa03f3a3776c792182bfc178ad8c1ccb8.png)

``` js
// 方法一, 双重循环遍历暴力解法
function twoSum(nums,target) {
  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      if((target - nums[i]) === nums[j]) {
        return []
      }
    }
  }
}
```

### [283. 移动零](https://leetcode-cn.com/problems/move-zeroes/)

![image-20211225162052079](http://i0.hdslb.com/bfs/album/767e30ec7ed4c09a90ce09fa1df7c15bee898f79.png)

**思路:**

读写双指针,一个慢指针表示写指针,用一个快指针表示读指针,

遍历数组,遇到非0的数,将读到的值写入写指针,触发写指针改写并移动(其他情况下指针不动),读指针走到头算法结束,遍历一遍完成后,写指针的位置前面就是所有非 0 的数, 最后再将写指针后面的位置都修改为 0

![Animation.gif](https://github.com/MisterBooo/LeetCodeAnimation/blob/master/0283-Move-Zeroes/Animation/Animation.gif?raw=true)

``` js
let moveZeroes = function (nums) {
  let write = 0;        // 设置默认开始时写指针的位置
  nums.forEach((item, index) => {     // 遍历数组
    if (item !== 0) {           
      nums[write] = item        // 如果遍历的值不是0 则写指针改写值,并且指针位置下次右移动
      write++
    }
  });               // 此时写指针之前都是遍历到的非0数
  for (let i = write; i < nums.length; i++) {
    nums[i] = 0           // 修改写指针后面的所有数为0
  }
  return nums
}
```

### [27. 移除元素](https://leetcode-cn.com/problems/remove-element/)

![image-20211225173139804](http://i0.hdslb.com/bfs/album/2d889e499a719d62db3cb6d8efb84fb51cae1073.png)

``` js
var removeElement = function (nums, val) {
  let index = 0           // 定义写指针
  for (let item of nums) {      // 遍历数组,如果遍历的值和目标不等,则写指针写入该值
    if (item !== val) {
      nums[index] = item;         
      index++             // 改写完成后,对写指针后移
    }
  }                 // 非目标元素已全部移动到写指针前方
  nums.splice(index, nums.length)     // 直接切掉指针后方的无用元素
  return nums.length
};
```

### [287. 寻找重复数](https://leetcode-cn.com/problems/find-the-duplicate-number/)

![image-20211225223018280](http://i0.hdslb.com/bfs/album/5d0bbdc2dccb92ea90ac05b845aa08aac3bfaecc.png)

``` js
var findDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {       // 外层循环控制左指针
    for (let j = i + 1; j < nums.length; j++) {   // 内层循环遍历左指针右侧的值
      if (nums[i] === nums[j]) {          // 判断左右指针是否相等
        return nums[i]
      }
    }
  }
};
```

### [125. 验证回文串](https://leetcode-cn.com/problems/valid-palindrome/)

![image-20211226140129733](http://i0.hdslb.com/bfs/album/927f0c79df158f8309fd6da6249ac91eff2dafee.png)

**思路**

* 对字符串预处理后,翻转字符串后与原字符串做比较

``` js
var isPalidrome = function(s) {
  s = s.toLocaleLowerCase();    // 字符串都小写
  let str = ''
  for (let i = 0; i < s.length; i++) {
    let zg = /^[0-9a-zA-Z]*$/;      // 使用正则表达式匹配其中的字母和数字
    if (zg.test(s[i])) {
      str += s[i]
    }
  }               // 得到处理好的正常字符串
  let revesedStr = str.split('').reverse().join('')
  return str === revesedStr;
}
```

* 使用双指针,左指针从前往后移动,右指针从后往前移动,如果相同则继续移动判断下个字符; 这样一直移动到两个指针相遇

``` js
var isPalindrome = function (s) {
  s = s.toLocaleLowerCase();    // 字符串都小写
  let str = ''
  for (let i = 0; i < s.length; i++) {
    let zg = /^[0-9a-zA-Z]*$/;      // 使用正则表达式匹配其中的字母和数字
    if (zg.test(s[i])) {
      str += s[i]
    }
  }               // 得到处理好的正常字符串
  for(let i = 0; i < Math.ceil(str.length - 1); i++) {	 // 双指针从前往后遍历字符串只需要遍历字符串的中间
    if(str[i] !== str[str.length - 1 - i]) {        // 如果左右指针一但不相等则直接不是回文
      return false
    }
  }
  return true;
};
```

### [2000. 反转单词前缀](https://leetcode-cn.com/problems/reverse-prefix-of-word/)

![image-20211226161455523](http://i0.hdslb.com/bfs/album/ade76247e4c37d298298e65916e4d57ce6503630.png)

* 思路一

对字符串分割为数组,如果数组中不包含字符直接返回字符串,否则就找到字符串中的下标,截取前面的部分进行翻转最后对结果合并返回

``` js
var reversePrefix = function (word, ch) {
  let arr = word.split('') 
  return !arr.includes(ch) ? word : [...arr.splice(0, arr.indexOf(ch) + 1).reverse(), ...arr].join('');
};
```

### [507. 完美数](https://leetcode-cn.com/problems/perfect-number/)

![image-20211227092915402](http://i0.hdslb.com/bfs/album/3efaf592bd4762542b9be0b2b99974ccd8e34de4.png)

* 穷举法: 遍历小于num的所有数,判断其是否为num的质因子.累加所有的质因子

``` js
var checkPerfectNumber = function(num) {
  let res = 0;
  for(let i = 1; i <= num / 2; i++) {				// 数字的只需要遍历到一半的数据就行
    if(num % i === 0) {
      res += i
    }
  }
  return res === num ? true : false;
}
```

### [412. Fizz Buzz](https://leetcode-cn.com/problems/fizz-buzz/)

![image-20211227095149282](http://i0.hdslb.com/bfs/album/f3ab7671a62f89ae7d88129cd0082c31e6d03ef7.png)

``` js
var fizzBuzz = function(n) {
  let arr = [];
  for(let i = 1; i <= n; i++ ) {
    if(i % 3 === 0 && i % 5 === 0) {     // 同时满足3和5的倍数优先级比较高,需要放在开始
      arr.push("FizzBuzz")
    } else if(i % 3 === 0) {
      arr.push("Fizz")
    } else if(i % 5 === 0) {
      arr.push("Buzz")
    } else {
      arr.push(i.toString())
    }
  }
  return arr;
};
```

### [167. 两数之和 II - 输入有序数组](https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/)

![image-20211227110459232](http://i0.hdslb.com/bfs/album/880a21f081cb314cad6aacf72c66b7355ddfdb47.png)

``` js
var twoSum = function(numbers, target) {
  let res = []
  numbers.forEach((item,index) => {				// 遍历数组
    for(let i = index + 1; i < numbers.length; i++) {		// 每次遍历到的数字判断右指针的值
      if(item + numbers[i] === target) {
        res.push(index + 1, i + 1)
      }
    }
  })
  return res;
};
```

### [66. 加一](https://leetcode-cn.com/problems/plus-one/)

![image-20211227115240374](http://i0.hdslb.com/bfs/album/9b9e824af2cef3a3f8f714fb536a927a02374924.png)

* 方法一: 直接使用BigInt数据类型来解决数据精度问题(最符合直觉)

``` js
function plusOne(digits) {
  return (BigInt(digits.join('')) + 1n).toString().split('');			// BigInt数据类型用n表示
}
```

* 方法二,遍历数组
 ![image-20211227162205952](http://i0.hdslb.com/bfs/album/29c64264de5d6fcd2d7da6decd7a371ef26385bf.png)

``` js
function plusOne(digits) {
  digits.unshift(0)         // 刚开始就给数组头添加一个0,防止一直进位
  for (let i = digits.length - 1; i >= 0; i--) {    // 从后往前遍历数组
    if (digits[i] !== 9) {        // 数字不为9,直接加一
      digits[i]++
      if (digits[0] == 0) {       // 当数组首位为0,说明没有一直进位,切掉数组头部
        digits.shift()      
      }
      return digits
    } else {            // 数字为9,改写当前值为0
      digits[i] = 0;          
    }
  }
}
```

### [202. 快乐数](https://leetcode-cn.com/problems/happy-number/)

![image-20211227164513823](http://i0.hdslb.com/bfs/album/8620c1bb8a1f02a8c4adf67569b503e3b3bf5771.png)

``` js
var isHappy = function (n) {
  let set = new Set();      // 创建一个set用来存取每次的n值
  while (n > 1) {
    n = n.toString().split('').map(i => parseInt(i) ** 2).reduce((acc, cur) => acc + cur); // 每次求和添加到set中
    if (set.has(n)) {         // 如果set中有了n值说明当前的循环开始重复,永远无法变成 1 ,直接返回false
      return false;
    }
    set.add(n)
  }
  return true     // 如果能走完循环则说明最终n变成了1
};
```

### [2089. 找出数组排序后的目标下标](https://leetcode-cn.com/problems/find-target-indices-after-sorting-array/)

![image-20211227202501283](http://i0.hdslb.com/bfs/album/ae186305459d6ecd30df2344cbc9fb8a4fb4e889.png)

``` js
var targetIndices = function (nums, target) {
  let res = []
  nums.sort((a, b) => a - b).forEach((item, index) => {     // 对数组排序后遍历数组
    if (item === target) {      // 如果当前值等于数组索引,则返回数组下标
      res.push(index)
    }
  })
  return res
};
```

### [704. 二分查找](https://leetcode-cn.com/problems/binary-search/)

![image-20211227203742299](http://i0.hdslb.com/bfs/album/e41a26c1f33e9aaf0c1305d85a600a63cba84ed4.png)

* 方法一: 直接数组排序后,使用indexOf( )函数

``` js
var search = function(nums,target) {
  return nums.sort((a,b) => a - b).indexOf(target)
}
```

* 方法二: 使用二分查找

``` js
var search = function (nums, target) {
  let start = 0, end = nums.length - 1, middle, element;
  while (start <= end) {
    middle = ~~((start + end) / 2);
    element = nums[middle];
    if (element == target) {
      return middle;
    } else if (target < element) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return -1;
};
```

