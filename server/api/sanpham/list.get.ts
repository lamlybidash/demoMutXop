import sanPhamModel from "~/server/models/sanpham";

export default defineEventHandler(async () => {

    try {
        const result = await sanPhamModel.find();
        return result;
    } catch (error) {
        console.log("loi truy van list san pham");
        console.log(error);
        return false;
    }
})