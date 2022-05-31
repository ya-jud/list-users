<template>
  <div class="button" @click="setLike">like</div>
</template>

<script setup lang="ts">
const props = defineProps({
  user: {
    type: Object,
    default: {}
  }
});

const setLike = () => {
  console.log(props.user);
  postUser(props.user)
};
// Тут не понял задание с отправкой запроса.
// "Нажатие на кнопку Like вызывает запрос на текущую страницу"
// Нужно вызвать на текущую страницу(что мне показалось странным)
// или же запрос должен был открыть сайт, указанный в поле объекта user.website?
// здесь я так и не разобрался.
// Я передал в этот компонент данные, которые можно обработать, поэтому
// если суть задания состояла в том, что нужно отправить запрос с телом,
// то вот сам метод:

const postUser = async (user) => {
  const response = await fetch(user.website ,{
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(user)
  });

  const result = await response.json();
  console.log(result);
}

// Запрос будет выкидывать ошибку в консоль браузера.
// И этот запрос должен быть в сторе, но для примера написал здесь

</script>

<style lang="sass" scoped>
.button
  background: #48D1CC
  box-shadow: 0 0 3px #2F4F4F 
  padding: 2px 5px
  cursor: pointer
  user-select: none
  border-radius: 5px
  color: #FFFAFA
  &:hover
    box-shadow: 0 0 4px #2F4F4F 
  &:active
    background: #48D100
</style>