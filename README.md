###关于ReactNative

![image.png](https://upload-images.jianshu.io/upload_images/207335-411c9695c52ad86f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
React Native (简称RN)是Facebook于2015年4月开源的跨平台移动应用开发框架，是Facebook早先开源的JS框架 React 在原生移动应用平台的衍生产物，目前支持iOS和安卓两大平台。RN使用Javascript语言，类似于HTML的JSX，以及CSS来开发移动应用，因此熟悉Web前端开发的技术人员只需很少的学习就可以进入移动应用开发领域。

###搭建开发环境

[在macOS上搭建ReactNative开发环境](https://reactnative.cn/docs/getting-started.html)

[在Windows上搭建ReactNative开发环境](https://reactnative.cn/docs/getting-started/)

本文在macOS上搭建

1. 安装Node.js.
2. 安装Watchman .
3. 安装Yarn.
4. React Native 命令行工具
5. Xcode/AndroidStudio。

#### 安装Node.js

`Node.js`是一个基于Chrome JavaScript运行时建立的平台， 用于方便地搭建响应速度快、易于扩展的网络应用。`Node.js` 使用事件驱动， 非阻塞`I/O` 模型而得以轻量和高效，非常适合在分布式设备上运行数据密集型的实时应用。

我们推荐使用[Homebrew](http://brew.sh/)来安装 Node 和 Watchman。

首先我们先安装一下Homebrew 执行下面命令

```/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)”```

然后在安装node在执行下列命令安装：

```brew install node```

安装完成后输入命令

```npm - v```

查看一下安装的版本号说明安装成功

下面是npm常用的命令

- 安装项目所依赖的第三方组件

   ```npm install```

- 往npm上发布一些组件

   ```npm publish```



安装完 Node 后建议设置 npm 镜像以加速后面的过程（或使用科学上网工具）。

```npm config set registry httpsregistry.npm.taobao.org —-global```

```npm config set disturl https://.npm.taobao.org/dist -global```

#### 安装watchman

[Watchman](https://facebook.github.io/watchman)则是由 Facebook 提供的监视文件系统变更的工具。安装此工具可以提高开发时的性能（packager 可以快速捕捉文件的变化从而实现实时刷新）。

```brew install watchman```

#### 安装Yarn

[Yarn](http://yarnpkg.com/)是 Facebook 提供的替代 npm 的工具，可以加速 node 模块的下载。React Native 的命令行工具用于执行创建、初始化、更新项目、运行打包服务（packager）等任务。

```npm install -g yarn react-native-cli```



安装完 yarn 后同理也要设置镜像源：

``` config set registry https://registry.npm.taobao.org --global```

```yarn config set disturl https://npm.taobao.org/dist —global```



安装完 yarn之后就可以用 yarn 代替 npm了，例如用yarn代替```npm install```命令，用yarn add 某第三方库名代替```npm install``` 就可以某第三方库名。

#### 安装React Native 命令号工具

通过```npm install```安装React Native 命令行工具.

打开终端,输入并执行下面的命令即可完成安装

```npm install -g react-native-cli```

![image.png](https://upload-images.jianshu.io/upload_images/207335-f748bcf2ca208f49.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


输入查看react-native命令

```react-native —help```

#### 安装Xcode/AndroidStudio

Xcode 是运行在操作系统Mac OS X上的集成开发工具IDE，由Apple Inc开发。Xcode是开发 macOS 和 iOS 应用程序的最快捷的方式。Xcode 具有统一的用户界面设计，编码、测试、调试都在一个简单的窗口内完成。

[Xcode下载链接](https://itunes.apple.com/cn/app/xcode/id497799835?mt=12)

Android Studio 是谷歌推出的一个Android集成开发工具，基于IntelliJ IDEA. 类似 Eclipse ADT，Android Studio 提供了集成的 Android 开发工具用于开发和调试。

[AndroidStudio下载链接](https://developer.android.google.cn/studio)

### 配置编译器

[十大最受欢迎的 React Native 应用开发编辑器](https://blog.csdn.net/csdnnews/article/details/78042121)

这里我选择的是VsCode

##### 安装VsCode

[官网地址:VS Code](https://code.visualstudio.com/)

##### 安装ReactNative插件

- 启动 VS Code
- 调用 View>Command Palette…
- 输入```install```, 然后选择 Extensions: Install Extension action
- 在搜索框输入 ReactNative Tools , 在搜索结果列表中选择 ‘ReactNative Tools’, 然后点击 Install 选择 ‘OK’ 重新启动 VS Code

[使用VS Code打造现代化的React Native开发环境](http://www.reactpeixun.com/reactnativejiaocheng/2017-02-15/266.html)

### 创建第一个ReactNativeApp

```react-native init HelloReactNativeApp```

创建完成后

![image.png](https://upload-images.jianshu.io/upload_images/207335-27839c83c5a832ba.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

创建完成后我们打开文件

文件目录如下图

![image.png](https://upload-images.jianshu.io/upload_images/207335-42ff6e1fad237f3a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

让我们运行一下我们的第一个ReactNativeApp

首先进入到创建的’HelloReactNativeApp’的目录下执行

```react-native run-ios```

ReactNative 会自动启动一个本地服务

![image.png](https://upload-images.jianshu.io/upload_images/207335-af39a17fa1509428.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


![image.png](https://upload-images.jianshu.io/upload_images/207335-c2f4bd3ad9080b7d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




然后我们就可以在VS Code上编写自己的代码了.

我们在开发的过程中往往需要调试代码

真机调试时晃动设备就可以打开调试选项， 模拟器调试时还可以使用如下快捷键。

iOS 模拟器快捷键:```command + D ```。

 Android 模拟器快捷键:```command + M ```。

调试效果如图 。

![image.png](https://upload-images.jianshu.io/upload_images/207335-ecbb811a209d02dd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


这里打开 Enable Live Reload 选项 ，这样在 React Native 项目中做任何修改后 ， 不需要重新启动或加载 App ， 运行中的 App 都可 以 自动更新了。

点击Debug JS Remotely 会进入如下图所示的Sources面板,然后就可以进行Debug了

![image.png](https://upload-images.jianshu.io/upload_images/207335-af0416722d302796.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


### Props(属性) State(状态)

##### Props(属性)

大多数组件在创建时就可以使用各种参数来进行定制。用于定制的这些参数就称为```props```（属性）。

以常见的基础组件```Image```为例，在创建一个图片时，可以传入一个名为source的 ```prop``` 来指定要显示的图片的地址，以及使用名为```style```的 ```prop``` 来控制其尺寸。

```javascript
import React, { Component } from 'react';
import { Image } from 'react-native';

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}} />
    );
  }
}
```

请注意```{pic}```外围有一层括号，我们需要用括号来把```pic```这个变量嵌入到 JSX 语句中。括号的意思是括号内部为一个 js 变量或表达式，需要执行后取值。因此我们可以把任意合法的 JavaScript 表达式通过括号嵌入到 JSX 语句中。

自定义的组件也可以使用```props```。通过在不同的场景使用不同的属性定制，可以尽量提高自定义组件的复用范畴。只需在```render```函数中引用```this.props```，然后按需处理即可。

```javascript
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', marginTop: 50}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
  }
}

```



我们在```Greeting```组件中将```name```作为一个属性来定制，这样可以复用这一组件来制作各种不同的“问候语”。上面的例子把```Greeting```组件写在 JSX 语句中，用法和内置组件并无二致——这正是 React 体系的魅力所在.

#####  State(状态)

我们使用两种数据来控制一个组件：```props```和```state```。```props```是在父组件中指定，而且一经指定，在被指定的组件的生命周期中则不再改变。 对于需要改变的数据，我们需要使用```state```。

一般来说，你需要在 ```constructor``` 中初始化state（译注：这是 ES6 的写法，早期的很多 ES5 的例子使用的是 ```getInitialState``` 方法来初始化 ```state```，这一做法会逐渐被淘汰），然后在需要修改时调用```setState```方法。

假如我们需要制作一段不停闪烁的文字。文字内容本身在组件创建时就已经指定好了，所以文字内容应该是一个```prop```。而文字的显示或隐藏的状态（快速的显隐切换就产生了闪烁的效果）则是随着时间变化的，因此这一状态应该写到```state```中。

```javascript
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Blink extends Component {
  // 声明state对象
  state = { isShowingText: true };
  
  componentDidMount() {
    // 每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
      this.setState({
        isShowingText: !this.state.isShowingText
      });
    }, 1000);
  }

  render() {
    // 根据当前showText的值决定是否显示text内容
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text>{this.props.text}</Text>
    );
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View>
    );
  }
}

```

实际开发中，我们一般不会在定时器函数（```setInterval```、```setTimeout``` 等）中来操作``` state```。典型的场景是在接收到服务器返回的新数据，或者在用户输入数据之后。你也可以使用一些“状态容器”比如[Redux](http://redux.js.org/index.html)来统一管理数据流。

每次调用```setState```时，```BlinkApp``` 都会重新执行``` render ```方法重新渲染。这里我们使用定时器来不停调用```setState```，于是组件就会随着时间变化不停地重新渲染。

- 一切界面变化都是状态state变化

- state的修改必须通过setState()方法

- - this.state.likes = 100; // 这样的直接赋值修改无效！
  - setState 是一个 merge 合并操作，只修改指定属性，不影响其他属性
  - setState 是异步操作，修改不会马上生效





### ReactNative的生命周期

第一阶段：是组件第一次绘制阶段，如图中的上面虚线框内，在这里完成了组件的加载和初始化；

第二阶段：是组件在运行和交互阶段，如图中左下角虚线框，这个阶段组件可以处理用户交互，或者接收事件更新界面；

第三阶段：是组件卸载消亡的阶段，如图中右下角的虚线框中，这里做一些组件的清理工作

![image.png](https://upload-images.jianshu.io/upload_images/207335-fd747ac0d8f1c9b8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


##### 绘制阶段

- ###### ```defaultProps:(ES5为getDefaultProps)```

该函数用于初始化一些默认的属性，通常会将固定的内容放在这个函数 中进行初始化和赋值；

​    在组件中，可以利用```this.props```获取在这里初始化它的属性，由于组件初始化后，再次使用该组件不会调用```getDefaultProps```函数，所以组件自己不可以自己修改```props```（即：```props```可认为是只读的），只可由其他组件调用它时在外部修改。

- ###### ```construstor:(ES5为getInitialState)```

该函数是用于对组件的一些状态进行初始化；

​    由于该函数不同于```defaultProps```,在以后的过程中，会再次调用，所以可以将控制控件的状态的一些变量放在这里初始化，如控件上显示的文字，可以通过```this.state```来获取值，通过```this.setState```来修改```state```值， 比如：

```javascript
this.setState({
    activePage: activePage, 
    currentX: contentOffSetX  
});
```



注意：一旦调用了```this.setState```方法，组件一定会调用```render```方法，对组件进行再次的渲染，不过，如果React框架会自动根据DOM的状态来判断是否需要真正的渲染。

- ###### ```componentWillMount```

相当于OC中的```ViewWillAppear```方法，在组件将要被加载在视图上之前调用，功能相对较少。

- ###### ```render```

```render```是一个组件中必须有的方法，本质上是一个函数，并返回JSX或其他组件来构成DOM，和Android的XML布局类似，注意：**只能返回一个顶级元素** ;

​    此外，在```render```函数中，只可通过```this.state```和```this.props```来访问在之前函数中初始化的数据值 。

- ###### ```componentDidMount```

在调用了```render```方法后，组件加载成功并被成功渲染出来以后，所要执行的后续操作，一般会在这个函数中处理网络请求等加载数据的操作；

​    因为UI已经成功被渲染出来， 所以放在这个函数里进行请求操作，不会出现UI上的错误。

##### 运行和交互阶段

- ###### ```componentWillReceiveProps```

指父元素对组件的```props```或```state```进行了修改

- ###### ```shouldComponentUpdate```

一般用于优化，可以返回```false```或```true```来控制是否进行渲染

- ###### ```componentWillUpdate```

组件刷新前调用，类似```componentWillMount```

- ###### ```componentDidUpdate```

更新后的hook

##### 组件卸载消亡的阶段

- ###### ```componentWillUnmount```

用于清理一些无用的内容，如：点击事件Listener，只有一个过程,定时器的销毁等等操作

##### 基本总结：

| 方法名                    | 作用                                                         | 调用次数 |
| ------------------------- | ------------------------------------------------------------ | -------- |
| construstor               | 构造函数,初始化需要state                                     | 1次      |
| componentWillMount        | 控件渲染前触发                                               | 1次      |
| render                    | 渲染控件的方法                                               | 多次     |
| componentDidMount         | 控件渲染后触发                                               | 1次      |
| componentWillReceiveProps | 组件接收到新的props被调用                                    | 多次     |
| shouldComponentUpdate     | 组间接收到新的props或state时调用                             | 多次     |
| componentWillUpdate       | 组件接收到新的props或state时调用,shouldComponentUpdate返回为true时调用 | 多次     |
| componentDidUpdate        | 组件更新后调用                                               | 多次     |
| componentWillUnmount      | 卸载组件调用                                                 | 1次      |

##### 常用知识点

- ###### `this.state`

开发中组件免不了要与用户互动，React 的一大创新，就是将组件看成是一个状态机，一开始有一个初始状态，然后用户互动，导致状态变化，从而触发重新渲染 UI。

当用户点击组件，导致状态变化，`this.setState` 方法就修改状态值，每次修改以后，自动调用 ```this.render``` 方法，再次渲染组件。

可以把组件看成一个“状态机”. 根据不同的```status```有不同的UI展示。只要使用```setState```改变状态值，根据diff算法算出来有差以后，就会执行ReactDom的render方法，重新渲染页面。

注意：由于 ```this.props``` 和``` this.state``` 都用于描述组件的特性，可能会产生混淆。一个简单的区分方法是，```this.props``` 表示那些一旦定义，就不再改变的特性，而 this.state 是会随着用户互动而产生变化的特性。

```javascript
class ClickState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0
    };
  }
  buttonClick() {
    var count = this.state.clickCount;
    count++;
    this.setState({
      clickCount: count
    });
  }
  render() {
    return (
      <View style={styles.constructor}>
        <TouchableOpacity onPress={() => this.buttonClick()}>
          <Text>我是一个按钮请点击</Text>
        </TouchableOpacity>
        <Text> 按钮点击了{this.state.clickCount} </Text>
      </View>
    );
  }
}
```

> **什么是DOM Diff 算法**
>
>  Web界面由DOM树来构成，当其中某一部分发生变化时，其实就是对应的某个DOM节点发生了变化。在React中，构建UI界面的思路是由当前状态决定界面。前后两个状态就对应两套界面，然后由React来比较两个界面的区别，这就需要对DOM树进行Diff算法分析。
>
> ​    即给定任意两棵树，找到最少的转换步骤。但是标准的的Diff算法复杂度需要O(n^3)，这显然无法满足性能要求。要达到每次界面都可以整体刷新界面的目的，势必需要对算法进行优化。这看上去非常有难度，然而Facebook工程师却做到了，他们结合Web界面的特点做出了两个简单的假设，使得Diff算法复杂度直接降低到O(n)
>
> 1. 两个相同组件产生类似的DOM结构，不同的组件产生不同的DOM结构；
>     
> 2. 对于同一层次的一组子节点，它们可以通过唯一的id进行区分。
>     
>
> ​    算法上的优化是React整个界面Render的基础，事实也证明这两个假设是合理而精确的，保证了整体界面构建的性能。

- ###### 获取真实的DOM节点

在React Native中，组件并不是真实的 DOM 节点，而是存在于内存之中的一种数据结构，叫做虚拟 DOM （virtual DOM）。

   只有当它插入文档以后，才会变成真实的 DOM 。

   根据 React 的设计，所有的 DOM 变动，都先在虚拟 DOM 上发生，然后再将实际发生变动的部分，反映在真实 DOM上，这种算法叫做 DOM diff，它可以极大提高网页的性能表现。

   但是，有时需要从组件获取真实 DOM 的节点，这时就要用到 `ref` 属性;

如下图代码中，组件 View 的子节点有一个文本输入框，用于获取用户的输入。这时就必须获取真实的 DOM 节点，虚拟 DOM 是拿不到用户输入的。为了做到这一点，文本输入框必须有一个 ref属性，然后 `this.refs.[refName]` 就会返回这个真实的 DOM 节点。

   需要注意的是，由于 `this.refs.[refName]` 属性获取的是真实 DOM ，所以必须等到虚拟 DOM 插入文档以后，才能使用这个属性，否则会报错。上面代码中，通过为组件指定 Click 事件的回调函数，确保了只有等到真实 DOM 发生 Click 事件之后，才会读取 `this.refs.[refName]` 属性。

```javascript
class TextInputTest extends Component {
  buttonClick() {
    var textInput = this.refs.textInput;
    textInput.focus();
    console.log(textInput.props.placeholder);
  }
  render() {
    return (
      <View style={styles.constructor}>
        <TouchableOpacity onPress={() => this.buttonClick()}>
          <Text>按钮点击</Text>
        </TouchableOpacity>
        <TextInput ref="textInput" placeholder="请输入文字" />
      </View>
    );
  }
}
```

### style(样式)

在 React Native 中，所有的核心组件都接受名为`style`的属性。这些样式名基本上是遵循了 web 上的 CSS 的命名，只是按照 JS 的语法要求使用了驼峰命名法，例如将`background-color`改为`backgroundColor`。

`style`属性可以是一个普通的 JavaScript 对象。这是最简单的用法，因而在示例代码中很常见。你还可以传入一个数组——在数组中位置居后的样式对象比居前的优先级更高，这样你可以间接实现样式的继承。

实际开发中组件的样式会越来越复杂，我们建议使用`StyleSheet.create`来集中定义组件的样式。

```javascript
export default class Styles extends Component {
  render() {
    return (
        <View style={styles.container}>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigBlue}>just bigBlue</Text>
        <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
        <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        marginTop:20,
    },
    bigBlue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    red: {
      color: 'red',
    },
  });
```

##### 关于样式的几种写法

- 普通内联样式:{{}},第一层｛｝是表达式，第二层｛｝是js对象；    

```javascript
<View style={{fontSize:40, width:80,}}> </View>
```

- 调用样式表:{样式类.属性}

```javascript
<View style={styles.container}></View>
```

-  样式表和内联样式共存:{[]}

```javascript
<View style={[styles.container, {fontSize:40, width:80}]}>
```

- 多个样式表:{[样式类1， 样式类2]}

```javascript
<View style={[styles.container, styles.color]}>
```

### Flexbox布局

1. FlexBox是什么意思呢？

   **flexible**（形容词）：能够伸缩或者很容易变化，以适应外界条件的变化

   **box**（名词）：通用的矩形容器

2. 什么是FlexBox布局?

   弹性盒模型（The Flexible Box Module）,又叫Flexbox，意为“弹性布局”，旨在通过弹性的方式来对齐和分布容器中内容的空间，使其能适应不同屏幕，为盒装模型提供最大的灵活性。

   ​    Flex布局主要思想是：让容器有能力让其子项目能够改变其宽度、高度（甚至是顺序），以最佳方式填充可用空间；

   ​    React native中的FlexBox是这个规范的一个**子集**。

3. 大部分情况下是处理图中FlexItem在FlexContainer中的位置和尺寸关系?

   ![image.png](https://upload-images.jianshu.io/upload_images/207335-9010f5f5b755eb68.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


4. Flex布局基于flex-flow流

   容器默认存在两根轴：**水平的主轴（main axis)和垂直的交叉轴（cross axis）**。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。

   

   - 项目默认沿主轴排列，单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。

   ![image.png](https://upload-images.jianshu.io/upload_images/207335-4691a65137b25954.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


   - 根据伸缩项目排列方式的不同，主轴和侧轴方向也有所变化

   ![image.png](https://upload-images.jianshu.io/upload_images/207335-48b851b22bfc26e9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


5. 在React中，Flexbox有6种容器属性，6种项目属性。而在React Native中，有4个容器属性，2个项目属性，分别是：

   - 容器属性：`flexDirection`  `flexWrap`  `justifyContent`  `alignItems`

   - 项目属性：`flex`  `alignSelf`

     - flexDirection容器属性: `row | row-reverse | column | column-reverse`

       该属性决定主轴的方向（即项目的排列方向）。

       row：主轴为水平方向，起点在左端。

       row-reverse：主轴为水平方向，起点在右端。

       column(默认值)：主轴为垂直方向，起点在上沿。

       column-reverse：主轴为垂直方向，起点在下沿。

       ![image.png](https://upload-images.jianshu.io/upload_images/207335-55ede21b28dca545.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


       ```javascript
        // 尝试把`justifyContent`改为`center`看看
        // 尝试把`flexDirection`改为`row`看看
        <View style={{flex: 1,flexDirection: "column"}}>
          <View style={{ width: 50, height: 50, backgroundColor: "powderblue" }}/>
          <View style={{ width: 50, height: 50, backgroundColor: "skyblue" }} />
          <View style={{ width: 50, height: 50, backgroundColor: "steelblue" }} />
        </View>
       ```

     -  flexWrap容器属性: `nowrap | wrap | wrap-reverse`

       默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行

       ![image.png](https://upload-images.jianshu.io/upload_images/207335-1c240b6a6384e412.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


       nowrap(默认值)：不换行

       ![image.png](https://upload-images.jianshu.io/upload_images/207335-3d8a95115ee2753b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


       wrap：换行，第一行在上方

       ![image.png](https://upload-images.jianshu.io/upload_images/207335-6cdd13c9e3736b7f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


       wrap-reverse：换行，第一行在下方。（和wrap相反）

       ![image.png](https://upload-images.jianshu.io/upload_images/207335-f311c799125be870.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


     - justifyContent容器属性:`flex-start | flex-end | center | space-between | space-around | space-evenly`

       定义了伸缩项目在主轴线的对齐方式

       `flex-start`(默认值)：伸缩项目向一行的起始位置靠齐。

       `flex-end`：伸缩项目向一行的结束位置靠齐。

       center：伸缩项目向一行的中间位置靠齐。

       space-between：两端对齐，项目之间的间隔都相等。

       space-around：伸缩项目会平均地分布在行里，两端保留一半的空间。

       space-evenly：伸缩项目会平均地分布在行里

       ![image.png](https://upload-images.jianshu.io/upload_images/207335-86d0947f144522df.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



     - alignItems容器属性:`flex-start | flex-end | center | baseline | stretch`

       定义项目在交叉轴上如何对齐，可以把其想像成侧轴（垂直于主轴）的“对齐方式”。

       flex-start：交叉轴的起点对齐。

       flex-end：交叉轴的终点对齐 。

       center：交叉轴的中点对齐。

       baseline：项目的第一行文字的基线对齐。

       stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

       ![image.png](https://upload-images.jianshu.io/upload_images/207335-65ccc8d070fe9cb8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


     - flex项目属性:

       “flex-grow”、“flex-shrink”和“flex-basis”三个属性的缩写， 其中第二个和第三个参数（flex-shrink、flex-basis）是可选参数。默认值为“0 1 auto”。

       宽度 ＝ 弹性宽度 * ( flexGrow / sum( flexGorw ) )

       ![image.png](https://upload-images.jianshu.io/upload_images/207335-c95292b059cccb12.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


     - alignSelf项目属性:(特立独行)

       “auto | flex-start | flex-end | center | baseline | stretch”

       align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。

       默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

       ![image.png](https://upload-images.jianshu.io/upload_images/207335-8bf19ab8952cd4c6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


6. 有关常用的布局

   - 获取当前屏幕的宽度、高度、分辨率

     ```javascript
     import Dimensions from 'Dimensions';
     
     var { width, height, scale } = Dimensions.get('window');
     ```

   - 默认宽度

     我们都知道块级标签如果不设置宽度，通常都是独占一行的，在React Native中的组件中需要设置flexDirection：'row'，才能在同一行显示，flex的元素如果不设置宽度，都会百分之百的占满父容器。

   - 水平、垂直居中

     当alignItems、justifyContent传center时与flexDirection的关系：

     | flexDirection | alignItems | justifyContent |
     | :-----------: | :--------: | :------------: |
     |    column     |  水平居中  |    垂直居中    |
     |      Row      |  垂直居中  |    水平居中    |

   - padding和margin

     如下图所示

     盒子里由外至里依次是：

     - margin 边距
     - border 边框
     - padding 间隙 (也有人称做补丁)
     - content (内容，比如文本，图片等)

     ![image.png](https://upload-images.jianshu.io/upload_images/207335-9938aa6217a0f67e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


     边距属性 (margin) 是用来设置一个元素所占空间的边缘到相邻元素之间的距离。

     边框属性 (border) 用来设定一个元素的边线。

     间隙属性 (padding) 是用来设置元素内容到元素边框的距离。

   - position

     positon有两个取值：relative（默认值）和absolute。

     ```javascript
     position4: {
         width: 100,
         height: 100,
         backgroundColor: "#777",
         // position:'relative', ///相对布局
         position:'absolute', ///绝对布局
         left:100,
         top:100,
       },
     ```

  
      relative——相对定位

       以元素本来的位置为基准进行偏移

       ![image.png](https://upload-images.jianshu.io/upload_images/207335-9cf60b636f6205be.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


      absolute——绝对定位

       以父元素的边框为基准进行偏移。

       ![image.png](https://upload-images.jianshu.io/upload_images/207335-90d9ef9b2c5b8266.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


### 基础组件之View

React Native组件View，其作用等同于iOS中的`UIView`, Android中的`android.view`，或是网页中的<div>标签，它是所有组件的父组件。

```javascript
Flexbox 弹性布局
Transforms  动画属性
backfaceVisibility enum('visible', 'hidden')    定义界面翻转的时候是否可见
backgroundColor color
borderBottomColor color
borderBottomLeftRadius number
borderBottomRightRadius number
borderBottomWidth number
borderColor color
borderLeftColor color
borderLeftWidth number
borderRadius number
borderRightColor color
borderRightWidth number
borderStyle enum('solid', 'dotted', 'dashed')
borderTopColor color
borderTopLeftRadius number
borderTopRightRadius number
borderTopWidth number
borderWidth number
opacity number 设置透明度，取值从0-1；
overflow enum('visible', 'hidden')  设置内容超出容器部分是显示还是隐藏；
elevation number 高度   设置Z轴，可产生立体效果。
```

