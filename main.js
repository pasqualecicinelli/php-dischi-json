const { createApp } = Vue;

createApp({
  data() {
    return {
      listDischi: [],
    };
  },

  mounted() {
    axios
      .get("http://localhost/php-dischi-json/backend/data/dischi.php")
      .then((response) => {
        this.listDischi = response.data;
        console.log(this.listDischi);
      });
  },
}).mount("#app");
