<script>
    import "../../static/style.css";
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import Moon from "./icons/moon.svelte";
    import Sun from "./icons/sun.svelte";
  
    const navs = [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "About",
        href: "/about",
      },
      {
        title: "Contact",
        href: "/contact",
      },
      {
        title: "Projects",
        href: "/projects",
      },
    ];
  
    let currentTheme = "";
  
    onMount(() => {
      const userPrefDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
  
      const hasUserSetDarkMode = document.documentElement.dataset.theme == "dark";
  
      const hasUserSetLightMode =
        document.documentElement.dataset.theme == "light";
  
      if (!hasUserSetDarkMode && !hasUserSetLightMode) {
        setTheme(userPrefDark ? "dark" : "light");
      }
    });
  
    // @ts-ignore
    const setTheme = (theme) => {
      document.documentElement.dataset.theme = theme;
      document.cookie = `siteTheme=${theme}; max-age=31536000; path="/"`;
      currentTheme = theme;
    };
  
    $: routeId = $page.route.id;
  </script>
  
  <nav>
    <div class="container">
      <h1>Dev Information:</h1>
  
      <ul>
        <li>
            This page is currently under development. Many things are just placeholders yet and we don't collect any data at the contact form
        </li>
      </ul>
    </div>
  </nav>
  
  <style>
    nav {
      padding: 0.5em;
      font-family: lucia;
      color: white;
      background-color: rgb(255, 0, 0);
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
  </style>
  