<template>
  <div class="itemList u-absolute-flex-column">
    <header class="app-header">Worked days: {{ itemsCount }} Total Hours: {{ totalHours }}</header>
    <div class="app-controls">
      <div class="u-flex-row">
        <el-button type="primary" class="u-elastic" @click="createItem()">
          <i class="el-icon-time"></i>
          Add Working hours
        </el-button>
      </div>
    </div>
    <ul class="u-scroller">
      <li v-for="item in workdayItems" :key="item.id">
        <router-link :to="{ name: 'View', params: { id: item.id } }">
          <i class="el-icon-arrow-right"></i>
          <p class="note-title">{{ item.date | moment("dddd, MMMM Do YYYY") }}   ( {{  item.hours }}  )</p>
          <p class="small">{{ item.start }}-{{ item.end }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      workdayItems: []
    }
  },
  methods: {
    loadItems () {
      this.workdayItems = this.$localStorage.get('workdayItems')
    },
    createItem () {
      this.$router.push('new')
    }
  },
  mounted () {
    this.loadItems()
  },
  computed: {
    itemsCount () {
      return this.workdayItems.length
    },
    totalHours () {
      let hours = 0
      let minutes = 0
      this.workdayItems.map((s) => {
        const item = s.hours.split(':')
        hours += parseInt(item[0], 10)
        minutes += parseInt(item[1], 10)
      })
      if (minutes > 59) {
        hours += Math.floor(minutes / 60)
        minutes = minutes % 60
      }
      return `${('00' + hours).slice(-2)}:${('00' + minutes).slice(-2)}`
    }
  }
}
</script>

<style scoped>
.itemList ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.itemList ul li {
  border-bottom: solid 1px #EFEFEF;
}

.itemList ul li a {
  position: relative;
  display: block;
  padding: 12px 25px;
  cursor: pointer;
  color: #2c3e50;
  text-decoration: none;
}

.itemList ul li a:hover {
  color: #006699;
}

.itemList ul li a i {
  position: absolute;
  top: 22px;
  right: 25px;
  margin: auto 0;
}

.itemList ul li a .note-title {
  width: 90%;
  margin: 0;
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.itemList ul li a .small {
  margin: 0;
  margin-top: 3px;
  font-size: 11px;
}
</style>