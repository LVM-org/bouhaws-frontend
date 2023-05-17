import { ref } from 'vue'
// import { Logic } from 'app-logic'

export const scrollToTop = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'auto',
  })
}

export const scrollToBottom = (id = '') => {
  let height = document.body.scrollHeight

  if (id) {
    height = document.getElementById(id)?.scrollHeight

    document.getElementById(id).scroll({
      top: height,
      left: 0,
      behavior: 'auto',
    })
  } else {
    window.scroll({
      top: height,
      left: 0,
      behavior: 'auto',
    })
  }
}

// export const FormValidations = Logic.Form
