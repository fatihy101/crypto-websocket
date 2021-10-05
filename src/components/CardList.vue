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
            { first: 'btc', second: 'usdt' },
            { first: 'eth', second: 'usdt' },
            { first: 'ada', second: 'usdt' },
            { first: 'cake', second: 'usdt' },
            { first: 'xrp', second: 'usdt' }
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
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 13px;
    justify-content: center;

}


</style>