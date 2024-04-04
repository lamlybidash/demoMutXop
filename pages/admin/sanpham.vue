<template>
    <div class="flex flex-col items-center w-full h-[90%] pt-[3%]">
        <!-- tiêu đề -->
        <div class="flex w-full">
            <div class=" text-[50px] w-[90%] flex flex-col items-center font-extrabold">
                Quản lý sản phẩm
            </div>
            <div class=" w-[10%]">
                <UButton @click="createFormAdd()"  :class="[`mb-1 w-[80%] justify-center`,isAdd ? 'bg-gray-400 hover:bg-gray-500' : ''] " :disabled="isAdd" >{{'Thêm mới sản phẩm'}}</UButton>
            </div>
        </div>

        <!-- Bảng -->
        <div class=" w-[80%] h-[80%]  flex  border-[1px]">
            <!-- danh sách -->
            <div class="border-[1px] bg-blue-50 w-[60%] overflow-y-scroll">
                <Ibaiviet v-for="(item,index) in items" :key="index" @update:selected="reselected" class=" object-cover py-3 border-t-[1px]" :_id="item._id" :ten="item.ten" :gia="item.gia" :phanloai="item.phanLoai" :kichthuoc="item.kichThuoc" :img="item.imgurl ? item.imgurl[0] : null" :selected="item.isSelected" :check="true"></Ibaiviet>
            </div>


            <!-- Chức năng -->
            <div :class="[`border-[1px] overflow-y-scroll w-[40%] h-full`,isAdd ? 'bg-green-200' : 'bg-blue-50']">
                <div class="flex flex-col items-center text-xl ">
                    {{ isAdd ? 'Nhập thông tin cho sản phẩm mới' : 'Thông tin sản phẩm' }}
                </div>
                <!-- thông tin -->
                <div class="w-full flex flex-col items-center gap-3">

                    <div class="w-full flex pt-4">
                        <div class="w-[20%] ml-[5%]">
                            Tên:
                        </div>
                        <div class="w-[70%]">
                            <UInput v-model="TenInp" placeholder="Nhập tên sản phẩm . . ."></UInput>
                        </div>
                    </div>

                    <div class="w-full flex">
                        <div class="w-[20%] ml-[5%]">
                            Giá:
                        </div>
                        <div class="w-[70%]">
                            <UInput v-model="GiaInp" placeholder="Bỏ trống = 'Liên hệ báo giá'"></UInput>
                        </div>
                    </div>

                    <div class="w-full flex">
                        <div class="w-[20%] ml-[5%]">
                            Phân loại:
                        </div>
                        <div class="w-[70%]">
                            <USelectMenu v-model="plselected" :options="menuPhanLoai" ></USelectMenu>
                        </div>
                    </div>

                    <div class="w-full flex">
                        <div class="w-[20%] ml-[5%]">
                            Kích thước:
                        </div>
                        <div class="w-[70%]">
                            <UInput v-model="KichThuocInp" placeholder="Nhập kích thước . . ."></UInput>
                        </div>
                    </div>

                    <div class="w-full flex">
                        <div class="w-[20%] ml-[5%]">
                            Liên kết tiktok:
                        </div>
                        <div class="w-[70%]">
                            <UInput v-model="TikTokInp" placeholder="link TikTok . . ."></UInput>
                        </div>
                    </div>

                    <div class="w-full flex">
                        <div class="w-[20%] ml-[5%]">
                            Liên kết FB:
                        </div>
                        <div class="w-[70%]">
                            <UInput v-model="FBInp" placeholder="link FaceBook . . ."></UInput>
                        </div>
                    </div>

                    <div class="w-full flex">
                        <div class="w-[20%] ml-[5%]">
                            Ảnh:
                        </div>
                        <div class="w-[70%] " ref="dropZoneRef">
                            <UInput type="file" accept="image/*" multiple @change="onSelectFile"></UInput>
                        </div>
                        <UButton @click="addimg()" class="bg-blue-400 hover:bg-blue-600">
                                Add
                            </UButton>
                    </div>

                    <div class="w-full flex">
                        <div class="w-[20%] ml-[5%]">
                            Mô tả sản phẩm:
                        </div>
                        <div class="w-[70%]">
                            <UTextarea v-model="MoTaInp" :rows = '7' placeholder="Nhập mô tả . . ."></UTextarea>
                        </div>
                    </div>

                    <div class="w-full grid grid-cols-2">
                        <div class="flex flex-col items-center">
                            <UButton @click="updateSP()" v-if="!isAdd" class="bg-blue-400 hover:bg-blue-600">
                                Cập nhật
                            </UButton>

                            <UButton @click="addSP()" v-if="isAdd" class="bg-blue-400 hover:bg-blue-600">
                                Hoàn thành
                            </UButton>
                        </div>
                        <div class="flex flex-col items-center">
                            <UButton v-if="!isAdd" @click="delSP()" class="bg-red-400 hover:bg-red-600">
                                Xóa
                            </UButton>
                            <UButton @click="createFormAdd()" v-if="isAdd" class="bg-gray-400 hover:bg-gray-500">
                                Hủy
                            </UButton>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

    </div>
