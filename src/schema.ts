import * as z from 'zod'

export const EmptyResponse = z.union([z.void(), z.literal('')])
export type EmptyResponse = z.infer<typeof EmptyResponse>

export const UnknownResponse = z.unknown()
export type UnknownResponse = z.infer<typeof UnknownResponse>

export const EmptyObject = z.record(z.never())
export type EmptyObject = z.infer<typeof EmptyObject>

export const PositiveNonZeroInt = z.number().int().min(1).max(2147483647)
export type PositiveNonZeroInt = z.infer<typeof PositiveNonZeroInt>

export const PositiveInt = z.number().int().min(0).max(2147483647)
export type PositiveInt = z.infer<typeof PositiveInt>

export const UrlString = z.string().min(12).max(1024)
export type UrlString = z.infer<typeof UrlString>

/**
 * The very simple email validation rule: /.*@.*\.[a-z]*$/
 */
export const EmailAddressSchema = z
  .string()
  .min(4)
  .max(256)
  .regex(/.*@.*\.[a-z]*/)
export type EmailAddress = z.infer<typeof EmailAddressSchema>

export const IdObject = z.object({
  id: z.string()
})
export type IdObject = z.infer<typeof IdObject>

export const NumericValuesRangeSchema = z.object({
  from: z.number().optional(),
  to: z.number().optional()
})
export type NumericValuesRange = z.infer<typeof NumericValuesRangeSchema>
