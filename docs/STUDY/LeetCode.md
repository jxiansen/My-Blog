# 力扣刷题

## [1480. 一维数组的动态和](https://leetcode-cn.com/problems/running-sum-of-1d-array/)

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

## [136. 只出现一次的数字](https://leetcode-cn.com/problems/single-number/)

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

## [977. 有序数组的平方](https://leetcode-cn.com/problems/squares-of-a-sorted-array/)

![image-20210906101536449](http://i0.hdslb.com/bfs/album/d69f92aee9a0833eab927fb919e072449a81e35d.png)

``` js
function sortSquares(nums) {
  return nums.map(i => i * i).sort((a,b) => a - b)
}
```

## [1491. 去掉最低工资和最高工资后的工资平均值](https://leetcode-cn.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/)

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

## [1470. 重新排列数组](https://leetcode-cn.com/problems/shuffle-the-array/)

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

## [414. 第三大的数](https://leetcode-cn.com/problems/third-maximum-number/)

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

## [268. 丢失的数字](https://leetcode-cn.com/problems/missing-number/)

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

## [1. 两数之和](https://leetcode-cn.com/problems/two-sum/)

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

## [283. 移动零](https://leetcode-cn.com/problems/move-zeroes/)

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

## [27. 移除元素](https://leetcode-cn.com/problems/remove-element/)

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

## [287. 寻找重复数](https://leetcode-cn.com/problems/find-the-duplicate-number/)

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

## [125. 验证回文串](https://leetcode-cn.com/problems/valid-palindrome/)

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

## [2000. 反转单词前缀](https://leetcode-cn.com/problems/reverse-prefix-of-word/)

![image-20211226161455523](http://i0.hdslb.com/bfs/album/ade76247e4c37d298298e65916e4d57ce6503630.png)

* 思路一

对字符串分割为数组,如果数组中不包含字符直接返回字符串,否则就找到字符串中的下标,截取前面的部分进行翻转最后对结果合并返回

``` js
var reversePrefix = function (word, ch) {
  let arr = word.split('') 
  return !arr.includes(ch) ? word : [...arr.splice(0, arr.indexOf(ch) + 1).reverse(), ...arr].join('');
};
```

## [507. 完美数](https://leetcode-cn.com/problems/perfect-number/)

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

## [412. Fizz Buzz](https://leetcode-cn.com/problems/fizz-buzz/)

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

## [167. 两数之和 II - 输入有序数组](https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/)

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

## [66. 加一](https://leetcode-cn.com/problems/plus-one/)

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

## [202. 快乐数](https://leetcode-cn.com/problems/happy-number/)

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

## [2089. 找出数组排序后的目标下标](https://leetcode-cn.com/problems/find-target-indices-after-sorting-array/)

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

## [704. 二分查找](https://leetcode-cn.com/problems/binary-search/)

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

## [LCP 01. 猜数字](https://leetcode-cn.com/problems/guess-numbers/)

![image-20211229203448935](http://i0.hdslb.com/bfs/album/2804d10f9c5c30e5e3b08cdb191b7ddcb6443850.png)

``` js
// 直接遍历数组,判断是否相等
var game = function(guess, answer) {
  let count = 0
  for(let i in guess) {
    if(guess[i] === answer[i]) {
      count++
    }
  }
  return count
};
```

## [1672. 最富有客户的资产总量](https://leetcode-cn.com/problems/richest-customer-wealth/)

![image-20211229204211143](http://i0.hdslb.com/bfs/album/27f716e89d61659607636e7a5930c9ed15113d8b.png)

``` js
// 对二位数组中的每一项求和并返回原数组,最后取最大值
var maximumWealth = function(accounts) {
  return Math.max(...accounts.map(i => i.reduce((acc,cur) => acc + cur)));
};
```

## [1662. 检查两个字符串数组是否相等](https://leetcode-cn.com/problems/check-if-two-string-arrays-are-equivalent/)

![image-20211229204831629](http://i0.hdslb.com/bfs/album/4364ec1f308fbbd8263d89294514764c65d92d00.png)

``` js
// 直接使用join('')拼接
var arrayStringsAreEqual = function(word1, word2) {
  return word1.join('') === word2.join('');
};

// 用数组reduce()方法迭代拼接字符
var arrayStringsAreEqual = function(word1, word2) {
  let str1 = word1.reduce((acc,cur) => acc + cur, "")
  let str2 = word2.reduce((acc,cur) => acc + cur, "")
  return str2 === str1
};
```

## [169. 多数元素](https://leetcode-cn.com/problems/majority-element/)

![image-20211229221706617](http://i0.hdslb.com/bfs/album/ae240aa7c99227b9174ec8a774c29727e68bd8c1.png)

``` js
// 方法一,用对象累计存储数据计数
var majorityElement = function (nums) {
  let obj = {}      // 声明一个对象用来对每个元素计数
  for (let item of nums) {
    item.toString() in obj ? obj[item]++ : obj[item] = 1;     // 遍历数组,如果对象中没有这个值就初始化为1,否则加一
  }
  for (let key in obj) {
    if (obj[key] > nums.length / 2) {     // 遍历对象属性值,找出多数元素
      return key
    }
  }
};

// 方法二: 直接对数组排序后,取超过数组长度一半的数
var majorityElement = function(nums) {
  return nums.sort((a,b) => a - b)[~~(nums.length / 2)]
};
```

## [1920. 基于排列构建数组](https://leetcode-cn.com/problems/build-array-from-permutation/)

![image-20211229224010741](http://i0.hdslb.com/bfs/album/2b52c139dae730faf110b5e4119f8d8071d44eaa.png)

``` js
// 方法一: 直接遍历数组,并返回
var buildArray = function(nums) {
  let arr = []
  nums.forEach(item => arr.push(nums[item]))
  return arr;
};

// 方法二: 使用reduce()迭代
var buildArray = function(nums) {
  return nums.reduce((acc,cur) => {
    acc.push(nums[cur])
    return acc
  },[]);
}

// 方法三: 使用map()方法
var buildArray = function(nums) {
  return nums.map(i => nums[i]);
};
```

## [1913. 两个数对之间的最大乘积差](https://leetcode-cn.com/problems/maximum-product-difference-between-two-pairs/)

![image-20211230101849947](http://i0.hdslb.com/bfs/album/65301694f75c76770da224812fd99ba146c225da.png)

``` js
// 数组排序后,取数最大和最小各两个值的乘积差
var maxProductDifference = function(nums) {
  let arr = nums.sort((a,b) => a - b);
  return arr[arr.length - 1] * arr[arr.length - 2] - arr[0] * arr[1];
};
```

## [1389. 按既定顺序创建目标数组](https://leetcode-cn.com/problems/create-target-array-in-the-given-order/)

![image-20211230104902870](http://i0.hdslb.com/bfs/album/bdd6128e2c8e56f63ae2387d5cbea26bdd94e134.png)

* 使用splice( ),在对应位置插入对应元素

``` js
// 直接使用splice()
var createTargetArray = function(nums, index) {
  let target = [];
  for(let i in index) {
    target.splice(index[i],0,nums[i])
  }
  return target
};

// 使用reduce()迭代
var createTargetArray = function(nums, index) {
  return index.reduce((acc,cur,inx) => {
    acc.splice(cur,0,nums[inx])
    return acc
  } ,[])
};
```

## [2114. 句子中的最多单词数](https://leetcode-cn.com/problems/maximum-number-of-words-found-in-sentences/)

![image-20211230110251756](http://i0.hdslb.com/bfs/album/7a05cf228809c2743a198c6a35bb09cd9f24e14e.png)

``` js
var mostWordsFound = function(sentences) {
  return Math.max(...sentences.map(item => item.split(' ').length))
};
```

## [1732. 找到最高海拔](https://leetcode-cn.com/problems/find-the-highest-altitude/)

![image-20211230111754664](http://i0.hdslb.com/bfs/album/a7a377f51943c9480f898b9e8161dc2087297d79.png)

``` js
// reduce()迭代
var largestAltitude = function(gain) {
  return Math.max(...gain.reduce((acc,cur) => {
    acc.push(acc[acc.length - 1] + cur);
    return acc
  },[0]))
};
```

## [832. 翻转图像](https://leetcode-cn.com/problems/flipping-an-image/)

![image-20211230113524733](http://i0.hdslb.com/bfs/album/4057377a34976ae3a89b189fd89f1f67d606fb28.png)

``` js
// 翻转每一行 ==> 反转图片
var flipAndInvertImage = function(image) {
  return image.map(item => item.reverse().map(i => Number(!i)));
  // return image.map(item => item.reverse().map(i => i ^ 1));
  // 或者与1进行异或运算
};
```

## [1979. 找出数组的最大公约数](https://leetcode-cn.com/problems/find-greatest-common-divisor-of-array/)

![image-20211230120534142](http://i0.hdslb.com/bfs/album/5435e5d42662bddd33968931aa0d208804149b21.png)

``` js
// 穷举法
var findGCD = function(nums) {
  let min = Math.min(...nums);
  let max = Math.max(...nums);
  let res = [];
  for(let i = 1; i <= min; i++) {
    if(min % i === 0 && max % i === 0) {
      res.push(i)
    }
  }
  return Math.max(...res) 
};
```

## [1748. 唯一元素的和](https://leetcode-cn.com/problems/sum-of-unique-elements/)

![image-20211230211723428](http://i0.hdslb.com/bfs/album/b5791ca097d942ab153e98cfba82284c142ac737.png)

``` js
// 用对象对每个元素出现的次数进行累计,找出只出现过一次的数,并求和
var sumOfUnique = function(nums) {
  let obj = {}, sum = 0;
  for(let item of nums) {
    item in obj ? obj[item]++ : obj[item] = 1;
  }
  for(let key in obj) {
    if(obj[key] === 1) {
      sum += Number(key);
    }
  }
  return sum 
};

// 用哈希map()来存储计数
var sumOfUnique = function(nums) {
  let map = new Map(), sum = 0;
  for(let item of nums) {
    map.has(item) ? map.set(item,1) : map.set(item,0);
  }
  map.forEach((value,key) => {
    if(value === 0) {
      sum += Number(key)
    }
  });
  return sum;
};
```

## [1816. 截断句子](https://leetcode-cn.com/problems/truncate-sentence/)

![image-20211230214020219](http://i0.hdslb.com/bfs/album/df31ac612357be1edb1c2bd0c39b005cec6d7a6d.png)

``` js
var truncateSentence = function(s, k) {
  return s.split(' ').splice(0,k).join(' ')
};
```

## [1051. 高度检查器](https://leetcode-cn.com/problems/height-checker/)

![image-20211230220218819](http://i0.hdslb.com/bfs/album/0ac6c488a85ec2a5054126e29e6593db156d2b78.png)

``` js
// 先对数组排序,迭代数组判断是否相等.""
var heightChecker = function(heights) {
  let sorter = [...heights].sort((a,b) => a - b);
  return heights.reduce((acc,cur,idx) => {
    if(cur !== sorter[idx]) {
      acc++
    }
    return acc
  },0)
};
```

## [1502. 判断能否形成等差数列](https://leetcode-cn.com/problems/can-make-arithmetic-progression-from-sequence/)

![image-20211231151238519](http://i0.hdslb.com/bfs/album/2ad53e55516c3e98c5f4c2a5572618c85656248f.png)

``` js
// 先对数组排序 ==> 用等差数列通项公式遍历判断
var canMakeArithmeticProgression = function(arr) {
  let sorter = arr.sort((a,b) => a - b);
  let d = sorter[1] - sorter[0];
  for(let key in arr) {
    if(arr[key] !== (sorter[0] + key * d)) {
      return false 
    }
  }
  return true;
};
```

### [1572. 矩阵对角线元素的和](https://leetcode-cn.com/problems/matrix-diagonal-sum/)

![image-20211231161539561](http://i0.hdslb.com/bfs/album/8beb7077d1bf08f935348f19faaa4b1bcce77213.png)

``` js
var diagonalSum = function (mat) {
  let arr = [];
  for (let i = 0; i < mat.length; i++) {    // 遍历二维数组,将对角线上的数组元素存到数组中
    arr.push(mat[i][i], mat[i][mat.length - i - 1]);
  }
  if (mat.length % 2 == 1) {      // 如果数组的长度为偶数的时候,矩阵中心会被重复累加,需要去除这个元素
    arr.splice(mat.length, 1)
  }
  return arr.reduce((acc, cur) => acc + cur, 0);    // reduce()求和
};
```

## [1299. 将每个元素替换为右侧最大元素](https://leetcode-cn.com/problems/replace-elements-with-greatest-element-on-right-side/)

![image-20220101190132996](http://i0.hdslb.com/bfs/album/589cbd3ee767dd43707c59198a9a8f08ab32a43a.png)

``` js
// 从后往前遍历,比较右侧最大值,修改原数组
var replaceElements = function(arr) {
  let max = -1, res = [];
  for(let i = arr.length - 1; i >=0; i--) {
    res[i] = max;
    max = arr[i] > max ? arr[i] : max;
  }
  return res
};
```

## [1822. 数组元素积的符号](https://leetcode-cn.com/problems/sign-of-the-product-of-an-array/)

![image-20220101191458479](http://i0.hdslb.com/bfs/album/774865cf4f87022ecb88f8b2f5454a1a8c181fe7.png)

``` js
// 遍历数组,如果数组值为0,直接返回0,计算出所有值的乘积,再进行判断.
var arraySign = function(nums) {
  let res = 1;
  for(let item of nums) {
    if(item === 0) {
      return 0;
    }
    res *= item;
  }
  return res > 0 ? 1 : -1;
};

// 方法二: 累积负数次数
var arraySign = function (nums) {
  let countNeg = 0;     // 累积数组中负数的个数
  for (let item of nums) {
    if (item === 0) {         // 如果元素为0,直接返回0
      return 0;         
    }
    if (item < 0) {
      countNeg++;
    }
  }
  return countNeg % 2 === 0 ? 1 : -1;     // 负数的个数如果为偶数次返回1,奇数次则返回-1;
};
```

## [剑指 Offer 17. 打印从1到最大的n位数](https://leetcode-cn.com/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof/)

![image-20220101193933407](http://i0.hdslb.com/bfs/album/98c2adf4c618045c6342c76061c7fbb8fcce7f2c.png)

``` js
// 直接使用for循环,最大值用数组中的字符串拼接转换出来
var printNumbers = function (n) {
  let res = [], max = Number(new Array(n).fill(9).join(''));
  for (let i = 1; i <= max; i++) {
    res.push(i)
  }
  return res;
};


// 最大值也可以使用10的n次幂求出来
var printNumbers = function (n) {
  let res = [], max = 10 ** n;
  for (let i = 1; i < max; i++) {
    res.push(i)
  }
  return res;
};
```

## [1464. 数组中两元素的最大乘积](https://leetcode-cn.com/problems/maximum-product-of-two-elements-in-an-array/)

![image-20220102143224108](http://i0.hdslb.com/bfs/album/3995b112acff6e1207084e09174fbb7cf01a20bc.png)

``` js
// 方法一: 数组排序后找出最大的两个元素,累乘
var maxProduct = function (nums) {
  return nums.sort((a, b) => b - a).slice(0, 2).reduce((acc, cur) => acc * (cur - 1), 1)
};


// 方法二: 遍历找出最大值,和次大值
var maxProduct = function (nums) {
  let max = Math.max(...nums)
  for (let key in nums) {
    if (nums[key] === max) {
      nums[key] = 0;      // 对遍历到的最大值置0
      let secondMax = Math.max(...nums)   // 再求出次大值
      return (secondMax - 1) * (max - 1);
    }
  }
};
```

## [1475. 商品折扣后的最终价格](https://leetcode-cn.com/problems/final-prices-with-a-special-discount-in-a-shop/)

![image-20220102151723963](http://i0.hdslb.com/bfs/album/c51dc59a61ad4ddafcfdedb26e34b9e75642e742.png)

``` js
var finalPrices = function (prices) {
  for (let i = 0; i < prices.length; i++) {     // 外层循环控制写指针
    for (let j = i + 1; j < prices.length; j++) {   // 内层循环控制读指针
      if (prices[j] <= prices[i]) {   // 一但遍历到合适的条件写指针改写元素的折扣值
        prices[i] -= prices[j];
        break;
      }
    }
  }
  return prices
};
```

## [剑指 Offer 57. 和为s的两个数字](https://leetcode-cn.com/problems/he-wei-sde-liang-ge-shu-zi-lcof/)

![image-20220102153655340](http://i0.hdslb.com/bfs/album/dd31fd6c4b3b28a06cc5a4c062ecdb0eb84197bf.png)

``` js
// 双指针法
var twoSum = function (nums, target) {
  let left = 0, right = nums.length - 1;    // 定义左指针,右指针
  while (left < right) {    // 只有左右指针没有相遇就一直循环
    let sum = nums[left] + nums[right];
    if (sum === target) {
      return [nums[left], nums[right]];
    } else if (sum < target) {      // 和小于目标值,左指针右移变大
      left++;
    } else {        // 和大于目标值,右指针左移变小
      right--;
    }
  }
};
```

## [剑指 Offer 58 - II. 左旋转字符串](https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/)

![image-20220102202658275](http://i0.hdslb.com/bfs/album/47f16729d4d3c002e3ce537260a04d4b35efafcd.png)

``` js
// 直接使用库函数
var reverseLeftWords = function (s, n) {
  return `${s.slice(n)}${s.slice(0, n)}`
};

// 遍历字符串
var reverseLeftWords = function (s, n) {
  let res = [];
  for (let i = n; i < s.length; i++) {
    res.push(s[i])
  }
  for (let i = 0; i < n; i++) {
    res.push(s[i])
  }
  return res.join('')
};
```

## [557. 反转字符串中的单词 III](https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/)

![image-20220102215612084](C:/Users/30328/AppData/Roaming/Typora/typora-user-images/image-20220102215612084.png)

``` js
// api写法
var reverseWords = function (s) {
  return s.split(' ').map(item => [...item].reverse().join('')).join(' ')
};

// 用数组来存
var reverseWords = function (s) {
  let arr = [], i = 0;
  while (i < s.length) {
    let start = i;
    while (i < s.length && s[i] !== ' ') {
      i++
    }
    for (let j = start; j < i; j++) {
      arr.push(s[start + i - j - 1])
    }
    arr.push(' ')
    i++
  }
  return arr.join('').trimEnd()
};


// 双指针写法 
var reverseWords = function (s) {
  let arr = [...s], l = 0, r = l;   // 定义左右指针
  while (l < arr.length) {
    //找到结尾的空格
    while (arr[r] && arr[r] !== " ") {
      r++;
    }
    //反转单词
    for (let i = l, j = r - 1; i < j; i++, j--) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    //跳到下一个单词
    l = r + 1;
    r = l;
  }
  return arr.join("");
};
```

## [350. 两个数组的交集 II](https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/)

![image-20220103205650970](http://i0.hdslb.com/bfs/album/7ff643764c56b732c95d6a65a2592c26e7a6958d.png)

``` js
// 双重for循环遍历,对于每次遍历过的数组,都改写其值,使其下次遍历不会被比较
var intersect = function (nums1, nums2) {
  let res = []
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        res.push(nums1[i])
        nums1[i] = "$"
        nums2[j] = "@"
      }
    }
  }
  return res
};

// 左右指针分别遍历两个数组
var intersect = function (nums1, nums2) {
  let res = [], l = 0, r = 0;   // 左右指针,分别指向两个数组
  nums1.sort((a, b) => a - b);   // 对两个数组排序
  nums2.sort((a, b) => a - b);
  while (l < nums1.length && r < nums2.length) {   // 遍历两个数组,只要两个指针还小于数组的长度时候就一直遍历
    if (nums1[l] === nums2[r]) {
      res.push(nums1[l])    // 如果左右指针数据相等则加入数组,并且指针分别移动
      l++;
      r++;
    } else {
      nums1[l] < nums2[r] ? l++ : r++;
    }
  }
  return res;
};
```

## [709. 转换成小写字母](https://leetcode-cn.com/problems/to-lower-case/)

![image-20220103213455276](http://i0.hdslb.com/bfs/album/ec0695a1f2591239294b9ceefdbad81a85aaeddc.png)

``` js
// 遍历字符串拼接
var toLowerCase = function (s) {
  let str = '';
  for (let item of s) {
    if (item.charCodeAt() >= 65 && item.charCodeAt() <= 90) {
      str += String.fromCharCode(item.charCodeAt() + 32)
    } else {
      str += item
    }
  }
  return str
};


// 直接使用api
var toLowerCase = function (s) {
  return s.toLowerCase();
}
```

## [1859. 将句子排序](https://leetcode-cn.com/problems/sorting-the-sentence/)

![image-20220103220111504](http://i0.hdslb.com/bfs/album/ad69de2406356cda14f02089d7728e6ef1ef7005.png)

``` js
var sortSentence = function (s) {
  let arr = s.split(' ').map(item => [...item]);
  let obj = {}, res = '';
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i].splice(-1, 1);
    obj[tmp] = arr[i].join('')
  }
  for (let key in obj) {    // 用对象来存放数组元素和其排序序号
    res += obj[key] + " "   // 拼接字符串
  }
  return res.trim()     // 去除右侧添加的空格字符
};
```





