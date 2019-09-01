<script>
  import Tab, {Icon, Label} from '@smui/tab';
  import TabBar from '@smui/tab-bar';
  import DataTable, {Head, Body, Row, Cell} from '@smui/data-table';

  export let result = undefined;
  export let total;
  export let currency = 'SEK';

  let active = 'Cost';

  let mapping = {
    'Poor': '#eb4034',
    'Fair': '#c4c72a',
    'Better': '#10979e',
    'Best': '#0d850d'
  };
</script>

<style>
  .result-wrapper {
    display: flex;
    flex-direction: column;
  }

  .title {
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
  }

  .rank {
    color: #828282;
  }

  .stat-heading {
    font-weight: 600;
    margin-bottom: 5px;
  }

  h2 {
    font-weight: 400;
  }
</style>

{#if result != undefined}
  <div class='result-wrapper' style='width: 50vw'>
    <a class='back-to-search' style='position: relative; bottom: 5vh;' href='search'>
      <img alt='back to search' src='/back_to_search.svg'/>
    </a>

    <div class='title' style='height: 65px'>
      <h3 class='rank' style='width: 65px'>#{result.rank}</h3><h1 style='margin-right: 10px'class = 'name'>{result.name}</h1>
    </div>
    <TabBar style='margin-bottom: 20px; margin-top: 10px' tabs={['Cost', 'Properties']} let:tab bind:active>
      <Tab {tab}>
        <Label>{tab}</Label>
      </Tab>
    </TabBar>

    {#if active=='Cost'}
      <div style='display: flex; align-items: baseline; margin-top: 10px'>
        <h1 class='cost-effectiveness' style="color: {mapping['Fair']}; margin: 0; margin-right: 10px">Fair</h1>
        <h1 style='font-weight: 300'>cost-effectiveness</h1>
      </div>
      <h2 style='margin-top: 10px; font-weight: 300; font-size: 1.4em'>(#{result.rank} most cost-effective out of {total} items)</h2>
      <!-- <div style='display: flex; align-items: baseline; height: 100px'>
        <div style='display: flex; flex-direction: column; margin-right: 50px'>
          <h2 class='stat-heading'>Price</h2>
          <h2 style='margin-top: 5px'>{result.price} {currency}</h2>
        </div>
        <div style='display: flex; flex-direction: column'>
          <h2 class='stat-heading'>Price/mL alcohol</h2>
          <h2 style='margin-top: 5px'>{result.costPerAlcMl} {currency}/mL</h2>
        </div>
      </div> -->
      <DataTable table$aria-label='costs' style='margin-top: 10px'>
        <Head>
          <Row>
            <Cell>Price</Cell>
            <Cell>Price/mL alcohol</Cell>
          </Row>
        </Head>
        <Body>
          <Row>
            <Cell>{result.price}</Cell>
            <Cell>{result.costPerAlcMl}</Cell>
          </Row>
        </Body>
      </DataTable>
    {/if}

    {#if active=='Properties'}
      <DataTable table$aria-label='beverage properties'>
        <Head>
          <Row>
            <Cell>Volume (mL)</Cell>
            <Cell>Alcohol by Volume (%)</Cell>
            <Cell>Equivalent to</Cell>
            <Cell>Organic?</Cell>
          </Row>
        </Head>
        <Body>
          <Row>
            <Cell>{result.volume}</Cell>
            <Cell>{result.abv*100}</Cell>
            <Cell>{Number.parseFloat((result.volume*result.abv)/18).toPrecision(2)} shots</Cell>
            <Cell>{result.organic ? 'Yes' : 'No'}</Cell>
          </Row>
        </Body>
      </DataTable>
    {/if}

  </div>
{/if}
