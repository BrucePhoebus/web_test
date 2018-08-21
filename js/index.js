Vue.component('todo-item', {
	template: '<li>This is a todo.</li>'
});
// template: '<App/>',
//components: { App }
app = new Vue({
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
		
		primitiveValues: {
			firstNmae: 'Phoebus',
			lassName: 'Zheng',
			age: 23
		},
		
		objectValues: {
			one: {
				message: 'Hello'
			},
			two: {
				message: 'Phoebus Zheng'
			}
		},
		
		person: {
            name: '大漠',
            set: '男',
            age: 30
       },
       cat: "<img src='//www.w3cplus.com/sites/default/files/blogs/2017/1709/cat.jpg' />",
		
		num: 10,
		greeting: false,
		ok: true,
		val:false,
		name: "大漠",
		sex: "",
		interest: [],
		identity:''
	},
	methods: {
		reverseMessage: function() {
			this.message =  this.message.split('').reverse().join('');
		},
		/*inpclick: function() {
			console.log(typeof this.val);
　　　　if(this.val=="false"){
			　	this.ok=false;
			}else{
			　	this.ok=true;
			}
　　　}*/
	}
});