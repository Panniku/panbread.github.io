<script>
    import { base } from "$app/paths";

    let theme = "dark";
    let isDark = $state(true);

    const toggleTheme = () => {
      // This is all? even without :global() the theme still works. Svelte is weird but i LOVE it
      window.document.body.classList.toggle("theme-dark");
      isDark = !isDark
    }
</script>

<nav class="header">
    <div></div>
    <div class="pages">
      <a class="homePage" aria-label="Home" href="{base}/">home</a>
      <a class="aboutPage" aria-label="About" href="{base}/about">about</a>
      <a class="projectsPage" aria-label="Projects" href="{base}/projects">projects</a>
      <a class="creditsPage" aria-label="Credits" href="{base}/credits">credits</a>
    </div>
    <button aria-label="Toggle Theme" class="toggleTheme" onclick={toggleTheme}>
        {#if isDark == true}
          <svg class="lightIcon" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993S6.993 9.239 6.993 12M12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007S8.993 13.658 8.993 12S10.342 8.993 12 8.993M10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122l1.415 1.414l-2.12 2.122zM16.24 6.344l2.122-2.122l1.414 1.414l-2.122 2.122zM6.342 7.759L4.22 5.637l1.415-1.414l2.12 2.122zm13.434 10.605l-1.414 1.414l-2.122-2.122l1.414-1.414z"/></svg>
        {:else}
          <svg class="darkIcon" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M20.742 13.045a8 8 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.03 8.03 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10 10 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.94 9.94 0 0 0 7.072 2.93a9.93 9.93 0 0 0 7.07-2.929a10 10 0 0 0 2.583-4.491a1 1 0 0 0-1.224-1.224m-2.772 4.301a7.95 7.95 0 0 1-5.656 2.343a7.95 7.95 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a8 8 0 0 1 2.06-1.483a10.03 10.03 0 0 0 2.89 7.848a9.97 9.97 0 0 0 7.848 2.891a8 8 0 0 1-1.484 2.059"/></svg>
        {/if}
    </button>
</nav>

<style>

.header {
  height: 3em;
  gap: 12px;
  padding: 0 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: var(--color-header);
}

.header a {
  padding: 4px;
  border: 1px solid currentColor;
}

.header .pages {
  align-self: center;
  margin-left: auto;
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