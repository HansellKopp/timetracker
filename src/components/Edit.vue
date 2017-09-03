<template>
  <div class="CreateNote u-absolute-flex-column">
    <header class="app-header">
      <div class="u-flex-row">
        <a class="back-button" @click="goBack()"><i class="el-icon-arrow-left"></i></a>
        <div class="menu-text u-elastic">{{ id ? 'Editing Item' : 'Create Item' }}</div>
      </div>
    </header>
    <ul class="u-scroller">
      <el-form ref="form" :model="item" label-width="120px" class="create-form" input-width="120px">
        <el-form-item label="Date">
         <el-col>
            <el-date-picker type="date" placeholder="Pick a date" v-model="item.date" style="width: 100%;"></el-date-picker>
         </el-col>
        </el-form-item>
        <el-form-item label="Start">
          <el-col>
            <el-time-picker
              placeholder="Start time"
              v-model="item.start"
              :picker-options="{ format: 'HH:mm'}">
            </el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="End">
          <el-col>
            <el-time-picker
              placeholder="End time"
              v-model="item.end"
              :picker-options="{ format: 'HH:mm'}">
            </el-time-picker>
          </el-col>
        </el-form-item>
      </el-form>
    </ul>
    <div class="app-controls">
      <div class="u-flex-row">
        <el-button type="primary" class="u-elastic" @click="saveItem()">Save</el-button>
      </div>
    </div>
  </div>
</template>

<script>
const api = require('../api')
const uuidV4 = require('uuid/v4')

export default {
  props: ['id'],
  data () {
    return {
      item: {
        date: new Date(),
        start: new Date(0, 0, new Date().getHours(), new Date().getMinutes(), 0),
        end: new Date(0, 0, new Date().getHours(), new Date().getMinutes(), 0),
        itemIndex: -1
      }
    }
  },
  methods: {
    saveItem () {
      const workdayItems = this.$localStorage.get('workdayItems')
      if (this.item.text !== '') {
        const item = Object.assign({}, this.item, {
          id: this.item.id || uuidV4(),
          hours: api.timeLapse(this.item.start, this.item.end),
          timestamp: Date.now()
        })
        if (this.itemIndex >= 0) {
          workdayItems[this.itemIndex] = item
        } else {
          workdayItems.push(item)
        }
      } else if (this.itemIndex >= 0) {
        workdayItems.splice(this.itemIndex, 1)
      }
      this.$localStorage.set('workdayItems', workdayItems)
      this.$router.push('/')
    },
    loadItem () {
      const workdayItems = this.$localStorage.get('workdayItems')
      this.itemIndex = workdayItems.findIndex(item => item.id === this.id)
      if (this.itemIndex >= 0) {
        this.item = workdayItems[this.itemIndex]
      } else {
        this.$router.push('/')
      }
    },
    goBack () {
      this.$router.push('/')
    }
  },
  mounted () {
    if (this.id) {
      this.loadItem()
    }
  }
}
</script>

<style>
.create-form {
  padding: 20px 16px;
}
</style>