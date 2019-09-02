<script>
    import Textfield from '@smui/textfield';
    import { createEventDispatcher } from 'svelte';

    let minField = '';
    let maxField = '';
    let err = undefined;

    export let min = NaN;
    export let max = NaN;
    export let value = 'Value';
    export let header = value;
    export let hydrateWith;

    const dispatch = createEventDispatcher();
    if (hydrateWith && hydrateWith[0] && hydrateWith[1]) {
      minField = hydrateWith[0];
      maxField = hydrateWith[1];
    }

    function checkValidRange() {
      let rangeText;

      if (!isNaN(min) && !isNaN(max)) {
        rangeText = ` between ${min} and ${max}.`
      }
      else if (!isNaN(min)) {
        rangeText = ` greater than ${min}`
      }
      else if (!isNaN(max)) {
        rangeText = `less than ${max}`
      }
      else {
        rangeText = '.'
      }

      let constraint = {
        min: parseInt(minField),
        max: parseInt(maxField)
      }

      if (isNaN(constraint.min) || isNaN(constraint.max)){
        err = 'Entered Value is not a number. Please enter a number' + rangeText;
      }
      else if (constraint.min > constraint.max) {
        err = 'The minumum value cannot be greater than the maximum value';
      }
      else if ((!isNaN(min) || !isNaN(max)) && ((constraint.min < min) || (constraint.max > max))){
        err = 'Entered value is not' + rangeText;
      }
      else {
        err = undefined;
        dispatch('constraintChange', constraint);
      }
    }
</script>

<style>
  h2 {
    font-weight: 600;
    font-size: 1em;
  }
</style>

<h2 style='margin-top: 30px'>{header}</h2>
<div style='display: flex; justify-content: space-between; margin-bottom: 10px'>
  <Textfield style='width: 13vw; height: 50px;' variant="outlined" bind:value={minField} label='Minimum {value}' on:change={checkValidRange}/>
  <p>-</p>
  <Textfield style='width: 13vw; height: 50px;' variant="outlined" bind:value={maxField} label='Maximum {value}' on:change={checkValidRange}/>
</div>
{#if err}
  <p style='font-size: 0.7em; color: #eb4034'>{err}</p>
{/if}
