<script>
  import * as sapper from '../node_modules/@sapper/app';

  import Textfield from '@smui/textfield';
  import Chip, {Set, Icon, Checkmark, Text} from '@smui/chips';
  import Button, {Label} from '@smui/button';

  import ControlPanel from '../components/ControlPanel.svelte';

  let selected = ['Beers', 'Wines', 'Spirits', 'Ciders']
  let advancedSearch = false;
  let searchBox = '';

  function toggle(){
		advancedSearch = !advancedSearch;
	}

  document.addEventListener('keydown', function(e) {
    if (e.keyCode == 13) {
      sapper.goto('results');
    }
  });
</script>

<style>
</style>

<div style='width: 100vw; display: flex; justify-content: center'>
  <div style='width: 30vw; display: flex; flex-direction: column'>
    <div>
      Beverage Types
      <Set chips={['Beers', 'Wines', 'Spirits', 'Ciders']} let:chip filter bind:selected={selected}>
        <Chip tabindex="0"><Checkmark /><Text>{chip}</Text></Chip>
      </Set>
    </div>
    <Textfield style="margin-top: 30px; width: 30vw" variant="outlined" bind:value={searchBox} label="Search" input$aria-controls="helper-text-outlined-a" input$aria-describedby="helper-text-outlined-a" />
    <div style="margin-top:35px; display: flex; width: 30vw; flex-direction: column">
      <Button style="width: 100px" on:click={toggle}>Advanced</Button>
      {#if advancedSearch}
        <ControlPanel style='margin-top: 20px'/>
      {/if}
    </div>
  </div>
</div>
