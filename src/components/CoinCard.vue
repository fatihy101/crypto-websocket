<template>
<div>
  <div v-if="loading"> loading... </div>
  <div class="card" v-else>
      <div class="card__header">
          <img :src="`https://cryptologos.cc/logos/${coinPair.name}-${coinPair.first}-logo.svg?v=014`" alt="coin-symbol" width="20" />
          <p class="card__header-title"> 
              <span class="card__header-title__first"> {{ coinPair.first.toUpperCase() }} </span> 
              <span class="title-slash">/</span> 
              <span class="card__header-title__second"> {{ coinPair.second.toUpperCase() }}  </span> 
          </p>
          <p class="card__header-time">24h</p>
      </div>
      <div class="card__body">
          <h3 class="card__body-price"> {{ price }} </h3>
          <h4 class="card__body-change" :class="priceDifference >= 0 ? 'gain-color' : 'loss-color'"> 
              {{ priceDifference }} 
          </h4>
          <div class="card__body-chart">
              <chartist 
                ratio="ct-minor-second" 
                type="Line"
                :data="chartData"
                :options="chartOpt"
                >
              </chartist>
          </div>
      </div>
      <!-- <div class="card__footer">
          <button>AL-SAT</button>
      </div> -->
  </div>
</div>
</template>

<script>

export default {
    name: 'CoinCard',
    props: {
        coinPair: {
            type: Object,
            required: true
        },
    },
    data: () => ({
        binanceData: null,
        loading: true,
        chartOpt: {
            showPoint: false,
            lineSmooth: true,
             axisX: {
                showGrid: false,
                showLabel: false
            },
              axisY: {
                showGrid: false,
                showLabel: false
            },
        },
        chartData: {
            labels: [],
            series: [[]],
        }
    }),
    computed: {
        getPair: function () {
            return this.coinPair.first +  this.coinPair.second;
        },
        price: function () {
            return parseFloat(this.binanceData.c).toFixed(this.coinPair.decimalFix ? this.coinPair.decimalFix : 2);
        },
        priceDifference: function () {
            return parseFloat(this.binanceData.p).toFixed(this.coinPair.decimalFix ? this.coinPair.decimalFix : 2);
        },
    },
    created() {
        this.getCoinData()
    },
    methods: {
        getCoinData() {
            const socket = new WebSocket(`wss://stream.binance.com:9443/ws/${this.getPair}@ticker`)
            socket.addEventListener('message', (event) => {
                this.binanceData = JSON.parse(event.data)
                if(this.chartData.labels.length > 12) {
                    this.chartData.labels.shift()
                    this.chartData.series[0].shift()
                }

                this.chartData.labels.push(this.binanceData.E.toString())
                this.chartData.series[0].push(this.binanceData.c)
            })
            socket.onerror = function(error) {
                console.log(`[error] ${error.message}`)
            };
        }
    },
    watch: {
        binanceData: function () {
            this.loading = false
        }
    }
}
</script>


<style lang="scss">
@import url('//db.onlinewebfonts.com/c/0d49fc455f4a8951a42daf952412a713?family=Helvetica+Neue');

.gain-color {
    color: #48BA89;
}

.loss-color {
    color: #F2586A;
}
.title-slash {
    font-weight: 100;
    color: #979797;
}
.card {
  max-width: 13.4em;
  height: 100%;
  border-radius: 12px;
  box-shadow:  0 5px 4px #BAEAFF, 0 6px 6px rgba(0,0,0,0.20);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  transition: all 0.3s ease-in-out;
  margin: 0.3em 0.8em; 
  &:hover {
    box-shadow:  0 0px 0px rgba(0,0,0,0.19), 0 3px 2px rgba(0,0,0,0.23);
  }

  &__header {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    &-title {
        margin: 3px 18px 3px 5px;
        font-size: 1rem;
        font-family: 'Helvetica Neue', sans-serif;
        &__first {
            font-weight: 900;
            font-family: helvetica;
        }
        &__second {
            font-weight: 100;
        }
    }
    &-time {
        color: #707070;
        font-size: 12px;
        font-family: 'Helvetica Neue';
    }
  }

  &__body {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;


    &-price {
        margin-bottom: 0px;
        font-size: 18px;
        margin-left: 21px;
    }

    &-change {
        margin-top: 5px;
        font-size: 12px;
        margin-left: 21px;

    }
  }

  &__footer {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        width: 100%;
        height: 32px;
        background-color: #91DBFD;
        display: inline-block;
        color: #284D71;
        font-size: 14px;
        font-weight: bold;
        text-align: center;
        margin: 15px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover {
            background-color: #48BA89;
            color: #fff;
        }
    }
  }
}

.ct-series-a .ct-bar,  .ct-series-a .ct-line, .ct-series-a .ct-point, .ct-series-a .ct-slice-donut {
    stroke: #7ACFF7;
    stroke-width: 3px;
    fill: #BAEAFF;

}
</style>