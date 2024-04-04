<template>
    <div v-if="lists" class="flex flex-col items-center w-full">
        <div class="w-full  border-b-[1px] flex flex-col items-center">
            <img class="w-3/4 py-5" src="https://raw.githubusercontent.com/lamlybidash/asset/main/banghieu.jpg"/>
        </div>
        <div class="w-full flex flex-col items-center py-[50px] bg-cyan-400">
            <div class="xl:font-bold xl:text-[50px] lg:text-lg">
                SẢN PHẨM
            </div>
            <div class="flex gap-2 pt-5">
                <div class=" border-[1px] px-3 bg-sky-500 cursor-pointer">
                    Tôn Panel
                </div>
                <div class=" border-[1px] px-3 bg-sky-500 cursor-pointer">
                    Vách ngăn Panel
                </div>
                <div class=" border-[1px] px-3 bg-sky-500 cursor-pointer">
                    Mút xốp
                </div>
                <div class=" border-[1px] px-3 bg-sky-500 cursor-pointer">
                    Băng keo
                </div>
                <div class="border-[1px] px-3 bg-sky-500 cursor-pointer">
                    Tất cả
                </div>
            </div>

            <!-- List san pham -->
            <div class="grid grid-cols-3 grid-rows-2 ">
                <Sanpham v-for="(item,index) in lists" :key="index" :imgurl="item.imgurl ? item.imgurl[0] : null" :ten="item.ten" :gia="item.gia" :_id="item._id"></Sanpham>
            </div>

            <div class="grid grid-cols-5 gap-3">
                <UButton @click="dauF()" class=" bg-slate-400 hover:bg-slate-500 justify-center">
                    {{ ' << Đầu' }}
                </UButton>
                <UButton @click="truocF()" class=" bg-slate-400 hover:bg-slate-500 justify-center">
                    {{ ' < Trước' }}
                </UButton>
                <div class="justify-center items-center flex gap-1 flex-col">
                    <UInput type="text" v-model="page" class=" w-[60px] gap-2 flex ">/{{ pageMax }}</UInput>
                    <UButton @click="goF()" class=" bg-slate-400 hover:bg-slate-500 justify-center" >Đi</UButton>
                </div>
                <UButton @click="sauF()" class=" bg-slate-400 hover:bg-slate-500 justify-center" >
                    {{ 'Sau >' }}
                </UButton>
                <UButton @click="cuoiF()" class=" bg-slate-400 hover:bg-slate-500 justify-center">
                    {{ 'Cuối >>' }}
                </UButton>
            </div>
        </div>
<!--         
        <div class="w-full flex flex-col items-center py-[50px]">
            <div class="xl:font-bold xl:text-[50px] lg:text-lg mb-3">
                Bài viết
            </div>
            <div class="grid grid-cols-4 grid-rows-2 ">
                <Baiviet v-for="(item,index) in baiviets" :key="index" :srcimg="item.src" :title="item.title"></Baiviet>
            </div>
        </div> -->
    </div>
</template>
<script setup>
    const items = ref([]);
    const lists = ref([]);
    const page = ref(1);
    const pageMax = ref(0);
    const typeSP = ref('');

    
    const loadF = async () =>{
        try 
        {
            const {data:i4SP} = await useFetch('/api/sanpham/list');
            items.value = i4SP.value;
            if(i4SP.value)
            {
                items.value = i4SP.value;
                console.log(items.value.length);
                pageMax.value = parseInt(items.value.length / 6) + 1;
                console.log(pageMax.value);
                console.log(items.value);
                if(items.value)
                {
                    await setlist(items);
                }
            }
            else{
                await setlist(items);
                console.log('Không tìm thấy sản phẩm else');
            }
        } catch (error) {
            console.log('Không tìm thấy sản phẩm catch');
            console.log(error);
        }
    }
    loadF();


    const dauF = async () => {
        page.value=1;
        await setlist(items);
    }

    const truocF = async () => {
        if(page.value <= 1)
        {
            return;
        }
        page.value--;
        await setlist(items);
    }
    
    const goF = () =>
    {
        if(page.value < 1 || page.value > pageMax.value || page.value == '')
        {
            page.value = 1;
            setlist(items);

            return;
        }
        alert(page.value);
        setlist(items);
    }

    const sauF = async () => {
        if(page.value >= pageMax.value )
        {
            return;
        }
        page.value++;
        await setlist(items);
        
    }

    const cuoiF = async () => {
        page.value = pageMax.value;
        await setlist(items);
    }

    const setlist = (itemx) =>{
        if(page.value > pageMax.value)
        {
            return;
        }
        const i = ref((page.value - 1)*6);
        const check = ref(true);
        const listtemp =  ref([]);

        lists.value = listtemp.value;
        while(check.value)
        {


            lists.value.push(itemx.value[i.value]);
            i.value++;
            if(i.value==page.value*6 || i.value == itemx.value.length)
            {
                check.value = false;
            }
        }
    }



    const baiviets = ref
    ([
        {
            title: "Bài viết 1",
            src: "https://raw.githubusercontent.com/lamlybidash/asset/main/xop.jpg",
            price:100000,
        },
        {
            title: "Bài viết 2",
            src: "https://raw.githubusercontent.com/lamlybidash/asset/main/xop.jpg",
            price:100000,
        },
        {
            title: "Bài viết 3",
            src: "https://raw.githubusercontent.com/lamlybidash/asset/main/xop.jpg",
            price:100000,
        },
        {
            title: "Bài viết 4",
            src: "https://raw.githubusercontent.com/lamlybidash/asset/main/xop.jpg",
            price:100000,
        },
        {
            title: "Bài viết 5",
            src: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
            price:100000,
        },
        {
            title: "Bài viết 6",
            src: "https://raw.githubusercontent.com/lamlybidash/asset/main/xop.jpg",
            price:100000,
        },
    ]);
</script>