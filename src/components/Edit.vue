<template>
  <div class="CreateNote u-absolute-flex-column">
    <header class="app-header">
      <div class="u-flex-row">
        <a class="back-button" @click="goBack()"><i class="el-icon-arrow-left"></i></a>
        <div class="menu-text u-elastic">{{ id ? 'Editing Item' : 'Create Item' }}</div>
      </div>
    </header>
    <div class="app-controls">
      <div class="u-flex-row">
        <el-button type="primary" class="u-elastic" @click="save()">Save</el-button>
      </div>
    </div>
    <ul class="u-scroller">
      <el-form ref="form" :model="item" class="create-form" input-width="120px">
        <el-form-item label="Date">
         <el-col>
            <el-date-picker
            type="date"
            placeholder="Pick a date"
            v-model="item.date"
            large
            :picker-options="{
              start: '00:01',
              step: '00:05',
              end: '23:59'
            }"
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
              start: '00:01',
              step: '00:05',
              end: '23:59'
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
            >
            </el-time-select>
          </el-col>
        </el-form-item>
      </el-form>
    </ul>
  </div>
</template>

<script>
import { saveItem, loadItem } from '../api'
// const uuidV4 = require('uuid/v4')

export default {
  props: ['id'],
  data () {
    return {
      item: {
        date: new Date(),
        start: '12:00',
        end: '13:00',
        itemIndex: -1
      }
    }
  },
  methods: {
    save () {
      saveItem(this.item, this.itemIndex, this.$localStorage)
      this.$router.push('/')
    },
    loadItem () {
      const item = loadItem(this.id, this.$localStorage)
      if (!item) {
        this.item = item.item
        this.itemIndex = item.itemIndex
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