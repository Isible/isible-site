<nav>
    <div class = "container">
        <h1>Isible</h1>

        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/contact">Contact</a>
            </li>
        </ul>
    </div>
</nav>

<div class="container">
    <slot />
</div>

<style>
    nav {
        padding: 0.5em;
        font-family: lucia;
        color: white;
        background-color: rgb(220, 20, 60);
    }
    .container {
        display: flex;
    }
    ul {
        display: flex;
        margin: 0;
        margin-left: auto;
        list-style: none;
    }
    li {
        margin-right: 20px;
        margin-top: 2.5px;
    }
    h1 {
        margin: 0;
        font-size: 1pm;
        font-weight: normal;
    }
    a {
        text-decoration: none;
        color: white;
    }
</style>