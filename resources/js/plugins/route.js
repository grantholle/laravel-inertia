export default {
  install (app) {
    app.config.globalProperties.$route = (name, params) => {
      if (name.startsWith('http')) {
        return name
      }

      try {
        return window.route(name, params)
      } catch (err) {
        console.warn(err)
        return '#'
      }
    }
  }
}
