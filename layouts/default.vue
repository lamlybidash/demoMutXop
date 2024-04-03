<template>
    <!-- Header -->
    <div class="fixed w-full z-50  ">
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
        <div class="w-full h-[100px] bg-white border-b-[1px] flex justify-center items-center">
            <img class="w-[8%] cursor-pointer" @click="navigateTo('/')" src="https://raw.githubusercontent.com/lamlybidash/asset/main/1397_%20ko%20n%E1%BB%81n.png" />
            <div class=" text-xl b px-3 cursor-pointer" @click="navigateTo('/')">
                TRANG CHỦ
            </div>
            <div class="text-xl border-l-[1px] px-2 flex items-center">
                <NuxtLink href="/sanpham">SẢN PHẨM</NuxtLink>                
            </div>
            <div class="sm:text-sm md:text-base lg:text-lg xl:text-xl border-l-[1px] px-2 cursor-pointer" @click="navigateTo('/baiviet')">
                BÀI VIẾT
            </div>
            <div class="text-xl border-l-[1px] px-2 cursor-pointer" @click="navigateTo('/lienhe')">
                LIÊN HỆ
            </div>
            <div class="text-xl border-l-[1px] px-2 cursor-pointer" @click="navigateTo('/gioithieu')">
                GIỚI THIỆU
            </div>
            <!-- <div>
                <UInput
                    type="text"
                    size="xl"
                    variant="outline"
                    placeholder="Tìm kiếm sản phẩm..."
                    trailing
                    color="white"
                    icon="i-heroicons-magnifying-glass-20-solid"
                ></UInput>
            </div> -->
        </div>
    </div>
    <!-- Lót Head -->
    <div class="h-12"></div><div class="h-[100px]"></div>
    <div class="flex justify-end">
        <div class="grid grid-rows-4 fixed pt-[20%] ">
            
            <div class=" w-[50px] h-[50px] m-2 rounded-full" >
                <NuxtLink to="http://google.com" target="_blank">
                    <img src="https://raw.githubusercontent.com/lamlybidash/asset/main/accept-phone-icon-social-icon-set-png.webp"/>
                </NuxtLink>
            </div>
            
            
            <div class=" w-[50px] h-[50px] m-2 rounded-full" @click="navigateTo('/')">
                <NuxtLink to="http://messenger.com" target="_blank">
                    <img src="https://raw.githubusercontent.com/lamlybidash/asset/main/Facebook-Messenger-Logo.png"/>
                </NuxtLink>
            </div>
            <div class=" w-[50px] h-[50px] m-2 rounded-lg overflow-hidden">
                <NuxtLink to="https://zaloweb.me/" target="_blank">
                    <img src="https://raw.githubusercontent.com/lamlybidash/asset/main/Logo-Zalo-App-Rec.webp"/>
                </NuxtLink>
            </div>
            <div class=" w-[50px] h-[50px] m-2 rounded-full" @click="navigateTo('/')">
                <NuxtLink to="http://facebook.com" target="_blank">
                    <img src="https://raw.githubusercontent.com/lamlybidash/asset/main/Facebook_Logo_(2019).png"/>
                </NuxtLink>
            </div>
            <div class=" w-[50px] h-[50px] m-2 rounded-full" @click="navigateTo('/')">
                <NuxtLink to="http://tiktok.com" target="_blank">
                    <img src="https://raw.githubusercontent.com/lamlybidash/asset/main/logotiktok.png"/>
                </NuxtLink>
            </div>
        </div>
    </div>
    
    <slot/>

    <!-- Bottom -->
    <div>
        <div class="grid grid-cols-3  w-full bg-slate-200 items-center justify-center p-5">
            <div class="flex-col flex items-center gap-5">
                <img class="h-[80px]"  src="https://raw.githubusercontent.com/lamlybidash/asset/main/1397_%20ko%20n%E1%BB%81n.png" />
                <div class="w-3/4">
                    Công Ty TNHH Cách Nhiệt THANH NGÂN là công ty chuyên sản xuất, gia công và phân phối về sản phẩm màng xốp PE Foam, mốp xốp EPS, Xốp hơi, Màng pe, Túi xốp hơi và các vật liệu bao bì đóng gói khác.
                </div>
            </div>
            <div class="flex-col flex items-center">
                <div class="grid grid-rows-5">
                    <div class="text-xl font-extrabold">
                        VỀ CHÚNG TÔI
                    </div>
                    <div>
                        Trang chủ
                    </div>
                    <div>
                        Giới thiệu
                    </div>
                    <div>
                        Sản phẩm dịch vụ
                    </div>
                    <div>
                        Liên hệ
                    </div>
                </div>
                
                
            </div>
            <div class="flex-col flex items-center">
                <div class="grid grid-rows-5">
                    <div class="text-xl font-extrabold">
                        THÔNG TIN LIÊN HỆ
                    </div>
                    <div>
                        Công ty TNHH Thanh Ngân
                    </div>
                    <div>
                        Địa chỉ: Bình Dương
                    </div>
                    <div>
                        Điện thoại: 0983516822
                    </div>
                    <div>
                        Email: cachnhietthanhngan@gmail.com
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full border-t-[1px] flex flex-col items-center justify-center p-1">
            <div>
                <UIcon name="material-symbols-light:license" dynamic></UIcon>
                Bản quyền thuộc về CÔNG TY TNHH THANH NGÂN
            </div>
        </div>
    </div>
</template>
<script setup>
    const items = [
        [
            {
                label: 'SẢN PHẨM 1',
            },
            {
                label: 'SẢN PHẨM 2',
            },
        ],
    ];

</script>