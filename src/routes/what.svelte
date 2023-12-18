<script>
    import Button from "$lib/button.svelte";
</script>

<div class="container grid">
    <div class="what">
        <h3>What we do</h3>
        <p>
            We're a small developing organisation for open source software
            and hardware projects. Our goal is to learn aas much as
            possible with different programming languages. You can find
            more detail about us developers in the about section and our
            projects in the project section. You can find both of them
            in the header of this site.
        </p>
        <Button size = "medium">
            <a href = "/about">Go to about</a>
        </Button>
    </div>
    <div class="contact">
        <h3>Contact Us</h3>
        <p><strong>Isible</strong></p>
        <p>via <a class="con" href="https://www.github.com/Isible">Github</a></p>
        <p>via <a class="con" href="https://discord.com/invite/nCa73qqv5Q">Discord</a></p>
    </div>
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 2em;
    }
    .what {
        grid-column: span 8;
    }
    .contact {
        grid-column: span 4;
    }
    h3 {
        padding-bottom: 0.5em;
        margin-bottom: 0.5em;
        font-size: 2em;
        font-weight: 500;
        border-bottom: 1px solid #ddd;
    }
    .con {
        text-decoration: none;
        color: var(--color);
    }
    .con:hover {
        text-decoration: underline;
    }
    a {
        color: var(--text-color);
        text-decoration: none;
        font-size: 1em;
    }
</style>