<template>
	<div class="loading-wrapper">
		<div class="loader"></div>
		<div class="text">
			<h1>Nyní budete přesměrováni</h1>
			<p>Vydržte prosím chvíli nebo <a href="">klikněte zde</a></p>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Loading',

	methods: {
		back() {
			this.$emit('showHomePage');
		},
	},
};
</script>
