<script>
    import Textfield from '@smui/textfield';
    let min = '';
    let max = '';
    export let value = 'Value';
    export let header = value;
</script>

<style>
  h2 {
    font-weight: 600;
    font-size: 1em;
  }
</style>

<h2 style='margin-top: 30px'>{header}</h2>
<div style='display: flex; justify-content: space-between; margin-bottom: 10px'>
  <Textfield style='width: 13vw; height: 50px;' variant="outlined" bind:value={min} label='Minimum {value}'/>
  <p>-</p>
  <Textfield style='width: 13vw; height: 50px;' variant="outlined" bind:value={max} label='Maximum {value}'/>
</div>
