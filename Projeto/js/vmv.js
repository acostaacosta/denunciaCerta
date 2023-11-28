// ===========================================================
// codigo para popup de missão , visão , valores.
// ===========================================================
// Função para abrir a caixa com a informação
  // Função para exibir o overlay e o popup
  function showPopup(type) {
    var overlay = document.getElementById('overlay');
    var popup = document.getElementById('popup' + type);
    overlay.style.display = 'block';
    popup.style.display = 'block';
  }

  // Função para fechar o overlay e o popup
  function closePopup(type) {
    var overlay = document.getElementById('overlay');
    var popup = document.getElementById('popup' + type);
    overlay.style.display = 'none';
    popup.style.display = 'none';
  }
// ===========================================================
// codigo para popup de missão , visão , valores.
// ===========================================================