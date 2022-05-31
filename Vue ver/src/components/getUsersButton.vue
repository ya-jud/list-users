<template>
  <div
    @click="getUsers"
    class="getUsersButton"
    :class="{ disabled: !store.state.isClear }"
  >
    get Users
  </div>
</template>

<script setup lang="ts">
import store from '../store';

let styleState = store.state.isClear

const getUsers = async () => {
  if(store.state.isClear)
    await store.dispatch('getUsersAction');
  else return null
};
defineExpose({
  styleState
})
</script>

<style lang="sass" scoped>
  %center-alignment
    display: flex
    align-items: center
    justify-content: center

  .getUsersButton
    @extend %center-alignment
    background: #48D1CC
    width: 200px
    height: 50px
    margin: 40px 20px
    text-transform: uppercase
    font-family: Arial, Helvetica, sans-serif
    font-size: 20px
    font-weight: bold
    color: #FFFAFA
    cursor: pointer
    user-select: none
    transition: all .2s
    &:hover
      box-shadow: 10px 10px 10px #ADD8E6
    &:active
      box-shadow: 2px 2px 5px #778899

  .disabled
    background: #708090
    color: #FFF0F5
    cursor: not-allowed
    &:hover
      box-shadow: none
    &:active
      box-shadow: 0 0 20px #800000
</style>