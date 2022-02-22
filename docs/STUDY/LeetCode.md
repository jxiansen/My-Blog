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
// 暴力法: map后sort排序
function sortSquares(nums) {
  return nums.map(i => i * i).sort((a,b) => a - b)
}

// 双指针法
var sortedSquares = function (nums) {
  let l = 0, r = nums.length - 1, res = [];
  while (l <= r) {      // 左右双指针,依次添加元素到结果中
    if (Math.abs(nums[r]) >= Math.abs(nums[l])) {
      res.push(nums[r] ** 2)
      r--       // 分别移动指针
    } else {
      res.push(nums[l] ** 2)
      l++
    }
  }
  return res.reverse();
};

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
// 使用暴力循环,两个指针把所有的可能都扫一遍
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if ((target - nums[i]) === nums[j]) {
        return []
      }
    }
  }
}

// 使用哈希map
var twoSum = function (nums, target) {
  let map = new Map()       // 用哈希表来存储遍历过的元素和索引
  for (let i = 0; i < nums.length; i++) {     // 每遍历一个元素,看看表中是否存在满足要求的目标数字
    let match = target - nums[i];
    if (map.has(match)) {
      return [map.get(match), i]      // 如果表中有匹配的数直接返回[目标元素的索引,当前索引]
    }
    map.set(nums[i], i)       // 哈希表中存储当前的元素和对应的索引
  }
  return []
};
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
// 读写双指针: 读指针向右侧遍历遇到不是目标的元素则左侧的写指针开始复刻并移动指针.
var removeElement = function (nums, val) {
  let len = nums.length;      // 记录下最开始的长度
  for (var l = 0, r = 0; r < len; r++) {
    if (nums[r] !== val) {        // 遇到不是目标元素,左指针开始改写并右移
      nums[l] = nums[r]
      l++
    }
  }
  return l
};
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

* 方法一: 直接使用 api

``` js
var search = function(nums, target) {
  return nums.indexOf(target)
};
```

* 方法二: 使用二分查找

  二分法的使用前提: 

  * 数组为有序数组
  * 数组中无重复元素

``` js
var search = function (nums, target) {
  let start = 0, end = nums.length - 1, middle, element;
  while (start <= end) {
    middle = ~~((start + end) / 2);     // 定义中间节点坐标
    element = nums[middle];     // 中间元素值
    if (element == target) {      // 中间元素等于目标直接返回索引
      return middle;
    } else if (target < element) {    // 目标小于中间元素,右指针移动到中间指针左侧
      end = middle - 1;
    } else {
      start = middle + 1;     // 目标大于中间元素,左指针移到到中间指针右侧
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

## [1572. 矩阵对角线元素的和](https://leetcode-cn.com/problems/matrix-diagonal-sum/)

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

![image-20220102215612084](http://i0.hdslb.com/bfs/album/4537bcc64d5a11ca1118d8dd75acf59fb7c08f10.png)

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
// 方法一: 用对象存取数据
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

// 方法二: 找出key和value,用数组存取
var sortSentence = function (s) {
  let res = [], arr = s.split(' ');   // 切分数组
  for (let item of arr) {
    let index = item.slice(-1) - 1;     // 每次取字符串的索引
    let value = item.slice(0, item.length - 1)    // 取字符串的值
    res[index] = value      // 用数组存取字符串
  }
  return res.join(' ');
};
```

## [剑指 Offer 03. 数组中重复的数字](https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/)

