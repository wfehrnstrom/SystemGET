<script>
  import Tab, {Label} from '@smui/tab';
  import TabBar from '@smui/tab-bar';
  import Card, {Content, PrimaryAction, Media, MediaContent, Actions, ActionButtons, ActionIcons} from '@smui/card'
  import IconButton, {Icon} from '@smui/icon-button';
  import DataTable, {Head, Body, Row, Cell} from '@smui/data-table';

  import {numItemsInCart} from '../stores.js';

  export let result = undefined;
  export let total;
  export let currency = 'SEK';

  let itemsInCart = 0;

  let active = 'Cost';

  let mapping = {
    'Poor': '#eb4034',
    'Fair': '#c4c72a',
    'Better': '#10979e',
    'Best': '#0d850d'
  };

  let effectiveness;
  if (result.costPerAlcMl > 2.82){
    effectiveness = 'Poor';
  }
  else if (result.costPerAlcMl > 1.447){
    effectiveness = 'Fair';
  }
  else if (result.costPerAlcMl > 0.966){
    effectiveness = 'Better';
  }
  else{
    effectiveness = 'Best';
  }

  function updateNumItems(){
    numItemsInCart.update(n => n + 1);
  }
</script>

<style>

  .title {
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
  }

  .rank {
    color: #828282;
  }

  .result-wrapper {
    width: 50vw;
  }

  .cost-effectiveness-wrapper > * {
    font-size: 1.8em;
  }

  @media only screen and (max-width: 800px) {
    .result-wrapper {
      width: 90vw;
    }

    .cost-effectiveness-wrapper > * {
      font-size: 1.2em;
    }

    .name {
      font-size: 1.5em;
    }
  }
</style>

{#if result != undefined}
  <div class ='result-wrapper'>
    <Card>
      <Content>
        <div class='title' style='height: 65px'>
          <h3 class='rank' style='width: 65px'>#{result.rank}</h3>
          <h1 style='margin-right: 20px' class = 'name'>{result.name}</h1>
          {#if result.group == 'beer'}
            <img style='width: 30px;' src='beer.png' alt='beer'/>
          {:else if result.group == 'wine'}
            <img style='width: 30px;' src='wine.png' alt='wine'/>
          {:else if result.group == 'spirits'}
            <img style='width: 30px;' src='spirits.png' alt='spirits'/>
          {:else if result.group == 'cider'}
            <img style='width: 30px;' src='cider.png' alt='cider'/>
          {/if}

        </div>
        <TabBar style='margin-bottom: 20px; margin-top: 10px' tabs={['Cost', 'Properties']} let:tab bind:active>
          <Tab {tab}>
            <Label>{tab}</Label>
          </Tab>
        </TabBar>

        {#if active=='Cost'}
          <div class='cost-effectiveness-wrapper' style='display: flex; align-items: baseline; margin-top: 10px'>
            <h1 class='cost-effectiveness' style="color: {mapping[effectiveness]}; margin: 0; margin-right: 10px">{effectiveness}</h1>
            <h1 class='cost-effectiveness' style='font-weight: 300'>cost-effectiveness</h1>
          </div>

          <DataTable style='width: 100%' table$aria-label='costs'>
            <Head>
              <Row>
                <Cell>Price ({currency})</Cell>
                <Cell>Price ({currency})/mL alcohol</Cell>
                <Cell>Cost-Effectiveness Rank</Cell>
              </Row>
            </Head>
            <Body>
              <Row>
                <Cell>{result.price}</Cell>
                <Cell>{result.costPerAlcMl}</Cell>
                <Cell><strong>{result.rank}</strong> out of <strong>{total}</strong></Cell>
              </Row>
            </Body>
          </DataTable>
        {/if}

        {#if active=='Properties'}
          <DataTable style='width: 100%' class='data-table' table$aria-label='beverage properties'>
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
      </Content>
      <Actions>
        <IconButton class="material-icons" title='Add to Cart'>
          <div class='add' on:click={updateNumItems}>
            <img alt='Add to Cart' src='/add.svg'/>
          </div>
        </IconButton>
      </Actions>
    </Card>
  </div>
{/if}
