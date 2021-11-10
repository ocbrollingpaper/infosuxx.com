<script>
	import Trends from '$lib/Charts/Trends.svelte';
	import Footer from '$lib/header/Footer.svelte';
    import Header from '$lib/header/Header.svelte';
	import Ransom from '$lib/Ransoms/Ransom.svelte';
	import '../app.css';

	const ransom = [
		{
			id: "1",
			title: "kkona",
			description: "ransom blyat",
			imageUrl:
				"https://raw.githubusercontent.com/ocbrollingpaper/infosuxx.com/main/assets/logo.png",
			RansomwareGroup: "Revil",
			Link: "#",
		},
		{
			id: "1",
			title: "kkona2",
			description: "ransom blyat",
			imageUrl:
				"https://raw.githubusercontent.com/ocbrollingpaper/infosuxx.com/main/assets/logo.png",
			RansomwareGroup: "Revil",
			Link: "#",
		},
		{
			id: "1",
			title: "kkona2",
			description: "ransom blyat ransom blyat",
			imageUrl:
				"https://raw.githubusercontent.com/ocbrollingpaper/infosuxx.com/main/assets/logo.png",
			RansomwareGroup: "Revil",
			Link: "#",
		},
		{
			id: "1",
			title: "kkona2",
			description: "ransom blyat ransom blyat",
			imageUrl:
				"https://raw.githubusercontent.com/ocbrollingpaper/infosuxx.com/main/assets/logo.png",
			RansomwareGroup: "Revil",
			Link: "#",
		}
	];

</script>

<Header />

<main>
	<section id="ransomware">
		{#each ransom as ransoms }
			<Ransom
			title={ransoms.title}
			RansomwareGroup={ransoms.RansomwareGroup}
			description={ransoms.description}
			imageUrl={ransoms.imageUrl}
			/>
		{/each}
	</section>
	<section id="Trends">
		<Trends />
	</section>
	<slot />
</main>

<Footer />

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: row;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
