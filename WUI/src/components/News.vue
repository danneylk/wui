<template>
	<div style="margin-top: 30px;">
	<el-popover
  ref="popover1"
  placement="top-start"
  title="标题"
  width="200"
  trigger="hover"
  content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
</el-popover>

<el-popover
  ref="popover2"
  placement="bottom"
  title="标题"
  width="200"
  trigger="click"
  content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
</el-popover>

<el-button v-popover:popover1>hover 激活</el-button>
<el-button v-popover:popover2>click 激活</el-button>
<el-popover
  placement="right"
  title="标题"
  width="200"
  trigger="focus"
  content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
  <el-button slot="reference">focus 激活</el-button>
</el-popover>
	</div>
</template>
<style>
</style>