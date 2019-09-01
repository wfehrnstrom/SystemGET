<script>
  import Result from '../components/Result.svelte'

  export let results = [{
    name: 'Klaura',
    price: 25.60,
    volume: 330,
    abv: 0.052,
    costPerAlcMl: 1.52,
    effectiveness: 'Moderate',
    group: 'Beer',
    rank: 352,
    organic: true
  }];

  let total = 18000;
</script>

<style>
</style>

<div style='width: 100vw; display: flex; justify-content: center'>
  {#if results.length > 0}
    {#each results as result}
      <Result {result} {total}/>
    {/each}
  {:else}
    <div style = 'display: flex; justify-content: start; align-items: center'>
      <h2 style='font-weight: 300'>No results found. <strong>:(</strong></h2>
    </div>
  {/if}
</div>
