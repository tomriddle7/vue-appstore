<template>
<div>
  <form class="SearchForm">
<div>
  <div class="SearchDiv">
    <span class="SearchLens">
      <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
        </path>
      </svg>
    </span>
  </div>
  <div>
    <input class="SearchInput"
      v-model.trim="keyword"
      placeholder="게임, 앱, 스토리 등"
      v-on:keyup.enter.stop="Search"
    />
  </div>
</div>
</form>

<h2 v-if="searchResult">검색결과</h2>
    
    <div v-if="searchResult && searchResult.results">
      <div class="OuterContainer" v-for="(val, key) in searchResult.results" v-bind:key="key">
        <router-link v-bind:to="'/app/'+val.trackId">
          <div class="InnerContainer">
            <div class="Scope20">
              <a :title="val.name + ' details'">
                <img class="icon" :src="val.artworkUrl100" />
              </a>
            </div>
            <div class="Scope60">
              <span class="Name">{{ val.trackName }}</span>
                <span class="Genre" v-if="val.primaryGenreName">
                  {{ val.primaryGenreName }}
                </span>
            </div>
            <div class="Scope20">
              <button v-on:click=iTune(val.url)>
                GET
              </button>
            </div>
          </div>
        </router-link>
      </div>
    </div>
</div>
</template>
<script>
export default {
  name : "application",
  methods: {
    Search() {
      this.$axios.get(`https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=${this.keyword}&country=kr&entity=software`)
      .then((response) => {
        this.searchResult = response.data;
        console.log(this.searchResult);
      });
    },
    iTune(url) {
      window.open(url, '_blank');
    }
  },
  data() {
    return {
      keyword: '',
      searchResult: null
    }
  }
}
</script>
<style scoped>
  .SearchForm {
    border-radius: 16px;
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    background-color: #2a2a2d;
    padding: 10px;
  }

  .SearchDiv {
    width: 34px;
    display: flex;
    flex-direction: row;
  }

  .SearchLens {
    color: #808084;
    fill: currentColor;
    line-height: 24px;
    position: relative;
    height: 34px;
    width: 34px;
  }

  .SearchInput {
    all: unset;
    font-size: 28px;
    width: 100%;
    color: #808084;
  }

  

  .OuterContainer {
    width: 100%;
    background-color: #000000;
    padding: 0px;
  }

  .OuterContainer::after {
    content: '';
	height: 0;
	border-bottom: 1px #808084 solid;
	left: 24px;
	right: 24px;
	position: absolute;
  }

  .OuterContainer:last-child::after {
    border-bottom: 0px #808084 solid;
  }

.InnerContainer {
    cursor: pointer;
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: #000000;
    padding: 6px 0px;
  }

.Scope60 {
    width:60%;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0px 10px;
  }

.Scope20 {
    width:20%;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

.icon {
    width: 100%;
    height: auto;
    border-radius: 22.37%;
  }

.button, button {
    border-radius: 25px;
    background: #1c1c1e;
    padding: 10px;
    color: #0b84fe;
    text-align: center;
    border: 0;
    box-shadow: none;
}

.Name {
    font-size:14pt;
    color: #ffffff;
  }

.Genre {
    font-size:12pt;
    color: #808084;
  }
</style>
