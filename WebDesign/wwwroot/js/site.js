// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var app = new Vue({
    el: '#home',
    data: {
        products: [
            { status: false, id: 0, name: "Почему Я Гель для душа", cost: 345 + " руб.", about: "Очищающий гель для душа без сульфатов с запахом манго", rate: 4.3, photo: "https://cdn.100sp.ru/cache_pictures/328097071/thumb400" },
            { status: false, id: 1, name: "Шампунь", cost: 450 + " руб.", about: "Увлажняющий шампунь для сухих волос с маслом авокадо", rate: 4.8, photo: "https://cs5.livemaster.ru/storage/cd/61/8ea61989d7fb7c86b8c9b801fdce--kosmetika-ruchnoj-raboty-organicheskij-shampun-zheltok-s-limo.jpg" },
            { status: false, id: 2, name: "Крем для рук", cost: 250 + " руб.", about: "Питательный крем для рук с экстрактом алоэ вера", rate: 4.5, photo: "https://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/1307369/x60uQlzUXL7NhMIRA12NbQ.jpeg" },
            { status: false, id: 3, name: "Маска для лица", cost: 590 + " руб.", about: "Очищающая маска для лица с глиной и экстрактом зеленого чая", rate: 4.7, photo: "https://sun9-80.userapi.com/impg/xNofb3tlhFO2i2j4Y5F90-wodZnNorAYsSrjyQ/wcCV0K1K22E.jpg?size=1280x1280&quality=96&sign=f2b8d28269a58dc648fbcde0911c3eb0&c_uniq_tag=MsEYvovbpainPQXqHfgqUdcrPZUPNh7LPsfKB6Bp5Og&type=album" },
            { status: false, id: 4, name: "Дезодорант", cost: 190 + " руб.", about: "Антиперспирантный дезодорант с запахом лаванды", rate: 4.2, photo: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/c39e3950482469.58d1af389436f.jpg" },
            { status: false, id: 5, name: "Зубная паста", cost: 120 + " руб.", about: "Отбеливающая зубная паста со вкусом мяты", rate: 4.1, photo: "https://budgetbeautyblog.com/wp-content/uploads/2020/05/DavidsToothpaste-copy-2048x1310-1.jpg" },
            { status: false, id: 6, name: "Гель для бритья", cost: 290 + " руб.", about: "Увлажняющий гель для бритья с алоэ вера и витамином Е", rate: 4.6, photo: "https://mywendy.ru/image/cache/catalog/product/17319_6-800x800.jpg" },
            { status: false, id: 7, name: "Солнцезащитный крем", cost: 690 + " руб.", about: "Защитный крем от солнца с фактором SPF 50+", rate: 4.9, photo: "https://cdn.100sp.ru/pictures/1096156158" },
            { status: false, id: 8, name: "Парфюм", cost: 1290 + " руб.", about: "Женский парфюм с нотами цветов и фруктов", rate: 4.4, photo: "https://i.pinimg.com/736x/9b/96/94/9b96946a1f335560958ba1529f89b8ad.jpg" },
            { status: false, id: 9, name: "Массажер для тела", cost: 1590 + " руб.", about: "Массажер для тела с различными насадками и режимами", rate: 4.7, photo: "https://www.livingjoy.ru/sites/default/files/inline-images/zrpyzh9nmzk.jpg" }
        ],
        in_basket: JSON.parse(localStorage.getItem('in_basket')) || []
    },
    methods: {
        trash: function (product) {
            product.status = !product.status

            if (product.status) {
                this.in_basket.push(product.id);
            }
            else {
                this.in_basket.splice(this.in_basket.indexOf(product.id), 1);
            }
            localStorage.setItem('in_basket', JSON.stringify(this.in_basket));
        }
    }
})
