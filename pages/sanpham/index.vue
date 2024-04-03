<template>
    <div class="flex flex-col items-center w-full">
        <div class="xl:text-[50px] sm:text-[30px]">
            DANH SÁCH SẢN PHẨM
        </div>
        <div class="grid grid-cols-3">
            <Sanpham v-for="(item,index) in items" :key="index" :imgurl="item.imgurl ? item.imgurl[0] : null" :ten="item.ten" :gia="item.gia" :_id="item._id"></Sanpham>
        </div>
        <!-- <div :class="[
            'flex',
            {[`flex-${type}`] : !!type },
            {[`justify-${justify}`] : !!justify },
            {[`items-${items}`] : !!items },
            {[`flex-wrap`] : !!wrap },
        ]">
        </div> -->
    </div>
    


</template>
<script setup>

    const items = ref([]);

    const loadF = async () =>{
        try {
            const {data:i4SP} = await useFetch('/api/sanpham/list');
            items.value = i4SP.value;
            if(i4SP.value)
            {
                items.value = i4SP.value;
            }
            else{
                console.log('Không tìm thấy sản phẩm');
            }
        } catch (error) {
            console.log('Không tìm thấy sản phẩm');
            console.log(error);

        }
    }

    loadF();
</script>