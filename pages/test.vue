<template>
    <div>
        <div class="flex justify-center bg-slate-100 p-6">
            File 1<input type="file" @change="handleFileChange" multiple />
            File 2<input type="file" @change="onSelectFile" multiple />
            <UButton @click="check">Check</UButton>
        </div>
    </div>
</template>
<script setup>

    const fileInput = ref(null);
    let selectedFile = null;
    const fileA = ref();
    const fileB = ref();

    const handleFileChange = (event) => 
    {
        const input = event.target;
        fileA.value = input.files;
        console.log(input.files);
    };

    const onSelectFile = (event) => 
    {
        const input = event.target;
        fileB.value = input.files;
        console.log(input.files);
    };

    const check = () =>
    {
        console.log('File A :');
        console.log(fileA.value);
        console.log('File B :');
        console.log(fileB.value);
    }
</script>

