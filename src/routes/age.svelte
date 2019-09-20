<script>
  import * as sapper from '../node_modules/@sapper/app';
  import Button from '@smui/Button'
</script>

<style>
  @media only screen and (max-width: 800px) {
    .button-container {
      flex-direction: column;
      height: 120px;
    }
  }

  @media only screen and (min-width: 801px) {
    .button-container {
      flex-direction: row;
      margin-right: 20px;
      width: 400px;
    }
  }
</style>

<div style='width: 100vw; height: 500px;
  display: flex; align-items: center; flex-direction: column'>
  <div style='width: 80vw; display: flex; align-items: center; flex-direction: column; margin-bottom: 30px;'>
    <p>By navigating to this site, you confirm that you are 20 years of age or older.</p>
    <p>Genom att navigera till den här webbplatsen bekräftar du att du är 20 år eller äldre.</p>
  </div>
  <div class = 'button-container' style='display: flex; justify-content: space-between; align-items: center;'>
    <Button on:click={() => sapper.goto('./results')} variant='raised' style='height: 50px;'>I am 20 or older</Button>
    <Button on:click={() => sapper.goto('./denial')} variant='raised' style='height: 50px'>I am younger than 20</Button>
  </div>
</div>
