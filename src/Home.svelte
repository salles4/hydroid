<script>
  export let params;
</script>
<section>
  <div>
    View Tournament Bracket
  </div>
  <div class="container">
  <a href="./#/mlbb">Mobile Legends</a>
  <a href="./#/cod">Call of Duty</a>
</div>
</section>
<style>
  section{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
    gap: 0.8rem;
  }
  .container{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
  a{
    text-decoration: none;
    color: black;
    background-color: white;
    padding: 1rem;
    border-radius: 4px;
    font-size: 1.4rem;
    font-weight: 600;
  }
  a:hover{
    text-decoration: underline;
    background-color: rgb(231, 231, 231);
    transform: scale(105%);
  }
</style>