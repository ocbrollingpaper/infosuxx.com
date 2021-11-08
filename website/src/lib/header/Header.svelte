<script>
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
</script>

<style>
	header {
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
		height: 4rem;
		background: #1f1f1f ;
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.16);
	}
	h1 {
		color: #fff;
		font-family: 'Oswald', sans-serif;
		margin: 0;
	}
</style>

<header>
	<a href="/"><h1>INFOSUXX</h1></a>
</header>