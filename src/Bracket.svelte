<script>
  import { onValue, ref } from "firebase/database";
  import database from "./Firebase";
  import { updateTime } from "./store";
  let mlData;

  async function getData() {
    const pathRef = ref(database, "mobileLegends/");
    onValue(pathRef, (snapshot) => {
      mlData = snapshot.val();
      updateTime.set(mlData["updated"]);
    });
  }
  getData();
</script>

{#if mlData}
  <div class="main">
    <h3>Mobile Legends Tournament Bracket</h3>
    <small>Last Updated: {mlData["updated"]}</small>
  </div>
  <div class="theme theme-dark">
    <div class="bracket disable-image">
      {#if mlData["round0"]}
      <div class="column">
        {#each mlData["round0"] as match}
          <div
            class="match {match.win == 0
              ? match.team1 == '' || match.team2 == ''
                ? 'invis'
                : ''
              : match.win == 1
                ? 'winner-top'
                : 'winner-bottom'}"
          >
            <div class="match-top team">
              <span class="name">{match.team1}</span>
              <!-- <span class="score">2</span> -->
            </div>
            <div class="match-bottom team">
              <span class="name">{match.team2}</span>
              <!-- <span class="score">1</span> -->
            </div>
            <div class="match-lines">
              <div class="line one"></div>
              <div class="line two"></div>
            </div>
            <div class="match-lines alt">
              <div class="line one"></div>
            </div>
          </div>
        {/each}
        </div>
      {/if}
      <!-- Round -->
      <div class="column one">
        {#each mlData["round1"] as match}
          <div
            class="match {match.win == 0
              ? match.team1 != '' || match.team2 != ''
                ? 'winner-top winner-bottom'
                : ''
              : match.win == 1
                ? 'winner-top'
                : 'winner-bottom'}"
          >
            <div class="match-top team">
              <span class="name">{match.team1}</span>
              <!-- <span class="score">2</span> -->
            </div>
            <div class="match-bottom team">
              <span class="name">{match.team2}</span>
              <!-- <span class="score">1</span> -->
            </div>
            <div class="match-lines">
              <div class="line one"></div>
              <div class="line two"></div>
            </div>
            <div class="match-lines alt">
              <div class="line one"></div>
            </div>
          </div>
        {/each}
      </div>
      <div class="column two">
        {#each mlData["round2"] as match}
          <div
            class="match {match.win == 0
              ? match.team1 != '' || match.team2 != ''
                ? 'winner-top winner-bottom'
                : ''
              : match.win == 1
                ? 'winner-top'
                : 'winner-bottom'}"
          >
            <div class="match-top team">
              <span class="name">{match.team1}</span>
              <!-- <span class="score">1</span> -->
            </div>
            <div class="match-bottom team">
              <span class="name">{match.team2}</span>
              <!-- <span class="score">2</span> -->
            </div>
            <div class="match-lines">
              <div class="line one"></div>
              <div class="line two"></div>
            </div>
            <div class="match-lines alt">
              <div class="line one"></div>
            </div>
          </div>
        {/each}
      </div>
      <div class="column three">
        {#each mlData["round3"] as match}
          <div
            class="match {match.win == 0
              ? match.team1 != '' || match.team2 != ''
                ? 'winner-top winner-bottom'
                : ''
              : match.win == 1
                ? 'winner-top'
                : 'winner-bottom'}"
          >
            <div class="match-top team">
              <span class="name">{match.team1}</span>
              <!-- <span class="score">1</span> -->
            </div>
            <div class="match-bottom team">
              <span class="name">{match.team2}</span>
              <!-- <span class="score">2</span> -->
            </div>
            <div class="match-lines">
              <div class="line one"></div>
              <div class="line two"></div>
            </div>
            <div class="match-lines alt">
              <div class="line one"></div>
            </div>
          </div>
        {/each}
      </div>
      <div class="column four">
        {#each mlData["round4"] as match}
          <div class="match {match.win == 0
              ? match.team1 != '' || match.team2 != ''
                ? 'winner-top winner-bottom'
                : ''
              : match.win == 1
                ? 'winner-top'
                : 'winner-bottom'}">
            <div class="match-top team">
              <span class="name">{match.team1}</span>
              <!-- <span class="score">1</span> -->
            </div>
            <div class="match-bottom team">
              <span class="name">{match.team2}</span>
              <!-- <span class="score">2</span> -->
            </div>
            <div class="match-lines">
              <div class="line one"></div>
              <div class="line two"></div>
            </div>
            <div class="match-lines alt">
              <div class="line one"></div>
            </div>
          </div>
        {/each}
      </div>
      {#if mlData["round5"]}
      <div class="column five">
        {#each mlData["round5"] as match}
          <div class="match {match.win == 0
              ? 'winner-top winner-bottom'
              : match.win == 1
                ? 'winner-top'
                : 'winner-bottom'}">
            <div class="match-top team">
              <span class="name">{match.team1}</span>
              <!-- <span class="score">1</span> -->
            </div>
            <div class="match-bottom team">
              <span class="name">{match.team2}</span>
              <!-- <span class="score">2</span> -->
            </div>
            <div class="match-lines">
              <div class="line one"></div>
              <div class="line two"></div>
            </div>
            <div class="match-lines alt">
              <div class="line one"></div>
            </div>
          </div>
        {/each}
      </div>
      {/if}
    </div>
  </div>
{/if}

<style>
  .theme {
    height: fit-content;
    width: 100%;
    position: absolute;
    overflow-x: auto;
    overflow-y: hidden;
  }
  .bracket {
    padding: 0 40px;
    padding-bottom: 40px;
    margin: 5px auto;
    width: fit-content;
  }
  .bracket {
    display: flex;
    flex-direction: row;
    position: relative;
  }
  .column {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    justify-content: space-around;
    align-content: center;
  }
  .match {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 240px;
    max-width: 240px;
    height: 62px;
    margin: 12px 24px 12px 0;
  }
  .match .match-top {
    border-radius: 2px 2px 0 0;
  }
  .match .match-bottom {
    border-radius: 0 0 2px 2px;
  }
  .match .team {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    border: 1px solid black;
    position: relative;
  }
  .match .team span {
    padding-left: 8px;
  }
  .match .team span:last-child {
    padding-right: 8px;
  }
  .match .team .score {
    margin-left: auto;
  }
  .match .team:first-child {
    margin-bottom: -1px;
  }
  .match-lines {
    display: block;
    position: absolute;
    top: 50%;
    bottom: 0;
    margin-top: 0px;
    right: -1px;
  }
  .match-lines .line {
    background: red;
    position: absolute;
  }
  .match-lines .line.one {
    height: 1px;
    width: 12px;
  }
  .match-lines .line.two {
    height: 44px;
    width: 1px;
    left: 11px;
  }
  .match-lines.alt {
    left: -12px;
  }
  .match:nth-child(even) .match-lines .line.two {
    transform: translate(0, -100%);
  }
  .column:first-child .match-lines.alt {
    display: none;
  }
  .column:last-child .match-lines {
    display: none;
  }
  .column:last-child .match-lines.alt {
    display: block;
  }
  .column:nth-child(2) .match-lines .line.two {
    height: 88px;
  }
  .column:nth-child(3) .match-lines .line.two {
    height: 175px;
  }
  .column:nth-child(4) .match-lines .line.two {
    height: 400px;
  }
  .column:nth-child(5) .match-lines .line.two {
    height: 700px;
  }
  .column:nth-child(6) .match-lines .line.two {
    height: 500px;
  }
  .disable-image .image,
  .disable-seed .seed,
  .disable-name .name,
  .disable-score .score {
    display: none !important;
  }
  .disable-borders {
    border-width: 0px !important;
  }
  .disable-borders .team {
    border-width: 0px !important;
  }
  .disable-seperator .match-top {
    border-bottom: 0px !important;
  }
  .disable-seperator .match-bottom {
    border-top: 0px !important;
  }
  .disable-seperator .team:first-child {
    margin-bottom: 0px;
  }
  /* Dark Theme */
  .theme-dark {
    /* background: transparent; */
    /* background: #0e1217; */
    border-color: #040607;
  }
  .theme-dark .match-lines .line {
    background: #36404e;
  }
  .theme-dark .team {
    background: #182026;
    border-color: #232c36;
    color: #6b798c;
  }
  .theme-dark .winner-top .match-bottom,
  .theme-dark .winner-bottom .match-top {
    background-image: url(https://static.vecteezy.com/system/resources/thumbnails/018/972/639/small/abstract-broken-glass-texture-with-particles-png.png);
  }
  .theme-dark .winner-top .match-top,
  .theme-dark .winner-bottom .match-bottom {
    background: #232c36;
    color: #e3e8ef;
    border-color: #36404e;
    z-index: 1;
  }
  .theme-dark .winner-top .match-top .score,
  .theme-dark .winner-bottom .match-bottom .score {
    color: #03d9ce;
  }
  .theme-dark .match .seed {
    font-size: 12px;
    min-width: 10px;
  }
  .theme-dark .match .score {
    font-size: 14px;
  }
  .invis{
    visibility: hidden !important;;
  }
</style>
