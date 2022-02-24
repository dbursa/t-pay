<template>
	<div class="overview-basis pay-with-internet-banking">
		<div class="back">
			<a href="#" @click="back()">
				<arrow-back />
				<div>Zpět na výběr metody</div>
			</a>
		</div>

		<div class="header">
			<div>
				<csob />
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
					<span>Číslo účtu</span>
					<input
						type="text"
						id="card-number"
						value="458445-2101886807/2010"
						readonly
					/>
					<a class="copy-text copy" data-clipboard-target="#card-number">
						<span>Kopírovat</span>
						<copy />
					</a>
				</label>
			</div>

			<div>
				<label for="">
					<span>Částka</span>
					<input type="text" id="cost" value="23 485 Kč" readonly />
					<a class="copy" data-clipboard-target="#cost">
						<copy />
					</a>
				</label>
			</div>

			<div>
				<label for="">
					<span>Variabilní symbol</span>
					<input type="text" id="variable-symbol" value="6074862244" readonly />
					<a class="copy" data-clipboard-target="#variable-symbol">
						<copy />
					</a>
				</label>
			</div>

			<div class="btns">
				<a href="#" target="_blank">
					<span>Přejít do Bankovnictví</span>
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
							<email />
							<span>Poslat e-mailem</span>
						</a>
						<a href="">
							<print />
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

	methods: {
		back() {
			this.$emit('showHomePage');
		},
	},
};
</script>
