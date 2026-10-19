const products = [
    {
        "id": 1,
        "name": "carrtier Luxury Edition 1",
        "brand": "CARRTIER",
        "price": "₹1500",
        "image": "assets/images/brands/CARRTIER/cartier-1.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this carrtier timepiece. A perfect blend of style and precision."
    },
    {
        "id": 2,
        "name": "carrtier Luxury Edition 2",
        "brand": "CARRTIER",
        "price": "₹1500",
        "image": "assets/images/brands/CARRTIER/cartier-2.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this carrtier timepiece. A perfect blend of style and precision."
    },
    {
        "id": 3,
        "name": "carrtier Luxury Edition 3",
        "brand": "CARRTIER",
        "price": "₹1500",
        "image": "assets/images/brands/CARRTIER/cartier-3.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this carrtier timepiece. A perfect blend of style and precision."
    },
    {
        "id": 4,
        "name": "carrtier Luxury Edition 4",
        "brand": "CARRTIER",
        "price": "₹3200",
        "image": "assets/images/brands/CARRTIER/cartier-4.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this carrtier timepiece. A perfect blend of style and precision."
    },
    {
        "id": 5,
        "name": "carrtier Luxury Edition 5",
        "brand": "CARRTIER",
        "price": "₹1650",
        "image": "assets/images/brands/CARRTIER/cartier-5.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this carrtier timepiece. A perfect blend of style and precision."
    },
    {
        "id": 6,
        "name": "casi0 Luxury Edition 1",
        "brand": "CASI0",
        "price": "₹700",
        "image": "assets/images/brands/CASI0/casio-1.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this casi0 timepiece. A perfect blend of style and precision."
    },
    {
        "id": 7,
        "name": "casi0 Luxury Edition 2",
        "brand": "CASI0",
        "price": "₹700",
        "image": "assets/images/brands/CASI0/casio-2.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this casi0 timepiece. A perfect blend of style and precision."
    },
    {
        "id": 8,
        "name": "casi0 Luxury Edition 3",
        "brand": "CASI0",
        "price": "₹1000",
        "image": "assets/images/brands/CASI0/casio-3.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this casi0 timepiece. A perfect blend of style and precision."
    },
    {
        "id": 9,
        "name": "G-sh0k Luxury Edition 1",
        "brand": "G-SH0K",
        "price": "₹2000",
        "image": "assets/images/brands/G-SH0K/gshock-1.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this G-sh0k timepiece. A perfect blend of style and precision."
    },
    {
        "id": 10,
        "name": "G-sh0k Luxury Edition 2",
        "brand": "G-SH0K",
        "price": "₹2000",
        "image": "assets/images/brands/G-SH0K/gshock-2.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this G-sh0k timepiece. A perfect blend of style and precision."
    },
    {
        "id": 11,
        "name": "G-sh0k Luxury Edition 3",
        "brand": "G-SH0K",
        "price": "₹2000",
        "image": "assets/images/brands/G-SH0K/gshock-3.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this G-sh0k timepiece. A perfect blend of style and precision."
    },
    {
        "id": 12,
        "name": "G-sh0k Luxury Edition 4",
        "brand": "G-SH0K",
        "price": "₹2000",
        "image": "assets/images/brands/G-SH0K/gshock-4.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this G-sh0k timepiece. A perfect blend of style and precision."
    },
    {
        "id": 13,
        "name": "G-sh0k Luxury Edition 5",
        "brand": "G-SH0K",
        "price": "₹2000",
        "image": "assets/images/brands/G-SH0K/gshock-5.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this G-sh0k timepiece. A perfect blend of style and precision."
    },
    {
        "id": 14,
        "name": "G-sh0k Luxury Edition 6",
        "brand": "G-SH0K",
        "price": "₹2000",
        "image": "assets/images/brands/G-SH0K/gshock-6.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this G-sh0k timepiece. A perfect blend of style and precision."
    },
    {
        "id": 15,
        "name": "G-sh0k Luxury Edition 7",
        "brand": "G-SH0K",
        "price": "₹2000",
        "image": "assets/images/brands/G-SH0K/gshock-7.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this G-sh0k timepiece. A perfect blend of style and precision."
    },
    {
        "id": 16,
        "name": "G-sh0k Luxury Edition 8",
        "brand": "G-SH0K",
        "price": "₹2000",
        "image": "assets/images/brands/G-SH0K/gshock-8.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this G-sh0k timepiece. A perfect blend of style and precision."
    },
    {
        "id": 17,
        "name": "G-sh0k Luxury Edition 9",
        "brand": "G-SH0K",
        "price": "₹2000",
        "image": "assets/images/brands/G-SH0K/gshock-9.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this G-sh0k timepiece. A perfect blend of style and precision."
    },
    {
        "id": 18,
        "name": "G-sh0k Luxury Edition 10",
        "brand": "G-SH0K",
        "price": "₹2000",
        "image": "assets/images/brands/G-SH0K/gshock-10.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this G-sh0k timepiece. A perfect blend of style and precision."
    },
    {
        "id": 19,
        "name": "HUBl0T Luxury Edition 1",
        "brand": "HUBl0T",
        "price": "₹2000",
        "image": "assets/images/brands/HUBl0T/hublot-1.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this HUBl0T timepiece. A perfect blend of style and precision."
    },
    {
        "id": 20,
        "name": "HUBl0T Luxury Edition 2",
        "brand": "HUBl0T",
        "price": "₹2000",
        "image": "assets/images/brands/HUBl0T/hublot-2.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this HUBl0T timepiece. A perfect blend of style and precision."
    },
    {
        "id": 21,
        "name": "HUBl0T Luxury Edition 3",
        "brand": "HUBl0T",
        "price": "₹2000",
        "image": "assets/images/brands/HUBl0T/hublot-3.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this HUBl0T timepiece. A perfect blend of style and precision."
    },
    {
        "id": 22,
        "name": "HUBl0T Luxury Edition 4",
        "brand": "HUBl0T",
        "price": "₹2000",
        "image": "assets/images/brands/HUBl0T/hublot-4.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this HUBl0T timepiece. A perfect blend of style and precision."
    },
    {
        "id": 23,
        "name": "HUBl0T Luxury Edition 5",
        "brand": "HUBl0T",
        "price": "₹2000",
        "image": "assets/images/brands/HUBl0T/hublot-5.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this HUBl0T timepiece. A perfect blend of style and precision."
    },
    {
        "id": 24,
        "name": "HUBl0T Luxury Edition 6",
        "brand": "HUBl0T",
        "price": "₹2000",
        "image": "assets/images/brands/HUBl0T/hublot-6.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this HUBl0T timepiece. A perfect blend of style and precision."
    },
    {
        "id": 25,
        "name": "HUBl0T Luxury Edition 7",
        "brand": "HUBl0T",
        "price": "₹2000",
        "image": "assets/images/brands/HUBl0T/hublot-7.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this HUBl0T timepiece. A perfect blend of style and precision."
    },
    {
        "id": 26,
        "name": "HUBl0T Luxury Edition 8",
        "brand": "HUBl0T",
        "price": "₹2000",
        "image": "assets/images/brands/HUBl0T/hublot-8.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this HUBl0T timepiece. A perfect blend of style and precision."
    },
    {
        "id": 27,
        "name": "00mega Luxury Edition 1",
        "brand": "00MEGA",
        "price": "₹1350",
        "image": "assets/images/brands/00MEGA/omega-1.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this 00mega timepiece. A perfect blend of style and precision."
    },
    {
        "id": 28,
        "name": "00mega Luxury Edition 2",
        "brand": "00MEGA",
        "price": "₹1999",
        "image": "assets/images/brands/00MEGA/omega-2.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this 00mega timepiece. A perfect blend of style and precision."
    },
    {
        "id": 29,
        "name": "00mega Luxury Edition 3",
        "brand": "00MEGA",
        "price": "₹3400",
        "image": "assets/images/brands/00MEGA/omega-3.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this 00mega timepiece. A perfect blend of style and precision."
    },
    {
        "id": 30,
        "name": "00mega Luxury Edition 4",
        "brand": "00MEGA",
        "price": "₹1350",
        "image": "assets/images/brands/00MEGA/omega-4.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this 00mega timepiece. A perfect blend of style and precision."
    },
    {
        "id": 31,
        "name": "00mega Luxury Edition 5",
        "brand": "00MEGA",
        "price": "₹1500",
        "image": "assets/images/brands/00MEGA/omega-5.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this 00mega timepiece. A perfect blend of style and precision."
    },
    {
        "id": 32,
        "name": "00mega Luxury Edition 6",
        "brand": "00MEGA",
        "price": "₹1350",
        "image": "assets/images/brands/00MEGA/omega-6.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this 00mega timepiece. A perfect blend of style and precision."
    },
    {
        "id": 33,
        "name": "R0lex Luxury Edition 1",
        "brand": "R0LEX",
        "price": "₹1300",
        "image": "assets/images/brands/R0LEX/rolex-1.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this R0lex timepiece. A perfect blend of style and precision."
    },
    {
        "id": 34,
        "name": "R0lex Luxury Edition 2",
        "brand": "R0LEX",
        "price": "₹1300",
        "image": "assets/images/brands/R0LEX/rolex-2.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this R0lex timepiece. A perfect blend of style and precision."
    },
    {
        "id": 35,
        "name": "R0lex Luxury Edition 3",
        "brand": "R0LEX",
        "price": "₹1500",
        "image": "assets/images/brands/R0LEX/rolex-3.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this R0lex timepiece. A perfect blend of style and precision."
    },
    {
        "id": 36,
        "name": "R0lex Luxury Edition 4",
        "brand": "R0LEX",
        "price": "₹1500",
        "image": "assets/images/brands/R0LEX/rolex-4.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this R0lex timepiece. A perfect blend of style and precision."
    },
    {
        "id": 37,
        "name": "R0lex Luxury Edition 5",
        "brand": "R0LEX",
        "price": "₹1500",
        "image": "assets/images/brands/R0LEX/rolex-5.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this R0lex timepiece. A perfect blend of style and precision."
    },
    {
        "id": 38,
        "name": "R0lex Luxury Edition 6",
        "brand": "R0LEX",
        "price": "₹1800",
        "image": "assets/images/brands/R0LEX/rolex-6.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this R0lex timepiece. A perfect blend of style and precision."
    },
    {
        "id": 39,
        "name": "R0lex Luxury Edition 7",
        "brand": "R0LEX",
        "price": "₹1300",
        "image": "assets/images/brands/R0LEX/rolex-7.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this R0lex timepiece. A perfect blend of style and precision."
    },
    {
        "id": 40,
        "name": "R0lex Luxury Edition 8",
        "brand": "R0LEX",
        "price": "₹1500",
        "image": "assets/images/brands/R0LEX/rolex-8.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this R0lex timepiece. A perfect blend of style and precision."
    },
    {
        "id": 41,
        "name": "R0lex Luxury Edition 9",
        "brand": "R0LEX",
        "price": "₹1600",
        "image": "assets/images/brands/R0LEX/rolex-9.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this R0lex timepiece. A perfect blend of style and precision."
    },
    {
        "id": 42,
        "name": "R0lex Luxury Edition 10",
        "brand": "R0LEX",
        "price": "₹1700",
        "image": "assets/images/brands/R0LEX/rolex-10.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this R0lex timepiece. A perfect blend of style and precision."
    },
    {
        "id": 43,
        "name": "R0lex Luxury Edition 11",
        "brand": "R0LEX",
        "price": "₹1900",
        "image": "assets/images/brands/R0LEX/rolex-11.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this R0lex timepiece. A perfect blend of style and precision."
    },
    {
        "id": 44,
        "name": "R0lex Luxury Edition 12",
        "brand": "R0LEX",
        "price": "₹1600",
        "image": "assets/images/brands/R0LEX/rolex-12.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this R0lex timepiece. A perfect blend of style and precision."
    },
    {
        "id": 45,
        "name": "R0lex Luxury Edition 13",
        "brand": "R0LEX",
        "price": "₹1500",
        "image": "assets/images/brands/R0LEX/rolex-13.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this R0lex timepiece. A perfect blend of style and precision."
    },
    {
        "id": 46,
        "name": "Tisot Luxury Edition 1",
        "brand": "TISS0T",
        "price": "₹2000",
        "image": "assets/images/brands/TISS0T/tisot-1.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this Tisot timepiece. A perfect blend of style and precision."
    },
    {
        "id": 47,
        "name": "Tisot Luxury Edition 2",
        "brand": "TISS0T",
        "price": "₹2000",
        "image": "assets/images/brands/TISS0T/tisot-2.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this Tisot timepiece. A perfect blend of style and precision."
    },
    {
        "id": 48,
        "name": "Tisot Luxury Edition 3",
        "brand": "TISS0T",
        "price": "₹2000",
        "image": "assets/images/brands/TISS0T/tisot-3.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this Tisot timepiece. A perfect blend of style and precision."
    },
    {
        "id": 49,
        "name": "Tisot Luxury Edition 4",
        "brand": "TISS0T",
        "price": "₹2000",
        "image": "assets/images/brands/TISS0T/tisot-4.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this Tisot timepiece. A perfect blend of style and precision."
    },
    {
        "id": 50,
        "name": "Tisot Luxury Edition 5",
        "brand": "TISS0T",
        "price": "₹2000",
        "image": "assets/images/brands/TISS0T/tisot-5.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this Tisot timepiece. A perfect blend of style and precision."
    },
    {
        "id": 51,
        "name": "Tisot Luxury Edition 6",
        "brand": "TISS0T",
        "price": "₹2000",
        "image": "assets/images/brands/TISS0T/tisot-6.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this Tisot timepiece. A perfect blend of style and precision."
    },
    {
        "id": 52,
        "name": "AUDEMAS PIGET Luxury Edition 1",
        "brand": "AUDEMAS PIGET",
        "category": "watch",
        "price": "₹3599",
        "image": "assets/images/brands/AUDEMAS PIGET/audemars-piguet-52-1.jpeg",
        "images": [
            "assets/images/brands/AUDEMAS PIGET/audemars-piguet-52-1.jpeg",
            "assets/images/brands/AUDEMAS PIGET/audemars-piguet-52-2.jpeg",
            "assets/images/brands/AUDEMAS PIGET/audemars-piguet-52-3.jpeg",
            "assets/images/brands/AUDEMAS PIGET/audemars-piguet-52-4.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this AUDEMAS PIGET watch. A perfect blend of style and precision."
    },
    {
        "id": 53,
        "name": "HUBl0T Luxury Edition 9",
        "brand": "HUBl0T",
        "category": "watch",
        "price": "₹2499",
        "image": "assets/images/brands/HUBl0T/hublot-53-1.jpeg",
        "images": [
            "assets/images/brands/HUBl0T/hublot-53-1.jpeg",
            "assets/images/brands/HUBl0T/hublot-53-2.jpeg",
            "assets/images/brands/HUBl0T/hublot-53-3.jpeg",
            "assets/images/brands/HUBl0T/hublot-53-4.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this HUBl0T watch. A perfect blend of style and precision."
    },
    {
        "id": 54,
        "name": "00MEGA Luxury Edition 7",
        "brand": "00MEGA",
        "category": "watch",
        "price": "₹3999",
        "image": "assets/images/brands/00MEGA/omega-54-1.jpeg",
        "images": [
            "assets/images/brands/00MEGA/omega-54-1.jpeg",
            "assets/images/brands/00MEGA/omega-55-1.jpeg",
            "assets/images/brands/00MEGA/omega-56-1.jpeg",
            "assets/images/brands/00MEGA/omega-57-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this 00MEGA watch. A perfect blend of style and precision."
    },
    {
        "id": 58,
        "name": "RAD0 Luxury Edition 1",
        "brand": "RAD0",
        "category": "watch",
        "price": "₹1100",
        "image": "assets/images/brands/RAD0/rado-58-1.jpeg",
        "images": [
            "assets/images/brands/RAD0/rado-58-1.jpeg",
            "assets/images/brands/RAD0/rado-58-2.jpeg",
            "assets/images/brands/RAD0/rado-58-3.jpeg",
            "assets/images/brands/RAD0/rado-58-4.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this RAD0 watch. A perfect blend of style and precision."
    },
    {
        "id": 59,
        "name": "RECHAARD MILI Luxury Edition 1",
        "brand": "RECHAARD MILI",
        "category": "watch",
        "price": "₹1499",
        "image": "assets/images/brands/RECHAARD MILI/richard-millie-59-1.jpeg",
        "images": [
            "assets/images/brands/RECHAARD MILI/richard-millie-59-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this RECHAARD MILI watch. A perfect blend of style and precision."
    },
    {
        "id": 60,
        "name": "RECHAARD MILI Luxury Edition 2",
        "brand": "RECHAARD MILI",
        "category": "watch",
        "price": "₹1499",
        "image": "assets/images/brands/RECHAARD MILI/richard-millie-60-1.jpeg",
        "images": [
            "assets/images/brands/RECHAARD MILI/richard-millie-60-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this RECHAARD MILI watch. A perfect blend of style and precision."
    },
    {
        "id": 61,
        "name": "RECHAARD MILI Luxury Edition 3",
        "brand": "RECHAARD MILI",
        "category": "watch",
        "price": "₹1499",
        "image": "assets/images/brands/RECHAARD MILI/richard-millie-61-1.jpeg",
        "images": [
            "assets/images/brands/RECHAARD MILI/richard-millie-61-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this RECHAARD MILI watch. A perfect blend of style and precision."
    },
    {
        "id": 62,
        "name": "RECHAARD MILI Luxury Edition 4",
        "brand": "RECHAARD MILI",
        "category": "watch",
        "price": "₹1499",
        "image": "assets/images/brands/RECHAARD MILI/richard-millie-62-1.jpeg",
        "images": [
            "assets/images/brands/RECHAARD MILI/richard-millie-62-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this RECHAARD MILI watch. A perfect blend of style and precision."
    },
    {
        "id": 63,
        "name": "RECHAARD MILI Luxury Edition 5",
        "brand": "RECHAARD MILI",
        "category": "watch",
        "price": "₹1499",
        "image": "assets/images/brands/RECHAARD MILI/richard-millie-63-1.jpeg",
        "images": [
            "assets/images/brands/RECHAARD MILI/richard-millie-63-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this RECHAARD MILI watch. A perfect blend of style and precision."
    },
    {
        "id": 64,
        "name": "RECHAARD MILI Luxury Edition 6",
        "brand": "RECHAARD MILI",
        "category": "watch",
        "price": "₹1499",
        "image": "assets/images/brands/RECHAARD MILI/richard-millie-64-1.jpeg",
        "images": [
            "assets/images/brands/RECHAARD MILI/richard-millie-64-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this RECHAARD MILI watch. A perfect blend of style and precision."
    },
    {
        "id": 65,
        "name": "RECHAARD MILI Luxury Edition 7",
        "brand": "RECHAARD MILI",
        "category": "watch",
        "price": "₹1499",
        "image": "assets/images/brands/RECHAARD MILI/richard-millie-65-1.jpeg",
        "images": [
            "assets/images/brands/RECHAARD MILI/richard-millie-65-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this RECHAARD MILI watch. A perfect blend of style and precision."
    },
    {
        "id": 66,
        "name": "RECHAARD MILI Luxury Edition 8",
        "brand": "RECHAARD MILI",
        "category": "watch",
        "price": "₹1499",
        "image": "assets/images/brands/RECHAARD MILI/richard-millie-66-1.jpeg",
        "images": [
            "assets/images/brands/RECHAARD MILI/richard-millie-66-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this RECHAARD MILI watch. A perfect blend of style and precision."
    },
    {
        "id": 67,
        "name": "R0LEX Luxury Edition 14",
        "brand": "R0LEX",
        "category": "watch",
        "price": "₹999",
        "image": "assets/images/brands/R0LEX/rolex-67-1.jpeg",
        "images": [
            "assets/images/brands/R0LEX/rolex-67-1.jpeg",
            "assets/images/brands/R0LEX/rolex-67-2.jpeg",
            "assets/images/brands/R0LEX/rolex-67-3.jpeg",
            "assets/images/brands/R0LEX/rolex-67-4.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this R0LEX watch. A perfect blend of style and precision."
    },
    {
        "id": 68,
        "name": "R0LEX Luxury Edition 15",
        "brand": "R0LEX",
        "category": "watch",
        "price": "₹3699",
        "image": "assets/images/brands/R0LEX/rolex-68-1.jpeg",
        "images": [
            "assets/images/brands/R0LEX/rolex-68-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this R0LEX watch. A perfect blend of style and precision."
    },
    {
        "id": 69,
        "name": "TAGG HUER Luxury Edition 1",
        "brand": "TAGG HUER",
        "category": "watch",
        "price": "₹4599",
        "image": "assets/images/brands/TAGG HUER/tag-heuer-69-1.jpeg",
        "images": [
            "assets/images/brands/TAGG HUER/tag-heuer-69-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this TAGG HUER watch. A perfect blend of style and precision."
    },
    {
        "id": 70,
        "name": "T0MMYY HILFEGER Luxury Edition 1",
        "brand": "T0MMYY HILFEGER",
        "category": "watch",
        "price": "₹1350",
        "image": "assets/images/brands/T0MMYY HILFEGER/tommy-hilfiger-70-1.jpeg",
        "images": [
            "assets/images/brands/T0MMYY HILFEGER/tommy-hilfiger-70-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this T0MMYY HILFEGER watch. A perfect blend of style and precision."
    },
    {
        "id": 71,
        "name": "T0MMYY HILFEGER Luxury Edition 2",
        "brand": "T0MMYY HILFEGER",
        "category": "watch",
        "price": "₹1350",
        "image": "assets/images/brands/T0MMYY HILFEGER/tommy-hilfiger-71-1.jpeg",
        "images": [
            "assets/images/brands/T0MMYY HILFEGER/tommy-hilfiger-71-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this T0MMYY HILFEGER watch. A perfect blend of style and precision."
    },
    {
        "id": 72,
        "name": "T0MMYY HILFEGER Luxury Edition 3",
        "brand": "T0MMYY HILFEGER",
        "category": "watch",
        "price": "₹1350",
        "image": "assets/images/brands/T0MMYY HILFEGER/tommy-hilfiger-72-1.jpeg",
        "images": [
            "assets/images/brands/T0MMYY HILFEGER/tommy-hilfiger-72-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this T0MMYY HILFEGER watch. A perfect blend of style and precision."
    },
    {
        "id": 73,
        "name": "T0MMYY HILFEGER Luxury Edition 4",
        "brand": "T0MMYY HILFEGER",
        "category": "watch",
        "price": "₹1350",
        "image": "assets/images/brands/T0MMYY HILFEGER/tommy-hilfiger-73-1.jpeg",
        "images": [
            "assets/images/brands/T0MMYY HILFEGER/tommy-hilfiger-73-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this T0MMYY HILFEGER watch. A perfect blend of style and precision."
    },
    {
        "id": 74,
        "name": "T0MMYY HILFEGER Luxury Edition 5",
        "brand": "T0MMYY HILFEGER",
        "category": "watch",
        "price": "₹1350",
        "image": "assets/images/brands/T0MMYY HILFEGER/tommy-hilfiger-74-1.jpeg",
        "images": [
            "assets/images/brands/T0MMYY HILFEGER/tommy-hilfiger-74-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this T0MMYY HILFEGER watch. A perfect blend of style and precision."
    },
    {
        "id": 75,
        "name": "T0MMYY HILFEGER Luxury Edition 6",
        "brand": "T0MMYY HILFEGER",
        "category": "watch",
        "price": "₹1350",
        "image": "assets/images/brands/T0MMYY HILFEGER/tommy-hilfiger-75-1.jpeg",
        "images": [
            "assets/images/brands/T0MMYY HILFEGER/tommy-hilfiger-75-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this T0MMYY HILFEGER watch. A perfect blend of style and precision."
    },
    {
        "id": 76,
        "name": "T0MMYY HILFEGER Luxury Edition 7",
        "brand": "T0MMYY HILFEGER",
        "category": "watch",
        "price": "₹1350",
        "image": "assets/images/brands/T0MMYY HILFEGER/tommy-hilfiger-76-1.jpeg",
        "images": [
            "assets/images/brands/T0MMYY HILFEGER/tommy-hilfiger-76-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this T0MMYY HILFEGER watch. A perfect blend of style and precision."
    },
    {
        "id": 77,
        "name": "CARRTIER Premium Sunglasses 1",
        "brand": "CARRTIER",
        "category": "sunglasses",
        "price": "₹800",
        "image": "assets/images/sunglasses/CARRTIER/cartier-77-1.jpeg",
        "images": [
            "assets/images/sunglasses/CARRTIER/cartier-77-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this CARRTIER sunglasses. A perfect blend of style and precision."
    },
    {
        "id": 78,
        "name": "D0LCE AND GABBBAANA Premium Sunglasses 1",
        "brand": "D0LCE AND GABBBAANA",
        "category": "sunglasses",
        "price": "₹700",
        "image": "assets/images/sunglasses/D0LCE AND GABBBAANA/dolce-and-gabbana-78-1.jpeg",
        "images": [
            "assets/images/sunglasses/D0LCE AND GABBBAANA/dolce-and-gabbana-78-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this D0LCE AND GABBBAANA sunglasses. A perfect blend of style and precision."
    },
    {
        "id": 79,
        "name": "GUUCI Premium Sunglasses 1",
        "brand": "GUUCI",
        "category": "sunglasses",
        "price": "₹700",
        "image": "assets/images/sunglasses/GUUCI/gucci-79-1.jpeg",
        "images": [
            "assets/images/sunglasses/GUUCI/gucci-79-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this GUUCI sunglasses. A perfect blend of style and precision."
    },
    {
        "id": 80,
        "name": "GUUCI Premium Sunglasses 2",
        "brand": "GUUCI",
        "category": "sunglasses",
        "price": "₹800",
        "image": "assets/images/sunglasses/GUUCI/gucci-80-1.jpeg",
        "images": [
            "assets/images/sunglasses/GUUCI/gucci-80-1.jpeg",
            "assets/images/sunglasses/GUUCI/gucci-80-2.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this GUUCI sunglasses. A perfect blend of style and precision."
    },
    {
        "id": 81,
        "name": "MEYBACH Premium Sunglasses 1",
        "brand": "MEYBACH",
        "category": "sunglasses",
        "price": "₹850",
        "image": "assets/images/sunglasses/MEYBACH/maybach-81-1.jpeg",
        "images": [
            "assets/images/sunglasses/MEYBACH/maybach-81-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this MEYBACH sunglasses. A perfect blend of style and precision."
    },
    {
        "id": 82,
        "name": "MEW MEW Premium Sunglasses 1",
        "brand": "MEW MEW",
        "category": "sunglasses",
        "price": "₹750",
        "image": "assets/images/sunglasses/MEW MEW/miumiu-82-1.jpeg",
        "images": [
            "assets/images/sunglasses/MEW MEW/miumiu-82-1.jpeg",
            "assets/images/sunglasses/MEW MEW/miumiu-82-2.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this MEW MEW sunglasses. A perfect blend of style and precision."
    },
    {
        "id": 83,
        "name": "PRRAADA Premium Sunglasses 1",
        "brand": "PRRAADA",
        "category": "sunglasses",
        "price": "₹800",
        "image": "assets/images/sunglasses/PRRAADA/prada-83-1.jpeg",
        "images": [
            "assets/images/sunglasses/PRRAADA/prada-83-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this PRRAADA sunglasses. A perfect blend of style and precision."
    },
    {
        "id": 84,
        "name": "REYBAN Premium Sunglasses 1",
        "brand": "REYBAN",
        "category": "sunglasses",
        "price": "₹700",
        "image": "assets/images/sunglasses/REYBAN/ray-ban-84-1.jpeg",
        "images": [
            "assets/images/sunglasses/REYBAN/ray-ban-84-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this REYBAN sunglasses. A perfect blend of style and precision."
    },
    {
        "id": 85,
        "name": "VERSACHE Premium Sunglasses 1",
        "brand": "VERSACHE",
        "category": "sunglasses",
        "price": "₹800",
        "image": "assets/images/sunglasses/VERSACHE/versace-85-1.jpeg",
        "images": [
            "assets/images/sunglasses/VERSACHE/versace-85-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this VERSACHE sunglasses. A perfect blend of style and precision."
    },
    {
        "id": 86,
        "name": "REYBAN Premium Sunglasses 2",
        "brand": "REYBAN",
        "category": "sunglasses",
        "price": "₹700",
        "image": "assets/images/sunglasses/REYBAN/ray-ban-84-2.jpeg",
        "images": [
            "assets/images/sunglasses/REYBAN/ray-ban-84-2.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this REYBAN sunglasses. A perfect blend of style and precision."
    },
    {
        "id": 87,
        "name": "REYBAN Premium Sunglasses 3",
        "brand": "REYBAN",
        "category": "sunglasses",
        "price": "₹700",
        "image": "assets/images/sunglasses/REYBAN/ray-ban-84-3.jpeg",
        "images": [
            "assets/images/sunglasses/REYBAN/ray-ban-84-3.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this REYBAN sunglasses. A perfect blend of style and precision."
    },
    {
        "id": 88,
        "name": "REYBAN Premium Sunglasses 4",
        "brand": "REYBAN",
        "category": "sunglasses",
        "price": "₹700",
        "image": "assets/images/sunglasses/REYBAN/ray-ban-84-4.jpeg",
        "images": [
            "assets/images/sunglasses/REYBAN/ray-ban-84-4.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this REYBAN sunglasses. A perfect blend of style and precision."
    },
    {
        "id": 89,
        "name": "REYBAN Premium Sunglasses 5",
        "brand": "REYBAN",
        "category": "sunglasses",
        "price": "₹700",
        "image": "assets/images/sunglasses/REYBAN/ray-ban-84-5.jpeg",
        "images": [
            "assets/images/sunglasses/REYBAN/ray-ban-84-5.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this REYBAN sunglasses. A perfect blend of style and precision."
    },
    {
        "id": 90,
        "name": "MEW MEW Premium Sunglasses 2",
        "brand": "MEW MEW",
        "category": "sunglasses",
        "price": "₹750",
        "image": "assets/images/sunglasses/MEW MEW/miumiu-82-3.jpeg",
        "images": [
            "assets/images/sunglasses/MEW MEW/miumiu-82-3.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this MEW MEW sunglasses. A perfect blend of style and precision."
    }
];

function renderProducts(filteredProducts) {
    const productGrid = document.getElementById('productGrid');
    if (!productGrid) return;
    
    productGrid.innerHTML = '';
    
    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.onclick = () => {
            window.location.href = `details.html?id=${product.id}`;
        };
        card.style.cursor = 'pointer';
        
        // Show indicator if multiple images exist
        const hasMultiple = product.images && product.images.length > 1;
        const badgeHTML = hasMultiple ? `<span class="multi-img-badge">${product.images.length} Images</span>` : '';

        // Canceled price strikethrough
        const canceledHTML = product.canceledPrice
            ? `<span style="text-decoration:line-through;color:#888;font-size:0.85em;margin-right:5px;">${product.canceledPrice}</span>`
            : '';
        
        card.innerHTML = `
            <div class="product-image-container">
                ${badgeHTML}
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            </div>
            <div class="product-info">
                <span class="product-brand">${product.brand}</span>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">${canceledHTML}${product.price}</p>
                <a href="details.html?id=${product.id}" class="btn-view">Buy Now</a>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

function filterProducts() {
    const hash = window.location.hash;
    const category = (hash === '#sunglasses') ? 'sunglasses' : 'watch';
    
    const containerId = (category === 'sunglasses') ? '#sunglassesFiltersContainer' : '#watchFiltersContainer';
    const selectedBrands = Array.from(document.querySelectorAll(`${containerId} .brand-filter:checked`)).map(cb => cb.value);
    
    let filtered = products.filter(p => p.category === category || (!p.category && category === 'watch'));
    
    if (selectedBrands.length > 0) {
        filtered = filtered.filter(p => selectedBrands.includes(p.brand));
    }
    
    // Sort logic
    const sortSelectId = (category === 'sunglasses') ? 'sortPriceSunglasses' : 'sortPriceWatch';
    const sortSelect = document.getElementById(sortSelectId);
    const sortVal = sortSelect ? sortSelect.value : 'default';
    
    if (sortVal === 'low-to-high') {
        filtered.sort((a, b) => {
            const priceA = parseInt(a.price.replace(/[^\d]/g, '')) || 0;
            const priceB = parseInt(b.price.replace(/[^\d]/g, '')) || 0;
            return priceA - priceB;
        });
    } else if (sortVal === 'high-to-low') {
        filtered.sort((a, b) => {
            const priceA = parseInt(a.price.replace(/[^\d]/g, '')) || 0;
            const priceB = parseInt(b.price.replace(/[^\d]/g, '')) || 0;
            return priceB - priceA;
        });
    } else {
        // Default sorting: products with multiple images at top, shuffle lower products randomly
        let multiImg = filtered.filter(p => p.images && p.images.length > 1);
        let singleImg = filtered.filter(p => !p.images || p.images.length <= 1);
        
        // Fisher-Yates shuffle for single image products
        for (let i = singleImg.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [singleImg[i], singleImg[j]] = [singleImg[j], singleImg[i]];
        }
        
        filtered = [...multiImg, ...singleImg];
    }
    
    renderProducts(filtered);
}

window.selectBrandInFilter = function(brandName) {
    const brandCategory = products.find(p => p.brand === brandName)?.category || 'watch';
    if (brandCategory === 'sunglasses') {
        window.location.hash = '#sunglasses';
    } else {
        window.location.hash = '#home';
    }

    setTimeout(() => {
        const containerId = (brandCategory === 'sunglasses') ? '#sunglassesFiltersContainer' : '#watchFiltersContainer';
        const checkboxes = document.querySelectorAll(`${containerId} .brand-filter`);
        checkboxes.forEach(cb => {
            cb.checked = (cb.value === brandName);
        });
        
        // Reset sort select
        const sortSelectId = (brandCategory === 'sunglasses') ? 'sortPriceSunglasses' : 'sortPriceWatch';
        const sortSelect = document.getElementById(sortSelectId);
        if (sortSelect) sortSelect.value = 'default';
        
        filterProducts();
        const productsSection = document.getElementById('products');
        if (productsSection) {
            productsSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100);
};

function handleHashChange() {
    const hash = window.location.hash || '#home';
    const carouselWrapper = document.querySelector('.hero-carousel-wrapper');
    const sunglassesHero = document.getElementById('sunglassesHero');
    const watchFilters = document.getElementById('watchFiltersWrapper');
    const sunglassesFilters = document.getElementById('sunglassesFiltersWrapper');
    const productGrid = document.getElementById('productGrid');
    
    // Update active state in navigation
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (hash === '#bestseller' && href && href.includes('#bestseller')) link.classList.add('active');
        else if (hash === '#sunglasses' && href && href.includes('#sunglasses')) link.classList.add('active');
        else if ((hash === '#home' || hash === '') && href && (href === 'index.html' || href === '#home' || href === '')) link.classList.add('active');
    });
    
    // Reset filters
    document.querySelectorAll('.brand-filter').forEach(cb => cb.checked = false);
    
    // Reset sort select dropdowns
    const sortWatch = document.getElementById('sortPriceWatch');
    const sortSunglasses = document.getElementById('sortPriceSunglasses');
    if (sortWatch) sortWatch.value = 'default';
    if (sortSunglasses) sortSunglasses.value = 'default';
    
    if (hash === '#bestseller') {
        if (carouselWrapper) carouselWrapper.style.display = 'none';
        if (sunglassesHero) sunglassesHero.style.display = 'none';
        if (watchFilters) watchFilters.style.display = 'none';
        if (sunglassesFilters) sunglassesFilters.style.display = 'none';
        
        // Define some bestsellers from old items + new sunglasses
        const bestSellerIds = [8, 18, 38, 44, 5, 53, 54];
        const bestSellers = products.filter(p => bestSellerIds.includes(p.id));
        if (productGrid) renderProducts(bestSellers);
        
        const productsSection = document.getElementById('products');
        if (productsSection) productsSection.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#sunglasses') {
        if (carouselWrapper) carouselWrapper.style.display = 'none';
        if (sunglassesHero) sunglassesHero.style.display = 'flex';
        if (watchFilters) watchFilters.style.display = 'none';
        if (sunglassesFilters) sunglassesFilters.style.display = '';
        if (productGrid) filterProducts();
    } else {
        if (carouselWrapper) carouselWrapper.style.display = '';
        if (sunglassesHero) sunglassesHero.style.display = 'none';
        if (watchFilters) watchFilters.style.display = '';
        if (sunglassesFilters) sunglassesFilters.style.display = 'none';
        if (productGrid) filterProducts();
    }
}
window.addEventListener('hashchange', handleHashChange);

document.addEventListener('DOMContentLoaded', () => {
    handleHashChange();
    
    const checkboxes = document.querySelectorAll('.brand-filter');
    checkboxes.forEach(cb => {
        cb.addEventListener('change', filterProducts);
    });

    const sortSelects = document.querySelectorAll('.sort-price-select');
    sortSelects.forEach(sel => {
        sel.addEventListener('change', filterProducts);
    });

    const toggleBtns = document.querySelectorAll('.refine-toggle-btn');
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const container = btn.closest('.refine-container');
            if (container) {
                container.classList.toggle('open');
            }
        });
    });
});

function getProductFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id'));
    return products.find(p => p.id === id);
}

function purchaseOnWhatsApp(product) {
    const phoneNumber = "917046432148"; 
    const message = `Hello MPWATCHHUB, I would like to inquire about:
*Product:* ${product.name}
*Brand:* ${product.brand}

Please let me know the availability and details. Thank you!`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}