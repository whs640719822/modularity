define(['module2'], function(module2) {
    let name = 'Tom'
    function showMsg() {
      alert(module2.getMsg() + ', ' + name)
    }
    // 暴露模块
    return { showMsg }
  })