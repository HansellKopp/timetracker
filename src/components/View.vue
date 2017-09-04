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
    <el-card class="box-card" style="margin:20px;">
        <div slot="header" class="clearfix">
          <span style="line-height: 36px;">Registed Hours</span>
        </div>
        <div class="content">
          <el-row>
              <el-col :span="5">Day:</el-col>
              <el-col :span="19">{{ item.date | moment("dddd, MMMM Do YYYY") }}</el-col>
          </el-row>
          <el-row>
              <el-col :span="5">Start:</el-col>
              <el-col :span="19">{{ item.start }}</el-col>
          </el-row>
          </el-row>
              <el-col :span="5">End:</el-col>
              <el-col :span="19">{{ item.end }}</el-col>
          </el-row>
          <el-row>
              <el-col :span="5">Time:</el-col>
              <el-col :span="19">{{ item.hours }}</el-col>
          </el-row>
          <el-row>
              <el-col :span="8">Income:</el-col>
              <el-col :span="16">{{ dayIncome.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }) }}</el-col>
          </el-row>
        </div>
    </el-card>
  </div>
</template>

<script>
import { income } from '../api'

export default {
  props: ['id'],
  data () {
    return {
      item: { hours: '00:00' },
      rate: 0
    }
  },
  computed: {
    dayIncome () {
      return income(this.item.hours, this.rate)
    }
  },
  methods: {
    load () {
      const workdayItems = this.$localStorage.get('workdayItems')
      this.item = workdayItems.find(item => item.id === this.id)
      this.rate = this.$localStorage.get('hourlyIncome')
      if (!this.item) {
        this.$router.push('/')
      }
    },
    edit () {
      this.$router.push({ name: 'Edit', params: { id: this.id } })
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