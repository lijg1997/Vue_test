<template>
  <li :class="{ line: checked }">
    <label>
      <slot name="inputSlot" :index="index">
        <input type="checkbox" v-model="checked" />
      </slot>
      <slot name="spanSlot" :content="item.content">
        <span>{{ item.content }}</span>
      </slot>
    </label>
    <button class="btn btn-danger" @click="delTodo">删除</button>
  </li>
</template>

<script>
export default {
  props: {
    item: Object,
    index: Number
  },
  computed: {
    checked: {
      get() {
        return this.item.checked;
      },
      set(val) {
        this.bus.$emit("change", this.item.id, val);
      }
    }
  },
  methods: {
    delTodo() {
      this.bus.$emit("delTodo", this.item.id);
    }
  }
};
</script>

<style scoped>
li:hover {
  background-color: skyblue;
}
li:hover button {
  display: block;
}
.line {
  position: relative;
}
.line::before {
  position: absolute;
  left: 0;
  top: 50%;
  width: 98%;
  height: 1px;
  background-color: red;
}
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
  position: relative;
  z-index: 9;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
