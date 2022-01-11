<template>
	<div class="overview-basis pay-with-internet-banking">
		<div class="back">
			<a href="#" @click="back()">
				<arrow-back v-if="!desktopVersion" />
				<arrow-back-lg v-else />
				<div>Zpět na výběr metody</div>
			</a>
		</div>

		<div class="header">
			<div>
				<csob class="csob" />
				<svg
					class="csob-lg"
					width="52"
					height="40"
					viewBox="0 0 52 40"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M2.40542 25.667L3.89028 24.3032L3.99108 24.2126L4.07802 24.3166C4.08975 24.331 5.31273 25.7603 7.40934 25.7811C9.38488 25.8009 10.45 24.659 10.4607 24.6467L10.5401 24.5603L11.1103 24.9929L11.0127 25.0979C10.6761 25.4595 9.99343 26.0825 8.963 26.5396C9.53368 26.603 10.0718 26.7017 10.7119 26.8217L11.0703 26.8895V30.5477L10.9012 30.4923C10.1572 30.2474 9.35875 30.0213 8.55872 30.0213C6.4445 30.0213 5.13086 31.2011 5.13086 33.1004C5.13086 35.0983 6.35223 36.2898 8.39818 36.2898C9.19821 36.2898 10.0036 36.1357 10.9337 35.8023L11.106 35.741V39.4131L11.0127 39.4403C10.5913 39.5625 9.09794 39.9593 7.56241 39.9593C2.89771 39.9593 0 37.3032 0 33.0278C0 30.0133 1.76273 27.7412 4.74097 26.8591C3.38573 26.4889 2.55423 25.7945 2.51583 25.7609L2.40542 25.667ZM23.6086 33.2107C23.6086 37.5879 26.1122 39.9987 30.6595 39.9987C35.2405 39.9987 37.7633 37.5879 37.7633 33.2107C37.7633 28.897 35.1744 26.4227 30.6595 26.4227C26.1783 26.4233 23.6086 28.8975 23.6086 33.2107ZM11.5915 30.7369C11.5915 34.0016 14.27 34.5632 16.2263 34.9723L16.229 34.9729C17.2838 35.1945 18.117 35.3695 18.117 35.8705C18.117 36.3953 17.1026 36.5819 16.1522 36.5819C14.71 36.5819 13.1787 36.2801 11.9509 35.7526L11.7157 35.6507V39.3591L11.8453 39.3906C13.6475 39.8178 15.1905 40.0002 17.0061 40.0002C18.8744 40.0002 23.2207 39.5661 23.2207 35.5408C23.2207 32.2854 20.5262 31.7516 18.5582 31.3617L18.557 31.3615L18.5512 31.3603C17.5134 31.1545 16.6946 30.992 16.6946 30.5177C16.6946 29.923 17.6429 29.8436 18.5709 29.8436C19.7966 29.8436 21.0494 30.0612 22.1945 30.4751L22.4212 30.5561V26.8963L22.2873 26.868C20.9358 26.5826 19.4648 26.4242 18.1442 26.4242C13.7963 26.4242 11.5915 27.8755 11.5915 30.7369ZM30.661 29.8427C29.5106 29.8427 28.9271 30.9761 28.9271 33.2113C28.9271 35.4792 29.4946 36.5816 30.661 36.5816C32.2701 36.5816 32.4275 34.8407 32.4483 33.2145C32.4269 31.7665 32.2179 29.8427 30.661 29.8427ZM38.77 26.6441H38.6015V39.779H45.9719C48.7106 39.779 51.2446 39.3278 51.2446 36.053C51.2446 34.8727 50.3555 33.5425 48.8461 33.0955C50.3166 32.5536 51.0137 31.5509 51.0137 29.9663C51.0137 27.8233 49.4376 26.6441 46.5767 26.6441H38.77ZM46.1413 35.6499C46.1413 34.8563 45.6592 34.5176 44.5317 34.5176H43.4202V36.8009H44.4959C44.8821 36.8009 46.1413 36.7177 46.1413 35.6499ZM44.5493 29.401C45.5226 29.401 46.0165 29.7637 46.0165 30.4789C46.0165 31.3541 45.161 31.5382 44.4426 31.5382H43.4202V29.4005C43.6762 29.401 44.5493 29.401 44.5493 29.401Z"
						fill="#003366"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M25.8299 0C21.0638 0 17.2002 3.86361 17.2002 8.62912C17.2002 13.3946 21.0638 17.2582 25.8299 17.2582C30.5959 17.2582 34.4595 13.3946 34.4595 8.62912C34.4595 3.86361 30.5959 0 25.8299 0ZM23.9327 19.1754C27.6523 19.1754 30.5516 17.3924 32.1959 15.61C41.9691 15.0878 50.4889 15.1406 50.4889 15.1406L50.4841 23.0065L0.553711 23.0118V19.1968C0.553711 19.1968 7.55984 17.7956 16.981 16.8068C18.5618 18.0532 21.0467 19.1754 23.9327 19.1754Z"
						fill="#0099CC"
					/>
				</svg>
				<h1>ČSOB</h1>
			</div>

			<p>
				Přihlašte se do svého internetového bankovnictví a přepište/zkopírujte
				údaje do platebního příkazu.
			</p>
		</div>

		<form>
			<div>
				<label for="">
					<span>Číslo karty</span>
					<input
						type="text"
						id="card-number"
						value="458445-2101886807/2010"
						readonly
					/>
					<a class="copy-text copy" data-clipboard-target="#card-number">
						<span>Kopírovat</span>
						<copy v-if="!desktopVersion" />
						<copy-lg v-else />
					</a>
				</label>
			</div>

			<div>
				<label for="">
					<span>Částka</span>
					<input type="text" id="cost" value="23 485 Kč" readonly />
					<a class="copy" data-clipboard-target="#cost">
						<copy v-if="!desktopVersion" />
						<copy-lg v-else />
					</a>
				</label>
			</div>

			<div>
				<label for="">
					<span>Variabilní symbol</span>
					<input type="text" id="variable-symbol" value="6074862244" readonly />
					<a class="copy" data-clipboard-target="#variable-symbol">
						<copy v-if="!desktopVersion" />
						<copy-lg v-else />
					</a>
				</label>
			</div>

			<div class="btns">
				<a href="#" target="_blank">
					<span>Přejít do Bankovnictví</span>
					<external-link />
				</a>
				<a href="#" target="_blank">
					<span>Přejít do Business Bankovnictví</span>
					<external-link />
				</a>
			</div>
		</form>

		<div class="group">
			<div class="qr-img">
				<img src="~@/assets/qr.png" alt="" />
			</div>

			<div class="text-wrapper">
				<div class="qr-text">
					<p class="mob">
						Uložte si QR kód a následně jej nahrejte do mobilní aplikace vaší
						banky pro rychlejší a bezchybné zadání platby.
					</p>

					<p class="desktop">
						Naskenujte QR kód přes mobilní aplikaci vaší banky pro rychlejší a
						bezchybné zadání platby.
					</p>

					<a href="">
						<save />
						<span>Uložit QR kód do telefonu</span>
					</a>
				</div>

				<div class="bill">
					<p>
						Nebo si nechte platební údaje poslat<br />
						na e-mail či vytisknout.
					</p>
					<div>
						<a href="">
							<email v-if="!desktopVersion" />
							<email-lg v-else />
							<span>Poslat e-mailem</span>
						</a>
						<a href="">
							<print v-if="!desktopVersion" />
							<print-lg v-else />
							<span>Vytisknout</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'PayWithInternetBanking',

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
