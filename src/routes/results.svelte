<script>
  import ResultList from '../components/ResultList.svelte'

  let results = [];
  let selected = undefined;

  let req = new XMLHttpRequest();
  req.open("GET", "http://ec2-13-48-3-128.eu-north-1.compute.amazonaws.com/items");
  req.send();

  req.onload = function () {
    let result = req.response;
    if (req.status != 200) {

    }
    else {
      results = JSON.parse(result).items;
    }
    console.log(results.length);
  }
</script>

<div style='width: 100vw; display: flex; justify-content: center'>
  {#if results.length > 0}
    <ResultList {results} total={results.length}/>
  {:else}
    <div style = 'display: flex; justify-content: start; align-items: center'>
      <h2 style='font-weight: 300'>No results found. <strong>:(</strong></h2>
    </div>
  {/if}
</div>
