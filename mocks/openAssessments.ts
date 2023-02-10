export const openAssessments = [
    {
        "id": 6,
        "uuid": "aa3a08db-391d-445b-9f6f-3c4e77efd008",
        "type": "visit",
        "user_id": 3,
        "ailment_id": 12,
        "province": "ON",
        "details": {
            "flow": "normal",
            "patient": {
                "name": "Patient",
                "surname": "User"
            },
            "frequency": 3,
            "appliedCode": null,
            "edTreatment": null,
            "ownPharmacy": false,
            "ohip_qualify": false,
            "insurance_use": null,
            "differentBilling": false,
            "hasOtherProducts": true,
            "doctorHasToDecide": false,
            "ailmentSubCategory": "",
            "ownPharmacyDetails": {
                "fax": null,
                "area": null,
                "city": null,
                "name": null,
                "phone": null,
                "address": null,
                "province": null,
                "area_phone": null,
                "phone_phone": null,
                "postal_code": null
            },
            "patient_preference": {
                "shipment_cadence": 3,
                "treatment_preference": [
                    {
                        "drug_preference": {
                            "name": "Onreltea 0.33% Gel",
                            "drug_uuid": "dbd5582a-4eaa-49ad-aa43-43beec4bd136",
                            "din_number": 2421208
                        },
                        "dosage_preference": {
                            "period_in_days": 30,
                            "unit_amount_total": 1,
                            "unit_amount_per_period": 1
                        }
                    }
                ]
            },
            "assessment_language": null,
            "differentBillingData": {
                "city": "Toronto",
                "province": "ON",
                "postal_code": "M3M 3G8",
                "address_line1": "1235 Wilson Ave",
                "address_line2": null
            },
            "communicationPreference": null,
            "patientFreeFormDrugChoice": null
        },
        "patient_name": "Patient User",
        "created_at": "2022-09-27 16:38:50",
        "prescription": null,
        "created_at_date_only": "2022/09/27",
        "created_at_toronto": "2022-09-27 12:38:50",
        "assessed_at_toronto": null,
        "consent_at": "2022-09-27 12:38",
        "has_other_assessments": true,
        "created_at_table": "2022/09/27 12:38",
        "phnotes_edited_toronto": null,
        "expired_at_table": null,
        "prefilled_pharmacy": 2574,
        "first_prescription_uuid": null,
        "ailment_sub_category_name": "",
        "billing": {
            "uuid": "49760c5d-10b8-4af0-bfe4-1889240ac799",
            "assessment_id": 6,
            "selected": null,
            "old_drug": null,
            "old_plan": null,
            "created_at": "2022-09-27 16:38:51",
            "updated_at": "2022-09-27 16:38:51",
            "deleted_at": null,
            "billing_data": {
                "address_line1": "1235 Wilson Ave",
                "address_line2": null,
                "city": "Toronto",
                "province": "ON",
                "postal_code": "M3M 3G8"
            },
            "plan_relation": {
                "id": 991,
                "drug_id": 380,
                "uuid": "04ce29ca-b048-44e8-9132-a149bbc85541",
                "bill_period": 3,
                "created_at": "2022-08-03 17:25:53",
                "updated_at": "2022-08-18 16:40:09",
                "deleted_at": null,
                "unit_amount": 1,
                "unit_name": "appl",
                "defaults": {
                    "m": "1",
                    "r": "3"
                },
                "dou": "30",
                "enabled": 1,
                "prices": [
                    {
                        "price": "146.15",
                        "state": "AB"
                    },
                    {
                        "price": "146.15",
                        "state": "BC"
                    },
                    {
                        "price": "142.78",
                        "state": "NS"
                    },
                    {
                        "price": "142.78",
                        "state": "ON"
                    },
                    {
                        "price": "142.78",
                        "state": "PE"
                    },
                    {
                        "price": "142.09",
                        "state": "MB"
                    },
                    {
                        "price": "142.78",
                        "state": "NL"
                    },
                    {
                        "price": "142.09",
                        "state": "SK"
                    }
                ],
                "original_price": 0,
                "original_fill_fee": 0,
                "full_price": "0",
                "full_price_per_month": "0",
                "full_price_per_month_per_region": 0,
                "orig_prices": [
                    {
                        "price": 14615,
                        "state": "AB"
                    },
                    {
                        "price": 14615,
                        "state": "BC"
                    },
                    {
                        "price": 14278,
                        "state": "NS"
                    },
                    {
                        "price": 14278,
                        "state": "ON"
                    },
                    {
                        "price": 14278,
                        "state": "PE"
                    },
                    {
                        "price": 14209,
                        "state": "MB"
                    },
                    {
                        "price": 14278,
                        "state": "NL"
                    },
                    {
                        "price": 14209,
                        "state": "SK"
                    }
                ],
                "drug": {
                    "id": 380,
                    "uuid": "dbd5582a-4eaa-49ad-aa43-43beec4bd136",
                    "ailment_id": 12,
                    "name": "Onreltea 0.33% Gel",
                    "created_at": "2022-08-03 17:25:55",
                    "updated_at": "2022-08-18 20:40:52",
                    "deleted_at": null,
                    "is_brand": 1,
                    "is_daily": 0,
                    "brand_equivalent": null,
                    "shipping_fee": 0,
                    "form": "Gel",
                    "defaults": {
                        "lu": null,
                        "dose": "1",
                        "unit1": "appl",
                        "unit2": "top",
                        "unit3": "od",
                        "prn": "1",
                        "gtabs": "tube"
                    },
                    "enabled": 1,
                    "sig_code": null,
                    "sig_code_id": 51,
                    "din": "2421208",
                    "molecule_id": 106,
                    "is_prescribable": 1,
                    "macro": null,
                    "original_fill_fee": 0,
                    "original_shipping_fee": 0
                }
            },
            "drug_relation": {
                "id": 380,
                "uuid": "dbd5582a-4eaa-49ad-aa43-43beec4bd136",
                "ailment_id": 12,
                "name": "Onreltea 0.33% Gel",
                "created_at": "2022-08-03 17:25:55",
                "updated_at": "2022-08-18 20:40:52",
                "deleted_at": null,
                "is_brand": 1,
                "is_daily": 0,
                "brand_equivalent": null,
                "shipping_fee": 0,
                "form": "Gel",
                "defaults": {
                    "lu": null,
                    "dose": "1",
                    "unit1": "appl",
                    "unit2": "top",
                    "unit3": "od",
                    "prn": "1",
                    "gtabs": "tube"
                },
                "enabled": 1,
                "sig_code": null,
                "sig_code_id": 51,
                "din": "2421208",
                "molecule_id": 106,
                "is_prescribable": 1,
                "macro": null,
                "original_fill_fee": 0,
                "original_shipping_fee": 0
            },
            "drugs": [
                {
                    "uuid": "b8ac5a99-8b81-4123-aca4-b52cf5640f23",
                    "drug_uuid": "dbd5582a-4eaa-49ad-aa43-43beec4bd136",
                    "plan_uuid": "04ce29ca-b048-44e8-9132-a149bbc85541",
                    "billing_uuid": "49760c5d-10b8-4af0-bfe4-1889240ac799",
                    "kroll": null,
                    "first_prescription": null,
                    "deleted_at": null,
                    "plan": {
                        "id": 991,
                        "drug_id": 380,
                        "uuid": "04ce29ca-b048-44e8-9132-a149bbc85541",
                        "bill_period": 3,
                        "created_at": "2022-08-03 17:25:53",
                        "updated_at": "2022-08-18 16:40:09",
                        "deleted_at": null,
                        "unit_amount": 1,
                        "unit_name": "appl",
                        "defaults": {
                            "m": "1",
                            "r": "3"
                        },
                        "dou": "30",
                        "enabled": 1,
                        "prices": [
                            {
                                "price": "146.15",
                                "state": "AB"
                            },
                            {
                                "price": "146.15",
                                "state": "BC"
                            },
                            {
                                "price": "142.78",
                                "state": "NS"
                            },
                            {
                                "price": "142.78",
                                "state": "ON"
                            },
                            {
                                "price": "142.78",
                                "state": "PE"
                            },
                            {
                                "price": "142.09",
                                "state": "MB"
                            },
                            {
                                "price": "142.78",
                                "state": "NL"
                            },
                            {
                                "price": "142.09",
                                "state": "SK"
                            }
                        ],
                        "original_price": 0,
                        "original_fill_fee": 0,
                        "full_price": "0",
                        "full_price_per_month": "0",
                        "full_price_per_month_per_region": 0,
                        "orig_prices": [
                            {
                                "price": 14615,
                                "state": "AB"
                            },
                            {
                                "price": 14615,
                                "state": "BC"
                            },
                            {
                                "price": 14278,
                                "state": "NS"
                            },
                            {
                                "price": 14278,
                                "state": "ON"
                            },
                            {
                                "price": 14278,
                                "state": "PE"
                            },
                            {
                                "price": 14209,
                                "state": "MB"
                            },
                            {
                                "price": 14278,
                                "state": "NL"
                            },
                            {
                                "price": 14209,
                                "state": "SK"
                            }
                        ],
                        "drug": {
                            "id": 380,
                            "uuid": "dbd5582a-4eaa-49ad-aa43-43beec4bd136",
                            "ailment_id": 12,
                            "name": "Onreltea 0.33% Gel",
                            "created_at": "2022-08-03 17:25:55",
                            "updated_at": "2022-08-18 20:40:52",
                            "deleted_at": null,
                            "is_brand": 1,
                            "is_daily": 0,
                            "brand_equivalent": null,
                            "shipping_fee": 0,
                            "form": "Gel",
                            "defaults": {
                                "lu": null,
                                "dose": "1",
                                "unit1": "appl",
                                "unit2": "top",
                                "unit3": "od",
                                "prn": "1",
                                "gtabs": "tube"
                            },
                            "enabled": 1,
                            "sig_code": null,
                            "sig_code_id": 51,
                            "din": "2421208",
                            "molecule_id": 106,
                            "is_prescribable": 1,
                            "macro": null,
                            "original_fill_fee": 0,
                            "original_shipping_fee": 0
                        }
                    },
                    "drug": {
                        "id": 380,
                        "uuid": "dbd5582a-4eaa-49ad-aa43-43beec4bd136",
                        "ailment_id": 12,
                        "name": "Onreltea 0.33% Gel",
                        "created_at": "2022-08-03 17:25:55",
                        "updated_at": "2022-08-18 20:40:52",
                        "deleted_at": null,
                        "is_brand": 1,
                        "is_daily": 0,
                        "brand_equivalent": null,
                        "shipping_fee": 0,
                        "form": "Gel",
                        "defaults": {
                            "lu": null,
                            "dose": "1",
                            "unit1": "appl",
                            "unit2": "top",
                            "unit3": "od",
                            "prn": "1",
                            "gtabs": "tube"
                        },
                        "enabled": 1,
                        "sig_code": null,
                        "sig_code_id": 51,
                        "din": "2421208",
                        "molecule_id": 106,
                        "is_prescribable": 1,
                        "macro": null,
                        "original_fill_fee": 0,
                        "original_shipping_fee": 0
                    }
                }
            ]
        },
        "existing_prescription_img": null,
        "benefit_front": null,
        "benefit_back": null,
        "photo_id": null,
        "ailment": {
            "id": 12,
            "name": "Rosacea",
            "created_at": "2022-07-29 15:45:07",
            "updated_at": "2022-07-29 15:45:07",
            "deleted_at": null,
            "slug": "rosacea",
            "sort_order": 1,
            "uuid": "12caf5aa-70d1-4460-92cb-c8a55c81a46c"
        },
        "deny_reason": null,
        "refill_nr": "",
        "ail_short": "RS",
        "ailment_name": "Rosacea",
        "userCanAssess": true
    },
    {
        "id": 9,
        "uuid": "19e1adbd-44af-4612-ae47-a6e35a8dfe38",
        "type": "visit",
        "user_id": 3,
        "ailment_id": 12,
        "province": "ON",
        "details": {
            "flow": "normal",
            "patient": {
                "name": "Patient",
                "surname": "User"
            },
            "frequency": 3,
            "appliedCode": null,
            "edTreatment": null,
            "ownPharmacy": false,
            "ohip_qualify": false,
            "insurance_use": null,
            "differentBilling": false,
            "hasOtherProducts": true,
            "doctorHasToDecide": false,
            "ailmentSubCategory": "",
            "ownPharmacyDetails": {
                "fax": null,
                "area": null,
                "city": null,
                "name": null,
                "phone": null,
                "address": null,
                "province": null,
                "area_phone": null,
                "phone_phone": null,
                "postal_code": null
            },
            "patient_preference": {
                "shipment_cadence": 3,
                "treatment_preference": [
                    {
                        "drug_preference": {
                            "name": "MetroGel 1% Topical Gel",
                            "drug_uuid": "4c9cb87a-7e2e-4dca-84b6-937d958923cb",
                            "din_number": 2297809
                        },
                        "dosage_preference": {
                            "period_in_days": 30,
                            "unit_amount_total": 1,
                            "unit_amount_per_period": 1
                        }
                    }
                ]
            },
            "assessment_language": "en",
            "differentBillingData": {
                "city": "Toronto",
                "province": "ON",
                "postal_code": "M3M 3G8",
                "address_line1": "1235 Wilson Ave",
                "address_line2": null
            },
            "communicationPreference": null,
            "patientFreeFormDrugChoice": null
        },
        "patient_name": "Patient User",
        "created_at": "2022-10-27 17:49:36",
        "prescription": null,
        "created_at_date_only": "2022/10/27",
        "created_at_toronto": "2022-10-27 13:49:36",
        "assessed_at_toronto": null,
        "consent_at": "2022-10-27 13:49",
        "has_other_assessments": true,
        "created_at_table": "2022/10/27 13:49",
        "phnotes_edited_toronto": null,
        "expired_at_table": null,
        "prefilled_pharmacy": 2574,
        "first_prescription_uuid": null,
        "ailment_sub_category_name": "",
        "billing": {
            "uuid": "74b90fb5-37ca-463f-9b8b-52796de98fe4",
            "assessment_id": 9,
            "selected": null,
            "old_drug": null,
            "old_plan": null,
            "created_at": "2022-10-27 17:49:36",
            "updated_at": "2022-10-27 17:49:36",
            "deleted_at": null,
            "billing_data": {
                "address_line1": "1235 Wilson Ave",
                "address_line2": null,
                "city": "Toronto",
                "province": "ON",
                "postal_code": "M3M 3G8"
            },
            "plan_relation": {
                "id": 988,
                "drug_id": 377,
                "uuid": "7ca6f812-2ba0-47e6-8fcb-ef5fc2cf3811",
                "bill_period": 3,
                "created_at": "2022-08-03 16:05:00",
                "updated_at": "2022-08-18 16:38:47",
                "deleted_at": null,
                "unit_amount": 1,
                "unit_name": "appl",
                "defaults": {
                    "m": "1",
                    "r": "3"
                },
                "dou": "30",
                "enabled": 1,
                "prices": [
                    {
                        "price": "49.08",
                        "state": "AB"
                    },
                    {
                        "price": "49.08",
                        "state": "BC"
                    },
                    {
                        "price": "47.95",
                        "state": "NS"
                    },
                    {
                        "price": "47.95",
                        "state": "ON"
                    },
                    {
                        "price": "47.95",
                        "state": "PE"
                    },
                    {
                        "price": "46.78",
                        "state": "MB"
                    },
                    {
                        "price": "47.95",
                        "state": "NL"
                    },
                    {
                        "price": "46.78",
                        "state": "SK"
                    }
                ],
                "original_price": 0,
                "original_fill_fee": 0,
                "full_price": "0",
                "full_price_per_month": "0",
                "full_price_per_month_per_region": 0,
                "orig_prices": [
                    {
                        "price": 4908,
                        "state": "AB"
                    },
                    {
                        "price": 4908,
                        "state": "BC"
                    },
                    {
                        "price": 4795,
                        "state": "NS"
                    },
                    {
                        "price": 4795,
                        "state": "ON"
                    },
                    {
                        "price": 4795,
                        "state": "PE"
                    },
                    {
                        "price": 4678,
                        "state": "MB"
                    },
                    {
                        "price": 4795,
                        "state": "NL"
                    },
                    {
                        "price": 4678,
                        "state": "SK"
                    }
                ],
                "drug": {
                    "id": 377,
                    "uuid": "4c9cb87a-7e2e-4dca-84b6-937d958923cb",
                    "ailment_id": 12,
                    "name": "MetroGel 1% Topical Gel",
                    "created_at": "2022-08-03 16:05:26",
                    "updated_at": "2022-08-16 18:33:10",
                    "deleted_at": null,
                    "is_brand": 1,
                    "is_daily": 0,
                    "brand_equivalent": null,
                    "shipping_fee": 0,
                    "form": "bottle",
                    "defaults": {
                        "lu": null,
                        "dose": "1",
                        "unit1": "appl",
                        "unit2": "top",
                        "unit3": "od",
                        "prn": "1",
                        "gtabs": "bottle"
                    },
                    "enabled": 1,
                    "sig_code": null,
                    "sig_code_id": 51,
                    "din": "02297809",
                    "molecule_id": 104,
                    "is_prescribable": 1,
                    "macro": null,
                    "original_fill_fee": 0,
                    "original_shipping_fee": 0
                }
            },
            "drug_relation": {
                "id": 377,
                "uuid": "4c9cb87a-7e2e-4dca-84b6-937d958923cb",
                "ailment_id": 12,
                "name": "MetroGel 1% Topical Gel",
                "created_at": "2022-08-03 16:05:26",
                "updated_at": "2022-08-16 18:33:10",
                "deleted_at": null,
                "is_brand": 1,
                "is_daily": 0,
                "brand_equivalent": null,
                "shipping_fee": 0,
                "form": "bottle",
                "defaults": {
                    "lu": null,
                    "dose": "1",
                    "unit1": "appl",
                    "unit2": "top",
                    "unit3": "od",
                    "prn": "1",
                    "gtabs": "bottle"
                },
                "enabled": 1,
                "sig_code": null,
                "sig_code_id": 51,
                "din": "02297809",
                "molecule_id": 104,
                "is_prescribable": 1,
                "macro": null,
                "original_fill_fee": 0,
                "original_shipping_fee": 0
            },
            "drugs": [
                {
                    "uuid": "891e43b8-b7db-4dfe-8138-0628e900e69d",
                    "drug_uuid": "4c9cb87a-7e2e-4dca-84b6-937d958923cb",
                    "plan_uuid": "7ca6f812-2ba0-47e6-8fcb-ef5fc2cf3811",
                    "billing_uuid": "74b90fb5-37ca-463f-9b8b-52796de98fe4",
                    "kroll": null,
                    "first_prescription": null,
                    "deleted_at": null,
                    "plan": {
                        "id": 988,
                        "drug_id": 377,
                        "uuid": "7ca6f812-2ba0-47e6-8fcb-ef5fc2cf3811",
                        "bill_period": 3,
                        "created_at": "2022-08-03 16:05:00",
                        "updated_at": "2022-08-18 16:38:47",
                        "deleted_at": null,
                        "unit_amount": 1,
                        "unit_name": "appl",
                        "defaults": {
                            "m": "1",
                            "r": "3"
                        },
                        "dou": "30",
                        "enabled": 1,
                        "prices": [
                            {
                                "price": "49.08",
                                "state": "AB"
                            },
                            {
                                "price": "49.08",
                                "state": "BC"
                            },
                            {
                                "price": "47.95",
                                "state": "NS"
                            },
                            {
                                "price": "47.95",
                                "state": "ON"
                            },
                            {
                                "price": "47.95",
                                "state": "PE"
                            },
                            {
                                "price": "46.78",
                                "state": "MB"
                            },
                            {
                                "price": "47.95",
                                "state": "NL"
                            },
                            {
                                "price": "46.78",
                                "state": "SK"
                            }
                        ],
                        "original_price": 0,
                        "original_fill_fee": 0,
                        "full_price": "0",
                        "full_price_per_month": "0",
                        "full_price_per_month_per_region": 0,
                        "orig_prices": [
                            {
                                "price": 4908,
                                "state": "AB"
                            },
                            {
                                "price": 4908,
                                "state": "BC"
                            },
                            {
                                "price": 4795,
                                "state": "NS"
                            },
                            {
                                "price": 4795,
                                "state": "ON"
                            },
                            {
                                "price": 4795,
                                "state": "PE"
                            },
                            {
                                "price": 4678,
                                "state": "MB"
                            },
                            {
                                "price": 4795,
                                "state": "NL"
                            },
                            {
                                "price": 4678,
                                "state": "SK"
                            }
                        ],
                        "drug": {
                            "id": 377,
                            "uuid": "4c9cb87a-7e2e-4dca-84b6-937d958923cb",
                            "ailment_id": 12,
                            "name": "MetroGel 1% Topical Gel",
                            "created_at": "2022-08-03 16:05:26",
                            "updated_at": "2022-08-16 18:33:10",
                            "deleted_at": null,
                            "is_brand": 1,
                            "is_daily": 0,
                            "brand_equivalent": null,
                            "shipping_fee": 0,
                            "form": "bottle",
                            "defaults": {
                                "lu": null,
                                "dose": "1",
                                "unit1": "appl",
                                "unit2": "top",
                                "unit3": "od",
                                "prn": "1",
                                "gtabs": "bottle"
                            },
                            "enabled": 1,
                            "sig_code": null,
                            "sig_code_id": 51,
                            "din": "02297809",
                            "molecule_id": 104,
                            "is_prescribable": 1,
                            "macro": null,
                            "original_fill_fee": 0,
                            "original_shipping_fee": 0
                        }
                    },
                    "drug": {
                        "id": 377,
                        "uuid": "4c9cb87a-7e2e-4dca-84b6-937d958923cb",
                        "ailment_id": 12,
                        "name": "MetroGel 1% Topical Gel",
                        "created_at": "2022-08-03 16:05:26",
                        "updated_at": "2022-08-16 18:33:10",
                        "deleted_at": null,
                        "is_brand": 1,
                        "is_daily": 0,
                        "brand_equivalent": null,
                        "shipping_fee": 0,
                        "form": "bottle",
                        "defaults": {
                            "lu": null,
                            "dose": "1",
                            "unit1": "appl",
                            "unit2": "top",
                            "unit3": "od",
                            "prn": "1",
                            "gtabs": "bottle"
                        },
                        "enabled": 1,
                        "sig_code": null,
                        "sig_code_id": 51,
                        "din": "02297809",
                        "molecule_id": 104,
                        "is_prescribable": 1,
                        "macro": null,
                        "original_fill_fee": 0,
                        "original_shipping_fee": 0
                    }
                }
            ]
        },
        "existing_prescription_img": null,
        "benefit_front": null,
        "benefit_back": null,
        "photo_id": null,
        "ailment": {
            "id": 12,
            "name": "Rosacea",
            "created_at": "2022-07-29 15:45:07",
            "updated_at": "2022-07-29 15:45:07",
            "deleted_at": null,
            "slug": "rosacea",
            "sort_order": 1,
            "uuid": "12caf5aa-70d1-4460-92cb-c8a55c81a46c"
        },
        "deny_reason": null,
        "refill_nr": "",
        "ail_short": "RS",
        "ailment_name": "Rosacea",
        "userCanAssess": true
    },
    {
        "id": 14,
        "uuid": "28c10258-6042-413d-bc7c-2d97e058b873",
        "type": "visit",
        "user_id": 3,
        "ailment_id": 13,
        "province": "ON",
        "details": {
            "flow": "normal",
            "patient": {
                "name": "Patient",
                "surname": "User"
            },
            "frequency": 3,
            "appliedCode": null,
            "edTreatment": null,
            "ownPharmacy": false,
            "ohip_qualify": false,
            "insurance_use": null,
            "differentBilling": false,
            "doctorHasToDecide": false,
            "ailmentSubCategory": "",
            "ownPharmacyDetails": {
                "fax": null,
                "area": null,
                "city": null,
                "name": null,
                "phone": null,
                "address": null,
                "province": null,
                "area_phone": null,
                "phone_phone": null,
                "postal_code": null
            },
            "assessment_language": "en",
            "differentBillingData": {
                "city": "Toronto",
                "province": "ON",
                "postal_code": "M3M 3G8",
                "address_line1": "1235 Wilson Ave",
                "address_line2": null
            },
            "communicationPreference": null,
            "patientFreeFormDrugChoice": null
        },
        "patient_name": "Patient User",
        "created_at": "2022-11-17 21:33:58",
        "prescription": null,
        "created_at_date_only": "2022/11/17",
        "created_at_toronto": "2022-11-17 16:33:58",
        "assessed_at_toronto": null,
        "consent_at": "2022-11-17 16:33",
        "has_other_assessments": true,
        "created_at_table": "2022/11/17 16:33",
        "phnotes_edited_toronto": null,
        "expired_at_table": null,
        "prefilled_pharmacy": 2574,
        "first_prescription_uuid": null,
        "ailment_sub_category_name": "",
        "billing": {
            "uuid": "6b14cf13-1c41-4b1f-b184-504436a7c92b",
            "assessment_id": 14,
            "selected": null,
            "old_drug": null,
            "old_plan": null,
            "created_at": "2022-11-17 21:33:59",
            "updated_at": "2022-11-17 21:33:59",
            "deleted_at": null,
            "billing_data": {
                "address_line1": "1235 Wilson Ave",
                "address_line2": null,
                "city": "Toronto",
                "province": "ON",
                "postal_code": "M3M 3G8"
            },
            "plan_relation": null,
            "drug_relation": null,
            "drugs": [
                {
                    "uuid": "e4dda150-d44c-4464-9262-ded39a81b2c5",
                    "drug_uuid": "3ebe987d-d36c-4e3b-adc0-86ac4d6206b0",
                    "plan_uuid": "319696d0-c284-4e29-8a0d-2a2a120e2c44",
                    "billing_uuid": "6b14cf13-1c41-4b1f-b184-504436a7c92b",
                    "kroll": null,
                    "first_prescription": null,
                    "deleted_at": null,
                    "plan": null,
                    "drug": null
                }
            ]
        },
        "existing_prescription_img": null,
        "benefit_front": null,
        "benefit_back": null,
        "photo_id": null,
        "ailment": {
            "id": 13,
            "name": "PrEP",
            "created_at": "2022-10-31 20:30:47",
            "updated_at": "2022-10-31 20:30:47",
            "deleted_at": null,
            "slug": "prep",
            "sort_order": 1,
            "uuid": "8caa286f-30bf-484a-a829-35b89b942963"
        },
        "deny_reason": null,
        "refill_nr": "",
        "ail_short": "PR",
        "ailment_name": "PrEP",
        "userCanAssess": true
    },
    {
        "id": 15,
        "uuid": "61febd13-b9ea-462f-a459-bc5728cf3646",
        "type": "visit",
        "user_id": 3,
        "ailment_id": 2,
        "province": "ON",
        "details": {
            "flow": "normal",
            "patient": {
                "name": "Patient",
                "surname": "User"
            },
            "frequency": 3,
            "appliedCode": null,
            "edTreatment": null,
            "ownPharmacy": false,
            "ohip_qualify": false,
            "insurance_use": null,
            "differentBilling": false,
            "doctorHasToDecide": false,
            "ailmentSubCategory": "",
            "ownPharmacyDetails": {
                "fax": null,
                "area": null,
                "city": null,
                "name": null,
                "phone": null,
                "address": null,
                "province": null,
                "area_phone": null,
                "phone_phone": null,
                "postal_code": null
            },
            "patient_preference": {
                "shipment_cadence": 3,
                "treatment_preference": [
                    {
                        "drug_preference": {
                            "name": "Sildenafil 50mg",
                            "drug_uuid": "c0beadac-d826-4c69-a15a-e4b3a7c38101",
                            "din_number": 2248202
                        },
                        "dosage_preference": {
                            "period_in_days": 30,
                            "unit_amount_total": 12,
                            "unit_amount_per_period": 4
                        }
                    }
                ]
            },
            "assessment_language": "en",
            "differentBillingData": {
                "city": "Toronto",
                "province": "ON",
                "postal_code": "M3M 3G8",
                "address_line1": "1235 Wilson Ave",
                "address_line2": null
            },
            "communicationPreference": null,
            "patientFreeFormDrugChoice": null
        },
        "patient_name": "Patient User",
        "created_at": "2022-12-08 18:57:42",
        "prescription": null,
        "created_at_date_only": "2022/12/08",
        "created_at_toronto": "2022-12-08 13:57:42",
        "assessed_at_toronto": null,
        "consent_at": "2022-12-08 13:57",
        "has_other_assessments": true,
        "created_at_table": "2022/12/08 13:57",
        "phnotes_edited_toronto": null,
        "expired_at_table": null,
        "prefilled_pharmacy": 2574,
        "first_prescription_uuid": null,
        "ailment_sub_category_name": "",
        "billing": {
            "uuid": "51044243-66fc-4cf9-b998-189b9b076c9e",
            "assessment_id": 15,
            "selected": null,
            "old_drug": null,
            "old_plan": null,
            "created_at": "2022-12-08 18:57:42",
            "updated_at": "2022-12-08 18:57:42",
            "deleted_at": null,
            "billing_data": {
                "address_line1": "1235 Wilson Ave",
                "address_line2": null,
                "city": "Toronto",
                "province": "ON",
                "postal_code": "M3M 3G8"
            },
            "plan_relation": {
                "id": 559,
                "drug_id": 56,
                "uuid": "abc50c4b-b065-4477-a713-61e32ab3d41b",
                "bill_period": 3,
                "created_at": "2021-04-27 15:12:29",
                "updated_at": "2021-04-29 14:08:48",
                "deleted_at": null,
                "unit_amount": 12,
                "unit_name": "pill",
                "defaults": {
                    "m": "36",
                    "r": "3"
                },
                "dou": "30",
                "enabled": 1,
                "prices": [
                    {
                        "price": "127.44",
                        "state": "ON"
                    },
                    {
                        "price": "127.44",
                        "state": "NS"
                    },
                    {
                        "price": "127.44",
                        "state": "PE"
                    },
                    {
                        "price": "127.44",
                        "state": "NL"
                    },
                    {
                        "price": "137.67",
                        "state": "AB"
                    },
                    {
                        "price": "137.67",
                        "state": "BC"
                    },
                    {
                        "price": "133.80",
                        "state": "MB"
                    },
                    {
                        "price": "133.80",
                        "state": "SK"
                    }
                ],
                "original_price": 0,
                "original_fill_fee": 0,
                "full_price": "0",
                "full_price_per_month": "0",
                "full_price_per_month_per_region": 0,
                "orig_prices": [
                    {
                        "price": 12744,
                        "state": "ON"
                    },
                    {
                        "price": 12744,
                        "state": "NS"
                    },
                    {
                        "price": 12744,
                        "state": "PE"
                    },
                    {
                        "price": 12744,
                        "state": "NL"
                    },
                    {
                        "price": 13767,
                        "state": "AB"
                    },
                    {
                        "price": 13767,
                        "state": "BC"
                    },
                    {
                        "price": 13380,
                        "state": "MB"
                    },
                    {
                        "price": 13380,
                        "state": "SK"
                    }
                ],
                "drug": {
                    "id": 56,
                    "uuid": "c0beadac-d826-4c69-a15a-e4b3a7c38101",
                    "ailment_id": 2,
                    "name": "Sildenafil 50mg",
                    "created_at": "2019-09-06 16:00:20",
                    "updated_at": "2021-08-25 14:07:05",
                    "deleted_at": null,
                    "is_brand": 0,
                    "is_daily": 0,
                    "brand_equivalent": "Viagra",
                    "shipping_fee": 0,
                    "form": "tab",
                    "defaults": {
                        "lu": null,
                        "dose": "1",
                        "unit1": "tab",
                        "unit2": "po",
                        "unit3": "-",
                        "prn": "1",
                        "gtabs": "tab"
                    },
                    "enabled": 1,
                    "sig_code": null,
                    "sig_code_id": 46,
                    "din": "02248202",
                    "molecule_id": 21,
                    "is_prescribable": 1,
                    "macro": "<p>\"If you develop an erection that lasts longer than 3 hours please go to the emergency department - this is a rare but dangerous side effect called priapism. </p>  <p>Do not use any recreational drugs with your ED medication - especially poppers or any drug containing alkyl nitrites. Also, never take any nitrate-containing medication (nitro spray or patch) with your ED medication, which is a common drug used in heart disease and angina. </p>  <p>Common side effects include flushing, lightheadedness, headache, runny nose, or nausea. There have been exceedingly rare reports of non-arteritic anterior ischemic optic neuropathy - a condition that impacts sight - although most experts do not believe this to be related to ED medications. </p>  <p>I do always recommend that you see a doctor in person for this issue, for a full physical exam and blood work to determine if there is an underlying cause like diabetes, vascular disease or low testosterone.\"</p>",
                    "original_fill_fee": 0,
                    "original_shipping_fee": 0
                }
            },
            "drug_relation": {
                "id": 56,
                "uuid": "c0beadac-d826-4c69-a15a-e4b3a7c38101",
                "ailment_id": 2,
                "name": "Sildenafil 50mg",
                "created_at": "2019-09-06 16:00:20",
                "updated_at": "2021-08-25 14:07:05",
                "deleted_at": null,
                "is_brand": 0,
                "is_daily": 0,
                "brand_equivalent": "Viagra",
                "shipping_fee": 0,
                "form": "tab",
                "defaults": {
                    "lu": null,
                    "dose": "1",
                    "unit1": "tab",
                    "unit2": "po",
                    "unit3": "-",
                    "prn": "1",
                    "gtabs": "tab"
                },
                "enabled": 1,
                "sig_code": null,
                "sig_code_id": 46,
                "din": "02248202",
                "molecule_id": 21,
                "is_prescribable": 1,
                "macro": "<p>\"If you develop an erection that lasts longer than 3 hours please go to the emergency department - this is a rare but dangerous side effect called priapism. </p>  <p>Do not use any recreational drugs with your ED medication - especially poppers or any drug containing alkyl nitrites. Also, never take any nitrate-containing medication (nitro spray or patch) with your ED medication, which is a common drug used in heart disease and angina. </p>  <p>Common side effects include flushing, lightheadedness, headache, runny nose, or nausea. There have been exceedingly rare reports of non-arteritic anterior ischemic optic neuropathy - a condition that impacts sight - although most experts do not believe this to be related to ED medications. </p>  <p>I do always recommend that you see a doctor in person for this issue, for a full physical exam and blood work to determine if there is an underlying cause like diabetes, vascular disease or low testosterone.\"</p>",
                "original_fill_fee": 0,
                "original_shipping_fee": 0
            },
            "drugs": [
                {
                    "uuid": "75537dc9-4cad-42db-986e-26d7d76f5b6a",
                    "drug_uuid": "c0beadac-d826-4c69-a15a-e4b3a7c38101",
                    "plan_uuid": "abc50c4b-b065-4477-a713-61e32ab3d41b",
                    "billing_uuid": "51044243-66fc-4cf9-b998-189b9b076c9e",
                    "kroll": null,
                    "first_prescription": null,
                    "deleted_at": null,
                    "plan": {
                        "id": 559,
                        "drug_id": 56,
                        "uuid": "abc50c4b-b065-4477-a713-61e32ab3d41b",
                        "bill_period": 3,
                        "created_at": "2021-04-27 15:12:29",
                        "updated_at": "2021-04-29 14:08:48",
                        "deleted_at": null,
                        "unit_amount": 12,
                        "unit_name": "pill",
                        "defaults": {
                            "m": "36",
                            "r": "3"
                        },
                        "dou": "30",
                        "enabled": 1,
                        "prices": [
                            {
                                "price": "127.44",
                                "state": "ON"
                            },
                            {
                                "price": "127.44",
                                "state": "NS"
                            },
                            {
                                "price": "127.44",
                                "state": "PE"
                            },
                            {
                                "price": "127.44",
                                "state": "NL"
                            },
                            {
                                "price": "137.67",
                                "state": "AB"
                            },
                            {
                                "price": "137.67",
                                "state": "BC"
                            },
                            {
                                "price": "133.80",
                                "state": "MB"
                            },
                            {
                                "price": "133.80",
                                "state": "SK"
                            }
                        ],
                        "original_price": 0,
                        "original_fill_fee": 0,
                        "full_price": "0",
                        "full_price_per_month": "0",
                        "full_price_per_month_per_region": 0,
                        "orig_prices": [
                            {
                                "price": 12744,
                                "state": "ON"
                            },
                            {
                                "price": 12744,
                                "state": "NS"
                            },
                            {
                                "price": 12744,
                                "state": "PE"
                            },
                            {
                                "price": 12744,
                                "state": "NL"
                            },
                            {
                                "price": 13767,
                                "state": "AB"
                            },
                            {
                                "price": 13767,
                                "state": "BC"
                            },
                            {
                                "price": 13380,
                                "state": "MB"
                            },
                            {
                                "price": 13380,
                                "state": "SK"
                            }
                        ],
                        "drug": {
                            "id": 56,
                            "uuid": "c0beadac-d826-4c69-a15a-e4b3a7c38101",
                            "ailment_id": 2,
                            "name": "Sildenafil 50mg",
                            "created_at": "2019-09-06 16:00:20",
                            "updated_at": "2021-08-25 14:07:05",
                            "deleted_at": null,
                            "is_brand": 0,
                            "is_daily": 0,
                            "brand_equivalent": "Viagra",
                            "shipping_fee": 0,
                            "form": "tab",
                            "defaults": {
                                "lu": null,
                                "dose": "1",
                                "unit1": "tab",
                                "unit2": "po",
                                "unit3": "-",
                                "prn": "1",
                                "gtabs": "tab"
                            },
                            "enabled": 1,
                            "sig_code": null,
                            "sig_code_id": 46,
                            "din": "02248202",
                            "molecule_id": 21,
                            "is_prescribable": 1,
                            "macro": "<p>\"If you develop an erection that lasts longer than 3 hours please go to the emergency department - this is a rare but dangerous side effect called priapism. </p>  <p>Do not use any recreational drugs with your ED medication - especially poppers or any drug containing alkyl nitrites. Also, never take any nitrate-containing medication (nitro spray or patch) with your ED medication, which is a common drug used in heart disease and angina. </p>  <p>Common side effects include flushing, lightheadedness, headache, runny nose, or nausea. There have been exceedingly rare reports of non-arteritic anterior ischemic optic neuropathy - a condition that impacts sight - although most experts do not believe this to be related to ED medications. </p>  <p>I do always recommend that you see a doctor in person for this issue, for a full physical exam and blood work to determine if there is an underlying cause like diabetes, vascular disease or low testosterone.\"</p>",
                            "original_fill_fee": 0,
                            "original_shipping_fee": 0
                        }
                    },
                    "drug": {
                        "id": 56,
                        "uuid": "c0beadac-d826-4c69-a15a-e4b3a7c38101",
                        "ailment_id": 2,
                        "name": "Sildenafil 50mg",
                        "created_at": "2019-09-06 16:00:20",
                        "updated_at": "2021-08-25 14:07:05",
                        "deleted_at": null,
                        "is_brand": 0,
                        "is_daily": 0,
                        "brand_equivalent": "Viagra",
                        "shipping_fee": 0,
                        "form": "tab",
                        "defaults": {
                            "lu": null,
                            "dose": "1",
                            "unit1": "tab",
                            "unit2": "po",
                            "unit3": "-",
                            "prn": "1",
                            "gtabs": "tab"
                        },
                        "enabled": 1,
                        "sig_code": null,
                        "sig_code_id": 46,
                        "din": "02248202",
                        "molecule_id": 21,
                        "is_prescribable": 1,
                        "macro": "<p>\"If you develop an erection that lasts longer than 3 hours please go to the emergency department - this is a rare but dangerous side effect called priapism. </p>  <p>Do not use any recreational drugs with your ED medication - especially poppers or any drug containing alkyl nitrites. Also, never take any nitrate-containing medication (nitro spray or patch) with your ED medication, which is a common drug used in heart disease and angina. </p>  <p>Common side effects include flushing, lightheadedness, headache, runny nose, or nausea. There have been exceedingly rare reports of non-arteritic anterior ischemic optic neuropathy - a condition that impacts sight - although most experts do not believe this to be related to ED medications. </p>  <p>I do always recommend that you see a doctor in person for this issue, for a full physical exam and blood work to determine if there is an underlying cause like diabetes, vascular disease or low testosterone.\"</p>",
                        "original_fill_fee": 0,
                        "original_shipping_fee": 0
                    }
                }
            ]
        },
        "existing_prescription_img": null,
        "benefit_front": null,
        "benefit_back": null,
        "photo_id": null,
        "ailment": {
            "id": 2,
            "name": "Erectile Dysfunction",
            "created_at": "2019-01-16 15:01:59",
            "updated_at": "2019-02-21 13:42:11",
            "deleted_at": null,
            "slug": "erectile-dysfunction",
            "sort_order": 4,
            "uuid": "972b8a2f-b47f-41bb-869f-7bb62e5fa4a3"
        },
        "deny_reason": null,
        "refill_nr": "",
        "ail_short": "ED",
        "ailment_name": "Erectile Dysfunction",
        "userCanAssess": true
    },
    {
        "id": 16,
        "uuid": "7f37b611-2c15-4265-ab92-c3b2cce8108f",
        "type": "visit",
        "user_id": 3,
        "ailment_id": 9,
        "province": "ON",
        "details": {
            "flow": "normal",
            "patient": {
                "name": "Patient",
                "surname": "User"
            },
            "frequency": 3,
            "appliedCode": null,
            "edTreatment": null,
            "ownPharmacy": false,
            "ohip_qualify": false,
            "insurance_use": null,
            "differentBilling": false,
            "doctorHasToDecide": true,
            "ailmentSubCategory": "",
            "ownPharmacyDetails": {
                "fax": null,
                "area": null,
                "city": null,
                "name": null,
                "phone": null,
                "address": null,
                "province": null,
                "area_phone": null,
                "phone_phone": null,
                "postal_code": null
            },
            "assessment_language": "en",
            "differentBillingData": {
                "city": "Toronto",
                "province": "ON",
                "postal_code": "M3M 3G8",
                "address_line1": "1235 Wilson Ave",
                "address_line2": null
            },
            "communicationPreference": "Asynchronous messaging",
            "patientFreeFormDrugChoice": null
        },
        "patient_name": "Patient User",
        "created_at": "2022-12-12 20:33:25",
        "prescription": null,
        "created_at_date_only": "2022/12/12",
        "created_at_toronto": "2022-12-12 15:33:25",
        "assessed_at_toronto": null,
        "consent_at": "2022-12-12 15:33",
        "has_other_assessments": true,
        "created_at_table": "2022/12/12 15:33",
        "phnotes_edited_toronto": null,
        "expired_at_table": null,
        "prefilled_pharmacy": 2574,
        "first_prescription_uuid": null,
        "ailment_sub_category_name": "",
        "billing": {
            "uuid": "03fa7e7f-a5b8-4852-b573-0668942af6d5",
            "assessment_id": 16,
            "selected": null,
            "old_drug": null,
            "old_plan": null,
            "created_at": "2022-12-12 20:33:25",
            "updated_at": "2022-12-12 20:33:25",
            "deleted_at": null,
            "billing_data": {
                "address_line1": "1235 Wilson Ave",
                "address_line2": null,
                "city": "Toronto",
                "province": "ON",
                "postal_code": "M3M 3G8"
            },
            "plan_relation": null,
            "drug_relation": null,
            "drugs": []
        },
        "existing_prescription_img": null,
        "benefit_front": null,
        "benefit_back": null,
        "photo_id": null,
        "ailment": {
            "id": 9,
            "name": "Mental Health",
            "created_at": "2021-04-08 13:52:23",
            "updated_at": "2021-04-08 13:52:23",
            "deleted_at": null,
            "slug": "mental-health",
            "sort_order": 9,
            "uuid": "be75e19a-3075-445f-aeb3-6c3cb554ffeb"
        },
        "deny_reason": null,
        "refill_nr": "",
        "ail_short": "MH",
        "ailment_name": "Mental Health",
        "userCanAssess": true
    },
    {
        "id": 18,
        "uuid": "659c7375-0237-42df-9ab0-50da38913a24",
        "type": "visit",
        "user_id": 3,
        "ailment_id": 1,
        "province": "ON",
        "details": {
            "flow": "normal",
            "patient": {
                "name": "Patient",
                "surname": "User"
            },
            "frequency": 3,
            "appliedCode": null,
            "edTreatment": null,
            "ownPharmacy": false,
            "ohip_qualify": true,
            "insurance_use": null,
            "differentBilling": false,
            "hasOtherProducts": true,
            "doctorHasToDecide": false,
            "ailmentSubCategory": "",
            "ownPharmacyDetails": {
                "fax": null,
                "area": null,
                "city": null,
                "name": null,
                "phone": null,
                "address": null,
                "province": null,
                "area_phone": null,
                "phone_phone": null,
                "postal_code": null
            },
            "assessment_language": "en",
            "differentBillingData": {
                "city": "Toronto",
                "province": "ON",
                "postal_code": "M3M 3G8",
                "address_line1": "1235 Wilson Ave",
                "address_line2": null
            },
            "communicationPreference": null,
            "patientFreeFormDrugChoice": null
        },
        "patient_name": "Patient User",
        "created_at": "2023-02-01 17:04:17",
        "prescription": null,
        "created_at_date_only": "2023/02/01",
        "created_at_toronto": "2023-02-01 12:04:17",
        "assessed_at_toronto": null,
        "consent_at": "2023-02-01 12:04",
        "has_other_assessments": true,
        "created_at_table": "2023/02/01 12:04",
        "phnotes_edited_toronto": null,
        "expired_at_table": null,
        "prefilled_pharmacy": null,
        "first_prescription_uuid": null,
        "ailment_sub_category_name": "",
        "billing": null,
        "existing_prescription_img": null,
        "benefit_front": null,
        "benefit_back": null,
        "photo_id": null,
        "ailment": {
            "id": 1,
            "name": "Birth Control",
            "created_at": "2019-01-16 15:01:11",
            "updated_at": "2019-02-21 13:42:11",
            "deleted_at": null,
            "slug": "birth-control",
            "sort_order": 1,
            "uuid": "99b119a6-9100-4d9d-8aeb-03b1ef12f5b7"
        },
        "deny_reason": null,
        "refill_nr": "",
        "ail_short": "BC",
        "ailment_name": "Birth Control",
        "userCanAssess": true
    },
    {
        "id": 19,
        "uuid": "80b25a07-12ce-498d-abcd-7ff7e8e85d73",
        "type": "visit",
        "user_id": 3,
        "ailment_id": 1,
        "province": "ON",
        "details": {
            "flow": "normal",
            "patient": {
                "name": "Patient",
                "surname": "User"
            },
            "frequency": 3,
            "appliedCode": null,
            "edTreatment": null,
            "ownPharmacy": false,
            "ohip_qualify": true,
            "insurance_use": null,
            "differentBilling": false,
            "hasOtherProducts": true,
            "doctorHasToDecide": false,
            "ailmentSubCategory": "",
            "ownPharmacyDetails": {
                "fax": null,
                "area": null,
                "city": null,
                "name": null,
                "phone": null,
                "address": null,
                "province": null,
                "area_phone": null,
                "phone_phone": null,
                "postal_code": null
            },
            "assessment_language": "en",
            "differentBillingData": {
                "city": "Toronto",
                "province": "ON",
                "postal_code": "M3M 3G8",
                "address_line1": "1235 Wilson Ave",
                "address_line2": null
            },
            "communicationPreference": null,
            "patientFreeFormDrugChoice": null
        },
        "patient_name": "Patient User",
        "created_at": "2023-02-01 17:04:22",
        "prescription": null,
        "created_at_date_only": "2023/02/01",
        "created_at_toronto": "2023-02-01 12:04:22",
        "assessed_at_toronto": null,
        "consent_at": "2023-02-01 12:04",
        "has_other_assessments": true,
        "created_at_table": "2023/02/01 12:04",
        "phnotes_edited_toronto": null,
        "expired_at_table": null,
        "prefilled_pharmacy": null,
        "first_prescription_uuid": null,
        "ailment_sub_category_name": "",
        "billing": null,
        "existing_prescription_img": null,
        "benefit_front": null,
        "benefit_back": null,
        "photo_id": null,
        "ailment": {
            "id": 1,
            "name": "Birth Control",
            "created_at": "2019-01-16 15:01:11",
            "updated_at": "2019-02-21 13:42:11",
            "deleted_at": null,
            "slug": "birth-control",
            "sort_order": 1,
            "uuid": "99b119a6-9100-4d9d-8aeb-03b1ef12f5b7"
        },
        "deny_reason": null,
        "refill_nr": "",
        "ail_short": "BC",
        "ailment_name": "Birth Control",
        "userCanAssess": true
    },
    {
        "id": 30,
        "uuid": "be96573d-d654-49b1-aff4-1d488a898789",
        "type": "visit",
        "user_id": 3,
        "ailment_id": 3,
        "province": "ON",
        "details": {
            "flow": "normal",
            "patient": {
                "name": "Patient",
                "surname": "User"
            },
            "frequency": 3,
            "appliedCode": null,
            "edTreatment": null,
            "ownPharmacy": false,
            "ohip_qualify": true,
            "insurance_use": null,
            "differentBilling": false,
            "hasOtherProducts": true,
            "doctorHasToDecide": false,
            "ailmentSubCategory": "",
            "ownPharmacyDetails": {
                "fax": null,
                "area": null,
                "city": null,
                "name": null,
                "phone": null,
                "address": null,
                "province": null,
                "area_phone": null,
                "phone_phone": null,
                "postal_code": null
            },
            "assessment_language": "en",
            "differentBillingData": {
                "city": "Toronto",
                "province": "ON",
                "postal_code": "M3M 3G8",
                "address_line1": "1235 Wilson Ave",
                "address_line2": null
            },
            "communicationPreference": null,
            "patientFreeFormDrugChoice": null
        },
        "patient_name": "Patient User",
        "created_at": "2023-02-01 17:30:02",
        "prescription": null,
        "created_at_date_only": "2023/02/01",
        "created_at_toronto": "2023-02-01 12:30:02",
        "assessed_at_toronto": null,
        "consent_at": "2023-02-01 12:30",
        "has_other_assessments": true,
        "created_at_table": "2023/02/01 12:30",
        "phnotes_edited_toronto": null,
        "expired_at_table": null,
        "prefilled_pharmacy": null,
        "first_prescription_uuid": null,
        "ailment_sub_category_name": "",
        "billing": null,
        "existing_prescription_img": null,
        "benefit_front": null,
        "benefit_back": null,
        "photo_id": null,
        "ailment": {
            "id": 3,
            "name": "Acne",
            "created_at": "2019-01-16 15:02:37",
            "updated_at": "2019-02-21 13:42:11",
            "deleted_at": null,
            "slug": "acne",
            "sort_order": 2,
            "uuid": "a2d2ec12-4919-48f1-8bad-ec42443ebf86"
        },
        "deny_reason": null,
        "refill_nr": "",
        "ail_short": "AC",
        "ailment_name": "Acne",
        "userCanAssess": true
    }
]