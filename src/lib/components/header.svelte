<script>
  import { base } from "$app/paths";
  import { theme } from "$lib/stores";
  import { createEventDispatcher } from "svelte";

  let pages = [
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a1 1 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13m7 7v-5h4v5zm2-15.586l6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586z"/></svg>',
      name: "home"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"/><path fill="currentColor" d="M11 11h2v6h-2zm0-4h2v2h-2z"/></svg>',
      name: "about"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="M3.102 20.898c.698.699 1.696 1.068 2.887 1.068c1.742 0 3.855-.778 6.012-2.127c2.156 1.35 4.27 2.127 6.012 2.127c1.19 0 2.188-.369 2.887-1.068c1.269-1.269 1.411-3.413.401-6.039c-.358-.932-.854-1.895-1.457-2.859a17 17 0 0 0 1.457-2.859c1.01-2.626.867-4.771-.401-6.039c-.698-.699-1.696-1.068-2.887-1.068c-1.742 0-3.855.778-6.012 2.127c-2.156-1.35-4.27-2.127-6.012-2.127c-1.19 0-2.188.369-2.887 1.068C1.833 4.371 1.69 6.515 2.7 9.141c.359.932.854 1.895 1.457 2.859A17 17 0 0 0 2.7 14.859c-1.01 2.626-.867 4.77.402 6.039m16.331-5.321c.689 1.79.708 3.251.052 3.907c-.32.32-.815.482-1.473.482c-1.167 0-2.646-.503-4.208-1.38a26.6 26.6 0 0 0 4.783-4.784c.336.601.623 1.196.846 1.775M12 17.417a23.6 23.6 0 0 1-2.934-2.483A24 24 0 0 1 6.566 12A23.7 23.7 0 0 1 12 6.583a23.6 23.6 0 0 1 2.934 2.483a24 24 0 0 1 2.5 2.934A23.7 23.7 0 0 1 12 17.417m6.012-13.383c.657 0 1.152.162 1.473.482c.656.656.638 2.117-.052 3.907c-.223.579-.51 1.174-.846 1.775a26.5 26.5 0 0 0-4.783-4.784c1.562-.876 3.041-1.38 4.208-1.38M4.567 8.423c-.689-1.79-.708-3.251-.052-3.907c.32-.32.815-.482 1.473-.482c1.167 0 2.646.503 4.208 1.38a26.5 26.5 0 0 0-4.783 4.784a14 14 0 0 1-.846-1.775m0 7.154c.223-.579.51-1.174.846-1.775a26.5 26.5 0 0 0 4.783 4.784c-1.563.877-3.041 1.38-4.208 1.38c-.657 0-1.152-.162-1.473-.482c-.656-.656-.637-2.117.052-3.907"/><circle cx="12" cy="12" r="2.574" fill="currentColor"/></svg>',
      name: "projects"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="M22 8.65A5 5 0 0 0 17 4H7a5 5 0 0 0-5 4.74A2 2 0 0 0 2 9v7.5A3.48 3.48 0 0 0 5.5 20c1.43 0 2.32-1.06 3.19-2.09c.32-.37.65-.76 1-1.1a4.8 4.8 0 0 1 1.54-.75a6.6 6.6 0 0 1 1.54 0a4.8 4.8 0 0 1 1.54.75c.35.34.68.73 1 1.1c.87 1 1.76 2.09 3.19 2.09a3.48 3.48 0 0 0 3.5-3.5V9a2 2 0 0 0 0-.26zm-2 7.85a1.5 1.5 0 0 1-1.5 1.5c-.5 0-1-.64-1.66-1.38c-.34-.39-.72-.85-1.15-1.26a6.7 6.7 0 0 0-2.46-1.25a6.9 6.9 0 0 0-2.46 0a6.7 6.7 0 0 0-2.46 1.25c-.43.41-.81.87-1.15 1.26C6.54 17.36 6 18 5.5 18A1.5 1.5 0 0 1 4 16.5V9a1 1 0 0 0 0-.15A3 3 0 0 1 7 6h10a3 3 0 0 1 3 2.72v.12A1 1 0 0 0 20 9z"/><circle cx="16" cy="12" r="1" fill="currentColor"/><circle cx="18" cy="10" r="1" fill="currentColor"/><circle cx="16" cy="8" r="1" fill="currentColor"/><circle cx="14" cy="10" r="1" fill="currentColor"/><circle cx="8" cy="10" r="2" fill="currentColor"/></svg>',
      name: "minigames"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="M19.903 8.586a1 1 0 0 0-.196-.293l-6-6a1 1 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a1 1 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a1 1 0 0 0-.051-.259q-.014-.048-.033-.093M16.586 8H14V5.414zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10z"/><path fill="currentColor" d="M8 12h8v2H8zm0 4h8v2H8zm0-8h2v2H8z"/></svg>',
      name: "credits"
    },
  ];

  const dispatch = createEventDispatcher();
  const toggleTheme = () => {
    // This is all? even without :global() the theme still works. Svelte is weird but i LOVE it
    window.document.body.classList.toggle("theme-dark");
    $theme = $theme === "light" ? "dark" : "light";
    dispatch('themeChange', $theme); // From gemini
  }
