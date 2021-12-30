<template>
	<div class="overview-basis pay-other-method">
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
				Použijte platební údaje níže pro zadání platby. Částka může být připsána
				až další pracovní den.
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
		</form>

		<div class="qr">
			<div>
				<img src="~@/assets/qr.png" width="160" height="160" alt="" />
			</div>

			<div>
				<p>
					Uložte si QR kód a následně jej nahrejte do mobilní aplikace vaší
					banky pro rychlejší a bezchybné zadání platby.
				</p>

				<a href="">
					<save />
					<span>Uložit QR kód do telefonu</span>
				</a>
			</div>
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
</template>
<script>
export default {
	name: 'PayOtherMethod',

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
