<script context="module">
	export const prerender = true;
</script>


<svelte:head>
	<title>infosuxx</title>
</svelte:head>

<section>
	<div class="logos">
		<a href="https://threatfox.abuse.ch/" target="_blank"><img src="/threatfox_logo.png" alt="ThreatFox by abuse.ch"></a>
		<a href="https://vx-underground.org/" target="_blank"><img src="/vxunderground_logo.png" alt="VX Undergroundg"></a>
		<a href="https://greynoise.io/" target="_blank"><img src="/greynoise_logo.png" alt="Greynoise.io"></a>
		<a href="https://tria.ge/" target="_blank"><img src="/triage_logo.png" alt="Tria.ge"></a>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
	h1 {
		width: 100%;
		font-family: 'Oswald';
	}
	h2 {
		width: 100%;
		font-family: 'Oswald';
	}
	.logos {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		flex: 1;
		height: 4rem;
		overflow: hidden;
		max-height: 100px;
	}
	.logos img {
		margin: 1rem;
	}
</style>
