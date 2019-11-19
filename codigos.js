//inserir coordenador
function salvar_coor() {
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/usuario',
        data: {
            'matricula': $('#matricula_coor').val(),
            'nome': $('#nome_coor').val(),
            'curso': $('#curso_coor').val(),
            'tipo': $('#tipo_coor').val(),
            'login': $('#login_coor').val(),
            'senha': $('#senha_coor').val(),

        },
        success: function (dados) {
            console.log(dados);
            $('#saida_coor').text(`Coordenador inserido com sucesso`);
        },
        error: function (dados) {
            console.log(dados);
            $('#saida_coor').text(`Coordenador inserido sem sucesso`);
        }
    })
}
//consultar coordenador
function ver_coor() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/usuario',
        success: function (dados) {
            for (let i in dados) {
                $('#saida_coor').append(
                    `<fieldset><table border='1'>
                        <tr>
                            <td>${dados[i].id_usuario}</td> 
                            <td>${dados[i].matricula}</td>
                            <td>${dados[i].nome}</td> 
                            <td>${dados[i].semestre}</td> 
                            <td>${dados[i].horas_acum}</td>
                            <td>${dados[i].tipo}</td> 
                            <td>${dados[i].CPF}</td>
                            <td>${dados[i].login_user}</td> 
                            <td>${dados[i].id_cursos_user}</td>
                        
                        </tr>
                    </table></fieldset>`)
                    //dados do banco de dados
                console.log(dados[i]);
            }
        },
        error: function (dados) {
            console.log(dados);
        }
    })
}
//deletar coordenador
function del_coor() {
    $.ajax({
        type: 'DELETE',
        url: 'http://localhost:3000/usuario',
        data: {
            'id': $('#curso_coor').val(),
        },
        success: function (dados) {
            console.log(dados);
            $('#saida_coor').text(`Coordenador Removido com sucesso`);
        },
        error: function (dados) {
            console.log(dados);
            $('#saida_coor').text(`Coordenador Removido sem sucesso`);
        }
    })
}


//cursos
function verCursos() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/cursos',
        success: function (dados) {
            for (let i in dados) {
                $('.tCurso').eq(0).html('<table><tr><td>Nome do Curso</td><td>Carga Horária Máxima</td></tr></table>')
                $('.tCurso').eq(1).append(
                    `<fieldset><table>
                        <tr>
                            <td>${dados[i].nome_curso}</td>
                            <td>${dados[i].carga_hor_max}</td>
                        </tr>
                    </table></fieldset>`)
                console.log(dados[i]);
            }
        },
        error: function (dados) {
            console.log(dados);
        }
    })
}
function ordernarCursos() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/cursosOrder',
        success: function (dados) {
            for (let i in dados) {
                $('.tCurso').eq(1).append(
                    `<table>
                        <tr>
                            <td>${dados[i].id_cursos}</td>
                            <td>${dados[i].nome_curso}</td>
                            <td>${dados[i].carga_hor_max}</td>
                        </tr>
                    </table>`)
                console.log(dados[i]);
            }
        },
        error: function (dados) {
            console.log(dados);
        }
    })
}
function inserirCursos() {
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/cursos',
        data: {
            'id': $('#id_cursos').val(),
            'nome': $('#nome_curso').val(),
            'carga': $('#carga_hor_max').val(),
        },
        success: function (dados) {
            console.log(dados);
            $('#mensagem').text(`Curso inserido com sucesso`);
        },
        error: function (dados) {
            console.log(dados);
            $('#mensagem').text(`Curso inserido sem sucesso`);
        }
    })
}
function atualizarCurso() {
    $.ajax({
        type: 'PUT',
        url: 'http://localhost:3000/cursos',
        data: {
            'id': $('#id_cursos').val(),
            'nome': $('#nome_curso').val(),
            'carga': $('#carga_hor_max').val(),
        },
        success: function (dados) {
            console.log(dados);
            $('#mensagem').text(`Curso Atualizado com sucesso`);
        },
        error: function (dados) {
            console.log(dados);
            $('#mensagem').text(`Curso Atualizado sem sucesso`);
        }
    })
}
function removerCurso() {
    $.ajax({
        type: 'DELETE',
        url: 'http://localhost:3000/cursos',
        data: {
            'id': $('#id_cursos').val(),
            'nome': $('#nome_curso').val(),
            'carga': $('#carga_hor_max').val(),
        },
        success: function (dados) {
            console.log(dados);
            $('#mensagem').text(`Curso Removido com sucesso`);
        },
        error: function (dados) {
            console.log(dados);
            $('#mensagem').text(`Curso Removido sem sucesso`);
        }
    })
}
