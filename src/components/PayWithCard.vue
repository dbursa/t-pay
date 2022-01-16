<template>
	<div class="pay-with-card">
		<div class="back">
			<a href="#" @click="back()">
				<arrow-back v-if="!desktopVersion" />
				<arrow-back-lg v-else />
				<div>Zpět na výběr metody</div>
			</a>
		</div>
		<div class="header">
			<div>
				<visa-header v-if="!desktopVersion" />
				<master-card-header v-if="!desktopVersion" />
				<visa-header-lg v-if="desktopVersion" />
				<master-card-header-lg v-if="desktopVersion" />
			</div>
			<h1>Platba kartou</h1>
		</div>

		<form action="submit" method="post">
			<div>
				<label for="">
					<span> Držitel karty <span class="required">*</span> </span>

					<input type="text" placeholder="Jméno na kartě" />
				</label>
			</div>

			<div>
				<label class="mastercard" for="">
					<span>Číslo karty <span class="required">*</span></span>
					<input type="text" />
					<master-card-header />
					<!-- <visa-header /> -->
				</label>
			</div>

			<div>
				<div>
					<label for="">
						<span>Expirace <span class="required">*</span></span>
						<input type="text" placeholder="MM/YY" />
					</label>
				</div>
				<div>
					<label for="">
						<span>3-místný CVV kód <span class="required">*</span></span>
						<input type="text" placeholder="Vzadu na kartě" />
					</label>
				</div>
			</div>

			<div>
				<label for="">
					<span>E-mailová adresa</span>
					<input type="email" />
				</label>
			</div>

			<button>Zaplatit 23 458 Kč</button>
		</form>
	</div>
</template>
<script>
export default {
	name: 'PayWithCard',

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
