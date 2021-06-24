const apiURL = process.env.VUE_APP_BASE_API
export const qianTaiUrl = process.env.VUE_APP_QI_TAI_API
enum enumApi {
    BIG_SCREEN  ='front/BigScreen/getBigScreen',
    BIG_SCREEN_PARTY='front/BigScreen/getBigScreenZb',
    PARTY_LIST ='front/common/party/list'
}

export const bigScreenUrl = `${apiURL}/${enumApi.BIG_SCREEN}`
export const bigScreenPartyUrl = `${apiURL}/${enumApi.BIG_SCREEN_PARTY}`
export const partyList = `${apiURL}/${enumApi.PARTY_LIST}`
