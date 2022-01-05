<template>
	<div class="pay-methods">
		<div class="card">
			<h2>Platební karta</h2>

			<div>
				<a @click="payWithCard()" class="btn">
					<div>Platba kartou</div>
					<div class="options">
						<visa />
						<master-card />
					</div>
				</a>
				<a href="#" class="btn" @click="loading()">
					<div>Zaplatit přes</div>
					<apple-pay />
				</a>
				<a href="#" class="btn">
					<div>Zaplatit přes</div>
					<google-pay />
				</a>
			</div>
		</div>
		<div class="deffered">
			<h2>Odložená platba</h2>
			<div>
				<button>
					<platim-pak :desktop-version="desktopVersion" />
				</button>
			</div>
		</div>
		<div class="internet-banking">
			<h2>Bankovní tlačítka</h2>

			<div class="first-row">
				<button>
					<ceska-sporitelna :desktop-version="desktopVersion" />
				</button>
				<button>
					<kb :desktop-version="desktopVersion" />
				</button>
				<button @click="payWithInternetBanking()">
					<csob :desktop-version="desktopVersion" />
				</button>
			</div>

			<div class="second-row">
				<button>
					<postovni-sporitelna :desktop-version="desktopVersion" />
				</button>
				<button>
					<raiffeinsen-bank :desktop-version="desktopVersion" />
				</button>
				<button>
					<m-bank :desktop-version="desktopVersion" />
				</button>
			</div>

			<div class="third-row">
				<button>
					<fio :desktop-version="desktopVersion" />
				</button>
				<button>
					<moneta :desktop-version="desktopVersion" />
				</button>
				<button>
					<equa-bank :desktop-version="desktopVersion" />
				</button>
			</div>
		</div>
		<div class="others">
			<h2>Ostatní</h2>

			<div>
				<button @click="payWithOtherBank()">
					<other-bank v-if="desktopVersion" />
					<div>Jiná banka</div>
				</button>
				<button>
					<bitcoin :desktop-version="desktopVersion" />
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'PayMethod',

	props: {
		desktopVersion: {
			type: Boolean,
			default: false,
		},
	},

	methods: {
		payWithCard() {
			this.$emit('showPayWithCard');
		},

		loading() {
			this.$emit('showLoading');
		},

		payWithOtherBank() {
			this.$emit('showPayWithOtherBank');
		},

		payWithInternetBanking() {
			this.$emit('showPayWithInternetBanking');
		},
	},
};
</script>
