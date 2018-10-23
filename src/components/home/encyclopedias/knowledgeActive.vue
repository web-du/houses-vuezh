<template>
    <div class="advertisement">
        <ul>
            <li>
                <a href="#">
                    <img src="@/assets/images/advertisement-img.jpg" >
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="@/assets/images/advertisement-img.jpg" >
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="@/assets/images/advertisement-img.jpg" >
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
/**广告位**/
.advertisement {
  width: 1200px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 20px;
}
.advertisement ul li {
  margin-bottom: 5px;
}
.advertisement ul li:last-child {
  margin-bottom: 0;
}
.advertisement ul li a img {
  display: block;
  width: 100%;
  height: 60px;
}

</style>
