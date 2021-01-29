import { alertStoreModule } from '@/store/modules/alert'

class AlertUtil {
  public static open = (text: string, visible: boolean, color = 'info', timeout = 3000): void => {
    alertStoreModule.openAlert({
      text,
      visible,
      timeout,
      color
    })
  }

  public static close = (): void => {
    alertStoreModule.closeAlert()
  }
}

export default AlertUtil
