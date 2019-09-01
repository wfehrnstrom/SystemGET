<script>
  import Textfield from '@smui/textfield';
  import Tab, {Icon, Label} from '@smui/tab';
  import TabBar from '@smui/tab-bar';
  import Range from './Range.svelte'
  let active='Cost'
  let minCost = '';
  let maxCost = '';
  export let style;
</script>

<div>
  <TabBar style={style} tabs={['Cost', 'Properties']} let:tab bind:active>
    <Tab {tab}>
      <Label>{tab}</Label>
    </Tab>
  </TabBar>
  {#if active=='Cost'}
    <Range value='Cost' header='Total Cost'/>
    <Range value='Cost/ml'/>
    <Range value='Cost Rank'/>
  {/if}
  {#if active=='Properties'}
    <Range value='ABV'/>
  {/if}
</div>
