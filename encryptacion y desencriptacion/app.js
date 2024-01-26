function encriptar() {
    var text = document.getElementById("introtext").value;
  
    alert(text);
  
    text = text
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
  
    alert(text);
  
    document.getElementById("saliotext").value = text;
  }
  
  function desencriptar() {
    var text = document.getElementById("introtext").value;
  
    alert(text);
  
    text = text
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
  
    alert(text);
  
    document.getElementById("saliotext").value = text;
  }
  
  function copiar() {
    const outputText = document.getElementById("resultado");
    outputText.select();
    document.execCommand("copy");
    alert("Copiado al portapapeles");
  }