<template>
  <Navbar/>
  <div class="container-fluid">
    <div class="row">
      <Sidebar currentElement="places"/>
      <div class="ml-sm-auto col-lg-10 p-4">

        <h3>Places</h3>
        <hr/>
        <a href="/places/add" type="button" class="btn btn-warning">Add new place</a>
        <div class="col-lg-6 offset-lg-2">
          <AllPlaces/>
        </div>
          
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar';
import AllPlaces from '../components/AllPlaces';
import Sidebar from '../components/Sidebar';

export default {
  components: { Navbar, Sidebar, AllPlaces },
};
</script>
<style scoped>
  .btn {
    margin-bottom: 15px;
  }
</style>