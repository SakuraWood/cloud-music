# React

React 是当前最火的前端框架，另外两个火的是 Vue 和Angular。

## 关键词一：虚拟dom

React使用虚拟dom，这一点和vue是一样的，何谓虚拟dom呢？也就是说react完全使用自己的一套机制，名为virtual dom，然后把它映射到最终渲染层上。在此期间，一切的变化，通过一套diff算法，先改变virtual dom，再把改变呈现到最终渲染层。注意，不存在什么真实dom到虚拟dom的映射（很多人还在纠结这一点）。只有虚拟dom映射到真实dom，变化是虚拟dom的变化，操作也在虚拟dom上。理解这一点。



## 关键词二：MVVM

React 是MVVM吗？ 并不算是严格意义上的MVVM架构，Angular才是。React只是单向数据绑定，这点和Vue一样。不过这并不是说React没有借鉴MVVM的思想。与之前的架构相比，如MVC和你们所用到的MVP，你需要同时关心两件事情：

1. 数据更新和数据更新的动作
2. 界面更新和界面更新的动作

但是如果是React，你只需要关心一件事：

1. 数据更新和数据更新的动作

怎么说呢？总之就是编程思维上的转变吧，很快就适应了。


## 关键词三：ReactNative

怎么说呢？

如果是纯React，只用来写前端,React那可以说是相当舒服，JSX和HTML模板可以说近乎无缝对接了。什么div，img，css预编译，webpack打包啊，直接写的飞起。

那现在如果换到react-native，事情并没有想象的那么单纯。前端的h5标签几乎用不了，不支持直接使用css（sass、less党们表示很绝望）。你享受不到在前端语言里放飞自我的感觉。只能用一些react-native里，他们已经定义好的View、Text这些之类的标签。

你可能在想，为什么React不搞一个大一统呢？反正它最后都是要渲染到浏览器或原生的Android或iOS上。如果我做的话（作为一个前端码农），那我就让ReactNative内部实现一套机制，div对应View，img对应Image，以此类推，把css属性映射到原生View属性上去。。可惜React并没有这么做，现在我也没发现有第三方库做出相关的工作。ReactNative之所以搞出这些标签，一方面是实现所有html/css渲染这件事确实复杂，当然不是说facebook没这实力，它也是为了照顾其他厂商的面子，你想我都做到这程度，不相当于实现一套浏览器了吗？是想置那些浏览器厂商于何地（Microsoft、Firefox、Google表示有话说）？另一方面，一定意义上是想让一些原生应用开发者，也加入到React的阵营。通过ReactNative，领略到React的强大，从此入坑React。不得不说facebook还是有些心机，你看它开源的协议，BSD，这个协议是说，你的产品只要用了它的库，它就可以使用你在产品中所使用的所有专利。

这里还有个故事，facebook之前把它产品线下的所有开源库都改成了BSD 协议，后来遭到开发者和社区的疯狂吐槽。facebook因此不得不服软，最终同意把React、Jest、Flow、Immutable.js 这四个库改回MIT license。但是很可惜，直到现在，ReactNative依然是BSD 协议。我们的产品涉及到了核心专利了吗？会被facebook盯上使用吗？是否需要权衡一下呢？

## 关键词四：生态

React的生态可谓爆炸，各种第三方库层出不穷。刚才说了，我们只关心数据，其它的React帮我们做好。所以，React的库，很多都是管理React数据的库。其中，最出名的就是Redux。而在Redux和React之间，还有各种各样的第三方中间件库。

