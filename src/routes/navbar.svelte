<script>
   import { page } from "$app/stores";

   const navs = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "About",
        href: "/about"
    },
    {
        title: "Contact",
        href: "/contact"
    },
   ];

    $: routeId = $page.route.id;
</script>

<nav>
    <div class = "container">
        <h1>Isible</h1>

        <ul>
            {#each navs as {title, href}}
            <li>
                <a {href} class:active = {routeId == href} {title}>{title}</a>
            </li>
            {/each}
        </ul>
    </div>
</nav>

<style>
    nav {
        padding: 0.5em;
        font-family: lucia;
        color: white;
        background-color: rgb(220, 20, 60);
    }
    .container {
        display: flex;
        align-items: center;
    }
    ul {
        display: flex;
        margin: 0;
        margin-left: auto;
        list-style: none;
    }
    li {
        margin-right: 20px;
    }
    h1 {
        margin: 0;
        font-size: 1.5em;
        font-weight: normal;
    }
    a {
        text-decoration: none;
        color: white;
    }
    .active {
        color: yellow;
    }
</style>