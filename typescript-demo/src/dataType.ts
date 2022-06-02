export default () => {
  let name: string = 'i am string'
  name = 'new string'

  // 数组定义 第一种方式
  let myArr: string[] = ['boomxu', '陈旭']
  let myNumberArr: number[] = [1, 2, 3, 6657]

  // 数组定义 第二种方式（泛型）
  let myArr1: Array<string> = ['boomxu', '陈旭']
  let myNumberArr1: Array<number> = [1, 2, 3, 6657]
  let myBooleanArr1: Array<boolean> = [true, false, !0]

  myArr1.push('123')
  let num = myNumberArr1[0] // 已经定义过的类型，赋值给另一个变量的时候，不需要再定义类型了

  // 元组
  const tuper: [string, number] = ['abc', 123] // 定义数组不同的值的类型，有序，数量固定

  // 函数
  const add = (a: number, b: string, c = false, d?: number): number => { // 函数形参的默认值可以不写类型
    // console.log(c)
    if (d) {
      return a + Number(b) + d // 有可选参数，需要加判断保证程序可行
    } else {
      return a + Number(b)
    }
  }
  let tempResult = add(123, 'hello') // 已经定义过的类型，赋值给另一个变量的时候，不需要再定义类型了
  add(456, 'hello') // 形参指定了默认值可以不传实参
  // tempResult.split() // 报错，因为 tempResult 的类型是 number，number没有 split 方法
  tempResult.toFixed(1) // 根据函数的返回类型来决定可以调用的方法

  // Rest参数(形参不固定)
  const restFunc = (a: number, b: number, ...num: number[]): number => { // rest 参数必须是数组类型
    return a + b + num.reduce((a, b) => a + b)
  }
  let tempNum = restFunc(1, 2, 3, 4, 5, 6, 7, 8, 0, 9)
  // console.log(tempNum)

  // any 参数的函数可以进行进一步的判断
  let isNumberFun = (value: any): value is number => {
    return true
  }

  // union 联合类型
  const logFun = (value: string | number | null) => {
    return value
  }
  const logReslut = logFun('123123')
  // console.log(logReslut)

  // enum 枚举类型（增加可读性）
  enum Subject {
    数学 = 100, 语文, 英语, 政治, 生物, 地理, 化学, 物理
  }
  let day = Subject.化学
  // console.log(day)
}