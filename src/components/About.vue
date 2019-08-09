<template>
<section>

<h3>Техническое задание</h3>
<br>
Разработать форму обратной связи, включающую в себя следующие поля: имя, телефон, чекбокс "Согласен на обработку персональных данных".
<br><br>
Поле телефон должно быть непустым, иметь маску для ввода в виде +7 (000) 000-00-00
<br><br>
Поле имя может быть пустым
<br><br>
Чекбокс в состоянии accepted по-умолчанию, если значение not-accepted, форма невалидна
<br><br>
Кнопка сабмита активна только при валидных полях формы
<br><br>
Форма должна корректно отображаться на мобильных устройствах
<br>
<br> 

Можно использовать любой готовый компонентый набор, любой модуль для валидации
<br>
За основу проекта взять nuxt-starter
<br>
https://nuxtjs.org/guide/installation


<hr>

В ходе реализации используется пакет  vue-the-mask
vue-the-mask


<hr>

http://psekups.ru/business/resume/__SergeMikhailovVUE_RUS.pdf  
<br>
http://eco.psekups.ru/vue_form/
<br>
https://github.com/abcolut/vue_form





</section>

</template>

<script>
export default {
  name: 'userForm',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  text-align: left;
}
</style>
