<template>
	<div>
		<me-navbar class="header">
			<span slot="center">我的慕淘</span>
		</me-navbar>

		
	</div>
</template>

<script>
	import MeNavbar from 'base/navbar'; 
	
	export default {
		name: 'PersonalHeader',
		components: {
			MeNavbar,
			
		}
	}
</script>

<style lang="scss" scoped>
	@import "~assets/scss/mixins";

	.header.mine-navbar {
	    border-bottom: 1px solid $border-color;
	    background:#F12B1A;
	    color: #fff;
	    font-size:16px;
	    width:100%;
	    position:fixed;
	    top:0;
	    left:0;
  	}
</style>