<template>
  <section>
    <h2>Welcome to Your Growing Gardens Page</h2>
    <p>
      <RouterLink to="/survey">Set Up Profile</RouterLink>
      <RouterLink to="/survey2">Quarterly Survey</RouterLink>
    </p>
  </section>
</template>

<script>
export default {
  
};

</script>
<style scoped>
  a {
    text-decoration: none;
    color: black;
    border: 2px solid #1A676B;
    border-radius: 5px;
    padding: 5px;
    margin: 15px;
  }
</style>