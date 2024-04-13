export default defineEventHandler(async (event) =>{
    try
    {
        // console.log('chay API');
        // const files = await readMultipartFormData(event);
        // if(!files)
        // {
        //    return createError({statusCode: 500, statusMessage:'Có lỗi nào đó ở API'});
        // }
        // console.log(files.length);
        
        // for(let index = 0 ; index < files.length - 2 ; index++)
        // {
        //     await useStorage().setItemRaw(`fs:${files[index].filename}`,files[index].data);
        // }

        console.log("Thanh cong");
        return "Hello";
    }
    catch (error)
    {
        console.log("Loi");
        createError({statusCode: 500, statusMessage:'Có lỗi nào đó ở API'});
    }
})