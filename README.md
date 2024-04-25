# valida-o-de-tela
 
# cadastra-se

<!DOCTYPE html>: Declara o tipo de documento como HTML5.
<html>: Tag de abertura para o elemento HTML.
<head>: Contém metadados sobre o documento HTML, como o título, a codificação, os estilos CSS e os scripts JavaScript.
<meta charset='utf-8'>: Define a codificação de caracteres como UTF-8, que é comumente usada para garantir suporte a caracteres especiais.
<meta http-equiv='X-UA-Compatible' content='IE=edge'>: Especifica a versão do Internet Explorer para renderizar a página.
<title>Cadastre-se</title>: Define o título da página exibido na barra de título do navegador.
<meta name='viewport' content='width=device-width, initial-scale=1'>: Define a largura da viewport para o dispositivo e define a escala inicial como 1.
<link rel='stylesheet' type='text/css' media='screen' href="sign-in.css">: Vincula um arquivo CSS externo chamado "sign-in.css" para estilizar a página.
<script src='main.js'></script>: Vincula um arquivo JavaScript externo chamado "main.js".
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">: Vincula o framework Bootstrap CSS para estilos adicionais e funcionalidades de layout.

# esqueciSenha.html

<!DOCTYPE html>: Define o tipo de documento HTML.
<html>: Início do elemento HTML.
<head>: Contém metadados e links para recursos externos.
<meta charset='utf-8'>: Define a codificação de caracteres como UTF-8.
<meta http-equiv='X-UA-Compatible' content='IE=edge'>: Define a compatibilidade com o Internet Explorer.
<title>Cadastre-se</title>: Define o título da página.
<meta name='viewport' content='width=device-width, initial-scale=1'>: Define a largura da viewport e a escala inicial para dispositivos móveis.
<link rel='stylesheet' type='text/css' media='screen' href="sign-in.css">: Vincula um arquivo CSS externo para estilizar a página.
<script src='main.js'></script>: Vincula um arquivo JavaScript externo para funcionalidades adicionais.
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">: Vincula o framework Bootstrap para estilos adicionais.
<body>: Contém o conteúdo visível da página.
<main class="form-signin w-100 m-auto">: Define uma área principal com classes específicas do Bootstrap para o formulário de inscrição.
<form>: Início do formulário de redefinição de senha.
<h1 class="h3 mb-3 fw-normal">Redefinir Senha</h1>: Título do formulário.
<div class="form-floating">: Define uma área de entrada flutuante para o campo de email ou telefone.
<input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">: Campo de entrada de email ou telefone.
<label for="floatingInput">Email ou Telefone</label>: Rótulo do campo de entrada.
<button class="btn btn-primary w-100 py-2" type="submit">Recuperar</button>: Botão de envio do formulário com estilos do Bootstrap.

# funcao.html
<!DOCTYPE html>: Define o tipo de documento HTML.
<html>: Tag de abertura para o elemento HTML.
<head>: Contém metadados e links para recursos externos.
<title>Validação de Campos de Acesso</title>: Define o título da página exibido na barra de título do navegador.
<body>: Contém o conteúdo visível da página.
<h2>Formulário de Acesso</h2>: Título do formulário.
<form onsubmit="return validarFormulario()">: Início do formulário de acesso. A função validarFormulario() é chamada quando o formulário é enviado.
<label for="usuario">Usuário:</label><br>: Rótulo do campo de usuário.
<input type="text" id="usuario" name="usuario"><br><br>: Campo de entrada para o usuário.
<label for="senha">Senha:</label><br>: Rótulo do campo de senha.
<input type="password" id="senha" name="senha"><br><br>: Campo de entrada para a senha.
<input type="submit" value="Entrar">: Botão de envio do formulário.
<p><a href="#" onclick="recuperarSenha()">Esqueci minha senha</a></p>: Link para recuperar a senha, que chama a função recuperarSenha() ao ser clicado.
<script src="../js/main.js"></script>: Vincula um arquivo JavaScript externo chamado "main.js" para funcionalidades adicionais.

