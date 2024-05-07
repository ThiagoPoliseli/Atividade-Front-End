# Atividade-Front-End
Atividade xpressões Regulares (Regex) 06/05 front-end
# README

-Descrição

Este é um exemplo de código JavaScript para validar um formulário HTML que contém campos para nome, email e telefone. A validação é realizada utilizando expressões regulares para garantir que os dados inseridos nos campos correspondam aos padrões esperados.

-Funcionalidade

O código executa as seguintes operações:

1. Captura o evento de envio do formulário e impede o comportamento padrão de envio.
2. Obtém os valores dos campos de entrada de nome, email e telefone do formulário.
3. Valida os valores inseridos nos campos utilizando expressões regulares específicas para cada tipo de dado.
4. Se todos os campos forem válidos, limpa os campos do formulário.
5. Se houver campos inválidos, exibe uma mensagem de alerta com os erros de validação.

-Expressões Regulares Utilizadas

1. Validar Nome:
   - A expressão regular valida se o nome começa com uma letra maiúscula, seguida de até 100 caracteres alfabéticos, incluindo espaços, e não contém números.
   - Expressão regular: `/^[A-ZãáàèéêíìóòõúüçÇ][A-ZãáàèéêíìóòõúüçÇ\s]{0,99}$/i`

2. Validar Email:
   - A expressão regular valida se o email possui um formato válido, verificando se contém um nome de usuário seguido de '@' e um domínio com pelo menos dois caracteres alfabéticos.
   - Expressão regular: `/^[\w+\.-]+@[\w+\.-]+\.[a-zA-Z]{2,}$/`

3. Validar Telefone:
   - A expressão regular valida se o telefone segue o formato brasileiro, permitindo números com ou sem parênteses para o código de área, seguido de um número de telefone com ou sem hífen.
   - Expressão regular: `/^\(?\d{2}\)?\s*(?:\d{4,5}-?\d{4}|\d{4}-?\d{3})$/`
