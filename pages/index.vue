<script setup lang="ts">
import { Authenticator } from "@aws-amplify/ui-vue";
</script>
<template>
  <h1>Hello World</h1>
  <Authenticator :variation="'modal'">
    <template #="{ signOut }">
      <button @click="signOut">Sign Out</button>
    </template>
  </Authenticator>
</template>
