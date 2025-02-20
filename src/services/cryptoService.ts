import { CryptoCurrenciesSchemaResponse,PairSchemaResponse } from "../schema/cripto-schema";
import axios from "axios";
import { PairCurrency } from "../types";

export async function getCryptos() {
    const URL= 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const {data: {Data}} = await axios(URL)
    const result = CryptoCurrenciesSchemaResponse.safeParse(Data)
    if (result.success) {
        return result.data
    }
}

export async function getPricePair(pair: PairCurrency) {
    const URL=  `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.cryptoCurrency}&tsyms=${pair.currency}`
    const {data: {DISPLAY}} = await axios(URL)
    const result = PairSchemaResponse.safeParse(DISPLAY[pair.cryptoCurrency][pair.currency])
    if (result.success) {
        return result.data
    }
}