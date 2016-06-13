在Root结点，通过createStore 创建Store createStore(reduce)
在Provider组件里，传入store.
在Reducer处，初始化state.
```
<Provider store = {store}}>
	<App />
</Provide>
```
通过mapStateToProps(state) mapDispatchToProps(dispatch) 和connect给Dumb Component传递props.

父组件将获取到的props传递给子组件

通过调用action改变state

不要乱改state的属性名