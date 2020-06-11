<template>
  <section class="nav">
      <div class="nav-logo">
        <img src="https://image.flaticon.com/icons/svg/1158/1158988.svg" alt="logo" width="100" height="100">
        <h2>Hedgehog</h2>
      </div>
      <div class="nav-menu">
          <ul class="nav-menu-list">
              <li class="nav-list-item">About me</li>
              <li class="nav-list-item">Git Hub</li>
          </ul>
      </div>
  </section>
</template>

<script>
export default {
    
}
</script>

<style lang="sass" scoped>
.nav
    background: #333
    display: flex
    flex-direction: column
    justify-content: space-around
    align-itens: center
    .nav-logo
        margin: 20px auto
        h2
            color: white
            text-align: center
            font-size: 1em
            margin-top: 0
    .nav-menu 
        width: 100%

.nav-menu-list
    list-style: none
    padding: 0
    display: flex
    margin: 0
    color: white
    li
        width: 50%
        text-align: center
        background: #555
        padding: 10px 0
        cursor: pointer
        transition: background 300ms ease-in-out
        &:hover
            background: #333
        &:first-of-type
            border-bottom: 5px solid #222
</style>