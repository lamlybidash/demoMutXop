<template>
    <!-- Header -->
    <NuxtLoadingIndicator color="red" />
    <div class="h-screen">
        <div class="h-[10%]">
            <div class="w-full">
                <div class="w-full h-12 bg-blue-500 flex justify-center items-center">
                    <div class="text-white px-3">
                        Công ty cách nhiệt Thanh Ngân kính chào!
                    </div>
                    <div class="text-white px-3">
                        <UIcon name="material-symbols:phone-android-outline" dynamic />
                        Hotline: 0983516822
                    </div>
                    <div class="text-white px-3">
                        <UIcon name="ic:round-location-on" dynamic />
                        Địa chỉ: Thành phố Biên Hòa-Đồng Nai
                    </div>
                </div>
                <div class="w-full h-[100px]  border-b-[1px] flex justify-center items-center">
                    <img class="w-[7%] cursor-pointer" @click="navigateTo('/')" src="https://raw.githubusercontent.com/lamlybidash/asset/main/1397_%20ko%20n%E1%BB%81n.png" />
                    <div class=" text-xl b px-3 cursor-pointer" @click="navigateTo('/')">
                        TRANG CHỦ
                    </div>
                    <div class="text-xl border-l-[1px] px-2 flex cursor-pointer" @click="navigateTo('/admin/sanpham')">
                        SẢN PHẨM
                    </div>
                    <div class="sm:text-sm md:text-base lg:text-lg xl:text-xl border-l-[1px] px-2 cursor-pointer" @click="navigateTo('/admin/baiviet')">
                        BÀI VIẾT
                    </div>
                    <div>
                        <UInput
                            type="text"
                            size="xl"
                            variant="outline"
                            placeholder="Tìm kiếm sản phẩm..."
                            trailing
                            color="white"
                            icon="i-heroicons-magnifying-glass-20-solid"
                        ></UInput>
                    </div>
                </div>
            </div>
        </div>
            <!-- Lót Head -->
        
        <slot />
    </div>
    

    <!-- Bottom -->
    <!-- <div>
        
        <div class="w-full border-t-[1px] flex flex-col items-center justify-center p-1">
            <div>
                <UIcon name="material-symbols-light:license" dynamic></UIcon>
                Bản quyền thuộc về CÔNG TY TNHH THANH NGÂN
            </div>
        </div>
    </div> -->
</template>
<script setup>
    Duy changed

</script>
