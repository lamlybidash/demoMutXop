<template>
    <div class="flex flex-col items-center p-2 ">
        <NuxtImg @click="selected()" class="xl:w-[500px] h-[400px] object-cover cursor-pointer " :src="item.imgurl ? item.imgurl : null"></NuxtImg>
        <div class="text-xl cursor-pointer ">
            {{ item.ten }}
        </div>
        <div class="font-thin xl:text-lg text-sm">
            {{ (item.gia!=0) ? item.gia + 'đ' : 'Liên hệ báo giá'}}
        </div>
    </div>
</template>
<script setup>
    const item = defineProps(['_id','ten','imgurl','gia']);
    const selected = () =>
    {
        navigateTo(`/sanpham/${item._id}`);
    }
</script>