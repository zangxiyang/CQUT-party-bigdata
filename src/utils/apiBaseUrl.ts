const apiURL = process.env.VUE_APP_BASE_API
export const qianTaiUrl = process.env.VUE_APP_QI_TAI_API
enum enumApi {
    BIG_SCREEN  ='front/BigScreen/getBigScreen'
}

export const bigScrrrnUrl = `${apiURL}/${enumApi.BIG_SCREEN}`

