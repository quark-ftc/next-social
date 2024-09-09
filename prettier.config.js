const prettierConfig = {
  experimentalTernaries: true, //使用实验性的三元表达式格式
  printWidth: 80, //行首选宽度，default: 80
  tabWidth: 2, //缩进宽度，default：2
  useTabs: false, // 使用 tab 而不是空格缩进，default:false,
  semi: true, //语句末尾打印分号，default:true
  singleQuote: true, //使用单引号而不是双引号，default:false
  quoteProps: 'as-needed', //给对象中的属性加引号，default:'as-needed',
  jsxSingleQuote: true, //在 JSX 中使用单引号而不是双引号，default:false
  trailingComma: 'all', //尾随逗号，default:'all'
  bracketSpacing: true, //对象字面量括号中添加加空格，default:true,
  bracketSameLine: false, //将多行 HTML（HTML、JSX、Vue、Angular）元素的 > 放在最后一行的末尾，而不是单独放在下一行（不适用于自关闭元素）,default:false
  arrowParens: 'always', //在唯一的箭头函数参数周围包含括号，default:'always',
  vueIndentScriptAndStyle: true, // 是否缩进 vueSFC 中顶级的<script>和<style>标签
  endOfLine: 'lf', //结束行，default:'lf'
  embeddedLanguageFormatting: 'auto', //是否格式化嵌入在文件中的引用代码，default:'auto':如果 Prettier 可以自动识别嵌入代码，则格式化嵌入代码。
  singleAttributePerLine: false, // 在 HTML、Vue 和 JSX 中每行强制执行单个属性，default:false
};

export default prettierConfig;
