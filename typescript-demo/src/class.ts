/*
 * @Author: Chenxu
 * @Date: 2022-06-02 15:12:20
 * @LastEditTime: 2022-06-02 16:40:58
 * @Msg: Nothing
 */
export default () => {
  // 定义一个模板
  class Person {
    // 声明变量
    public name: string
    public age: number
    protected tall: number
    private kg: number

    static abc: string

    readonly shiji: number = 21

    // 创建构造函数
    constructor(name: string, age: number) {
      this.name = name
      this.age = age
      this.tall = 12
      this.kg = 32
    }
    // 声明方法
    say() {
      return '我的名字叫' + this.name + ',今年' + this.age + '岁!' + this.kg
    }
  }

  class Programmer extends Person {
    skill: string[];
    workingAge: number;
    constructor(skill: string[], workingAge = 2) {
      super('张三', 22)
      this.skill = skill
      this.workingAge = workingAge
    }
    say() {
      let str: string
      console.log(super.say(), super.tall) // 使用 super 可以调用父类方法和属性
      str = `我是${this.name}，我只会说 hello word`
      str += `我的技能是${this.skill.toString()}`
      str += `我的工龄是${this.workingAge}`
      return str
    }
  }

  // 生成一个对象
  const aPerson = new Person('陈旭', 15)
  const aProgrammer = new Programmer(['java', 'python'])

  aPerson.name = '张三'

  // console.log(aPerson.say())
  // console.log(aProgrammer.say())
}