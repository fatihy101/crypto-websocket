import CoinCard from '@/components/CoinCard.vue'
import { shallowMount } from '@vue/test-utils'

describe('CoinCard.vue', () => {
    describe('Card UI side', () => {
        const wrapper = shallowMount(CoinCard, {
            propsData: {
                coinPair: {
                    first: 'btc',
                    second: 'usdt'
                }
            }, 
        })

        it('should render the card class', () => {
            expect(wrapper.find('.card').exists()).toBeTruthy()
        })

        it('should render the card__header', () => {
            expect(wrapper.find('.card__header').exists()).toBeTruthy()
        })

        it('should contain BTCUSDT text correctly', () => {
            expect(wrapper.find('.card__header-title').text()).toBe('BTCUSDT')
        })
    })
})
