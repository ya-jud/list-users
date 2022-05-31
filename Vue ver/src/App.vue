<template>
  <div class="content">
    <div class="container">
      <GetUsersButton />
      <UsersList />
    </div>
  </div>
</template>

<script setup lang="ts">
import GetUsersButton from './components/getUsersButton.vue';
import UsersList from './components/usersList.vue';
</script>

<style lang="sass" scoped>
.content
  background: #f2f2f2
  width: 100%
  height: 100vh
  display: flex
  justify-content: center

.container
  min-width: 1000px
  max-width: 1300px
  width: 100%
  height: auto
  display: flex
  align-items: center
  flex-direction: column
</style>