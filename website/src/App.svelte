<style>
	main {
		margin-top: 5rem;
	}
</style>
<script>
	import Header from "./UI/Header.svelte";
	import Footer from "./UI/Footer.svelte";
	import Grid from "./UI/Grid.svelte";

	const ransoms = [
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
	<Grid {ransoms}/>
</main>

<Footer />

