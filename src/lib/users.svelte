<script lang="ts">
    export let name: string = "";

    let userData: any;
  
    async function fetchData() {
      try {
        const response = await fetch('https://api.github.com/users/' + name);
        const data = await response.json();
        userData = data;
      } catch (error) {
        console.error('Error when getting data:', error);
      }
    }
  
    fetchData(); // Get data
  </script>
  
  <main>
    <div class="user">
      {#if userData}
      <h1><a href={userData.html_url}>{userData.login}</a></h1>
      {#if userData.bio}
        <p>{userData.bio}</p>
      {/if}
      <img src={userData.avatar_url} alt="">
      <!-- Showed data here -->
    {/if}
    </div>
  </main>


  <style>
    img {
        padding: 1em;
        border-radius: 20em;
        height: 15em;
    }

    a {
        text-decoration: none;
        color: var(--color);
    }
    a:hover {
        text-decoration: underline;
        color: var(--color);
    }

    .user   {
        padding-right: 3em;
    }
  </style>