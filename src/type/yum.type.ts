export type resourcePlanItemsType = {
  ip: string
  hostname: string
  user: string
  password: string
  showPass: boolean
  extra: string
}

export interface resourcePlanParamsType {
  ip: string
  hostname: string
  user: string
  password: string
  extra: string
  network: string
  master: boolean
}