# index.html
<!doctype html>: Declaração do tipo de documento HTML.
<html lang="en" data-bs-theme="auto">: Tag de abertura para o elemento HTML, especificando o idioma da página e definindo o tema Bootstrap para automático.
<head>: Contém metadados e links para recursos externos.
<meta charset="utf-8">: Define a codificação de caracteres como UTF-8.
<meta name="viewport" content="width=device-width, initial-scale=1">: Define a largura da viewport e a escala inicial para dispositivos móveis.
Metadados de descrição, autor e gerador.
<title>Login</title>: Define o título da página.
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">: Vincula o framework Bootstrap para estilos adicionais.
Estilos personalizados.
<link href="sign-in.css" rel="stylesheet">: Vincula um arquivo CSS personalizado para estilizar a página de login.
<body class="d-flex align-items-center py-4 bg-body-tertiary">: Define a classe do corpo da página para definir o estilo de fundo e o alinhamento dos elementos.
<main class="form-signin w-100 m-auto">: Define uma área principal com classes específicas do Bootstrap para o formulário de login.
<form>: Início do formulário de login.
<h1 class="h3 mb-3 fw-normal">Por favor, faça seu login</h1>: Título do formulário de login.
Campos de entrada para email e senha com rótulos e placeholders.
Botão de submissão do formulário.
Link para recuperar senha.
Div com detalhes adicionais, como um link para cadastro.
<script src="../tela-login/js/main.js"></script>: Vincula um arquivo JavaScript externo chamado "main.js" para funcionalidades adicionais.

# inicio.html

<!DOCTYPE html>: Define o tipo de documento HTML.
<html>: Tag de abertura para o elemento HTML.
<head>: Contém metadados e links para recursos externos.
<meta charset='utf-8'>: Define a codificação de caracteres como UTF-8.
<meta http-equiv='X-UA-Compatible' content='IE=edge'>: Define a compatibilidade com o Internet Explorer.
<title>Inicil</title>: Define o título da página.
<meta name='viewport' content='width=device-width, initial-scale=1'>: Define a largura da viewport e a escala inicial para dispositivos móveis.
<link rel='stylesheet' type='text/css' media='screen' href='main.css'>: Vincula um arquivo CSS externo para estilizar a página.
<script src='main.js'></script>: Vincula um arquivo JavaScript externo para funcionalidades adicionais.
<body>: Contém o conteúdo visível da página.
<h1>Acesso liberado</h1>: Um título de nível 1 que exibe "Acesso liberado".

# sing-in.css

html, body: Define uma altura de 100% para o HTML e o corpo da página, garantindo que o formulário ocupe toda a altura da janela do navegador.
.form-signin: Estiliza o formulário de login.
max-width: Define a largura máxima do formulário como 330 pixels.
padding: Adiciona um preenchimento interno de 1 rem (16 pixels) ao redor do formulário.
.form-signin .form-floating:focus-within: Estiliza os campos flutuantes do formulário quando estão em foco.
z-index: Define a ordem de empilhamento para garantir que os campos flutuantes estejam acima de outros elementos quando em foco.
.form-signin input[type="email"]: Estiliza o campo de entrada de email.
margin-bottom: Define uma margem inferior de -1px para garantir que não haja espaço entre o campo de email e o campo de senha.
border-bottom-right-radius e border-bottom-left-radius: Define o raio de borda inferior direita e inferior esquerda como 0 para remover as bordas arredondadas na parte inferior do campo de email.
.form-signin input[type="password"]: Estiliza o campo de entrada de senha.
margin-bottom: Define uma margem inferior de 10 pixels para criar um espaço entre o campo de email e o botão de login.
border-top-left-radius e border-top-right-radius: Define o raio de borda superior esquerda e superior direita como 0 para remover as bordas arredondadas na parte superior do campo de senha.
.detalhes: Estiliza os detalhes adicionais no formulário, como links de recuperação de senha ou cadastro.
text-align: Define o alinhamento do texto como centralizado.