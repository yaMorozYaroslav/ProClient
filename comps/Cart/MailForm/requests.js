import axios from 'axios'

export const getAreas =()=> axios.post('https://api.novaposhta.ua/v2.0/json/',
                                    {
                            "apiKey": "",
                            "modelName": "Address",
                            "calledMethod": "getSettlements",
                            "methodProperties": {"Ref" : ""}})
