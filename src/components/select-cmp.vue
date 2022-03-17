<template>
  <el-select
    v-model="labels"
    @change="onSelectLabels"
    multiple
    filterable
    allow-create
    default-first-option
    :reserve-keyword="false"
    placeholder="Choose tags for your article"
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
// import { ref } from "vue";

export default {
  name: "select-cmp",

  // props: {
  //   labels: [Object],
  // },
  data() {
    return {
      labels: [],
      options: [
        {
          value: "On wheels",
          label: "On wheels",
        },
        {
          value: "Box game",
          label: "Box game",
        },
        {
          value: "Art",
          label: "Art",
        },
        {
          value: "Baby",
          label: "Baby",
        },
        {
          value: "Doll",
          label: "Doll",
        },
        {
          value: "Puzzle",
          label: "Puzzle",
        },
        {
          value: "Outdoor",
          label: "Outdoor",
        },
      ],
    };
  },
  computed: {},
  methods: {
    onSelectLabels() {
      console.log("this.labels", this.labels);
      this.$emit("update:modelValue", this.labels);
      //   this.$emit("input");
    },
  },
  //   emits: ["update:modelValue"],
};
</script>
