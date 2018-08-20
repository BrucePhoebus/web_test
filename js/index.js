Vue.component('todo-item', {
	template: '<li>This is a todo.</li>'
});
// template: '<App/>',
//components: { App }
var all = new Vue({
	el: '#app',
	data: {
		rawHtml: "<span style=\"color:red\">This should be red.",
		message: 'Hello Vue!',
		seen: false,
		todos: [
			{ text: "java" },
			{ text: "php" },
			{ text: "html" },
			{ text: "el" }
		],
		
		parentMessage: '滴滴',
		items: [
			{ msg: '滴滴顺风车'},
			{ msg: '滴滴快车'},
			{ msg: '滴滴专车'}
		],
		
		greeting: false,
		ok: true,
		val:true,
		name: "",
		sex: "",
		interest: [],
		identity:''
	},
	methods: {
		reverseMessage: function() {
			this.message =  this.message.split('').reverse().join('');
		},
//		inpclick: function() {
//　　　　		this.ok = this.val;
//　　　}
	}
});