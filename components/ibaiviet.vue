<template>
    <div v-if="check" @click="testF()" :class="[`flex w-full h-[250px] overflow-hidden hover:bg-gray-200 hover:border-[2px]`, selected ? 'bg-blue-200':'']">
        <div class=" pl-2 pr-3">
            <img class="w-[250px] h-full object-cover"  :src="props.img"/>
        </div>
        <div class="w-[70%] grid grid-rows-5">
            <div >
                Tên: {{ props.ten }}
            </div>
            <div>
                Giá: {{ (gia==0) ? 'Liên hệ báo giá' : gia }}
            </div>
            <div >
                Phân loại: {{ phanloai }}
            </div>
            <div >
                Kích thước: {{ props.kichthuoc }}
            </div>
        </div>
    </div>

</template>
<script setup>
    const props = defineProps(['_id','ten','gia','phanloai','kichthuoc','img','selected','check']);
    
    const emit = defineEmits([]);
    function testF(){
        console.log(props._id);
        console.log(props.img);
        emit('update:selected', props._id);
    }

</script>
<!-- <template>
    <div class="flex flex-col items-center ">
        <img class="w-[90%] h-[80%] object-cover cursor-pointer " :src="item.srcimg">
        <div class="text-xl cursor-pointer ">
            {{ item.title }}
        </div>
        <div class="font-thin xl:text-lg text-sm">
            {{ item.price }}đ
        </div>
    </div>
</template>
<script setup>
    const item = defineProps(['title','srcimg','price']);
    const props = defineProps(['modelValue'])
    const emit = defineEmits(['update:modelValue'])
</script> -->