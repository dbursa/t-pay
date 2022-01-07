<template>
	<div class="payment-failed">
		<div class="header">
			<payment-refused v-if="!desktopVersion" />
			<payment-refused-lg v-if="desktopVersion" />

			<h1>Platba neproběhla</h1>
			<p>Mrzí nás to, ale platba byla zamítnuta.</p>
		</div>
		<div class="list">
			<p>Možné důvody zamítnutí platby</p>

			<ul>
				<li>
					<question-mark-red />
					<span>Špatně zadané údaje z Vaší karty</span>
				</li>
				<li>
					<question-mark-red />
					<span>Vaší kartě expirovala platnost</span>
				</li>
				<li>
					<question-mark-red />
					<span>Nemáte dostatek finančích prostředků</span>
				</li>
				<li>
					<question-mark-red />
					<span>Vaše karta nemá povolené online platby</span>
				</li>
			</ul>
		</div>
		<div class="btns">
			<button>Opakovat platbu kartou</button>
			<button>Vybrat jinou platební metodu</button>
		</div>
	</div>
</template>
<script>
export default {
	name: 'PaymentFailed',

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
