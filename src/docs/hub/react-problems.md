### React 的状态更新机制

React 使用浅比较（shallow comparison）来检测状态或属性的变化。如果引用（reference）发生了变化，React 会认为状态或属性发生了变化，并重新渲染组件。否则，它会认为状态没有改变，不会重新渲染组件。

### 浅比较和深比较

- **浅比较**：只比较对象或数组的顶层引用是否改变。例如，对象的引用是否是新的，数组的引用是否是新的。
- **深比较**：递归地比较对象或数组的每一个层次的内容。

### 例子：直接修改数组内部对象的属性

假设我们有一个数组 `data`：

```javascript
const data = [
  { id: 1, value: 10 },
  { id: 2, value: 20 },
];
```

如果我们直接修改数组中的对象属性，例如：

```javascript
const newData = [...data];
newData[0].value = 30;
```

`newData` 是一个新的数组实例（新的引用），但是 `newData[0]` 仍然指向原来的对象 `{ id: 1, value: 10 }`。所以 `newData[0].value` 的变化实际上修改了原对象。

尽管 `newData` 的引用改变了，但内部对象的引用没有变。React 在进行浅比较时只看顶层引用（即数组本身），而不看内部对象，所以可能无法检测到需要重新渲染。

### 正确的不可变操作

要确保 React 能检测到变化，我们需要对数组和数组内部的对象都进行不可变操作。即创建数组的新实例和对象的新实例。

```javascript
const newData = data.map((item) => {
  if (item.id === 1) {
    return { ...item, value: 30 }; // 创建对象的新实例
  }
  return item; // 保持不变的对象引用
});
```

现在，`newData` 是一个新的数组实例，并且 `newData[0]` 也是一个新的对象实例。这样，React 在进行浅比较时，会检测到数组和对象的引用都发生了变化，从而触发重新渲染。

### 示例代码

让我们应用到你的示例中：

```javascript
import { Table } from "antd";
import { useState } from "react";
import "antd/dist/antd.css";

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "住址",
    dataIndex: "address",
    key: "address",
  },
];

const data = [
  {
    key: "1",
    name: "胡彦斌",
    age: 32,
    address: "西湖区湖底公园1号",
  },
  {
    key: "2",
    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
];

function App() {
  const [dataSource, setDataSource] = useState(data);

  const handleButtonClick = () => {
    // 创建 dataSource 的新副本，并更新年龄
    const updatedData = dataSource.map((item, index) => {
      if (index === 0) {
        return { ...item, age: item.age + 1 }; // 创建新的对象实例
      }
      return item; // 其他对象保持不变
    });

    // 更新状态
    setDataSource(updatedData);
  };

  return (
    <>
      <Table dataSource={dataSource} columns={columns} />
      <button onClick={handleButtonClick}>添加</button>
    </>
  );
}

export default App;
```

### 关键点总结

1. **创建新的数组实例**：使用 `map` 或其他方法来创建新的数组。
2. **创建新的对象实例**：在需要更新的地方使用对象解构来创建新的对象实例。
3. **更新状态**：使用 `setState` 来更新状态，React 会检测到新引用并重新渲染组件。

通过确保每个层次的数据都是新的实例，React 将能够检测到状态的变化，并触发必要的重新渲染。
