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
        <el-input-number v-model="hourlyIncome" :min="1" :max="100"></el-input-number>
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
import { income } from '../api'

export default {
  data () {
    return {
      workdayItems: [],
      hourlyIncome: this.rate(),
      dialogVisible: false
    }
  },
  methods: {
    acceptDialog () {
      this.$localStorage.set('hourlyIncome', this.hourlyIncome)
      this.dialogVisible = false
    },
    cancelDialog () {
      this.hourlyIncome = this.rate()
      this.dialogVisible = false
    },
    rate () {
      return this.$localStorage.get('hourlyIncome')
    },
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
    totalIncome () {
      return income(this.totalHours, this.hourlyIncome)
    },
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