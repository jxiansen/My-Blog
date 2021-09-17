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

