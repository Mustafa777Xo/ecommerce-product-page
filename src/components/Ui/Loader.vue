<template>
  <div class="container">
    <div class="spinner"></div>
  </div>
</template>
<style scoped lang="scss">
.container {
  background-color: white;
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 4;
}
.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinner::before,
.spinner::after {
  border: 2.9px solid #ff7d1a;
  border-radius: 50%;
  position: absolute;
  content: "";
  display: block;
}

.spinner::before {
  width: 14.4px;
  height: 14.4px;
  border-bottom-color: transparent;
  border-left-color: transparent;
  animation: spinner-1o3y8q 0.75s infinite linear reverse;
}

.spinner::after {
  animation: spinner-1o3y8q 0.5s infinite linear;
  height: 24px;
  width: 24px;
  border-right-color: transparent;
  border-top-color: transparent;
}

@keyframes spinner-1o3y8q {
  to {
    transform: rotate(360deg);
  }
}
</style>
