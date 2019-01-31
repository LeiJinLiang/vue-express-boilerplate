<template>
	<div class="page">
		<h1>This is {{msg}}</h1>
		<nav>
			<router-link to='/page1'>page1</router-link>
			<router-link to='/Product/21021.htm'>Product/21021.htm</router-link>
		</nav>
	</div>
</template>

<script>
	import './home.module.css'
	import './test.scss'
	export default {
		name: 'home-page',
		data () {
		    return {
		        msg : 'vue express boilerplate'
			}
		}
	}
</script>
