import sanPhamModel from "~/server/models/sanpham";
export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);
        const result = await sanPhamModel.findOne({
            _id: body._id,
        });
        return result
    }
    catch(e){
        console.log("loi tim kiem");
        console.log(e);
        return false;
    }
})