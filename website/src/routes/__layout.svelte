<script>
	import Trends from '$lib/Charts/Trends.svelte';
	import Footer from '$lib/header/Footer.svelte';
	import Header from '$lib/header/Header.svelte';
	import Ransom from '$lib/Ransoms/Ransom.svelte';
	import Sidebar from '$lib/Sidebar/Sidebar.svelte';
	import '../app.css';

	const ransom = [
		{
			id: '1',
			title: 'kkona',
			description: 'ransom blyat',
			imageUrl:
				'https://raw.githubusercontent.com/ocbrollingpaper/infosuxx.com/main/assets/logo.png',
			RansomwareGroup: 'Revil',
			Link: '#'
		},
		{
			id: '1',
			title: 'kkona2',
			description: 'ransom blyat',
			imageUrl:
				'https://raw.githubusercontent.com/ocbrollingpaper/infosuxx.com/main/assets/logo.png',
			RansomwareGroup: 'Revil',
			Link: '#'
		},
		{
			id: '1',
			title: 'kkona2',
			description: 'ransom blyat ransom blyat',
			imageUrl:
				'https://raw.githubusercontent.com/ocbrollingpaper/infosuxx.com/main/assets/logo.png',
			RansomwareGroup: 'Revil',
			Link: '#'
		},
		{
			id: '1',
			title: 'kkona2',
			description: 'ransom blyat ransom blyat',
			imageUrl:
				'https://raw.githubusercontent.com/ocbrollingpaper/infosuxx.com/main/assets/logo.png',
			RansomwareGroup: 'Revil',
			Link: '#'
		},
		{
			id: '1',
			title: 'kkona2',
			description: 'ransom blyat ransom blyat',
			imageUrl:
				'https://raw.githubusercontent.com/ocbrollingpaper/infosuxx.com/main/assets/logo.png',
			RansomwareGroup: 'Revil',
			Link: '#'
		},
		{
			id: '1',
			title: 'kkona2',
			description: 'ransom blyat ransom blyat',
			imageUrl:
				'https://raw.githubusercontent.com/ocbrollingpaper/infosuxx.com/main/assets/logo.png',
			RansomwareGroup: 'Revil',
			Link: '#'
		},
		{
			id: '1',
			title: 'kkona2',
			description: 'ransom blyat ransom blyat',
			imageUrl:
				'https://raw.githubusercontent.com/ocbrollingpaper/infosuxx.com/main/assets/logo.png',
			RansomwareGroup: 'Revil',
			Link: '#'
		},
		{
			id: '1',
			title: 'kkona2',
			description: 'ransom blyat ransom blyat',
			imageUrl:
				'https://raw.githubusercontent.com/ocbrollingpaper/infosuxx.com/main/assets/logo.png',
			RansomwareGroup: 'Revil',
			Link: '#'
		},
		{
			id: '1',
			title: 'kkona2',
			description: 'ransom blyat ransom blyat',
			imageUrl:
				'https://raw.githubusercontent.com/ocbrollingpaper/infosuxx.com/main/assets/logo.png',
			RansomwareGroup: 'Revil',
			Link: '#'
		},
		{
			id: '1',
			title: 'kkona2',
			description: 'ransom blyat ransom blyat',
			imageUrl:
				'https://raw.githubusercontent.com/ocbrollingpaper/infosuxx.com/main/assets/logo.png',
			RansomwareGroup: 'Revil',
			Link: '#'
		},
		{
			id: '1',
			title: 'kkona2',
			description: 'ransom blyat ransom blyat',
			imageUrl:
				'https://raw.githubusercontent.com/ocbrollingpaper/infosuxx.com/main/assets/logo.png',
			RansomwareGroup: 'Revil',
			Link: '#'
		},
		{
			id: '1',
			title: 'kkona2',
			description: 'ransom blyat ransom blyat',
			imageUrl:
				'https://raw.githubusercontent.com/ocbrollingpaper/infosuxx.com/main/assets/logo.png',
			RansomwareGroup: 'Revil',
			Link: '#'
		},
	];
</script>
<Sidebar />
<Header />
<div class="container mx-auto p-20">
	<main>
	<div class="grid grid-cols-4 gap-10 mx-auto content-start">
		{#each ransom as ransoms}
			<Ransom title={ransoms.title} description={ransoms.description} imageUrl={ransoms.imageUrl} RansomwareGroup={ransoms.RansomwareGroup} Link={ransoms.Link} />
		{/each}
	</div>
</main>
</div>
<slot />

<Footer />

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 100%;
		margin: 0;
		box-sizing: border-box;
	}
</style>