</script>

<nav class="header">
    <div></div>
    <div class="pages">
      {#each pages as page}
        <a class="{page.name}Page" aria-label="{page.name}" href="{base}/{page.name === "home" ? "" : page.name}">
          {@html page.icon}
          <span class="pageName">{page.name}</span>
        </a>  
      {/each}
    </div>
    <button aria-label="Toggle Theme" class="toggleTheme" onclick={toggleTheme}>
        {#if $theme === "dark"}
          <svg class="lightIcon" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993S6.993 9.239 6.993 12M12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007S8.993 13.658 8.993 12S10.342 8.993 12 8.993M10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122l1.415 1.414l-2.12 2.122zM16.24 6.344l2.122-2.122l1.414 1.414l-2.122 2.122zM6.342 7.759L4.22 5.637l1.415-1.414l2.12 2.122zm13.434 10.605l-1.414 1.414l-2.122-2.122l1.414-1.414z"/></svg>
        {:else}
          <svg class="darkIcon" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M20.742 13.045a8 8 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.03 8.03 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10 10 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.94 9.94 0 0 0 7.072 2.93a9.93 9.93 0 0 0 7.07-2.929a10 10 0 0 0 2.583-4.491a1 1 0 0 0-1.224-1.224m-2.772 4.301a7.95 7.95 0 0 1-5.656 2.343a7.95 7.95 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a8 8 0 0 1 2.06-1.483a10.03 10.03 0 0 0 2.89 7.848a9.97 9.97 0 0 0 7.848 2.891a8 8 0 0 1-1.484 2.059"/></svg>
        {/if}
    </button>
</nav>

<style>

.header {
  height: 3em;
  padding: 0 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: var(--color-header);
}

.pages {
  display: flex;
  flex-direction: row;
  gap: 4px;
}

.pages > a {
  padding: 4px;
  border: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

@media screen and (max-width: 530px) {
  .pages .pageName {
    display: none;
  }
}

.header .pages {
  align-self: center;
  margin-left: auto;
}

a {
  color: unset;
}

.pages .homePage {
  color: var(--color-red);
}

.pages .aboutPage {
  color: var(--color-green);
}

.pages .projectsPage {
  color: var(--color-blue);
}

.pages .minigamesPage {
  color: var(--color-aqua);
}

.pages .creditsPage {
  color: var(--color-purple);
}

.header .toggleTheme {
  display: flex;
  margin-left: auto;
  background-color: transparent;
  border: transparent;
}

.toggleTheme .lightIcon {
  color: var(--color-yellow);
}

.toggleTheme .darkIcon {
  color: var(--color-fg);
}
</style>