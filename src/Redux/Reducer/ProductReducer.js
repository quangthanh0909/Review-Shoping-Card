
var initialState=[
    {
        id:1,
        name:'Iphone',
        image:'https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-400x460.png',
        status:'Sản Phẩm do Apple tạo ra',
        price:100,
        invetory:10
    },
    {
        id:2,
        name:'Samsung',
        image:'https://cdn.tgdd.vn/Products/Images/42/191276/samsung-galaxy-note-10-silver-400x460.png',
        status:'Sản Phẩm do Samsung tạo ra',
        price:150,
        invetory:7
    },
    {
        id:3,
        name:'Nokia',
        image:'https://i.ytimg.com/vi/_l3TXuOcRao/maxresdefault.jpg',
        status:'Sản Phẩm do Nokia tạo ra',
        price:200,
        invetory:8
    },
];

const reducer=(state=initialState,action)=>{
    return state;
}
export default reducer