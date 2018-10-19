function cifrar()
{
  let texto = document.getElementById('texto').value.toLowerCase()
  var mario = new Array('m', 'a', 'r', 'i', 'o');
  let textoCifrado = ''
  let flag
  console.log(texto.length)
  for(let i = 0; i < texto.length; i++)
  {
    flag = false
    for(e in mario)
    {
      if(mario[e] == texto.charAt(i))
      {
        flag = true
        if (mario[e] == 'm')
          textoCifrado += '*'
        else if (mario[e] == 'a')
          textoCifrado += '$'
        else if (mario[e] == 'r')
          textoCifrado += '8'
        else if (mario[e] == 'i')
          textoCifrado += '&'
        else if (mario[e] == 'o')
          textoCifrado += '4'
      }
    }
    if(flag == false)
      textoCifrado += texto.charAt(i)
  }
    console.log(textoCifrado)
  document.getElementById('cifrado').innerHTML = textoCifrado
}

function descifrar()
{
  let textod = document.getElementById('textod').value
  var oiram = new Array('*','$', '8', '&', '4' );
  let textoDescifrado = ''
  let flag
  console.log(textod.length)
  for(let i = 0; i < textod.length; i++)
  {
    flag = false
    for(e in oiram)
    {
      if(oiram[e] == textod.charAt(i))
      {
        flag = true
        if (oiram[e] == '*')
         textoDescifrado += 'm'
        else if (oiram[e] == '$')
          textoDescifrado += 'a'
        else if (oiram[e] == '8')
          textoDescifrado += 'r'
        else if (oiram[e] == '&')
          textoDescifrado += 'i'
        else if (oiram[e] == '4')
          textoDescifrado += 'o'
      }
    }
    if(flag == false)
      textoDescifrado += textod.charAt(i)
  }
    console.log(textoDescifrado)
  document.getElementById('descifrado').innerHTML = textoDescifrado
}
