Teste de Proficiencia Intuitiva

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Para o teste você estará consumindo a API que está documentada nesse link:
https://documenter.getpostman.com/view/129790/RWaNPSET#f4139dc3-67e1-4c36-8c1a-bc120e6455e8
 
Note que é uma API de testes e o número de registros está limitado a 20 usuários e 20 instrumentos. Passando dessa quantia os mais antigos serão excluídos. A qualquer momento você pode chamar o “reset”, que os usuários e instrumentos voltam ao seu valor inicial.
 
Você deve criar uma aplicação web em ReactJs, consumindo uma API RESTful e seguindo os seguintes requisitos:
 
1.	Tela de Usuários
a.	O sistema deverá conter cadastro de Usuários.
b.	O cadastro de Usuários deverá conter os campos:
“Nome”, “Sobrenome”, “E-mail” e “Telefone”.
c.	O sistema deverá mostrar em uma listagem, os usuários cadastrados, dando a opção de deletar ou editar.


2.	Tela de instrumentos:
a.	O sistema deverá conter cadastro de Instrumentos.
b.	O cadastro de Instrumentos deverá conter os campos:
“Nome do instrumento”, “Imagem do instrumento” e “Associação exibindo a qual usuário o instrumento pertence”.
c.	O sistema deverá mostrar em uma listagem, os instrumentos cadastrados, dando a opção de deletar ou editar. Nessa listagem deve ser exibido a imagem do instrumento, caso o instrumento não tenha imagem deve ser exibido uma imagem padrão.
d.	A imagem do instrumento deve ser carregada em uma api externa como https://cloudinary.com, http://uploads.im/apidocs ou outra de sua preferência, em nossa API de testes só será armazenado a URL da mesma.
3.	Os dados deverão ser validados no submit e devem ser exibidas as mensagens de validação.
4.	Cada passo do sistema deverá ser registrado em um repositório de versionamento.
5.	O resultado final pode ser disponibilizado em um repositório GIT.
6.	O tempo de conclusão é de uma semana.