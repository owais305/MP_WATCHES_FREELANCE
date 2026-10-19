const products = [
    {
        "id": 1,
        "name": "carrtier Luxury Edition 1",
        "brand": "CARRTIER",
        "price": "₹1500",
        "image": "assets/images/brands/CARTIER/cartier-1.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this carrtier timepiece. A perfect blend of style and precision."
    },
    {
        "id": 2,
        "name": "carrtier Luxury Edition 2",
        "brand": "CARRTIER",
        "price": "₹1500",
        "image": "assets/images/brands/CARTIER/cartier-2.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this carrtier timepiece. A perfect blend of style and precision."
    },
    {
        "id": 3,
        "name": "carrtier Luxury Edition 3",
        "brand": "CARRTIER",
        "price": "₹1500",
        "image": "assets/images/brands/CARTIER/cartier-3.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this carrtier timepiece. A perfect blend of style and precision."
    },
    {
        "id": 4,
        "name": "carrtier Luxury Edition 4",
        "brand": "CARRTIER",
        "price": "₹3200",
        "image": "assets/images/brands/CARTIER/cartier-4.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this carrtier timepiece. A perfect blend of style and precision."
    },
    {
        "id": 5,
        "name": "carrtier Luxury Edition 5",
        "brand": "CARRTIER",
        "price": "₹1650",
        "image": "assets/images/brands/CARTIER/cartier-5.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this carrtier timepiece. A perfect blend of style and precision."
    },
    {
        "id": 6,
        "name": "casi0 Luxury Edition 1",
        "brand": "CASI0",
        "price": "₹700",
        "image": "assets/images/brands/CASIO/casio-1.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this casi0 timepiece. A perfect blend of style and precision."
    },
    {
        "id": 7,
        "name": "casi0 Luxury Edition 2",
        "brand": "CASI0",
        "price": "₹700",
        "image": "assets/images/brands/CASIO/casio-2.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this casi0 timepiece. A perfect blend of style and precision."
    },
    {
        "id": 8,
        "name": "casi0 Luxury Edition 3",
        "brand": "CASI0",
        "price": "₹1000",
        "image": "assets/images/brands/CASIO/casio-3.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this casi0 timepiece. A perfect blend of style and precision."
    },
    {
        "id": 9,
        "name": "G-sh0k Luxury Edition 1",
        "brand": "G-SH0K",
        "price": "₹2000",
        "image": "assets/images/brands/GSHOCK/gshock-1.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this G-sh0k timepiece. A perfect blend of style and precision."
    },
    {
        "id": 10,
        "name": "G-sh0k Luxury Edition 2",
        "brand": "G-SH0K",
        "price": "₹2000",
        "image": "assets/images/brands/GSHOCK/gshock-2.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this G-sh0k timepiece. A perfect blend of style and precision."
    },
    {
        "id": 11,
        "name": "G-sh0k Luxury Edition 3",
        "brand": "G-SH0K",
        "price": "₹2000",
        "image": "assets/images/brands/GSHOCK/gshock-3.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this G-sh0k timepiece. A perfect blend of style and precision."
    },
    {
        "id": 12,
        "name": "G-sh0k Luxury Edition 4",
        "brand": "G-SH0K",
        "price": "₹2000",
        "image": "assets/images/brands/GSHOCK/gshock-4.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this G-sh0k timepiece. A perfect blend of style and precision."
    },
    {
        "id": 13,
        "name": "G-sh0k Luxury Edition 5",
        "brand": "G-SH0K",
        "price": "₹2000",
        "image": "assets/images/brands/GSHOCK/gshock-5.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this G-sh0k timepiece. A perfect blend of style and precision."
    },
    {
        "id": 14,
        "name": "G-sh0k Luxury Edition 6",
        "brand": "G-SH0K",
        "price": "₹2000",
        "image": "assets/images/brands/GSHOCK/gshock-6.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this G-sh0k timepiece. A perfect blend of style and precision."
    },
    {
        "id": 15,
        "name": "G-sh0k Luxury Edition 7",
        "brand": "G-SH0K",
        "price": "₹2000",
        "image": "assets/images/brands/GSHOCK/gshock-7.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this G-sh0k timepiece. A perfect blend of style and precision."
    },
    {
        "id": 16,
        "name": "G-sh0k Luxury Edition 8",
        "brand": "G-SH0K",
        "price": "₹2000",
        "image": "assets/images/brands/GSHOCK/gshock-8.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this G-sh0k timepiece. A perfect blend of style and precision."
    },
    {
        "id": 17,
        "name": "G-sh0k Luxury Edition 9",
        "brand": "G-SH0K",
        "price": "₹2000",
        "image": "assets/images/brands/GSHOCK/gshock-9.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this G-sh0k timepiece. A perfect blend of style and precision."
    },
    {
        "id": 18,
        "name": "G-sh0k Luxury Edition 10",
        "brand": "G-SH0K",
        "price": "₹2000",
        "image": "assets/images/brands/GSHOCK/gshock-10.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this G-sh0k timepiece. A perfect blend of style and precision."
    },
    {
        "id": 19,
        "name": "HUBl0T Luxury Edition 1",
        "brand": "HUBl0T",
        "price": "₹2000",
        "image": "assets/images/brands/HUBLOT/hublot-1.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this HUBl0T timepiece. A perfect blend of style and precision."
    },
    {
        "id": 20,
        "name": "HUBl0T Luxury Edition 2",
        "brand": "HUBl0T",
        "price": "₹2000",
        "image": "assets/images/brands/HUBLOT/hublot-2.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this HUBl0T timepiece. A perfect blend of style and precision."
    },
    {
        "id": 21,
        "name": "HUBl0T Luxury Edition 3",
        "brand": "HUBl0T",
        "price": "₹2000",
        "image": "assets/images/brands/HUBLOT/hublot-3.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this HUBl0T timepiece. A perfect blend of style and precision."
    },
    {
        "id": 22,
        "name": "HUBl0T Luxury Edition 4",
        "brand": "HUBl0T",
        "price": "₹2000",
        "image": "assets/images/brands/HUBLOT/hublot-4.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this HUBl0T timepiece. A perfect blend of style and precision."
    },
    {
        "id": 23,
        "name": "HUBl0T Luxury Edition 5",
        "brand": "HUBl0T",
        "price": "₹2000",
        "image": "assets/images/brands/HUBLOT/hublot-5.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this HUBl0T timepiece. A perfect blend of style and precision."
    },
    {
        "id": 24,
        "name": "HUBl0T Luxury Edition 6",
        "brand": "HUBl0T",
        "price": "₹2000",
        "image": "assets/images/brands/HUBLOT/hublot-6.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this HUBl0T timepiece. A perfect blend of style and precision."
    },
    {
        "id": 25,
        "name": "HUBl0T Luxury Edition 7",
        "brand": "HUBl0T",
        "price": "₹2000",
        "image": "assets/images/brands/HUBLOT/hublot-7.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this HUBl0T timepiece. A perfect blend of style and precision."
    },
    {
        "id": 26,
        "name": "HUBl0T Luxury Edition 8",
        "brand": "HUBl0T",
        "price": "₹2000",
        "image": "assets/images/brands/HUBLOT/hublot-8.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this HUBl0T timepiece. A perfect blend of style and precision."
    },
    {
        "id": 27,
        "name": "00mega Luxury Edition 1",
        "brand": "00MEGA",
        "price": "₹1350",
        "image": "assets/images/brands/OMEGA/omega-1.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this 00mega timepiece. A perfect blend of style and precision."
    },
    {
        "id": 28,
        "name": "00mega Luxury Edition 2",
        "brand": "00MEGA",
        "price": "₹1999",
        "image": "assets/images/brands/OMEGA/omega-2.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this 00mega timepiece. A perfect blend of style and precision."
    },
    {
        "id": 29,
        "name": "00mega Luxury Edition 3",
        "brand": "00MEGA",
        "price": "₹3400",
        "image": "assets/images/brands/OMEGA/omega-3.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this 00mega timepiece. A perfect blend of style and precision."
    },
    {
        "id": 30,
        "name": "00mega Luxury Edition 4",
        "brand": "00MEGA",
        "price": "₹1350",
        "image": "assets/images/brands/OMEGA/omega-4.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this 00mega timepiece. A perfect blend of style and precision."
    },
    {
        "id": 31,
        "name": "00mega Luxury Edition 5",
        "brand": "00MEGA",
        "price": "₹1500",
        "image": "assets/images/brands/OMEGA/omega-5.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this 00mega timepiece. A perfect blend of style and precision."
    },
    {
        "id": 32,
        "name": "00mega Luxury Edition 6",
        "brand": "00MEGA",
        "price": "₹1350",
        "image": "assets/images/brands/OMEGA/omega-6.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this 00mega timepiece. A perfect blend of style and precision."
    },
    {
        "id": 33,
        "name": "R0lex Luxury Edition 1",
        "brand": "R0LEX",
        "price": "₹1300",
        "image": "assets/images/brands/ROLEX/rolex-1.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this R0lex timepiece. A perfect blend of style and precision."
    },
    {
        "id": 34,
        "name": "R0lex Luxury Edition 2",
        "brand": "R0LEX",
        "price": "₹1300",
        "image": "assets/images/brands/ROLEX/rolex-2.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this R0lex timepiece. A perfect blend of style and precision."
    },
    {
        "id": 35,
        "name": "R0lex Luxury Edition 3",
        "brand": "R0LEX",
        "price": "₹1500",
        "image": "assets/images/brands/ROLEX/rolex-3.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this R0lex timepiece. A perfect blend of style and precision."
    },
    {
        "id": 36,
        "name": "R0lex Luxury Edition 4",
        "brand": "R0LEX",
        "price": "₹1500",
        "image": "assets/images/brands/ROLEX/rolex-4.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this R0lex timepiece. A perfect blend of style and precision."
    },
    {
        "id": 37,
        "name": "R0lex Luxury Edition 5",
        "brand": "R0LEX",
        "price": "₹1500",
        "image": "assets/images/brands/ROLEX/rolex-5.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this R0lex timepiece. A perfect blend of style and precision."
    },
    {
        "id": 38,
        "name": "R0lex Luxury Edition 6",
        "brand": "R0LEX",
        "price": "₹1800",
        "image": "assets/images/brands/ROLEX/rolex-6.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this R0lex timepiece. A perfect blend of style and precision."
    },
    {
        "id": 39,
        "name": "R0lex Luxury Edition 7",
        "brand": "R0LEX",
        "price": "₹1300",
        "image": "assets/images/brands/ROLEX/rolex-7.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this R0lex timepiece. A perfect blend of style and precision."
    },
    {
        "id": 40,
        "name": "R0lex Luxury Edition 8",
        "brand": "R0LEX",
        "price": "₹1500",
        "image": "assets/images/brands/ROLEX/rolex-8.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this R0lex timepiece. A perfect blend of style and precision."
    },
    {
        "id": 41,
        "name": "R0lex Luxury Edition 9",
        "brand": "R0LEX",
        "price": "₹1600",
        "image": "assets/images/brands/ROLEX/rolex-9.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this R0lex timepiece. A perfect blend of style and precision."
    },
    {
        "id": 42,
        "name": "R0lex Luxury Edition 10",
        "brand": "R0LEX",
        "price": "₹1700",
        "image": "assets/images/brands/ROLEX/rolex-10.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this R0lex timepiece. A perfect blend of style and precision."
    },
    {
        "id": 43,
        "name": "R0lex Luxury Edition 11",
        "brand": "R0LEX",
        "price": "₹1900",
        "image": "assets/images/brands/ROLEX/rolex-11.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this R0lex timepiece. A perfect blend of style and precision."
    },
    {
        "id": 44,
        "name": "R0lex Luxury Edition 12",
        "brand": "R0LEX",
        "price": "₹1600",
        "image": "assets/images/brands/ROLEX/rolex-12.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this R0lex timepiece. A perfect blend of style and precision."
    },
    {
        "id": 45,
        "name": "R0lex Luxury Edition 13",
        "brand": "R0LEX",
        "price": "₹1500",
        "image": "assets/images/brands/ROLEX/rolex-13.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this R0lex timepiece. A perfect blend of style and precision."
    },
    {
        "id": 46,
        "name": "Tisot Luxury Edition 1",
        "brand": "TISS0T",
        "price": "₹2000",
        "image": "assets/images/brands/TISOT/tisot-1.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this Tisot timepiece. A perfect blend of style and precision."
    },
    {
        "id": 47,
        "name": "Tisot Luxury Edition 2",
        "brand": "TISS0T",
        "price": "₹2000",
        "image": "assets/images/brands/TISOT/tisot-2.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this Tisot timepiece. A perfect blend of style and precision."
    },
    {
        "id": 48,
        "name": "Tisot Luxury Edition 3",
        "brand": "TISS0T",
        "price": "₹2000",
        "image": "assets/images/brands/TISOT/tisot-3.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this Tisot timepiece. A perfect blend of style and precision."
    },
    {
        "id": 49,
        "name": "Tisot Luxury Edition 4",
        "brand": "TISS0T",
        "price": "₹2000",
        "image": "assets/images/brands/TISOT/tisot-4.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this Tisot timepiece. A perfect blend of style and precision."
    },
    {
        "id": 50,
        "name": "Tisot Luxury Edition 5",
        "brand": "TISS0T",
        "price": "₹2000",
        "image": "assets/images/brands/TISOT/tisot-5.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this Tisot timepiece. A perfect blend of style and precision."
    },
    {
        "id": 51,
        "name": "Tisot Luxury Edition 6",
        "brand": "TISS0T",
        "price": "₹2000",
        "image": "assets/images/brands/TISOT/tisot-6.jpeg",
        "description": "Experience the pinnacle of craftsmanship with this Tisot timepiece. A perfect blend of style and precision."
    },
    {
        "id": 52,
        "name": "AUDEMAS PIGET Luxury Edition 1",
        "brand": "AUDEMAS PIGET",
        "category": "watch",
        "price": "₹3599",
        "image": "assets/images/brands/AUDEMARS PIGUET/audemars-piguet-52-1.jpeg",
        "images": [
            "assets/images/brands/AUDEMARS PIGUET/audemars-piguet-52-1.jpeg",
            "assets/images/brands/AUDEMARS PIGUET/audemars-piguet-52-2.jpeg",
            "assets/images/brands/AUDEMARS PIGUET/audemars-piguet-52-3.jpeg",
            "assets/images/brands/AUDEMARS PIGUET/audemars-piguet-52-4.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this AUDEMAS PIGET watch. A perfect blend of style and precision."
    },
    {
        "id": 53,
        "name": "HUBl0T Luxury Edition 9",
        "brand": "HUBl0T",
        "category": "watch",
        "price": "₹2499",
        "image": "assets/images/brands/HUBLOT/hublot-53-1.jpeg",
        "images": [
            "assets/images/brands/HUBLOT/hublot-53-1.jpeg",
            "assets/images/brands/HUBLOT/hublot-53-2.jpeg",
            "assets/images/brands/HUBLOT/hublot-53-3.jpeg",
            "assets/images/brands/HUBLOT/hublot-53-4.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this HUBl0T watch. A perfect blend of style and precision."
    },
    {
        "id": 54,
        "name": "00MEGA Luxury Edition 7",
        "brand": "00MEGA",
        "category": "watch",
        "price": "₹3999",
        "image": "assets/images/brands/OMEGA/omega-54-1.jpeg",
        "images": [
            "assets/images/brands/OMEGA/omega-54-1.jpeg",
            "assets/images/brands/OMEGA/omega-55-1.jpeg",
            "assets/images/brands/OMEGA/omega-56-1.jpeg",
            "assets/images/brands/OMEGA/omega-57-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this 00MEGA watch. A perfect blend of style and precision."
    },
    {
        "id": 58,
        "name": "RAD0 Luxury Edition 1",
        "brand": "RAD0",
        "category": "watch",
        "price": "₹1100",
        "image": "assets/images/brands/RADO/rado-58-1.jpeg",
        "images": [
            "assets/images/brands/RADO/rado-58-1.jpeg",
            "assets/images/brands/RADO/rado-58-2.jpeg",
            "assets/images/brands/RADO/rado-58-3.jpeg",
            "assets/images/brands/RADO/rado-58-4.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this RAD0 watch. A perfect blend of style and precision."
    },
    {
        "id": 59,
        "name": "RECHAARD MILI Luxury Edition 1",
        "brand": "RECHAARD MILI",
        "category": "watch",
        "price": "₹1499",
        "image": "assets/images/brands/RICHARD MILLIE/richard-millie-59-1.jpeg",
        "images": [
            "assets/images/brands/RICHARD MILLIE/richard-millie-59-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this RECHAARD MILI watch. A perfect blend of style and precision."
    },
    {
        "id": 60,
        "name": "RECHAARD MILI Luxury Edition 2",
        "brand": "RECHAARD MILI",
        "category": "watch",
        "price": "₹1499",
        "image": "assets/images/brands/RICHARD MILLIE/richard-millie-60-1.jpeg",
        "images": [
            "assets/images/brands/RICHARD MILLIE/richard-millie-60-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this RECHAARD MILI watch. A perfect blend of style and precision."
    },
    {
        "id": 61,
        "name": "RECHAARD MILI Luxury Edition 3",
        "brand": "RECHAARD MILI",
        "category": "watch",
        "price": "₹1499",
        "image": "assets/images/brands/RICHARD MILLIE/richard-millie-61-1.jpeg",
        "images": [
            "assets/images/brands/RICHARD MILLIE/richard-millie-61-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this RECHAARD MILI watch. A perfect blend of style and precision."
    },
    {
        "id": 62,
        "name": "RECHAARD MILI Luxury Edition 4",
        "brand": "RECHAARD MILI",
        "category": "watch",
        "price": "₹1499",
        "image": "assets/images/brands/RICHARD MILLIE/richard-millie-62-1.jpeg",
        "images": [
            "assets/images/brands/RICHARD MILLIE/richard-millie-62-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this RECHAARD MILI watch. A perfect blend of style and precision."
    },
    {
        "id": 63,
        "name": "RECHAARD MILI Luxury Edition 5",
        "brand": "RECHAARD MILI",
        "category": "watch",
        "price": "₹1499",
        "image": "assets/images/brands/RICHARD MILLIE/richard-millie-63-1.jpeg",
        "images": [
            "assets/images/brands/RICHARD MILLIE/richard-millie-63-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this RECHAARD MILI watch. A perfect blend of style and precision."
    },
    {
        "id": 64,
        "name": "RECHAARD MILI Luxury Edition 6",
        "brand": "RECHAARD MILI",
        "category": "watch",
        "price": "₹1499",
        "image": "assets/images/brands/RICHARD MILLIE/richard-millie-64-1.jpeg",
        "images": [
            "assets/images/brands/RICHARD MILLIE/richard-millie-64-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this RECHAARD MILI watch. A perfect blend of style and precision."
    },
    {
        "id": 65,
        "name": "RECHAARD MILI Luxury Edition 7",
        "brand": "RECHAARD MILI",
        "category": "watch",
        "price": "₹1499",
        "image": "assets/images/brands/RICHARD MILLIE/richard-millie-65-1.jpeg",
        "images": [
            "assets/images/brands/RICHARD MILLIE/richard-millie-65-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this RECHAARD MILI watch. A perfect blend of style and precision."
    },
    {
        "id": 66,
        "name": "RECHAARD MILI Luxury Edition 8",
        "brand": "RECHAARD MILI",
        "category": "watch",
        "price": "₹1499",
        "image": "assets/images/brands/RICHARD MILLIE/richard-millie-66-1.jpeg",
        "images": [
            "assets/images/brands/RICHARD MILLIE/richard-millie-66-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this RECHAARD MILI watch. A perfect blend of style and precision."
    },
    {
        "id": 67,
        "name": "R0LEX Luxury Edition 14",
        "brand": "R0LEX",
        "category": "watch",
        "price": "₹999",
        "image": "assets/images/brands/ROLEX/rolex-67-1.jpeg",
        "images": [
            "assets/images/brands/ROLEX/rolex-67-1.jpeg",
            "assets/images/brands/ROLEX/rolex-67-2.jpeg",
            "assets/images/brands/ROLEX/rolex-67-3.jpeg",
            "assets/images/brands/ROLEX/rolex-67-4.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this R0LEX watch. A perfect blend of style and precision."
    },
    {
        "id": 68,
        "name": "R0LEX Luxury Edition 15",
        "brand": "R0LEX",
        "category": "watch",
        "price": "₹3699",
        "image": "assets/images/brands/ROLEX/rolex-68-1.jpeg",
        "images": [
            "assets/images/brands/ROLEX/rolex-68-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this R0LEX watch. A perfect blend of style and precision."
    },
    {
        "id": 69,
        "name": "TAGG HUER Luxury Edition 1",
        "brand": "TAGG HUER",
        "category": "watch",
        "price": "₹4599",
        "image": "assets/images/brands/TAG HEUER/tag-heuer-69-1.jpeg",
        "images": [
            "assets/images/brands/TAG HEUER/tag-heuer-69-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this TAGG HUER watch. A perfect blend of style and precision."
    },
    {
        "id": 70,
        "name": "T0MMYY HILFEGER Luxury Edition 1",
        "brand": "T0MMYY HILFEGER",
        "category": "watch",
        "price": "₹1350",
        "image": "assets/images/brands/TOMMY HILFIGER/tommy-hilfiger-70-1.jpeg",
        "images": [
            "assets/images/brands/TOMMY HILFIGER/tommy-hilfiger-70-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this T0MMYY HILFEGER watch. A perfect blend of style and precision."
    },
    {
        "id": 71,
        "name": "T0MMYY HILFEGER Luxury Edition 2",
        "brand": "T0MMYY HILFEGER",
        "category": "watch",
        "price": "₹1350",
        "image": "assets/images/brands/TOMMY HILFIGER/tommy-hilfiger-71-1.jpeg",
        "images": [
            "assets/images/brands/TOMMY HILFIGER/tommy-hilfiger-71-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this T0MMYY HILFEGER watch. A perfect blend of style and precision."
    },
    {
        "id": 72,
        "name": "T0MMYY HILFEGER Luxury Edition 3",
        "brand": "T0MMYY HILFEGER",
        "category": "watch",
        "price": "₹1350",
        "image": "assets/images/brands/TOMMY HILFIGER/tommy-hilfiger-72-1.jpeg",
        "images": [
            "assets/images/brands/TOMMY HILFIGER/tommy-hilfiger-72-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this T0MMYY HILFEGER watch. A perfect blend of style and precision."
    },
    {
        "id": 73,
        "name": "T0MMYY HILFEGER Luxury Edition 4",
        "brand": "T0MMYY HILFEGER",
        "category": "watch",
        "price": "₹1350",
        "image": "assets/images/brands/TOMMY HILFIGER/tommy-hilfiger-73-1.jpeg",
        "images": [
            "assets/images/brands/TOMMY HILFIGER/tommy-hilfiger-73-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this T0MMYY HILFEGER watch. A perfect blend of style and precision."
    },
    {
        "id": 74,
        "name": "T0MMYY HILFEGER Luxury Edition 5",
        "brand": "T0MMYY HILFEGER",
        "category": "watch",
        "price": "₹1350",
        "image": "assets/images/brands/TOMMY HILFIGER/tommy-hilfiger-74-1.jpeg",
        "images": [
            "assets/images/brands/TOMMY HILFIGER/tommy-hilfiger-74-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this T0MMYY HILFEGER watch. A perfect blend of style and precision."
    },
    {
        "id": 75,
        "name": "T0MMYY HILFEGER Luxury Edition 6",
        "brand": "T0MMYY HILFEGER",
        "category": "watch",
        "price": "₹1350",
        "image": "assets/images/brands/TOMMY HILFIGER/tommy-hilfiger-75-1.jpeg",
        "images": [
            "assets/images/brands/TOMMY HILFIGER/tommy-hilfiger-75-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this T0MMYY HILFEGER watch. A perfect blend of style and precision."
    },
    {
        "id": 76,
        "name": "T0MMYY HILFEGER Luxury Edition 7",
        "brand": "T0MMYY HILFEGER",
        "category": "watch",
        "price": "₹1350",
        "image": "assets/images/brands/TOMMY HILFIGER/tommy-hilfiger-76-1.jpeg",
        "images": [
            "assets/images/brands/TOMMY HILFIGER/tommy-hilfiger-76-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this T0MMYY HILFEGER watch. A perfect blend of style and precision."
    },
    {
        "id": 77,
        "name": "CARRTIER Premium Sunglasses 1",
        "brand": "CARRTIER",
        "category": "sunglasses",
        "price": "₹800",
        "image": "assets/images/sunglasses/CARTIER/cartier-77-1.jpeg",
        "images": [
            "assets/images/sunglasses/CARTIER/cartier-77-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this CARRTIER sunglasses. A perfect blend of style and precision."
    },
    {
        "id": 78,
        "name": "D0LCE AND GABBBAANA Premium Sunglasses 1",
        "brand": "D0LCE AND GABBBAANA",
        "category": "sunglasses",
        "price": "₹700",
        "image": "assets/images/sunglasses/DOLCE AND GABBANA/dolce-and-gabbana-78-1.jpeg",
        "images": [
            "assets/images/sunglasses/DOLCE AND GABBANA/dolce-and-gabbana-78-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this D0LCE AND GABBBAANA sunglasses. A perfect blend of style and precision."
    },
    {
        "id": 79,
        "name": "GUUCI Premium Sunglasses 1",
        "brand": "GUUCI",
        "category": "sunglasses",
        "price": "₹700",
        "image": "assets/images/sunglasses/GUCCI/gucci-79-1.jpeg",
        "images": [
            "assets/images/sunglasses/GUCCI/gucci-79-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this GUUCI sunglasses. A perfect blend of style and precision."
    },
    {
        "id": 80,
        "name": "GUUCI Premium Sunglasses 2",
        "brand": "GUUCI",
        "category": "sunglasses",
        "price": "₹800",
        "image": "assets/images/sunglasses/GUCCI/gucci-80-1.jpeg",
        "images": [
            "assets/images/sunglasses/GUCCI/gucci-80-1.jpeg",
            "assets/images/sunglasses/GUCCI/gucci-80-2.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this GUUCI sunglasses. A perfect blend of style and precision."
    },
    {
        "id": 81,
        "name": "MEYBACH Premium Sunglasses 1",
        "brand": "MEYBACH",
        "category": "sunglasses",
        "price": "₹850",
        "image": "assets/images/sunglasses/MAYBACH/maybach-81-1.jpeg",
        "images": [
            "assets/images/sunglasses/MAYBACH/maybach-81-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this MEYBACH sunglasses. A perfect blend of style and precision."
    },
    {
        "id": 82,
        "name": "MEW MEW Premium Sunglasses 1",
        "brand": "MEW MEW",
        "category": "sunglasses",
        "price": "₹750",
        "image": "assets/images/sunglasses/MIUMIU/miumiu-82-1.jpeg",
        "images": [
            "assets/images/sunglasses/MIUMIU/miumiu-82-1.jpeg",
            "assets/images/sunglasses/MIUMIU/miumiu-82-2.jpeg",
            "assets/images/sunglasses/MIUMIU/miumiu-82-3.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this MEW MEW sunglasses. A perfect blend of style and precision."
    },
    {
        "id": 83,
        "name": "PRRAADA Premium Sunglasses 1",
        "brand": "PRRAADA",
        "category": "sunglasses",
        "price": "₹800",
        "image": "assets/images/sunglasses/PRADA/prada-83-1.jpeg",
        "images": [
            "assets/images/sunglasses/PRADA/prada-83-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this PRRAADA sunglasses. A perfect blend of style and precision."
    },
    {
        "id": 84,
        "name": "REYBAN Premium Sunglasses 1",
        "brand": "REYBAN",
        "category": "sunglasses",
        "price": "₹700",
        "image": "assets/images/sunglasses/RAY BAN/ray-ban-84-1.jpeg",
        "images": [
            "assets/images/sunglasses/RAY BAN/ray-ban-84-1.jpeg",
            "assets/images/sunglasses/RAY BAN/ray-ban-84-2.jpeg",
            "assets/images/sunglasses/RAY BAN/ray-ban-84-3.jpeg",
            "assets/images/sunglasses/RAY BAN/ray-ban-84-4.jpeg",
            "assets/images/sunglasses/RAY BAN/ray-ban-84-5.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this REYBAN sunglasses. A perfect blend of style and precision."
    },
    {
        "id": 85,
        "name": "VERSACHE Premium Sunglasses 1",
        "brand": "VERSACHE",
        "category": "sunglasses",
        "price": "₹800",
        "image": "assets/images/sunglasses/VERSACE/versace-85-1.jpeg",
        "images": [
            "assets/images/sunglasses/VERSACE/versace-85-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this VERSACHE sunglasses. A perfect blend of style and precision."
    },
    {
        "id": 86,
        "name": "REYBAN Premium Sunglasses 2",
        "brand": "REYBAN",
        "category": "sunglasses",
        "price": "₹700",
        "image": "assets/images/sunglasses/RAY BAN/ray-ban-84-2.jpeg",
        "images": [
            "assets/images/sunglasses/RAY BAN/ray-ban-84-2.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this REYBAN sunglasses. A perfect blend of style and precision."
    },
    {
        "id": 87,
        "name": "REYBAN Premium Sunglasses 3",
        "brand": "REYBAN",
        "category": "sunglasses",
        "price": "₹700",
        "image": "assets/images/sunglasses/RAY BAN/ray-ban-84-3.jpeg",
        "images": [
            "assets/images/sunglasses/RAY BAN/ray-ban-84-3.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this REYBAN sunglasses. A perfect blend of style and precision."
    },
    {
        "id": 88,
        "name": "REYBAN Premium Sunglasses 4",
        "brand": "REYBAN",
        "category": "sunglasses",
        "price": "₹700",
        "image": "assets/images/sunglasses/RAY BAN/ray-ban-84-4.jpeg",
        "images": [
            "assets/images/sunglasses/RAY BAN/ray-ban-84-4.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this REYBAN sunglasses. A perfect blend of style and precision."
    },
    {
        "id": 89,
        "name": "REYBAN Premium Sunglasses 5",
        "brand": "REYBAN",
        "category": "sunglasses",
        "price": "₹700",
        "image": "assets/images/sunglasses/RAY BAN/ray-ban-84-5.jpeg",
        "images": [
            "assets/images/sunglasses/RAY BAN/ray-ban-84-5.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this REYBAN sunglasses. A perfect blend of style and precision."
    },
    {
        "id": 90,
        "name": "MEW MEW Premium Sunglasses 2",
        "brand": "MEW MEW",
        "category": "sunglasses",
        "price": "₹750",
        "image": "assets/images/sunglasses/MIUMIU/miumiu-82-3.jpeg",
        "images": [
            "assets/images/sunglasses/MIUMIU/miumiu-82-3.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this MEW MEW sunglasses. A perfect blend of style and precision."
    },
    {
        "id": 91,
        "name": "R0LEX Luxury Edition 16",
        "brand": "R0LEX",
        "category": "watch",
        "canceledPrice": "₹1500",
        "price": "₹1150",
        "image": "assets/images/brands/ROLEX/rolex-91-1.jpeg",
        "images": [
            "assets/images/brands/ROLEX/rolex-91-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this R0LEX timepiece. A perfect blend of style and precision."
    },
    {
        "id": 92,
        "name": "R0LEX Luxury Edition 17",
        "brand": "R0LEX",
        "category": "watch",
        "canceledPrice": "₹1500",
        "price": "₹1150",
        "image": "assets/images/brands/ROLEX/rolex-92-1.jpeg",
        "images": [
            "assets/images/brands/ROLEX/rolex-92-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this R0LEX timepiece. A perfect blend of style and precision."
    },
    {
        "id": 93,
        "name": "R0LEX Luxury Edition 18",
        "brand": "R0LEX",
        "category": "watch",
        "canceledPrice": "₹1500",
        "price": "₹1150",
        "image": "assets/images/brands/ROLEX/rolex-93-1.jpeg",
        "images": [
            "assets/images/brands/ROLEX/rolex-93-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this R0LEX timepiece. A perfect blend of style and precision."
    },
    {
        "id": 94,
        "name": "R0LEX Luxury Edition 19",
        "brand": "R0LEX",
        "category": "watch",
        "canceledPrice": "₹1500",
        "price": "₹1150",
        "image": "assets/images/brands/ROLEX/rolex-94-1.jpeg",
        "images": [
            "assets/images/brands/ROLEX/rolex-94-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this R0LEX timepiece. A perfect blend of style and precision."
    },
    {
        "id": 95,
        "name": "R0LEX Luxury Edition 20",
        "brand": "R0LEX",
        "category": "watch",
        "canceledPrice": "₹1500",
        "price": "₹1150",
        "image": "assets/images/brands/ROLEX/rolex-95-1.jpeg",
        "images": [
            "assets/images/brands/ROLEX/rolex-95-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this R0LEX timepiece. A perfect blend of style and precision."
    },
    {
        "id": 96,
        "name": "R0LEX Luxury Edition 21",
        "brand": "R0LEX",
        "category": "watch",
        "canceledPrice": "₹1500",
        "price": "₹1150",
        "image": "assets/images/brands/ROLEX/rolex-96-1.jpeg",
        "images": [
            "assets/images/brands/ROLEX/rolex-96-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this R0LEX timepiece. A perfect blend of style and precision."
    },
    {
        "id": 97,
        "name": "R0LEX Luxury Edition 22",
        "brand": "R0LEX",
        "category": "watch",
        "canceledPrice": "₹1500",
        "price": "₹1150",
        "image": "assets/images/brands/ROLEX/rolex-97-1.jpeg",
        "images": [
            "assets/images/brands/ROLEX/rolex-97-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this R0LEX timepiece. A perfect blend of style and precision."
    },
    {
        "id": 98,
        "name": "R0LEX Luxury Edition 23",
        "brand": "R0LEX",
        "category": "watch",
        "canceledPrice": "₹1500",
        "price": "₹1150",
        "image": "assets/images/brands/ROLEX/rolex-98-1.jpeg",
        "images": [
            "assets/images/brands/ROLEX/rolex-98-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this R0LEX timepiece. A perfect blend of style and precision."
    },
    {
        "id": 99,
        "name": "R0LEX Luxury Edition 24",
        "brand": "R0LEX",
        "category": "watch",
        "canceledPrice": "₹1500",
        "price": "₹1150",
        "image": "assets/images/brands/ROLEX/rolex-99-1.jpeg",
        "images": [
            "assets/images/brands/ROLEX/rolex-99-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this R0LEX timepiece. A perfect blend of style and precision."
    },
    {
        "id": 100,
        "name": "R0LEX Luxury Edition 25",
        "brand": "R0LEX",
        "category": "watch",
        "canceledPrice": "₹1500",
        "price": "₹1150",
        "image": "assets/images/brands/ROLEX/rolex-100-1.jpeg",
        "images": [
            "assets/images/brands/ROLEX/rolex-100-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this R0LEX timepiece. A perfect blend of style and precision."
    },
    {
        "id": 101,
        "name": "R0LEX Luxury Edition 26",
        "brand": "R0LEX",
        "category": "watch",
        "canceledPrice": "₹1500",
        "price": "₹1150",
        "image": "assets/images/brands/ROLEX/rolex-101-1.jpeg",
        "images": [
            "assets/images/brands/ROLEX/rolex-101-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this R0LEX timepiece. A perfect blend of style and precision."
    },
    {
        "id": 102,
        "name": "R0LEX Luxury Edition 27",
        "brand": "R0LEX",
        "category": "watch",
        "canceledPrice": "₹1500",
        "price": "₹1000",
        "image": "assets/images/brands/ROLEX/rolex-102-1.jpeg",
        "images": [
            "assets/images/brands/ROLEX/rolex-102-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this R0LEX timepiece. A perfect blend of style and precision."
    },
    {
        "id": 103,
        "name": "R0LEX Luxury Edition 28",
        "brand": "R0LEX",
        "category": "watch",
        "canceledPrice": "₹1500",
        "price": "₹1000",
        "image": "assets/images/brands/ROLEX/rolex-103-1.jpeg",
        "images": [
            "assets/images/brands/ROLEX/rolex-103-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this R0LEX timepiece. A perfect blend of style and precision."
    },
    {
        "id": 104,
        "name": "R0LEX Luxury Edition 29",
        "brand": "R0LEX",
        "category": "watch",
        "canceledPrice": "₹1500",
        "price": "₹1000",
        "image": "assets/images/brands/ROLEX/rolex-104-1.jpeg",
        "images": [
            "assets/images/brands/ROLEX/rolex-104-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this R0LEX timepiece. A perfect blend of style and precision."
    },
    {
        "id": 105,
        "name": "R0LEX Luxury Edition 30",
        "brand": "R0LEX",
        "category": "watch",
        "canceledPrice": "₹1500",
        "price": "₹1000",
        "image": "assets/images/brands/ROLEX/rolex-105-1.jpeg",
        "images": [
            "assets/images/brands/ROLEX/rolex-105-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this R0LEX timepiece. A perfect blend of style and precision."
    },
    {
        "id": 106,
        "name": "R0LEX Luxury Edition 31",
        "brand": "R0LEX",
        "category": "watch",
        "canceledPrice": "₹1500",
        "price": "₹1000",
        "image": "assets/images/brands/ROLEX/rolex-106-1.jpeg",
        "images": [
            "assets/images/brands/ROLEX/rolex-106-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this R0LEX timepiece. A perfect blend of style and precision."
    },
    {
        "id": 107,
        "name": "R0LEX Luxury Edition 32",
        "brand": "R0LEX",
        "category": "watch",
        "canceledPrice": "₹1500",
        "price": "₹1000",
        "image": "assets/images/brands/ROLEX/rolex-107-1.jpeg",
        "images": [
            "assets/images/brands/ROLEX/rolex-107-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this R0LEX timepiece. A perfect blend of style and precision."
    },
    {
        "id": 108,
        "name": "R0LEX Luxury Edition 33",
        "brand": "R0LEX",
        "category": "watch",
        "canceledPrice": "₹1500",
        "price": "₹1000",
        "image": "assets/images/brands/ROLEX/rolex-108-1.jpeg",
        "images": [
            "assets/images/brands/ROLEX/rolex-108-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this R0LEX timepiece. A perfect blend of style and precision."
    },
    {
        "id": 109,
        "name": "R0LEX Luxury Edition 34",
        "brand": "R0LEX",
        "category": "watch",
        "canceledPrice": "₹1500",
        "price": "₹1000",
        "image": "assets/images/brands/ROLEX/rolex-109-1.jpeg",
        "images": [
            "assets/images/brands/ROLEX/rolex-109-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this R0LEX timepiece. A perfect blend of style and precision."
    },
    {
        "id": 110,
        "name": "R0LEX Luxury Edition 35",
        "brand": "R0LEX",
        "category": "watch",
        "canceledPrice": "₹1500",
        "price": "₹1000",
        "image": "assets/images/brands/ROLEX/rolex-110-1.jpeg",
        "images": [
            "assets/images/brands/ROLEX/rolex-110-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this R0LEX timepiece. A perfect blend of style and precision."
    },
    {
        "id": 111,
        "name": "R0LEX Luxury Edition 36",
        "brand": "R0LEX",
        "category": "watch",
        "canceledPrice": "₹1500",
        "price": "₹1000",
        "image": "assets/images/brands/ROLEX/rolex-111-1.jpeg",
        "images": [
            "assets/images/brands/ROLEX/rolex-111-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this R0LEX timepiece. A perfect blend of style and precision."
    },
    {
        "id": 112,
        "name": "R0LEX Luxury Edition 37",
        "brand": "R0LEX",
        "category": "watch",
        "canceledPrice": "₹1500",
        "price": "₹1000",
        "image": "assets/images/brands/ROLEX/rolex-112-1.jpeg",
        "images": [
            "assets/images/brands/ROLEX/rolex-112-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this R0LEX timepiece. A perfect blend of style and precision."
    },
    {
        "id": 113,
        "name": "R0LEX Luxury Edition 38",
        "brand": "R0LEX",
        "category": "watch",
        "canceledPrice": "₹1500",
        "price": "₹1000",
        "image": "assets/images/brands/ROLEX/rolex-113-1.jpeg",
        "images": [
            "assets/images/brands/ROLEX/rolex-113-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this R0LEX timepiece. A perfect blend of style and precision."
    },
    {
        "id": 114,
        "name": "R0LEX Luxury Edition 39",
        "brand": "R0LEX",
        "category": "watch",
        "canceledPrice": "₹1500",
        "price": "₹1000",
        "image": "assets/images/brands/ROLEX/rolex-114-1.jpeg",
        "images": [
            "assets/images/brands/ROLEX/rolex-114-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this R0LEX timepiece. A perfect blend of style and precision."
    },
    {
        "id": 115,
        "name": "R0LEX Luxury Edition 40",
        "brand": "R0LEX",
        "category": "watch",
        "canceledPrice": "₹1500",
        "price": "₹1000",
        "image": "assets/images/brands/ROLEX/rolex-115-1.jpeg",
        "images": [
            "assets/images/brands/ROLEX/rolex-115-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this R0LEX timepiece. A perfect blend of style and precision."
    },
    {
        "id": 116,
        "name": "R0LEX Luxury Edition 41",
        "brand": "R0LEX",
        "category": "watch",
        "canceledPrice": "₹1500",
        "price": "₹1000",
        "image": "assets/images/brands/ROLEX/rolex-116-1.jpeg",
        "images": [
            "assets/images/brands/ROLEX/rolex-116-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this R0LEX timepiece. A perfect blend of style and precision."
    },
    {
        "id": 117,
        "name": "R0LEX Luxury Edition 42",
        "brand": "R0LEX",
        "category": "watch",
        "canceledPrice": "₹1500",
        "price": "₹1000",
        "image": "assets/images/brands/ROLEX/rolex-117-1.jpeg",
        "images": [
            "assets/images/brands/ROLEX/rolex-117-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this R0LEX timepiece. A perfect blend of style and precision."
    },
    {
        "id": 118,
        "name": "R0LEX Luxury Edition 43",
        "brand": "R0LEX",
        "category": "watch",
        "canceledPrice": "₹1500",
        "price": "₹1000",
        "image": "assets/images/brands/ROLEX/rolex-118-1.jpeg",
        "images": [
            "assets/images/brands/ROLEX/rolex-118-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this R0LEX timepiece. A perfect blend of style and precision."
    },
    {
        "id": 119,
        "name": "R0LEX Luxury Edition 44",
        "brand": "R0LEX",
        "category": "watch",
        "canceledPrice": "₹1500",
        "price": "₹1000",
        "image": "assets/images/brands/ROLEX/rolex-119-1.jpeg",
        "images": [
            "assets/images/brands/ROLEX/rolex-119-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this R0LEX timepiece. A perfect blend of style and precision."
    },
    {
        "id": 120,
        "name": "R0LEX Luxury Edition 45",
        "brand": "R0LEX",
        "category": "watch",
        "canceledPrice": "₹1500",
        "price": "₹1000",
        "image": "assets/images/brands/ROLEX/rolex-120-1.jpeg",
        "images": [
            "assets/images/brands/ROLEX/rolex-120-1.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this R0LEX timepiece. A perfect blend of style and precision."
    },
    {
        "id": 121,
        "name": "seiko luxury edition 1",
        "brand": "SEIK0",
        "category": "watch",
        "canceledPrice": "₹2000",
        "price": "₹1100",
        "image": "assets/images/brands/SEIKO/seiko-121-1.jpeg",
        "images": [
            "assets/images/brands/SEIKO/seiko-121-1.jpeg",
            "assets/images/brands/SEIKO/seiko-121-2.jpeg",
            "assets/images/brands/SEIKO/seiko-121-3.jpeg"
        ],
        "description": "Experience the pinnacle of craftsmanship with this SEIK0 timepiece. A perfect blend of style and precision."
    },
    {
        "id": 122,
        "name": "HAVAS FOR HIM RASSAASI 100 ML",
        "brand": "PERFUME",
        "category": "perfumes",
        "canceledPrice": "₹3500",
        "price": "₹2500",
        "image": "assets/images/perfumes/perfume-124-1.jpeg",
        "images": [
            "assets/images/perfumes/perfume-124-1.jpeg",
            "assets/images/perfumes/perfume-124-2.jpeg",
            "assets/images/perfumes/perfume-124-3.jpeg"
        ],
        "description": ""
    },
    {
        "id": 123,
        "name": "LATAFAAH KHAAMRAAH 100 ML",
        "brand": "PERFUME",
        "category": "perfumes",
        "canceledPrice": "₹5000",
        "price": "₹3500",
        "image": "assets/images/perfumes/perfume-125-1.jpeg",
        "images": [
            "assets/images/perfumes/perfume-125-1.jpeg",
            "assets/images/perfumes/perfume-125-2.jpeg",
            "assets/images/perfumes/perfume-125-3.jpeg"
        ],
        "description": ""
    },
    {
        "id": 124,
        "name": "HAVAS ICE BY RASSAASI 100 ML",
        "brand": "PERFUME",
        "category": "perfumes",
        "canceledPrice": "₹4500",
        "price": "₹3700",
        "image": "assets/images/perfumes/perfume-126-1.jpeg",
        "images": [
            "assets/images/perfumes/perfume-126-1.jpeg",
            "assets/images/perfumes/perfume-126-2.jpeg",
            "assets/images/perfumes/perfume-126-3.jpeg"
        ],
        "description": ""
    },
    {
        "id": 125,
        "name": "IBRAHQ FRENCHH TOBACO 100 ML",
        "brand": "PERFUME",
        "category": "perfumes",
        "canceledPrice": "₹6000",
        "price": "₹4000",
        "image": "assets/images/perfumes/perfume-127-1.jpeg",
        "images": [
            "assets/images/perfumes/perfume-127-1.jpeg"
        ],
        "description": ""
    },
    {
        "id": 126,
        "name": "IBRAHQ SPANISHH TOBACO 100 ML",
        "brand": "PERFUME",
        "category": "perfumes",
        "canceledPrice": "₹6000",
        "price": "₹4000",
        "image": "assets/images/perfumes/perfume-128-1.jpeg",
        "images": [
            "assets/images/perfumes/perfume-128-1.jpeg"
        ],
        "description": ""
    },
    {
        "id": 127,
        "name": "IBRAHQ BLUE DIAMOND AQUA 150 ML",
        "brand": "PERFUME",
        "category": "perfumes",
        "canceledPrice": "₹6000",
        "price": "₹3350",
        "image": "assets/images/perfumes/perfume-129-1.jpeg",
        "images": [
            "assets/images/perfumes/perfume-129-1.jpeg"
        ],
        "description": ""
    },
    {
        "id": 128,
        "name": "AFNAANN 9PM REBEL",
        "brand": "PERFUME",
        "category": "perfumes",
        "canceledPrice": "₹4500",
        "price": "₹3600",
        "image": "assets/images/perfumes/perfume-130-1.jpeg",
        "images": [
            "assets/images/perfumes/perfume-130-1.jpeg"
        ],
        "description": ""
    },
    {
        "id": 129,
        "name": "AFNAANN 9PM",
        "brand": "PERFUME",
        "category": "perfumes",
        "canceledPrice": "₹5000",
        "price": "₹3600",
        "image": "assets/images/perfumes/perfume-131-1.jpeg",
        "images": [
            "assets/images/perfumes/perfume-131-1.jpeg"
        ],
        "description": ""
    },
    {
        "id": 130,
        "name": "KAAF AHMMED AL MAGGRIBI",
        "brand": "PERFUME",
        "category": "perfumes",
        "canceledPrice": "₹4000",
        "price": "₹3500",
        "image": "assets/images/perfumes/perfume-132-1.jpeg",
        "images": [
            "assets/images/perfumes/perfume-132-1.jpeg"
        ],
        "description": ""
    },
    {
        "id": 131,
        "name": "IBRAQH VINTAGE TOBBACOO",
        "brand": "PERFUME",
        "category": "perfumes",
        "canceledPrice": "₹6000",
        "price": "₹4999",
        "image": "assets/images/perfumes/perfume-133-1.jpeg",
        "images": [
            "assets/images/perfumes/perfume-133-1.jpeg"
        ],
        "description": ""
    },
    {
        "id": 132,
        "name": "HAVAS LONDON 100 ML",
        "brand": "PERFUME",
        "category": "perfumes",
        "canceledPrice": "₹4000",
        "price": "₹3500",
        "image": "assets/images/perfumes/perfume-134-1.jpeg",
        "images": [
            "assets/images/perfumes/perfume-134-1.jpeg"
        ],
        "description": ""
    },
    {
        "id": 133,
        "name": "HAVAS FIRE 100 ML",
        "brand": "PERFUME",
        "category": "perfumes",
        "canceledPrice": "₹4000",
        "price": "₹3500",
        "image": "assets/images/perfumes/perfume-135-1.jpeg",
        "images": [
            "assets/images/perfumes/perfume-135-1.jpeg"
        ],
        "description": ""
    },
    {
        "id": 134,
        "name": "ARMHAAF CLUB DE NUIIT ICONIC",
        "brand": "PERFUME",
        "category": "perfumes",
        "canceledPrice": "₹7000",
        "price": "₹4000",
        "image": "assets/images/perfumes/perfume-136-1.jpeg",
        "images": [
            "assets/images/perfumes/perfume-136-1.jpeg"
        ],
        "description": ""
    },
    {
        "id": 135,
        "name": "IBRAHQ GREEK TOBACCO",
        "brand": "PERFUME",
        "category": "perfumes",
        "canceledPrice": "₹6000",
        "price": "₹4000",
        "image": "assets/images/perfumes/IBRAQGREEKTOBACO.jpeg",
        "images": [
            "assets/images/perfumes/IBRAQGREEKTOBACO.jpeg"
        ],
        "description": ""
    },
    {
        "id": 136,
        "name": "AFNAANN 9PM ELIXIR",
        "brand": "PERFUME",
        "category": "perfumes",
        "canceledPrice": "₹6000",
        "price": "₹3600",
        "image": "assets/images/perfumes/9PMELIXIR.jpeg",
        "images": [
            "assets/images/perfumes/9PMELIXIR.jpeg"
        ],
        "description": ""
    },
    {
        "id": 137,
        "name": "LATAFAAH ASAD",
        "brand": "PERFUME",
        "category": "perfumes",
        "canceledPrice": "₹5000",
        "price": "₹3500",
        "image": "assets/images/perfumes/perfume-137-1.jpeg",
        "images": [
            "assets/images/perfumes/perfume-137-1.jpeg"
        ],
        "description": ""
    },
    {
        "id": 138,
        "name": "RASAASI FATAAN",
        "brand": "PERFUME",
        "category": "perfumes",
        "canceledPrice": "₹4000",
        "price": "₹2700",
        "image": "assets/images/perfumes/perfume-138-1.jpeg",
        "images": [
            "assets/images/perfumes/perfume-138-1.jpeg"
        ],
        "description": ""
    },
    {
        "id": 139,
        "name": "CARRTIER Premium Sunglasses 2",
        "brand": "CARRTIER",
        "category": "sunglasses",
        "canceledPrice": "₹1500",
        "price": "₹750",
        "image": "assets/images/sunglasses/CARTIER/cartier-139-1.jpeg",
        "images": [
            "assets/images/sunglasses/CARTIER/cartier-139-1.jpeg"
        ],
        "description": ""
    },
    {
        "id": 140,
        "name": "CARRTIER Premium Sunglasses 3",
        "brand": "CARRTIER",
        "category": "sunglasses",
        "canceledPrice": "₹1500",
        "price": "₹750",
        "image": "",
        "images": [],
        "description": ""
    },
    {
        "id": 141,
        "name": "CASI0 luxry edition 4",
        "brand": "CASI0",
        "category": "watch",
        "canceledPrice": "₹3000",
        "price": "₹1100",
        "image": "assets/images/brands/CASIO/casio-141-1.jpeg",
        "images": [
            "assets/images/brands/CASIO/casio-141-1.jpeg",
            "assets/images/brands/CASIO/casio-141-2.jpeg",
            "assets/images/brands/CASIO/casio-141-3.jpeg"
        ],
        "description": ""
    },
    {
        "id": 142,
        "name": "CASI0 luxry edition 5",
        "brand": "CASI0",
        "category": "watch",
        "canceledPrice": "₹3000",
        "price": "₹1400",
        "image": "assets/images/brands/CASIO/casio-142-1.jpeg",
        "images": [
            "assets/images/brands/CASIO/casio-142-1.jpeg",
            "assets/images/brands/CASIO/casio-142-2.jpeg"
        ],
        "description": ""
    },
    {
        "id": 143,
        "name": "PATEKH FILIP luxury edition 1",
        "brand": "PATEKH FILIP",
        "category": "watch",
        "canceledPrice": "₹3500",
        "price": "₹1400",
        "image": "assets/images/brands/PATEK/patekh filip-143-1.jpeg",
        "images": [
            "assets/images/brands/PATEK/patekh filip-143-1.jpeg"
        ],
        "description": ""
    },
    {
        "id": 144,
        "name": "PATEKH FILIP luxury edition 2",
        "brand": "PATEKH FILIP",
        "category": "watch",
        "canceledPrice": "₹3500",
        "price": "₹1400",
        "image": "assets/images/brands/PATEK/patekh filip-144-1.jpeg",
        "images": [
            "assets/images/brands/PATEK/patekh filip-144-1.jpeg"
        ],
        "description": ""
    }
];
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;

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
    let category = 'watch';
    if (hash === '#sunglasses') category = 'sunglasses';
    else if (hash === '#perfumes') category = 'perfumes';
    
    let containerId = '#watchFiltersContainer';
    if (category === 'sunglasses') containerId = '#sunglassesFiltersContainer';
    else if (category === 'perfumes') containerId = '#perfumesFiltersContainer';
    const selectedBrands = Array.from(document.querySelectorAll(`${containerId} .brand-filter:checked`)).map(cb => cb.value);
    
    let filtered = products.filter(p => p.category === category || (!p.category && category === 'watch'));
    
    if (selectedBrands.length > 0) {
        filtered = filtered.filter(p => selectedBrands.includes(p.brand));
    }
    
    let sortSelectId = 'sortPriceWatch';
    if (category === 'sunglasses') sortSelectId = 'sortPriceSunglasses';
    else if (category === 'perfumes') sortSelectId = 'sortPricePerfumes';
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
        let multiImg = filtered.filter(p => p.images && p.images.length > 1);
        let singleImg = filtered.filter(p => !p.images || p.images.length <= 1);
        
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
    const hotDealsSection = document.querySelector('.hot-deals-section');
    const sunglassesHero = document.getElementById('sunglassesHero');
    const perfumesHero = document.getElementById('perfumesHero');
    const watchFilters = document.getElementById('watchFiltersWrapper');
    const sunglassesFilters = document.getElementById('sunglassesFiltersWrapper');
    const perfumesFilters = document.getElementById('perfumesFiltersWrapper');
    const productGrid = document.getElementById('productGrid');
    
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (hash === '#perfumes' && href && href.includes('#perfumes')) link.classList.add('active');
        else if (hash === '#sunglasses' && href && href.includes('#sunglasses')) link.classList.add('active');
        else if ((hash === '#home' || hash === '') && href && (href === 'index.html' || href === '#home' || href === '')) link.classList.add('active');
    });
    
    document.querySelectorAll('.brand-filter').forEach(cb => cb.checked = false);
    
    const sortWatch = document.getElementById('sortPriceWatch');
    const sortSunglasses = document.getElementById('sortPriceSunglasses');
    const sortPerfumes = document.getElementById('sortPricePerfumes');
    if (sortWatch) sortWatch.value = 'default';
    if (sortSunglasses) sortSunglasses.value = 'default';
    if (sortPerfumes) sortPerfumes.value = 'default';
    
    if (hash === '#perfumes') {
        if (carouselWrapper) carouselWrapper.style.display = 'none';
        if (hotDealsSection) hotDealsSection.style.display = 'none';
        if (sunglassesHero) sunglassesHero.style.display = 'none';
        if (perfumesHero) perfumesHero.style.display = 'flex';
        if (watchFilters) watchFilters.style.display = 'none';
        if (sunglassesFilters) sunglassesFilters.style.display = 'none';
        if (perfumesFilters) perfumesFilters.style.display = '';
        if (productGrid) filterProducts();
        const productsSection = document.getElementById('products');
        if (productsSection) productsSection.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#sunglasses') {
        if (carouselWrapper) carouselWrapper.style.display = 'none';
        if (hotDealsSection) hotDealsSection.style.display = 'none';
        if (sunglassesHero) sunglassesHero.style.display = 'flex';
        if (perfumesHero) perfumesHero.style.display = 'none';
        if (watchFilters) watchFilters.style.display = 'none';
        if (sunglassesFilters) sunglassesFilters.style.display = '';
        if (perfumesFilters) perfumesFilters.style.display = 'none';
        if (productGrid) filterProducts();
    } else {
        if (carouselWrapper) carouselWrapper.style.display = '';
        if (hotDealsSection) hotDealsSection.style.display = '';
        if (sunglassesHero) sunglassesHero.style.display = 'none';
        if (perfumesHero) perfumesHero.style.display = 'none';
        if (watchFilters) watchFilters.style.display = '';
        if (sunglassesFilters) sunglassesFilters.style.display = 'none';
        if (perfumesFilters) perfumesFilters.style.display = 'none';
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