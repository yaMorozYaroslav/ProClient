import axios from 'axios'

export const getAreas =()=> axios.post('https://api.novaposhta.ua/v2.0/json/',
                                    {
                            "apiKey": "eee3a5f0b4d1ba07016827f6dff25e86",
                            "modelName": "Address",
                            "calledMethod": "getSettlements",
                            "methodProperties": {"Ref" : ""}})
