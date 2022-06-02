<template>
  <router-view />
</template>

<script setup lang="ts">
import { version, buildTime } from "../build/info.json"

console.log(`%c Release Build Info 
%cVersion			v${version}
BuildTime		${buildTime}`
  , "background:#000;color:#FFF;font-weight:bold;"
  , "background:#FFF;color:#000;"
)

</script>
