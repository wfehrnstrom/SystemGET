<script>
  import List, {Item, Separator} from '@smui/list';
  import Result from './Result.svelte'
  import PageSwitch from './PageSwitch.svelte'

  function changeDisplayedResults(){
    displayedResults = results.slice(currentItemIndex, currentItemIndex+numItemsPerPage);
    let rangeStart = currentItemIndex + 1;
    let rangeEnd = rangeStart + numItemsPerPage;
    if (rangeEnd > total) {
      rangeEnd = total;
    }
    resultRange = [rangeStart, rangeEnd];
  }

  function nextPage(){
    currentItemIndex += numItemsPerPage;
    if (currentItemIndex > total){
      currentItemIndex = total-numItemsPerPage;
    }
    changeDisplayedResults();
  }

  function lastPage() {
    currentItemIndex -= numItemsPerPage;
    if (currentItemIndex < 0){
      currentItemIndex = 0;
    }
    changeDisplayedResults();
  }

  function toggleFocus () {
    if (selectedItem === this) {
      selectedItem = undefined;
    } else {
      selectedItem = this;
    }
  }

  export let results = [];
  let displayedResults = [];
  let resultRange = [];
  export let selectedItem = undefined;
  export let total;
  let currentItemIndex = 0;
  let numItemsPerPage = 100;

  changeDisplayedResults();

</script>

<style>
  .rank {
    color: #828282;
  }

  .results {
    width: 50vw;
  }

  @media only screen and (max-width: 800px) {
    .results {
      width: 90vw;
    }
  }
</style>

<div class = 'results'>
  <List singleSelection>
    {#each displayedResults as result}
      <Item on:SMUI:action={toggleFocus.bind(result)}>
        <div style='display: flex; justify-content: space-between; align-items: center; width: 100%'>
          <p>{result.name}</p>
          <p class='rank'>{result.rank}</p>
        </div>
      </Item>
      <Separator/>
      {#if selectedItem && selectedItem.name == result.name}
        <Result {result} {total}/>
      {/if}
    {/each}
  </List>
  <div style='width: 100%; display: flex; flex-direction: row-reverse'>
    <PageSwitch on:lastPage={lastPage} on:nextPage={nextPage} range={resultRange} {total}/>
  </div>
</div>
