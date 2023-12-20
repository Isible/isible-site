<script lang="ts">
    import User from "$lib/users.svelte"
</script>


<div class="container">
    <div class="part">
        <User name="TheHackerChampion"/>
        <User name="thepigcat76"/>
        <User name="TheNumber007"/>
    </div>
    <div class="part">
        <User name="N1cohd1"/>
        <User name="GS6024"/>
        <User name="Eli727"/>
    </div>
</div>

<style>
    .container {
        align-items: center;
    }

    .part {
        align-items: center;
        display: flex;
        padding-bottom: 1em;
    }
</style>