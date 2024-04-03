import mongoose from "mongoose";

const sanPhamSchema = new mongoose.Schema({
    ten:
    {
        type: String,
        required: true,
    },
    gia:
    {
        type: Number,
        default: 0,
    },
    phanLoai:
    {
        type: String,
        default: 'Chưa phân loại',
    },
    kichThuoc:
    {
        type: String,
    },
    link:
    {
        tikTok:
        {
            type: String,
            default: null,
        },
        faceBook:
        {
            type: String,
            default: null,
        },
        shopee:
        {
            type: String,
            default: null,
        }
    },
    moTa:
    {
        type: String,
    },
    imgurl:
    {
        type: Array,
        default: [],
    }


})

const sanPhamModel = mongoose.model('SanPham',sanPhamSchema);

export default sanPhamModel;