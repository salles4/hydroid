<script>
  import Bracket from "./Bracket.svelte";
  import CoDBracket from "./CoDBracket.svelte";
  import Home from "./Home.svelte";

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
</main>
{#if window.location.href.endsWith("mlbb")}  
<Bracket />
{:else if window.location.href.endsWith("cod")}
<CoDBracket />
{:else}
<Home />
{/if}
