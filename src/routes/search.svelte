<script>
  import * as sapper from '../node_modules/@sapper/app';

  import Textfield from '@smui/textfield';
  import Chip, {Set, Icon, Checkmark, Text} from '@smui/chips';
  import Button, {Label} from '@smui/button';
  import {costConstraints, propertyConstraints} from '../stores.js'

  import ControlPanel from '../components/ControlPanel.svelte';

  let selected = ['Beers', 'Wines', 'Spirits', 'Ciders']
  let advancedSearch = false;
  let searchBox = '';

  function toggle(){
		advancedSearch = !advancedSearch;
	}

  function resetFilters(){
    costConstraints.update((c)=>({
      total: [NaN, NaN],
      perMl: [NaN, NaN],
      rank: [NaN, NaN]
    }));

    propertyConstraints.update((c)=>({
      abv: [NaN, NaN]
    }));
  }

  document.addEventListener('keydown', function(e) {
    if (e.keyCode == 13) {
      sapper.goto('results');
      resetFilters();
    }
  });
</script>

<style>

  .search-container {
    width: 30vw;
    display: flex;
    flex-direction: column;
  }

  .search-buttons-container {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }

  @media only screen and (max-width: 800px) {
    .search-container {
      width: 65vw;
    }

    .search-buttons-container {
      flex-direction: column-reverse;
    }

    .search-button-wrapper {
      margin-bottom: 20px;
    }
  }
</style>

<div style='width: 100vw; display: flex; justify-content: center'>
  <div class='search-container'>
    <div>
      Beverage Types
      <Set chips={['Beers', 'Wines', 'Spirits', 'Ciders']} let:chip filter bind:selected={selected}>
        <Chip tabindex="0"><Checkmark /><Text>{chip}</Text></Chip>
      </Set>
    </div>
    <Textfield style="margin-top: 30px; width: 100%" variant="outlined" bind:value={searchBox} label="Search" input$aria-controls="helper-text-outlined-a" input$aria-describedby="helper-text-outlined-a" />
    <div style="margin-top:35px; display: flex; flex-direction: column">
      <div class='search-buttons-container'>
        <Button style="width: 200px" on:click={toggle}>Advanced Filters</Button>
        <a class ='search-button-wrapper' style='display: block; text-decoration: none;' href='/results'><Button style="width: 100px" variant="raised">Search</Button></a>
      </div>
      {#if advancedSearch}
        <ControlPanel style='margin-top: 20px; width: 100%'/>
      {/if}
    </div>
  </div>
</div>
