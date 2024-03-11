import axios from 'axios'

const apiKey = process.env.NEXT_PUBLIC_API_KEY
export const getRegions =(areaRef)=> axios.post(
                                 'https://api.novaposhta.ua/v2.0/json/',
                                    {
                            "apiKey": `${apiKey}`,
                            "modelName": "Address",
                            "calledMethod": "getSettlementCountryRegion",
                            "methodProperties": {
                              "AreaRef" : `${areaRef}`
                              //~ "dcaad5a7-4b33-11e4-ab6d-005056801329"
                                   }
                                     })
export async function regionsGet(currRef){
		  const regionsData = await getRegions(currRef)
		  const regionsAll = regionsData.data.data
		  
	                        return {regionsAll};
	                   }

export const getLocations =(regionRef)=> axios.post(
                                 'https://api.novaposhta.ua/v2.0/json/',
                                    {
							"apiKey": `${apiKey}`,
                            "modelName": "Address",
                            "calledMethod": "getSettlementCountryRegion",
                            "methodProperties": {
                              "RegionRef" : `${regionRef}`
								   }
								      })