</template>
<script setup >
    definePageMeta({
        layout: 'admin',
    })

    import { ref } from "vue";
    // Variable here

    const menuPhanLoai = ref(['Chưa phân loại','Tôn Panel','Vách Ngăn Panel','Mút Xốp','Băng Keo']);
    const plselected = ref(menuPhanLoai.value[0]);
    const isAdd = ref(false);
    const indexSelected = ref(null);
    const _idsp = ref('');
    const TenInp = ref('');
    const GiaInp = ref('');
    const KichThuocInp = ref('');
    const TikTokInp = ref('');
    const FBInp = ref('');
    const ShopeeInp = ref('');
    const MoTaInp = ref('');
    const items = ref([]);
    const listimg = ref([]);
    //Script here


    const fileInput = ref(null);
    let selectedFile = null;
    const onSelectFile = (event) =>
    {
        console.log(event.target.files);
        const input = event.target.files;
        fileInput.value = input;
        console.log("fileInput :" );
        console.log(fileInput.value);
        const list = ref([]);
        listimg.value = list.value;
        for(let index = 0 ; index < fileInput.value.length; index++)
        {
            // formData.append('file',fileInput.value[index]);
            listimg.value.push('/imgs/'+ fileInput.value[index].name);
        }
        console.log("listimg: ");
        console.log(listimg.value);
    }

    // Function Thêm ảnh
    const addimg = async () =>
    {
        try {
            const formData = new FormData();
            for(const index in fileInput.value)
            {
                formData.append('file',fileInput.value[index]);
            }
            console.log(formData);

            console.log('Chay API client');
            await $fetch('/api/imgs/add',{
                method:'POST',
                body: formData,
            });
        } catch (error) {
            console.log('Lỗi chạy API client');
        }
    }

    // Thêm sản phẩm
    const addSP = async () =>{
        try {
            console.log('Chay addimg');
            await addimg();
            console.log('Chay addsp');
            console.log(listimg.value);
            const obj = ref(
                {
                    ten: TenInp.value,
                    gia: (!GiaInp.value || GiaInp.value=='' ) ? 0 : GiaInp.value,
                    phanLoai: plselected.value,
                    kichThuoc: KichThuocInp.value,
                    link:{
                        tikTok: TikTokInp.value,
                        faceBook: FBInp.value,
                        shopee: ShopeeInp.value,
                    },
                    moTa: MoTaInp.value,
                    imgurl: listimg.value,
                }
            )
            console.log(obj.value);

            const {data,error} = await useFetch('/api/sanpham/add',{
                method: 'POST',
                body: JSON.parse(JSON.stringify(obj.value)),
            });
            if(data)
            {
                alert("Thêm sản phẩm thành công");
            }
            else
            {
                alert("Thêm sản phẩm thất bại");
            }
            clearInput();
            createFormAdd();
            loadF();
        } catch (error) {
            alert("Thêm sản phẩm thất bại");
            loadF();
        }
    }

    // Xóa sản phẩm
    const delSP = async () =>{

        const result = confirm("Bạn có chắc chắn muốn xóa");
        if(result)
        {
            try {
                console.log('Chạy xóa ảnh');
                console.log('id = ' + _idsp.value);
                const {data,error} = await useFetch('/api/sanpham/del',{
                    method: 'POST',
                    body:{
                        _id: _idsp.value,
                    },
                });
                if(data)
                {
                    alert("Xóa sản phẩm thành công");
                }
                else
                {
                    alert("Xóa sản phẩm thất bại");
                }
                indexSelected.value = null;
                clearInput();
                loadF();
            } catch (error) {
                alert("Xóa phẩm thất bại catch");
                loadF();
            }
        }
    }

    // Cập nhật sản phẩm
    const updateSP = async () =>{
        try {
            console.log('Chay addimg');
            await addimg();
            console.log('Chay update');
            console.log(listimg.value);
            const obj = ref(
                {
                    _id: _idsp.value,
                    ten: TenInp.value,
                    gia: (!GiaInp.value || GiaInp.value=='' ) ? 0 : GiaInp.value,
                    phanLoai: plselected.value,
                    kichThuoc: KichThuocInp.value,
                    link:{
                        tikTok: TikTokInp.value,
                        faceBook: FBInp.value,
                        shopee: ShopeeInp.value,
                    },
                    moTa: MoTaInp.value,
                    imgurl: listimg.value,
                }
            )
            console.log(obj.value);

            const {data,error} = await useFetch('/api/sanpham/update',{
                method: 'POST',
                body: JSON.parse(JSON.stringify(obj.value)),
            });
            if(data.value)
            {
                alert("Cập nhật phẩm thành công");
            }
            else
            {
                alert("Cập nhật sản phẩm thất bại");
            }
            clearInput();
            loadF();
        } catch (error) {
            alert("Cập nhật sản phẩm thất bại");
            loadF();
        }
    }


    const clearInput = () =>
    {
        if(indexSelected.value!=null)
        {
            items.value[indexSelected.value].isSelected=false;
        }
        listimg.value = [];
        TenInp.value = '';
        GiaInp.value = '';
        KichThuocInp.value = '';
        TikTokInp.value = '';
        FBInp.value = '';
        MoTaInp.value = '';
        ShopeeInp.value = '';
        plselected.value= menuPhanLoai.value[0];
    }
    
    const setInput = (item ) =>
    {

        TenInp.value = item.ten;
        GiaInp.value = item.gia;
        KichThuocInp.value = item.kichThuoc;
        TikTokInp.value = item.link.tikTok;
        FBInp.value = item.link.faceBook;
        ShopeeInp.value = item.link.shopee;
        MoTaInp.value = item.moTa;
        listimg.value = item.imgurl;
        for(const i in menuPhanLoai.value)
        {
            if(item.phanLoai === menuPhanLoai.value[i])
            {
                plselected.value=menuPhanLoai.value[i];
                break;
            }
        }
    }

    const reselected = async (value) =>
    {
        if(!isAdd.value)
        {
            for(const i in items.value)
            {
                if(items.value[i]._id==value)
                {

                    await clearInput();
                    items.value[i].isSelected = true;
                    await setInput(items.value[i]);
                    indexSelected.value = i;
                    _idsp.value = value;
                    console.log('id = ' + _idsp.value);
                    break;
                }
            }
        }
    }

    const createFormAdd = () =>{
        isAdd.value = !isAdd.value;
        clearInput();
        
    }


    const loadF = async () =>{
        try {
            const {data:i4SP} = await useFetch('/api/sanpham/list');
            items.value = i4SP.value;
            if(i4SP.value)
            {
                items.value = i4SP.value;
            }
            else{
                console.log('Không tìm thấy sản phẩm client');
            }
        } catch (error) {
            console.log('Không tìm thấy sản phẩm catch client');
            console.log(error);

        }
    }

    loadF();

  
</script>
