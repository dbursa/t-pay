<template>
	<div id="app">
		<main>
			<nav>
				<button class="close">
					<close />
					<div v-if="tabletSize">Návrat do obchodu</div>
				</button>

				<div>
					<button class="info" @click="showInfo()">
						<info />
						<div>Detail platby</div>
					</button>

					<dropdown locale="CZ" :tablet="tabletSize" />
				</div>
			</nav>

			<div :class="['main-table', { 'detail-payment': this.isInfo }]">
				<pay-method
					:desktop-version="this.tabletSize"
					v-if="
						!payWithCardSelected &&
						!payWithOtherBank &&
						!payWithInternetBankingSelected &&
						!loadingSelected
					"
					@showPayWithCard="payWithCardScreen"
					@showPayWithOtherBank="payWithOtherBankScreen"
					@showPayWithInternetBanking="payWithInternetBankingScreen"
					@showLoading="loadingScreen"
				/>
				<pay-with-card
					v-if="payWithCardSelected"
					:desktop-version="this.tabletSize"
					@showHomePage="homePage"
				/>
				<pay-other-method
					v-if="payWithOtherBank"
					:desktop-version="this.tabletSize"
					@showHomePage="homePage"
				/>
				<pay-with-internet-banking
					v-if="payWithInternetBankingSelected"
					:desktop-version="this.tabletSize"
					@showHomePage="homePage"
				/>
				<loading v-if="loadingSelected" @showHomePage="homePage" />
				<payment-info v-if="isInfo" />
			</div>

			<footer>
				<p>Bezpečnou a rychlou platbu zařídí</p>
				<the-pay />
			</footer>
		</main>
	</div>
</template>

<script>
export default {
	name: 'App',

	data() {
		return {
			isInfo: false,
			tabletSize: false,
			windowWidth: window.innerWidth,
			payWithCardSelected: false,
			payWithInternetBankingSelected: false,
			payWithOtherBank: false,
			loadingSelected: false,
		};
	},

	created() {
		if (this.windowWidth >= 768) {
			this.tabletSize = true;
		}
	},

	methods: {
		showInfo() {
			this.isInfo = !this.isInfo;
		},

		payWithCardScreen() {
			this.payWithCardSelected = true;
		},

		payWithOtherBankScreen() {
			this.payWithOtherBank = true;
		},

		payWithInternetBankingScreen() {
			this.payWithInternetBankingSelected = true;
		},

		loadingScreen() {
			this.loadingSelected = true;
		},

		homePage() {
			this.payWithCardSelected = false;
			this.payWithOtherBank = false;
			this.payWithInternetBankingSelected = false;
			this.loadingSelected = false;
		},
	},

	mounted() {
		window.onresize = () => {
			this.windowWidth = window.innerWidth;

			if (this.windowWidth >= 768) {
				this.tabletSize = true;
			} else {
				this.tabletSize = false;
			}
		};
	},
};
</script>
