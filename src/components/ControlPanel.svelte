<script>
  import Textfield from '@smui/textfield';
  import Tab, {Icon, Label} from '@smui/tab';
  import TabBar from '@smui/tab-bar';

  import {costConstraints, propertyConstraints} from '../stores.js'

  import Range from './Range.svelte'

  export let style;

  let active='Cost'
  let costs;
  let properties;

  const unsubscribeCosts = costConstraints.subscribe(value => {
    costs = value;
  });

  const unsubscribeProperties = propertyConstraints.subscribe(value => {
    properties = value;
  });

  function updateTotalCostConstraint (e) {
    costConstraints.update((c) => {
      c.total = [e.detail.min, e.detail.max];
      return c;
    });
  }

  function updateCostMlConstraint(e){
    costConstraints.update((c) => {
      console.log(c);
      c.perMl = [e.detail.min, e.detail.max];
      return c;
    });
  }

  function updateCostRankConstraint(e){
    costConstraints.update((c) => {
      console.log(c);
      c.rank = [e.detail.min, e.detail.max];
      return c;
    });
  }

  function updateABVConstraint(e){
    propertyConstraints.update((c) => {
      c.abv = [e.detail.min, e.detail.max];
    });
  }

  unsubscribeCosts();
  unsubscribeProperties();

</script>

<div>
  <TabBar style={style} tabs={['Cost', 'Properties']} let:tab bind:active>
    <Tab {tab}>
      <Label>{tab}</Label>
    </Tab>
  </TabBar>
  {#if active=='Cost'}
    <Range min={0} value='Cost' header='Total Cost (SEK) between'
      on:constraintChange={updateTotalCostConstraint}
      hydrateWith={costs.total} />
    <Range min={0} value='Cost (SEK)/ml Between'
      on:constraintChange={updateCostMlConstraint}
      hydrateWith={costs.perMl} />
    <Range min={0} value='Cost Rank (Most alcohol per SEK) between'
      on:constraintChange={updateCostRankConstraint}
      hydrateWith={costs.rank} />
  {/if}
  {#if active=='Properties'}
    <Range header='Percentage Alcohol between'
      value='Percentage'
      on:constraintChange={updateABVConstraint}
      hydrateWith={properties.abv}/>
  {/if}
</div>
