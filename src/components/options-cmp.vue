<template>
  <el-select
    @change="onSelect"
    v-model="sortBy"
    filterable
    placeholder="Select"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script>
export default {
  name: "options-cmp",
  data() {
    return {
      sortBy: "",
      options: [
        {
          value: "name",
          label: "name",
        },
        {
          value: "time",
          label: "time",
        },
        {
          value: "price",
          label: "price",
        },
      ],
    };
  },
  computed: {},
  methods: {
    onSelect() {
      console.log("this.sortBy", this.sortBy);
      this.$emit("update:modelValue", this.sortBy);
      //   this.$emit("input");
    },
  },
  //   emits: ["update:modelValue"],
};
</script>
