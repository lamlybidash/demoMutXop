<template>
    <div class="flex flex-col items-center m-3 border-[1px] rounded-t-2xl overflow-hidden">
            <img class=" object-cover xl:w-[100%] h-[100%] cursor-pointer " :src="item.srcimg">
        <div class="text-xl cursor-pointer ">
            {{ item.title }}
        </div>
        <div class="font-thin xl:text-lg text-sm">
            {{ item.price }} đ
        </div>
    </div>
</template>
<script setup>
    const item = defineProps(['title','srcimg','price']);
</script>