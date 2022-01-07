<template>
	<div class="waiting-for-payment">
		<div class="waiting">
			<h1>Čekáme na platbu...</h1>
			<p>Platba nebyla dosud přijata.</p>
		</div>
		<div class="bottom">
			<p>Ještě jste neprovedli platbu?</p>
			<button>Zvolit metodu a zaplatit 23 458 Kč</button>
		</div>
	</div>
</template>
<script>
export default {
	name: 'WaitingForPayment',

	props: {
		desktopVersion: {
			type: Boolean,
			default: false,
		},
	},

	methods: {
		back() {
			this.$emit('showHomePage');
		},
	},
};
</script>
