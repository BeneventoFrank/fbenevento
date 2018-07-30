<template>
    <div>
        {{message}}
    </div>
</template>



<script>
  export default {
    props: ['timeEntries','navDate'],
    data () {
        return { 
        message:'test test test'
        }
    }
  }
 </script>