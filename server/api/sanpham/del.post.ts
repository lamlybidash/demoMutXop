import sanPhamModel from "~/server/models/sanpham";
export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);
        await sanPhamModel.findOneAndDelete({
            _id: body._id,
        });
        return true;
    }
    catch(e){
        console.log("Lỗi gì đó ở xóa sản phẩm API");
        console.log(e);
        return false;
    }
})