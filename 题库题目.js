const questions = {
  1006: {
    title: "A+B问题",
    description: "输入两个整数，计算并输出它们的和。",
    input: "输入两行，每行一个整数。输入值的范围为 -10000000000 到 10000000000。",
    output: "输出两个整数的和。",
    sampleInput: "1\n2",
    sampleOutput: "3"
  },
  1007: {
    title: "计算(a+b)*c的值",
    description: "给定三个整数 a、b、c，计算表达式 (a+b)*c 的值。",
    input: "输入三行，依次为整数 a、b、c。各整数满足 -10000 < a,b,c < 10000。",
    output: "输出表达式的计算结果。",
    sampleInput: "2\n3\n5",
    sampleOutput: "25"
  },
  1008: {
    title: "计算(a+b)/c的值(C++)",
    description: "给定三个整数 a、b、c，计算表达式 (a+b)/c 的整数结果。",
    input: "一行输入三个整数 a、b、c，以空格分隔。各整数满足 -10000 < a,b,c < 10000，且 c 不为 0。",
    output: "输出表达式的整数计算结果。",
    sampleInput: "1 1 3",
    sampleOutput: "0"
  },
  1009: {
    title: "带余除法",
    description: "给定被除数和非零除数，求整数商与余数。",
    input: "输入两行，依次为被除数和除数，除数不为 0。",
    output: "输出整数商和余数，以一个空格分隔。",
    sampleInput: "10\n3",
    sampleOutput: "3 1"
  },
  1010: {
    title: "计算分数的浮点数值",
    description: "给定分子 a 和非零分母 b，输出分数 a/b 的双精度浮点数值。",
    input: "输入两行，依次为整数 a 和整数 b。",
    output: "输出 a/b，保留小数点后 9 位。",
    sampleInput: "5\n7",
    sampleOutput: "0.714285714"
  },
  1011: {
    title: "交换两个正整数a和b的值",
    description: "输入两个正整数 a 和 b，交换它们的值后输出。",
    input: "输入两个正整数 a、b，每行一个。",
    output: "按 a、b 的顺序输出交换后的值，格式为 a=数值 b=数值。",
    sampleInput: "4\n5",
    sampleOutput: "a=5 b=4"
  },
  1012: {
    title: "圆柱体的表面积",
    description: "给定圆柱体的底面半径 r 和高 h，计算表面积。取 π=3.14159，表面积公式为 2πr²+2πrh。",
    input: "输入半径 r 和高 h，每行一个小数，数值不大于 10000。",
    output: "输出圆柱体表面积，保留小数点后 3 位。",
    sampleInput: "3.5\n9",
    sampleOutput: "274.889"
  },
  1013: {
    title: "鸡兔同笼的问题",
    description: "笼中只有鸡和兔。已知鸡有 2 只脚、兔有 4 只脚，给定头数 m 和脚数 n，求鸡和兔的数量。",
    input: "输入两个整数 m、n，分别表示头数和脚数，取值范围为 0 到 10⁶。保证数据合法。",
    output: "依次输出鸡和兔的数量，包含 0 时也要输出。",
    sampleInput: "12\n40",
    sampleOutput: "4 8"
  },
  1014: {
    title: "甲流疫情死亡率",
    description: "根据确诊人数和死亡人数，计算死亡率。",
    input: "输入两个整数，依次表示确诊人数和死亡人数。",
    output: "以百分数形式输出死亡率，保留小数点后 3 位。",
    sampleInput: "10433\n60",
    sampleOutput: "0.575%"
  },
  1015: {
    title: "计算多项式的值",
    description: "计算多项式 f(x)=ax³+bx²+cx+d 在给定 x 处的值。",
    input: "输入五个实数，依次为 x、a、b、c、d。每个数的绝对值不超过 100。",
    output: "输出 f(x)，保留小数点后 7 位。",
    sampleInput: "2.31\n1.2\n2\n2\n3",
    sampleOutput: "33.0838692"
  },
  1016: {
    title: "温度表达转化",
    description: "根据公式 C=5×(F−32)/9，将华氏温度转换为摄氏温度。",
    input: "输入一个实数 F，表示华氏温度，F≥−459.67。",
    output: "输出摄氏温度，保留小数点后 5 位。",
    sampleInput: "41",
    sampleOutput: "5.00000"
  },
  1017: {
    title: "与圆相关的计算",
    description: "给定圆的半径，计算直径、周长和面积。取 π=3.14159。",
    input: "输入一个实数 r，满足 0<r≤10000。",
    output: "依次输出直径、周长、面积，以空格分隔，每个数保留小数点后 4 位。",
    sampleInput: "3.0",
    sampleOutput: "6.0000 18.8495 28.2743"
  },
  1018: {
    title: "计算并联电阻的阻值",
    description: "给定两个电阻阻值 r1、r2，计算并联后的阻值。",
    input: "输入两个浮点数，分别表示两个电阻的阻值。",
    output: "输出并联电阻阻值，保留小数点后 2 位。",
    sampleInput: "1\n2",
    sampleOutput: "0.67"
  },
  1019: {
    title: "整型数据类型存储空间大小",
    description: "分别定义 int 和 short 类型变量，输出它们占用的存储空间。",
    input: "无输入。",
    output: "输出 int、short 变量占用的字节数，以空格分隔。",
    sampleInput: "",
    sampleOutput: "4 2",
    sampleHidden: true
  },
  1020: {
    title: "浮点型数据类型存储空间大小",
    description: "分别定义 float 和 double 类型变量，输出它们占用的存储空间。",
    input: "无输入。",
    output: "依次输出 float、double 变量占用的字节数，以空格分隔。",
    sampleInput: "",
    sampleOutput: "4 8",
    sampleHidden: true
  },
  1021: {
    title: "其他数据类型存储空间大小",
    description: "分别定义 bool 和 char 类型变量，输出它们占用的存储空间。",
    input: "无输入。",
    output: "依次输出 bool、char 变量占用的字节数，以空格分隔。",
    sampleInput: "",
    sampleOutput: "1 1",
    sampleHidden: true
  },
  1022: {
    title: "浮点数向零舍入",
    description: "输入一个单精度浮点数，将它向零舍入到整数。正数向下取整，负数向上取整。",
    input: "输入一个单精度浮点数。",
    output: "输出向零舍入后的整数。",
    sampleInput: "2.3",
    sampleOutput: "2"
  },
  1023: {
    title: "打印ASCII码",
    description: "输入一个除空格外的可见字符，输出它的 ASCII 码。",
    input: "输入一个除空格外的可见字符。",
    output: "输出该字符对应的十进制 ASCII 码。",
    sampleInput: "A",
    sampleOutput: "65"
  },
  1024: {
    title: "打印字符",
    description: "输入一个整数作为 ASCII 码，输出对应的可见字符。",
    input: "输入一个整数，保证其对应可见字符。",
    output: "输出对应字符。",
    sampleInput: "65",
    sampleOutput: "A"
  },
  1025: {
    title: "整型与布尔型的转换",
    description: "将输入的整数赋给布尔变量，再将布尔变量的值转换回整数并输出。",
    input: "输入一个 int 范围内的整数。",
    output: "输出转换后得到的整数。",
    sampleInput: "3",
    sampleOutput: "1"
  },
  1026: {
    title: "Hello,World!的大小",
    description: "使用 sizeof 计算字符串字面量 “Hello,World!” 所占用的空间大小。",
    input: "无输入。",
    output: "输出字符串所占用的字节数。",
    sampleInput: "",
    sampleOutput: "13",
    sampleHidden: true
  },
  1027: {
    title: "保留3位小数的浮点数",
    description: "读入一个单精度浮点数，并保留 3 位小数输出。",
    input: "输入一个单精度浮点数。",
    output: "输出该浮点数，保留小数点后 3 位。",
    sampleInput: "12.34521",
    sampleOutput: "12.345"
  },
  1028: {
    title: "保留12位小数的浮点数",
    description: "读入一个双精度浮点数，并保留 12 位小数输出。",
    input: "输入一个双精度浮点数。",
    output: "输出该浮点数，保留小数点后 12 位。",
    sampleInput: "3.1415926535798932",
    sampleOutput: "3.141592653580"
  },
  1029: {
    title: "空格分隔输出",
    description: "依次读入一个字符、一个整数、一个单精度浮点数和一个双精度浮点数，再按顺序输出。",
    input: "共四行，依次为字符、整数、单精度浮点数和双精度浮点数。",
    output: "输出四个值，以空格分隔；两个浮点数均保留 6 位小数。",
    sampleInput: "a\n12\n2.3\n3.2",
    sampleOutput: "a 12 2.300000 3.200000"
  },
  1030: {
    title: "输出浮点数",
    description: "读入一个双精度浮点数，并按四种格式输出。",
    input: "输入一个双精度浮点数。",
    output: "依次输出默认 %f 格式、保留 5 位小数的 %f 格式、%e 格式和 %g 格式，每种格式单独一行。",
    sampleInput: "12.3456789",
    sampleOutput: "12.345679\n12.34568\n1.234568e+01\n12.3457"
  },
  1031: {
    title: "字符菱形",
    description: "给定一个字符，用它构造一个对角线长 5 个字符、倾斜放置的菱形。",
    input: "输入一行，包含一个字符。",
    output: "输出由该字符构成的菱形。",
    sampleInput: "*",
    sampleOutput: "  *\n ***\n*****\n ***\n  *"
  },
  1033: {
    title: "计算球的体积",
    description: "给定球的半径 r，计算球的体积。公式为 V=4/3×π×r³，取 π=3.14。",
    input: "输入一个不超过 100 的非负实数 r。",
    output: "输出球的体积，保留小数点后 2 位。",
    sampleInput: "4",
    sampleOutput: "267.95"
  },
  1034: {
    title: "反向输出一个三位数",
    description: "将一个三位数反向输出。例如输入 358，输出 853。",
    input: "输入一个三位数 n。",
    output: "反向输出 n，保留反转后开头的 0。",
    sampleInput: "100",
    sampleOutput: "001"
  },
  1035: {
    title: "大象喝水",
    description: "大象需要喝 20 升水。给定一个圆桶的深度 h 和底面半径 r，求至少需要打水几次。圆桶体积为 πr²h 立方厘米，取 π=3.14159，1000 立方厘米等于 1 升。",
    input: "输入两个整数 h、r，分别表示圆桶的深度和底面半径，单位为厘米。",
    output: "输出至少需要打水的次数。",
    sampleInput: "23\n11",
    sampleOutput: "3"
  },
  1036: {
    title: "计算线段长度",
    description: "已知线段两个端点 A(x1,y1)、B(x2,y2)，求线段 AB 的长度。",
    input: "输入两行坐标，前两个实数为 x1、y1，后两个实数为 x2、y2。坐标绝对值不超过 10000。",
    output: "输出线段长度，保留小数点后 3 位。",
    sampleInput: "1 1\n2 2",
    sampleOutput: "1.414"
  },
  1037: {
    title: "计算三角形面积",
    description: "给定平面上三角形三个顶点的坐标，求三角形面积。",
    input: "一行输入六个浮点数，依次为三个顶点的 x、y 坐标。",
    output: "输出三角形面积，精确到小数点后 2 位。",
    sampleInput: "0 0 4 0 0 3",
    sampleOutput: "6.00"
  },
  1038: {
    title: "等差数列末项计算",
    description: "给出等差数列前两项 a1、a2，求第 n 项。",
    input: "输入三个整数 a1、a2、n。-100≤a1,a2≤100，0<n≤1000。",
    output: "输出第 n 项。",
    sampleInput: "1 4 100",
    sampleOutput: "298"
  },
  1039: {
    title: "A*B问题",
    description: "输入两个正整数 A、B，求 A×B。注意选择足够大的整数类型。",
    input: "一行输入两个正整数 A、B，以空格分隔，1≤A,B≤50000。",
    output: "输出两个整数的乘积。",
    samples: [
      { input: "3 4", output: "12" },
      { input: "100 100", output: "10000" },
      { input: "50000 50000", output: "2500000000" }
    ]
  },
  1040: {
    title: "计算2的幂",
    description: "给定非负整数 n，计算 2 的 n 次方。",
    input: "输入一个整数 n，0≤n<31。",
    output: "输出 2ⁿ。",
    sampleInput: "3",
    sampleOutput: "8"
  },
  1041: {
    title: "苹果和虫子",
    description: "一箱有 n 个苹果，虫子每 x 小时吃掉一个苹果。经过 y 小时后，求剩下的完整苹果数。虫子吃完一个苹果后才会吃下一个。",
    input: "输入 n、x、y，均为整数。",
    output: "输出剩下的完整苹果数。",
    samples: [
      { input: "10\n4\n9", output: "7" },
      { input: "5\n3\n20", output: "0" }
    ]
  },
  1042: {
    title: "数字拆分",
    description: "求任意三位正整数各位数字之和。",
    input: "输入一个三位正整数。",
    output: "输出它的三位数字之和。",
    sampleInput: "384",
    sampleOutput: "15"
  },
  1043: {
    title: "立方与平方",
    description: "将自然数的立方表示为两个整数平方之差。例：4³=10²−6²。输出格式中乘方使用重复相乘表示。",
    input: "输入一个自然数。",
    output: "输出立方与两个平方之差的等式。此题使用特殊判题，满足等式即可，答案不唯一。",
    samples: [
      { input: "4", output: "4*4*4=10*10-6*6" },
      { input: "100", output: "100*100*100=5050*5050-4950*4950" },
      { input: "1996", output: "1996*1996*1996=1993006*1993006-1991010*1991010" }
    ],
    specialJudge: true
  },
  1044: {
    title: "判断数正负",
    description: "判断整数 N 的正负：正数输出 positive，零输出 zero，负数输出 negative。",
    input: "输入一个整数 N，-10⁹≤N≤10⁹。",
    output: "按 N 的正负输出 positive、zero 或 negative。",
    sampleInput: "1",
    sampleOutput: "positive"
  },
  1045: {
    title: "输出绝对值",
    description: "输入一个浮点数，输出它的绝对值。",
    input: "输入一个绝对值不超过 10000 的浮点数。",
    output: "输出该数的绝对值，保留小数点后 2 位。",
    sampleInput: "-3.14",
    sampleOutput: "3.14"
  },
  1046: {
    title: "奇偶数判断",
    description: "判断给定正整数 n 是奇数还是偶数。",
    input: "输入一个大于零的正整数 n。",
    output: "奇数输出 odd，偶数输出 even。",
    sampleInput: "5",
    sampleOutput: "odd"
  },
  1047: {
    title: "奇偶ASCII值判断",
    description: "输入一个字符，判断它的 ASCII 值是奇数还是偶数。",
    input: "输入一个字符。",
    output: "ASCII 值为奇数输出 YES，否则输出 NO。",
    sampleInput: "A",
    sampleOutput: "YES"
  },
  1048: {
    title: "整数大小比较",
    description: "比较两个整数 x、y 的大小。",
    input: "输入两个整数 x、y，-2³¹≤x,y<2³¹。",
    output: "x>y 输出 >，x=y 输出 =，x<y 输出 <。",
    sampleInput: "1000\n100",
    sampleOutput: ">"
  },
  1049: {
    title: "判断是否为两位数",
    description: "判断一个正整数是否为两位数，即是否在 10 到 99 之间（包含边界）。",
    input: "输入一个不超过 1000 的正整数。",
    output: "是两位数输出 1，否则输出 0。",
    sampleInput: "54",
    sampleOutput: "1"
  },
  1050: {
    title: "收集瓶盖赢大奖",
    description: "拥有 10 个“幸运”瓶盖或 20 个“鼓励”瓶盖即可兑换大奖。判断是否满足兑换条件。",
    input: "输入两个整数，分别表示“幸运”和“鼓励”瓶盖的数量。",
    output: "可以兑换输出 1，否则输出 0。",
    sampleInput: "11\n19",
    sampleOutput: "1"
  },
  1051: {
    title: "判断一个数能否同时被3和5整除",
    description: "判断整数 n 能否同时被 3 和 5 整除。",
    input: "输入一个整数 n，-1000000<n<1000000。",
    output: "能同时被 3 和 5 整除输出 YES，否则输出 NO。",
    sampleInput: "15",
    sampleOutput: "YES"
  },
  1052: {
    title: "判断能否被3，5，7整除",
    description: "判断整数能被 3、5、7 中的哪些数整除，并按题目要求输出这些除数。",
    input: "输入一个整数。",
    output: "按从小到大输出可整除的数，以空格分隔；都不能整除时输出小写字母 n。",
    sampleInput: "105",
    sampleOutput: "3 5 7"
  },
  1053: {
    title: "有一门课不及格的学生",
    description: "给定一名学生的语文和数学成绩，判断是否恰好有一门课不及格（低于 60 分）。",
    input: "输入两个 0 到 100 之间的整数，分别表示语文和数学成绩。",
    output: "恰好有一门不及格输出 1，否则输出 0。",
    sampleInput: "50\n80",
    sampleOutput: "1"
  },
  1054: {
    title: "晶晶赴约会",
    description: "晶晶每周一、三、五有课。根据邀请日期判断她能否赴约。",
    input: "输入一个 1 到 7 的整数，表示星期一到星期日。",
    output: "可以赴约输出 YES，否则输出 NO。",
    sampleInput: "2",
    sampleOutput: "YES"
  },
  1055: {
    title: "骑车与走路",
    description: "步行速度为每秒 1.2 米；骑车速度为每秒 3.0 米，找车、开锁共需 27 秒，停车锁车需 23 秒。判断哪种方式更快。",
    input: "输入一个整数，表示路程（米）。",
    output: "骑车更快输出 Bike，步行更快输出 Walk，一样快输出 All。",
    sampleInput: "120",
    sampleOutput: "Bike"
  },
  1056: {
    title: "计算邮资",
    description: "邮件重量不超过 1000 克（含）时基本邮费为 8 元。超过部分每 500 克加收 4 元，不足 500 克按 500 克计；加急另加 5 元。",
    input: "输入重量（克）和一个字符，分别表示邮件重量及是否加急（y/n）。",
    output: "输出邮费（整数）。",
    sampleInput: "1200\ny",
    sampleOutput: "17"
  },
  1057: {
    title: "最大数输出",
    description: "输入三个整数，输出其中最大的数。",
    input: "输入三个整数。",
    output: "输出三个整数中的最大值。",
    sampleInput: "10\n20\n56",
    sampleOutput: "56"
  },
  1058: {
    title: "三角形判断",
    description: "给定三条正整数长度，判断它们能否构成三角形。",
    input: "输入三个正整数，分别表示三条线段的长度。",
    output: "能构成三角形输出 yes，否则输出 no。",
    sampleInput: "3\n4\n5",
    sampleOutput: "yes"
  },
  1059: {
    title: "判断闰年",
    description: "判断给定年份是否为闰年。能被 4 整除且不能被 100 整除，或能被 400 整除的年份是闰年。",
    input: "输入一个整数年份 a，0<a<3000。",
    output: "闰年输出 Y，否则输出 N。",
    sampleInput: "2006",
    sampleOutput: "N"
  },
  1060: {
    title: "点和正方形的关系",
    description: "判断给定点是否位于以 (1,-1)、(1,1)、(-1,-1)、(-1,1) 为顶点的正方形内，包含边界。",
    input: "输入两个整数 x、y，表示点的坐标。",
    output: "点在正方形内输出 yes，否则输出 no。",
    sampleInput: "1\n1",
    sampleOutput: "yes"
  },
  1061: {
    title: "简单计算器",
    description: "实现支持加、减、乘、除四种运算的整数计算器。运算结果在 int 范围内。",
    input: "输入两个整数和一个运算符（+、-、*、/）。",
    output: "输出运算结果。除数为 0 时输出 Divided by zero!；运算符无效时输出 Invalid operator!。",
    sampleInput: "1\n2\n+",
    sampleOutput: "3"
  },
  1062: {
    title: "求一元二次方程",
    description: "求一元二次方程 ax²+bx+c=0 的根，其中 a 不为 0。",
    input: "一行输入三个浮点数 a、b、c，以空格分隔。",
    output: "所有数值保留小数点后 5 位且符号间不加空格。两个实根相等时输出 x1=x2=根；两个实根不等时按从小到大输出 x1=小根;x2=大根；无实根输出 No answer!。",
    sampleInput: "-15.97 19.69 12.02",
    sampleOutput: "x1=-0.44781;x2=1.68075"
  },
  1063: {
    title: "分段函数",
    description: "根据下列分段函数计算 y=f(x)：0≤x<5 时 f(x)=−x+2.5；5≤x<10 时 f(x)=2−1.5(x−3)²；10≤x<20 时 f(x)=x/2−1.5。",
    input: "输入一个浮点数 N，0≤N<20。",
    output: "输出 f(N)，保留小数点后三位。",
    sampleInput: "1.0",
    sampleOutput: "1.500"
  },
  1064: {
    title: "星期几的第一个字母",
    description: "根据星期名称的首字母判断星期几。首字母重复时，需要继续读入第二个字母区分。",
    input: "输入星期英文名的第一个小写字母；若为 t 或 s，再输入第二个小写字母。",
    output: "输出完整的英文星期名称，全部使用小写字母。",
    samples: [
      { input: "f", output: "friday" },
      { input: "t\nh", output: "thursday" }
    ]
  },
  1065: {
    title: "最大数",
    description: "输入三个 int 类型整数，找出并输出最大值。",
    input: "输入三个整数。",
    output: "输出三个数中的最大值。",
    sampleInput: "10 30 20",
    sampleOutput: "30"
  },
  1066: {
    title: "一年中的第几天",
    description: "给定年月日，计算该日期是这一年的第几天。闰年规则：能被 4 整除且不能被 100 整除，或能被 400 整除。",
    input: "输入三个正整数，分别表示年、月、日。",
    output: "输出这一天在该年中的序号。",
    samples: [
      { input: "2013\n7\n12", output: "193" },
      { input: "2012\n5\n15", output: "136" }
    ]
  },
  1067: {
    title: "回文数判断",
    description: "判断输入的五位数是否为回文数，即正读和反读相同。",
    input: "输入一个五位数。",
    output: "是回文数输出 yes，否则输出 no。",
    samples: [
      { input: "12345", output: "no" },
      { input: "87478", output: "yes" }
    ]
  },
  1068: {
    title: "大写字母转换成小写字母",
    description: "输入一个字母。若为大写字母，将它转换为对应的小写字母；若已经是小写字母，则保持不变。",
    input: "输入一个大写或小写英文字母。",
    output: "输出转换后的字母。",
    samples: [
      { input: "A", output: "a" },
      { input: "g", output: "g" }
    ]
  },
  1069: {
    title: "计算人体BMI值",
    description: "根据身高（米）和体重（公斤）计算 BMI=体重/身高²，并输出对应英文状态：lean、normal weight、overweight、slightly obese、moderately obese 或 severe obesity。",
    input: "输入身高和体重。",
    output: "按 BMI 分类输出英文状态。",
    samples: [
      { input: "1.78\n75", output: "normal weight" },
      { input: "1.68\n49", output: "lean" },
      { input: "1.6\n75", output: "overweight" }
    ]
  },
  1070: {
    title: "求平均年龄",
    description: "给定班上每名学生的年龄，计算平均年龄。",
    input: "第一行输入学生人数 n（1≤n≤100），其后 n 行每行输入一个 15 到 25 之间的整数年龄。",
    output: "输出平均年龄，保留小数点后两位。",
    sampleInput: "2\n18\n17",
    sampleOutput: "17.50"
  }
};

