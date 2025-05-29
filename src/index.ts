// 基本类型示例
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];

// 枚举示例
enum Color {
    Red,
    Green,
    Blue,
}
let c: Color = Color.Green;

// 接口示例
interface User {
    name: string;
    age: number;
}

// 函数示例
function greet(user: User): string {
    return `Hello, ${user.name}! You are ${user.age} years old.`;
}

// 使用示例
const user: User = {
    name: "TypeScript",
    age: 10
};

function strToJson(str: string) {
    return JSON.parse(str);
}

const jsonStr = "[{\"平台\":\"平台1\",\"项目\":\"项目1\",\"具体内容\":\"智能推荐算法优化\",\"负责人\":\"张伟\"},{\"具体内容\":\"用户画像数据清洗\",\"负责人\":\"李娜\"},{\"项目\":\"项目2\",\"具体内容\":\"移动端支付接口开发\",\"负责人\":\"王强\"},{\"平台\":\"平台2\",\"项目\":\"项目3\",\"具体内容\":\"后台风控系统对接\",\"负责人\":\"陈婷\"},{\"具体内容\":\"供应链库存预测模型训练\",\"负责人\":\"周杰\"},{\"具体内容\":\"物流路径优化方案测试\",\"负责人\":\"吴敏\"},{\"项目\":\"项目4\",\"具体内容\":\"跨境结算多币种适配开发\",\"负责人\":\"杨阳\"},{\"平台\":\"平台3\",\"项目\":\"项目5\",\"具体内容\":\"财务对账自动化脚本编写\",\"负责人\":\"徐峰\"}]";
console.log(strToJson(jsonStr)); 