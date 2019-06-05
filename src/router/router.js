import Main from '@/views/Main.vue'

export const otherRouter = {
	path:'/',
	name:'system',
	title:'系统管理',
	meta:{
		requiresAuth:false
	},
	component:Main
}
export const routers = [
	otherRouter
]


