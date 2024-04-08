<template>
    <div v-if="itemx" class="w-full">
        <div class=" bg-gray-100 w-full h-[700px] flex flex-col items-center justify-center">
            <div class="flex  w-[80%] h-[90%] border-[1px] border-solid border-black">
                <div class=" w-[60%] h-[100%] flex">
                    <!-- danh sách ảnh nhỏ -->
                    <div class=" w-[20%] grid grid-rows-5 relative">
                        <div @click="len()" class="cursor-pointer w-full h-[5%] opacity-[50%] hover:opacity-[70%] bg-white flex flex-col items-center justify-center absolute">
                            ^
                        </div>
                        <NuxtImg v-for="(anhNho,index) in listAnhNho" :key="index" @click="loadAnhChinh(index)" :src="anhNho" class="w-[100%] h-[100%] object-cover border-b-[1px]"></NuxtImg>
                        <div @click="xuong()" class="cursor-pointer w-full h-[5%] opacity-[50%] hover:opacity-[70%] bg-white flex flex-col items-center justify-center absolute bottom-0">
                            v
                        </div>
                    </div>
                    <!-- anh chính -->
                    <div class=" w-[80%] relative flex items-center">
                        <div @click="preImg()" class=" cursor-pointer absolute opacity-[40%] hover:opacity-[70%] w-[10%] bg-white h-1/4 left-0 flex items-center justify-center font-extrabold text-[30px]">
                            <
                        </div>
                        <NuxtImg :src="anhChinh" class="w-[100%] h-[100%] object-cover"></NuxtImg>
                        <div @click="nextImg()" class="cursor-pointer absolute opacity-[40%] hover:opacity-[70%] w-[10%] bg-white h-1/4 right-0 flex items-center justify-center font-extrabold text-[30px]">
                            >
                        </div>
                    </div>
                </div>
                <!-- Chi tiet san pham -->
                <div class="grid  w-[40%] h-[100%] p-5">
                    <div class="text-2xl">
                        Tên sản phẩm: {{ itemx.ten }}
                    </div>
                    <div class="text-2xl">
                        Giá: {{ (itemx.gia == 0) ? 'Liên hệ báo giá' : itemx.gia + ' đ' }}
                    </div>
                    <div class="text-2xl">
                        Phân loại: {{ itemx.phanLoai}}
                    </div>
                    <div class="text-2xl">
                        Kích thước: {{ itemx.kichThuoc }}
                    </div>
                    <div class="text-2xl gap-2 flex">
                        <div>
                            Liên kết:
                        </div>
                        <div>
                            <UButton class="bg-slate-600 hover:bg-slate-900 mr-2">
                                <NuxtLink :to="itemx.link.tikTok" target="_blank">
                                    Tiktok
                                </NuxtLink>
                            </UButton>
                            <UButton class="bg-blue-600 hover:bg-blue-700 mr-2">
                                <NuxtLink :to="itemx.link.faceBook" target="_blank">
                                    FaceBook
                                </NuxtLink>
                            </UButton>
                        </div>
                        
                    </div>
                    <div class="text-2xl">
                        Đặt hàng liên hệ : {{ ' 0983516822' }}
                    </div>
                </div>
            </div>
        </div>
        <div class="  w-full h-[700px] flex flex-col items-center my-5 ">
            <div class="flex w-[80%]">
                <!-- mo ta thong tin san pham -->
                <div class="  w-[100%] border-[1px] h-[full] flex flex-col items-center">
                    <div class="text-3xl m-4">
                        Mô tả sản phẩm
                    </div>
                    <div class=" p-5 text-xl w-full ">
                        {{ itemx.moTa }}
                    </div>
                </div>
                <!-- san pham lien quan -->
                <!-- <div class="  w-[30%] border-[1px] h-[] flex flex-col items-center justify-center ">
                    Các sản phẩm liên quan
                </div> -->
            </div>
        </div>
    </div>
</template>
<script setup>
    const itemx = ref(null);
    const ind = ref(0);
    const anhChinh = ref('');
    const indexAnhChinh = ref(0);
    const listAnhNho = ref([]);
    const rt = ref(useRoute().params.id);

    const loadF = async() =>
    {
        try {
            const {data} = await useFetch('/api/sanpham/get',{
                method: 'POST',
                body: {
                    _id: rt.value,
                },
            })
            itemx.value = data.value;
            // Config 5 ảnh nhỏ

            cflistAnhNho();
            anhChinh.value = listAnhNho.value[0];
            
        } catch (error) {
            alert("Lỗi");
            console.log(error);
        }
    }

    const len = () =>
    {
        if(itemx.value.imgurl.length <= 5)
        {
            return;
        }
        if(ind.value==0)
        {
            ind.value = itemx.value.imgurl.length - 1;
        }
        else
        {
            ind.value--;
        }

        console.log(ind.value);
        cflistAnhNho();
    }

    const xuong = () =>
    {
        if(itemx.value.imgurl.length <= 5)
        {
            return;
        }
        if(ind.value==itemx.value.imgurl.length - 1)
        {
            ind.value = 0;
        }
        else
        {
            ind.value++;
        }
        console.log(ind.value);
        cflistAnhNho();
    }

    const cflistAnhNho = () => {
        const listNhoTemp = ref([]);
        if(itemx.value.imgurl.length <=5)
        {
            listAnhNho.value = itemx.value.imgurl;
        }
        else
        {
            listAnhNho.value = [];
            let i = ind.value;
            let dem = 0;
            while(dem<5)
            {
                listAnhNho.value.push(itemx.value.imgurl[i]);

                i++;
                if(i==itemx.value.imgurl.length)
                {
                    i = 0;
                }
                dem++;
            }
        }
        
    }

    const loadAnhChinh = (index) =>
    {
        console.log("ind = " + ind.value);
        console.log('index = ' + index);
        if(ind.value+index >= itemx.value.imgurl.length)
        {
            anhChinh.value = itemx.value.imgurl[ind.value+index - itemx.value.imgurl.length];
            indexAnhChinh.value = ind.value+index - itemx.value.imgurl.length;
        }
        else
        {
            anhChinh.value = itemx.value.imgurl[ind.value+index];
            indexAnhChinh.value = ind.value+index;
        }
    }
    
    const nextImg = () =>
    {
        if(indexAnhChinh.value == itemx.value.imgurl.length - 1)
        {
            indexAnhChinh.value = 0;
        }
        else
        {
            indexAnhChinh.value++;
        }
        anhChinh.value = itemx.value.imgurl[indexAnhChinh.value];
    }

    const preImg = () =>
    {
        {
        if(indexAnhChinh.value == 0)
        {
            indexAnhChinh.value = itemx.value.imgurl.length - 1;
        }
        else
        {
            indexAnhChinh.value--;
        }
        anhChinh.value = itemx.value.imgurl[indexAnhChinh.value];
    }
    }

    loadF();

    // const testF = () => {
    //     const n1 = list.shift();
    // }

</script>