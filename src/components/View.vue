<template>
  <div class="Note u-absolute-flex-column">
    <header class="app-header">
      <div class="u-flex-row">
        <a class="back-button" @click="goBack()"><i class="el-icon-arrow-left"></i></a>
        <div class="menu-text u-elastic">Viewing Workday</div>
        <a @click="edit()"><i class="el-icon-edit"></i></a>
        <a @click="remove()"><i class="el-icon-delete"></i></a>
      </div>
    </header>
    <div class="u-scroller">
      <div class="content">
          <h2>{{ item.date | moment("dddd, MMMM Do YYYY") }}</h2>
          <h3>Start:{{ item.start }}</h3>
          <h3>  End:{{ item.end }}</h3>
          <h3>Time worked:{{ item.hours }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      item: {}
    }
  },
  methods: {
    load () {
      const workdayItems = this.$localStorage.get('workdayItems')
      this.item = workdayItems.find(item => item.id === this.id)
      if (!this.item) {
        this.$router.push('/')
      }
    },
    edit () {
      this.$router.push({ name: 'Edit', params: { id: this.item.id } })
    },
    remove () {
      this.$swal({
        title: 'Warning',
        text: 'This will delete this item. Continue',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Yes, delete it!'
      }).then(() => {
        const workdayItems = this.$localStorage.get('workdayItems')
        const itemIndex = workdayItems.findIndex(item => item.id === this.id)
        workdayItems.splice(itemIndex, 1)
        this.$localStorage.set('workdayItems', workdayItems)
        this.$router.push('/')
      })
    },
    goBack () {
      this.$router.push('/')
    }
  },
  mounted () {
    this.load()
  }
}
</script>

<style scoped>
.content {
  padding: 25px;
  font-size: 14px;
  line-height: 21px;
}
</style>