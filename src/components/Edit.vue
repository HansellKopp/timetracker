<template>
  <div class="CreateNote u-absolute-flex-column">
    <header class="app-header">
      <div class="u-flex-row">
        <a class="back-button" @click="goBack()"><i class="el-icon-arrow-left"></i></a>
        <div class="menu-text u-elastic">{{ id ? 'Editing Item' : 'Create Item' }}</div>
      </div>
    </header>
      <el-card class="box-card" style="margin:20px;">
        <div slot="header" class="clearfix">
          <span style="line-height: 36px;">Register Hours</span>
          <el-button style="float: right;" type="primary" @click="save()">Save</el-button>
        </div>
        <el-form ref="form" :model="item" class="create-form" input-width="120px">
          <el-form-item label="Date">
          <el-col>
              <el-date-picker
              type="date"
              placeholder="Pick a date"
              v-model="item.date"
              large
              >
              </el-date-picker>
          </el-col>
          </el-form-item>
          <el-form-item label="Start">
            <el-col>
              <el-time-select 
                placeholder="Start time" 
                v-model="item.start" 
                size="large"
                :picker-options="{
                start: '00:00',
                step: '00:05',
                end: '24:00'
              }"
              >
              </el-time-select>
            </el-col>
          </el-form-item>
          <el-form-item label="End">
            <el-col>
              <el-time-select
                placeholder="End time"
                v-model="item.end"
                size="large"
                :picker-options="{
                start: '00:00',
                step: '00:05',
                end: '24:00'
                }"
              >
              </el-time-select>
            </el-col>
          </el-form-item>
      </el-form>     
    </el-card>
  </div>
</template>

<script>
import { WorkDays } from '../api'

export default {
  props: ['id'],
  data () {
    return {
      item: {
        date: new Date(),
        start: new Date().getHours() + ':' + new Date().getMinutes(),
        end: (new Date().getHours() + 8) + ':' + new Date().getMinutes()
      },
      workdays: null
    }
  },
  methods: {
    save () {
      this.workdays.save(this.item)
      this.$router.push('/')
    },
    loadItem () {
      const item = this.workdays.getById(this.id)
      if (item) {
        this.item = item
      } else {
        this.$router.push('/')
      }
    },
    goBack () {
      this.$router.push('/')
    }
  },
  mounted () {
    this.workdays = new WorkDays(this.$localStorage)
    if (this.id) {
      this.loadItem()
    }
  }
}
</script>

<style scoped>
.create-form {
  padding: 20px 16px;
}
</style>