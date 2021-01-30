class Validator {
  private obj: any = {}

  private vnames: string[] = []

  constructor(vnames: string[]) {
    this.vnames = vnames
    this.assginClass()
  }

  public readonly getValidators = (): any => {
    const validatorObj: any = {}
    this.vnames.forEach((vname: string) => {
      if (this.obj[vname]) {
        validatorObj[vname] = this.obj[vname]
      }
    })
    return validatorObj
  }

  private assginClass() {
    const modulesFiles = require.context('../validator', true, /.ts$/)
    modulesFiles.keys().forEach((file: string) => {
      if (file !== './index.ts') {
        const ClassName = require(file + '').default
        Object.assign(this.obj, new ClassName())
      }
    })
  }
}
export default Validator