![image-20220104175647251](http://i0.hdslb.com/bfs/album/0340b9fd173a39244fb5f5923dc6f575035c0eda.png)

``` js
var findRepeatNumber = function (nums) {
  let map = new Map();
  for (let item of nums) {
    if (map.has(item)) {    // 如果表中有当前元素,则直接返回该元素
      return item;
    }
    map.set(item, 0)      // 一直向哈希表中存数据
  }
};
```

## [剑指 Offer 05. 替换空格](https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/)

![image-20220104181959698](http://i0.hdslb.com/bfs/album/02ccb1ca81baf457dd4d0d1fbc814a558374d7c4.png)

``` js
// 读写双指针改写
var replaceSpace = function (s) {
  // 字符串分割为数组
  let arr = [...s], count = 0;

  // 计算出空格数,用来扩容
  for (let item of arr) {
    if (item === ' ') count++
  }

  // 左右双指针遍历
  let [l, r] = [arr.length - 1, arr.length + count * 2 - 1]
  while (l >= 0) {
    if (arr[l] === ' ') {       // 左指针遇到了空格,右指针开始写字符串,并不断左移
      arr[r--] = '0'
      arr[r--] = '2'
      arr[r--] = '%'
      l--                 // 右指针写完后,左指针左移
    } else {
      arr[r--] = arr[l--]     // 左指针遇到正常字符: 将左指针读到的值写入右指针,并各自左移
    }
  }
  return arr.join('')     // 拼接字符串
};


// 方法一: 直接使用api
var replaceSpace = function (s) {
  return s.replaceAll(' ', "%20")
};

// 第二种使用api方法
var replaceSpace = function (s) {
  return s.split(' ').join('%20');
};

// 方法二: 切割成数组拼接
var replaceSpace = function (s) {
  let arr = [...s];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === " ") arr[i] = "%20"
  }
  return arr.join('')
};


// 遍历字符串拼接
var replaceSpace = function (s) {
  let res = "";
  for (let item of s) {
    item === " " ? res += "%20" : res += item;
  }
  return res
};
```

## [387. 字符串中的第一个唯一字符](https://leetcode-cn.com/problems/first-unique-character-in-a-string/)

![image-20220104225113686](http://i0.hdslb.com/bfs/album/865da6d3c5885e07a3c6154f8f03e309b6aa89c6.png)

``` js
var firstUniqChar = function (s) {
  let map = new Map();      // 用哈希表存取字符串,统计出每个字符串出现的次数
  for (let item of s) {
    map.has(item) ? map.set(item, 1) : map.set(item, 0);
  }
  for (let key of map.keys()) {     // 遍历map的键
    if (map.get(key) === 0) {     // 如果键只出现过一次,则返回字符串中该键的索引
      return s.indexOf(key)
    }
  }
  return -1;      // 如果字符中找不到该键,则返回-1;
};

// 用对象来存取数据
var firstUniqChar = function (s) {
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    let str = s[i];
    str in obj ? obj[str]++ : obj[str] = 1;
  }
  for (let i = 0; i < s.length; i++) {
    let str = s[i];
    if (obj[str] === 1) {
      return i
    }
  }
  return -1
};
```

## [1528. 重新排列字符串](https://leetcode-cn.com/problems/shuffle-string/)

![image-20220106165835536](http://i0.hdslb.com/bfs/album/8d6b3de80050983d7e888025ec416c1dd4b87180.png)

``` js
// 用新数组去存
var restoreString = function (s, indices) {
  let res = new Array(indices.length);
  for (let key in indices) {
    res[indices[key]] = s[key]
  }
  return res.join('')
};

// 用对象来存数据,按序遍历
var restoreString = function (s, indices) {
  let obj = {}, res = '';
  for (let i = 0; i < s.length; i++) {
    obj[indices[i]] = s[i]
  }
  for (let key in obj) {
    res += obj[key]
  }
  return res
};

// 用map做映射表来排序
var restoreString = function (s, indices) {
  let map = new Map(), res = '';
  for (let i = 0; i < s.length; i++) {
    map.set( indices[i],s[i])
  }
  for (let j = 0; j < s.length; j++) {
    res += map.get(j)
  }
  return res
};
```

##  [1768. 交替合并字符串](https://leetcode-cn.com/problems/merge-strings-alternately/)

![image-20220108170016290](http://i0.hdslb.com/bfs/album/839d47d048aa1be63c49a58ac878ef435151ac0d.png)

``` js
// 方法一
var mergeAlternately = function (word1, word2) {
  let arr = [], arr1 = [...word1], arr2 = [...word2];
  while (arr1.length > 0 || arr2.length > 0) {    // 只要两个字符串数组不为空就一直向目标数组push元素
    arr.push(arr1.shift(), arr2.shift())
  }
  return arr.join('');        // 拼接元素
};


// 方法二
var mergeAlternately = function (word1, word2) {
  let res = [], maxLen = Math.max(word1.length, word2.length);
  for (let i = 0; i < maxLen; i++) {      // 遍历字符串中较长的那个
    let str1 = word1[i], str2 = word2[i];
    res.push(str1, str2)          // 用数组存遍历到的字符
  }
  return res.filter(item => item !== undefined).join('');   // 过滤掉数组中的undefined元素,拼接
};
```

## [面试题 01.01. 判定字符是否唯一](https://leetcode-cn.com/problems/is-unique-lcci/)

![image-20220108171738943](http://i0.hdslb.com/bfs/album/101cd7f0e2156532dece3fbeec062ff373cb237f.png)

``` js
// 使用set去重,比较长度
var isUnique = function (s) {
  let set = new Set(s)      
  return set.size === s.length;
};

// 双重for循环,比较两个值是否相同
var isUnique = function (s) {
  for (let l = 0; l < s.length; l++) {
    for (let r = l + 1; r < s.length; r++) {
      if (s[l] === s[r]) {
        return false;
      }
    }
  }
  return true;
};
```

## [884. 两句话中的不常见单词](https://leetcode-cn.com/problems/uncommon-words-from-two-sentences/)

![image-20220108220507437](http://i0.hdslb.com/bfs/album/1d0de29c8107ca104559acba7109a46997d7b433.png)

``` js
var uncommonFromSentences = function (s1, s2) {
  let arr = `${s1} ${s2}`.split(' ');
  let map = new Map(), res = [];
  for (let item of arr) {       // 用 map 来存储单词出现的次数
    map.has(item) ? map.set(item, 1) : map.set(item, 0);
  }
  for (let key of map.keys()) {   // 遍历 map 找出其中只出现过一次的元素
    if (map.get(key) === 0) {
      res.push(key)
    }
  }
  return res
};

// 用对象存储计数
var uncommonFromSentences = function (s1, s2) {
  let arr = `${s1} ${s2}`.split(' '), res = [];
  let obj = {};
  for (let item of arr) {
    item in obj ? obj[item]++ : obj[item] = 0;
  }
  for (let key in obj) {
    if (obj[key] === 0) {
      res.push(key)
    }
  }
  return res
};
```

## [1945. 字符串转化后的各位数字之和](https://leetcode-cn.com/problems/sum-of-digits-of-string-after-convert/)

![image-20220108222308268](http://i0.hdslb.com/bfs/album/17289ab14f9904861c8a97b6c490c555935d638f.png)

``` js
var getLucky = function (s, k) {
  let num = [...s].map(item => item.charCodeAt() - 96).join('')
  while (k > 0) {
    num = [...num].map(i => parseInt(i)).reduce((acc, cur) => acc + cur, 0).toString();
    k--
  }
  return Number(num)
};
```

## [771. 宝石与石头](https://leetcode-cn.com/problems/jewels-and-stones/)

![image-20220109150114742](http://i0.hdslb.com/bfs/album/2bffd498602d00bf351ec5fc5451339f1647997f.png)

``` js
// 方法一: 直接使用数组过滤
var numJewelsInStones = function (jewels, stones) {
  return [...stones].filter(i => jewels.includes(i)).length
};

// 方法二: 双重循环遍历出两边值相等的计数
var numJewelsInStones = function (jewels, stones) {
  let count = 0
  for (let item of jewels) {    
    for (let val of stones) {
      if (item === val) {
        count++;
      }
    }
  }
  return count;
};

// 用哈希表来存取宝石的类型,遍历字符串累计数
var numJewelsInStones = function (jewels, stones) {
  let set = new Set(), count = 0;
  for (let item of jewels) {
    set.add(item)
  }
  for (let i of stones) {
    if (set.has(i)) {
      count++
    }
  }
  return count;
};
```

## [1880. 检查某单词是否等于两单词之和](https://leetcode-cn.com/problems/check-if-word-equals-summation-of-two-words/)

![image-20220109161001405](http://i0.hdslb.com/bfs/album/e409d648eeaae036dea4ec87799e6a457c253949.png)

``` js
// 定义一个根据字符串求数值的函数
var isSumEqual = function (firstWord, secondWord, targetWord) {
  let getNum = str => Number([...str].map(i => i.charCodeAt() - 97).join(''));
  return getNum(firstWord) + getNum(secondWord) === getNum(targetWord);
};
```

## [1941. 检查是否所有字符出现次数相同](https://leetcode-cn.com/problems/check-if-all-characters-have-equal-number-of-occurrences/)

![image-20220109163613326](http://i0.hdslb.com/bfs/album/511ae25945b5ea7c949487231bf2cd77ef9e2a23.png)

``` js
var areOccurrencesEqual = function(s) {
  let obj = {}, arr = [];
  for (let item of s) {
    item in obj ? obj[item]++ : obj[item] = 1;    // 对象用来存储每个字符出现的次数
  }
  for (let key in obj) {
    arr.push(obj[key])      // 数组存放所有的次数
  }
  return [...new Set(arr)].length === 1;    // 使用set对数组去重,如果去重后的长度为一说明每个字符都出现相同的次数
};
```

## [1935. 可以输入的最大单词数](https://leetcode-cn.com/problems/maximum-number-of-words-you-can-type/)

![image-20220109181137819](http://i0.hdslb.com/bfs/album/2c911cd21b1bd4eb9113a25d72cbe4b9954082e6.png)

``` js
var canBeTypedWords = function (text, brokenLetters) {
  let arr = text.split(' '), count = 0;
  for (let i of arr) {    // 遍历目标单词
    for (let j of i) {    // 遍历每个目标单词中的字母
      if (brokenLetters.includes(j)) {    // 累计出遍历的字母中有损坏的单词
        count++;
        break;      // 遇到有损坏的单词后面的单词也不需要遍历了,直接break
      }
    }
  }           // count 是已经损坏的单词
  return arr.length - count   // 返回去掉损坏单词的所有单词数
};
```

## [1431. 拥有最多糖果的孩子](https://leetcode-cn.com/problems/kids-with-the-greatest-number-of-candies/)

![image-20220110113913063](http://i0.hdslb.com/bfs/album/ea16a51df8eaf9d2ef6b6a97d64ab6e9b614b4d4.png)

``` js
var kidsWithCandies = function (candies, extraCandies) {
  let max = Math.max(...candies);
  return candies.map(i => i + extraCandies >= max ? true : false)
};
```

## [1281. 整数的各位积和之差](https://leetcode-cn.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/)

![image-20220110120248051](http://i0.hdslb.com/bfs/album/60e46e677805d48aba963adfd068fe49b4434138.png)

``` js
// 使用reduce
var subtractProductAndSum = function (n) {
  let arr = [...n.toString()].map(i => parseInt(i));
  let Power = arr.reduce((acc, cur) => acc * cur, 1);
  let sum = arr.reduce((acc, cur) => acc + cur);
  return Power - sum;
};

// 遍历数字组成的字符串
var subtractProductAndSum = function (n) {
  let Power = 1, sum = 0;
  for (let item of n.toString()) {
    sum += Number(item);
    Power *= Number(item);
  }
  return Power - sum;
};
```

## [面试题 16.01. 交换数字](https://leetcode-cn.com/problems/swap-numbers-lcci/)

![image-20220110193114350](http://i0.hdslb.com/bfs/album/35fc09bc695a48465b06ce4e17a37fde5d7ed510.png)

``` js
// 方法一: 直接ES6结构语法交换数值
var swapNumbers = function (numbers) {
  [numbers[0],numbers[1]] = [numbers[1],numbers[0]];
  return numbers;
};

// 方法二: 直接数组反转
var swapNumbers = function (numbers) {
  return numbers.reverse();
};

// 方法三: 加减腾挪法
var swapNumbers = function (numbers) {
  numbers[0] += numbers[1]
  numbers[1] = numbers[0] - numbers[1];
  numbers[0] = numbers[0] - numbers[1]
  return numbers;
};

// 方法四: 异或运算
var swapNumbers = function (numbers) {
  numbers[0] ^= numbers[1]
  numbers[1] ^= numbers[0]
  numbers[0] ^= numbers[1]
  return numbers;
};
```

## [1832. 判断句子是否为全字母句](https://leetcode-cn.com/problems/check-if-the-sentence-is-pangram/)

![image-20220110192902550](http://i0.hdslb.com/bfs/album/ca4ba1221def97eef7945fef838f61c6c6b59322.png)

``` js
var checkIfPangram = function (sentence) {
  let res = [];
  for (let i = 97; i <= 122; i++) {       // 遍历字母表
    let str = String.fromCharCode(i);
    if (!sentence.includes(str)) {      // 判断给定的字符中是否包含有字母表的全部
      return false;
    }
  }
  return true;
};
```

## [剑指 Offer 18. 删除链表的节点](https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/)

![image-20220114120051504](http://i0.hdslb.com/bfs/album/aca4d6bcbf898a1803706c017360891740d59e02.png)

``` js
var deleteNode = function (head, val) {
  // val是头节点
  if (head.val === val) {         // 如果目标值为头节点,直接返回头节点的下一节点
    return head.next;
  }

  // val不在头节点
  let pre = head;     // 声明前置指针
  while (pre.next !== null) {         // 只要前置指针的下一节点不是空节点,指针就一直后移
    if (pre.next.val === val) {         // 如果前置指针的下一节点值为目标值
      pre.next = pre.next.next;         // 前置指针指向下下个节点
      return head
    }
    pre = pre.next;
  }
};
```

## [面试题 02.03. 删除中间节点](https://leetcode-cn.com/problems/delete-middle-node-lcci/)

![image-20220114134216909](http://i0.hdslb.com/bfs/album/94f9f425da2f153b0e85f7e5b9548b8aadb78348.png)

``` js
var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
  // 给定的是要删除的目标节点,不是head节点,所以无需从头开始遍历
  // 要删除的节点的下一节点的值给当前节点,并指向下下节点,当前节点会被自动回收掉
};
```

## [206. 反转链表](https://leetcode-cn.com/problems/reverse-linked-list/)

![image-20220114162517762](http://i0.hdslb.com/bfs/album/2fa2d0c06f46c8339b978070a05827dc20d2ad79.png)

``` js
// 使用数组存链表反转
var reverseList = function (head) {
  // 如果数组为空直接返回head
  if (!head) {
    return head;
  }

  let arr = [], cur = head;
  while (cur) {
    arr.unshift(cur);
    cur = cur.next;
  }
  // 遍历反转过的数组元素,构造链表
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i].next = arr[i + 1];
  }
  arr[arr.length - 1] = null;   // 单独设置尾节点指向null
  return arr[0];
};


// 递归法,不断的调用自身函数达到不断反转链表的指针和节点
var reverseList = function (head) {
  // 如果数组为空直接返回head
  if (!head || !head.next) {
    return head;
  }
  // 生成新节点,递归调用
  let newNode = reverseList(head.next)
  // 将头节点的下一个指针指向头节点,从而反转
  head.next.next = head;
  // 头节点指向null
  head.next = null;
  return newNode;
};
```

## [1991. 找到数组的中间位置](https://leetcode-cn.com/problems/find-the-middle-index-in-array/)

![image-20220211152045139](http://i0.hdslb.com/bfs/album/5220f860639dc4803bc91a3cf832739941414eeb.png)

``` js
var findMiddleIndex = function (nums) {
  let getSum = arr => arr.reduce((acc, cur) => acc + cur, 0)
  for (let i = 0; i < nums.length; i++) {
    let [left, right] = [getSum(nums.slice(0, i)), getSum(nums.slice(i + 1))]     // 指针左右数组分别求和
    if (left === right) return i      // 左右和相等则返回指针
  }
  return -1       // 未找到返回错误指针
};
```

## [1137. 第 N 个泰波那契数](https://leetcode-cn.com/problems/n-th-tribonacci-number/)

![image-20220211174815502](http://i0.hdslb.com/bfs/album/8ca87e9af20eb139c65e608da23dee8ce85c5098.png)

``` js
// 递归写法: 性能太差,会爆栈
var tribonacci = function (n) {
  if (n === 2 || n === 1) return 1
  if (n === 0) return 0
  return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3)
};

// 递推公式
var tribonacci = function (n) {
  let arr = [0, 1, 1]
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
  }
  return arr[n]
};
```

## [917. 仅仅反转字母](https://leetcode-cn.com/problems/reverse-only-letters/)

![image-20220211195741133](http://i0.hdslb.com/bfs/album/3efbc50971819f06232f72cc9ae60724de9a9aae.png)

```js
// 普通解法:
var reverseOnlyLetters = function (s) {
  let isWord = str => str.toLowerCase() !== str.toUpperCase()
  let arr = [...s].filter(i => isWord(i)).reverse(), res = '';      // 过滤出字母数组并反转
  for (let item of s) {       // 遍历字符串,拼接反转过后的数组元素
    res += isWord(item) ? arr.shift() : item;
  }
  return res
};


// 双指针法: 从左右位置分别开始遍历,交换左右指针的值
var reverseOnlyLetters = function (s) {
  let isWord = str => str.toLowerCase() !== str.toUpperCase()   // 判断是否为字母
  let arr = [...s], l = 0, r = arr.length - 1;
  while (l < r) {
    if (!isWord(arr[l])) l++;       // 指针遇到非字母左移或者右移
    if (!isWord(arr[r])) r--;
    if (isWord(arr[l]) && isWord(arr[r])) {     // 左右指针都为字母,则交换值
      let tmp = arr[l];
      arr[l] = arr[r];
      arr[r] = tmp;
      l++
      r--
    }
  }
  return arr.join('')         // 拼接数组为字符串
};
```

## [面试题 01.09. 字符串轮转](https://leetcode-cn.com/problems/string-rotation-lcci/)

![image-20220211202716816](http://i0.hdslb.com/bfs/album/4f8b0b2e10acdc3979629752e7db16968a242c06.png)

``` js
var isFlipedString = function (s1, s2) {
  return s2.length === s1.length ? s1.repeat(2).includes(s2) : false;
  // 如果两个字符串的长度一样判断s1拼接两次后的字符串中是否包含s2,长度不一样直接返回false
}
```

## [796. 旋转字符串](https://leetcode-cn.com/problems/rotate-string/)

![image-20220211205123890](http://i0.hdslb.com/bfs/album/c585dd0a263db1557a3f4b912bb510213156f037.png)

``` js
var rotateString = function (s, goal) {
  return s.length === goal.length && s.repeat(2).includes(goal);
  // 当两个字符串长度一样并且第一个字符串首尾拼接的字符串中包含第二个字符串都满足的时候返回true
};
```

## [剑指 Offer II 003. 前 n 个数字二进制中 1 的个数](https://leetcode-cn.com/problems/w3tCBm/)

![image-20220211215842528](http://i0.hdslb.com/bfs/album/729ab635fec8c5e1da4f78ddc3dd319db520b734.png)

``` js
// 方法1: 对数组转成二进制后再分割统计出 '1'的个数
var countBits = function (n) {
  let arr = []
  for (let i = 0; i <= n; i++) {
    let num = [...i.toString(2)].reduce((acc, cur) => {
      if (cur === '1') acc++
      return acc
    }, 0);
    arr.push(num)
  }
  return arr
};

// 方法二: 封装一个求数字转二进制后其中字符串'1'的个数
var countBits = function (n) {
  let arr = [];
  var countBit = function (num) {
    let count = 0
    while (num > 1) {
      let tmp = num % 2;
      num = (num - tmp) / 2;
      if (tmp === 1) count++
    }
    if (num === 1) count++
    return count
  }

  for (let i = 0; i <= n; i++) {
    arr.push(countBit(i))
  }
  return arr
};
```

## [88. 合并两个有序数组](https://leetcode-cn.com/problems/merge-sorted-array/)

![image-20220213171638059](http://i0.hdslb.com/bfs/album/9ef1df31e64bce58bb598c4783ff9b437df0be17.png)

``` js
// 方法一: 遍历第二个数组,插入的位置
var merge = function (nums1, m, nums2, n) {
  nums1.length = m      // 先对数组进行预收缩,防止后面比较时多余的元素干扰
  let idx = 0;      // 初始索引
  for (let i = 0; i < n; i++) {
    let val = nums2[i]
    while (val > nums1[idx]) {      // 找到插入点
      idx++
    }
    nums1.splice(idx, 0, val)     // 插入元素
  }
};

// 方法二: 合并两个数组之后再排序
var merge = function (nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    nums1[m + i] = nums2[i]
  }
  nums1.sort((a, b) => a - b)
};
```

## [1089. 复写零](https://leetcode-cn.com/problems/duplicate-zeros/)

![image-20220213173114645](http://i0.hdslb.com/bfs/album/96953212c5f450624412abbd5d28e09a1b207e54.png)

``` js
var duplicateZeros = function (arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0)		// 遍历数组找到0处并添加剂一个0
      i++
    }
  }
  arr.length = len			// 最后收缩数组范围
};
```

## [844. 比较含退格的字符串](https://leetcode-cn.com/problems/backspace-string-compare/)

![image-20220213224827077](http://i0.hdslb.com/bfs/album/24fd53812eb7eee0c6ff8b4aa6e165714f516724.png)

``` js
// 方法一 : 左右指针分别处理字符串
var backspaceCompare = function (s, t) {
  let compare = str => {      // 定义一个比较函数,对字符串进行处理
    let arr = [...str]
    for (let r = 0; r < arr.length; r++) {    // 右指针遍历字符串数组
      if (arr[r] === '#') {         // 右指针扫到"#",左指针就向前找到第一个不是"#"的元素,并改写它为"#"
        let l = r - 1;
        while (arr[l] === '#') {
          l--
        }
        arr[l] = '#'
      }
    }
    return arr.filter(i => i !== '#').join('')    // 过滤掉所有的退格符号,拼接出字符串
  }
  return compare(s) === compare(t)
};

// 栈方法
var backspaceCompare = function (s, t) {
  let filterStr = str => {
    let stack = []
    for (let item of str) {
      item === '#' ? stack.pop() : stack.push(item);    // 遍历字符串,不是"#"入栈,遇到"#"则出栈
    }
    return stack.join('')     // 栈中留下的都是处理好的字符串
  }
  return filterStr(s) === filterStr(t)
};
 
// 方法三: 对字符串进行模拟退格处理
var backspaceCompare = function (s, t) {
  let replStr = str => {
    let res = '', count = 0;
    for (let i = str.length - 1; i >= 0; i--) {     // 从后往前遍历字符串: 三种情况
      if (str[i] === '#') {       // 1. 遇到 "#", 累计出 "#"的个数
        count++
      } else if (count > 0) {     // 2. 不是 "#", 当前存在 "#",减少累计数模拟删除
        count--
      } else {
        res = str[i] + res      // 3. 不是 "#"并且累计数已经清空,将这个元素拼接到结果字符串
      }
    }
    return res      // 返回的结果就是已经模拟出退格处理
  }
  return replStr(s) === replStr(t)
};
```

## [821. 字符的最短距离](https://leetcode-cn.com/problems/shortest-distance-to-a-character/)

![image-20220214134829782](http://i0.hdslb.com/bfs/album/e2cb62cab17cca2fd0333b3cbebe332c96c41d68.png)

``` js
// 中心扩展法: 最符合直觉
var shortestToChar = function (s, c) {
  let res = []
  for (let i = 0; i < s.length; i++) {    // 遍历字符串
    let step = 0        // 步长: 用来累计距离
    for (; step < Infinity; step++) {     // 对遍历到的字符串分别从左右扩展寻找目标元素
      if (s[i + step] === c || s[i - step] === c) break     // 找到目标元素则跳出循环
    }
    res[i] = step
  }
  return res
};
```

## [剑指 Offer 21. 调整数组顺序使奇数位于偶数前面](https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/)

​	![image-20220214141800065](http://i0.hdslb.com/bfs/album/5e5260f35cfb3334ba40acfb4180000066a680c9.png)

``` js
// 双指针向中间逼近
var exchange = function (nums) {
  let [l, r] = [0, nums.length - 1];        // 左右指针从首尾逼近
  while (l < r) {
    if (nums[l] % 2 === 0 && nums[r] % 2 === 1) {     // 左偶右奇: 交换彼此值
      [nums[l], nums[r]] = [nums[r], nums[l]]
      l++
      r--
    };
    if (nums[l] % 2 === 1) l++      // 左指针为奇数：指针后移
    if (nums[r] % 2 === 0) r--      // 右指针为偶数: 指针左移
  }
  return nums
};
```

## [1417. 重新格式化字符串](https://leetcode-cn.com/problems/reformat-the-string/)

![image-20220215122059858](http://i0.hdslb.com/bfs/album/9dbe01050cc2ba98e606fa61be35bde2c017cd4d.png)

* 使用正则表达式处理得到字符串和数字串

* 如果两串长度之差大于1,直接返回空串

* 定义一个函数: 函数传两个字符串参数,对传入的字符串进行拼接,默认str1.length >= str2.length,因为str2的长度短,对于访问不到的值拼接空字符串

* 依据字符串和数字串长度进行判断返回

``` js
var reformat = function (s) {
  let str = s.replace(/\d/g, '');       // 正则表达式处理得到字符串和数字分组
  let num = s.replace(/[a-z]/g, '');
  if (Math.abs(str.length - num.length) > 1) return '';     // 字符差的数量大于1直接返回空字符
  function strSplit(str1, str2) {         // 拼接两个不等长字符串函数: 默认 str1.length >= str2.length
    let res = ''
    for (let i = 0; i < str1.length; i++) {
      res += str2[i] === undefined ? str1[i] + '' : str1[i] + str2[i];      //遍历到最后,str2因为长度较短,所以访问不到str2[i],手动拼接一个空字符串
    }
    return res
  }
  return str.length >= num.length ? strSplit(str, num) : strSplit(num, str);
};
```

## [151. 翻转字符串里的单词](https://leetcode-cn.com/problems/reverse-words-in-a-string/)

![image-20220222151440118](http://i0.hdslb.com/bfs/album/545761f82038a17a591714cc97970b3411a6ede2.png)

**双指针法: O(1) 额外空间复杂度的原地解法**

1. 先对字符串转成可操作的数组并翻转

2. 对字符串中的每个单词翻转

3. 去除多余的空格和首尾的空格

``` js
var reverseWords = function (s) {
  var arr = [...s];
  var l = 0, r = arr.length - 1;

  // 翻转字符串
  function reverseStr(i, j) {
    let [l, r] = [i, j]
    while (l < r) {
      [arr[l], arr[r]] = [arr[r], arr[l]]
      l++
      r--
    }
  }

  // 翻转字符串中的单词
  function reverseWord() {
    let l = 0, r = 0;
    while (r < arr.length) {
      while (arr[r] === ' ') {
        r++
      }
      l = r
      while (arr[r] !== ' ' && arr[r]) {
        r++
      }
      reverseStr(l, r - 1)
    }
  }

  // 移除多余空格
  function removeSpace() {
    let [slow, fast] = [0, 0];
    while (fast < arr.length) {
      // 跳过首位和中间超过一的的空格
      if (arr[fast] === ' ' && (fast === 0 || arr[fast - 1] === ' ')) {
        fast++
      } else {
        arr[slow++] = arr[fast++]
      }
    }
    // 去除尾部的多余空格; 慢指针有可能在最后一个元素后面第一个或者第二个,所以需要判断
    arr.length = arr[slow - 1] === ' ' ? slow - 1 : slow;
  }

  reverseStr(l, r)
  reverseWord(arr)
  removeSpace(arr)
  return arr.join('')
};
```

**方法二:直接使用库函数**

``` js
var reverseWords = function (s) {
  return s.trim().split(/\s+/g).reverse().join(' ')
};
```

## [344. 反转字符串](https://leetcode-cn.com/problems/reverse-string/)

![image-20220222151909887](http://i0.hdslb.com/bfs/album/9b13de58f4fbf20b9411bd09ac1cd3980ffe1e21.png)

``` js
// 使用双指针从左右两边交换值
var reverseString = function (s) {
  let [l, r] = [-1, s.length]
  while (++l < --r) {         // 不太建议这样写,可读写略差,只是为了简洁
    [s[l], s[r]] = [s[r], s[l]]
  }
  return s
};
```

## [剑指 Offer 05. 替换空格](https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/)

![image-20220222152144804](http://i0.hdslb.com/bfs/album/1e8208615791af39224de09bbcd4ff8dd99e400b.png)

``` js
// 方法一: 读写双指针改写
var replaceSpace = function (s) {
  // 字符串分割为数组
  let arr = [...s], count = 0;

  // 计算出空格数,用来扩容
  for (let item of arr) {
    if (item === ' ') count++
  }

  // 左右双指针遍历
  let [l, r] = [arr.length - 1, arr.length + count * 2 - 1]
  while (l >= 0) {
    if (arr[l] === ' ') {       // 左指针遇到了空格,右指针开始写字符串,并不断左移
      arr[r--] = '0'
      arr[r--] = '2'
      arr[r--] = '%'
      l--                 // 右指针写完后,左指针左移
    } else {
      arr[r--] = arr[l--]     // 左指针遇到正常字符: 将左指针读到的值写入右指针,并各自左移
    }
  }
  return arr.join('')     // 拼接字符串
};


// 方法一: 直接使用api
var replaceSpace = function (s) {
  return s.replaceAll(' ', "%20")
};
```

