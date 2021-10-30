<template>
    <div class="social-button shadowed" @mouseenter="tooltipShow = true"  @mouseleave="tooltipShow = false">
        <span class="social-button__tooltip" :class="{'show': tooltipShow}">
            {{ tooltip }}
        </span>
        <a :href="url" target="_blank">
            <img :src="icon" alt="icon">
        </a>
    </div>
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        tooltip: {
            type: String,
            required: true
        }
    },
    data: () => ({tooltipShow: false })
}
</script>

<style lang="scss">
.social-button {
    position: relative;
    display: inline-block;
    margin: 0 10px;
    cursor: pointer;
    border-radius: 50%;
    max-width: 36px;
    max-height: 36px;
    background-color: #fff;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease-in-out;
    position: fixed;
    bottom: 3em;
    right: 1.5em;

    &__tooltip {
        position: absolute;
        top: -43px;
        left: 40%;
        width: 80px;
        transform: translateX(-60%);
        background-color: #BAEAFF86;
        padding: 5px 10px;
        border-radius: 3px;
        font-size: 12px;
        font-weight: bold;
        color: rgba(85, 85, 85, 0.6);
        transition: all 0.2s ease-in-out;
        visibility: hidden;
        pointer-events: none;

        &.show {
            visibility: visible;
            pointer-events: auto;
        }
    }
}
</style>