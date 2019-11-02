### 关于ReactNative

![image.png](https://upload-images.jianshu.io/upload_images/207335-411c9695c52ad86f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
React Native (简称RN)是Facebook于2015年4月开源的跨平台移动应用开发框架，是Facebook早先开源的JS框架 React 在原生移动应用平台的衍生产物，目前支持iOS和安卓两大平台。RN使用Javascript语言，类似于HTML的JSX，以及CSS来开发移动应用，因此熟悉Web前端开发的技术人员只需很少的学习就可以进入移动应用开发领域。

### 搭建开发环境

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
### 基础组件之图片(Image)

Image组件的基本用法

1. 加载静态图片资源

   ```javascript
   <Image source={require(“./image/botuicon.png”)} style={styles.imageStyle}
   ```

2. 加载Native图片

   ```javascript
   <Image source={{ uri: "logo" }} style={styles.imageStyle} />
   ```

3. 网络图片

   ```javascript
   <Image source={{ uri: "https://facebook.github.io/react/logo-og.png" }} style={styles.imageStyle}
   ```

4. Uri图片(base64)

   ```javascript
   <Image style={styles.imageStyle} source={{ uri:”data:image/png;base64,iVBO..”}}/>
   ```

- 请注意对于网络和 base64 数据的图片需要手动指定尺寸!

### 基础组件之列表(ScrollView,FlatList,SectionList)

1. **ScrollView**是一个通用的可滚动的容器

   **Props**(常见属性)

   - **contentContainerStyle** StyleSheetPropType(ViewStylePropTypes)

     这些样式会应用到一个内层的内容容器上，所有的子视图都会包裹在内容容器内

     ```javascript
     return (
       <ScrollView contentContainerStyle={styles.contentContainer}>
       </ScrollView>
     );
     ...
     const styles = StyleSheet.create({
       contentContainer: {
         paddingVertical: 20
       }
     });
     ```

   - **keyboardDismissMode** enum('none', "interactive", 'on-drag') 

     用户拖拽滚动视图的时候，是否要隐藏软键盘。

     - `none`（默认值），拖拽时不隐藏软键盘。
     - `on-drag` 当拖拽开始的时候隐藏软键盘。
     - `interactive` 软键盘伴随拖拽操作同步地消失，并且如果往上滑动会恢复键盘。安卓设备上不支持这个选项，会表现的和none一样。

   - **onContentSizeChange**

     此函数会在ScrollView内部可滚动内容的视图发生变化时调用。

     调用参数为内容视图的宽和高: (`contentWidth`, `contentHeight`)。

     此方法是通过绑定在内容容器上的`onLayout`来实现的。

   - **horizontal** bool

     当此属性为`true`的时候，所有的的子视图会在水平方向上排成一行，而不是默认的在垂直方向上排成一列。默认值为`false`。

   - **onMomentumScrollBegin** (function)

     滚动动画开始时调用此函数。

   - **onMomentumScrollEnd** (function)

     滚动动画结束时调用此函数。

   - **onScroll** (function)

     在滚动的过程中，每帧最多调用一次此回调函数。调用的频率可以用scrollEventThrottle属性来控制。

   - **onScrollBeginDrag** (function)

     当用户开始拖动此视图时调用此函数。

   - **onScrollEndDrag** (function)

     当用户停止拖动此视图时调用此函数。

   - **pagingEnabled** (bool)

     当值为true时，滚动条会停在滚动视图的尺寸的整数倍位置。这个可以用在水平分页上。默认值为false。

     注意：垂直分页在Android上不支持。

   - **refreshControl** element 

     指定RefreshControl组件，用于为ScrollView提供下拉刷新功能。

   - **scrollEnabled** (bool)

     当值为false的时候，内容不能滚动，默认值为true。

     注意即便禁止用户滚动，你也仍然可以调用scrollTo来滚动。

   - **showsHorizontalScrollIndicator** (bool)

     当此属性为true的时候，显示一个水平方向的滚动条。

   - **showsVerticalScrollIndicator** (bool)

     当此属性为true的时候，显示一个垂直方向的滚动条。

   - **alwaysBounceHorizontal** bool 

     当此属性为true时，水平方向即使内容比滚动视图本身还要小，也可以弹性地拉动一截。当horizontal={true}时默认值为true，否则为false。

   **Function**(常见方法)

   **scrollTo**()

   ```
   scrollTo(
     ([y]: number),
     object,
     ([x]: number),
     ([animated]: boolean),
     ([duration]: number),
   );
   ```

   滚动到指定的x, y偏移处。第三个参数为是否启用平滑滚动动画。还有一个duration参数则是仅限android可以使用的滚动持续时间。

   示例：

   `scrollTo({x: 0, y: 0, animated: true})`

   指定滚动持续时间的示例(仅限Android):

   `scrollTo({x: 0, y: 0, duration: 500})`

   **scrollToEnd**()

   `scrollToEnd(([options]: {animated: boolean, duration: number}));`

   滚动到视图底部（水平方向的视图则滚动到最右边）。

   加上动画参数`scrollToEnd({animated: true})`则启用平滑滚动动画，或是调用`scrollToEnd({animated: false})`来立即跳转。For Android, you may specify a duration, e.g. `scrollToEnd({duration: 500})` for a controlled duration scroll。如果不使用参数，则animated选项默认启用。

   **flashScrollIndicators**()

   `flashScrollIndicators();`

   短暂地显示滚动指示器

   *注意：ScrollView是继承自View，所以View中所有的属性同样适用于ScrollView

2. **FlatList**是一个通用的可滚动的容器

   高性能的简单列表组件，支持下面这些常用的功能：

   - 完全跨平台。
   - 支持水平布局模式。
   - 行组件显示或隐藏时可配置回调事件。
   - 支持单独的头部组件。
   - 支持单独的尾部组件。
   - 支持自定义行间分隔线。
   - 支持下拉刷新。
   - 支持上拉加载。
   - 支持跳转到指定行（ScrollToIndex）。

   ```javascript
   <FlatList
     data={[{key: 'a'}, {key: 'b'}]}
     renderItem={({item}) => <Text>{item.key}</Text>}
   />
   ```

   **Props**(常见属性)

   - **renderItem function** **必填**

     `renderItem({ item: Object, index: number, separators: { highlight: Function, unhighlight: Function, updateProps: Function(select: string, newProps: Object) } }) => ?React.Element`

     从data中挨个取出数据并渲染到列表中。

     提供额外的元数据，如索引(如果需要)，以及更通用的分隔符。`updateProps`函数，它允许您设置任何希望更改前分隔符或后分隔符呈现的道具，以防更常见的突出显示和取消突出显示(设置突出显示:`boolean prop`)对用例不够。

   - **data** array

     为了简化起见，data 属性目前只支持普通数组。如果需要使用其他特殊数据结构，例如 immutable 数组，请直接使用更底层的[VirtualizedList](https://reactnative.cn/docs/virtualizedlist)组件

   - **ItemSeparatorComponent** component 

     行与行之间的分隔线组件。不会出现在第一行之前和最后一行之后。

   - **ListEmptyComponent** component, function, element

     列表为空时渲染该组件。可以是 React Component, 也可以是一个 `render` 函数，或者渲染好的 element。 

   - **ListFooterComponent** component, function, element

     尾部组件。可以是 React Component, 也可以是一个 render 函数，或者渲染好的 element

   - **ListHeaderComponent** component, function, element

     头部组件。可以是 React Component, 也可以是一个 `render` 函数，或者渲染好的 element

   - **columnWrapperStyle** style object

     如果设置了多列布局（即将`numColumns`值设为大于 1 的整数），则可以额外指定此样式作用在每行容器上。

   - **extraData** any

     如果有除data以外的数据用在列表中（不论是用在renderItem还是头部或者尾部组件中），请在此属性中指定。同时此数据在修改时也需要先修改其引用地址（比如先复制到一个新的 Object 或者数组中），然后再修改其值，否则界面很可能不会刷新。

   - **getItemLayout** function

     `(data, index) => {length: number, offset: number, index: number}`

     getItemLayout是一个可选的优化，用于避免动态测量内容尺寸的开销，不过前提是你可以提前知道内容的高度。如果你的行高是固定的，getItemLayout用起来就既高效又简单，类似下面这样：

     ```javascript
      getItemLayout={(data, index) => (
     
       {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
     
      )}
     ```

     对于元素较多的列表（几百行）来说，添加`getItemLayout`可以极大地提高性能。注意如果你指定了`ItemSeparatorComponent`，请把分隔线的尺寸也考虑到 `offset` 的计算之中。

   - **horizontal**

     设置为 true 则变为水平布局模式。

   - **initialNumToRender** number

     指定一开始渲染的元素数量，最好刚刚够填满一个屏幕，这样保证了用最短的时间给用户呈现可见的内容。注意这第一批次渲染的元素不会在滑动过程中被卸载，这样是为了保证用户执行返回顶部的操作时，不需要重新渲染首批元素。

   - **initialScrollIndex** number

     开始时屏幕顶端的元素是列表中的第 `initialScrollIndex`个元素, 而不是第一个元素。如果设置了这个属性，则第一批`initialNumToRender`范围内的元素不会再保留在内存里，而是直接立刻渲染位于 `initialScrollIndex` 位置的元素。需要先设置 `getItemLayout` 属性。

   - **inverted** boolean 

     翻转滚动方向。实质是将 scale 变换设置为-1。

   - **keyExtractor function** 

     `(item: object, index: number) => string;`

     此函数用于为给定的 item 生成一个不重复的 key。Key 的作用是使 React 能够区分同类元素的不同个体，以便在刷新时能够确定其变化的位置，减少重新渲染的开销。若不指定此函数，则默认抽取`item.key`作为 key 值。若`item.key`也不存在，则使用数组下标。

   - **numColumns** number

     多列布局只能在非水平模式下使用，即必须是horizontal={false}。此时组件内元素会从左到右从上到下按 Z 字形排列，类似启用了flexWrap的布局。组件内元素必须是等高的——暂时还无法支持瀑布流布局。

   - **onEndReached function**

     `(info: {distanceFromEnd: number}) => void`

     当列表被滚动到距离内容最底部不足**onEndReachedThreshold**的距离时调用。

   - **onEndReachedThreshold** number

     决定当距离内容最底部还有多远时触发onEndReached回调。注意此参数是一个比值而非像素单位。比如，0.5 表示距离内容最底部的距离为当前列表可见长度的一半时触发。

   - **onRefresh** function

     `() => void`

     如果设置了此选项，则会在列表头部添加一个标准的[RefreshControl](https://reactnative.cn/docs/refreshcontrol)控件，以便实现“下拉刷新”的功能。同时你需要正确设置refreshing属性。

   - Android **progressViewOffset** number

     当需要在指定的偏移处显示加载指示器的时候，就可以设置这个值

   - **refreshing** boolean

     在等待加载新数据时将此属性设为 true，列表就会显示出一个正在加载的符号。

   - **onViewableItemsChanged ** function

     ```javascript
     (info: {
         viewableItems: array,
         changed: array,
       }) => void
     ```

     在可见行元素变化时调用。可见范围和变化频率等参数的配置请设置**viewabilityConfig**属性。

   **Function**(常见方法)

   - **scrollToEnd**() params

     `scrollToEnd([params]);`

     滚动到底部。如果不设置getItemLayout属性的话，可能会比较卡。

     `params keys` 

     - `'animated' (boolean)` - 列表是否应该在滚动时做动画。默认值为true。

   - **scrollToIndex**()

     `scrollToIndex(params);`

     将位于指定位置的元素滚动到可视区的指定位置，当`viewPosition` 为 0 时将它滚动到屏幕顶部，为 1 时将它滚动到屏幕底部，为 0.5 时将它滚动到屏幕中央。

     注意：如果不设置getItemLayout属性的话，无法跳转到当前渲染区域以外的位置。

     params keys 

     - `'animated' (boolean)` - 列表是否应该在滚动时做动画。默认值为`true`。
     - `'index' (number)` - 要滚动到的索引。必需的。
     - `'viewOffset' (number)` - 用于偏移最终目标位置的固定像素数。必需的。
     - `'viewPosition' (number)` - 值0将index指定的项放在顶部，1放在底部，0.5放在中间居中。

   - **scrollToItem**()

     `scrollToItem(params);`

     这个方法会顺序遍历元素。尽可能使用scrollToIndex代替。

     注意：如果不设置getItemLayout属性的话，无法跳转到当前渲染区域以外的位置。

     params keys 

     - `'animated' (boolean)` - 列表是否应该在滚动时做动画。默认值为true。
     - `'item' (object)` - 要滚动到的项。必需的。
     - `'viewPosition' (number)`

   - **scrollToOffset**()

     `scrollToOffset(params);`

     滚动列表到指定的偏移（以像素为单位），等同于ScrollView的`scrollTo`方法

     params keys 

     - `'offset' (number)` -要滚动到的偏移量。在水平为真时，偏移量是x值，在任何其他情况下偏移量是y值。必需的
     - `'animated' (boolean)` - 列表是否应该在滚动时做动画。默认值为`true`。

   - **recordInteraction**()

     `recordInteraction();`

     主动通知列表发生了一个事件，以使列表重新计算可视区域。比如说当waitForInteractions为 true 并且用户没有滚动列表时。一般在用户点击了列表项或发生了导航动作时调用。

   - **flashScrollIndicators**()

     `flashScrollIndicators();`

     短暂地显示滚动指示器。

3. **SectionList**是一个通用的可滚动的容器

   高性能的分组(section)列表组件，支持下面这些常用的功能：

   - 完全跨平台。
   - 行组件显示或隐藏时可配置回调事件。
   - 支持单独的头部组件。
   - 支持单独的尾部组件。
   - 支持自定义行间分隔线。
   - 支持分组的头部组件。
   - 支持分组的分隔线。
   - 支持多种数据源结构
   - 支持下拉刷新。
   - 支持上拉加载。

   ```javascript
   <SectionList
     renderItem={({ item, index, section }) => <Text key={index}>{item}</Text>}
     renderSectionHeader={({ section: { title } }) => (
       <Text style={{ fontWeight: "bold" }}>{title}</Text>
     )}
     sections={[
       { title: "Title1", data: ["item1", "item2"] },
       { title: "Title2", data: ["item3", "item4"] },
       { title: "Title3", data: ["item5", "item6"] }
     ]}
     keyExtractor={(item, index) => item + index}
   />
   ```

   常用属性和方法同FlatList

### 基础组件之文本输入(TextInput)

TextInput是一个允许用户在应用中通过键盘输入文本的基本组件。本组件的属性提供了多种特性的配置，譬如自动完成、自动大小写、占位文字，以及多种不同的键盘类型（如纯数字键盘）等等

**Props**(常见属性)

- **allowFontScaling** bool

  控制字体是否要根据系统的“字体大小”辅助选项来进行缩放。默认值为`true`

- **autoCapitalize** enum('none', 'sentences', 'words', 'characters')

  控制TextInput是否要自动将特定字符切换为大写，某些键盘类型(如name-phone-pad)不支持此属性。characters: 所有的字符。

  - words: 每个单词的第一个字符。
  - sentences: 每句话的第一个字符（默认）。
  - none: 不切换。

- **autoCorrect** bool

  如果为`false`，会关闭拼写自动修正。默认值是`true`。

- **autoFocus** bool

  如果为`true`，在`componentDidMount`后会获得焦点。默认值为`false`

- **blurOnSubmit** bool

  如果为`true`，文本框会在提交的时候失焦。对于单行输入框默认值为`true`，多行则为`false`。注意：对于多行输入框来说，如果将`blurOnSubmit`设为`true`，则在按下回车键时就会失去焦点同时触发`onSubmitEditing`事件，而不会换行。

- **caretHidden** bool

  如果为true，则隐藏光标。默认值为false。

- **keyboardType**

  enum('default', 'email-address', 'numeric', 'phone-pad', 'ascii-capable', 'numbers-and-punctuation', 'url', 'number-pad', 'name-phone-pad', 'decimal-pad', 'twitter', 'web-search', 'visible-password')

  决定弹出何种软键盘类型，譬如numeric（纯数字键盘）。

  点击这里查看所有类型的截图。 [here](http://lefkowitz.me/2018/04/30/visual-guide-to-react-native-textinput-keyboardtype-options/).

  这些值在所有平台都可用：

  - default
  - number-pad
  - decimal-pad
  - numeric
  - email-address
  - phone-pad

  下面的值仅**iOS**可用：

  - ascii-capable
  - numbers-and-punctuation
  - url
  - name-phone-pad
  - twitter
  - web-search

  下面的值仅**Android**可用：

  - visible-password

- **returnKeyType**

  enum('done', 'go', 'next', 'search', 'send', 'none', 'previous', 'default', 'emergency-call', 'google', 'join', 'route', 'yahoo')

  决定“确定”按钮显示的内容。在Android上你还可以使用returnKeyLabel。

  下列这些选项是跨平台可用的：

  - done
  - go
  - next
  - search
  - send

  下列这些选项仅**Android**可用：

  - none
  - previous

  下列这些选项仅**iOS**可用：

  - default
  - emergency-call
  - google
  - join
  - route
  - yahoo

- **contextMenuHidden** bool 

  如果为真，则隐藏上下文菜单。默认值为false。

- **defaultValue** string

  提供一个文本框中的初始值。当用户开始输入的时候，值就可以改变。在一些简单的使用情形下，如果你不想用监听消息然后更新value属性的方法来保持属性和状态同步的时候，就可以用defaultValue来代替。

- **editable** bool

  如果为false，文本框是不可编辑的。默认值为true。

- **maxLength** number

  限制文本框中最多的字符数。使用这个属性而不用JS逻辑去实现，可以避免闪烁的现象。

- **multiline** bool

  如果为true，文本框中可以输入多行文字。默认值为false。注意安卓上如果设置multiline = {true}，文本默认会垂直居中，可设置textAlignVertical: ‘top’样式来使其居顶显示。

- **onBlur** function

  当文本框失去焦点的时候调用此回调函数。

- **onChange** function

  当文本框内容变化时调用此回调函数。回调参数为`{ nativeEvent: { eventCount, target, text} }`

- **onChangeText** function

  当文本框内容变化时调用此回调函数。改变后的文字内容会作为参数传递。

- **onContentSizeChange** function

  当文本输入的内容大小发生更改时调用的回调函数。这将使用`{nativeEvent: {contentSize: {width, height}}}`调用。

  只调用多行文本输入。

- **onEndEditing** function

  当文本输入结束后调用此回调函数。

- **onFocus** function

  当文本框获得焦点的时候调用此回调函数。回调参数为`{ nativeEvent: { target } }`。

- **onKeyPress** function

  当一个键被按下的时候调用此回调。传递给回调函数的参数为`{ nativeEvent: { key: keyValue } }`，其中keyValue即为被按下的键。会在onChange之前调用。注意：在Android上只有软键盘会触发此事件，物理键盘不会触发。

- **onLayout** function

  当组件加载或者布局变化的时候调用，回调参数为`{ nativeEvent: {layout: {x, y, width, height}, target } }`。

- **onScroll** function

  在内容滚动时持续调用，传回参数的格式形如`{ nativeEvent: { contentOffset: { x, y } } }`。也可能包含其他和滚动事件相关的参数，但是在Android上，出于性能考虑，不会提供contentSize参数。

- **onSelectionChange** function

  长按选择文本时，选择范围变化时调用此函数，传回参数的格式形如`{ nativeEvent: { selection: { start, end } } }`。需要设置`multiline={true}`。

- **onSubmitEditing**

  此回调函数当软键盘的确定/提交按钮被按下的时候调用此函数，所传参数为`{nativeEvent: {text, eventCount, target}}`。如果`multiline={true}`，此属性不可用。

- **placeholder** string

  如果没有任何文字输入，会显示此字符串。

- **placeholderTextColor** [color](https://reactnative.cn/docs/colors)

  占位字符串显示的文字颜色。

- **secureTextEntry** bool

  如果为`true`，文本框会遮住之前输入的文字，这样类似密码之类的敏感文字可以更加安全。默认值为`false`。`multiline={true}`时不可用。

- **selectTextOnFocus** bool

  如果为`true`，当获得焦点的时候，所有的文字都会被选中。

**Function**(常见方法)

- **clear**()

  `clear();`

  清空输入框的内容

- **isFocused**()

  `isFocused();`

  返回值表明当前输入框是否获得了焦点。

### 基础组件之触摸事件(Touchable系列)

- **TouchableWithoutFeedback**：响应用户的点击事件，如果你想在处理点击事件的同时不显示任何视觉反馈，使用它是个不错的选择。
- **TouchableHighlight**：在`TouchableWithoutFeedback`的基础上添加了当按下时背景会变暗的效果。
- **TouchableOpacity**：相比`TouchableHighlight`在按下去会使背景变暗的效果，`TouchableOpacity`会在用户手指按下时降低按钮的透明度，而不会改变背景的颜色。
- **TouchableNativeFeedback**：在Android上还可以使用TouchableNativeFeedback，它会在用户手指按下时形成类似水波纹的视觉效果。注意，此组件只支持Android。

1. **TouchableWithoutFeedback**

   `TouchableWithoutFeedback`一个Touchable系列组件中最基本的一个组价，只响应用户的点击事件不会做任何UI上的改变，在使用的过程中需要特别留意。

   提示：无论是*TouchableWithoutFeedback*还是其他三种*Touchable*组件，都是在根节点都是只支持一个组件，如果你需要多个组件同时相应单击事件，可以用一个*View*将它们包裹着.

   - **onPress function**

     当触摸操作结束时调用，但如果被取消了则不调用（譬如响应者被一个滚动操作取代）。

   - **onLongPress function**

     当用户长时间按压组件(长按效果)的时候调用该方法。

   - **disabled bool**

     如果设为true，则禁止此组件的一切交互。

     比如防止按钮多次频繁点击,可以在按钮点击后使属性设置为true,然后按钮就不会再次相应,从而减少用户频繁点击一个按钮的响应多次.

   - **onPressIn function**与**onPressOut function**

     这两个方法分别是当用户开始点击按钮时与点击结束后被回调。

     通过这两个方法我们可以计算出用户单击按钮所用的时长， 另外也可以做一些其它个性化的功能。现在我们将通过一个例子来计算出用户点击按钮所用的时长。

2. **TouchableHighlight**

   `TouchableHighlight` 是Touchable系列组件中比较常用的一个，它是在`TouchableWithoutFeedback` 的基础上添加了一些UI上的扩展，既当手指按下的时候，该视图的不透明度会降低，同时会看到相应的颜色(视图变暗或者变亮)，从`TouchableHighlight` 的源码中我们可以看出，其实这个颜色就是在`TouchableHighlight` 的最外层个添加了一个`View`，通过改变这个`View`的背景色及透明度来达到这一效果。

   **TouchableHighlight**所扩展出来的属性

   - **activeOpacity number**

     我们可以通过`activeOpacity`来设置`TouchableHighlight` 被按下时的不透明度，从`TouchableHighlight` 的源码中可以看出，它的默认不透明度为0.85，我们可以根据需要进行调节

   - **underlayColor color**

     我们可以通过`underlayColor` 属性来设置`TouchableHighlight` 被按下去的颜色，默认状态下为`balck`黑色。

   - **onHideUnderlay function**

     当衬底(也就是上文讲到的最外层的`View`)被隐藏的时候调用。

     心得，通常情况下，当手指结束点击时衬底会被隐藏。

   - **onShowUnderlay function**

     当衬底(也就是上文讲到的最外层的`View`)显示的时候调用。

     心得，通常情况下，当手指刚开始点击时衬底会显示。

   - **style View#style**

     因为`TouchableHighlight` 的最外层个添加了一个`View`，所以我们可以设置这个`View`的样式来做出一个形形色色的按钮。

3. **TouchableOpacity**

   `TouchableOpacity`也是`Touchable`系列组件中比较常用的一个，它是在`TouchableWithoutFeedback`的基础上添加了一些UI上的扩展，但这些扩展相比`TouchableHighlight` 少了一个额外的颜色变化。它是通过在按下去改变视图的不透明度来表示按钮被点击的。

   **TouchableOpacity**所扩展出来的属性

   在扩展属性方面`TouchableOpacity`相比`TouchableHighlight`，就少了很多，只有一个`activeOpacity`，来设置按下去的透明度。

   同，TouchableHighlight 的[activeOpacity](http://www.devio.org/2017/01/10/React-Native按钮详解-Touchable系列组件使用详解/#activeOpacity)。

   另外我们也可以通过`TouchableOpacity的setOpacityTo(value, duration)`方法来动态修改`TouchableOpacity`被按下去的不透明度。

4. **TouchableNativeFeedback**

   为了支持Android5.0新增的触控反馈，React Native加入了`TouchableNativeFeedback` 组件，`TouchableNativeFeedback` 在`TouchableWithoutFeedback` 所支持的属性的基础上增加了按下去的水波纹效果。我们可以通过`background` 属性来自定义原生触摸操作反馈的背景。

   **TouchableNativeFeedback**所扩展出来的属性

   - **background backgroundPropType**

     决定在触摸反馈的时候显示什么类型的背景。它接受一个有着type属性和一些基于type属性的额外数据的对象。推荐使用以下的静态方法之一来创建这个对象：

     1) `TouchableNativeFeedback.SelectableBackground()` - 会创建一个对象，表示安卓主题默认的对于被选中对象的背景。(?android:attr/selectableItemBackground)

     2) `TouchableNativeFeedback.SelectableBackgroundBorderless()` - 会创建一个对象，表示安卓主题默认的对于被选中的无边框对象的背景。(?android:attr/selectableItemBackgroundBorderless)。只在Android API level 21+适用。

     3) `TouchableNativeFeedback.Ripple(color, borderless)` - 会创建一个对象，当按钮被按下时产生一个涟漪状的背景，你可以通过color参数来指定颜色，如果参数borderless是true，那么涟漪还会渲染到视图的范围之外。（参见原生的actionbar buttons作为该效果的一个例子）。这个背景类型只在Android API level 21+适用也就是Android5.0或以上设备。

### 组件导航(React Navigation)

![image.png](https://upload-images.jianshu.io/upload_images/207335-7c944b6db1e7eb3b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

在你的 React Native 项目中安装react-navigation这个包

`yarn add react-navigation`

`# or with npm`

`# npm install --save react-navigation`

然后，安装 react-native-gesture-handler。

`yarn add react-native-gesture-handler`

`# or with npm`

`# npm install --save react-native-gesture-handler`

Link 所有的原生依赖

`react-native link react-native-gesture-handler`

![image.png](https://upload-images.jianshu.io/upload_images/207335-7c22267804a7e24e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


**什么是导航器：**

导航器可以看作是一个普通的React组件，可以通过导航器来定义APP的导航结构，导航器还可以渲染通用元素，比如配置标题栏和选项卡栏，在React-navigation中有一下三种类型的导航器：`createStackNavigator`，`createSwitchNavigator`，`createDrawerNavigator`，`createBottomTabNavigator`，`createMaterialBottomTabNavigator`，`createMaterialTopTabNavigator`等

两个与导航器相关的概念：

- navigation prop(屏幕导航属性)：通过navigation可以完成屏幕之间的调度操作
- navigationOptions(屏幕导航选项)：通过navigationOptions可以定制导航器显示屏幕的方式（头部标题，选项卡标签等）

**Navigation prop** 详解

当导航器中的屏幕被打开时，会收到一个navigation prop，navigation包含以下功能

- navigate - 转跳到其他界面 (常用)

- goback - 关闭当前界面 (常用)

- addListener - 订阅导航生命周期的更新

- isFocused - 一个函数返回true或false，查询屏幕是否获取焦点

- state - 屏幕当前的state (常用)

- setParams - 改变路由的params (常用)

- dispatch - 向路由发送一个action (常用)

- dangerouslyGetParent - 返回父导航器的函数 

  注意： this.props.navigation并不是在所有页面（组件）中都可以使用，而是必须在StackNavigator、DrawerNavigator中声明的screen组件，才可以使用this.props.navigation

  也就是说，screen组件会自动获得这个props

**navigation**有一下几种方式：

- push - 将新路由推入堆栈
- pop - 回到堆栈中
- popToTop - 转到堆栈顶部
- replace - 用新的路由替换当前路由
- reset - 删除所有的navigation state并且使用这个reset的代替
- dismiss - 关闭当前堆栈

**createStackNavigator**的使用

为APP提供一种在屏幕之间转换的方式，其中每个新屏幕都放置在堆栈顶部。默认情况下，堆栈导航器配置为具有熟悉的iOS和Android外观：新的屏幕从iOS右侧滑入，从Android底部淡入。在iOS上，堆栈导航器也可以配置为模式样式，屏幕从底部滑入

**API**的定义

createStackNavigator(RouteConfigs, StackNavigatorConfig);

**RouteConfigs**

route configs对象是从路由名称到路由配置的映射，它告诉导航器为该路由提供什么。

```javascript
createStackNavigator({
  // For each screen that you can navigate to, create a new entry like this:
  Profile: {
    // `ProfileScreen` is a React component that will be the main content of the screen.
    screen: ProfileScreen,
    // When `ProfileScreen` is loaded by the StackNavigator, it will be given a `navigation` prop.

    // Optional: When deep linking or using react-navigation in a web app, this path is used:
    path: 'people/:name',
    // The action and route params are extracted from the path.

    // Optional: Override the `navigationOptions` for the screen
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}'s Profile'`,
    }),
  },

  ...MyOtherRoutes,
});
```

**StackNavigatorConfig**

路由的选项：

- initialRouteName - 设置 stack navigator 的默认页面， 必须是路由配置中的某一个。
- initialRouteParams - 初始路由的参数
- initialRouteKey - 初始路由的可选标识符
- navigationOptions - Navigation options for the navigator itself, to configure a parent navigator
- defaultNavigationOptions - 用于屏幕的默认导航选项
- paths - 覆盖路由配置中设置的路径的映射

视觉选项：

- mode - 定义渲染和转换的样式
- card - 使用标准的 iOS 和 Android 屏幕转换， 这是默认设置。
- modal - 页面从屏幕底部滑入，这是iOS的常用模式， 只在 iOS 上生效，在 Android 上无效。
- headerMode -指定页眉的呈现方式
- float -呈现一个位于顶部的单个页眉, 并在屏幕被更改时进行动画显示， 这是 iOS 上常见的模式。
- screen -每个屏幕都有一个标头, 并且页眉随屏幕一起淡入和淡出， 这是 Android 的常见模式。
- none -不会呈现页眉。
- headerBackTitleVisible - 提供合理的默认值以确定后退按钮标题是否可见，但如果要覆盖它，则可以使用true或` false < /code>在此选项中。

