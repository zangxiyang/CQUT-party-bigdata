<template>
  <div class="box">
    <b-tree-org
        ref="treeOrg"
        :data="data"
        @node-click="handleNodeClick"
        @toggle-expand="handleExpand" />
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      data: {
        id: 0,
        label: "xxx科技有限公司",
        expand: true,
        children: [
          {
            id: 2,
            label: "产品研发部",
            expand: true,
            children: [
              { id: 5, label: "研发-前端" },
              { id: 6, label: "研发-后端" },
              { id: 9, label: "UI设计" },
              { id: 10, label: "产品经理" }
            ]
          },
          {
            id: 3,
            label: "销售部",
            expand: true,
            children: [
              { id: 7, label: "销售一部" },
              { id: 8, label: "销售二部" }
            ]
          },
          { id: 4, label: "财务部" },
          { id: 9, label: "HR人事" }
        ]
      },
    }
  },
  methods: {
    handleNodeClick(node) {
      console.log('handleNodeClick: ', node)
    },
    handleExpand(node, expand) {
      console.log('handleExpand: ', node, expand)
    }
  }

}
</script>

<style scoped lang="scss">
.box{
  width: 500px;
  height: 500px;
}
</style>