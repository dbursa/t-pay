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
				<h1>Jiná banka</h1>
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
				<button>Přejít do Bankovnictví</button>
				<button>Přejít do Business Bankovnictví</button>
			</div>
		</form>

		<div class="group">
			<div class="qr-img">
				<img src="~@/assets/qr.png" alt="" />
			</div>

			<div class="text-wrapper">
				<div class="qr-text">
					<p>
						Uložte si QR kód a následně jej nahrejte do mobilní aplikace vaší
						banky pro rychlejší a bezchybné zadání platby.
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
