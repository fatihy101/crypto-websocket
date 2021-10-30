<template>
    <div class="wrapper">
        <div class="card-container">
            <CoinCard v-for="pair in pairs" :key="pair.first" :coinPair="pair" />
        </div>
    </div>
</template>

<script>
import CoinCard from './CoinCard.vue'
export default {
    components: {
        CoinCard
    },
    data: () => ({
        pairs: [
            { name: 'bitcoin', first: 'btc', second: 'usdt' },
            { name: 'shiba-inu', first: 'shib', second: 'usdt', decimalFix: 8 },
            {name: 'ethereum', first: 'eth', second: 'usdt'},
            {name: 'xrp', first: 'xrp', second: 'usdt'},
            {name: 'litecoin', first: 'ltc', second: 'usdt'},
            {name: 'bitcoin-cash', first: 'bch', second: 'usdt'},
            {name: 'cardano', first: 'ada', second: 'usdt'},
            {name: 'stellar', first: 'xlm', second: 'usdt'}
        ]
    })
}
</script>

<style lang="scss">
.wrapper {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 768px) {
  .wrapper {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .wrapper {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .wrapper {
    width: 1170px;
  }
}
.card-container {
    display: flex;
    // grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    // grid-gap: 13px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

}


</style>