
##Modelo ER 
![modelo ER](https://github.com/wallyson123/denunciaCerta/assets/26144781/56d61b17-ce9f-42db-9711-1f402bf9d2eb)
##Modelo Logico 
![bd](https://github.com/wallyson123/denunciaCerta/assets/26144781/94dfb7a1-4c95-46fa-9e30-dc34484104df)

##MiniMundo

MINIMUNDO: CANAL DE DENÚNCIA
ENTIDADES: Denúncia, usuário, endereço, status, classificação, comentários.

O canal de denúncia possui várias denúncias. Essas denúncias são identificadas por um código. O canal mantém relação direta com os usuários que fazem as denúncias, estes usuários possuem identificação, permissão, senha, e-mail, nome, data de nascimento, sexo e telefone. Um usuário pode ser administrador, dependendo da sua permissão dentro do sistema. O usuário pode fazer várias denúncias e cada é feita por um único usuário.
A denúncia possui um endereço com os seguintes atributos, CEP, cidade, bairro, rua, número e identificador. Cada denúncia armazena um endereço e cada endereço pode possuir outras denúncias.
A denúncia ainda possui uma classificação e um status, a classificação tem um identificador e um acompanhamento que se divide em registrada, em análise, resolvendo e resolvida. O status também tem um identificador e um nível que é dividido em baixo, médio e alto. Cada denúncia possui uma classificação, uma data e um status, e ambos podem possuir várias denúncias.
Ainda se deseja guardar comentários em cada denúncia, esses comentários possuem um identificador, uma data, o id do usuário que fez o comentário e o comentário em si. Uma denúncia pode ter vários comentários e cada comentário e exclusivo de uma denúncia.
Por fim, haverá uma verificação da denúncia e dos comentários para validar se tais informações poderão ser expostas no canal de denúncias.

##Modelo Arquitetura

![image](https://github.com/wallyson123/denunciaCerta/assets/26144781/ac455b9e-3c02-4be0-a3f1-11febc9dcd53)


[Visitar Link](https://miro.com/app/board/uXjVMjrZS3M=/?share_link_id=228068905249)
