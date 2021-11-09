<script context="module">
	export const prerender = true;
    let memeUrl;
    let description;
    let twitter;
    let twitterHandle;

    memeUrl = "https://pbs.twimg.com/media/FDsd44IVcAg0EzP?format=png&name=900x900"
    description = "by"
    twitter = "https://twitter.com/bryceabdo"
    twitterHandle = "@bryceabdo"
</script>
<svelte:head>
	<title>infosuxx</title>
</svelte:head>

<section>
    <img src="{memeUrl}" alt="meme">
    <a href="{twitter}"><p>{description} {twitterHandle} </p></a>
    <button onClick="window.location.reload();">Random again</button>
</section>

<style>
	section {
        padding-top: 4rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
    p {
        color:white
    }
	img {
        width: 100%;
        max-width: 400px;
        margin-bottom: 2rem;
    }
</style>
