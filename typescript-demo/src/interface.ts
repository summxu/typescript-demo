/*
 * @Author: Chenxu
 * @Date: 2022-06-02 16:53:03
 * @LastEditTime: 2022-06-02 18:06:38
 * @Msg: 接口和type别名
 */
export default () => {
  // 穿过来的对象必须包含接口的属性
  interface Named {
    name: string
    // 方法
    say(age: number): void
  }

  class Person implements Named {
    age: number;
    name: string
    constructor() {
      this.name = '张三'
      this.age = 16
    }

    say(age: number) {
      console.log(age)
      console.log(`my name is ${this.name}`)
    }
  }

  // 定义一个类型，可以传一个对象
  const sayName = (o: Named | Person) => {
    console.log(o.name)
    o.say(16)
  }

  const Zhangsan = new Person()
  // sayName(Zhangsan)

  // 函数类型的接口
  interface printCallback {
    (success: boolean, name: string): void
  }

  const printCallback: printCallback = (suc) => {
    console.log(suc)
  }


  type NameString = string

  type Programmer = {
    skill: string
    name: string
    workingAge: number
  }
}