用于导航器内部页面的**navigationOptions**

- title - 可用作后备的字符串headerTitle。此外，将用作tabBarLabel（如果嵌套在TabNavigator中）或drawerLabel（如果嵌套在DrawerNavigator中）的后备。

- header - React Element或给定HeaderProps返回React元素的函数，显示为标题。设置为null隐藏标题。

- headerTitle - 标题使用的字符串，反应元素或反应组件。默认为场景title。当使用的成分，它接收allowFontScaling，style和children道具。传递标题字符串children。

- headerBackImage - React Element或Component在标题的后退按钮中显示自定义图像。使用组件时，它在渲染（tintColor，title）时会收到许多道具。默认为带有react-navigation/views/assets/back-icon.png后方图像源的图像组件，后者是平台的默认后退图标图像（iOS上的V形符号和Android上的箭头）。

- headerRight - React Element显示在标题的右侧。

- headerLeft - React元素或组件显示在标题的左侧。当使用的成分，它接收到一个数道具呈现时（onPress，title，titleStyle和更多-检查Header.js完整的列表）。

- headerStyle - 标题的样式对象

  …..还有好多就不一一列举了，感兴趣就去官网看看吧

### 网络与存储(Fetch,离线缓存框架)

Fetch API提供了一个JavaScript接口,用于进行网络操作,例如请求和响应.它还提供了一个全局fetch()方法,该方法提供了一种简单的合理的方式来跨网络异步获取资源.

