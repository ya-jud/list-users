<template>
  <div class="title">a list of users</div>
  <div class="userList">
    <div v-for="(user, index) in store.state.users" :key="index">
      <UserInfo :user="user"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserInfo from './userInfo.vue';
import store from '../store';
</script>

<style lang="sass" scoped>
.userList
  width: 80%
  height: 100vh
  overflow: auto
  display: flex
  flex-direction: column	
.title
  text-align: center
  text-transform: uppercase
  font-family: Arial, Helvetica, sans-serif
  font-size: 18px
  user-select: none
  width: 80%
  margin-bottom: 10px
  border-bottom: 1px solid black
</style>