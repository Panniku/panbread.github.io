<script>
  import Header from "$lib/components/header.svelte";
  import '../app.css';
  import { theme } from "$lib/stores";

  let { children } = $props();
  
  let previewImage = "https://raw.githubusercontent.com/Panniku/panniku.github.io/refs/heads/master/src/lib/assets/images/preview.png";
  let darkFavicon = "https://raw.githubusercontent.com/Panniku/panniku.github.io/refs/heads/master/src/lib/assets/images/favicon_dark.png";
  let lightFavicon = "https://raw.githubusercontent.com/Panniku/panniku.github.io/refs/heads/master/src/lib/assets/images/favicon_light.png";
  let currentTheme = $derived($theme);

</script>

<svelte:head>
  <title>panbread's site</title>
  <link rel="icon" href="{currentTheme == "dark" ? darkFavicon : lightFavicon}"/>
  <meta property="og:author" content="panbread">
  <meta property="og:title" content="panbread's site">
  <meta property="og:description" content="my personal website!">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://panniku.github.io">
  <meta name="theme-color" content="#81a2be">
  <meta property="og:image" content="{previewImage}">
  <meta name="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://panniku.github.io">
  <meta property="twitter:title" content="panbread's site">
  <meta property="twitter:description" content="my personal website!">
  <meta property="twitter:image" content="{previewImage}">
</svelte:head>

<Header></Header>

<main class="content">
    {@render children()}
</main>

<nav class="footer">
  made with 
  <a href="https://svelte.dev/">sveltekit</a> 
  / 
  <a href="https://github.com/Panniku/panniku.github.io">source code</a>
</nav>

<style>

.content {
  margin: 0 auto;
  padding: 24px;
}

@media screen and (max-width: 660px) {
  .content {
    margin: 12px auto;
  } 
}

.footer {
  margin-top: auto;
  width: 100%;
  text-align: center;
  padding-bottom: 4px;
  color: var(--color-border);
}

@media screen and (max-width: 300px) {
  .footer {
    font-size: x-small;
  }
}


@media screen and (max-width: 330px) {
  .content {
    margin: 12px auto;
    padding: 0 24px;
  } 
}

@media screen and (max-height: 330px) {
  .content {
    margin: 0;
    padding: 0 24px;
  } 
}

.footer a {
  color: var(--color-border);
}

</style>