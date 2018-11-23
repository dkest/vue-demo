<template>
    <div>
        <p>mine page</p>
        <div v-bind:key='item' id = "mine-list" v-for = "item in data">
            <div>{{item.money}}</div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Mine',
    data() {
      return {
        data: [
          {money: 100},
          {money: 1000},
          {money: 10000},
        ]
      }
    }
  }
</script>

