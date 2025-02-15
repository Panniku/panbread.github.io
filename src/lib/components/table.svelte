<script>
    export let data = [
        {
            key: "item 1,1",
            value: "item 1,2"
        },
        {
            key: "item 2,1",
            value: "item 2,2"
        },
    ];
    export let name;
</script>

<!--https://svelte.dev/playground/7b02f45e49744502bf5f03cb61375f9f?version=5.19.9-->
<table class="{name}">
    <thead>
        <tr>
            {#each Object.keys(data[0]) as colHead}
                <th>{colHead}</th>
            {/each}
        </tr>
    </thead>
    <tbody>
        {#each Object.values(data) as row}
            <tr>
                {#each Object.values(row) as cell}
                    <td>
                        {#if cell.startsWith("<")}
                            <span>{@html cell}</span>
                        {:else}
                            <span class="{cell}" >{@html cell}</span>
                        {/if}
                    </td>
                {/each}
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

.fluent {
        color: var(--color-green);
    }

.somewhat {
    color: var(--color-orange);
}

.learning {
    color: var(--color-aqua);   
}

</style>