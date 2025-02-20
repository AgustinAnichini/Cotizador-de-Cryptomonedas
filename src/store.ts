import { create } from "zustand";
import { CryptoCurrency, PairCurrency, PairResponse } from "./types";
import { devtools} from 'zustand/middleware'
import {getCryptos, getPricePair } from './services/cryptoService'

type CryptoStore = {
    cryptoCurrencies: CryptoCurrency[]
    pricePair: PairResponse
    spinner: boolean
    fetchCryptos: () => Promise<void>
    fetchData: (pair: PairCurrency) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>() (
    devtools((set) => ({
        cryptoCurrencies: [],
        pricePair:{
            IMAGEURL: '',
            PRICE: '',
            HIGHDAY: '',
            LOWDAY: '',
            CHANGEPCT24HOUR: '',
            LASTUPDATE: '',
        },
        spinner: false,

        fetchCryptos : async () => {
            const cryptos  = await getCryptos() 
            set(() => ({
                cryptoCurrencies: cryptos
            }))
        },

        fetchData: async (pair) =>{
            set(() => ({
                spinner: true
              }))

          const pricePair = await getPricePair(pair)
          set(() => ({
            pricePair,
            spinner: false
          }))
        }   
})))