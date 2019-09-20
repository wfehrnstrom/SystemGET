<script>
  import { createEventDispatcher } from 'svelte';
  export let range;
  export let total;

  const lastPage = createEventDispatcher();
  const nextPage = createEventDispatcher();
</script>

<div style='display: flex; align-items: center'>
  {#if range && range[0] != 1}
    <div on:click={lastPage()} style='margin-right: 10px'>
      <img src='pageleft.svg' alt='previous results'/>
    </div>
  {/if}
  {#if range} Items {range[0]}-{range[1]}/{total} {/if}
  {#if range && range[1] != total}
    <div on:click={nextPage()} style='margin-left: 10px'>
      <img src='pageright.svg' alt='next results'/>
    </div>
  {/if}
</div>