```javascript
fetch(url, init)
    .then((response) => {   // 数据解析方式
    })
    .then((responseData) => {       // 获取到的数据处理
    })
    .catch((error) => { // 错误处理
    })
    .done();
```

上面的示例中的 init 是一个可选的对象，他里面包含了:

- method：请求方式（GET、POST、PUT等）。

- headers：需要用到 Headers 对象使用这个参数。

- body：请求的 body 信息：可能是一个 [Blob](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob)、[BufferSource](https://developer.mozilla.org/zh-CN/docs/Web/API/BufferSource)、[FormData](https://developer.mozilla.org/zh-CN/docs/Web/API/FormData)、[URLSearchParams](https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams) 或者 [USVString](https://developer.mozilla.org/zh-CN/docs/Web/API/USVString) 对象。注意 GET 或 HEAD 方法的请求不能包含 body 信息。

- mode：跨域设置(cors, no-cors, same-origin)

- cache：缓存选项（default, no-store, reload, no-cache, force-cache, or only-if-cached）

  mode属性控制师傅跨域，其中 same-origin（同源请求，跨域会报error）、no-cors(默认，可以请求其它域的资源，不能访问response内的属性)和 cros(允许跨域，可以获取第三方数据，必要条件是访问的服务允许跨域访问)。

  使用 fetch 需要注意浏览器版本，但 React-Native 则不需要考虑。

  response 对象可以有如下几种解析方式

  - arrayBuffer()
  - json()
  - text()
  - blob()
  - formData()

  下面是一个最基本的请求，只传入一个参数，默认为 **GET** 方式请求

  ```javascript
  fetch(url)
  
    .then((response) => response.json())    // json方式解析，如果是text就是 response.text()
  
    .then((responseData) => {  // 获取到的数据处理
  
    })
  
    .catch((error) => {   // 错误处理 
  
    })
  
    .done();
  ```

  采用 **POST** 进行网络请求

  ```javascript
  fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': ‘application/json',
    },
    body: JSON.stringify({
      firstParam: 'yourValue',
      secondParam: 'yourOtherValue',
    })
  } .then((response) => {       // 数据解析方式
      })
      .then((responseData) => {       // 获取到的数据处理
      })
      .catch((error) => { // 错误处理
      })
      .done();
  
             alert(JSON.stringify(json));
          }).catch.((error)=>{
              console.error(error);
          })
  )
  ```

  提交数据的格式关键取决于headers中的Content-Type。Content-Type有很多种，对应body的格式也有区别。到底应该采用什么样的Content-Type取决于服务器端，所以请和服务器端的开发人员沟通确定清楚。常用的'Content-Type'除了上面的'application/json'，还有传统的网页表单形式，示例如下：

  ```javascript
  fetch(url, {
          method: "POST",
          headers: {
              "Content-Type": "application/x-www-form-urlencoded"
          }
          body:"key1=value&key2=value…&keyN=value"
      })
      .then((response) => {       // 数据解析方式
      })
      .then((responseData) => {       // 获取到的数据处理
      })
      .catch((error) => { // 错误处理
      })
      .done();
  
             alert(JSON.stringify(json));
          }).catch.((error)=>{
              console.error(error);
          })
  ```

  默认情况下，iOS会阻止所有非https的请求。如果你请求的接口是http协议，那么首先需要添加一个App Transport Security的例外，详细可参考[这篇帖子](https://segmentfault.com/a/1190000002933776)。

  使用其他的网络库

  React Native中已经内置了[XMLHttpRequest API](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)(也就是俗称的ajax)。一些基于XMLHttpRequest封装的第三方库也可以使用，例如[frisbee](https://github.com/niftylettuce/frisbee)或是[axios](https://github.com/mzabriskie/axios)等。但注意不能使用jQuery，因为jQuery中还使用了很多浏览器中才有而RN中没有的东西（所以也不是所有web中的ajax库都可以直接使用）。

  ```javascript
  var request = new XMLHttpRequest();
  request.onreadystatechange = (e) => {
    if (request.readyState !== 4) {
      return;
    }
  
    if (request.status === 200) {
      console.log('success', request.responseText);
    } else {
      console.warn('error');
    }
  };
  
  request.open('GET', 'https://mywebsite.com/endpoint/');
  request.send();
  ```

  需要注意的是，安全机制与网页环境有所不同：在应用中你可以访问任何网站，没有[跨域](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing)的限制。

  **WebSocket**支持

  React Native还支持[WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)，这种协议可以在单个TCP连接上提供全双工的通信信道。

  ```javascript
  var ws = new WebSocket('ws://host.com/path');
  ws.onopen = () => {
    // 打开一个连接
  ws.send('something'); // 发送一个消息
  };
  ws.onmessage = (e) => {
    // 接收到了一个消息
    console.log(e.data);
  };
  ws.onerror = (e) => {
    // 发生了一个错误
    console.log(e.message);
  };
  ws.onclose = (e) => {
    // 连接被关闭了
    console.log(e.code, e.reason);
  };
  ```

  **AsyncStorage(**异步存储)

  AsyncStorage是一个简单的、异步的、持久化的Key-Value存储系统，它对于App来说是全局性的。它用来代替LocalStorage。

  我们推荐您在AsyncStorage的基础上做一层抽象封装，而不是直接使用AsyncStorage。

  

  译注：推荐由React Native中文网封装维护的[react-native-storage](https://github.com/sunnylqm/react-native-storage/blob/master/README-CHN.md)模块，提供了较多便利功能。

  本模块的JS代码提供了对原生实现的一个封装，以提供一个更清晰的JS API、返回真正的错误对象，以及简单的单项对象操作函数。每个方法都会返回一个Promise对象。

  常用的API

  - **setItem**

    static **setItem**(key: string, value: string, callback?: ?(error: ?Error) => void) [**#**](https://reactnative.cn/docs/0.51/asyncstorage.html#setitem)

    将**key**字段的值设置成**value**，并在完成后调用**callback**函数。如果有任何错误发生，则会传递一个**Error**对象作为第一个参数。返回一个**Promise**对象。

  - **getItem**

    static **getItem**(key: string, callback?: ?(error: ?Error, result: ?string) => void) [**#**](https://reactnative.cn/docs/0.51/asyncstorage.html#getitem)

    读取**key**字段并将结果作为第二个参数传递给**callback**。如果有任何错误发生，则会传递一个**Error**对象作为第一个参数。返回一个**Promise**对象。

  - **removeItem**

    static **removeItem**(key: string, callback?: ?(error: ?Error) => void) [**#**](https://reactnative.cn/docs/0.51/asyncstorage.html#removeitem)

    删除一个字段。返回一个**Promise**对象。

  - **mergeItem**

    static **mergeItem**(key: string, value: string, callback?: ?(error: ?Error) => void) [**#**](https://reactnative.cn/docs/0.51/asyncstorage.html#mergeitem)

    假设已有的值和新的值都是字符串化的**JSON**，则将两个值合并。返回一个**Promise**对象。还没有被所有原生实现都支持。

  - **clear**

    static **clear**(callback?: ?(error: ?Error) => void) [**#**](https://reactnative.cn/docs/0.51/asyncstorage.html#clear)

    删除全部的**AsyncStorage**数据，不论来自什么库或调用者。通常不应该调用这个函数**——**使用**removeItem**或者**multiRemove**来清除你自己的**key**。返回一个**Promise**对象。

  - **getAllKeys**

    static **getAllKeys**(callback?: ?(error: ?Error, keys: ?Array<string>) => void) [**#**](https://reactnative.cn/docs/0.51/asyncstorage.html#getallkeys)

    获取所有本应用可以访问到的数据，不论来自什么库或调用者。返回一个**Promise**对象。

### 将ReactNative集成到现有的iOS原生应用

把 **React Native** 组件集成到 **iOS** 应用中有如下几个主要步骤：

1. 配置好 React Native 依赖和项目结构。
2. 了解你要集成的 React Native 组件。
3. 使用 CocoaPods 把这些组件以依赖的形式加入到项目中。
4. 创建 js 文件，编写 React Native 组件的 js 代码。
5. 在应用中添加一个RCTRootView。这个RCTRootView正是用来承载你的 React Native 组件的容器。
6. 启动 React Native 的 Packager 服务，运行应用。
7. 验证这部分组件是否正常工作。

- 配置项目目录结构

  首先创建一个空目录用于存放 React Native 项目，然后在其中创建一个/ios子目录，把你现有的 iOS 项目拷贝到/ios子目录中。

- 安装 **JavaScript** 依赖包

  在项目根目录下创建一个名为**package.json**的空文本文件，然后填入以下内容：

  ```javascript
  {
    "name": "MyReactNativeApp",
    "version": "0.0.1",
    "private": true,
    "scripts": {
      "start": "yarn react-native start"
    }
  }
  ```

  接下来我们使用 `yarn` 或 `npm`（两者都是 node 的包管理器）来安装 React 和 React Native 模块。请打开一个终端/命令提示行，进入到项目目录中（即包含有 package.json 文件的目录），然后运行下列命令来安装：

  `$ yarn add react-native`

  所有 JavaScript 依赖模块都会被安装到项目根目录下的`node_modules/`目录中（这个目录我们原则上不复制、不移动、不修改、不上传，随用随装）。

  把`node_modules/`目录记录到.gitignore文件中（即不上传到版本控制系统，只保留在本地）。

- 安装 **CocoaPods**

  [CocoaPods](http://cocoapods.org/)是针对 iOS 和 Mac 开发的包管理工具。我们用它来把 React Native 框架的代码下载下来并添加到你当前的项目中。

  我们建议使用[Homebrew](http://brew.sh/)来安装 CocoaPods。

  `$ brew install cocoapods`

  配置 **CocoaPods** 的依赖

  React Native 框架整体是作为 node 模块安装到项目中的。下一步我们需要在 CocoaPods 的Podfile中指定我们所需要使用的”subspecs"。

  我们需要在Podfile文件中指定所需的`subspec`。创建Podfile的最简单的方式就是在/ios子目录中使用 CocoaPods 的`init`命令：

  `$ pod init`

  **Podfile**会创建在执行命令的目录中。你需要调整其内容以满足你的集成需求。调整后的**Podfile**的内容看起来类似下面这样

  ```objective-c
  # target的名字一般与你的项目名字相同
  target 'NumberTileGame' do
  
  # 'node_modules'目录一般位于根目录中
  # 但是如果你的结构不同，那你就要根据实际路径修改下面的`:path`
  pod 'React', :path => '../node_modules/react-native', :subspecs => [
      'Core',
      'CxxBridge', # 如果RN版本 >= 0.47则加入此行
      'DevSupport', # 如果RN版本 >= 0.43，则需要加入此行才能开启开发者菜单
      'RCTText',
      'RCTNetwork',
      'RCTWebSocket', # 调试功能需要此模块
      'RCTAnimation', # FlatList和原生动画功能需要此模块
      # 在这里继续添加你所需要的其他RN模块
    ]
  # 如果你的RN版本 >= 0.42.0，则加入下面这行
  pod 'yoga', :path => '../node_modules/react-native/ReactCommon/yoga'
  
  # 如果RN版本 >= 0.45则加入下面三个第三方编译依赖
  pod 'DoubleConversion', :podspec => '../node_modules/react-native/third-party-podspecs/DoubleConversion.podspec'
  pod 'glog', :podspec => '../node_modules/react-native/third-party-podspecs/glog.podspec'
  pod 'Folly', :podspec => '../node_modules/react-native/third-party-podspecs/Folly.podspec'
  
  end
  ```

  创建好了Podfile后，就可以开始安装 React Native 的 pod 包了。

  `$ pod install`

- 配置**HTTP**请求白名单

  在iOS 9以上的系统中，需要配置白名单，否则应用无法通过http协议连接到localhost主机。 如果不这样做，在尝试通过http连接到服务器时，会遭遇这个错误 - Could not connect to development server.

  打开工程中的 Info.list 文件，添加下面配置即可：

  ```
  <key>NSAppTransportSecurity</key> 
  <dict> 
    <key>NSExceptionDomains</key>
     <dict> 
        <key>localhost</key> 
          <dict> 
            <key>NSTemporaryExceptionAllowsInsecureHTTPLoads</key> 
            <true/>
          </dict>
       </dict>
   </dict>
  ```

### ReactNative 与原生iOS通信方式

在做RN开发的时候通常离不了JS 和Native之间的通信，比如：初始化RN时Native向JS传递数据，JS调用Native的相册选择图片，JS调用Native的模块进行一些复杂的计算，Native将一些数据(GPS信息，陀螺仪，传感器等)主动传递给JS等。

接下来我将分场景来介绍JS 和Native之间的通信。

- 初始化RN时Native向JS传递数据；
- Native发送数据给JS；
- JS发送数据给Native；
- JS发送数据给Native，然后Native回传数据给JS；

![image.png](https://upload-images.jianshu.io/upload_images/207335-51a2cb2ae95b5696.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


1. 初始化RN时Native向JS传递数据

   RN允许我们在初始化JS页面时向顶级的JS 组件传递props数据，顶级组件可以通过this.props来获取这些数据。

   **iOS**向**RN**传递初始化数据**initialProperties**

   RN的RCTRootView提供了initWithBundleURL方法来渲染一个JS 组件，在这个方法中提供了一个用于传递给这个JS 组件的初始化数据的参数。

   ```objective-c
   - (instancetype)initWithBundleURL:(NSURL *)bundleURL
                          moduleName:(NSString *)moduleName
                   initialProperties:(nullable NSDictionary *)initialProperties
                       launchOptions:(nullable NSDictionary *)launchOptions;
   ```

   jsCodeLocation：要渲染的RN的JS页面的路径；

   moduleName：要加载的JS模块名；

   initialProperties：要传递给顶级JS组件的初始化数据；

   launchOptions：主要在AppDelegate加载JS Bundle时使用，这里传nil就行；

2. Native到JS的通信(Native发送数据给JS)

   在RN的iOS SDK中提供了一个RCTEventEmitter接口，我们可以通过该接口实现Native到JS的通信，也就是Native将数据传递给JS。

   ```objective-c
   - (void)sendEventWithName:(NSString *)name body:(id)body;
   ```

   所以只要我们获得RCTEventEmitter的实例就可以借助它将数据传递给JS。为了获得RCTEventEmitter的实例我们可以通过继承RCTEventEmitter <RCTBridgeModule>的方式来实现.

   

   在**JS**中获取**Native**通过**RCTEventEmitter**传过来的数据

   

   在JS中可以通过NativeEventEmitter来获取Native通过RCTEventEmitter传过来的数据，

3. JS到Native的通信(JS发送数据给Native)

   我们所封装的NativeModule就是给JS用的，它是一个JS到Native通信的桥梁，JS可以通过它来实现向Native的通信(传递数据，打开Native页面等)，接下来我就来借助NativeModule来实现JS到Native的通信。

   首先实现**RCTModules**

   在RCTModules中，我们实现了一个RCT_EXPORT_METHOD(openPageClass:(NSString *)class parameters:(id)parameters))方法，该方法主要用于暴露给JS调用，来传递数据给Native；

   当收到数据后，通过NSNotificationCenter以通知的形式将数据发送出去；

   然后在JS端

   **JS**调用**JSBridgeModule**发送数据给**Native**

   ```javascript
   NativeModules.BTModules.openPageClass(item.path,'原生的界面')
   ```

   

4. JS发送数据给Native，然后Native回传数据给JS

   通过上文所讲的JS到Native的通信(JS发送数据给Native)，我们已经实现了JS到Native的通信，当时我们借助的是JSBridgeModule，其实它的功能还不局限于此，借助它我们还可以实现Native到JS的数据回传。

   ```objective-c
   typedef void (^RCTPromiseResolveBlock)(id result);
   typedef void (^RCTPromiseRejectBlock)(NSString *code, NSString *message, NSError *error);
   ```

   在**js**中实现

   ```javascript
   import {NativeMoudles} from 'react-native';
   const JSBridge = NativeModules.JSBridgeModule;
   JSBridge.doAdd(pareseInt(this.num1),pareseInt(this.num2)).then(e=>{
   	this.setState({
   		result:e
       })
   })
   ```

### ReactNative app打包发布

用React Native开发好APP之后，如何将APP发布以供用户使用呢？一款APP的发布流程无外乎：签名打包—>发布到各store这两大步骤。本文将向大家分享如何签名打包一款React Native APP。

1. 导出js bundle包和图片资源

   我们需要将JS部分的代码和图片资源等打包导出，然后通过XCode将其添加到iOS项目中。

   在React Native项目的根目录下执行:

   ```
   react-native bundle --entry-file index.js --platform ios --dev false --bundle-output release_ios/main.jsbundle --assets-dest release_ios/
   ```

   参数说明

   - `--platform ios`：代表打包导出的平台为iOS；

   - `--dev false`：代表关闭JS的开发者模式；

   - `--entry-file index.js`：代表js的入口文件为index.js；

   - `--bundle-output`：后面跟的是打包后将JS bundle包导出到的位置；

   - `--assets-dest`：后面跟的是打包后的一些资源文件导出到的位置；

     通过上述命令，我们可以将JS部分的代码和图片资源等打包导出到release_ios目录下：
![image.png](https://upload-images.jianshu.io/upload_images/207335-6e92f24ae371eea1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
     其中，assets为项目中的JS部分所用到的图片资源(不包括原生模块中的图片资源)，main.jsbundle是JS部分的代码。
   
2. 将js bundle包和图片资源导入到iOS项目中

   这一步我们需要用到Xcode，打开Xcode，把打包出来的assets(离线包默认名称是assets)拖入工程，选择Create folder references【完成后显示蓝色文件夹图标】，把main.jsbundle也拖入xcode里面，选择 Create groups就行了
![image.png](https://upload-images.jianshu.io/upload_images/207335-17de6b92a473985d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/207335-af68395954b49abd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

   然后，修改AppDelegate.m文件，添加如下代码：

   ```
        NSURL *jsCodeLocation;
    #if DEBUG
        NSString * strUrl = @"http://localhost:8081/index.bundle?platform=ios";
        jsCodeLocation = [NSURL URLWithString:strUrl];
    //  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
    #else
        jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
    #endif
   ```

   上述代码的作用是让React Native去使用我们刚才导入的jsbundle，这样以来我们就摆脱了对本地nodejs服务器的依赖。

3. 发布iOS应用

   发布iOS应用我们需要有一个99美元的账号用于将App上传到AppStore，或者是299美元的企业级账号用于将App发布到自己公司的服务器或第三方公司的服务器。

   接下来我们就需要进行申请APPID ➜ 在Tunes Connect创建应用 ➜ 打包程序 ➜ 将应用提交到app store等几大步骤。


