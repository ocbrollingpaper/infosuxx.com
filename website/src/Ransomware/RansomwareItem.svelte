<style>
    article {
        box-shadow: 2px 2px 8px rgba(0, 0, 0.26);
        border-radius: 5px;
        background: #1f1f1f;
        margin: 1rem;
    }
    header,
    .content,
    footer {
        padding: 1rem;
    }
    .image {
        object-fit: contain;
    }
    img {
        width: 100%;
    }
    h1 {
        font-size: 1.25rem;
        margin: 0;
        font-family: "Oswald", sans-serif;
        color: rgba(233, 233, 233, 1);
    }
    h2 {
        font-size: 1rem;
        color:rgba(233, 233, 233, 1);
        font-weight: normal;
    }
    p {
        font-size: 1.25rem;
        color: rgba(233, 233, 233, 1);
        margin: 0;
    }
    div {
        text-align: center;
        padding: 1rem;
    }
</style>

<script>
    export let title;
    export let RansomwareGroup;
    export let imageUrl;
    export let description;
    //export let link;
</script>

<article>
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