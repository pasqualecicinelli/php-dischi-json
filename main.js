const { createApp } = Vue;

createApp({
  data() {
    return {
      listDischi: [],
      listJson: [],
    };
  },

  mounted() {
    // FROM JSON
    axios
      .get("http://localhost/php-dischi-json/backend/data/get-dischi-list.php")
      .then((response) => {
        this.listJson = response.data;
        console.log(this.listJson);
      });

    /* FROM PHP
    axios
      .get("http://localhost/php-dischi-json/backend/data/get-dischi-list.php")
      .then((response) => {
        this.listDischi = response.data;
        console.log(this.listDischi);
      });*/
  },
}).mount("#app");