const problemId = Number(document.body.dataset.problem);
const problem = questions[problemId];
const root = document.querySelector("#problem-page");

if (!problem || !root) {
  throw new Error(`题目 ${problemId} 的页面数据不存在。`);
}

document.title = `${problemId} ${problem.title}`;

function section(title, text) {
  const heading = document.createElement("h2");
  heading.textContent = title;
  const content = document.createElement("p");
  content.textContent = text;
  article.append(heading, content);
}

const article = document.createElement("article");
article.className = "panel";
const breadcrumb = document.createElement("div");
breadcrumb.className = "crumb";
breadcrumb.append(
  Object.assign(document.createElement("a"), { href: "主界面.html", textContent: "首页" }),
  document.createTextNode("　/　"),
  Object.assign(document.createElement("a"), { href: "主界面.html#problems", textContent: "题目" }),
  document.createTextNode(`　/　${problemId}`)
);
const title = document.createElement("h1");
title.textContent = `${problemId}　${problem.title}`;
const meta = document.createElement("div");
meta.className = "meta";
["难度：简单", "标签：基础语法", "时间限制：1000ms"].forEach((text) => {
  const item = document.createElement("span");
  item.textContent = text;
  meta.append(item);
});
article.append(breadcrumb, title, meta);
section("题目描述", problem.description);
section("输入描述", problem.input);
section("输出描述", problem.output);

