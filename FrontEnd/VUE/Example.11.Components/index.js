//标签的命名: W3C 规则 (小写，并且包含一个短杠)

// 全局注册
Vue.component('my-component1', {
    template: '<div>A custom component1!</div>'
})
// 创建根实例
new Vue({
    el: '#example-1'
})

//局部注册
//这种封装也适用于其它可注册的 Vue 功能，比如指令。
var Child = {
    template: '<div>A custom component2!</div>'
};
new Vue({
    el: '#example-2',
    components: {
        // <my-component> 将只在父组件模板中可用
        'my-component2': Child
    }
})

//DOM模板解析
//<ul>、<ol>、<table>、<select> 这样的元素里允许包含的元素有限制
var errorTemplate = {
    template: '<table><my-row>...</my-row></table>'
};
var rightTemplate = {
    template: '<table><tr is="my-row">...</tr></table>'
};
//但如果使用来自以下来源之一的字符串模板，则没有这些限制
//<script type="text/x-template">
//JavaScript 内联模板字符串
//.vue 组件

//各种选项大多数都可以在组件里使用，
//但data 必须是函数
var errorTemplate = Vue.component('my-component3', {
    template: '<span>{{ message }}</span>',
    data: {
        message: 'hello'
    }
});
var data = { counter: 0 }

Vue.component('simple-counter', {
    template: '<button v-on:click="counter += 1">{{ counter }}</button>',
    // 技术上 data 的确是一个函数了，因此 Vue 不会警告，
    // 但是我们却给每个组件实例返回了同一个对象的引用
    data: function () {
        return data;
    }
});
new Vue({
    el: '#example-3'
});
//组件组合: prop 向下传递数据，事件向上传递消息
Vue.component('child', {
    // 声明 props
    props: ['message'],
    // 就像 data 一样，prop 也可以在模板中使用
    // 同样也可以在 vm 实例中通过 this.message 来使用
    template: '<span>{{ message }}</span>'
})
new Vue({
    el: '#example-4'
});
//camelCase vs. kebab-case
Vue.component('child2', {
    // 在 JavaScript 中使用 camelCase
    props: ['myMessage'],
    template: '<span>{{ myMessage }}</span>'
})
new Vue({
    el: '#example-5',
    data: {
        parentMsg: "Hello parents"
    }
});

