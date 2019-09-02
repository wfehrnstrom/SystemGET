<script>
  import Result from '../components/Result.svelte'
  

  export let results = [
    {
      name: 'Klaura',
      price: 25.60,
      volume: 330,
      abv: 0.052,
      costPerAlcMl: 1.52,
      effectiveness: 'Moderate',
      group: 'beer',
      rank: 352,
      organic: true
    },
    {
      name: 'Cognac Leyrat',
      price: 431,
      volume: 700,
      abv: 0.4,
      costPerAlcMl: 1.53,
      effectiveness: 'Moderate',
      group: 'spirits',
      rank: 353,
      organic: false
    },
    {
      name: 'Halmstad Brygghus',
      price: 21.9,
      volume: 330,
      abv: 0.055,
      costPerAlcMl: 1.51,
      effectiveness: 'Moderate',
      group: 'beer',
      rank: 349,
      organic: true
    }
  ];

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
