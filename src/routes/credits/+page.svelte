<script>

    let credits = [
        {
            author: "https://omardotdev.codeberg.page/",
            purpose: "saw their page and it gave me a \"push\" to fix mine"
        },        
        {
            author: "https://vendicated.dev/",
            purpose: "inspiration and css tricks"
        },        
        {
            author: "https://v7.aikoyori.xyz",
            purpose: "home, minigames idea"
        },        
        {
            author: "https://megu.dev",
            purpose: "inspiration"
        },        
        {
            author: "https://github.com/github/personal-website",
            purpose: "overall idea of everything, and for more to come"
        }
    ];
</script>

<article>
    <h2>site</h2>
    this site was made with the help of 
    <a href="https://svelte.dev/">sveltekit</a>! a very good framework for making websites with while maintaining the simplicity of vanilla js
</article>

<article>
    <h2>theme</h2>
    the theme used is the 
    <a href="https://github.com/chriskempson/base16">base16</a>
    variant of
    <a href="https://github.com/chriskempson/tomorrow-theme">tomorrow</a>
    with color palettes from
    <a href="https://github.com/chriskempson/vim-tomorrow-theme/">the vim colorscheme</a>
</article>

<article class="others">
    <h2>others</h2>

    {#each credits as credit}
        <a href="{credit.author}">{credit.author}</a>
        <br>
        {credit.purpose}
        <br>
        <br>
    {/each}
</article>

<style>

a {
    color: var(--color-blue);
}

.others a {
    font-size: larger;
}

</style>