

<script>
    export let title;
    export let RansomwareGroup;
    export let imageUrl;
    export let description;
    //export let link;
</script>

<article class="box-content h-64 w-64 p-4 items-center bg-gray-900 shadow rounded-lg">
    <div class="image">
        <img src="{imageUrl}" alt="{title}">
    </div>
    <header>
        <h1>{title}</h1>
        <h2>{RansomwareGroup}</h2>
    </header>
    <div class="content">
        <p>{description}</p>
    </div>
    <footer>
        <button>Show Details</button>
    </footer>
</article>