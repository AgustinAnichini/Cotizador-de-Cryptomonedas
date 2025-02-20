import {z} from 'zod'

export const CurrencySchema = z.object({
    code:z.string(),
    name: z.string()
})

export const CryptoCurrencySchemaResponse = z.object({
    CoinInfo: z.object({
        FullName: z.string(),
        Name: z.string()
    })
})

export const CryptoCurrenciesSchemaResponse = z.array(CryptoCurrencySchemaResponse)

export const PairSchema = z.object({
    currency: z.string(),
    cryptoCurrency: z.string()
})

export const PairSchemaResponse = z.object({
    IMAGEURL: z.string(),
    PRICE: z.string(),
    HIGHDAY: z.string(),
    LOWDAY: z.string(),
    CHANGEPCT24HOUR: z.string(),
    LASTUPDATE: z.string()
})
