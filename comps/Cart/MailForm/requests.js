import axios from 'axios'

const apiKey = process.env.NEXT_PUBLIC_API_KEY
export const getRegions =()=> axios.post('https://api.novaposhta.ua/v2.0/json/',
                                    {
                            "apiKey": `${apiKey}`,
refs/remotes/origin/master
                            "modelName": "Address",
                            "calledMethod": "getSettlementCountryRegion",
                            "methodProperties": {
                              "AreaRef" : "dcaad5a7-4b33-11e4-ab6d-005056801329"
                                   }
                                     })