const sampleTitle = document.createElement("h2");
sampleTitle.textContent = "样例输入";
const sampleInput = document.createElement("pre");
const samples = problem.samples || [{ input: problem.sampleInput || "", output: problem.sampleOutput }];
sampleInput.textContent = samples[0].input || "无";
article.append(sampleTitle, sampleInput);

const editorSection = document.createElement("section");
editorSection.className = "solution";
editorSection.innerHTML = `
  <div class="solution-heading"><h2>编写代码</h2><label class="language-picker">编程语言<select class="language-select" aria-label="选择编程语言"><option value="python">Python 3</option><option value="cpp">C++17</option></select></label></div>
  <div class="editor-bar"><strong class="file-name">main.py</strong><span>代码编辑区</span></div>
  <textarea class="code-editor" aria-label="代码编辑区" placeholder="在这里编写你的代码" spellcheck="false"></textarea>
  <div class="editor-actions"><button class="reset-code" type="button">清空代码</button></div>
  <p class="editor-status" role="status" aria-live="polite"></p>`;
const answerSection = document.createElement("section");
answerSection.className = "solution output-check";
answerSection.innerHTML = `
  <div class="output-heading"><h3>填写答案</h3></div>
  <p>运行你自己编写的程序后，把运行结果填写在这里进行样例比对。</p>
  <label class="sample-picker">测试样例<select class="sample-select"></select></label>
  <div class="sample-input"><div class="sample-input-label">样例输入</div><pre></pre></div>
  <textarea class="program-output" aria-label="填写你的答案" placeholder="填写你的程序输出，不会显示参考答案"></textarea>
  <div class="compare-actions"><button class="compare-output" type="button">检查答案</button></div>
  <p class="compare-status" role="status" aria-live="polite"></p>`;
const sampleSelect = answerSection.querySelector(".sample-select");
samples.forEach((sample, index) => {
  const option = document.createElement("option");
  option.value = String(index);
  option.textContent = `样例 ${index + 1}`;
  sampleSelect.append(option);
  const referenceAnswer = document.createElement("template");
  referenceAnswer.className = "sample-case";
  referenceAnswer.dataset.input = sample.input;
  referenceAnswer.content.textContent = sample.output;
  answerSection.append(referenceAnswer);
});
if (problem.specialJudge) {
  answerSection.querySelector(".output-check > p").textContent = "本题为特殊判题，答案不唯一；此处仅对照题目给出的样例文本。";
}
article.append(editorSection, answerSection);
root.append(article);
