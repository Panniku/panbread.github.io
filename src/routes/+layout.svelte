<script>
    import Header from "$lib/components/header.svelte";
    import '../app.css';

    let { children } = $props();

</script>

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
  height: 100%;
  margin: 24px auto;
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

.footer a {
  color: var(--color-border);
}

</style>