<script>
    import Header from "$lib/components/header.svelte";
    import previewImage from "$lib/assets/preview.png";
    import '../app.css';

    let { children } = $props();

</script>

<svelte:head>
  <title>panbread's site</title>
  <meta property="og:author" content="panbread">
  <meta property="og:title" content="panbread's site">
  <meta property="og:description" content="my personal website!">
  <meta property="og:type" content="website">
  <meta property="og:url" content="http://panniku.github.io">
  <meta name="theme-color" content="#81a2be">
  <meta property="og:image" content="{previewImage}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:type" content="image/png">
  <meta name="twitter:card" content="summary_large_image">
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
  .content {
    margin: 12px auto;
    padding: 0;
  } 
}

@media screen and (max-height: 330px) {
  .content {
    margin: 0;
    padding: 0;
  } 
}

.footer a {
  color: var(--color-border);
}

</style>