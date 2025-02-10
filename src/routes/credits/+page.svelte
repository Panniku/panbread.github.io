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
            purpose: "home page idea"
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

<h2>others</h2>

<table class="creditsTable">
    <thead>
        <tr>
            <th>author</th>
            <th>purpose</th>
        </tr>
    </thead>
    <tbody>
        {#each credits as row}
            <tr>
                <td>
                    <a href="{row.author}">{row.author}</a>
                </td>
                <td>{row.purpose}</td>
            </tr>
        {/each}
    </tbody>
</table>

<style>

    table {
        margin: 1em;
        border-collapse: collapse;
        height: fit-content;
    }

    th, td {
        border: 1px solid var(--color-border);
        text-align: start;
        padding: 4px;
    }

    a {
        color: var(--color-blue);
    }

</style>