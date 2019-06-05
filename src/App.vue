<template>
	<div id="app" class="app-main">
		<router-view></router-view>
	</div>
</template>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		/* text-align: center; */
		color: #2c3e50;
		overflow: hidden;
		height: 100%;
		position: relative;
	}
	
	html,
	body {
		width: 100%;
		height: 100%;
		background: #f0f0f0;
		overflow: hidden;
	}
	
	.app-main {
		width: 100%;
		height: 100%;
	}
	
	@media only screen and (min-device-width: 360px) {
		.app-main {
			overflow: auto;
		}
	}
</style>