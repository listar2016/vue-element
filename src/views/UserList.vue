<template>
  <el-container>
    <el-main>
      <el-table :data="userList">
        <el-table-column 
          label="User Name"
          prop="login">
        </el-table-column>
        <el-table-column label="Avata">
          <template slot-scope="scope">
            <el-image
              style="width: 100px"
              fit="contain"
              :src="scope.row.avatar_url"
            ></el-image>
          </template>
        </el-table-column>
        <el-table-column 
          label="Type"
          prop="type">
        </el-table-column>
        <el-table-column 
          label="Url"
          prop="html_url">
        </el-table-column>
      </el-table>
    </el-main>  
  </el-container>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState({
      userList: state => state.user_list
    })
  },
  created() {
    this.$store.dispatch('getUserList')
  }
}
</script>