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

