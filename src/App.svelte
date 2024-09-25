<script>
  import Bracket from "./Bracket.svelte";

</script>
<main>
  <div class="title">
    <img src="hydroid.png" alt="" height="100">
    <div>
      <h1>NU Hydroid Olympians</h1>
      <div>Orion's Hunt</div>
    </div>
    <img src="nu_logo.png" alt="" height="78" style="padding: 12px;">
  </div>
  <div>
    <h3>Mobile Legends Tournament Bracket</h3>
    <small>Last Updated: 11:40</small>
  </div>
</main>
<Bracket />

<style>
  main{
    color: white;
    text-align: center;
  }
  .title{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    margin: 1rem 0;
  }
  h1, h3{
    margin: 0;
    margin-bottom: 6px;
  }
</style>