<template>
    <div class="toast" :class="[positionClass, { 'toast-show': show }]">
      <div class="toast-header">
        <strong class="mr-auto">{{ title }}</strong>
        <button type="button" class="ml-2 mb-1 close" @click="hideToast">
          <span>&times;</span>
        </button>
      </div>
      <div class="toast-body">
        {{ message }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      message: {
        type: String,
        required: true
      },
      position: {
        type: String,
        default: 'top-right',
        validator: (value) =>
          ['top-right', 'top-left', 'bottom-right', 'bottom-left'].includes(value)
      },
      duration: {
        type: Number,
        default: 5000
      }
    },
    data() {
      return {
        show: false
      };
    },
    computed: {
      positionClass() {
        return `toast-${this.position}`;
      }
    },
    methods: {
      showToast() {
        this.show = true;
        setTimeout(this.hideToast, this.duration);
      },
      hideToast() {
        this.show = false;
      }
    },
    mounted() {
      this.showToast();
    }
  };
  </script>
  
  <style scoped>
  .toast {
    position: fixed;
    min-width: 200px;
    max-width: 300px;
    padding: 0.75rem;
    background-color: #f8f9fa;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.25rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    z-index: 1000;
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 0.3s, transform 0.3s;
  }
  
  .toast-show {
    opacity: 1;
    transform: translateY(0);
  }
  
  .toast-header {
    display: flex;
    align-items: center;
    padding-bottom: 0.25rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
  
  .toast-header .close {
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.6);
    outline: none;
    cursor: pointer;
  }
  
  .toast-body {
    padding-top: 0.25rem;
  }
  </style>
  