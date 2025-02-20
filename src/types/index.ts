import { CurrencySchema, 
        CryptoCurrencySchemaResponse, 
        PairSchema, 
        PairSchemaResponse} from '../schema/cripto-schema'
import {z} from 'zod'

export type Currency = z.infer<typeof CurrencySchema>
export type CryptoCurrency = z.infer<typeof CryptoCurrencySchemaResponse>
export type PairCurrency= z.infer<typeof PairSchema>
export type PairResponse = z.infer<typeof PairSchemaResponse>

// TYPESCRIPT toma los schemas de ZOD para crear tipos de datos que vamos a obtener ya que typeScript 
//  NO SABE que tipo de dato va a venir, entonces primero definimos el schema que esperamos recibir con ZOD y
//  se lo pasamos a typescript para que este genere un el type que esperamos. La validacion de que ese type

// sea correcto corre por cuenta de zod  --> const verificacion = elSchemaDefinidoEnZod.safeParse(Data)

// Zod verifica que en la respuesta, esten presentes aquellos atributos que yo defini en el schema. 
// A toda la respuesta le hace un recorte dejando solo los atributos definidos.
//  ZOD NO DEVUELVE ATRIBUTOS QUE NO ESTEN DEFINIDOS EN EL SCHEMA


// Zod valida que los atributos definidos en el esquema estén presentes en la respuesta (y que sean del tipo correcto).
// Zod hace un "recorte": durante la validación, Zod elimina cualquier atributo que no esté especificado en el esquema. Esto significa que, después de la validación, solo tendrás en los datos los atributos definidos en el esquema.
// Zod no devuelve atributos no definidos en el esquema. Si hay campos adicionales en la respuesta que no están en el esquema, esos no aparecerán en el objeto validado.