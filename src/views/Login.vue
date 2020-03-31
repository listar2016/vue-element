<template>
    <el-form :model="authForm" ref="authForm" label-width="120px">
      <el-form-item
        prop="email" 
        label="Email"
        :rules="rules.email">
        <el-input v-model="authForm.email" placeholder="Email"></el-input>
      </el-form-item>
      <el-form-item 
        prop="password"
        label="Password"
        :rules="rules.password">
        <el-input type="password" v-model="authForm.password" placeholder="Password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('authForm')">Login</el-button>
        <el-button @click="resetForm('authForm')">Reset</el-button>
      </el-form-item>
    </el-form>
</template>
<script>
export default {
  data: () => ({
    authForm: {
      email: '',
      password: ''
    },
    rules: {
      email: [
        { 
          required: true,
          message: 'Please input email address',
          trigger: 'blur'
        },
        {
          type: 'email',
          message: 'Please input correct email address',
          trigger: ['blur', 'change']
        }
      ],
      password: [
        { 
          required: true,
          message: 'Please input password',
          trigger: 'blur'
        }
      ]
    }
  }),
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store.dispatch('login')
            .then(() => {
              this.$router.push({ name:'user-list'})
            })
        } else {
          return false
        }
      })
    },
    resetFrom(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang="scss">
  .el-form {
    width: 400px;
    margin: auto;
  }
</style>