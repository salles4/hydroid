<script>
  const team1 = "top",
    team2 = "bottom";
  // Round one
  const round1 = [
    { 
      team1: "Luxe", 
      team2: "BLDY", 
      win: team1 
    },
    {
      team1: "DAF - David and Friends",
      team2: "4K",
      win: team1,
    },
    {
      team1: "Blandy's",
      team2: "TEAM SOLID ARKI (TS-ARC)",
      win: team1,
    },
    {
      team1: "Alaskwatro",
      team2: "Team Alakdan",
      win: team1,
    },
    {
      team1: "BINI NALOR",
      team2: "TeamBa",
      win: team1,
    },
    {
      team1: "VVMAX",
      team2: "slayable ka sister",
      win: team1,
    },
    {
      team1: "",
      team2: "",
      win: team1,
    },
    {
      team1: "",
      team2: "",
      win: team1,
    },
  ];
  const round2 = []
  for (let i = 0; i < round1.length / 2; i++) {
    round2.push({team1: "", team2: "", win:null});
  }
  const round3 = []
  for (let i = 0; i < round2.length / 2; i++) {
    round3.push({team1: "", team2: "", win:null});
  }
  
</script>

<div class="theme theme-dark">
  <div class="bracket disable-image">
    <!-- Round -->
    <div class="column one">
      {#each round1 as match}
        <div class="match winner-{match.win} {!match.win ? "winner-top winner-bottom" : ""}">
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
      {#each round2 as match}
        <div class="match winner-{match.win} {!match.win ? "" : ""}">
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
      {#each round3 as match}
        <div class="match winner">
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
  </div>
</div>

<style>
  .theme {
    height: 100%;
    width: 100%;
    position: absolute;
  }
  .bracket {
    padding: 40px;
    margin: 5px;
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
    height: 262px;
  }
  .column:nth-child(5) .match-lines .line.two {
    height: 349px;
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
    background: #0e1217;
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
</style>
