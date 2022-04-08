<template>
  <div id="bottomMarquee">
    <marquee><p>5765  437265617465  4d61676963  77697468  636f6465</p></marquee>
  </div>
</template>

<script>
export default {
  name: "footerMarquee",
};
</script>

<style scoped>
p {
  font-size: 15px;
  margin-top: 14px;
}

#bottomMarquee {
  display: flex;
  align-items: center;
  bottom: 0%;
  background: rgba(102, 104, 104, 0.8);
  height: 30px;
  width: 100vw;
  position: fixed;
  color: rgba(255, 255, 255, 0.8);
  z-index: 1000 !important;
}
</style>
