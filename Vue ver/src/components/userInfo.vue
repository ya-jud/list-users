<template>
  <div class="user-card">
    <div class="id">ID: {{ user.id }}</div>
    <div class="name">{{ user.name }}</div>
    <div class="email">{{ user.email }}</div>
    <div class="phone">{{ user.phone }}</div>
    <SetLike class="like" :user="postUser" />
  </div>
</template>

<script setup lang="ts">
import SetLike from './setLikeButton.vue';

const props = defineProps({
  user: {
    type: Object,
    default: {}
  }
});
const postUser = {
  id: props.user.id,
  name: props.user.name,
  username: props.user.username,
  email: props.user.email,
  phone: props.user.phone,
  website: props.user.website
}
</script>

<style lang="sass" scoped>
.user-card
  font-family: Arial, Helvetica, sans-serif
  background: #fff
  display: flex
  align-items: center
  justify-content: space-between
  width: 100%
  height: 50px
  margin: 5px 0
  box-shadow: 0 0 5px #000
  .id
    margin-left: 10px
  .name, .email, .phone
    width: 25%
  .like
    margin-right: 10px  
  &:hover
    background: linear-gradient(180deg, rgba(255,255,255) 0%, rgba(150,150,150,.2) 100%)
    
</style>