import Swal from 'sweetalert2'

const alertError = () => {
  Swal.fire({
    text: '有某個地方出錯了！請稍候再試一次',
    icon: 'error',
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000
  })
}

export { alertError }
