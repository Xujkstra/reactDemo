在Root结点，通过createStore 创建Store createStore(reduce)
在Provider组件里，传入store.
在Reducer处，初始化state.
```
<Provider store = {store}}>
	<App />
</Provide>
```
通过mapStateToProps(state) mapDispatchToProps(dispatch) 和connect给Dumb Component传递props.（可以在Provider下面任意组件使用）

父组件将获取到的props传递给子组件

通过调用action改变state

不要乱改state的属性名

react-router 组件嵌套时，传递 prop 的方法？

added : [0,1,2,3,4,5,6,7,8,9]  ....已添加ID,从added里面判断商品是否已经添加

深层更新操作: react-addons-update  update方法进行操作

