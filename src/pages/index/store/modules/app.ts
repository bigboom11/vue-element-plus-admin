import store from '../index'
import { VuexModule, getModule, Module, Mutation, Action } from 'vuex-module-decorators'

export interface AppState {
  collapsed: boolean
  showTags: boolean
  showLogo: boolean
  showNavbar: boolean
  fixedHeader: boolean
  // fixedTags: boolean
  // fixedNavbar: boolean
  layout: string
  showBreadcrumb: boolean
  showHamburger: boolean
  showScreenfull: boolean
  showUserInfo: boolean
}

@Module({ dynamic: true, namespaced: true, store, name: 'app' })
class App extends VuexModule implements AppState {
  public collapsed = false // 菜单栏是否栏缩收
  public showLogo = true // 是否显示logo
  public showTags = true // 是否显示标签栏
  public showNavbar = true // 是否显示navbar
  // public fixedTags = true // 是否固定标签栏
  // public fixedNavbar = true // 是否固定navbar
  public fixedHeader = true // 是否固定header
  public layout = 'Classic' // layout布局
  public showBreadcrumb = true // 是否显示面包屑
  public showHamburger = true // 是否显示侧边栏缩收按钮
  public showScreenfull = true // 是否全屏按钮
  public showUserInfo = true // 是否显示用户头像

  @Mutation
  private SET_COLLAPSED(collapsed: boolean): void {
    this.collapsed = collapsed
  }
  @Mutation
  private SET_SHOWLOGO(showLogo: boolean): void {
    this.showLogo = showLogo
  }
  @Mutation
  private SET_SHOWTAGS(showTags: boolean): void {
    this.showTags = showTags
  }
  @Mutation
  private SET_NAVBAR(showNavbar: boolean): void {
    this.showNavbar = showNavbar
  }
  // @Mutation
  // private SET_FIXEDTAGS(fixedTags: boolean): void {
  //   this.fixedTags = fixedTags
  // }
  // @Mutation
  // private SET_FIXEDNAVBAR(fixedNavbar: boolean): void {
  //   this.fixedNavbar = fixedNavbar
  // }
  @Mutation
  private SET_FIXEDHEADER(fixedHeader: boolean): void {
    this.fixedHeader = fixedHeader
  }
  @Mutation
  private SET_LAYOUT(layout: 'Classic' | 'LeftTop' | 'Top' | 'Test'): void {
    this.layout = layout
  }
  @Mutation
  private SET_BREADCRUMB(showBreadcrumb: boolean): void {
    this.showBreadcrumb = showBreadcrumb
  }
  @Mutation
  private SET_HAMBURGER(showHamburger: boolean): void {
    this.showHamburger = showHamburger
  }
  @Mutation
  private SET_SCREENFULL(showScreenfull: boolean): void {
    this.showScreenfull = showScreenfull
  }
  @Mutation
  private SET_USERINFO(showUserInfo: boolean): void {
    this.showUserInfo = showUserInfo
  }

  @Action
  public SetCollapsed(collapsed: boolean): void {
    this.SET_COLLAPSED(collapsed)
  }
  @Action
  public SetShowLogo(showLogo: boolean): void {
    this.SET_SHOWLOGO(showLogo)
  }
  @Action
  public SetShowTags(showTags: boolean): void {
    this.SET_SHOWTAGS(showTags)
  }
  @Action
  public SetShowNavbar(showNavbar: boolean): void {
    this.SET_NAVBAR(showNavbar)
  }
  @Action
  public SetFixedHeader(fixedHeader: boolean): void {
    this.SET_FIXEDHEADER(fixedHeader)
  }
  // @Action
  // public SetFixedTags(fixedTags: boolean): void {
  //   this.SET_FIXEDTAGS(fixedTags)
  // }
  // @Action
  // public SetFixedNavbar(fixedNavbar: boolean): void {
  //   this.SET_FIXEDNAVBAR(fixedNavbar)
  // }
  @Action
  public SetLayout(layout: 'Classic' | 'LeftTop' | 'Top' | 'Test'): void {
    this.SET_LAYOUT(layout)
  }
  @Action
  public SetBreadcrumb(showBreadcrumb: boolean): void {
    this.SET_BREADCRUMB(showBreadcrumb)
  }
  @Action
  public SetHamburger(showHamburger: boolean): void {
    this.SET_HAMBURGER(showHamburger)
  }
  @Action
  public SetScreenfull(showScreenfull: boolean): void {
    this.SET_SCREENFULL(showScreenfull)
  }
  @Action
  public SetUserInfo(showUserInfo: boolean): void {
    this.SET_USERINFO(showUserInfo)
  }
}

export const appStore = getModule<App>(App)
