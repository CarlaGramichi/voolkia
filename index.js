const express = require('express')
const fs = require("fs");
const app = express()
const port = process.env.PORT || 3000

const response = {
    "site_id": "MLA",
    "paging": {
        "total": 90591,
        "offset": 0,
        "limit": 50,
        "primary_results": 1039
    },
    "results": [
        {
            "id": "MLA811601010",
            "site_id": "MLA",
            "title": "Samsung Galaxy J4+ Dual Sim 32 Gb Negro (2 Gb Ram)",
            "seller": {
                "id": 451257294,
                "power_seller_status": null,
                "car_dealer": false,
                "real_estate_agency": false,
                "tags": []
            },
            "price": 19609,
            "currency_id": "ARS",
            "available_quantity": 1,
            "sold_quantity": 1,
            "buying_mode": "buy_it_now",
            "listing_type_id": "gold_pro",
            "stop_time": "2039-08-22T04:00:00.000Z",
            "condition": "new",
            "permalink": "https://www.mercadolibre.com.ar/p/MLA13550363",
            "thumbnail": "http://mla-s1-p.mlstatic.com/943469-MLA31002769183_062019-I.jpg",
            "accepts_mercadopago": true,
            "installments": {
                "quantity": 6,
                "amount": 3268.17,
                "rate": 0,
                "currency_id": "ARS"
            },
            "address": {
                "state_id": "AR-B",
                "state_name": "Buenos Aires",
                "city_id": "TUxBQ0dFTjY4NTg",
                "city_name": "General Rodríguez"
            },
            "shipping": {
                "free_shipping": true,
                "mode": "me2",
                "tags": [
                    "mandatory_free_shipping"
                ],
                "logistic_type": "drop_off",
                "store_pick_up": false
            },
            "seller_address": {
                "id": "",
                "comment": "",
                "address_line": "",
                "zip_code": "",
                "country": {
                    "id": "AR",
                    "name": "Argentina"
                },
                "state": {
                    "id": "AR-B",
                    "name": "Buenos Aires"
                },
                "city": {
                    "id": "TUxBQ0dFTjY4NTg",
                    "name": "General Rodríguez"
                },
                "latitude": "",
                "longitude": ""
            },
            "attributes": [
                {
                    "values": [
                        {
                            "source": 1,
                            "id": "206",
                            "name": "Samsung",
                            "struct": null
                        }
                    ],
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Otros",
                    "id": "BRAND",
                    "value_id": "206",
                    "value_name": "Samsung",
                    "value_struct": null,
                    "source": 1,
                    "name": "Marca"
                },
                {
                    "id": "CPU_MODEL",
                    "value_struct": null,
                    "values": [
                        {
                            "struct": null,
                            "source": 6587939990796619,
                            "id": "7657686",
                            "name": "4x1.4 GHz Cortex-A53"
                        }
                    ],
                    "attribute_group_name": "Otros",
                    "name": "Modelo de CPU",
                    "value_id": "7657686",
                    "value_name": "4x1.4 GHz Cortex-A53",
                    "attribute_group_id": "OTHERS",
                    "source": 6587939990796619
                },
                {
                    "value_name": "Adreno 308",
                    "value_struct": null,
                    "values": [
                        {
                            "source": 4709228965570453,
                            "id": "7531831",
                            "name": "Adreno 308",
                            "struct": null
                        }
                    ],
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Otros",
                    "id": "GPU_MODEL",
                    "name": "Modelo de GPU",
                    "value_id": "7531831",
                    "source": 4709228965570453
                },
                {
                    "values": [
                        {
                            "id": "2230284",
                            "name": "Nuevo",
                            "struct": null,
                            "source": 8342579661593500
                        }
                    ],
                    "id": "ITEM_CONDITION",
                    "value_struct": null,
                    "value_name": "Nuevo",
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Otros",
                    "source": 8342579661593500,
                    "name": "Condición del ítem",
                    "value_id": "2230284"
                },
                {
                    "value_id": "195973",
                    "value_name": "Galaxy J",
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Otros",
                    "source": 1,
                    "id": "LINE",
                    "name": "Línea",
                    "value_struct": null,
                    "values": [
                        {
                            "source": 1,
                            "id": "195973",
                            "name": "Galaxy J",
                            "struct": null
                        }
                    ]
                },
                {
                    "value_name": "J4+ Duos",
                    "values": [
                        {
                            "id": "6047739",
                            "name": "J4+ Duos",
                            "struct": null,
                            "source": 1
                        }
                    ],
                    "id": "MODEL",
                    "name": "Modelo",
                    "value_id": "6047739",
                    "source": 1,
                    "value_struct": null,
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Otros"
                },
                {
                    "values": [
                        {
                            "struct": null,
                            "source": 6587939990796619,
                            "id": "2087879",
                            "name": "Snapdragon 425"
                        }
                    ],
                    "attribute_group_name": "Otros",
                    "name": "Modelo del procesador",
                    "value_name": "Snapdragon 425",
                    "value_struct": null,
                    "attribute_group_id": "OTHERS",
                    "source": 6587939990796619,
                    "id": "PROCESSOR_MODEL",
                    "value_id": "2087879"
                }
            ],
            "differential_pricing": {
                "id": 33669181
            },
            "original_price": null,
            "category_id": "MLA1055",
            "official_store_id": null,
            "catalog_product_id": "MLA13550363",
            "tags": [
                "extended_warranty_eligible",
                "good_quality_picture",
                "good_quality_thumbnail",
                "immediate_payment",
                "cart_eligible"
            ],
            "catalog_listing": true
        },
        {
            "id": "MLA816019440",
            "site_id": "MLA",
            "title": "Apple iPhone Xr Dual Sim 128 Gb Blanco",
            "seller": {
                "id": 70894522,
                "power_seller_status": null,
                "car_dealer": false,
                "real_estate_agency": false,
                "tags": []
            },
            "price": 79470,
            "currency_id": "ARS",
            "available_quantity": 1,
            "sold_quantity": 0,
            "buying_mode": "buy_it_now",
            "listing_type_id": "gold_special",
            "stop_time": "2039-09-15T04:00:00.000Z",
            "condition": "new",
            "permalink": "https://www.mercadolibre.com.ar/p/MLA12866684",
            "thumbnail": "http://mla-s1-p.mlstatic.com/980849-MLA31002261498_062019-I.jpg",
            "accepts_mercadopago": true,
            "installments": {
                "quantity": 12,
                "amount": 10845.67,
                "rate": 63.77,
                "currency_id": "ARS"
            },
            "address": {
                "state_id": "AR-C",
                "state_name": "Capital Federal",
                "city_id": "TUxBQlBBVDI0ODFa",
                "city_name": "Paternal"
            },
            "shipping": {
                "free_shipping": true,
                "mode": "me2",
                "tags": [
                    "mandatory_free_shipping"
                ],
                "logistic_type": "drop_off",
                "store_pick_up": false
            },
            "seller_address": {
                "id": "",
                "comment": "",
                "address_line": "",
                "zip_code": "",
                "country": {
                    "id": "AR",
                    "name": "Argentina"
                },
                "state": {
                    "id": "AR-C",
                    "name": "Capital Federal"
                },
                "city": {
                    "id": "TUxBQlBBVDI0ODFa",
                    "name": "Paternal"
                },
                "latitude": "",
                "longitude": ""
            },
            "attributes": [
                {
                    "source": 1,
                    "id": "BRAND",
                    "value_name": "Apple",
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Otros",
                    "name": "Marca",
                    "value_id": "9344",
                    "value_struct": null,
                    "values": [
                        {
                            "struct": null,
                            "source": 1,
                            "id": "9344",
                            "name": "Apple"
                        }
                    ]
                },
                {
                    "name": "Modelo de CPU",
                    "attribute_group_id": "OTHERS",
                    "source": 1,
                    "id": "CPU_MODEL",
                    "value_id": "6927770",
                    "value_name": "2x2.5 GHz Vortex/4x1.6 GHz Tempest",
                    "value_struct": null,
                    "values": [
                        {
                            "id": "6927770",
                            "name": "2x2.5 GHz Vortex/4x1.6 GHz Tempest",
                            "struct": null,
                            "source": 1
                        }
                    ],
                    "attribute_group_name": "Otros"
                },
                {
                    "values": [
                        {
                            "name": "Nuevo",
                            "struct": null,
                            "source": 6808261514773724,
                            "id": "2230284"
                        }
                    ],
                    "source": 6808261514773724,
                    "value_id": "2230284",
                    "value_name": "Nuevo",
                    "value_struct": null,
                    "attribute_group_name": "Otros",
                    "id": "ITEM_CONDITION",
                    "name": "Condición del ítem",
                    "attribute_group_id": "OTHERS"
                },
                {
                    "value_id": "58993",
                    "value_struct": null,
                    "values": [
                        {
                            "struct": null,
                            "source": 1,
                            "id": "58993",
                            "name": "iPhone"
                        }
                    ],
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Otros",
                    "source": 1,
                    "id": "LINE",
                    "name": "Línea",
                    "value_name": "iPhone"
                },
                {
                    "name": "Modelo",
                    "value_struct": null,
                    "values": [
                        {
                            "id": "5414260",
                            "name": "iPhone XR",
                            "struct": null,
                            "source": 1
                        }
                    ],
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Otros",
                    "id": "MODEL",
                    "value_id": "5414260",
                    "value_name": "iPhone XR",
                    "source": 1
                },
                {
                    "id": "PROCESSOR_MODEL",
                    "attribute_group_id": "OTHERS",
                    "values": [
                        {
                            "id": "6927771",
                            "name": "Apple A12 Bionic",
                            "struct": null,
                            "source": 1
                        }
                    ],
                    "attribute_group_name": "Otros",
                    "source": 1,
                    "name": "Modelo del procesador",
                    "value_id": "6927771",
                    "value_name": "Apple A12 Bionic",
                    "value_struct": null
                }
            ],
            "original_price": null,
            "category_id": "MLA1055",
            "official_store_id": null,
            "catalog_product_id": "MLA12866684",
            "tags": [
                "good_quality_picture",
                "good_quality_thumbnail",
                "immediate_payment",
                "cart_eligible"
            ],
            "catalog_listing": true
        },
        {
            "id": "MLA816019440",
            "site_id": "MLA",
            "title": "Apple iPhone Xr Dual Sim 128 Gb Blanco",
            "seller": {
                "id": 179571326,
                "power_seller_status": null,
                "car_dealer": false,
                "real_estate_agency": false,
                "tags": []
            },
            "price": 79470,
            "currency_id": "ARS",
            "available_quantity": 1,
            "sold_quantity": 0,
            "buying_mode": "buy_it_now",
            "listing_type_id": "gold_special",
            "stop_time": "2039-09-15T04:00:00.000Z",
            "condition": "new",
            "permalink": "https://www.mercadolibre.com.ar/p/MLA12866684",
            "thumbnail": "http://mla-s1-p.mlstatic.com/980849-MLA31002261498_062019-I.jpg",
            "accepts_mercadopago": true,
            "installments": {
                "quantity": 12,
                "amount": 10845.67,
                "rate": 63.77,
                "currency_id": "ARS"
            },
            "address": {
                "state_id": "AR-C",
                "state_name": "Capital Federal",
                "city_id": "TUxBQlBBVDI0ODFa",
                "city_name": "Paternal"
            },
            "shipping": {
                "free_shipping": true,
                "mode": "me2",
                "tags": [
                    "mandatory_free_shipping"
                ],
                "logistic_type": "drop_off",
                "store_pick_up": false
            },
            "seller_address": {
                "id": "",
                "comment": "",
                "address_line": "",
                "zip_code": "",
                "country": {
                    "id": "AR",
                    "name": "Argentina"
                },
                "state": {
                    "id": "AR-C",
                    "name": "Capital Federal"
                },
                "city": {
                    "id": "TUxBQlBBVDI0ODFa",
                    "name": "Paternal"
                },
                "latitude": "",
                "longitude": ""
            },
            "attributes": [
                {
                    "source": 1,
                    "id": "BRAND",
                    "value_name": "Apple",
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Otros",
                    "name": "Marca",
                    "value_id": "9344",
                    "value_struct": null,
                    "values": [
                        {
                            "struct": null,
                            "source": 1,
                            "id": "9344",
                            "name": "Apple"
                        }
                    ]
                },
                {
                    "name": "Modelo de CPU",
                    "attribute_group_id": "OTHERS",
                    "source": 1,
                    "id": "CPU_MODEL",
                    "value_id": "6927770",
                    "value_name": "2x2.5 GHz Vortex/4x1.6 GHz Tempest",
                    "value_struct": null,
                    "values": [
                        {
                            "id": "6927770",
                            "name": "2x2.5 GHz Vortex/4x1.6 GHz Tempest",
                            "struct": null,
                            "source": 1
                        }
                    ],
                    "attribute_group_name": "Otros"
                },
                {
                    "values": [
                        {
                            "name": "Nuevo",
                            "struct": null,
                            "source": 6808261514773724,
                            "id": "2230284"
                        }
                    ],
                    "source": 6808261514773724,
                    "value_id": "2230284",
                    "value_name": "Nuevo",
                    "value_struct": null,
                    "attribute_group_name": "Otros",
                    "id": "ITEM_CONDITION",
                    "name": "Condición del ítem",
                    "attribute_group_id": "OTHERS"
                },
                {
                    "value_id": "58993",
                    "value_struct": null,
                    "values": [
                        {
                            "struct": null,
                            "source": 1,
                            "id": "58993",
                            "name": "iPhone"
                        }
                    ],
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Otros",
                    "source": 1,
                    "id": "LINE",
                    "name": "Línea",
                    "value_name": "iPhone"
                },
                {
                    "name": "Modelo",
                    "value_struct": null,
                    "values": [
                        {
                            "id": "5414260",
                            "name": "iPhone XR",
                            "struct": null,
                            "source": 1
                        }
                    ],
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Otros",
                    "id": "MODEL",
                    "value_id": "5414260",
                    "value_name": "iPhone XR",
                    "source": 1
                },
                {
                    "id": "PROCESSOR_MODEL",
                    "attribute_group_id": "OTHERS",
                    "values": [
                        {
                            "id": "6927771",
                            "name": "Apple A12 Bionic",
                            "struct": null,
                            "source": 1
                        }
                    ],
                    "attribute_group_name": "Otros",
                    "source": 1,
                    "name": "Modelo del procesador",
                    "value_id": "6927771",
                    "value_name": "Apple A12 Bionic",
                    "value_struct": null
                }
            ],
            "original_price": null,
            "category_id": "MLA1055",
            "official_store_id": null,
            "catalog_product_id": "MLA12866684",
            "tags": [
                "good_quality_picture",
                "good_quality_thumbnail",
                "immediate_payment",
                "cart_eligible"
            ],
            "catalog_listing": true
        },
        {
            "id": "MLA816019440",
            "site_id": "MLA",
            "title": "Apple iPhone Xr Dual Sim 128 Gb Blanco",
            "seller": {
                "id": 179571326,
                "power_seller_status": null,
                "car_dealer": false,
                "real_estate_agency": false,
                "tags": []
            },
            "price": 79470,
            "currency_id": "ARS",
            "available_quantity": 1,
            "sold_quantity": 0,
            "buying_mode": "buy_it_now",
            "listing_type_id": "gold_special",
            "stop_time": "2039-09-15T04:00:00.000Z",
            "condition": "new",
            "permalink": "https://www.mercadolibre.com.ar/p/MLA12866684",
            "thumbnail": "http://mla-s1-p.mlstatic.com/980849-MLA31002261498_062019-I.jpg",
            "accepts_mercadopago": true,
            "installments": {
                "quantity": 12,
                "amount": 10845.67,
                "rate": 63.77,
                "currency_id": "ARS"
            },
            "address": {
                "state_id": "AR-C",
                "state_name": "Capital Federal",
                "city_id": "TUxBQlBBVDI0ODFa",
                "city_name": "Paternal"
            },
            "shipping": {
                "free_shipping": true,
                "mode": "me2",
                "tags": [
                    "mandatory_free_shipping"
                ],
                "logistic_type": "drop_off",
                "store_pick_up": false
            },
            "seller_address": {
                "id": "",
                "comment": "",
                "address_line": "",
                "zip_code": "",
                "country": {
                    "id": "AR",
                    "name": "Argentina"
                },
                "state": {
                    "id": "AR-C",
                    "name": "Capital Federal"
                },
                "city": {
                    "id": "TUxBQlBBVDI0ODFa",
                    "name": "Paternal"
                },
                "latitude": "",
                "longitude": ""
            },
            "attributes": [
                {
                    "source": 1,
                    "id": "BRAND",
                    "value_name": "Apple",
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Otros",
                    "name": "Marca",
                    "value_id": "9344",
                    "value_struct": null,
                    "values": [
                        {
                            "struct": null,
                            "source": 1,
                            "id": "9344",
                            "name": "Apple"
                        }
                    ]
                },
                {
                    "name": "Modelo de CPU",
                    "attribute_group_id": "OTHERS",
                    "source": 1,
                    "id": "CPU_MODEL",
                    "value_id": "6927770",
                    "value_name": "2x2.5 GHz Vortex/4x1.6 GHz Tempest",
                    "value_struct": null,
                    "values": [
                        {
                            "id": "6927770",
                            "name": "2x2.5 GHz Vortex/4x1.6 GHz Tempest",
                            "struct": null,
                            "source": 1
                        }
                    ],
                    "attribute_group_name": "Otros"
                },
                {
                    "values": [
                        {
                            "name": "Nuevo",
                            "struct": null,
                            "source": 6808261514773724,
                            "id": "2230284"
                        }
                    ],
                    "source": 6808261514773724,
                    "value_id": "2230284",
                    "value_name": "Nuevo",
                    "value_struct": null,
                    "attribute_group_name": "Otros",
                    "id": "ITEM_CONDITION",
                    "name": "Condición del ítem",
                    "attribute_group_id": "OTHERS"
                },
                {
                    "value_id": "58993",
                    "value_struct": null,
                    "values": [
                        {
                            "struct": null,
                            "source": 1,
                            "id": "58993",
                            "name": "iPhone"
                        }
                    ],
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Otros",
                    "source": 1,
                    "id": "LINE",
                    "name": "Línea",
                    "value_name": "iPhone"
                },
                {
                    "name": "Modelo",
                    "value_struct": null,
                    "values": [
                        {
                            "id": "5414260",
                            "name": "iPhone XR",
                            "struct": null,
                            "source": 1
                        }
                    ],
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Otros",
                    "id": "MODEL",
                    "value_id": "5414260",
                    "value_name": "iPhone XR",
                    "source": 1
                },
                {
                    "id": "PROCESSOR_MODEL",
                    "attribute_group_id": "OTHERS",
                    "values": [
                        {
                            "id": "6927771",
                            "name": "Apple A12 Bionic",
                            "struct": null,
                            "source": 1
                        }
                    ],
                    "attribute_group_name": "Otros",
                    "source": 1,
                    "name": "Modelo del procesador",
                    "value_id": "6927771",
                    "value_name": "Apple A12 Bionic",
                    "value_struct": null
                }
            ],
            "original_price": null,
            "category_id": "MLA1055",
            "official_store_id": null,
            "catalog_product_id": "MLA12866684",
            "tags": [
                "good_quality_picture",
                "good_quality_thumbnail",
                "immediate_payment",
                "cart_eligible"
            ],
            "catalog_listing": true
        },
        {
            "id": "MLA816019440",
            "site_id": "MLA",
            "title": "Apple iPhone Xr Dual Sim 128 Gb Blanco",
            "seller": {
                "id": 70894521,
                "power_seller_status": null,
                "car_dealer": false,
                "real_estate_agency": false,
                "tags": []
            },
            "price": 79470,
            "currency_id": "ARS",
            "available_quantity": 1,
            "sold_quantity": 0,
            "buying_mode": "buy_it_now",
            "listing_type_id": "gold_special",
            "stop_time": "2039-09-15T04:00:00.000Z",
            "condition": "new",
            "permalink": "https://www.mercadolibre.com.ar/p/MLA12866684",
            "thumbnail": "http://mla-s1-p.mlstatic.com/980849-MLA31002261498_062019-I.jpg",
            "accepts_mercadopago": true,
            "installments": {
                "quantity": 12,
                "amount": 10845.67,
                "rate": 63.77,
                "currency_id": "ARS"
            },
            "address": {
                "state_id": "AR-C",
                "state_name": "Capital Federal",
                "city_id": "TUxBQlBBVDI0ODFa",
                "city_name": "Paternal"
            },
            "shipping": {
                "free_shipping": true,
                "mode": "me2",
                "tags": [
                    "mandatory_free_shipping"
                ],
                "logistic_type": "drop_off",
                "store_pick_up": false
            },
            "seller_address": {
                "id": "",
                "comment": "",
                "address_line": "",
                "zip_code": "",
                "country": {
                    "id": "AR",
                    "name": "Argentina"
                },
                "state": {
                    "id": "AR-C",
                    "name": "Capital Federal"
                },
                "city": {
                    "id": "TUxBQlBBVDI0ODFa",
                    "name": "Paternal"
                },
                "latitude": "",
                "longitude": ""
            },
            "attributes": [
                {
                    "source": 1,
                    "id": "BRAND",
                    "value_name": "Apple",
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Otros",
                    "name": "Marca",
                    "value_id": "9344",
                    "value_struct": null,
                    "values": [
                        {
                            "struct": null,
                            "source": 1,
                            "id": "9344",
                            "name": "Apple"
                        }
                    ]
                },
                {
                    "name": "Modelo de CPU",
                    "attribute_group_id": "OTHERS",
                    "source": 1,
                    "id": "CPU_MODEL",
                    "value_id": "6927770",
                    "value_name": "2x2.5 GHz Vortex/4x1.6 GHz Tempest",
                    "value_struct": null,
                    "values": [
                        {
                            "id": "6927770",
                            "name": "2x2.5 GHz Vortex/4x1.6 GHz Tempest",
                            "struct": null,
                            "source": 1
                        }
                    ],
                    "attribute_group_name": "Otros"
                },
                {
                    "values": [
                        {
                            "name": "Nuevo",
                            "struct": null,
                            "source": 6808261514773724,
                            "id": "2230284"
                        }
                    ],
                    "source": 6808261514773724,
                    "value_id": "2230284",
                    "value_name": "Nuevo",
                    "value_struct": null,
                    "attribute_group_name": "Otros",
                    "id": "ITEM_CONDITION",
                    "name": "Condición del ítem",
                    "attribute_group_id": "OTHERS"
                },
                {
                    "value_id": "58993",
                    "value_struct": null,
                    "values": [
                        {
                            "struct": null,
                            "source": 1,
                            "id": "58993",
                            "name": "iPhone"
                        }
                    ],
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Otros",
                    "source": 1,
                    "id": "LINE",
                    "name": "Línea",
                    "value_name": "iPhone"
                },
                {
                    "name": "Modelo",
                    "value_struct": null,
                    "values": [
                        {
                            "id": "5414260",
                            "name": "iPhone XR",
                            "struct": null,
                            "source": 1
                        }
                    ],
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Otros",
                    "id": "MODEL",
                    "value_id": "5414260",
                    "value_name": "iPhone XR",
                    "source": 1
                },
                {
                    "id": "PROCESSOR_MODEL",
                    "attribute_group_id": "OTHERS",
                    "values": [
                        {
                            "id": "6927771",
                            "name": "Apple A12 Bionic",
                            "struct": null,
                            "source": 1
                        }
                    ],
                    "attribute_group_name": "Otros",
                    "source": 1,
                    "name": "Modelo del procesador",
                    "value_id": "6927771",
                    "value_name": "Apple A12 Bionic",
                    "value_struct": null
                }
            ],
            "original_price": null,
            "category_id": "MLA1055",
            "official_store_id": null,
            "catalog_product_id": "MLA12866684",
            "tags": [
                "good_quality_picture",
                "good_quality_thumbnail",
                "immediate_payment",
                "cart_eligible"
            ],
            "catalog_listing": true
        },
        {
            "id": "MLA816019440",
            "site_id": "MLA",
            "title": "Apple iPhone Xr Dual Sim 128 Gb Blanco",
            "seller": {
                "id": 70894521,
                "power_seller_status": null,
                "car_dealer": false,
                "real_estate_agency": false,
                "tags": []
            },
            "price": 79470,
            "currency_id": "ARS",
            "available_quantity": 1,
            "sold_quantity": 0,
            "buying_mode": "buy_it_now",
            "listing_type_id": "gold_special",
            "stop_time": "2039-09-15T04:00:00.000Z",
            "condition": "new",
            "permalink": "https://www.mercadolibre.com.ar/p/MLA12866684",
            "thumbnail": "http://mla-s1-p.mlstatic.com/980849-MLA31002261498_062019-I.jpg",
            "accepts_mercadopago": true,
            "installments": {
                "quantity": 12,
                "amount": 10845.67,
                "rate": 63.77,
                "currency_id": "ARS"
            },
            "address": {
                "state_id": "AR-C",
                "state_name": "Capital Federal",
                "city_id": "TUxBQlBBVDI0ODFa",
                "city_name": "Paternal"
            },
            "shipping": {
                "free_shipping": true,
                "mode": "me2",
                "tags": [
                    "mandatory_free_shipping"
                ],
                "logistic_type": "drop_off",
                "store_pick_up": false
            },
            "seller_address": {
                "id": "",
                "comment": "",
                "address_line": "",
                "zip_code": "",
                "country": {
                    "id": "AR",
                    "name": "Argentina"
                },
                "state": {
                    "id": "AR-C",
                    "name": "Capital Federal"
                },
                "city": {
                    "id": "TUxBQlBBVDI0ODFa",
                    "name": "Paternal"
                },
                "latitude": "",
                "longitude": ""
            },
            "attributes": [
                {
                    "source": 1,
                    "id": "BRAND",
                    "value_name": "Apple",
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Otros",
                    "name": "Marca",
                    "value_id": "9344",
                    "value_struct": null,
                    "values": [
                        {
                            "struct": null,
                            "source": 1,
                            "id": "9344",
                            "name": "Apple"
                        }
                    ]
                },
                {
                    "name": "Modelo de CPU",
                    "attribute_group_id": "OTHERS",
                    "source": 1,
                    "id": "CPU_MODEL",
                    "value_id": "6927770",
                    "value_name": "2x2.5 GHz Vortex/4x1.6 GHz Tempest",
                    "value_struct": null,
                    "values": [
                        {
                            "id": "6927770",
                            "name": "2x2.5 GHz Vortex/4x1.6 GHz Tempest",
                            "struct": null,
                            "source": 1
                        }
                    ],
                    "attribute_group_name": "Otros"
                },
                {
                    "values": [
                        {
                            "name": "Nuevo",
                            "struct": null,
                            "source": 6808261514773724,
                            "id": "2230284"
                        }
                    ],
                    "source": 6808261514773724,
                    "value_id": "2230284",
                    "value_name": "Nuevo",
                    "value_struct": null,
                    "attribute_group_name": "Otros",
                    "id": "ITEM_CONDITION",
                    "name": "Condición del ítem",
                    "attribute_group_id": "OTHERS"
                },
                {
                    "value_id": "58993",
                    "value_struct": null,
                    "values": [
                        {
                            "struct": null,
                            "source": 1,
                            "id": "58993",
                            "name": "iPhone"
                        }
                    ],
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Otros",
                    "source": 1,
                    "id": "LINE",
                    "name": "Línea",
                    "value_name": "iPhone"
                },
                {
                    "name": "Modelo",
                    "value_struct": null,
                    "values": [
                        {
                            "id": "5414260",
                            "name": "iPhone XR",
                            "struct": null,
                            "source": 1
                        }
                    ],
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Otros",
                    "id": "MODEL",
                    "value_id": "5414260",
                    "value_name": "iPhone XR",
                    "source": 1
                },
                {
                    "id": "PROCESSOR_MODEL",
                    "attribute_group_id": "OTHERS",
                    "values": [
                        {
                            "id": "6927771",
                            "name": "Apple A12 Bionic",
                            "struct": null,
                            "source": 1
                        }
                    ],
                    "attribute_group_name": "Otros",
                    "source": 1,
                    "name": "Modelo del procesador",
                    "value_id": "6927771",
                    "value_name": "Apple A12 Bionic",
                    "value_struct": null
                }
            ],
            "original_price": null,
            "category_id": "MLA1055",
            "official_store_id": null,
            "catalog_product_id": "MLA12866684",
            "tags": [
                "good_quality_picture",
                "good_quality_thumbnail",
                "immediate_payment",
                "cart_eligible"
            ],
            "catalog_listing": true
        },
        {
            "id": "MLA816019440",
            "site_id": "MLA",
            "title": "Apple iPhone Xr Dual Sim 128 Gb Blanco",
            "seller": {
                "id": 70894521,
                "power_seller_status": null,
                "car_dealer": false,
                "real_estate_agency": false,
                "tags": []
            },
            "price": 79470,
            "currency_id": "ARS",
            "available_quantity": 1,
            "sold_quantity": 0,
            "buying_mode": "buy_it_now",
            "listing_type_id": "gold_special",
            "stop_time": "2039-09-15T04:00:00.000Z",
            "condition": "new",
            "permalink": "https://www.mercadolibre.com.ar/p/MLA12866684",
            "thumbnail": "http://mla-s1-p.mlstatic.com/980849-MLA31002261498_062019-I.jpg",
            "accepts_mercadopago": true,
            "installments": {
                "quantity": 12,
                "amount": 10845.67,
                "rate": 63.77,
                "currency_id": "ARS"
            },
            "address": {
                "state_id": "AR-C",
                "state_name": "Capital Federal",
                "city_id": "TUxBQlBBVDI0ODFa",
                "city_name": "Paternal"
            },
            "shipping": {
                "free_shipping": true,
                "mode": "me2",
                "tags": [
                    "mandatory_free_shipping"
                ],
                "logistic_type": "drop_off",
                "store_pick_up": false
            },
            "seller_address": {
                "id": "",
                "comment": "",
                "address_line": "",
                "zip_code": "",
                "country": {
                    "id": "AR",
                    "name": "Argentina"
                },
                "state": {
                    "id": "AR-C",
                    "name": "Capital Federal"
                },
                "city": {
                    "id": "TUxBQlBBVDI0ODFa",
                    "name": "Paternal"
                },
                "latitude": "",
                "longitude": ""
            },
            "attributes": [
                {
                    "source": 1,
                    "id": "BRAND",
                    "value_name": "Apple",
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Otros",
                    "name": "Marca",
                    "value_id": "9344",
                    "value_struct": null,
                    "values": [
                        {
                            "struct": null,
                            "source": 1,
                            "id": "9344",
                            "name": "Apple"
                        }
                    ]
                },
                {
                    "name": "Modelo de CPU",
                    "attribute_group_id": "OTHERS",
                    "source": 1,
                    "id": "CPU_MODEL",
                    "value_id": "6927770",
                    "value_name": "2x2.5 GHz Vortex/4x1.6 GHz Tempest",
                    "value_struct": null,
                    "values": [
                        {
                            "id": "6927770",
                            "name": "2x2.5 GHz Vortex/4x1.6 GHz Tempest",
                            "struct": null,
                            "source": 1
                        }
                    ],
                    "attribute_group_name": "Otros"
                },
                {
                    "values": [
                        {
                            "name": "Nuevo",
                            "struct": null,
                            "source": 6808261514773724,
                            "id": "2230284"
                        }
                    ],
                    "source": 6808261514773724,
                    "value_id": "2230284",
                    "value_name": "Nuevo",
                    "value_struct": null,
                    "attribute_group_name": "Otros",
                    "id": "ITEM_CONDITION",
                    "name": "Condición del ítem",
                    "attribute_group_id": "OTHERS"
                },
                {
                    "value_id": "58993",
                    "value_struct": null,
                    "values": [
                        {
                            "struct": null,
                            "source": 1,
                            "id": "58993",
                            "name": "iPhone"
                        }
                    ],
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Otros",
                    "source": 1,
                    "id": "LINE",
                    "name": "Línea",
                    "value_name": "iPhone"
                },
                {
                    "name": "Modelo",
                    "value_struct": null,
                    "values": [
                        {
                            "id": "5414260",
                            "name": "iPhone XR",
                            "struct": null,
                            "source": 1
                        }
                    ],
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Otros",
                    "id": "MODEL",
                    "value_id": "5414260",
                    "value_name": "iPhone XR",
                    "source": 1
                },
                {
                    "id": "PROCESSOR_MODEL",
                    "attribute_group_id": "OTHERS",
                    "values": [
                        {
                            "id": "6927771",
                            "name": "Apple A12 Bionic",
                            "struct": null,
                            "source": 1
                        }
                    ],
                    "attribute_group_name": "Otros",
                    "source": 1,
                    "name": "Modelo del procesador",
                    "value_id": "6927771",
                    "value_name": "Apple A12 Bionic",
                    "value_struct": null
                }
            ],
            "original_price": null,
            "category_id": "MLA1055",
            "official_store_id": null,
            "catalog_product_id": "MLA12866684",
            "tags": [
                "good_quality_picture",
                "good_quality_thumbnail",
                "immediate_payment",
                "cart_eligible"
            ],
            "catalog_listing": true
        },
        {
            "id": "MLA816019440",
            "site_id": "MLA",
            "title": "Apple iPhone Xr Dual Sim 128 Gb Blanco",
            "seller": {
                "id": 70894521,
                "power_seller_status": null,
                "car_dealer": false,
                "real_estate_agency": false,
                "tags": []
            },
            "price": 79470,
            "currency_id": "ARS",
            "available_quantity": 1,
            "sold_quantity": 0,
            "buying_mode": "buy_it_now",
            "listing_type_id": "gold_special",
            "stop_time": "2039-09-15T04:00:00.000Z",
            "condition": "new",
            "permalink": "https://www.mercadolibre.com.ar/p/MLA12866684",
            "thumbnail": "http://mla-s1-p.mlstatic.com/980849-MLA31002261498_062019-I.jpg",
            "accepts_mercadopago": true,
            "installments": {
                "quantity": 12,
                "amount": 10845.67,
                "rate": 63.77,
                "currency_id": "ARS"
            },
            "address": {
                "state_id": "AR-C",
                "state_name": "Capital Federal",
                "city_id": "TUxBQlBBVDI0ODFa",
                "city_name": "Paternal"
            },
            "shipping": {
                "free_shipping": true,
                "mode": "me2",
                "tags": [
                    "mandatory_free_shipping"
                ],
                "logistic_type": "drop_off",
                "store_pick_up": false
            },
            "seller_address": {
                "id": "",
                "comment": "",
                "address_line": "",
                "zip_code": "",
                "country": {
                    "id": "AR",
                    "name": "Argentina"
                },
                "state": {
                    "id": "AR-C",
                    "name": "Capital Federal"
                },
                "city": {
                    "id": "TUxBQlBBVDI0ODFa",
                    "name": "Paternal"
                },
                "latitude": "",
                "longitude": ""
            },
            "attributes": [
                {
                    "source": 1,
                    "id": "BRAND",
                    "value_name": "Apple",
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Otros",
                    "name": "Marca",
                    "value_id": "9344",
                    "value_struct": null,
                    "values": [
                        {
                            "struct": null,
                            "source": 1,
                            "id": "9344",
                            "name": "Apple"
                        }
                    ]
                },
                {
                    "name": "Modelo de CPU",
                    "attribute_group_id": "OTHERS",
                    "source": 1,
                    "id": "CPU_MODEL",
                    "value_id": "6927770",
                    "value_name": "2x2.5 GHz Vortex/4x1.6 GHz Tempest",
                    "value_struct": null,
                    "values": [
                        {
                            "id": "6927770",
                            "name": "2x2.5 GHz Vortex/4x1.6 GHz Tempest",
                            "struct": null,
                            "source": 1
                        }
                    ],
                    "attribute_group_name": "Otros"
                },
                {
                    "values": [
                        {
                            "name": "Nuevo",
                            "struct": null,
                            "source": 6808261514773724,
                            "id": "2230284"
                        }
                    ],
                    "source": 6808261514773724,
                    "value_id": "2230284",
                    "value_name": "Nuevo",
                    "value_struct": null,
                    "attribute_group_name": "Otros",
                    "id": "ITEM_CONDITION",
                    "name": "Condición del ítem",
                    "attribute_group_id": "OTHERS"
                },
                {
                    "value_id": "58993",
                    "value_struct": null,
                    "values": [
                        {
                            "struct": null,
                            "source": 1,
                            "id": "58993",
                            "name": "iPhone"
                        }
                    ],
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Otros",
                    "source": 1,
                    "id": "LINE",
                    "name": "Línea",
                    "value_name": "iPhone"
                },
                {
                    "name": "Modelo",
                    "value_struct": null,
                    "values": [
                        {
                            "id": "5414260",
                            "name": "iPhone XR",
                            "struct": null,
                            "source": 1
                        }
                    ],
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Otros",
                    "id": "MODEL",
                    "value_id": "5414260",
                    "value_name": "iPhone XR",
                    "source": 1
                },
                {
                    "id": "PROCESSOR_MODEL",
                    "attribute_group_id": "OTHERS",
                    "values": [
                        {
                            "id": "6927771",
                            "name": "Apple A12 Bionic",
                            "struct": null,
                            "source": 1
                        }
                    ],
                    "attribute_group_name": "Otros",
                    "source": 1,
                    "name": "Modelo del procesador",
                    "value_id": "6927771",
                    "value_name": "Apple A12 Bionic",
                    "value_struct": null
                }
            ],
            "original_price": null,
            "category_id": "MLA1055",
            "official_store_id": null,
            "catalog_product_id": "MLA12866684",
            "tags": [
                "good_quality_picture",
                "good_quality_thumbnail",
                "immediate_payment",
                "cart_eligible"
            ],
            "catalog_listing": true
        },
        {
            "id": "MLA816019440",
            "site_id": "MLA",
            "title": "Apple iPhone Xr Dual Sim 128 Gb Blanco",
            "seller": {
                "id": 179571326,
                "power_seller_status": null,
                "car_dealer": false,
                "real_estate_agency": false,
                "tags": []
            },
            "price": 79470,
            "currency_id": "ARS",
            "available_quantity": 1,
            "sold_quantity": 0,
            "buying_mode": "buy_it_now",
            "listing_type_id": "gold_special",
            "stop_time": "2039-09-15T04:00:00.000Z",
            "condition": "new",
            "permalink": "https://www.mercadolibre.com.ar/p/MLA12866684",
            "thumbnail": "http://mla-s1-p.mlstatic.com/980849-MLA31002261498_062019-I.jpg",
            "accepts_mercadopago": true,
            "installments": {
                "quantity": 12,
                "amount": 10845.67,
                "rate": 63.77,
                "currency_id": "ARS"
            },
            "address": {
                "state_id": "AR-C",
                "state_name": "Capital Federal",
                "city_id": "TUxBQlBBVDI0ODFa",
                "city_name": "Paternal"
            },
            "shipping": {
                "free_shipping": true,
                "mode": "me2",
                "tags": [
                    "mandatory_free_shipping"
                ],
                "logistic_type": "drop_off",
                "store_pick_up": false
            },
            "seller_address": {
                "id": "",
                "comment": "",
                "address_line": "",
                "zip_code": "",
                "country": {
                    "id": "AR",
                    "name": "Argentina"
                },
                "state": {
                    "id": "AR-C",
                    "name": "Capital Federal"
                },
                "city": {
                    "id": "TUxBQlBBVDI0ODFa",
                    "name": "Paternal"
                },
                "latitude": "",
                "longitude": ""
            },
            "attributes": [
                {
                    "source": 1,
                    "id": "BRAND",
                    "value_name": "Apple",
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Otros",
                    "name": "Marca",
                    "value_id": "9344",
                    "value_struct": null,
                    "values": [
                        {
                            "struct": null,
                            "source": 1,
                            "id": "9344",
                            "name": "Apple"
                        }
                    ]
                },
                {
                    "name": "Modelo de CPU",
                    "attribute_group_id": "OTHERS",
                    "source": 1,
                    "id": "CPU_MODEL",
                    "value_id": "6927770",
                    "value_name": "2x2.5 GHz Vortex/4x1.6 GHz Tempest",
                    "value_struct": null,
                    "values": [
                        {
                            "id": "6927770",
                            "name": "2x2.5 GHz Vortex/4x1.6 GHz Tempest",
                            "struct": null,
                            "source": 1
                        }
                    ],
                    "attribute_group_name": "Otros"
                },
                {
                    "values": [
                        {
                            "name": "Nuevo",
                            "struct": null,
                            "source": 6808261514773724,
                            "id": "2230284"
                        }
                    ],
                    "source": 6808261514773724,
                    "value_id": "2230284",
                    "value_name": "Nuevo",
                    "value_struct": null,
                    "attribute_group_name": "Otros",
                    "id": "ITEM_CONDITION",
                    "name": "Condición del ítem",
                    "attribute_group_id": "OTHERS"
                },
                {
                    "value_id": "58993",
                    "value_struct": null,
                    "values": [
                        {
                            "struct": null,
                            "source": 1,
                            "id": "58993",
                            "name": "iPhone"
                        }
                    ],
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Otros",
                    "source": 1,
                    "id": "LINE",
                    "name": "Línea",
                    "value_name": "iPhone"
                },
                {
                    "name": "Modelo",
                    "value_struct": null,
                    "values": [
                        {
                            "id": "5414260",
                            "name": "iPhone XR",
                            "struct": null,
                            "source": 1
                        }
                    ],
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Otros",
                    "id": "MODEL",
                    "value_id": "5414260",
                    "value_name": "iPhone XR",
                    "source": 1
                },
                {
                    "id": "PROCESSOR_MODEL",
                    "attribute_group_id": "OTHERS",
                    "values": [
                        {
                            "id": "6927771",
                            "name": "Apple A12 Bionic",
                            "struct": null,
                            "source": 1
                        }
                    ],
                    "attribute_group_name": "Otros",
                    "source": 1,
                    "name": "Modelo del procesador",
                    "value_id": "6927771",
                    "value_name": "Apple A12 Bionic",
                    "value_struct": null
                }
            ],
            "original_price": null,
            "category_id": "MLA1055",
            "official_store_id": null,
            "catalog_product_id": "MLA12866684",
            "tags": [
                "good_quality_picture",
                "good_quality_thumbnail",
                "immediate_payment",
                "cart_eligible"
            ],
            "catalog_listing": true
        },
        {
            "id": "MLA816019440",
            "site_id": "MLA",
            "title": "Apple iPhone Xr Dual Sim 128 Gb Blanco",
            "seller": {
                "id": 179571326,
                "power_seller_status": null,
                "car_dealer": false,
                "real_estate_agency": false,
                "tags": []
            },
            "price": 79470,
            "currency_id": "ARS",
            "available_quantity": 1,
            "sold_quantity": 0,
            "buying_mode": "buy_it_now",
            "listing_type_id": "gold_special",
            "stop_time": "2039-09-15T04:00:00.000Z",
            "condition": "new",
            "permalink": "https://www.mercadolibre.com.ar/p/MLA12866684",
            "thumbnail": "http://mla-s1-p.mlstatic.com/980849-MLA31002261498_062019-I.jpg",
            "accepts_mercadopago": true,
            "installments": {
                "quantity": 12,
                "amount": 10845.67,
                "rate": 63.77,
                "currency_id": "ARS"
            },
            "address": {
                "state_id": "AR-C",
                "state_name": "Capital Federal",
                "city_id": "TUxBQlBBVDI0ODFa",
                "city_name": "Paternal"
            },
            "shipping": {
                "free_shipping": true,
                "mode": "me2",
                "tags": [
                    "mandatory_free_shipping"
                ],
                "logistic_type": "drop_off",
                "store_pick_up": false
            },
            "seller_address": {
                "id": "",
                "comment": "",
                "address_line": "",
                "zip_code": "",
                "country": {
                    "id": "AR",
                    "name": "Argentina"
                },
                "state": {
                    "id": "AR-C",
                    "name": "Capital Federal"
                },
                "city": {
                    "id": "TUxBQlBBVDI0ODFa",
                    "name": "Paternal"
                },
                "latitude": "",
                "longitude": ""
            },
            "attributes": [
                {
                    "source": 1,
                    "id": "BRAND",
                    "value_name": "Apple",
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Otros",
                    "name": "Marca",
                    "value_id": "9344",
                    "value_struct": null,
                    "values": [
                        {
                            "struct": null,
                            "source": 1,
                            "id": "9344",
                            "name": "Apple"
                        }
                    ]
                },
                {
                    "name": "Modelo de CPU",
                    "attribute_group_id": "OTHERS",
                    "source": 1,
                    "id": "CPU_MODEL",
                    "value_id": "6927770",
                    "value_name": "2x2.5 GHz Vortex/4x1.6 GHz Tempest",
                    "value_struct": null,
                    "values": [
                        {
                            "id": "6927770",
                            "name": "2x2.5 GHz Vortex/4x1.6 GHz Tempest",
                            "struct": null,
                            "source": 1
                        }
                    ],
                    "attribute_group_name": "Otros"
                },
                {
                    "values": [
                        {
                            "name": "Nuevo",
                            "struct": null,
                            "source": 6808261514773724,
                            "id": "2230284"
                        }
                    ],
                    "source": 6808261514773724,
                    "value_id": "2230284",
                    "value_name": "Nuevo",
                    "value_struct": null,
                    "attribute_group_name": "Otros",
                    "id": "ITEM_CONDITION",
                    "name": "Condición del ítem",
                    "attribute_group_id": "OTHERS"
                },
                {
                    "value_id": "58993",
                    "value_struct": null,
                    "values": [
                        {
                            "struct": null,
                            "source": 1,
                            "id": "58993",
                            "name": "iPhone"
                        }
                    ],
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Otros",
                    "source": 1,
                    "id": "LINE",
                    "name": "Línea",
                    "value_name": "iPhone"
                },
                {
                    "name": "Modelo",
                    "value_struct": null,
                    "values": [
                        {
                            "id": "5414260",
                            "name": "iPhone XR",
                            "struct": null,
                            "source": 1
                        }
                    ],
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Otros",
                    "id": "MODEL",
                    "value_id": "5414260",
                    "value_name": "iPhone XR",
                    "source": 1
                },
                {
                    "id": "PROCESSOR_MODEL",
                    "attribute_group_id": "OTHERS",
                    "values": [
                        {
                            "id": "6927771",
                            "name": "Apple A12 Bionic",
                            "struct": null,
                            "source": 1
                        }
                    ],
                    "attribute_group_name": "Otros",
                    "source": 1,
                    "name": "Modelo del procesador",
                    "value_id": "6927771",
                    "value_name": "Apple A12 Bionic",
                    "value_struct": null
                }
            ],
            "original_price": null,
            "category_id": "MLA1055",
            "official_store_id": null,
            "catalog_product_id": "MLA12866684",
            "tags": [
                "good_quality_picture",
                "good_quality_thumbnail",
                "immediate_payment",
                "cart_eligible"
            ],
            "catalog_listing": true
        },
    ]
}



const searchBySiteAndSellerId = (siteId, sellerId) => {
    if (!sellerId) {
        return [];
    }

    if (Array.isArray(sellerId)) {
        return response.results.filter((result) => result.site_id === siteId && sellerId.includes(`${result.seller.id}`));
    }

    return response.results.filter((result) => result.site_id === siteId && result.seller.id === parseInt(sellerId));
}

app.get('/', (req, res) => {
    const siteId = 'MLA';

    const sellerId = req.query.seller_id;

    const filteredResults = searchBySiteAndSellerId(siteId, sellerId);

    res.send(filteredResults);

  
    
})

app.listen(port, () => console.log(`V server listening on port ${port}!`))