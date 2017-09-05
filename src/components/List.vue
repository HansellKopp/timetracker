<template>
  <div class="itemList u-absolute-flex-column">
    <header class="app-header">
      <div class="u-flex-row">
        <div class="menu-text u-elastic">Working Hours Tracker</div>
        <a @click="createItem()" type="primary"><i class="el-icon-plus"></i></a>
      </div>
    </header>
    <ul class="u-scroller">
      <li v-for="item in workdayItems" :key="item.id">
        <router-link :to="{ name: 'View', params: { id: item.id } }">
          <i class="el-icon-arrow-right"></i>
          <p class="note-title">{{ item.date | moment("dddd, MMMM Do YYYY") }}</p>
          <p class="small">{{ item.start }}-{{ item.end }}  ( {{  item.hours }}  )</p>
        </router-link>
      </li>
    </ul>
  <footer class="app-footer">
    <el-row>
        <el-col :span="5">Days:</el-col>
        <el-col :span="5">{{ itemsCount }}</el-col>
        <el-col :span="6">Hours:</el-col>
        <el-col :span="6">{{ totalHours }}</el-col>
    </el-row>
    <el-row>
      <el-col :span="10">
        <el-button type="primary" @click="dialogVisible = true">
            <i class="el-icon-setting"></i>
            Income:{{ hourlyIncome.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }) }}
        </el-button>
      </el-col>
        <el-col :span="6">Total:</el-col>
        <el-col :span="6" style="{text-align: right;}">
          {{ totalIncome.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }) }}
        </el-col>
    </el-row>
  </footer>
  <el-dialog
    title="Modify Income"
    :visible.sync="dialogVisible"
    size="large"
    >
    <el-form>
      <el-form-item label="New Income">
        <el-input type="number" v-model="hourlyIncome" step=".01"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancelDialog">Cancel</el-button>
      <el-button type="primary" @click="acceptDialog">Confirm</el-button>
    </span>
  </el-dialog>
  </div>
</template>

<script>
import { WorkDays } from '../api'

export default {
  data () {
    return {
      workdayItems: [],
      hourlyIncome: 0,
      dialogVisible: false,
      workdays: null
    }
  },
  methods: {
    acceptDialog () {
      this.workdays.setIncome(this.hourlyIncome)
      this.dialogVisible = false
    },
    cancelDialog () {
      this.hourlyIncome = this.workdays.income('1:00')
      this.dialogVisible = false
    },
    createItem () {
      this.$router.push('new')
    }
  },
  mounted () {
    this.workdays = new WorkDays(this.$localStorage)
    this.workdayItems = this.workdays.getAll()
    this.hourlyIncome = this.workdays.income('1:00')
  },
  computed: {
    totalHours () {
      return this.workdays ? this.workdays.totalHours() : 0
    },
    totalIncome () {
      return this.workdays ? this.workdays.income(this.workdays.totalHours(), this.hourlyIncome) : 0
    },
    itemsCount () {
      return this.workdayItems.length
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