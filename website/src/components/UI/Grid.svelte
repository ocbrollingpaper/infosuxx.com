<script>
    import RansomwareItem from "../Ransomware/RansomwareItem.svelte";
    export let ransoms;
</script>

<style>
    section {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 25%);
    }
    @media (min-width: 768px) {
        section {
            grid-template-columns: repeat(2, 25%);
        }
    }
</style>
<section id="ransomware">
    {#each ransoms as ransomware}
        <RansomwareItem
            title={ransomware.title}
            RansomwareGroup={ransomware.RansomwareGroup}
            description={ransomware.description}
            imageUrl={ransomware.imageUrl}
        />
    {/each}
</section>