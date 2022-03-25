<template>
  <div>
    <label>{{label}}</label>
    <div>
      <slot></slot>
    </div>
    <p v-if="errorMessage">{{ errorMessage}}</p>
  </div>
</template>

<script>
import AsyncValidator from 'async-validator'

export default {
  name: 'LgFormItem',
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String
    }
  },
  data() {
    return {
      errorMessage: ''
    }
  },
  mounted() {
    this.$on('validate', () => {
      this.validate()
    })
  },
  methods: {
    validate() {
      if (!this.prop) return
      // 验证数据、规则
      const value = this.form.model[this.prop]
      const rule = this.form.rules[this.prop]

      const descriptor = { [this.prop]: rule }
      const validator = new AsyncValidator(descriptor)

      return validator.validate({ [this.prop]: value }, errors => {
        if (errors) {
          this.errorMessage = errors[0].message
        } else {
          this.errorMessage = ''
        }
      })
    }
  }
}
</script>

<style>
</style>